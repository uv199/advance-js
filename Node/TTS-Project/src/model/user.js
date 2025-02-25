import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
let userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "Please provide first name"],
    },
    lastName: {
      type: String,
      require: [true, "Please provide last name"],
    },
    email: {
      type: String,
      require: [true, "Please provide email"],
      trim: true,
      lowerCase: true,
      validator: {
        validate: (value) => validator.isEmail(value),
        message: "Email is not propers",
      },
    },
    contactNo: {
      type: String,
      require: [true, "Please provide number"],
      trim: true,
      validator: {
        validate: (value) => validator.isMobilePhone(value),
        message: "Phone number is not propers",
      },
    },
    password: {
      type: String,
      require: [true, "Please provide password"],
      validator: {
        validate: (value) => validator.isStrongPassword(value),
        message: "Password is not propers",
      },
    },
    DOB: {
      type: Date,
      validator: {
        validate: (value) => {
          let isMatch = validator.isDate(value);
          // let
          // value = DOB
          // current date = Date.now()
          // gap check
          return isMatch && gap > 18;
        },
        message: "Password is not propers",
      },
    },
    // coordinates: {
    //   type: {
    //     type: ["Point"],
    //     required: true,
    //   },
    //   coordinates: {
    //     type: [Number],
    //     required: true,
    //   },
    // },
    address: {
      line: String,
      city: String,
      state: String,
      country: String,
      pinCode: String,
    },
    followers: { type: Number, default: 0 },
    postCount: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    caption: String,
    profilePic: String,
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// userSchema.index({ coordinates: "2dsphere" });

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    console.log("----->");
    this.password = await bcrypt.hash(this.password, 12);
  }
});

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("user", userSchema);

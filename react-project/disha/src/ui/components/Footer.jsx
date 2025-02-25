import { Instagram, Linkedin, MessageCircleMore, Twitter } from "lucide-react";
import React from "react";
import { Button, Table } from "reactstrap";

export default function Footer() {
  return (
    <footer className="bg-green-500 py-5 px-12">
      <div className="flex justify-between">
        <div className="flex flex-col drop-shadow-lg">
          <h1 className="font-bold text-white text-5xl">JOIN OUR </h1>
          <h1 className="font-bold text-white text-5xl">VEIRDO FAM</h1>
        </div>
        <div className="border rounded bg-white p-1 h-full shadow-[1px_2px_0_0_black]">
          <input className="font-thin h-full w-[400px]" placeholder="veirdo@yahoo.com" />
          <Button className="bg-purple-600">SUBSCRIBE</Button>
        </div>
      </div>
      <div className="items-start p-3 text-left">
        <p className="font-bold">SPOT US ON</p>
      </div>
      <div>
        <Table className="shadow-md">
          <thead>
            <tr className="border border-black hover:bg-[#c0d3cc]">
              <th className=" !bg-green-500 border-r p-3 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <Instagram />
                  INSTAGRAM
                </div>
              </th>
              <th className=" !bg-green-500 border-r p-3 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <Linkedin />
                  LINKEDIN
                </div>{" "}
              </th>
              <th className=" !bg-green-500 border-r p-3 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <Twitter />
                  TWITTER
                </div>
              </th>
              <th className=" !bg-green-500 border-r p-3 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <MessageCircleMore />
                  WHATSAPP
                </div>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
      <div className="grid grid-cols-3 m-3">
        <div className="Categories ">
          <p className="font-bold">CATEGORIES</p>
          <div className="flex flex-col justify-start mt-3 text-sm">
            <a href="">NEW ARRIVALS</a>
            <a href="">BESTSELLERS</a>
            <a href="">OVERSIZED T-SHIRTS</a>
            <a href="">T-SHIRTS</a>
            <a href="">UNISEX</a>
            <a href="">SHORTS & JOGGERS</a>
            <a href="">WINTER-WEAR</a>
          </div>
        </div>
        <div className="Company">
          <p className="font-bold">COMPANY</p>
          <div className="flex flex-col justify-start mt-3 text-sm">
            <a href="">ABOUT-US</a>
            <a href="">BLOG</a>
            <a href="">PRIVACY POLICY</a>
            <a href="">TERMS & CONDITIONS</a>
            <a href="">WORK WITH US</a>
          </div>
        </div>
        <div className="Customers">
          <p className="font-bold">CUSTOMERS</p>
          <div className="flex flex-col justify-start mt-3 text-sm">
            <a href="">CONTACT US</a>
            <a href="">FAQs</a>
            <a href="">SHIPPING POLICY</a>
            <a href="">REFUND POLICY</a>
            <a href="">TRACK ORDER</a>
          </div>
        </div>
      </div>
      <div>
        <marquee
          className="text-yellow-400 font-bold text-[150px]"
          scrollamount="20">
          <span>FIND YOUR FLIP SIDE</span>
          <span className="ml-[15vw]">FIND YOUR FLIP SIDE</span>
        </marquee>
      </div>
      <p className="text-sm">Copyright © VEIRDO 2023</p>
    </footer>
  );
}

import React from "react";
import FunCome from "./2.componenet/functional/FunCome";
import ClassCom from "./2.componenet/class/ClassCom";
import Home from "./3.style/Home";
import FunComState from "./4.state/FunComState";
import ClassComState from "./4.state/ClassComState";
import MapKeyCom from "./5.MapKey-Fragment/MapKeyCom";
import HomePage from "./3.style/Project/HomePage";
import PropsFunCom from "./6.Props/PropsFunCom";
import Parent from "./6.Props/propdDrilling/Parent";
import HomeAssignMent1 from "./000.task/Assignment1/Home";
import LifeCycleMethod from "./7.LifeCycleMethod/LifeCycleMethod";
import ConditionalRendaring from "./8.ConditionalRendering/ConditionalRendaring";
import LoginCondition from "./8.ConditionalRendering/LoginCondition";
import { ThemeProvider } from "@material-tailwind/react";
import UseRefCom from "./9.HOOK/useRef/UseRefCom";
import UseEffect from "./9.HOOK/useEffect/UseEffect";
import UseEffectProject from "./9.HOOK/useEffect/UseEffectProject";
import Tailwind from "./000.task/Tailwind";
import UseReducer from "./9.HOOK/useReducer/UseReducer";
import InputCom from "./10.Input/InputCom";
import LocalStorageInput from "./10.Input/LocalStorageInput";
import UseContext from "./9.HOOK/useContext/UseContext";
import InputRevise from "./10.Input/InputRevise";
import MultipleInput from "./10.Input/MultipleInput";
import RadioInput from "./10.Input/RadioInput";
import CheckBox from "./10.Input/CheckBox";
import SelectReact from "./10.Input/SelectReact";
import SearchCom from "./10.Input/SearchCom";
import FilterCom from "./10.Input/FilterCom";
import Router from "./11.router/simpleRouter/Router";
import { ToastContainer } from "react-toastify";
import UberTask from "./000.task/UberTask";
import ProtectedRoute from "./11.router/AuthRoute/ProtectedRoute";
export default function App() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center">
        {/* --------------TASK------------ */}
        {/* <HomeAssignMent1 /> */}
        {/* <Tailwind /> */}
        {/* <UberTask /> */}
        {/* --------------COMPONENET------------ */}
        {/* <FunCome /> */}
        {/* <ClassCom /> */}
        {/* -------------STYLE------------- */}
        {/* <Home /> */}
        {/* -------------STATE------------- */}
        {/* <FunComState /> */}
        {/* <ClassComState /> */}
        {/* <HomePage /> */}
        {/* -------------MAPKEY------------- */}
        {/* <MapKeyCom /> */}
        {/* -------------PROPS------------- */}
        {/* <PropsFunCom /> */}
        {/* <Parent /> */}
        {/* -------------LIFECYCLE METHOD------------- */}
        {/* <LifeCycleMethod /> */}
        {/* -------------CONDITIONAL RENDARING------------- */}
        {/* <ConditionalRendaring /> */}
        {/* <LoginCondition /> */}
        {/* -------------HOOK------------- */}
        {/* <UseRefCom /> */}
        {/* <UseEffect /> */}
        {/* <UseEffectProject /> */}
        {/* <UseReducer /> */}
        {/* <UseContext /> */}
        {/* -------------INPUT------------- */}
        {/* <InputCom /> */}
        {/* <LocalStorageInput /> */}
        {/* <InputRevise /> */}
        {/* <MultipleInput /> */}
        {/* <RadioInput /> */}
        {/* <CheckBox /> */}
        {/* <SelectReact /> */}
        {/* <SearchCom /> */}
        {/* <FilterCom /> */}
        {/* -------------ROUTER------------- */}
        {/* <Router /> */}
        <ProtectedRoute />
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
}

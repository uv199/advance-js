import React from "react";
import FunctionalCom from "./1.componenet/FunctionalCom";
import HeaderCom from "./1.componenet/HeaderCom";
import FunctionalState from "./2.State/FunctionalState";
import Page from "./3.style/Page";
import FunProps from "./4.Props/FunProps";
import MapKeyCom from "./5.MapKey/MapKeyCom";
import FragmentCom from "./5.MapKey/FragmentCom";
import InputCom from "./6.Input/InputCom";
import ConditonalCom from "./7.ConditionalRender/ConditonalCom";
import MultiInput from "./6.Input/MultiInput";
import LocalStorage from "./6.Input/LocalStorage";
import UseEffectCom from "./8.hook/UseEffectCom";
import InputLocal from "./6.Input/InputLocal";
import ProjectUseEffect from "./8.hook/ProjectUseEffect";
import ApiCall from "./6.Input/ApiCall";
import UseRefCom from "./8.hook/UseRefCom";
import UseReducer from "./8.hook/UseReducer";
import MainCom from "./8.hook/usecontext/MainCom";
import RadioCom from "./6.Input/RadioCom";
import CheckBoxCom from "./6.Input/CheckBoxCom";
import SelectData from "./6.Input/SelectData";
import Router from "./9.Routing/Router";
import AppRedux from "./10.redux/AppRedux";
import LifeCycleMethod from "./11.LifeCycleMethod/LifeCycleMethod";

export default function App() {
  return (
    <div className="d-flex justify-content-center">
      {/* <HeaderCom /> */}

      {/* ---------------------COMPONENET------------------ */}
      {/* <FunctionalCom /> */}
      {/* <FunctionalState /> */}

      {/* ---------------------STYLE------------------ */}
      {/* <Page /> */}

      {/* ---------------------PROPS------------------ */}
      {/* <FunProps /> */}

      {/* ---------------------MAP-KEY------------------ */}
      {/* <MapKeyCom /> */}

      {/* ---------------------FRAGMENT------------------ */}
      {/* <FragmentCom /> */}

      {/* ---------------------INPUT------------------ */}
      {/* <InputCom /> */}
      {/* <MultiInput/> */}
      {/* <LocalStorage /> */}
      {/* <InputLocal /> */}
      {/* <ApiCall /> */}
      {/* <RadioCom /> */}
      {/* <CheckBoxCom /> */}
      {/* <SelectData /> */}

      {/* ---------------------CONDITIONAL RENDARING------------------ */}
      {/* <ConditonalCom /> */}

      {/* ---------------------HOOK------------------ */}
      {/* <UseEffectCom /> */}
      {/* <ProjectUseEffect /> */}
      {/* <UseRefCom /> */}
      {/* <UseReducer /> */}
      {/* <MainCom /> */}

      {/* ---------------------ROUTER------------------ */}
      {/* <Router /> */}

      {/* ---------------------REDUX------------------ */}
      {/* <AppRedux /> */}
      
      {/* ---------------------LIFE CYCLE METHOD------------------ */}
      <LifeCycleMethod />
    </div>
  );
}

/* */

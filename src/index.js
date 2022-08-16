import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mms from "./rmodal";
import ArModalNoButton from "./arModalNoButton";
import "@trendmicro/react-modal/dist/react-modal.css";
import "./styles.css";
import Modal from "./antModal";
import ArModal from "./arModal";
const rootElement = document.getElementById("root");
const data = {
  showStatus: true,
  title: "Ar Modal No Button",
  component: "test component",
  // footer: "footer",
  id: "id-1",
  titleId: "id-2"
};
const data2 = {
  modalId: "id-1",
  text: "Ar Modal",
  handleSave: () => null,
  title: "Ar Modal",
  titleButton1: "Close",
  titleButton2: "Save",
  variant1: undefined,
  variant2: undefined,
  disableButton2: false,
  hideButton2: false,
  renderNode: handleClick => <button onClick={handleClick}>ArModal</button>
};
ReactDOM.render(
  <div>
    -- package 1 with rnd library for moving
    <Mms oneOrTwo={1} nameStuff={"Movable Minimizable Modal"} />
    --- package 1 without rnd library
    <Mms oneOrTwo={3} nameStuff={"Minimizable Modal, not movable"} />
    -- package 2
    <br />
    <Modal />
    <br />
    <br />
    <ArModalNoButton
      {...data}
      renderNode={handleClick => {
        return (
          <button className="btb" onClick={handleClick}>
            ArModalNoButton
          </button>
        );
      }}
    />
    <br />
    <br />
    <ArModal {...data2} />
  </div>,
  rootElement
);

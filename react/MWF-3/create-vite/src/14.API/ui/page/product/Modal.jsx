import React, { useState } from "react";
import {
  Button,
  Modal as ReactModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import ProductForm from "./ProductForm";

export default function Modal({
  modal,
  toggle,
  productData,
  updateHandler,
  submitHandler,
}) {
  return (
    <div>
      <ReactModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <ProductForm
            updateHandler={updateHandler}
            productData={productData}
            toggle={toggle}
            submitHandler={submitHandler}
          />
        </ModalBody>
      </ReactModal>
    </div>
  );
}

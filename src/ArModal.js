import React, { Component } from "react";
import Rnd from "react-rnd";
import { AutoSizer } from "react-virtualized";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const style = {
  minHeight: "10px"
};

/**
 * this modal has multiple purposes as it can be put on any page
 * current being used to save changes
 * @param {boolean} showStatus - dictates if the modal should show or not
 * @param {function} handleClose - handler that dictates if the modal should show or nah
 * @param {string} text - text to be displated in the modal's body
 */
const ArModal = ({
  modalId,
  showStatus,
  handleClose,
  text,
  handleSave,
  title,
  titleButton1,
  titleButton2,
  variant1,
  variant2,
  disableButton2,
  hideButton2
}) => {
  return (
    <Rnd
      default={{
        y: 150,
        x: 150,
        height: 400,
        width: 400
      }}
      minWidth={400}
      minHeight={400}
      bounds="window"
    >
      <Modal.Dialog show={showStatus} id={modalId}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>{title ? title : "Please confirm updates."}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="saveChangestxt" style={style}>
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant={variant2 ? variant2 : "success"}
            onClick={handleSave}
            disabled={disableButton2 ? true : false}
            hidden={hideButton2}
          >
            {titleButton2 ? titleButton2 : "Save Changes"}
          </Button>
          <Button
            variant={variant1 ? variant1 : "danger"}
            onClick={handleClose}
          >
            {titleButton1 ? titleButton1 : "Close"}
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Rnd>
  );
};

ArModal.propTyoes = {
  modalId: PropTypes.string,
  showStatus: PropTypes.bool,
  handleClose: PropTypes.func,
  text: PropTypes.node,
  handleSave: PropTypes.func,
  title: PropTypes.node,
  titleButton1: PropTypes.node,
  titleButton2: PropTypes.node,
  variant1: PropTypes.string,
  variant2: PropTypes.string,
  disableButton2: PropTypes.bool,
  hideButton2: PropTypes.bool
};

export default ArModal;

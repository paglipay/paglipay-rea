import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import Modal, {
  ModalProvider,
  ModalRoot,
  ModalConsumer
} from "@trendmicro/react-modal";
import Rnd from "react-rnd";
import Icon from "react-icons-kit";
import { iosMinusEmpty } from "react-icons-kit/ionicons/iosMinusEmpty";
import "@trendmicro/react-modal/dist/react-modal.css";
import PropTypes from "prop-types";

const ViewModal = ({ onClose, ...props }) => {
  const [isMinized, minimize] = useState(false);
  const setMinimize = () => minimize(!isMinized);
  const {
    modalId,
    text,
    handleSave,
    title,
    titleButton1,
    titleButton2,
    variant1,
    variant2,
    disableButton2,
    hideButton2,
    x,
    y,
    w,
    h
  } = props;
  return (
    <Rnd
      default={{
        y: x ? x : 150,
        x: y ? y : 150,
        minHeight: h,
        minWidth: w
      }}
      minWidth={w}
      minHeight={h}
      bounds="window"
    >
      <Modal onClose={onClose} {...props} id={modalId}>
        <Modal.Header>
          <Modal.Title>
            <div className="d-flex justify-content-between">
              <div>{title ? title : "Please confirm updates."}</div>
              <div className="d-flex pb-2 justify-content-end">
                <Icon
                  className="modal-icon-minimize"
                  icon={iosMinusEmpty}
                  size={24}
                  onClick={setMinimize}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="saveChangestxt"
          hidden={isMinized}
          onMouseDown={e => e.stopPropagation()}
        >
          {text}
        </Modal.Body>
        <Modal.Footer hidden={isMinized} className="z-plus">
          <Button
            variant={variant2 ? variant2 : "success"}
            onClick={handleSave}
            disabled={disableButton2 ? true : false}
            hidden={hideButton2}
          >
            {titleButton2 ? titleButton2 : "Save Changes"}
          </Button>
          <Button variant={variant1 ? variant1 : "danger"} onClick={onClose}>
            {titleButton1 ? titleButton1 : "Close"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Rnd>
  );
};
const ArModal = props => {
  const { renderNode, ...rest } = props;
  return (
    <Fragment>
      <ModalProvider disableOverlayClick={true} showOverlay={false}>
        <ModalRoot />
        <ModalConsumer>
          {({ openModal }) => {
            const handleClick = e => openModal(ViewModal, rest);
            return renderNode(handleClick);
          }}
        </ModalConsumer>
      </ModalProvider>
    </Fragment>
  );
};
ArModal.propTyoes = {
  modalId: PropTypes.string,
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

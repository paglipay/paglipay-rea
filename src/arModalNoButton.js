import React, { Fragment, useState } from "react";
import { FormGroup } from "react-bootstrap";
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

const ArModal = ({ onClose, ...props }) => {
  const [isMinized, minimize] = useState(false);
  const setMinimize = () => minimize(!isMinized);
  const { title, component, id, titleId, x, y, w, h } = props;
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
      <Modal onClose={onClose} {...props} id={id}>
        <Modal.Header>
          <Modal.Title id={titleId} className="ar-modal-title">
            <div className="d-flex justify-content-between">
              <div>{title}</div>
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
        <Modal.Body hidden={isMinized} onMouseDown={e => e.stopPropagation()}>
          {component}
        </Modal.Body>
      </Modal>
    </Rnd>
  );
};

const ArModalNoButton = props => {
  const { renderNode, ...rest } = props;
  return (
    <Fragment>
      <FormGroup>
        <ModalProvider disableOverlayClick={true} showOverlay={false}>
          <ModalRoot />
          <ModalConsumer>
            {({ openModal }) => {
              const handleClick = e => openModal(ArModal, rest);
              return renderNode(handleClick);
            }}
          </ModalConsumer>
        </ModalProvider>
      </FormGroup>
    </Fragment>
  );
};
ArModalNoButton.propTypes = {
  showStatus: PropTypes.bool,
  title: PropTypes.node,
  component: PropTypes.node,
  footer: PropTypes.node,
  id: PropTypes.string,
  titleId: PropTypes.string,
  hideFn: PropTypes.func
};

export default ArModalNoButton;

import React, { Fragment, useState } from "react";
import { Button, FormGroup } from "react-bootstrap";
import Modal, {
  ModalProvider,
  ModalRoot,
  ModalConsumer
} from "@trendmicro/react-modal";
import Rnd from "react-rnd";
import Icon from "react-icons-kit";
import { iosMinusEmpty } from "react-icons-kit/ionicons/iosMinusEmpty";

const nameStuff1 = (
  <div>
    <b>PROS </b> <br />
    - user can move the modal <br />
    - user can use a modal <br />- <b>User can use still click outside</b>{" "}
    <br />
    <br />
    <b>CONS </b> <br />- hard to get focus inside(doable)
  </div>
);
const nameStuff2 = (
  <div>
    <b>PROS </b> <br />
    - user can use a modal <br />
    - easy to get focus inside <br />-<b>
      User can use still click outside
    </b>{" "}
    <br />
    <br />
    <b>CONS </b> <br />
    - not movable <br />
  </div>
);
const MyModal = ({ onClose, ...props }) => {
  const [isMinized, minimize] = useState(false);
  const setMinimize = () => minimize(!isMinized);
  console.log(props);
  return (
    <Rnd
      default={{
        y: 150,
        x: 150
      }}
      bounds="window"
    >
      <Modal onClose={onClose} {...props}>
        <Modal.Header>
          <Modal.Title>
            <div className="d-flex justify-content-between">
              <div>Title</div>
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
          {nameStuff1}
          <input />
          <input />
          <input />
        </Modal.Body>
        <Modal.Footer hidden={isMinized} className="z-plus">
          <Button onClick={onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* ); */}
    </Rnd>
    //     )}
    //   </AutoSizer>
  );
};

const MyModal2 = ({ onClose, ...props }) => {
  const [isMinized, minimize] = useState(false);
  const setMinimize = () => minimize(!isMinized);
  return (
    <Modal onClose={onClose} {...props}>
      <Modal.Header>
        <Modal.Title>
          <div className="d-flex justify-content-between">
            <div>Title</div>
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
      <Modal.Body hidden={isMinized} className="z-plus">
        {nameStuff2}
        <input />
      </Modal.Body>
      <Modal.Footer hidden={isMinized} className="z-plus">
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default props => {
  const { oneOrTwo, nameStuff } = props;
  return (
    <Fragment>
      <FormGroup>
        <ModalProvider
          modal={"boo"}
          disableOverlayClick={true}
          showOverlay={false}
        >
          <ModalRoot />
          <ModalConsumer>
            {({ openModal, ...rest }) => {
              console.log("rest", rest);
              const modal = oneOrTwo === 1 ? MyModal : MyModal2;
              const handleClick = e => openModal(modal);
              return <Button onClick={handleClick}>{nameStuff}</Button>;
            }}
          </ModalConsumer>
        </ModalProvider>
      </FormGroup>
    </Fragment>
  );
  // return "haha"
};

export const ArModalNoButton = props => {
  const {
    renderNode,
    showStatus,
    title,
    component,
    footer,
    id,
    hideFn,
    titleId
  } = props;
  const data = { showStatus, title, component, footer, id, hideFn, titleId };
  return (
    <Fragment>
      <FormGroup>
        <ModalProvider
          modal={"boo"}
          disableOverlayClick={true}
          showOverlay={false}
        >
          <ModalRoot />
          <ModalConsumer>
            {({ openModal, ...rest }) => {
              console.log("rest", rest);
              const handleClick = e => openModal(MyModal, data);
              return renderNode(handleClick);
            }}
          </ModalConsumer>
        </ModalProvider>
      </FormGroup>
    </Fragment>
  );
};

import React, { useState, useCallback } from "react";
import { Button } from "react-bootstrap";
import {
  DraggableModal,
  DraggableModalProvider
} from "ant-design-draggable-modal";
import "antd/dist/antd.css";
import "ant-design-draggable-modal/dist/index.css";

const ModalWithButton = () => {
  const [visible, setVisible] = useState(false);
  const onOk = useCallback(() => setVisible(true), []);
  const onCancel = useCallback(() => setVisible(false), []);
  return (
    <React.Fragment>
      <Button onClick={onOk}>Resizeable, Movable Modal</Button>
      <DraggableModal visible={visible} onOk={onOk} onCancel={onCancel}>
        <div>
          <b>PROS </b> <br />
          - user can move the modal <br />
          - user can resize the modal <br />
          - user can use a modal <br />- <b>User can use still click outside</b>
          <br />
          - could be made minimizable
          <br />
          <br />
          <b>CONS </b> <br />- has a dependency whose package size is 4Mb
        </div>
      </DraggableModal>
    </React.Fragment>
  );
};

// DraggableModalProvider manages the zIndex
// of DraggableModals rendered beneath it.
const App = () => (
  <DraggableModalProvider>
    <ModalWithButton />
  </DraggableModalProvider>
);

export default App;

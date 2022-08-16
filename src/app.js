import React, { useState } from "react";
import Rnd from "react-rnd";
import { AutoSizer } from "react-virtualized";
import ArModal from "./ArModal";
import { Button } from "react-bootstrap";
const title = (
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img
          src="https://avatars1.githubusercontent.com/u/10220449?v=3&s=460"
          draggable="false"
          alt="github avatar"
        />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>bokuweb</strong> <small>@bokuweb17</small> <small>31m</small>
        </p>
      </div>
    </div>
  </article>
);
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <ArModal
        modalId="my-modal"
        showStatus={show}
        handleClose={handleClose}
        text={`Woohoo, you're reading this text in a modal!`}
        handleSave={() => null}
        title={title}
      />
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    </React.Fragment>
  );
}

export default Example;

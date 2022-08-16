import React from "react";
import DnR from "react-dnr";

import { OSXTheme, WindowsTheme } from "../modules/themes";
const paneStyle = {
  width: "80%",
  height: "50%",
  top: "25%",
  left: "10%",
  backgroundColor: "rgba(0, 0, 0, 0.2)"
};

const buttonStyle = {
  paddingLeft: 10,
  textAlign: "center"
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimize: false
    };
    this.OSX = OSXTheme({
      title: "OSX Theme",
      onClose: () => this.refs.subdnr.minimize(),
      onMinimize: () => this.refs.subdnr.minimize(),
      onMaximize: () => this.refs.subdnr.maximize()
    });
    this.Windows = WindowsTheme({
      title: "React DnR",
      onClose: () => this.refs.dnr.minimize(),
      onMinimize: () => this.refs.dnr.minimize(),
      onMaximize: () => this.refs.dnr.maximize()
    });
  }
  render() {
    return (
      <div
        style={{
          background: "#3a7bd5",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundImage: `url(${require("../img/bg1.png")})`
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            verticalAlign: "baseline",
            padding: 10
          }}
        >
          <button style={buttonStyle} onClick={() => this.refs.dnr.minimize()}>
            minimize
          </button>
          <button style={buttonStyle} onClick={() => this.refs.dnr.maximize()}>
            maximize
          </button>
          <button style={buttonStyle} onClick={() => this.refs.dnr.restore()}>
            restore
          </button>
        </div>
        <DnR
          ref="dnr"
          {...this.Windows}
          cursorRemap={c => (c === "move" ? "default" : null)}
          style={paneStyle}
        >
          <button onClick={() => this.refs.subdnr.minimize()}>minimize</button>
          <button
            onClick={() =>
              this.refs.subdnr.transform({
                top: 0,
                left: 0,
                width: this.refs.dnr.getFrameRect().width,
                height: this.refs.dnr.getFrameRect().height
              })
            }
          >
            maximize
          </button>
          <button onClick={() => this.refs.subdnr.restore()}>restore</button>
          <DnR
            ref="subdnr"
            {...this.OSX}
            cursorRemap={c => (c === "move" ? "default" : null)}
            style={paneStyle}
            boundary={{ top: 0 }}
          >
            content
          </DnR>
        </DnR>
      </div>
    );
  }
}

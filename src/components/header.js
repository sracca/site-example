import React from "react";
import { HeaderImage } from "../styles/components/header";

export default class extends React.Component {
  render() {
    return (
      <div>
        <HeaderImage src={require("../constants/images/logo.png")} />
      </div>
    );
  }
}

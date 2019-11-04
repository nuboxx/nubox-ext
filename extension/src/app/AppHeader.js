import React from "react";

import { Card } from "react-bootstrap";

import LogoImg from "../assets/logo_128x128.png";

import "./AppHeader.css";

import config from "../config.json";

const AppHeader = props => (
  <Card.Header>
    <img
      className="card-img-top"
      src={LogoImg}
      style={{ width: "32px", height: "32px" }}
      alt=""
    />
    <span>&nbsp;{config.app.name}</span>
    <span className="online">
      <span className="dot online-dot"></span>&nbsp;Online
    </span>
    <span className="offline">
      <span className="dot offline-dot"></span>&nbsp;Offline
    </span>
  </Card.Header>
);

export default AppHeader;

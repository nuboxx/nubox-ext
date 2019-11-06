import React from "react";

import { Card } from "react-bootstrap";

import { AppCard, AppCardHeader } from "../pages/home";
import { DataConsumer } from "../utils/DataProvider";

import LogoImg from "../assets/logo_128.png";

import "./AppHeader.css";
import bootstrap from "../assets/css/bootstrap.module.css";

import config from "../config.json";

const Header = () => (
  <div>
    <img
      className="card-img-top"
      src={LogoImg}
      style={{ width: "32px", height: "32px" }}
      alt=""
    />
    <span>&nbsp;&nbsp;{config.app.name}</span>
    <span className="online">
      <span className="dot online-dot"></span>&nbsp;Online
    </span>
    <span className="offline">
      <span className="dot offline-dot"></span>&nbsp;Offline
    </span>
  </div>
);

const AppHeader = props => (
  <DataConsumer>
    {ctx =>
      ctx.page === "home" ? (
        <Card.Header className={bootstrap["card-header"]}>
          <Header />
        </Card.Header>
      ) : (
        <Card.Header
          style={{ padding: "0" }}
          className={bootstrap["card-header"]}
        >
          <AppCard
            buttonText={<AppCardHeader icon="angle-left" text="Back" />}
            onClick={() => ctx.setPage("home")}
          />
        </Card.Header>
      )
    }
  </DataConsumer>
);

export default AppHeader;

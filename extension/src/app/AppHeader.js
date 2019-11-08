import React from "react";

import cx from "classnames";
import { Card } from "react-bootstrap";

import AppItems from "./AppItems";
import { AppCard, AppCardHeader } from "../pages/home";
import { DataConsumer } from "../utils/DataProvider";

import LogoImg from "../assets/logo_128.png";

import css from "./AppHeader.module.css";
import appCss from "../index.module.css";

import config from "../config.json";

const Header = () => (
  <div>
    <img src={LogoImg} style={{ width: "32px", height: "32px" }} alt="" />
    <span style={{ position: "relative", top: "-10px" }}>
      &nbsp;&nbsp;{config.app.name}
    </span>
    <span className={css.online}>
      <span className={cx(css.dot, css["online-dot"])}></span>&nbsp;Online
    </span>
    <span className={css.offline}>
      <span className={cx(css.dot, css["offline-dot"])}></span>&nbsp;Offline
    </span>
  </div>
);

const items = [
  { label: "hello1", bvk: "bvk1" },
  { label: "hello2", bvk: "bvk2" },
  { label: "hello3", bvk: "bvk3" },
  { label: "hello4", bvk: "bvk4" },
  { label: "hello5", bvk: "bvk5" }
];

const AppHeader = props => (
  <DataConsumer>
    {ctx =>
      ctx.page === "home" ? (
        <div>
          <Card.Header className={appCss["nubox-card-header"]}>
            <Header />
          </Card.Header>
          <AppItems items={items} />
        </div>
      ) : (
        <Card.Header
          style={{ padding: "0" }}
          className={appCss["nubox-card-header"]}
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

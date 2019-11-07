import React, { useState, useEffect } from "react";

import { MDBIcon } from "mdbreact";
import { Card } from "react-bootstrap";
import ScrollArea from "react-scrollbar";

import Extension from "../utils/Extension";

import css from "./AppItems.module.css";
import appCss from "../index.module.css";

const AppItem = ({ img }) => (
  <Card.Header className={appCss["nubox-card-header"]}>
    {img ? (
      <img width="30" src={img} alt="" />
    ) : (
      <MDBIcon icon="shield-alt" style={{ fontSize: "30px" }} />
    )}
  </Card.Header>
);

const AppItems = props => {
  const [img, setImg] = useState("");

  useEffect(() => {
    Extension.getFavicon()
      .then(setImg)
      .catch(console.error);
  }, []);

  return (
    <ScrollArea
      speed={0.8}
      className={css["nubox-scrollarea"]}
      smoothScrolling={true}
      horizontal={false}
      minScrollSize
    >
      <Card.Header
        className={appCss["nubox-card-header"]}
        style={{ padding: "0" }}
      >
        <AppItem img={img} />
        <AppItem img={img} />
        <AppItem img={img} />
        <AppItem img={img} />
      </Card.Header>
    </ScrollArea>
  );
};

export default AppItems;

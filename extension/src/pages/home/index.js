import React, { useContext } from "react";

import cx from "classnames";
import { MDBIcon } from "mdbreact";
import { Button, Card, Row, Col } from "react-bootstrap";

import { DataContext } from "../../utils/DataProvider";

import bootstrap from "../../assets/css/bootstrap.module.css";
import mdb from "../../assets/css/mdb.module.css";
import css from "./index.module.css";

const AppCard = ({ buttonText, onClick }) => (
  <Card className={cx(bootstrap.card, css.card)}>
    <Card.Header className={cx(mdb["card-header"], css["card-header"])}>
      <Button
        variant="link"
        onClick={onClick}
        className={cx(mdb.btn, mdb["btn-link"], css["btn-link"])}
      >
        {buttonText}
      </Button>
    </Card.Header>
  </Card>
);

const AppCardHeader = ({ icon, text }) => (
  <Row className={bootstrap.row}>
    <Col
      md="2"
      className={cx(bootstrap["col-md-2"], bootstrap["text-right"])}
      style={{ flex: "0 0 19%", maxWidth: "19%" }}
    >
      <MDBIcon icon={icon} />
    </Col>
    <Col
      md="10"
      className={cx(bootstrap["col-md-10"], bootstrap["text-left"])}
      style={{ flex: "0 0 81%", maxWidth: "81%" }}
    >
      {text}
    </Col>
  </Row>
);

const Home = props => {
  const items = [
    { icon: "home", text: "Get Bob's keys", page: "bob" },
    { icon: "lock", text: "Encrypt", page: "encrypt" },
    { icon: "lock-open", text: "Decrypt", page: "decrypt" },
    { icon: "check", text: "Grant", page: "grant" },
    { icon: "times", text: "Revoke", page: "revoke" }
  ];

  const ctx = useContext(DataContext);

  return (
    <div>
      {items.map(({ icon, text, page }, index) => (
        <AppCard
          key={index}
          buttonText={<AppCardHeader icon={icon} text={text} />}
          onClick={() => ctx.setPage(page)}
        />
      ))}
    </div>
  );
};

export default Home;
export { AppCard, AppCardHeader };

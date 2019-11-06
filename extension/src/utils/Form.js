import React from "react";

import cx from "classnames";
import { MDBInput } from "mdbreact";
import { Button, Card, Row, Col } from "react-bootstrap";

import FormDate from "./FormDate";

import "./Form.css";
import appCss from "../index.module.css";
import mdb from "../assets/css/mdb.module.css";

const toCapitalize = text => {
  const e = text.split("_");

  let result = "";
  for (const key of e) {
    result += key.charAt(0).toUpperCase() + key.slice(1) + " ";
  }

  return result.slice(0, result.length - 1);
};

const Form = ({
  keys,
  onChange,
  onClick,
  autofillClick,
  buttonText,
  disabledKey,
  autofill,
  disabled
}) => (
  <Card style={{ boxShadow: "none" }} className={mdb.card}>
    <Card.Body className={appCss["card-body"]}>
      {Object.keys(keys).map((key, index) =>
        key.indexOf("expire") !== -1 ? (
          <FormDate
            key={key}
            date={keys[key]}
            setDate={date => onChange(key, date)}
            label={toCapitalize(key)}
          />
        ) : (
          <MDBInput
            key={index}
            size="sm"
            label={toCapitalize(key)}
            value={keys[key]}
            disabled={disabledKey && disabledKey.includes(key)}
            onChange={e => onChange(key, e.target.value, e.target)}
          />
        )
      )}
      <Row className={appCss.row}>
        <Col className={cx(appCss.col, appCss["pr-0"])}>
          <Button
            variant="success"
            style={{ margin: "0", padding: "7px 25px" }}
            className={cx(mdb.btn, mdb["btn-success"])}
            disabled={disabled ? disabled : false}
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </Col>
        {autofill === true ? (
          <Col className={cx(appCss.col, appCss["pl-0"])}>
            <Button
              variant="outline-success"
              style={{ margin: "0", padding: "5px 10px" }}
              className={cx(mdb.btn, mdb["btn-outline-success"])}
              onClick={autofillClick}
            >
              Autofill Bob
            </Button>
          </Col>
        ) : null}
      </Row>
    </Card.Body>
  </Card>
);

export default Form;

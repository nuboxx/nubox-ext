import React from "react";

import { MDBInput, MDBBtn } from "mdbreact";
import { Button, Row, Col } from "react-bootstrap";

const toCapitalize = text => {
  const e = text.split("_");

  let result = "";
  for (const key of e) {
    result += key.charAt(0).toUpperCase() + key.slice(1) + " ";
  }

  return result.slice(0, result.length - 1);
};

const Form = ({ keys, onChange, buttonText, disabledKey, autofill }) => (
  <div>
    {Object.keys(keys).map((key, index) => (
      <MDBInput
        key={index}
        size="sm"
        label={toCapitalize(key)}
        state={keys[key]}
        disabled={key === disabledKey ? true : false}
        onChange={e => onChange(key, e.target.value)}
      />
    ))}
    <Row>
      <Col className="pr-0">
        <Button variant="success" style={{ margin: "0", padding: "7px 25px" }}>
          {buttonText}
        </Button>
      </Col>
      {autofill === true ? (
        <Col className="pl-0">
          <MDBBtn
            outline
            color="success"
            style={{ margin: "0", padding: "5px 15px" }}
          >
            Autofill Bob
          </MDBBtn>
        </Col>
      ) : null}
    </Row>
  </div>
);

export default Form;

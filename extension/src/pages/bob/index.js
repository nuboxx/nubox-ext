import React, { useContext } from "react";

import { Card } from "react-bootstrap";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Bob = props => {
  const ctx = useContext(DataContext);

  const onChange = (key, value) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.bob[key] = value;

      return e;
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form
          onChange={onChange}
          keys={ctx.input.bob}
          buttonText="Get Bob's keys"
        />
      </Card.Body>
    </Card>
  );
};

export default Bob;

import React, { useContext } from "react";

import { Card } from "react-bootstrap";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Encrypt = props => {
  const ctx = useContext(DataContext);

  const onChange = (key, value) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.encrypt[key] = value;

      return e;
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form
          onChange={onChange}
          keys={ctx.input.encrypt}
          buttonText="Encrypt"
          disabledKey="encrypted"
        />
      </Card.Body>
    </Card>
  );
};

export default Encrypt;

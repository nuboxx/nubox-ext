import React, { useContext } from "react";

import { Card } from "react-bootstrap";

import Form from "../../utils/Form";
import { DataContext } from "../../utils/DataProvider";

const Decrypt = props => {
  const ctx = useContext(DataContext);

  const onChange = (key, value) => {
    ctx.setInput(input => {
      let e = { ...input };
      e.decrypt[key] = value;

      return e;
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form
          onChange={onChange}
          keys={ctx.input.decrypt}
          buttonText="Decrypt"
          disabledKey="plaintext"
        />
      </Card.Body>
    </Card>
  );
};

export default Decrypt;

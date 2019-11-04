import React from "react";

import { MDBIcon } from "mdbreact";
import { Accordion, Button, Card, Row, Col } from "react-bootstrap";

import "./AppBody.css";

const AppCard = ({ eventKey, buttonText, children }) => (
  <Card>
    <Card.Header className="card-header">
      <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
        {buttonText}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>{children}</Card.Body>
    </Accordion.Collapse>
  </Card>
);

const AppCardHeader = ({ icon, text }) => (
  <Row>
    <Col
      md="2"
      className="text-right"
      style={{ flex: "0 0 19%", maxWidth: "19%" }}
    >
      <MDBIcon icon={icon} />
    </Col>
    <Col
      md="10"
      className="text-left"
      style={{ flex: "0 0 81%", maxWidth: "81%" }}
    >
      {text}
    </Col>
  </Row>
);

const AppBody = props => (
  <Accordion className="accordion">
    <AppCard
      eventKey="0"
      buttonText={<AppCardHeader icon="home" text="Get Bob's keys" />}
    >
      Hello1
    </AppCard>
    <AppCard
      eventKey="1"
      buttonText={<AppCardHeader icon="lock" text="Encrypt" />}
    >
      Hello2
    </AppCard>
    <AppCard
      eventKey="2"
      buttonText={<AppCardHeader icon="lock-open" text="Decrypt" />}
    >
      Hello3
    </AppCard>
    <AppCard
      eventKey="3"
      buttonText={<AppCardHeader icon="check" text="Grant" />}
    >
      Hello4
    </AppCard>
    <AppCard
      eventKey="4"
      buttonText={<AppCardHeader icon="times" text="Revoke" />}
    >
      Hello5
    </AppCard>
  </Accordion>
);

export default AppBody;

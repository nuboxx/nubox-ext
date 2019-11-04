import React from "react";

import { Card, ListGroup } from "react-bootstrap";

import AppHeader from "./AppHeader";
import AppBody from "./AppBody";

import config from "../config.json";

const App = props => (
  <Card style={{ width: "300px" }}>
    <AppHeader />
    <AppBody />
    <ListGroup variant="flush" style={{ fontSize: "14px" }}>
      <ListGroup.Item>
        &copy; Robin Thomas |{" "}
        <a href={config.app.github} rel="noopener noreferrer" target="_blank">
          Github
        </a>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default App;

import React, { useContext } from "react";

import getComponent from "./Component";
import { DataContext } from "../utils/DataProvider";

const AppBody = props => {
  const ctx = useContext(DataContext);

  return <div className="nuboxx">{getComponent(ctx.page)}</div>;
};

export default AppBody;

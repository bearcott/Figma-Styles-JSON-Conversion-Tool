import * as React from "react";
import { App } from "./App";

import "react-figma/rpc";
import { render } from "react-figma";
import reactDOM from "react-dom";

render(<App />);

reactDOM.render(<App />, document.getElementById("lol"));

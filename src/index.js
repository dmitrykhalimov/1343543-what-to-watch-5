import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const DetailsPromo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

ReactDOM.render(
    <App
      details={DetailsPromo}
    />,
    document.querySelector(`#root`)
);

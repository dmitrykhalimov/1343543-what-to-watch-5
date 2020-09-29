import React from "react";
import PageMain from "../page-main/page-main";

const App = (props) => {
  console.log(props);
  const {details} = props;
  return (
    <PageMain
      details = {details}
    />
  );
};

export default App;

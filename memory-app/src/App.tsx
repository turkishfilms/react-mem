import { useState } from "react";

import Title from "./components/Title";
import Button from "./components/Button";
import SettingsMenu from "./components/SettingsMenu";

const App = () => {
  const [optionsShow, setOptionsShow] = useState(false);
  const handleSettingsButton = () => {
    console.log("yo");

    setOptionsShow(optionsShow ? false : true);
  };
  const handleGenerateButton = () => {
    console.log("butting");
  };
  return (
    <div>
      <Title>Memory Improving Powerful Web App</Title>

      <Button color="secondary" onClick={handleSettingsButton}>
        OPTIONS
      </Button>
      <Button color="primary" onClick={handleGenerateButton}>
        GENERATE SEQUENCE
      </Button>

      {optionsShow && <SettingsMenu></SettingsMenu>}
    </div>
  );
};

export default App;

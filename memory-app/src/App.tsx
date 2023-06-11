import { useState } from "react";

import Title from "./components/Title";
import Button from "./components/Button";
import OptionsMenu from "./components/OptionsMenu";
import ZenMode from "./components/ZenMode";

const App = () => {
  const [view, setView] = useState({
    setup: true,
    options: false,
    zen: false,
    guess: false,
    finish: false,
  });

  const [options, setOptions] = useState({
    unroundedNum: 50, //at least this many will be shown
    itemRoundNum: 1, //the multiple of number of items
    itemCount: 50, //Math.round(unroundedNum / itemRoundNum) * itemRoundNum,
    itemChoices: [1, 2, 3, 4, 5, 6, 7, 8, 9], //symbol selection
    mode: { sequential: true, grid: false },
    numItemsShown: 3,
    itemsShownSchedule: [], //this schedule will be repeated
    specialRules: [],//trigger value if trigger is true, value(s) will be omit from selection
  });

  const [running, setRunning] = useState({
    items: [],
    currentIndex: 0,
    correct: "",
    raw: "",
    shown: 0,
  })

  const handleOptionsButton = () => {
    console.log("yo");
    setView({ ...view, options: !view.options });
  };

  const handleSaveOptionsButtonClick = () => {
    console.log("does nothing yet");
    setView({ ...view, options: false });
  };

  const handleGenerateButton = () => {
    console.log("butting");
    setView({ ...view, options: false, setup: false, zen: true });
  };

  const handleStartOverButton = () => {
    setView({ ...view, setup: true, zen: false });

    //TODO LATER setView curretn progress
  };

  const handleNextButton = () => {
    console.log("something");
  };

  return (
    <div>
      <Title>Memory Improving Powerful Web App</Title>

      {view.setup && (
        <>
          <Button color="secondary" onClick={handleOptionsButton}>
            OPTIONS
          </Button>
          <Button color="primary" onClick={handleGenerateButton}>
            GENERATE SEQUENCE
          </Button>
        </>
      )}

      {view.options && (
        <>
          <OptionsMenu />
          <Button color="danger" onClick={handleSaveOptionsButtonClick}>
            SAVE OPTIONS
          </Button>
        </>
      )}

      {view.zen && (
        <ZenMode
          handleNextButton={handleNextButton}
          handleStartOverButton={handleStartOverButton}
        />
      )}

      {view.guess && (
        <>
          <Title>GUESSSS</Title>
        </>
      )}

      {view.finish && (
        <>
          <Title>NOOO</Title>
        </>
      )}
    </div>
  );
};

export default App;

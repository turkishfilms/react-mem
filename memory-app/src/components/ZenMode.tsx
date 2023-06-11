import Button from "./Button";
import NumberField from "./NumberField";

interface ZenModeProps {
  handleStartOverButton: () => void;
  handleNextButton: () => void;
}

const ZenMode = ({ handleStartOverButton, handleNextButton }: ZenModeProps) => {
  return (
    <>
      <Button onClick={handleStartOverButton} color="secondary">
        Start Over
      </Button>
      <NumberField></NumberField>
      <Button onClick={handleNextButton} color="primary">
        NEXT SET
      </Button>
    </>
  );
};

export default ZenMode;

import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

function Button(props) {
  const saveButton = props.saveButton;
  if (saveButton) {
    return <SaveButton />;
  }
  return <ClickedButton />;
}

export default Button;
import './styling.css'

function ClickedButton() {
  function handleClick() {
    alert("This pin has been removed!");
  }
  return (
    <button id="clickedButton" onClick={handleClick}>
      Saved
    </button>
  );
}

export default ClickedButton;
import ButtonToClick from "./ButtonToClick";
class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
    this.parentClickHandler = this.parentClickHandler.bind(this);
  }
  state = {
    counter: 0,
  };
  parentClickHandler() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>{"Clicked" + " " + this.state.counter + " " + "times"}</h1>
        <ButtonToClick clickHandlerFromParent={this.parentClickHandler} />
        <ButtonToClick clickHandlerFromParent={this.parentClickHandler} />
      </div>
    );
  }
}
export default ButtonCounter;
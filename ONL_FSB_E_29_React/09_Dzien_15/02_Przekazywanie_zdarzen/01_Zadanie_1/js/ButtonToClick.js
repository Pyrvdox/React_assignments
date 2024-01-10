class ButtonToClick extends React.Component {
    constructor(props) {
      super(props);
    }
    counterHandler = () => {
      if (typeof this.props.clickHandlerFromParent === "function") {
        this.props.clickHandlerFromParent();
      }
    };
    render() {
      return <button onClick={this.counterHandler}>Click</button>;
    }
  }
  export default ButtonToClick;
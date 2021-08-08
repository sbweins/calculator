import React from "react";
import "../Components/Calculator.css";

class Calculator extends React.Component {
  
  state = {
    input: "",
    prevInput: "",
    addInput: true,
    operator: "",
  };

  render() {
    const { input } = this.state;

    const handleClick = (e) => {
      const { value } = e.target;
      const { input, addInput } = this.state;
      if (addInput) {
        this.setState({ input: value, addInput: false });
      } else {
        this.setState({ input: input + value });
      }
    };

    const handleDecimal = (e) => {
      const { value } = e.target;
      const { input } = this.state;
      if (!input.includes(value)) {
        this.setState({ input: input + value });
      }
    };

    const handleDelete = () => {
      try {
        this.setState({ input: input.slice(0, -1) });
      } catch (e) {
        this.setState({ input: "" });
      }
    };

    const handleAC = () => {
      this.setState({
        input: "",
        addInput: true,
        prevInput: "",
        operator: "",
      });
    };

    const handleOp = (e) => {
      const { value } = e.target;
      const { input } = this.state;
      this.setState({
        prevInput: input,
        operator: value,
        addInput: true,
      });
    };

    const handlePercent = () => {
      this.setState({ input: Number(input) / 100 });
    };

    const handlePosNeg = () => {
      this.setState({ input: Number(input) * -1 });
    };

    const handleEqual = () => {
      const { input, prevInput, operator } = this.state;
      if (operator === "+") {
        this.setState({
          input: Number(prevInput) + Number(input),
          addInput: true,
        });
      } else if (operator === "-") {
        this.setState({
          input: Number(prevInput) - Number(input),
          addInput: true,
        });
      } else if (operator === "*") {
        this.setState({
          input: Number(prevInput) * Number(input),
          addInput: true,
        });
      } else if (operator === "/") {
        this.setState({
          input: Number(prevInput) / Number(input),
          addInput: true,
        });
      }
    };

    return (
      <>
        <div className="button-container">
          <input
            type="text"
            value={input === "" ? "0" : Number(input).toLocaleString()}
          />
          <div className="all-buttons">
            <button className="op-buttons" id="ac" onClick={handleAC}>
              AC
            </button>
            <button className="op-buttons" id="del" onClick={handleDelete}>
              C
            </button>
            <button className="op-buttons" onClick={handlePercent}>
              %
            </button>
            <button className="op-buttons" onClick={handleOp} value="/">
              &divide;
            </button>
            <button onClick={handleClick} value="7">
              7
            </button>
            <button onClick={handleClick} value="8">
              8
            </button>
            <button onClick={handleClick} value="9">
              9
            </button>
            <button className="op-buttons" onClick={handleOp} value="*">
              &times;
            </button>
            <button onClick={handleClick} value="4">
              4
            </button>
            <button onClick={handleClick} value="5">
              5
            </button>
            <button onClick={handleClick} value="6">
              6
            </button>
            <button className="op-buttons" onClick={handleOp} value="-">
              &minus;
            </button>
            <button onClick={handleClick} value="1">
              1
            </button>
            <button onClick={handleClick} value="2">
              2
            </button>
            <button onClick={handleClick} value="3">
              3
            </button>
            <button className="op-buttons" onClick={handleOp} value="+">
              +
            </button>
            <button onClick={handleClick} value="0">
              0
            </button>
            <button onClick={handleDecimal} value=".">
              .
            </button>
            <button className="op-buttons" onClick={handlePosNeg}>
              +/-
            </button>
            <button className="op-buttons" onClick={handleEqual}>
              =
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;

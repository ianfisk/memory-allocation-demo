import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";

let unique = 0;

function generateItems() {
  const items = [];
  for (let i = 0; i < 1000; i++) {
    items.push({ id: unique++ });
  }

  return items;
}

class App extends PureComponent {
  state = {
    items: [],
    useArrowFunctions: false
  };

  addItems = () => {
    this.setState(prevState => ({
      items: [...generateItems(), ...prevState.items]
    }));
  };

  toggleUseArrowFunctions = () => {
    this.setState(prevState => ({
      useArrowFunctions: !prevState.useArrowFunctions
    }));
  };

  render() {
    const { items, useArrowFunctions } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.addItems}>Add items</button>
        <button onClick={this.toggleUseArrowFunctions}>
          {useArrowFunctions
            ? "Don't use arrow functions"
            : "Use arrow functions"}
        </button>
        <div>
          {useArrowFunctions
            ? items.map(({ id }) => <ItemWithArrowMethods key={id} />)
            : items.map(({ id }) => <ItemWithoutArrowMethods key={id} />)}
        </div>
      </div>
    );
  }
}

class ItemWithoutArrowMethods extends PureComponent {
  one() {
    return <span>1</span>;
  }

  two() {
    return <span>2</span>;
  }

  three() {
    return <span>3</span>;
  }

  four() {
    return <span>4</span>;
  }

  five() {
    return <span>5</span>;
  }

  six() {
    return <span>6</span>;
  }

  seven() {
    return <span>7</span>;
  }

  eight() {
    return <span>8</span>;
  }

  nine() {
    return <span>9</span>;
  }

  ten() {
    return <span>10</span>;
  }

  eleven() {
    return <span>11</span>;
  }

  twelve() {
    return <span>12</span>;
  }

  thirteen() {
    return <span>13</span>;
  }

  fourteen() {
    return <span>14</span>;
  }

  fifteen() {
    return <span>15</span>;
  }

  sixteen() {
    return <span>16</span>;
  }

  seventeen() {
    return <span>17</span>;
  }

  eighteen() {
    return <span>18</span>;
  }

  nineteen() {
    return <span>19</span>;
  }

  twenty() {
    return <span>20</span>;
  }

  render() {
    return (
      <span className="item">
        {this.one()}
        {this.two()}
        {this.three()}
        {this.four()}
        {this.five()}
        {this.six()}
        {this.seven()}
        {this.eight()}
        {this.nine()}
        {this.ten()}
        {this.eleven()}
        {this.twelve()}
        {this.thirteen()}
        {this.fourteen()}
        {this.fifteen()}
        {this.sixteen()}
        {this.seventeen()}
        {this.eighteen()}
        {this.nineteen()}
        {this.twenty()}
      </span>
    );
  }
}

class ItemWithArrowMethods extends PureComponent {
  one = () => {
    return <span>a 1</span>;
  };

  two = () => {
    return <span>2</span>;
  };

  three = () => {
    return <span>3</span>;
  };

  four = () => {
    return <span>4</span>;
  };

  five = () => {
    return <span>5</span>;
  };

  six = () => {
    return <span>6</span>;
  };

  seven = () => {
    return <span>7</span>;
  };

  eight = () => {
    return <span>8</span>;
  };

  nine = () => {
    return <span>9</span>;
  };

  ten = () => {
    return <span>10</span>;
  };

  eleven = () => {
    return <span>11</span>;
  };

  twelve = () => {
    return <span>12</span>;
  };

  thirteen = () => {
    return <span>13</span>;
  };

  fourteen = () => {
    return <span>14</span>;
  };

  fifteen = () => {
    return <span>15</span>;
  };

  sixteen = () => {
    return <span>16</span>;
  };

  seventeen = () => {
    return <span>17</span>;
  };

  eighteen = () => {
    return <span>18</span>;
  };

  nineteen = () => {
    return <span>19</span>;
  };

  twenty = () => {
    return <span>20</span>;
  };

  render() {
    return (
      <span className="item">
        {this.one()}
        {this.two()}
        {this.three()}
        {this.four()}
        {this.five()}
        {this.six()}
        {this.seven()}
        {this.eight()}
        {this.nine()}
        {this.ten()}
        {this.eleven()}
        {this.twelve()}
        {this.thirteen()}
        {this.fourteen()}
        {this.fifteen()}
        {this.sixteen()}
        {this.seventeen()}
        {this.eighteen()}
        {this.nineteen()}
        {this.twenty()}
      </span>
    );
  }
}

export default App;

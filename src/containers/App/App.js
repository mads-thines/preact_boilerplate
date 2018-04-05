import { h, Component } from 'preact';
import { CSSTransition } from 'react-transition-group';

import logo from '../../assets/icons/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClicker = this.onClicker.bind(this);
    this.state = {
      test: false,
    };
  }


  onClicker() {
    this.setState({
      test: !this.state.test,
    });
  }

  render() {
    const { test } = this.state;

    return (
      <div className="App">
        <button className="App-intro" onClick={this.onClicker} onKeyDown={this.onClicker}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </button>
        <CSSTransition
          in={test === true}
          timeout={300}
          classNames="message"
          unmountOnExit
        >
          {() => (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">Welcome to React</h1>
            </header>
          )}
        </CSSTransition>
      </div>
    );
  }
}

export default App;
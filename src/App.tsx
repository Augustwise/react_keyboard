import React from 'react';

interface State {
  lastKey: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  shouldComponentUpdate(_nextProps: {}, nextState: State) {
    // Only re-render if key change
    return nextState.lastKey !== this.state.lastKey;
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      lastKey: event.key,
    });
  };

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        {lastKey ? (
          <p className="App__message">The last pressed key is [{lastKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

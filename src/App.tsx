import React from 'react';

interface PressedKey {
  lastKey: string;
}

export class App extends React.Component<{}, PressedKey> {
  state: PressedKey = {
    lastKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  shouldComponentUpdate(_nextProps: {}, nextState: PressedKey) {
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

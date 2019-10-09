import React from 'react';
import ConnectedPostlist from '../Postlist/ConnectedPostlist';
import './App.css';

class App extends React.Component {
  loadData = async() => {
    await this.props.loadData();
  }

  render() {
    const {
      isLoading, isLoaded, hasError,
    } = this.props;

    if (hasError) {
      return (
        <>
          <p>Some problems...</p>
          <button
            type="button"
            onClick={this.loadData}
            disabled={isLoading}
          >
            {isLoading
              ? 'Loading...'
              : 'Reload'}
          </button>
        </>
      );
    }

    return (
      <div className="App">
        <h1>List of Posts</h1>
        {!isLoaded && (
          <button
            type="button"
            onClick={this.loadData}
            disabled={isLoading}
          >
            {isLoading
              ? 'Loading...'
              : 'Load'}
          </button>
        )}
        <ConnectedPostlist />
      </div>
    );
  }
}
export default App;
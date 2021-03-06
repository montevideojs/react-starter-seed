// This component handles the App template used on every page.
import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return (
      <main className="main-content">
        {this.props.children}
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

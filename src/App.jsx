import React from 'react';
import Homepage from './pages/homepage'
import Header from './cmps/header';


class App extends React.Component {
  state = {}


  render() {
    return (
      <div>
        <Header></Header>
        <Homepage></Homepage>
      </div>
    );
  }
}

export default App;

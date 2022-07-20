import React from 'react';
import './App.css';
import Content from './content';
import Footer from './footer';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <body>
        <Header/>
        <Content/>
        <Footer/>
      </body>      
    )
  }
}

export default App;

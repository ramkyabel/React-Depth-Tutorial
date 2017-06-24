import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld'

const App = () => {
  return (<div className="App">
		<HelloWorld name="First" />
 		<HelloWorld name="Segunda" />
  </div>);
};

export default App;
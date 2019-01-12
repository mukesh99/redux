import React, { Component } from 'react';
import {createStore} from 'redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      My india is great
      </div>
    );
  }
}

export default App;
const initialState={
	result:1,
	lastValues: []
};

const reducer =(state, action)=>{
	switch(action.type)
	{
		case "ADD":
		state = state+action.payload;
		break;
		case "SUB":
		state = state-action.payload;
		break;
	}
	
	return state;
}


const store = createStore(reducer,5);

store.subscribe(()=>{
	console.log("value is here", store.getState());
});

store.dispatch({
	
	type:"ADD",
	payload:120
});
store.dispatch({
	
	type:"SUB",
	payload:90
});
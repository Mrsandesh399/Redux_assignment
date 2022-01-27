import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import postData from './middleware/thunk';

const initialState={count:0,postdata:[]}

function reducer(state=initialState,actions){
  console.log(state);
  switch(actions.type)
  {
    case 'INC': return {...state,count:state.count + actions.payload}
    case 'DEC': return {...state,count:state.count - actions.payload}
    case 'RESET': return {...state,count:0}
    case 'pdata':return {...state,postdata:actions.payload}
    default : return state;
  }
}

const store=createStore(reducer,applyMiddleware(thunk));
store.dispatch(postData());
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'DEC',payload:1})
// store.dispatch({type:'DEC',payload:1})
// store.dispatch({type:'DEC',payload:1})
// store.dispatch({type:'RES',payload:0})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

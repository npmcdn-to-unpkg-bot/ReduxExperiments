import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore } from 'redux';
import Counter         from './components/Counter';
import counter         from './reducers/reducer';

const store = createStore(counter)
const App   = document.getElementById('App')

function render() {
 ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  App
 )
}

render();
store.subscribe(render);

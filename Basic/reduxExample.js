//Reducer: pass default state, action
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'increment': 
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

//Store
const { createStore } = Redux;
const store = createStore(counter);

//getState() gets current state
console.log(store.getState());
//state is 0

//dispatch() dispatch action passed to it in this case 'increment'
store.dispatch({type: 'increment'});
//state is 1

//subscribe() prints the current state everytime an action is fired
store.subscribe(() => {console.log(store.getState()); });

//increment action is fired on every click, invokes store.subscribe
document.addEventListener('click', () => store.dispatch({type: 'increment'}));
//decrement action is fired on every keydown, invokes store.subscribe
document.addEventListener('keydown', () => store.dispatch({type: 'decrement'}));

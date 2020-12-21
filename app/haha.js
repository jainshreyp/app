const redux = require('redux')


//reduction function, only has a param of state and action
function multiplyBy2(state = { value: 1}, action) {
    if(action.type === "mult") {
        return({value: state.value * 2})
    } else {
        return({value: state.value /2})
    }
}

//creates a store (state tree) with a func param, function is the reduction function
let store = redux.createStore(multiplyBy2)

//subscribes to finding changing in the store, and then performs the arrow function commands
store.subscribe(() => console.log(store.getState()))

//a bunch of test commands 
store.dispatch({ type: 'mult' })
store.dispatch({ type: 'mult' })
store.dispatch({ type: 'mult' })
store.dispatch({ type: 'mult' })
store.dispatch({ type: 'mult' })
store.dispatch({type: 'shrey'})
store.dispatch({ type: 'mult'})
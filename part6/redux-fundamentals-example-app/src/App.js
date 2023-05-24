import React from 'react'
import store from "./store"

function App() {
  // Omit existing React imports



// Log the initial state
console.log("Initial state: ", store.getState());
// {todos: [....], filters: {status, colors}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);

// Now, dispatch some actions

store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
store.dispatch({ type: "todos/todoAdded", payload: "Learn about reducers" });
store.dispatch({ type: "todos/todoAdded", payload: "Learn about stores" });

store.dispatch({ type: "todos/todoToggled", payload: 0 });
store.dispatch({ type: "todos/todoToggled", payload: 1 });

store.dispatch({ type: "filters/statusFilterChanged", payload: "Active" });

store.dispatch({
  type: "filters/colorFilterChanged",
  payload: { color: "red", changeType: "added" }
});

// Stop listening to state updates
unsubscribe();

// Dispatch one more action to see what happens

store.dispatch({ type: "todos/todoAdded", payload: "Try creating a store" });

// Omit existing React rendering logic

  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
    </div>
  )
}

export default App

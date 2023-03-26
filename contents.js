//Understand the core principles
// Before react:
//Basic Js, HTML, Css
// Just simple forms
// React key concepts
// Imperative
// Declarative -  React uses this // just declare - I'll do the DOM manipulation
// React component architecture
// One way data flow -> State changes -> update the components according to the new state
// UI library

// React basics -  14
// Starting of the React - 20
// npx create-react-app my-app

// scripts
// 1. Start - just bundle and start in local system
// 2. Build - for distribution /  build folder -  using babel and webpack
// 3. Test - format file_name.test.js
// 4. Eject - Not used in local

// Hooks vs classes
// Hooks are new
// First start with classes then move to hooks

// Class
// Functions in react - returns Html

//jsx
// Whenever state changes -  React will call the render again and change the content

//30. Single Page Application
// Instead of requesting a page -> it will request for data

// 31. Fetching contents
// Life-cycle methods
// componentDidMount -> when a component mount renders it on the DOM first time

// 33. Architecting our APP
// Our own component - starts with capital
// even we can store file as .jsx / .js
// doesn't matter since webpack / babel takes anc converts

// 34. Component /  Card List Component
// Break our code into small reusable pieces focus on only one responsibility
// Ex - card component, search component
// props
// children - anything passed between the component tag

// 36. Card Component
// Move the logic og displaying monsters to the card list component from app component
// Display logic in card component

// 37. Exercise -  Breaking into components
// Why are we breaking into separate components
// when do we break things down into components?
//   To make things more flexible

// 38. state vs props
// One way data flow
// App -> parent has state -> state changes -> passes as prop to wherever props is used from this state - monsters state is passed as a prop to child
// props - state turned into props

// 39. Search Field state
// store the search input in state
// setState =  async
// setState has callback function

// 40. React Events
// React intercepts the changes / events
// we can't run setState directly inside render() // creates a loop

// 41. Filtering State
// React takes cares of what to show/ render and what not to

// 43. Search Box component
// We might want to use it in multiple places
// Reusable components
// Functional component - we can use when don't we need to use internal  state or life cycle methods\
// passing handleChange Function to search component

// 44. Where to put the state
// We want to put the state as top as possible to be useful for all the components when state changes using the state

// 45. Class Methods and Arrow Functions
// this KW is not by default for function keyword
// use .bind
// bind => returns a new function with binded this
// instead of using bind  =>use arrow function

// shallow merge
// look for any key existing in the given object

// lifeCycleMethods - Class Components
//componentDidMount => execute after component is mounter

// Three phases in react
// 1. Mounting
// 2. Updating
// 3. unmounting

// Functional vs class components
// lifecycle methods - class components
// componentDidMount => execute after component is mounted
// componentDidUpdate => execute after component updated/ rendering
// componentWillUnmount => execute before component is unmounted


// pure functions impure functions
// pure functions = take arguments => returns a function that returns same value

// side effects
// pure functions => running a function, does not change any other value other than the arguments given

// Hooks

// useEffect() //
// [] => dependencies
// [] => whenever changes run the code inside
// run => run first time when app mounts


// 105
// need for context ?
// user data is needed for many pages like orders, profile, returns
// find out top level common component
// basic -  app is the top level component
// pass used data to the app component
// pass through props
// using props is useless
// how about using a storage place which we can use anywhere - called react context

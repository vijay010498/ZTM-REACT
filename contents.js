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

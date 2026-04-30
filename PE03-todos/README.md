Input

The user enters a todo item into a text input field and presses the submit button. This captures the input value from state. The tab bar is also used as input to select a filter option such as All, Active, or Complete, which updates the type state.

Process

When a todo is submitted, it is added to the todos array in state with a title, unique index, and a complete value set to false. Updating state triggers a re-render of the app. The TodoList component receives the todos array as props and renders each item in the list by creating a Todo component for every todo entry. Each todo can be marked complete or deleted using functions passed down from the App component. The tab bar updates the type state to filter which todos are shown.

Output

The app displays a list of todos that updates immediately when items are added, completed, or deleted. Completed items visually change when toggled, and the list updates based on the selected filter. Console logs show added todos for tracking and debugging.
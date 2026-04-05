# CS451 PE01-HelloWorld

## Input
* Nothing

## Process
1. Import three React Native Components - StyleSheet, Text, and View.
2. Define the App functional component and export the component as the module's default export.
    1. Start the return statement of the App component, which returns JSX.
        1. A View component is used as a container. It applies styles from the styles.container object.
            1. A Text component displaying the string "Scott Hancock".
            2. A Text component displaying the string "BSACS".
            3. A Text component displaying the string "City University of Seattle".
        2. Close the View component.
    2. Close the return statement of the App component.
3. Close the App function definition.
4. Start the definition of the styles object using StyleSheet.create.
    1. Define the container style object.
        1. Set the flex property to 1, making the container take up the full available space.
        2. Set the background color property to yellow (#ffff00).
        3. Set the alignItems property to center, centering child components horizontally.
        4. Set the justifyContent property to center, centering child components vertically.
    2. Close the container style object.
5. Close the styles object definition.

## Output
* Display your name, major, and school.

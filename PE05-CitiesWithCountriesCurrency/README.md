Input

The input for this application comes from the user entering information into the AddCity and AddCountry tabs. The user can type a city name, country name, and currency into TextInput fields. The app also takes user interaction from the bottom tab navigator when switching between screens. Buttons are used to submit the entered information and add it to the app data.

Process

The program uses React Native state and navigation to manage and display information. When the user submits a city or country, the data is stored in arrays using functions passed between components. React Navigation is used to create four bottom tabs: Cities, AddCity, Countries, and AddCountry. The app updates dynamically whenever new data is added. Components such as ScrollView and TouchableOpacity help organize and interact with the content.

Output

The output is a mobile app that displays lists of cities, countries, and currencies on separate screens. Users can switch between tabs, add new information, and instantly view the updated lists. The app demonstrates navigation, state management, and interactive user input in React Native.
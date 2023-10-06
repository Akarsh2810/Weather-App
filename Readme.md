1. Download and Install node.js from node.js website
2. Install expo-cli: run npm install -g expo-cli command in the terminal
3. Create a React Native App folder and open terminal in it.
4. Write: npx create-expo-app WeatherApp
5. cd .\WeatherApp\
6. npm start
7. Download and open expo go app in your android device from play store or open camera app in your ios device to scan the QR(Quick Response) code.
8. Scan the QR code, then Android Bundling will happen.
9. Open the WeatherApp in vs code and start editing the App.js file to see live changes.
10. create git repo and push the code to that repo.
11. run these commands:
	- npm install eslint --save-dev
	- npx eslint --init
	- Ok to proceed? (y) y
	- press enter for all questions
	- npm install @react-native-community/eslint-config --save-dev
	- Add "@react-native-community" to eslintrc.js "extends"
	- Add semi: ['error', 'never'],
		'comma-dangle': [2, 'never'],
		'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
		'no-use-before-define': [            
		'error', 
		{functions: true, classes: true, variables: false}
	] 
	in eslintrc.js "rules"
	- npm install --save-dev --save-exact prettier
	- touch .prettierrc.js
	- copy paste this code in prettier.js file
	- module.exports = {
    		bracketSpacing: true,
		singleQuote: true,
    		tabWidth: 2,
    		useTabs: false,
    		trailingComma: "none",
	    	semi: false
	};
12. add "lint": "eslint ." in package.json "scripts" and type npm run lint in terminal
13. shake the mobile device and click on Open JS Debugger.
14. it opens console.
15. write console.log("Hello World") in App.js file for sanity check.
16. JSX:
	- It is an extension of javascript
	- It stands for Javascript and XML
	- We use it to create elements
	- We can use Javascript with it.
17. <View> and <Text> are core components
18. In react-native we don't have access to standard CSS. Instead we use Javascript object.
19. The naming of the property is usually the same as standard CSS except we use camelcasing instead. Example: font-size: fontSize
20. {} is used when we have to pass an object. key : value pair
21. create static app first then dynamic app.
22. All dimensions in react native is unitless and represents density independent pixels.
23. Component:
	- a function that returns some JSX
	- JSX is the syntax that we use
	- We show or render something to the user
24. Under the hood, JSX is turned (compiled) into Javscript by using bable. Bable is a javascript compiler.
25. App.js file is the root component. It acts as the entry point for the application.
26. DRY: Don't repeat yourself (convention in coding)
27. components based coding is easier for understanding, debugging and testing.
28. In sectionList, we must pass an array of objects.
29. FlatList: A standard list, required props are: Data and renderItem, Data must be an array, renderItem displays the list element to the user.
30. SectionList: when we need a list broken up into sections, sections and renderItem, Data must be an array of objects, renderItem displays the list element to the user.
31. providing key to each item increases performance of the app. it avoids re-rendering and directly updates the app. example - deletion of any item.
32. create static screens and refactor the code
33. to add navigation between screens, install few dependencies by following command:
	- npm install @react-navigation/native
	- npx expo install react-native-screens react-native-safe-area-context
	- npm install @react-navigation/bottom-tabs
34. State: It is an object that contains information about a component that we want to track. 
	- In the object, we use key-value pairs.
	- Helps to add, remove and modify things in our components.
	- We can trigger UI updates based on the changes.
	- When state changes the component re-renders.
35. Props vs State:
	- Props let us pass data between the components (parent to child). State helps us to internally manage data within our components.
	- We cannot modify the state of the component outside of the component.
36. React does not re-render a component when a value of a variable changes. If react would have rendered a componenet on a variable change, then there will be re-render happening all over the UI which will result in a very bad user experience.
37. Hooks are kind of a function that we can use inside of our functional component.
38. We use array destructuring for a useState hook.
39. useEffect hook help us in data fetching.
40. In older days of react and react native, in most parts we have two types of components that we could use. These were called stateful and stateless.
41. If we want our component to use state in some way, we would create a stateful component. If we did not need a state in our component, we could use stateless component.
42. A stateful component was a class. When we use class components, we can access lifecycle methods. Lifecycle methods are essentially events that occur during the lifecycle of a component.
43. When a component is created, it is mounted and the lifecycle method for this event is componentDidMount.
44. When a component is updated, another lifecycle method is called which is named shouldComponentUpdate. This lets us control when the component should re-render.
45. Just before a component is destroyed, another lifecycle method is called which is named as componentWillUnmount.
46. When we are using a class, we can tap into these methods and during these events we can add some additional functionality.
47. Hooks were introduced in React 16.8
48. Hooks provide us a way to use features like states and lifecycle methods that we were dependent on classes but from inside of our function components.
49. Hooks are like special functions that contains reusable logic which are separate from our component tree but let us add functionality to our function components.
50. Every hook starts with a word use.
51. Rules to use hook:
	- We can only call hooks from inside of React functions like our functional components. We cannot use it inside normal Javascript functions.
	- Hooks must be called at the top level of the component and before the return keyword is used.
52. useEffect: `https://www.w3schools.com/react/react_useeffect.asp`. The effect hook lets you perform side effects in functional component.
53. It is similar to componentDidMount and componentDidUpdate.
54. Side effect: When we use something not inside of React within our component. Example: fetching Data and using timer functions and updating the dom directly.
55. useEffect takes a function as an argument and inside of this we write our side effects.
56. In useEffect we could do anything that we want to happen as soon as the component first renders such as fetching some data.
57. useEffect also takes other parameters called dependencies which compares to the lifecycle method componentDidUpdate.
58. A Dependency tells useEffect method to skip applying an effect if certain value/s have not changed b/w renders.
59. To do so, we pass an array as an optional second argument to useEffect.
60. To summarize this, inside of this array we pass in all of the values that the side effect inside of the useEffect relies on.
61. If anyone of those values inside dependency array changes between renders, then only useEffect will run.
62. CleanUp function or return function or componentWillUnmount is called before the next useEffect runs.
63. We should start the app in the loading state until the data from the open weather map api is successfully fetched.
64. if-else, ternary operator and logical AND operator is used for conditional rendering.
65. Expo-location allows reading geolocation information from the device.
66. To install expo-location: npx expo install expo-location
67. react-native-dotenv is used to set the value of the variable from the outside of the application
68. To install: npm install -D react-native-dotenv
69. Once this is installed go to bable config file and then add the plugin after presets like this: plugins: ["module:react-native-dotenv"]
70. create .env file in Weather App
71. In order to pass the props to the component, we need to render a call back to return the element to use for the screen instead of using the component prop.
72. Used moment.js to format date. command: npm install moment --save
73. Add Optional chaining in the places where we are accessing nested object properties to return undefined if one of the properties does not exist instead of an error.
74. md in ReadMe.md stands for Markdown.
75. We use useEffect instead of useState to do some work on every render (No dependency passed), on first render (an empty array is passed like []), and on first render and any time dependency value changes ([props, state]). whereas useState only changes the state variable.

### Working:

### useGetWeather custom hook:
1. This hook manages five states i.e. loading, error, weather, lat, and lon.
2. Inside useEffect we ask for user's location permission. It the user denies the request, then we set the error state to a message and return else we get user's location and call the fetchWeatherData function.
3. The useEffect hook renders only when the lat and lon state variable changes after first render.
4. It has fetchWeatherData asynchronous function that has a try, catch and finally block.
5. The try block fetches the response from the WEATHER API, stores it in data variable using response.json() method and sets the weather state to data.
6. The catch block sets the error state to a message.
7. The finally block sets the loading state to false.
8. This hook returns an array of three state variables i.e. loading, error, weather that will be used by App.js component.

### App Component:
1. The App.js is a functional component that can render one component out of Tabs, ErrorItem, and ActivityIndicator. The choice of the component depends upon some conditions.
2. If weather state is not null and weather.list state is not null and loading state is false, then Tab component is rendered.
3. If error state is not null then ErrorItem component is rendered else ActivityIndicator component is rendered.

### Tabs Component:
1. The Tabs component is passed with a weather prop.
2. createBottomTabNavigator function is stored in Tab variable.
3. The Tabs component returns three screens inside navigator i.e. CurrentWeather, UpcomingWeather and City

### CurrentWeather Component:
1. The CurrentWeather component is passed with weatherData = {weather.list[0]} prop.
2. The weatherData prop is destructured into various variables for data feeding.
3. This component returns an icon, some temperatures and RowText component.

### RowText Component:
1. The RowText component takes five values as props and return two text message.

### UpcomingWeather Component:
1. The UpcomingWeather component is passed with weatherData = {weather.list} prop.
2. This component returns a background image and a FlatList (to display a list of weather).

### FlatList:
1. The FlatList component has three props: data, renderItem and keyExtractor.
2. The data is equal to the weatherData prop of UpcomingWeather component.
3. The renderItem method calls a renderItem functional component that receives an item as a prop and return ListItem component.
4. The keyExtractor is equal to the an anonymous function which takes item as a prop and returns item.dt_txt.

### ListItem Component:
1. This component takes various props which is used for data feeding.
2. It returns an icon and some text message about max/min temperature.

### City Component
1. The City component is passed with weatherData = {weather.city} prop.
2. The weatherData prop is then destructured into various variables.
3. It returns a background image, some text messages about city name, country and population, and IconText component.

### IconText Component:
1. This component is passed with a prop containing icon name and some text message.
2. It returns an sunrise and sunset icon and time.
# To-Do List App

This project is a simple to-do list application built using React. It allows users to create, edit, and delete to-do list items. The application integrates a mock API to simulate backend functionality for storing and retrieving to-do list data. Users can access their to-do lists by entering their name on the login screen. Additionally, it includes toast messages to provide feedback for successful operations such as adding, updating, or deleting tasks.

## Features

- **Mock API Integration:** Simulated backend functionality using a mock API for storing and retrieving to-do list data.
- **Context API:** State management using React's Context API to handle global state, such as user data and theme.
- **Custom Hooks:** Custom useFetch hook, encapsulate logic for fetching data from the mock API, promoting code reuse and modularity. Additionally, the useToast custom hook is used to display toast messages for user actions.
- **To-Do List Functionality:** Users can add, edit, and delete to-do list items, as well as mark items as completed.
- **Responsive Design:** Responsive layout ensures a consistent user experience across different devices and screen sizes.
- **Toast Messages:** The app displays toast messages to provide feedback for successful operations such as adding, updating, or deleting tasks.

## Live Site

You can access the live website [here](https://logintodoapp.netlify.app/).

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en) installed on your computer. From your comment line:

```
# Clone this repository
$ git clone https://github.com/OguzcanIzanli/To-Do-List.git

# Go into the repository
$ cd To-Do-List

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

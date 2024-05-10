# To-Do List App

This project is a simple to-do list application built using React. It allows users to create, edit, and delete to-do list items. The application integrates a mock API to simulate backend functionality for storing and retrieving to-do list data. Users can access their to-do lists by entering their name on the login screen. Additionally, it includes toast messages to provide feedback for successful operations such as adding, updating, or deleting tasks.

## Features & Technologies Used

- **React:** Developed with React, a JavaScript library for building user interfaces. React allows for the creation of reusable components, making it easy to manage complex UIs.
- **Mock API Integration:** Simulated backend functionality using a mock API for storing and retrieving to-do list data.
- **Context API:** State management using React's Context API to handle global state, such as user data and theme.
- **Custom Hooks:** Implements custom hooks, such as useFetch and useToast, to encapsulate logic and promote code reuse and modularity. These custom hooks abstract away common functionalities, making it easier to manage and maintain the codebase.
- **To-Do List Functionality:** Users can add, edit, and delete to-do list items, as well as mark items as completed.
- **Responsive Design:** Responsive layout ensures a consistent user experience across different devices and screen sizes.
- **Toast Messages:** The app displays toast messages to provide feedback for successful operations such as adding, updating, or deleting tasks.
- **LocalStorage:** Utilizes the browser's Local Storage API to persist user data locally. This allows the application to store user preferences and data even after the browser is closed or refreshed, providing a seamless user experience.

## Live Site

You can access the live website [here](https://logintodoapp.netlify.app/).

<video width="640" height="360" controls>
  <source src="./public/To-Do-App-Video.mp4" type="video/mp4">
</video>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en) installed on your computer. From your comment line:

```
# Clone this repository
$ git clone https://github.com/OguzcanIzanli/To-Do-App.git

# Go into the repository
$ cd To-Do-App

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

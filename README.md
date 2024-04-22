# AltSchool Second Semester Exams
# Name: Taiwo Oluwole-young Victor
# S/N: ALT/SOE/023/3084

# Introduction
This project is a react application that fetches my GitHub repositories API and displays it.

# Installation and Bundling
Bundler used is Vite. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.Node(version 18+) has to be installed. To install:

npm create vite <!--follow the prompts -->

cd Project-Name
npm install 
npm run dev <!--project should start running on localhost:5173-->

# Routing
Installed react-router-dom. To install:
npm install react-router-dom 

Application: on the main.jsx:
import {CreateBrowserRouter, RouterProvider} from 'react-router-dom'
import ElementToBeDisplayed from './element'
import ErrPage from './errPage'
const router = CreateBrowserRouter([
    {
        path: '/path-intended',
        element: <ElementToBeDispalyed />, <!--Displays the page-->
        errorElement: <ErrPage /> <!--Displays the error if a error is caught-->
    }
])

# Nested Routing
Implemented the "children" attribute:

const router = CreateBrowserRouter([
    {
        path: '/path-intended',
        element: <ElementToBeDispalyed />, <!--Displays the page-->
        errorElement: <ErrPage /> <!--Displays the error if a error is caught-->
        children: [
            {
                path: '/path-intended/:child',
                element: <ChildElementToBeDispalyed />, <!--Displays the page-->
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(  <!--createRoot allows you to render the root component to the dom -->
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

# Error Boundary
The errPage component shows the error status, the error data and the status text. This enables users to detect the type of error whe an error is thown. 'useRouterError' gives this error data.

# Search and filter
SearchBar component displays the input. input value (inputValue) is taken and the data is filtered by using an if statement. It checks if the repo name has the inputed value in it.

# Pagination
The Pagination component takes in two props: nPages and CurrentRecord. nPages shows the number of pages to have while the current record displays the data for the current page.

# Create
Takes user to "add new repo" on github. 


# References
Vite: [Vite Link](https://vitejs.dev/guide/)
React-router-dom: [react-router-dom link](https://reactrouter.com/en/main/start/tutorial)
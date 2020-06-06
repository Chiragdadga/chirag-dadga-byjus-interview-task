# Description of the problem and solution
 * In every application need SEO but in react js is one page application for ex. we need different titles/meta tags. For that we need server side render so we have to use diffrent javascript framworks/library like expressjs, Nextjs

 * same time we need to store data in localstorage better way to store data is encrypt and depleted for security perpose.
     
# The reasoning behind your technical choices, including architectural

 * I have chosen the Reactjs library.
 * Now a day Reactjs are very popular as well as they have a very huge Reactjs community.
 * Reactjs it's made by Facebook so it's trustable.
 * One of my favorites Reactjs is so fast compared to other javascript framework and it's using virtual DOM in browsers concept.
 * Reactjs js is easy to understand and maintainable its means if any new version comes so we can upgrade easily.

* Why use React? – React usage benefits - It’s Easier to Learn for developers
    -  One of the main concerns developers have is choosing a framework (or library) that is easier to learn and    implement.  React is easy to grasp for developers who are familiar with Javascript.
 
* React enables developers to reuse components
    - In React, your application comprises of components. Ideally, you start with building small components like buttons, checkboxes, dropdowns, menus, etc. and create wrapper components around these smaller components.
    - In our project, we have many components of its reusable.
* Virtual DOM
    - In many front-end frameworks, DOM (Document Object Model) is a tree-shaped HTML representation of all elements of a web application, built into a parent-child structure. Whenever there is a change in the state of any element (for example, a button is clicked or a form submitted), DOM gets immediately updated. This way, it always represents the current UI of a website.
  
 * We can create best architectural with bundler link webpack, gulp etc.
 * in this project i m using gulp js for scss to css converting and bundling in one css file.
 * Many conponents i have created which we can reuse.

 # Directory Layout
    -App 
    --public
    ---css
    ---index.html
    ---logo.ico
    ---manifest.json
    
    --src
    ---assests
    -----icon
    -----images
    ---Components
    -----Commons
    -----Header
    -----Footer
    -----Sidebar
    -----Icons.js
    ---Pages
    -----MyTask
    -------Components
    -------MyTask.js
    -------MyTask.scss
    ---styles
    -----styles.scss
    ---App.js
    ---index.js
    ---serviceWorker.js

    --gulpfile.js
    --package.json

# I have create 2 Page/components 1) Project Board 2) Calendar – My Tasks

* I Have tried to make simple and good architectural for this project.
* I have made drag and drop functionality for task management was we can easily move into different status.
* I have made one page/component for the task calendar inside My task. In that, I m using the "react-big-calendar" npm package for the calendar. When we click on the task on a particular date there i have made one popup for tasks description so the user can easily get know about tasks.  
* In this project I m using SCSS so we can easy to maintain CSS.
* I have done with mobile compatibility for this project and still we can improve.* We can make PWA(progressive web app) for this project by using serviceWorker and manifest file concept.


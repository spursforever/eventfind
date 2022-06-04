# Eventfind
Welcome to Eventfind! This project is inspired by [Eventbrite](https://www.eventbrite.com/) where users have the ability to create, edit, delete their own events.

## Link to Livesite
[eventfind](https://eventfind.herokuapp.com/)

## Technologies Used
<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=40/> <img src="https://img.icons8.com/color/48/000000/css3.png"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height=40 /> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' height=40 /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/> <img src="https://img.icons8.com/nolan/64/git.png" height=50/> <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" height=44/>

## Getting Started
1. Clone this repistory

    ```https://github.com/spursforever/eventfind```

2. Install the project's dependencies

    ```npm install```

3. Add an .env file containing the variables from the .env.example file

4. Create user and database based on what you setup in .env file

5. Use the Sequelize CLI to apply the provided database migrations and seeder.

    ```npx dotenv sequelize db:migrate:undo:all```

    ```npx dotenv sequelize db:seed:all```

5a. If you want to change your model, migration, or seeder files, run the following commands and make the according changes to it.
    
    ```npx dotenv sequelize db:migrate:undo:all```
    ```npx dotenv sequelize db:seed:undo:all```

6. You can now test the application. (Please make sure to npm start on both front end and back end server!!!)

    ```npm start```

7. You can sign in via Demo User or create an account yourself

## Database Schema
![eventfind](https://user-images.githubusercontent.com/94093737/171985233-aa2d5ba7-9db6-4fd9-832e-d09e79ed81c9.png)

## Features
1. Users
* User can sign up, log in, and sign up of the site
* User can also choose to log in as a demo user.
2. Events
* All users can look at the events and their details
* Logged-in users can create, edit, and delete events
3. Ticket
* Logged-in users can register event.
* They can also cancel the registration that they just made



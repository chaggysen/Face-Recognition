# Face-Recognition
Face recognition web application that uses Clarifai API in order to detect faces in an uploaded image URL.

Used React, Node.js, and Postgresql in order to create the project and deployed online on Heroku.

![Alt text](screenshots/home.png?raw=true "Example of User signed in")
![Alt text](screenshots/register.png?raw=true "Signin")
![Alt text](screenshots/signin.png?raw=true "Register")

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. You must add your own API key in the `controllers/image.js` file to connect to Clarifai API
5. Add your own database credentials to `server.js` line 12

You can grab Clarifai API key [here](https://www.clarifai.com/)

** Make sure you use postgreSQL instead of mySQL for this code base.

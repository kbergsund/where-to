# Where to Next?

#### Discover your next adventure...

## Introduction
`Where to Next?` is for planning outdoor trips. When wanderlust hits but you don't know where you want to go. Quickly and seamlessly zero in on top California destinations that offer your favorite activities. Click any destination to learn more and see what other activities it has to offer. If you like what you see, add the destination to your personal bucket list. Return later to revisit your bucket list. While viewing destination details, click the 'Learn More' button to be directed to the official National Park Service site, where you can start locking in an itinerary.

Built over the course of 4 days and presented as my final solo project for Module 3 of [Turing School of Software & Design's](https://turing.edu/) Front-End Engineering program.

## Technologies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/-React%20Router-211f20?logo=react-router&logoColor=61DAFB&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Cypress](https://img.shields.io/badge/-cypress-black?logo=cypress&logoColor=white&style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Deployment
View in browser at the deployed link HERE.

To run locally:
1. Clone this repo down to your local machine.
2. `cd` into the directory and `npm i`.
3. Run `npm start`.
4. Visit `http://localhost:3000/#/`

## Site Overview
### Homepage
- On load,  the header, a form, and all parks brought in from the API (currently only California's National Park Service destinations) display.

### Filter by activity
- Users can click in the form input to see a drop-down of all searchable activities. By typing, the dropdown auto-filters by matching activities. Destinations will filter once a match is selected (click or press 'Enter') or one of the options is typed out exactly.

### Click destination to learn more
- By hovering over and clicking on any destination, users are be redirected to a page with more information: a list of all activities, another photo, and a brief description.
- Users can click the 'Learn More' button to open a new tab of the National Park Service's official page for the specific destination.

### Add destination to bucket list
- Users can click the 'Add to Bucket List' button. A feedback message displays accordingly- that the park was added or that it had already been so previously.

### View bucket list
- To view their personalized buclet list, users can the 'My Bucket List' button in the top right corner.    

### Responsive design
- Desktop, tablet, & mobile viewing was considered in the design.

## Future Directions
- Expand past California and offer service to all states. Add functionality to filter by both state and activity.
- Add button to remove any destination from bucket list.
- Enable filtering by more than one activity at a time.
- Add map display to see where each park is located.

## Learning Goals
1. Demonstrate mastery of React, Router, asynchronous Javascript, and E2E testing with Cypress.
2. Work within strict time constraints to deliver a well-developed product that solves a unique problem for a niche audience. 

## Project Spec & Rubric
See [HERE](https://frontend.turing.edu/projects/module-3/showcase.html)

## Artists
- Map pin (browser tab icon) by [Yo! Baba](https://thenounproject.com/vectormarket01/) from [The Noun Project](https://thenounproject.com/)

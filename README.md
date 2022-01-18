# Where to Next?

#### Discover your next adventure... 🌎

## Introduction
[`Where to Next?`](https://where-to-next.surge.sh/) is for planning outdoor trips. When wanderlust hits but you don't know where to go. Quickly and seamlessly zero in on top California destinations that offer your favorite activities. Click any destination to learn more and see what other activities it has to offer. If you like what you see, add the destination to your personal bucket list. Return later to revisit your bucket list. While viewing destination details, click the 'Learn More' button to be directed to the official National Park Service site, where you can start locking in an itinerary.

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
View in browser at the deployed link [HERE](https://where-to-next.surge.sh/).

To run locally:
1. Clone this repo down to your local machine.
2. `cd` into the directory and `npm i`.
3. Run `npm start`.
4. Visit `http://localhost:3000/#/`

## Site Overview
### Homepage
- On load, the header, a form, and all parks brought in from the API (currently only California's National Park Service destinations) display.

<img width="600" alt="Homepage on load" src="https://user-images.githubusercontent.com/49960644/150023730-28c705bf-1a23-4297-a93a-3085607137f3.png">

### Filter by activity
- Users can click in the form input to see a drop-down of all searchable activities. By typing, the dropdown auto-filters by matching activities. Destinations will filter once a match is selected (click or press 'Enter') or one of the options is typed out exactly.

![FilterbyActivity](https://user-images.githubusercontent.com/49960644/150024456-cfc9d931-875b-4aae-a763-37906045a7a5.gif)

### Click destination to learn more
- By hovering over and clicking on any destination, users are be redirected to a page with more information: a list of all activities, another photo, and a brief description.
- Users can click the 'Learn More' button to open a new tab of the National Park Service's official page for the specific destination.

![ClickPark](https://user-images.githubusercontent.com/49960644/150026928-d2e183e2-ea10-4d18-95dd-b3e70ac5f571.gif)

### Add destination to bucket list
- Users can click the 'Add to Bucket List' button. A feedback message displays accordingly- that the park was added or that it had already been so previously.

![AddtoBucketList](https://user-images.githubusercontent.com/49960644/150025302-4935b0eb-ede9-4a64-bdee-b3474981075f.gif)

### View bucket list
- To view their personalized bucket list, users can the 'My Bucket List' button in the top right corner.  
  
![ViewBucketList](https://user-images.githubusercontent.com/49960644/150025738-16359f0e-96db-4b0c-aaa4-3605b045fa83.gif)

### Responsive design
- Desktop, tablet, & mobile viewing was considered in the design.

<img width="250" alt="Mobile view homepage" src="https://user-images.githubusercontent.com/49960644/150026304-b169afe4-3b1e-46fa-a9d9-586fe2a60b00.png">
<img width="250" alt="Movile view park page" src="https://user-images.githubusercontent.com/49960644/150025956-69c83cf3-a471-4106-8567-b13198ebde15.gif">

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

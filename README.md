# [LETSEAT](https://let-s-eat.herokuapp.com/)
<img src="https://github.com/mogarcia626/letseat/blob/main/app/assets/images/favicon.png" alt="drawing" width="120"/>

# Introduction
Letseat is a clone of a reservation booking and management website. Anyone can create or log in to their accounts to browse through and look at reviews and photos of participating restaurants. The user can create, modify, or edit reservations to any restaurant on the site.  After the date of the visit the user can contribute a review of their own.
(Seed data on this website was randomly generated. The restaurants, their descriptions, schedules, and most reviews may not make sense!)

1. [Technologies](#technologies)
2. [Landing Page](#landing-page)
3. [User Authentication](#user-authentication)
4. [Search](#search)
5. [Restaurants](#restaurants)
6. [Reservations](#reservations)
7. [Reviews](#reviews)
8. [Upcoming Features](#upcoming-features)

## Technologies
|   **Front End**  |     **Back End**     | **Hosting** |
|:----------------:|:--------------------:|:-----------:|
| React.JS (Hooks) | Ruby on Rails v2.5.1 |    Heroku   |
|     Redux.JS     |      PostgreSQL      |  Amazon AWS |
|    JavaScript    |     Active Record    |             |
|   JQuery's AJAX  |       JBuilder       |             |
|   HTML5 & SCSS   |                      |             |

## Landing Page
The landing page welcomes users and shows a list of restaurants that are organized by cuisine, along with some basic information and aggregated review data of each restaurant. Upon opening, the default location will be New York City, however the user can change the location via a location menu in the navigation bar at the top of the webpage.

<img src="app/assets/images/readme_gifs/splash.gif?raw=true" width="490" height="290" />

## User Authentication
Users can sign up, sign in, and sign out using the session buttons in the top right side of the navigation bar. These buttons will open modals where the users can type in their credentials.
- You can access the site's restaurants and reviews without signing in, however if you would like to create a reservation or leave a review, you must be loggeed into an account.
- A demo account is available for users to login and test all Letseat features.
- Error messages will be displayed if there is an error with logging in or creating an account.

<img src="app/assets/images/readme_gifs/user_auth.gif?raw=true" width="490" height="290" />

## Search
The user can search for any restaurant in the database by cuisine or restaurant name.  The search is not case sensitive, supports partial matched, and is contained to the restaurants within the city you are currently browsing.  When the search is complete the user will be redirected to a new page where the list of results will be displayed.

<img src="app/assets/images/readme_gifs/search.gif?raw=true" width="490" height="290" />

## Restaurants
Each restaurant has its own profile page with 4 sections.
1. **Overview:** Shows the name of the restaurant along with a brief description of the restaurant and some aggregated review data.
2. **Photos:**  A collection of photos provided for each restaurant.  Clicking on any photo will open a Modal showing an enlarged version of that photo.  The user can then scroll through the rest of the photos via the modal.
3. **Reviews:**  A list of all of the reviews left for this restaurant starting with the most current one.  Also a brief summary and graphical representation of the review results.
4. **Reservation:** A form to search for available tables, and the hours that schedule for the restaurant hours of operation.  More on this in the reservation section of the ReadMe below.

<img src="app/assets/images/readme_gifs/restaurant.gif?raw=true" width="490" height="290" />
   
## Reservations 
Each restaurant's profile page has a "Make a Reservation" section that allows the user to select the date and time of a reservation. Once the reservation is made a confirmation modal will appear. Users can see all their upcoming and past reservations on their profile page.  Upcoming reservations are sorted by upcoming date, and past reservations are sorted from most recent to oldest.  Past reservations will have a link that allows you to leave Reviews, more about that in the review section of the ReadMe below. 

<img src="app/assets/images/readme_gifs/reservation.gif?raw=true" width="490" height="290" />

## Reviews
Logged in users can create a reservation for any of their past reservations via their profile page. Once a review has already been made it can be edited via the same process. 

<img src="app/assets/images/readme_gifs/review.gif?raw=true" width="490" height="290" />

## Upcoming Features
- Allow users to keep a list of access all of their favorite restaurants.
- Allow users to add photos as a part of their reviews.
- Add a filter function in the search results, to filter restaurants by different criteria.
- Introduce Restaurant owners to the app and allow them to access/edit their schedule and reservation data.

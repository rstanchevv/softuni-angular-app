Angular Softuni App is an application that has been developed for the final exam at the end of the Angular course.

# TechKings

The application represents a SPA application where users could see/post/edit/delete/buy offers.
For the purpose of Front-End development it was used Angular@16.
For the purpose of storing information and authentication/authorization it was used Firestore.

# Roles

Non-authenticated users can visit the application and are authorized to see and use:

    * Register - allows the user to Register and perform authenticated operations afterwards
    * Login - allows the user to Login with an existing account and perform authenticated operations afterwards
    * Offers - allows the user to see all open offers that have not been bought yet
    * Offer details - allows the user to see more details of an offer such as its category, price and details

Authenticated users (non-owners) can visit the application and are authorized to see and use:

    * Profile - allows the user to see who is logged in currently as well as the offers that have been bought by the current user
    * Offers - allows the user to see all open offers that have not been bought yet
    * Offers details - allows the user to see more details of an offer such as price, details. They can also buy an offer.
    * Offer details buy - functionality that allows the user to buy a specific item. Once bought, the offer is no longer displayed in the "Offers" and could be found under the buyer's profile
    * Bought offer delete - funcionaliy that allows the buyer to delete the offer from their bought list.

Authenticated users (owners) can visit the application and are authorized to see and use:

    * Profile - allows the user to see who is logged in currently as well as the offers that have been bought by the current user
    * Offers - allows the user to see all open offers that have not been bought yet
    * Offers details - allows the user to see more details of an offer such as its category, price and detail as well as to edit or delete it
    * Offer details edit - functionality that allows the user to change the details of an offer that is under their ownership;
    * Offer details delete - functionality that allows the user to delete an offer that is under their ownership;
    * Bought offer delete - funcionaliy that allows the buyer to delete the offer from their bought list.
    

# Routes

* Routes
    * / - Displays home page;
    * /about - displays About part of the page;
    * /store - Displays all offers;
    * /login - Displays Login page;
    * /register - Displays Register page;
    * /store/:id - Displays specific offer's details
    * /profile - Displays user's profile data and the offers that have been bought so far;
    * /store/:id/edit - Displays a form in which the owner of the offer could edit the offer's details
    * /store/create - Displays a form in which authenticated users could create an offer

# How to run the project

In order to run the project on your own, you need to run the following commands:

* ng serve

Once the last command has been exectued, the terminal will display the port at which you could access the application.

#Firebase hosting

The applications has also been published on a free hosting provided by Firebase.
URL: https://techkings-angular-demo-project.web.app/

Please note that the application stored on Firebase might differ from the source code in GitHub as we cannot ensure that the latest version will be available as soon as developed


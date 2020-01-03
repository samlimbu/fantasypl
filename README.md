# Fantasypl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.
# Description
The app displays fantasy premier league stats in a line chart and compare total points accumalted by different players.

# Live Demo Server
https://samfantasypremiereleague.firebaseapp.com/

# Facilities
<br> The app allows registration and users with registration can save their favorite players and will be loaded automatically as they enter website.
<br> The profile page will only be available to registered users.

# Important notes and Features
<br>  API data is received from fantasy PL servers. Eg: https://fantasy.premierleague.com/api/bootstrap-static/ 
<br>  Node js server is hosted on heroku.com as a proxy to bypass CORS and to streamline data from fantasyPL server as the data format is not suitable for this demo purpose. Eg: https://fantasy.premierleague.com/api/entry/1594471/history/
<br> Website might be slow as all services are of free option
<br>  Jwt authentication - http interceptor intercepts request to /profile backend and adds jwt token in header before sending request as it is unauthorized resource for request with no credentials
<br> Lazy Loading of various pages
<br>  all subscription of Observables are unsubscribed through use of a common function - takeUntil-function.ts > componentDestroyed
<br>  External app-config.json file is provided in assets to change parameters from outside as required.
<br> Dependencies are in package.json file






# Known Bugs
<br> Duplicate display of data in some instances
<br> y axis of chart doesn't display properly if player has 0 score in first game.

<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

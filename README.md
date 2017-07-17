[![npm][npm-badge]][npm-badge-url]
# StarWars site

## Developer notes
I used the following commands to generate the project, i added the following dependencies:
https://gist.github.com/darkndream/e0a433f5ae2d40c1f3472ec4de6cb7ae

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Angular CLI

More documentation can be found on:
https://github.com/angular/angular-cli

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

See Angular CLI documentation.

## Project structure

I'm using the following structure, please respect that:

`ng g module my-module --routing` for modules that involve routing
Then i create a folder named components under the module

`ng g component my-component --module=my-module` for components
Move the component under my-module/components and change it's reference
in the my-module/my-module.module.ts file.

Same module reference is used for services.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

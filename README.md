# Microfontend Navbar App

This project is created as a base example of a micro front that exposes a component "Navbar", this component is supposed to be consumed for another app  that works as main or consumer. [mf-app-consumer](https://github.com/josecarvajal8/mf-app-consumer)

The project uses webpack and the Module Federation Plugin [Doc](https://webpack.js.org/concepts/module-federation/)

## Installation
To start checking this project please proceed with the scripts bellow:

    $ git clone https://github.com/josecarvajal8/mf-app-navbar.git
    $ yarn install
----

## Run the app

    $ yarn start

Note that the app will run at port 3000, so the consumer should request to the module to localhost:3000/{module_name}.js

# Cypress demo

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

## Project architecture
```
ruche-cypress
├───README.md
│
├───api
│   ├───domain
│   ├───usecases
│   ├───utils
│   ├───venv(*)
│   └───main.py
│
├───bookshop-webapp
│   ├───node_modules(*)
│   ├───src
│   ├───package.json
│   ├───package-lock.json
│   ├───tailwind.config.js
│   └───tsconfig.json
│
├───cypress
│   ├───cypress
│   ├───node_modules(*)
│   ├───cypress.config.js
│   ├───package.json
│   └───package-lock.json
│
```

`(*)` means uncommitted folder

## Webapp

### Setup
In `/bookshop-webapp` folder, install dependencies from package.json:
```
npm install
```
Then run webapp:
```
npm start
```

## Run flask api

### Create and activate venv (first run)
In `/api` folder:
```
python3 -m venv <name_of_virtual_env>
source <path_to_venv>/bin/activate
pip install flask
export FLASK_APP=main
export FLASK_ENV=development
```

### Reactivate venv (when venv already created)
In `/api` folder:
```
source <path_to_venv>/bin/activate
export FLASK_APP=main
export FLASK_ENV=development
```

### Run
In `/api` folder:
```
flask run
```

## Cypress tests

First launch: install cypress dependency from package.json in `/cypress` folder:
```
npm install
```

Then run cypress tests:
```
npm run cypress:open
```
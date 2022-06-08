# Cypress demo

## Webapp

### Setup

```
cd bookshop-webapp
npm install
npm start
```

### Run

```
cd bookshop-webapp
npm install
npm start
```

## Run flask api

### Create venv (first run)

```
cd api
python3 -m venv <name_of_virtual_env>
source <path_to_venv>/bin/activate
pip install flask
export FLASK_APP=main
export FLASK_ENV=development
```

### Run

```
cd api
flask run
```

## Cypress tests

First launch: install cypress dependency from package.json
```
cd cypress
npm install
```

Then run cypress tests:
```
npm run cypress:open
```
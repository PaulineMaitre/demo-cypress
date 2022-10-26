#!/usr/bin/env bash

cd ../api

source <path-to-virtualenv>/bin/activate
#export FLASK_APP=main
#export FLASK_ENV=development
#flask run

python3 ./db/init_db.py

#!/usr/bin/env bash

cd ../api

source <path-to-virtualenv>/bin/activate

python3 ./db/init_db.py

#!/usr/bin/env bash

cd ../api

source venv/bin/activate

python3 ./db/init_db.py

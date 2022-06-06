from utils.seeds import default_books
from flask import jsonify


def find_all():
    return jsonify([book.to_json() for book in default_books])

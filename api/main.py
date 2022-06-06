from flask import Flask
from flask_cors import CORS
from usecases.find_all import find_all
from usecases.find_by_id import find_by_id

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/books', methods=['GET'])
def get_all_books():
    return find_all()

@app.route('/books/<book_id>', methods=['GET'])
def get_book(book_id):
    return find_by_id(book_id)
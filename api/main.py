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

@app.route('/books', methods=['POST'])
def create_book(book):
    return create(book)

@app.route('/books/<book_id>', methods=['PUT'])
def update_book(book_id, book):
    return update(book_id, book)

@app.route('/books/<book_id>', methods=['DELETE'])
def delete_book(book_id):
    return delete(book_id)

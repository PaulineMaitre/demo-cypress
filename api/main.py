from flask import Flask, request, jsonify
from flask_cors import CORS
from usecases.get_books import get_books
from usecases.get_book import get_book
from usecases.save_book import save_book
from usecases.update_book import update_book
from usecases.delete_book import delete_book
from domain.Book import from_json

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/')
def hello():
    return 'Hello, World!'


@app.route('/books', methods=['GET'])
def get_all_books():
    books = get_books()
    return jsonify([book.to_json() for book in books]), 200


@app.route('/books/<book_id>', methods=['GET'])
def get_one_book(book_id):
    book = get_book(book_id)
    if book is not None:
        return book.to_json(), 200
    else:
        return jsonify({'error': 'book not found'}), 404


@app.route('/books', methods=['POST'])
def create_book():
    data = request.get_json()
    book = from_json(data)
    save_book(book)
    return jsonify({'message': 'book successfully created'}), 200


@app.route('/books/<book_id>', methods=['PUT'])
def update(book_id):
    data = request.get_json()
    book = from_json(data)
    update_book(book_id, book)
    return jsonify({'message': 'book successfully updated'}), 200


@app.route('/books/<book_id>', methods=['DELETE'])
def remove_book(book_id):
    delete_book(book_id)
    return jsonify({'message': 'book successfully deleted'}), 200

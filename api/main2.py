from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.seeds import default_books
from domain.Book import Book, from_json


app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/')
def hello():
    return 'Hello, World!'


@app.route('/books', methods=['GET'])
def get_all_books():
    return jsonify([book.to_json() for book in default_books]), 200


@app.route('/books/<book_id>', methods=['GET'])
def get_one_book(book_id):
    for book in default_books:
        if str(book.id) == str(book_id):
            return book.to_json(), 200
    return jsonify({'error': 'book not found'}), 404


@app.route('/books', methods=['POST'])
def create_book():
    data = request.get_json()
    book = from_json(data)
    book.id = len(default_books) + 1
    default_books.append(book)
    return jsonify({'message': 'book successfully created'}), 200


@app.route('/books/<book_id>', methods=['PUT'])
def update_book(book_id):
    data = request.get_json()
    b = from_json(data)
    for book in default_books:
        if str(book.id) == str(book_id):
            index = default_books.index(book)
            default_books[index] = b
            return jsonify({'message': "book successfully updated"}), 200
    return jsonify({'error': 'book not found'}), 404


@app.route('/books/<book_id>', methods=['DELETE'])
def delete_book(book_id):
    for book in default_books:
        if str(book.id) == str(book_id):
            default_books.remove(book)
            return jsonify({'message': 'book successfully deleted'}), 200
    return jsonify({'error': 'book not found'}), 404

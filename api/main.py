from flask import Flask, request, jsonify
from flask_cors import CORS
from usecases.find_all import find_all
from usecases.find_by_id import find_by_id
from usecases.create import create
from usecases.update import update
from usecases.delete import delete
from domain.Book import from_json

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
def create_book():
    data = request.get_json()
    print('data', data)
    # book = jsonify(data)
    # print('book', book)
    # b = Book(data['id'], data['title'], data['author'], data['publish_date'], data['quantity'])
    b = from_json(data)
    create(b)
    return jsonify({'answer': 500})


@app.route('/books/<book_id>', methods=['PUT'])
def update_book(book_id):
    book = request.get_json()
    return update(book_id, book)


@app.route('/books/<book_id>', methods=['DELETE'])
def delete_book(book_id):
    return delete(book_id)

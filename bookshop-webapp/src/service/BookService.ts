import {Book} from "../domain/Book";
import {get, post, send} from "./ApiClient";

export async function getAllBooks(): Promise<Book[] | Error> {
    return get(`/books`);
}

export async function getBook(id: string): Promise<Book | Error> {
    return get(`/books/${id}`);
}

export async function createBook(book: Book): Promise<any | Error> {
    return post(`/books`, book);
}

export async function updateBook(id: string, book: Book): Promise<any | Error> {
    return send(`/books/${id}`, "PUT", book);
}

export async function deleteBook(id: string): Promise<any | Error> {
    return send(`/books/${id}`, "DELETE");
}

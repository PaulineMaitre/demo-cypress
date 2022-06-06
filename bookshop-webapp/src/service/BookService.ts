import {Book} from "../domain/Book";
import {get} from "./ApiClient";

export async function getAllBooks(): Promise<Book[] | Error> {
    return get(`/books`);
}

export async function getBook(id: string): Promise<Book | Error> {
    return get(`/books/${id}`);
}
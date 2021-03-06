import React, {useEffect, useState} from "react";
import {FloatingButton} from "./shared/FloatingButton";
import {Book} from "../domain/Book";
import {getAllBooks} from "../service/BookService";
import {Search} from "./Search";
import {Books} from "./Books";

export const Dashboard: React.FC = () => {

    const [allBooks, setAllBooks] = useState<Book[]>([])
    const [books, setBooks] = useState<Book[]>([])

    const getBooks = (): void => {
        getAllBooks().then((res: Book[] | Error) => {
        if (!(res instanceof Error)) {
            setAllBooks(res);
            setBooks(res);
        }
    })
}

    useEffect(() => {
        getBooks()
    }, [])

    const search = (query: string): void => {
        const filteredBooks = allBooks.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase()));
        setBooks(filteredBooks);
    };

    return (
        <div className="p-4 md:px-[8%] lg:px-[10%] lg:py-[2%] h-full">
            <Search onChange={search} onCreate={getBooks}/>
            <Books books={books}/>
            <FloatingButton />
        </div>
    );
}

import React, {useEffect, useState} from "react";
import {FloatingButton} from "./shared/FloatingButton";
import {Book} from "../domain/Book";
import {getAllBooks} from "../service/BookService";
import {Search} from "./Search";
import {Books} from "./Books";

export const Dashboard: React.FC = () => {

    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        getAllBooks().then((res: Book[] | Error) => {
            if (!(res instanceof Error)) {
                setBooks(res);
            }
        })
    }, [])

    const search = (query: string): void => {
        const filteredBooks = books.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()));
        setBooks(filteredBooks);
    };

    return (
        <div className="p-4 md:px-[8%] lg:px-[10%] lg:py-[2%] h-full">
            <Search onChange={search}/>
            <Books books={books}/>
            <FloatingButton />
        </div>
    );
}

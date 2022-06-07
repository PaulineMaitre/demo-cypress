import React from "react";
import {Book} from "../domain/Book";
import {BookCard} from "./BookCard";

interface Props {
    books: Book[];
}

export const Books: React.FC<Props> = (props: Props) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {props.books && props.books.length > 0 ? props.books.map((book: Book, key: number) => {
                return (
                    <BookCard
                        key={key}
                        book={book}
                    />
                )
            }) : (
                <div id="no-result-label" className="text-white">Aucun résultat pour cette recherche.</div>
            )}
        </div>
    );
}

import React from 'react';
import {ItemCard} from "../../shared/itemcard/itemcard.component";

export const BookList = props => (
    <div>
        {props.pages[0].content.map(book => (
            <ItemCard key={book.id} book={book} />
        ))}
    </div>
);
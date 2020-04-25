import React from 'react';
import { Book } from '../book/book.component';

export const BookList = props => (
    <div className='col-sm-4'>
        {props.pages[0].content.map(book => (
            <Book key={book.id} book={book} />
        ))}
    </div>
);
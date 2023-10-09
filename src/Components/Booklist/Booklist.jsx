import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BooklistItem from './BooklistItem';
import { fetchAlBooks } from '../../store/creators/booksCreator';

const Booklist = () => {
    const { books, status, isErrorBooks } = useSelector((state) => state.books)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlBooks())
    }, [])

    const cases = {
        pending: 'loading...',
        rejected: isErrorBooks,
        fulfilled: books?.map((el, idx) => (
            < BooklistItem book={el} key={`book=${idx}`} />
        ))
    };
    return (
        <ul>{cases[status]}</ul>
    );
}

export default Booklist;

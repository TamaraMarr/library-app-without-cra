import { dataService } from "Services/dataService";

// Actions

const BOOKS = {
    createBooks: "BOOKS::CREATE_BOOKS",
    addBook: "BOOKS::ADD_BOOK",
    getFreeBooks: "BOOKS::GET_FREE_BOOKS",
    getFreeBooksPending: "BOOKS::GET_FREE_BOOKS_PENDING",
    getFreeBooksFulfilled: "BOOKS::GET_FREE_BOOKS_FULFILLED",
    getFreeBooksRejected: "BOOKS::GET_FREE_BOOKS_REJECTED"
}

const defaultReducer = {
    books: [],
    freeBooks: [],
    status: 'no status'
}

// Reducer

export default function reducer(state = defaultReducer, action) {
    switch (action.type) {
        case BOOKS.createBooks:
            return Object.assign({}, state, {books: [1, 2, 3, 4, 5]});
        case BOOKS.addBook:
            return Object.assign({}, state, {books: [...state.books, action.payload]});
        case BOOKS.getFreeBooksPending:
            return Object.assign({}, state, {status: 'pending', freeBooks: action.payload});
        case BOOKS.getFreeBooksFulfilled:
            return Object.assign({}, state, {status: 'fulfilled', freeBooks: action.payload});
        case BOOKS.getFreeBooksRejected:
            return  Object.assign({}, state, {status: 'rejected', freeBooks: action.payload});
        default:
            return state;
    }
}

// Action Creators

export function createBooks() {
    return {
        type: BOOKS.createBooks,
        payload: null
    }
}

export function addBook(book) {
    return {
        type: BOOKS.addBook,
        payload: book
    }
}

export function getFreeBooks() {
    return {
        type: BOOKS.getFreeBooks,
        payload: dataService.getFreeEBooks()
    }
}

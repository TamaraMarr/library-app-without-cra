import { dataService } from "Services/dataService";

// Actions

const BOOKS = {
    searchType: "BOOKS::SEARCH_TYPE",
    searchQuery: "BOOKS::SEARCH_QUERY",
    getBooks: "BOOKS::GET_BOOKS",
    getBooksPending: "BOOKS::GET_BOOKS_PENDING",
    getBooksFulfilled: "BOOKS::GET_BOOKS_FULFILLED",
    getBooksRejected: "BOOKS::GET_BOOKS_REJECTED"
}

const defaultReducer = {
    books: [],
    searchType: "",
    searchQuery: ""
}

// Reducer

export default function reducer(state = defaultReducer, action) {
    switch (action.type) {
        case BOOKS.searchType:
            return Object.assign({}, state, {searchType: action.payload});
        case BOOKS.searchQuery:
            return Object.assign({}, state, {searchQuery: action.payload});
        case BOOKS.getBooksPending:
            return Object.assign({}, state, {status: 'pending', books: action.payload});
        case BOOKS.getBooksFulfilled:
            return Object.assign({}, state, {status: 'fulfilled', books: action.payload});
        case BOOKS.getBooksRejected:
            return  Object.assign({}, state, {status: 'rejected', books: action.payload});
        default:
            return state;
    }
}

// Action Creators

export function getBooks(searchType, searchQuery) {
    return {
        type: BOOKS.getBooks,
        payload: dataService.searchVolumes(searchType, searchQuery)
    }
}

export function getSearchType(searchType) {
    return {
        type: BOOKS.searchType,
        payload: searchType
    }
}

export function getSearchQuery(searchQuery) {
    return {
        type: BOOKS.searchQuery,
        payload: searchQuery
    }
}

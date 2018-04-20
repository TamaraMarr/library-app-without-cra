import { create } from 'apisauce';

import { API_KEY, BASE_URL } from "Config/constants";
import Book from "Models/Book";

class DataService {
    getApi() {
        const api = create({
            baseURL: BASE_URL,
            headers: { 'Accept': 'application/vnd.github.v3+json' }
        })

        return api;
    }

    async searchVolumes(searchType, searchQuery) {
        const api = this.getApi();
        const data = await api.get(`/volumes?q=${searchType}:${searchQuery}&maxResults=40&key=${API_KEY}`)

        return data.data.items.map(book => new Book(book));
    }

    async getSingleVolume(id) {
        const api = this.getApi();
        const data = await api.get(`/volumes/${id}?key=${API_KEY}`);
        return new Book(data.data);
    }

    async getFreeEBooks() {
        const api = this.getApi();
        const data = await api.get(`/volumes?q=books&maxResults=40&key=${API_KEY}`);
        return data.data.items.map(book => new Book(book));
    }
}

export const dataService = new DataService();

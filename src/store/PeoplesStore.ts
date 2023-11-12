import { makeAutoObservable } from 'mobx';
import {getPeoples, fetchCharacter, getNextPage} from '../lib/api';
import { People } from '../../interfaces/people'
import axios from "axios";

const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') as string);

class PeoplesStore {
    peoples: People[] = [];
    favorites: People[] = favoritesFromStorage || [];
    nextUrl: string | null = null;
    isLoading: boolean = false;
    character?: People;

    constructor() {
        makeAutoObservable(this);
    }

    setLoading = (loading: boolean) => {
        this.isLoading = loading;
    }

    fetchPeoples = async () => {
        try {
            this.isLoading = true;
            this.nextUrl = await getNextPage();
            this.peoples = await getPeoples();
        } catch (error) {
            console.error('Error fetching more peoples:', error);
        } finally {
            this.isLoading = false;
        }

    }

    fetchCharacter = async (id: string) => {
        try {
            this.isLoading = true
            this.character = await fetchCharacter(id);
        } catch (error) {
            console.error('Error fetching character:', error);
        } finally {
            this.isLoading = false;
        }
    }

    addFavorite = (person: People) => {
        if (!this.isFavorite(person)) {
            this.favorites.push(person);
            const strFavorites = JSON.stringify(this.favorites);

            localStorage.setItem('favorites', strFavorites);
        }
    }

    removeFavorite = (person: People) => {
        this.favorites = this.favorites.filter((favorite) => favorite.name !== person.name);
        const strFavorites = JSON.stringify(this.favorites);

        localStorage.setItem('favorites', strFavorites);
    }

    isFavorite = (person: People) => {
        return this.favorites.some((favorite) => favorite.name === person.name);
    }

    fetchMorePeoples = async () => {
        if (this.nextUrl && !this.isLoading) {
            try {
                this.isLoading = true;
                const response = await axios.get(this.nextUrl);
                this.peoples = [...this.peoples, ...response.data.results];
                this.nextUrl = response.data.next;
            } catch (error) {
                console.error('Error fetching more peoples:', error);
            } finally {
                this.isLoading = false;
            }
        }
    };

}


export default new PeoplesStore();
import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorites: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorites: (state, action) => {
            state.ids = state.ids.filter(item => item !== action.payload.id);
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorites;
export const removeFavorite = favoritesSlice.actions.removeFavorites;
export default favoritesSlice.reducer;
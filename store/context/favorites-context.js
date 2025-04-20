import React, { createContext, useState } from "react";
const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
    isFavorite: (id) => {}
});

function FavoritesContextProvider({children}){
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);
    function addFavorite(id){
        setFavoriteMealsIds((prevState) => [...prevState, id]);
    }
    function removeFavorite(id){
        setFavoriteMealsIds((prevState) => prevState.filter((mealId) => mealId !== id));
    }
    function isFavorite(id){
        return favoriteMealsIds.includes(id);
    }
    const context = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        isFavorite: isFavorite
    }
    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    )

}
export { FavoritesContext };
export default FavoritesContextProvider;
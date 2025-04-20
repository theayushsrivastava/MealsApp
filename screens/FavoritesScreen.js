import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
    // This screen will display the user's favorite meals.
    
    const favoriteMeals = useSelector( (state) => state.favoriteMeals.ids );
    const meals = MEALS.filter(meal => favoriteMeals.includes(meal.id));


    return (
        <View style={styles.screen}>
            <MealsList meals={meals} />
            {meals.length === 0 && (
                <Text>No favorite meals found. Start adding some!</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default FavoritesScreen;
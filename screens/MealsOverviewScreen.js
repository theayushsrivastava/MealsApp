import { FlatList, StyleSheet, Text, View } from 'react-native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useEffect, useLayoutEffect } from 'react';

function MealsOverviewScreen({route, navigation}) {
    const catId = route.params.categoryId;
    console.log(catId);
    const displayedMeals = MEALS.filter( (mealItem) => {
        return mealItem.categoryIds.indexOf(catId);
    } );

    
    useLayoutEffect( () => {
        const categoryTitle = CATEGORIES.find( (category) => category.id === catId);
        console.log(categoryTitle);
        navigation.setOptions({
            title: categoryTitle.title
        });
    }, [catId, navigation]);


    function renderMealItem(itemData) {
        function onPressHandler(){
            navigation.navigate("MealDetails", {
                mealId: itemData.item.id
            });
        }
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            duration : itemData.item.duration,
            onPress: onPressHandler
        };
        return (
            <MealItem {...mealItemProps} />
        );
    }
    
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={ (item) => item.id } renderItem={renderMealItem} />
        </View>
    );

}


export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
});
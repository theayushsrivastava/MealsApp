import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';
import { useNavigation } from '@react-navigation/native';

const MealsList = ({ meals }) => {
    const navigation = useNavigation();

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
    console.log(meals);

    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MealsList;
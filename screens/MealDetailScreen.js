import { useNavigation, useRoute } from "@react-navigation/native";
import { View , Text, Image, StyleSheet, ScrollView} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";

function MealDetailScreen() {
    const routeParams = useRoute().params;
    const navigation = useNavigation();


    const meal = MEALS.find( (m) => m.id === routeParams.mealId );
    useLayoutEffect( () => {
        navigation.setOptions({
            title: "Meal Details"
        });
    }, [navigation] );

    return <ScrollView>
        <View>
        <Image source={{ uri: meal.imageUrl}} style={ styles.image }/>
        <Text style={styles.title} >{meal.title}</Text>
        <View>
            <MealDetails duration={meal.duration} affordability={meal.affordability} complexity={meal.complexity} textStyle={styles.detailsText}/>
        </View>
        <View style={ styles.subtitleContainer }>
            <Text style={styles.subtitle} >Ingredients</Text>
        </View>
        
        <List items={meal.ingredients} />
        {/* {meal.ingredients.map( (ingredient) => <Text key={ingredient}>{ingredient}</Text>)} */}

        <View style={ styles.subtitleContainer }>
            <Text style={styles.subtitle} >Steps</Text>
        </View>
        <List items={meal.steps} />
        {/* {meal.steps.map( (step) => <Text key={step}>{step}</Text>)} */}
    </View>
        </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:250
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:24,
        margin:8,
        color: 'white'
    },
    detailsText:{
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    },
    subtitle:{
        color: '#e2b497',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 6,
        padding: 6
    },
    subtitleContainer:{
        borderBottomColor: '#e2b497', 
        borderBottomWidth: 2, 
        marginHorizontal:20, 
        marginVertical:4
    }
});
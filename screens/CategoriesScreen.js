import { FlatList, SafeAreaView } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';



function CategoriesScreen({navigation}) {
    function renderCatgoryItem(itemData){
        function onPressHandler(){
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}></CategoryGridTile>
    }

    return <FlatList data={CATEGORIES} keyExtractor={ (item) => item.id } renderItem={renderCatgoryItem} numColumns={2} />
        
}

export default CategoriesScreen;
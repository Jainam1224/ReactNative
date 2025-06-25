import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile.js";

import { CATEGORIES } from "../data/dummy-data";

// navigation => this is given to us by Stack.screen component as a prop
function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem.bind(navigation)}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

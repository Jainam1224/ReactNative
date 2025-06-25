import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

// We have alternative the route params i.e. useRoute hook - for the screens not registered as a navigation screen
// We get navigation and route prop as this is registered as a Navigation screen i.e. Stack.Screen
function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // useLayoutEffect => this is used instead of useEffect because useEffect runs after component is rendered and it takes time to set the title
  // whereas useLayoutEffect runs in parallel to the component rendering
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;

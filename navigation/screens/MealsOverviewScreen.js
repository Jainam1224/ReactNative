import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

// We have alternative the route params i.e. useRoute hook - for the screens not registered as a navigation screen
// We get navigation and route prop as this is registered as a Navigation screen i.e. Stack.Screen
function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

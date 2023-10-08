import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from "../screens/Home";
import { Statistics } from "../screens/Statistics";
import { NewMeal } from "../screens/NewMeal";
import { Feedback } from "../screens/Feedback";

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="statistics"
        component={Statistics}
        options={{ headerShown: false }}
      />
      <Screen
        name="newMeal"
        component={NewMeal}
        options={{ headerShown: false }}
      />
      <Screen
        name="feedback"
        component={Feedback}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}
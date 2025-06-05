import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // ✅ Import here
import HomeScreen from "./screen1";
import WeatherScreen from "./screen2";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
                            Home: focused ? "home" : "home-outline",
                            Weather: focused ? "cloud" : "cloud-outline",
                        };

                        return <Ionicons name={icons[route.name]} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#007AFF",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Weather" component={WeatherScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}











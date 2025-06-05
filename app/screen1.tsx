import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message"; // ✅ Import Toast
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

// ✅ Define route types properly
type RootStackParamList = {
  Home: undefined;
  Weather: undefined;
};

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<BottomTabNavigationProp<RootStackParamList, "Home">>();

    function handleNavigation() {
        navigation.navigate("Weather" as keyof RootStackParamList);
        Toast.show({ type: "success", text1: "Navigating to Weather Screen 🌦️" });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Weather App! 🌤️</Text>
            <Text style={styles.subText}>Tap below to check detailed weather updates.</Text>

            {/* Navigate with toast feedback */}
            <TouchableOpacity style={styles.button} onPress={handleNavigation}>
                <Text style={styles.buttonText}>Check Weather 🌦️</Text>
            </TouchableOpacity>

            {/* Ensure Toast is rendered */}
            <Toast />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    subText: {
        fontSize: 18,
        color: "#666",
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "#007AFF",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});









 




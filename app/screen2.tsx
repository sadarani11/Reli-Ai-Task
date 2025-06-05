import { StyleSheet, Text, View } from "react-native";

const WeatherScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>🌦️ Current Weather</Text>
            <Text style={styles.temp}>Temperature: 27°C</Text>
            <Text style={styles.status}>Condition: Partly Cloudy</Text>
        </View>
    );
};

export default WeatherScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dbeafe",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    temp: {
        fontSize: 20,
        color: "#007AFF",
        marginTop: 10,
    },
    status: {
        fontSize: 18,
        color: "#666",
        marginTop: 5,
    },
});







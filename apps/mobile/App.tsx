import { AnimatedSquares, HelloWorld } from "components";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, View, Dimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export function App() {
  const width = Dimensions.get("screen").width;
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <Text style={styles.text}>
              Open up App.tsx to start working on your app!
            </Text>
            <StatusBar style="auto" />
            <HelloWorld width={256} height={256} r={256 / 3} />
            <View style={styles.spacer} />
            <AnimatedSquares
              width={width - 20}
              height={300}
              squares={4}
              speed={1000}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
    alignItems: "center",
    justifyContent: "center",
  },
  spacer: {
    height: 20,
  },
  text: {
    color: "rgba(255, 255, 255, 0.87)",
    paddingBottom: 8,
  },
});

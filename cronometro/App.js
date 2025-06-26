import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return;

    setIsRunning(true);
    const startTime = Date.now() - elapsedTime;

    intervalRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 10);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(elapsedTime)}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={isRunning ? pauseTimer : startTimer}>
          <FontAwesome name={isRunning ? "pause" : "play"} size={24} color="white" />
          <Text style={styles.buttonText}>{isRunning ? "Pausar" : "Iniciar"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: "#e74c3c" }]} onPress={resetTimer}>
          <FontAwesome name="refresh" size={24} color="white" />
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 40,
  },
  buttons: {
    flexDirection: "row",
    gap: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

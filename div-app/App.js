import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");

  const total = parseFloat(bill) || 0;
  const numberOfPeople = parseInt(people) || 1;
  const tipValue = parseFloat(tip) || 0;

  const totalWithTip = total + tipValue;
  const perPerson = numberOfPeople > 0 ? totalWithTip / numberOfPeople : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DivApp</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Valor total da conta (R$)"
        value={bill}
        onChangeText={setBill}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número de pessoas"
        value={people}
        onChangeText={setPeople}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Gorjeta (opcional) R$"
        value={tip}
        onChangeText={setTip}
      />

      <View style={styles.resultBox}>
        <Text style={styles.resultText}>Cada pessoa deve pagar:</Text>
        <Text style={styles.amount}>R$ {perPerson.toFixed(2)}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8fa",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    fontSize: 16,
  },
  resultBox: {
    marginTop: 30,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    color: "#333",
  },
  amount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2ecc71",
    marginTop: 8,
  },
});

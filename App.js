import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const ALREADY_WON_LOTTO_NUMBER = ["1,2,3,4,5,6"];
  const MAX = 42;
  const MIN = 1;
  const LOTTO_BALL_COUNT = 6;
  const MAX_RETRY_COUNT = 5;

  const [show, setShow] = useState(false);

  let getLottoNum = () => {
    let lotto_num_array = [];

    for (let retry_count = 0; retry_count < MAX_RETRY_COUNT; retry_count++) {
      const lotto_num_with_comma = getLottoNumArray(lotto_num_array).join(",");

      if (!ALREADY_WON_LOTTO_NUMBER.includes(lotto_num_with_comma)) {
        return lotto_num_with_comma;
      }
    }
  };

  let getLottoNumArray = (lotto_num_array) => {
    for (let step = 0; step < LOTTO_BALL_COUNT; step++) {
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      const lotto_num = Math.floor(Math.random() * (MAX - MIN)) + MIN;
      lotto_num_array.push(lotto_num);
    }
    return lotto_num_array;
  };

  return (
    <View style={styles.container}>
      <Text>{getLottoNum()}</Text>
      <TouchableOpacity onPress={() => setShow(!show)} style={styles.button}>
        <Text style={styles.buttonText}>로또 번호 추출하기</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

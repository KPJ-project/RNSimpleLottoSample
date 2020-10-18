import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ALREADY_WON_LOTTO_NUMBER = ["1,2,3,4,5,6"];
const MAX = 42;
const MIN = 1;
const LOTTO_BALL_COUNT = 6;
const MAX_RETRY_COUNT = 5;

export default function App() {
  const [show, setShow] = useState(false);

  let getLottoNum = () => {
    let lotto_num_array = [];

    for (let retry_count = 0; retry_count < MAX_RETRY_COUNT; retry_count++) {
      const lotto_num_with_comma = getLottoNumArray(lotto_num_array).join(",");

      if (!ALREADY_WON_LOTTO_NUMBER.includes(lotto_num_with_comma)) {
        return lotto_num_with_comma.split(",");
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

  const getLottoNumberBackGroundColor = (lottoNumberIndex) => {
    if (lottoNumberIndex == 0) {
      return stylesLottoNumber.lottoNumberBackGroundColorFirtst;
    } else if (lottoNumberIndex == 1) {
      return stylesLottoNumber.lottoNumberBackGroundColorSecond;
    } else if (lottoNumberIndex == 2) {
      return stylesLottoNumber.lottoNumberBackGroundColorThird;
    } else {
      return stylesLottoNumber.lottoNumberBackgroundColorDefault;
    }
  };

  const lottoNumberList = getLottoNum().map((lottoNum, index) => (
    <View
      key={index}
      style={[
        stylesLottoNumber.lottoNumberDefault,
        getLottoNumberBackGroundColor(index),
      ]}
    >
      <Text style={stylesLottoNumber.lottoNumText}>{lottoNum}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View
        style={[
          stylesLottoNumber.container,
          Platform.OS === "ios"
            ? stylesLottoNumber.iosShadow
            : style.LottoNumber.androidShadow,
        ]}
      >
        {lottoNumberList}
      </View>

      <View style={stylesLottoButton.container}>
        <TouchableOpacity
          onPress={() => setShow(!show)}
          style={stylesLottoButton.button}
        >
          <Text style={stylesLottoButton.text}>로또 번호 추출하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesLottoButton = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
});

const stylesLottoNumber = StyleSheet.create({
  container: {
    flex: 0.8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  androidShadow: { elevation: 3 },
  iosShadow: {
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },
  lottoNumberDefault: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  lottoNumberBackgroundColorDefault: {
    backgroundColor: "#aaaaaa",
  },
  lottoNumberBackGroundColorFirtst: {
    backgroundColor: "#fac32d",
  },
  lottoNumberBackGroundColorSecond: {
    backgroundColor: "#6dc9f0",
  },
  lottoNumberBackGroundColorThird: {
    backgroundColor: "#fd7375",
  },
  lottoNumText: {
    fontSize: 20,
    color: "#fff",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

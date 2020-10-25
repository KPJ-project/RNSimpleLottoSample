import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ALREADY_WON_LOTTO_NUMBER = ["1,2,3,4,5,6"];
const MAX = 46;
const MIN = 1;
const LOTTO_BALL_COUNT = 6;
const MAX_RETRY_COUNT = 5;

export default function App() {
  const [show, setShow] = useState(false);

  const getShadowStyleByPlatform = (iosStyle, androidStyle) => {
    return Platform.OS === "ios" ? iosStyle : androidStyle;
  };

  let getLottoNum = () => {
    let lottoNumberArray = [];

    for (let retry_count = 0; retry_count < MAX_RETRY_COUNT; retry_count++) {
      const lottoNumberWithComma = getLottoNumArray(lottoNumberArray).join(",");

      if (!ALREADY_WON_LOTTO_NUMBER.includes(lottoNumberWithComma)) {
        return lottoNumberWithComma.split(",");
      }
    }
  };

  let getLottoNumArray = (lottoNumberArray) => {
    for (let step = 0; step < LOTTO_BALL_COUNT; step++) {
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random

      while (true) {
        const lotto_num = Math.floor(Math.random() * (MAX - MIN)) + MIN;
        if (lottoNumberArray.includes(lotto_num)) {
          continue;
        } else {
          lottoNumberArray.push(lotto_num);
          break;
        }
      }
    }
    return lottoNumberArray.sort((a, b) => a - b);
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
      <Text
        style={[
          stylesLottoNumber.lottoNumText,
          getShadowStyleByPlatform(
            stylesLottoNumber.iosShadow,
            stylesLottoNumber.androidShadow
          ),
        ]}
      >
        {lottoNum}
      </Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View
        style={[
          stylesLottoNumber.container,
          getShadowStyleByPlatform(
            stylesLottoNumber.iosShadow,
            stylesLottoNumber.androidShadow
          ),
        ]}
      >
        {lottoNumberList}
      </View>

      <View
        style={[
          stylesLottoButton.container,
          getShadowStyleByPlatform(
            stylesLottoButton.iosShadow,
            stylesLottoButton.androidShadow
          ),
        ]}
      >
        <TouchableOpacity
          onPress={() => setShow(!show)}
          style={stylesLottoButton.button}
        >
          <Text
            style={[
              stylesLottoButton.text,
              getShadowStyleByPlatform(
                stylesLottoButton.iosShadow,
                stylesLottoButton.androidShadow
              ),
            ]}
          >
            로또 번호 추출하기
          </Text>
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
  androidShadow: { elevation: 3 },
  iosShadow: {
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
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
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
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

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

  const getLottoNumberBackGroundColor = (lottoNum) => {
    if (lottoNum >= 1 && lottoNum <= 10) {
      return stylesLottoNumber.lottoNumberBackGroundColorBetween1To10;
    } else if (lottoNum >= 11 && lottoNum <= 20) {
      return stylesLottoNumber.lottoNumberBackGroundColorBetween11To20;
    } else if (lottoNum >= 21 && lottoNum <= 30) {
      return stylesLottoNumber.lottoNumberBackGroundColorBetween21To30;
    } else if (lottoNum >= 31 && lottoNum <= 40) {
      return stylesLottoNumber.lottoNumberBackgroundColorBetween31To40;
    } else {
      return stylesLottoNumber.lottoNumberBackgroundColorBetween41To45;
    }
  };

  const lottoNumberList = getLottoNum().map((lottoNum, index) => (
    <View
      key={index}
      style={[
        stylesLottoNumber.lottoNumberDefault,
        getLottoNumberBackGroundColor(lottoNum),
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
  lottoNumberBackGroundColorBetween1To10: {
    backgroundColor: "#fac32d",
  },
  lottoNumberBackGroundColorBetween11To20: {
    backgroundColor: "#6dc9f0",
  },
  lottoNumberBackGroundColorBetween21To30: {
    backgroundColor: "#fd7375",
  },
  lottoNumberBackgroundColorBetween31To40: {
    backgroundColor: "#aaaaaa",
  },
  lottoNumberBackgroundColorBetween41To45: {
    backgroundColor: "#b1d64d",
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

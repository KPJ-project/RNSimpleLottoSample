import { StyleSheet } from "react-native";

export const stylesLottoButton = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  button: {
    backgroundColor: "#778ca3",
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

export const stylesLottoNumber = StyleSheet.create({
  container: {
    flex: 0.8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
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

export const stylesStatusBar = StyleSheet.create({
  container: {
    flex: 0.13,
    width: "100%",
    backgroundColor: "#778ca3",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  text: { color: "#fff", fontSize: 25, fontWeight: "bold" },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: 400,
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: 25,
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -60,
  },
  btn: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 245,
    marginTop: -37,
  },
  btnRegistration: {
    width: 343,
    color: "#2196F3",
    gap: 12,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  textRegistration: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  text: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    marginTop: 35,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    color: "#BDBDBD",
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    borderRadius: 8,
  },
  signIn: {
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
  },
  textShow: {
    width: 72,
    height: 19,
    fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",
    marginTop: -53,
    marginLeft: 250,
  },
});
export default styles;

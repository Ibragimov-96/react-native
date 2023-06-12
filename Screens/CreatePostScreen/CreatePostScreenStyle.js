import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
  width:"100%",
  height:"100%",
    backgroundColor: "#fff",
  },
  header:{
width:"100%",
height:88,
borderWidth:1,
padding:0,

borderBottomColor:"#BDBDBD",
  },
  text:{
marginTop:41,
  marginLeft:"auto",
  marginRight:"auto",
    fontSize: 17,
    lineHeight: 25,
    color:"#212121"
  },
  content:{
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:32
  },
  image:{
    width:343,
    height:240,
    borderRadius:8,
    backgroundColor:"#F6F6F6"
  },
  textFoto:{
    marginTop:8,
    fontSize: 16,
lineHeight: 19,
color: "#BDBDBD"

  },
  input:{
    width:343,
    height:50,
    borderBottomColor:"#BDBDBD",
  borderBottomWidth:1
  },
  btn:{
    width:343,
    height:51,
    backgroundColor:"#F6F6F6",
    borderRadius:100,
    justifyContent:"center",
    alignItems:'center',
    marginTop:32
  }
});
export default styles;
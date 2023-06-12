import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
  width:"100%",
  height:"100%",
    backgroundColor: "#fff",
  },
  header:{
    display:"flex",
    flexDirection:"row",
width:"100%",
height:88,
borderWidth:1,
justifyContent:"center",
alignItems:"center",
padding:0,

borderBottomColor:"#BDBDBD",
  },
  text:{
marginTop:"auto",
marginBottom:"auto",
marginLeft:108,
    fontSize: 17,
    lineHeight: 25,
    color:"#212121"
  },
  containerUser:{
  display:'flex',
  flexDirection:'row',
  alignItems:"center",
  marginTop:32,
  marginLeft:16,
  gap:8
  },
  avatar:{
    width:60,
    height:60,
    borderRadius:16,
    backgroundColor:"#FF6C00"
  },
  userName:{
fontSize:13,
lineHeight:15,
color:"#212121"
  },
  userEmail:{
    color:"#212121CC"
  },
  logOut:{
   marginLeft:109
  },
  btnAdd:{
    backgroundColor:"#FF6C00",
    width:70,
    height:40,
    borderRadius:20,
    paddingLeft:29,
    paddingTop:13
  }

});
export default styles;
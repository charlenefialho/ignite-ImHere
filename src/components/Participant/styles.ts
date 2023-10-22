import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  name:{
    flex:1,
    color:'#FFF',
    marginLeft: 16,
    marginRight: 12,
  },
  input:{
    flex:1,
    height:56,
    backgroundColor: '#1F1E26',
    borderRadius: 5,
    color: '#FFF',
    padding:16,
    fontSize: 16,
    marginRight: 12,
  },
  button:{
    width:56,
    height:56,
    borderRadius:5,
    backgroundColor:'#E44046',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color: '#FFF',
    fontSize: 24
  }
})
// import { TouchableOpacity, View } from "react-native";
// import React, { useState } from "react";
// import { View, Text, Switch, TouchableOpacity } from 'react-native';

// import { Switch } from "react-native-gesture-handler";

// export default function explore(){
// const [ darkTheme, setDarkTheme] = useState (false);
// const [ result, setResult] = useState('Zeeshan');

// const colors ={
//   dark: '#22252D',
//   dark1: '#292B36',
//   dark2: '#272B33',
//   light: "FFF",
//   light1: "F7F7F7", 
//   light2: "#F1F1F1"
// };

//   const getColor = (light: string , dark: string): String=> (darkTheme ? dark : light);
   
//   const Btn = ({title}) => (
//     <TouchableOpacity>
//     <Text style={{ fontSize: 37, color: "black"}}>{title}</Text>
//   </TouchableOpacity>

//   )

//   return(
//     <View 
//       style={{
//       height: '100%',
//       width: '100%',
//       paddingVertical: 20,
//       backgroundColor: getColor(colors.light, colors.dark),
//       alignItems: "center"
// }}>
//      <Switch  
//      value={darkTheme} 
//      onValueChange={() => setDarkTheme(!darkTheme)} 
//      thumbColor={getColor(colors.dark, colors.light)} 
//      trackColor={{true: colors.light2, false: colors.dark2}}
//       /> 
//      <Text 
//      style={{ 
//       fontSize: 40,
//       color: getColor(colors.dark, colors.light), 
//       width: "100%", 
//       textAlign:"right", 
//       paddingRight: 20,
//        }}>
//         {result}
//         </Text> 
//         <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//           <Btn title= "9" />
//           <TouchableOpacity>
//             <Text style={{ fontSize: 37, color: "black"}}>1</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={{ fontSize: 37, color: "black"}}>1</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={{ fontSize: 37, color: "black"}}>1</Text>
//           </TouchableOpacity>
//         </View>
//     </View>
//   );
// }
// import { View, Text, TouchableOpacity } from 'react-native';
// import React, { useState } from "react";
// import { Switch } from 'react-native-gesture-handler';

// export default function Calculator() {
//   const [darkTheme, setDarkTheme] = useState(false);
//   const [result, setResult] = useState('');

//   const colors = {
//     dark: '#22252D',
//     dark1: '#292B36',
//     dark2: '#272B33',
//     light: '#FFF',
//     light1: "#F1F1F1",
//     light2: "#F7F7F7"
//   };

//   const getColor = (light: string, dark: string): string => (darkTheme ? dark : light);

//   const handlePress = (value: string) => {
//     if (value === '=') {
//       try {
//         setResult(eval(result).toString());
//       } catch {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setResult('');
//     } else {
//       setResult(result + value);
//     }
//   };

//   const buttons = [
//     '7', '8', '9', '/',
//     '4', '5', '6', '*',
//     '1', '2', '3', '-',
//     'C', '0', '=', '+'
//   ];

//   return (
//     <View style={{
//       flex: 1,
//       padding: 20,
//       backgroundColor: getColor(colors.light, colors.dark),
//       alignItems: "center",
//       justifyContent: "center",
//     }}>
//       <Switch
//         value={darkTheme}
//         onValueChange={() => setDarkTheme(!darkTheme)}
//         thumbColor={getColor(colors.dark, colors.light)}
//         trackColor={{ true: colors.light2, false: colors.dark2 }}
//       />

//       <Text style={{
//         fontSize: 50,
//         color: getColor(colors.dark, colors.light),
//         width: "100%",
//         textAlign: "right",
//         paddingRight: 20,
//         marginBottom: 20,
//         fontWeight: 'bold'
//       }}>{result}</Text>

//       <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
//         {buttons.map((button) => (
//           <TouchableOpacity
//             key={button}
//             onPress={() => handlePress(button)}
//             style={{
//               width: 80,
//               height: 80,
//               margin: 5,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: getColor(colors.light1, colors.dark1),
//               borderRadius: 20,
//               shadowColor: "#000",
//               shadowOffset: { width: 0, height: 4 },
//               shadowOpacity: 0.3,
//               shadowRadius: 5,
//               elevation: 5,
//             }}>
//             <Text style={{ fontSize: 35, fontWeight: 'bold', color: getColor(colors.dark, colors.light) }}>{button}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// }

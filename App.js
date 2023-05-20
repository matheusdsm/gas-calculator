//gas-calculator; licensed under MIT license. brought by matheusdsm/justonedev.

import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	
  const [valor1, setValor1] = useState(0);
	
  const [valor2, setValor2] = useState(0);

  const [resultado, setResultado] = useState("");

  function _gasSum(){
	  
	  let sum = parseFloat(valor1) / parseFloat(valor2);

	  let gasSum = sum;
	  
	  let result = "";
	  
	  if (gasSum < 0.7) {
		  result = "Abasteça com Álcool :) \n - Diferença: " + gasSum;
	  } 
	  else if (gasSum >= 0.7) {
		  result = "Abasteça com Gasolina \n - Diferença: " + gasSum;
	  }
	  else {
		  result = "Formato não suportado.";
	  }

	  setResultado(result);
  }
	
  return (
    <View style={styles.container}>
      
		  <Text style={styles.titulo}><i>(: Compensação de Combustível :)</i></Text>
		
		  <View style={styles.bloco}>
		  	<Text style={styles.label}> Valor do Litro - Álcool R$ (eg; 2.60): </Text>

			  <TextInput 
				  style={styles.input}
				  value={valor1}
				  onChangeText={(valor)=>setValor1(valor)}
				  inputMode='numeric'
				  keyboardType='numeric'
			  />
		  </View>
		  
		  <View style={styles.bloco}>
		  	<Text style={styles.label}> Valor do Litro - Gasolina R$ (eg; 3.35): </Text>

			  <TextInput 
				  style={styles.input}
				  value={valor2}
				  onChangeText={(valor)=>setValor2(valor)}
				  inputMode='numeric'
				  keyboardType='numeric'
			  />
		  </View>
		  

		  <View style={styles.bloco}> 
		  	<TouchableOpacity style={styles.botao} onPress={_gasSum}>
				  <Text style={styles.txtBotao}>[Ver resultado] </Text>
			  </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}>

		  	<Text style={styles.label}> Resultado: {resultado}</Text>
		  </View>

    </View>
	
  );
}

let defaultWidth = 560;

const styles = StyleSheet.create({
  botao:{
	backgroundColor: '#BB4D04',
	width: defaultWidth,
	paddingVertical: '1.2rem',
	paddingHorizontal: '1rem',
	marginTop: 20
  },
  txtBotao:{
	color: '#EEE',
	fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#d9695c',
    alignItems: 'center',
    justifyContent: 'center',
	opacity: 0.75,
	fontFamily: 'Arial'
  },
  titulo:{
	fontSize:30,
	color: '#331832',
	marginVertical: '1.2rem'
  },
  label:{
    fontSize: 30,
	width: defaultWidth,
	marginVertical: '1.1rem'
  },
  input:{
	borderWidth: 2,
	fontSize: 20,
	paddingVertical: '0.6rem',
	paddingHorizontal: '0.4rem'
  }
});
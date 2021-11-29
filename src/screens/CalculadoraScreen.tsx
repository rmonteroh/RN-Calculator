import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {Boton} from '../components/Boton';
import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    deleteBtn,
    armarNumero,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.smallResult}>{numeroAnterior}</Text>
      )}
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
        {numero}
      </Text>

      <View style={styles.fila}>
        <Boton texto="C" color="#9b9b9b" action={limpiar} />
        <Boton texto="+/-" color="#9b9b9b" action={positivoNegativo} />
        <Boton texto="del" color="#9b9b9b" action={deleteBtn} />
        <Boton texto="/" color="#ff9427" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <Boton texto="1" action={armarNumero} />
        <Boton texto="2" action={armarNumero} />
        <Boton texto="3" action={armarNumero} />
        <Boton texto="*" color="#ff9427" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="4" action={armarNumero} />
        <Boton texto="5" action={armarNumero} />
        <Boton texto="6" action={armarNumero} />
        <Boton texto="-" color="#ff9427" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="7" action={armarNumero} />
        <Boton texto="8" action={armarNumero} />
        <Boton texto="9" action={armarNumero} />
        <Boton texto="+" color="#ff9427" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="0" ancho action={armarNumero} />
        <Boton texto="." action={armarNumero} />
        <Boton texto="=" color="#ff9427" action={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;

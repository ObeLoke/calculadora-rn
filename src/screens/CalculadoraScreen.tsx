import React from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');

    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const limpiar = () => {
        console.log("entré");
        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numeroTexto.startsWith('-0')) {
            // Punto Decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
            }
            else if (numeroTexto === '0' && numero.includes('.')) { // Evaluar si es otro cero y hay un punto
                setNumero(numero + numeroTexto);
            }
            else if (numeroTexto !== '0' && !numero.includes('.')) { // Evaluar si es diferente de cero y no tiene un punto
                setNumero(numeroTexto)
            }
            else if (numeroTexto === '0' && !numero.includes('.')) { // Evitar 0000.0
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto)
            }
        } else {
            setNumero(numero + numeroTexto)
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}> {numeroAnterior}</Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>


            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
                <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
                <BotonCalc texto="del" color="#9B9B9B" accion={limpiar} />
                <BotonCalc texto="/" color="#FF9427" accion={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />
                <BotonCalc texto="X" color="#FF9427" accion={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />
                <BotonCalc texto="-" color="#FF9427" accion={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#FF9427" accion={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="0" ancho accion={armarNumero} />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#FF9427" accion={limpiar} />
            </View>
        </View>
    )
}
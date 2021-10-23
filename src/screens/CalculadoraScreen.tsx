import React from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');

    const limpiar = () => {
        setNumero('0');
    }


    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}> 1,500.00</Text>
            <Text style={styles.resultado}> {numero} </Text>


            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
                <BotonCalc texto="+/-" color="#9B9B9B" />
                <BotonCalc texto="del" color="#9B9B9B" />
                <BotonCalc texto="/" color="#FF9427" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="7" />
                <BotonCalc texto="8" />
                <BotonCalc texto="9" />
                <BotonCalc texto="X" color="#FF9427" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" />
                <BotonCalc texto="5" />
                <BotonCalc texto="6" />
                <BotonCalc texto="-" color="#FF9427" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" />
                <BotonCalc texto="2" />
                <BotonCalc texto="3" />
                <BotonCalc texto="+" color="#FF9427" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="0" ancho />
                <BotonCalc texto="." />
                <BotonCalc texto="=" color="#FF9427" />
            </View>
        </View>
    )
}
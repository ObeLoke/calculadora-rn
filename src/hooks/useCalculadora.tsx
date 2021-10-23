import { useState, useRef } from 'react';

enum Operadores {
    sumar, restar, multiplicar, divir
}


export const useCalculadora = () => {

    const [numero, setNumero] = useState('0');

    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
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

    const btnDelete = () => {

        if (numero.length === 2 && numero.includes('-')) {
            setNumero('0')
        } else {
            setNumero(numero.length === 1 ? '0' : numero.slice(0, -1))
        }
    }

    const cambiarNumPorAnterior = () => {

        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }

        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();

        ultimaOperacion.current = Operadores.divir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();

        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();

        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();

        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        if (num1 == 0 && num2 == 0) {

        } else {

            switch (ultimaOperacion.current) {
                case Operadores.sumar:
                    setNumero(`${num1 + num2}`)
                    break;
                case Operadores.restar:
                    setNumero(`${num2 - num1}`)
                    break;
                case Operadores.multiplicar:
                    setNumero(`${num1 * num2}`)
                    break;
                case Operadores.divir:
                    setNumero(`${num2 / num1}`)
                    break;
            }

            setNumeroAnterior('0');
        }

    }
    return {
        numero,
        numeroAnterior,
        ultimaOperacion,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        armarNumero,
        calcular
    }

}
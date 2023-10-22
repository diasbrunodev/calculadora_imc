import { useState } from "react";
//importa mascara 
import InputMask from 'react-input-mask';
//importa estilo module
import styles from './CalculoImc.module.css';

const CalculoImc = () => {
    
    const [valorAltura, setValorAltura] = useState('');
    const [valorPeso, setValorPeso] = useState('');
    const [resultado, setResultado] = useState('');
    const [categoria, setCategoria] = useState('');

    //pega valor digitado no campo
    const pegaAltura = (e) => {
        setValorAltura(e.target.value);
    };
    //pega valor digitado no campo
    const pegaPeso = (e) => {
        setValorPeso(e.target.value);
    };

    const executaCalculo = () => {
        //converte valores para número
        const altura = parseFloat(valorAltura);
        const peso = parseFloat(valorPeso);
        const imc = peso / (altura * altura);
        //arredonda valor para uma casa decimal
        const arredondaValor = imc.toFixed(1);
//cria condições para classificação do valor imc
        setResultado(arredondaValor);
        if (imc < 16.9) {
            setCategoria('Muito abaixo do peso');
        } else if (imc >= 16.9 && imc < 18.4) {
            setCategoria('Abaixo do Peso');
        } else if (imc >= 18.4 && imc < 24.9) {
            setCategoria('Peso normal');
        } else if (imc >= 24.9 && imc < 29.9) {
            setCategoria('Acima do peso');
        } else if (imc >= 29.9 && imc < 34.9) {
            setCategoria('Obesidade grau I');
        } else if (imc >= 34.9 && imc < 40) {
            setCategoria('Obesidade grau II');    
        } else {
            setCategoria('Obesidade grau III');
        }
    }
    return (

        <div className="container">
            <div className={styles.calculadora}>
                <InputMask className={styles.input} mask="9.99" maskChar=" " value={valorAltura} onChange={pegaAltura} placeholder="Altura (0.00m)" />
                <input className={styles.input} type="number" value={valorPeso} onChange={pegaPeso} placeholder="Peso (0.00kg)" />
                <button className={styles.button} onClick={executaCalculo}>Calcular</button>
            </div>
                <p className={styles.p}><b>IMC:</b> {resultado}</p>
                <p className={styles.p}><b>Categoria:</b><br/> {categoria}</p>
        </div>
    )
};

export default CalculoImc
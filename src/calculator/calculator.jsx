import { useState } from "react";


const Calculator = () =>{

    
    //const result = document.getElementById('result')
    //seven.addEventListener('click', ()=>{
    //     console.log('7')
    //     let resultText = result.innerHTML
    //     resultText = '7'
    // })

    const [firstOperand, setFirstOperand] = useState(0)

    const [waitingforSecond, setWaitingForSecond] = useState(false)
    const [secondOperand, setSecondOperand] = useState(0)

    const [waitForOperator, setWaitForOperator] = useState(true)
    const [operator, setOperator] = useState('')

    const [result, setResult] = useState(0)

    const [screen, setScreen] = useState(0)

    const evaluateNums =(e)=>{
        if(waitingforSecond === false){
            if(firstOperand === 0){
                setFirstOperand(e.target.innerHTML)
                setScreen(e.target.innerHTML)
            }else{
                setFirstOperand(firstOperand + e.target.innerHTML)
                setScreen(firstOperand + e.target.innerHTML)
            }
            
            //setScreen(firstOperand)
        }else{ // we are on the second operand now:
            if(secondOperand === 0){
                setSecondOperand(e.target.innerHTML)
                setScreen(e.target.innerHTML)
            }else{
                setSecondOperand(secondOperand + e.target.innerHTML)
                setScreen(secondOperand + e.target.innerHTML)
            } 
        }
    }

    const evaluateOperator = (e)=>{
        if(waitForOperator === true){
            setOperator(e.target.innerHTML)
            setScreen(e.target.innerHTML)
            setWaitingForSecond(true)
            setWaitForOperator(false)
        }
    }

    const solve = ()=>{
        if(!isNaN(firstOperand) && !isNaN(secondOperand)){
            if(operator === '+'){
                let answer = parseInt(firstOperand) + parseInt(secondOperand)
                setResult(answer)
                setScreen(answer)
                setFirstOperand(answer)
            }else if(operator === '-'){
                let answer = parseInt(firstOperand) - parseInt(secondOperand)
                setResult(answer)
                setScreen(answer)
                setFirstOperand(answer)
            }else if(operator === '*'){
                let answer = parseInt((firstOperand) * parseInt(secondOperand))
                setResult(answer)
                setScreen(answer)
                setFirstOperand(answer)
                setScreen(answer)
            }else if(operator === '/'){
                let answer = parseInt(firstOperand) / parseInt(secondOperand)
                setResult(answer)
                setScreen(answer)
                setFirstOperand(answer)
            }else{
                //setResult(0)
            }
            setWaitForOperator(true)
            setWaitingForSecond(true)
            setSecondOperand(0)
            
        }
        
    }
    const clear=()=>{
        setResult(0)
        setScreen(0)
        setFirstOperand(0)
        setSecondOperand(0)
        setWaitingForSecond(false)
        setWaitForOperator(false)
        setOperator('')
        
    }

    return(
        <div>
            <h1>Calculator</h1>
            <div id="numbers-grid">
                <button onClick={evaluateNums}className="numbers" id="7">7</button>
                <button onClick={evaluateNums}className="numbers" id="8">8</button>
                <button onClick={evaluateNums}className="numbers" id="9">9</button>

                <button onClick={evaluateOperator}className="numbers op" id="/">/</button>

                <button onClick={evaluateNums}className="numbers" id="4">4</button>
                <button onClick={evaluateNums}className="numbers" id="5">5</button>
                <button onClick={evaluateNums}className="numbers" id="6">6</button>

                <button onClick={evaluateOperator}className="numbers op" id="*">*</button>

                <button onClick={evaluateNums}className="numbers" id="1">1</button>
                <button onClick={evaluateNums}className="numbers" id="2">2</button>
                <button onClick={evaluateNums}className="numbers" id="3">3</button>

                <button onClick={evaluateOperator}className="numbers op" id="-">-</button>

                <button onClick={evaluateNums}className="numbers" id="0">0</button>

                <button className="numbers" id=".">.</button>

                <button onClick={solve}className="numbers" id="equals">=</button>

                <button onClick={evaluateOperator}className="numbers op" id="+">+</button>
            </div>
            <div className="calc-entry">
                <input id="screen"type="text" value={screen}disabled></input>
                <button onClick={clear}>Clear</button>
                
                <h3>First Operand = {firstOperand}</h3>
                <h3>operator: {operator}</h3>
                <h3>Second Operand = {secondOperand}</h3>
                <h2>Result:<span id="result">{result}</span></h2>
            </div>
        </div>
        
    )
}

export default Calculator;
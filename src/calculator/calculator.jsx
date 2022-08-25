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

    const [waitForOperator, setWaitForOperator] = useState(false)
    const [operator, setOperator] = useState('')

    const [result, setResult] = useState(0)

    const [screen, setScreen] = useState(0)

    const evaluateNums =(e)=>{
        if(waitingforSecond === false){
            if(firstOperand === 0){
                console.log(e.target.innerHTML)
                setFirstOperand(e.target.innerHTML)
                setScreen(firstOperand)
            }else{
                setFirstOperand(firstOperand + e.target.innerHTML)
                setScreen(firstOperand)
            }
        }else{ // we are on the second operand now:
            if(secondOperand === 0){
                console.log(e.target.innerHTML)
                setSecondOperand(e.target.innerHTML)
            }else{
                setSecondOperand(secondOperand + e.target.innerHTML)
            } 
        }
    }

    const evaluateOperator = (e)=>{
        if(waitForOperator === false){
            setOperator(e.target.innerHTML)
            setWaitingForSecond(true)
            setWaitForOperator(false)
        }
    }

    const solve = ()=>{
        if(!isNaN(firstOperand) && !isNaN(secondOperand)){
            if(operator === '+'){
                setResult(parseInt(firstOperand) + parseInt(secondOperand))
                setFirstOperand(result)
                setWaitForOperator(true)
            }else if(operator === '-'){
                setResult(parseInt(firstOperand) - parseInt(secondOperand))
                setFirstOperand(result)
                setWaitForOperator(true)
            }else if(operator === '*'){
                setResult(parseInt(firstOperand) * parseInt(secondOperand))
                setFirstOperand(result)
            setWaitForOperator(true)
            }else if(operator === '/'){
                setResult(parseInt(firstOperand) / parseInt(secondOperand))
                setFirstOperand(result)
            setWaitForOperator(true)
            }else{
                setResult(0)
            }
        }
        
    }

    return(
        <div>
            <h1>Calculator</h1>
            <div id="numbers-grid">
                <button onClick={evaluateNums}className="numbers" id="7">7</button>
                <button onClick={evaluateNums}className="numbers" id="8">8</button>
                <button onClick={evaluateNums}className="numbers" id="9">9</button>

                <button onClick={evaluateOperator}className="numbers" id="/">/</button>

                <button onClick={evaluateNums}className="numbers" id="4">4</button>
                <button onClick={evaluateNums}className="numbers" id="5">5</button>
                <button onClick={evaluateNums}className="numbers" id="6">6</button>

                <button onClick={evaluateOperator}className="numbers" id="*">*</button>

                <button onClick={evaluateNums}className="numbers" id="1">1</button>
                <button onClick={evaluateNums}className="numbers" id="2">2</button>
                <button onClick={evaluateNums}className="numbers" id="3">3</button>

                <button onClick={evaluateOperator}className="numbers" id="-">-</button>

                <button onClick={evaluateNums}className="numbers" id="0">0</button>

                <button className="numbers" id=".">.</button>

                <button onClick={solve}className="numbers" id="=">=</button>

                <button onClick={evaluateOperator}className="numbers" id="+">+</button>
            </div>
            <div className="calc-entry">
                <input id="screen"type="text" value={screen}disabled></input>
                
                <h3>First Operand = {firstOperand}</h3>
                <h3>operator: {operator}</h3>
                <h3>Second Operand = {secondOperand}</h3>
                <h2>Result:<span id="result">{result}</span></h2>
            </div>
        </div>
        
    )
}

export default Calculator;
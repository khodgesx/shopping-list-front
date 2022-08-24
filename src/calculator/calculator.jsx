import React from "react";


const Calculator = () =>{
    return(
        <div>
            <h1>Calculator</h1>
            <div id="numbers-grid">
                <div className="numbers" id="7"><h1>7</h1></div>
                <div className="numbers" id="8"><h1>8</h1></div>
                <div className="numbers" id="9"><h1>9</h1></div>
                <div className="numbers" id="/"><h1>/</h1></div>
                <div className="numbers" id="4"><h1>4</h1></div>
                <div className="numbers" id="5"><h1>5</h1></div>
                <div className="numbers" id="6"><h1>6</h1></div>
                <div className="numbers" id="*"><h1>*</h1></div>
                <div className="numbers" id="1"><h1>1</h1></div>
                <div className="numbers" id="2"><h1>2</h1></div>
                <div className="numbers" id="3"><h1>3</h1></div>
                <div className="numbers" id="-"><h1>-</h1></div>
                <div className="numbers" id="0"><h1>0</h1></div>
                <div className="numbers" id="."><h1>.</h1></div>
                <div className="numbers" id="="><h1>=</h1></div>
                <div className="numbers" id="+"><h1>+</h1></div>
            </div>
            <div>
                <h2>Result:<span id="result"></span></h2>
            </div>
        </div>
        
    )
}

export default Calculator;
import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers';
import {addOne, applyNumber, switchOperations, memory, clearMemory, applyMemory, equals, clearDisplay} from './actions';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const applyNum = e => {
    const num = parseInt(e.target.textContent)
    dispatch(applyNumber(num))
  }
  const switchOperator = e => {
    const operator = e.target.textContent
    dispatch(switchOperations(operator))
  }
  const eq = () => {
    dispatch(equals())
  }
  const calcMem = () => {
    dispatch(applyMemory())
  }
  const clearMem = () => {
    dispatch(clearMemory())
  }
  const clear = () => {
    dispatch(clearDisplay())
  }
  const dispatchMemory = () => {
    dispatch(memory())
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.display}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={dispatchMemory}/>
              <CalcButton value={"MR"} onClick={calcMem}/>
              <CalcButton value={"MC"} onClick={clearMem}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {applyNum}/>
              <CalcButton value={2} onClick = {applyNum}/>
              <CalcButton value={3} onClick = {applyNum}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = {applyNum}/>
              <CalcButton value={5} onClick = {applyNum}/>
              <CalcButton value={6} onClick = {applyNum}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick = {applyNum}/>
              <CalcButton value={8} onClick = {applyNum}/>
              <CalcButton value={9} onClick = {applyNum}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {switchOperator}/>
              <CalcButton value={"*"} onClick = {switchOperator}/>
              <CalcButton value={"-"} onClick = {switchOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick ={clear}/>
              <CalcButton value={"="} onClick = {eq}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useReducer } from 'react';
import './Usage.css';
import usageReducer, { TYPE } from '../reducers/usageReducer';

const initialState = {
    value: 0,
    color: 'white'
};

function Usage() {
    const [state, dispatch] = useReducer(usageReducer, initialState);

    return (
        <div className="usage">
            <div className="usage-item" style={{ backgroundColor: state.color }}>
                <button onClick={() => {
                    // setValue(value+1)
                    dispatch({
                        type: TYPE.CHANGE_VALUE,
                        payload: 1
                    });
                }}>Increment</button>
                <label>{state.value}</label>
                <button onClick={() => {
                    // setValue(value-1)
                    dispatch({
                        type: TYPE.CHANGE_VALUE,
                        payload: -1
                    });
                }}>Decrement</button>
            </div>
            <button onClick={() => {
                // setColor("green")
                dispatch({
                    type: TYPE.CHANGE_COLOR,
                    payload: 'green'
                })
            }}>Green</button>
            <button onClick={() => {
                // setColor("blue")
                dispatch({
                    type: TYPE.CHANGE_COLOR,
                    payload: 'blue'
                })
            }}>Blue</button>

        </div>
    );
}

export default Usage;
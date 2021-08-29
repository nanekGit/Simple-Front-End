import React from 'react';
import "./NumberSelector.css";

export interface NumberSelectorProps{
    number: number,
    subClick: () => void,
    addClick: () => void
}

export function NumberSelector(props: NumberSelectorProps){
    return <span>
        <span onClick={props.subClick} className="button">&#60;</span>
        {props.number}
        <span onClick={props.addClick} className="button">&#62;</span>
    </span>;
}
import React, {ReactNode, useState} from 'react';
import {useParams} from "react-router-dom";

export interface HelloProps{
    icon: () => ReactNode;
}

export default function Hello(props: HelloProps){
    const { name } = useParams() as { name: string };
    const [ clicks, setClicks] = useState(0);

    return <span>
        {props.icon()}
        <p>Hello {name ? name : "World"}!</p>
        <button onClick={() => setClicks(clicks+1)}>Click!</button>
        <p>Kliknięć: {clicks}</p>
    </span>;
}
import React from "react";
import "./App.css"

export default function Square(props) {

    let objects = [
        {name: 'Hello', id: 1},
        {name: 'Hello', id: 2},
        {name: 'Hello', id: 3},
        {name: 'Hello', id: 4},
    ]


    return (

        <div className="square">
            {props.objects.map(el => <li id={el.id}>{el.name}</li>)}
        </div>

)
}


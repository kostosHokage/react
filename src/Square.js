import React from "react";
import "./App.css"

export default function Square(props) {

let objects = [
    {name: 'Hello', id: 1},
    {name: 'Sasha', id: 2},
    {name: 'Kostya', id: 3},
    {name: 244, id: 4},
    {name: 'Vanya', id: 5},
    {name: 'Pasha', id: 6},
    {name: 'Egor', id: 7},
    {name: 'Seniors', id: 8},
    {name: 'React', id: 9},
    {name: 'Developers', id: 10},
]


    return (
        <div className="container">
            {objects.map(el => <div className="square" key={el.id}>{el.name}</div>)}
        </div>

    )
}


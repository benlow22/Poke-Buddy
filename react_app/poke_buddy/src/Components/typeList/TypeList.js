import { Button } from "../button/Button";
import React from "react";
import { pokemonTypes } from '../../database.js';

export class TypeList extends React.Component {
    render(){
        let pokemon1type = pokemonTypes[0]
        console.log(pokemon1type);

        return (
            <div className="full-List">
                {pokemonTypes.map(type=>{
                    return <Button typeName={type}/>
                })}           
            </div>
        )
    }
}
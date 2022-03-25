import { useEffect, useState } from "react"

const CapturePokemonItem = (props) => {

    const {id, name, types, image} = props

    const typeJSX = types.map(
        t => <div className="poketype" key={t.type.name}>{t.type.name}</div>
    )

    return(
        <a href="#">
            <div className={types[0].type.name +" "+"pokemonbox"} >
                <div className="poketop">
                    <div className="poketopleft">
                        <h2>{name}</h2>
                    </div>
                    <div className="poketopright">
                        <h3>#{id}</h3>
                    </div>
                </div>
                <div className="pokebot">
                    <div className = "pokebotleft">
                        <div className="type">
                            {typeJSX}
                        </div>

                    </div>
                    <div className="pokebotright">
                        <img src={image} width="100%"/>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CapturePokemonItem
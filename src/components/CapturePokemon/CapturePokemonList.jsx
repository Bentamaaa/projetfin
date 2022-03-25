import CapturePokemonItem from "./CapturePokemonItem"

const CapturePokemonList = (props) => {
        const {pokemon} = props
    
        const pokemonsJSX = pokemon.map(
            p => <CapturePokemonItem
                key={p.id}
                id={p.id}
                name={p.name}
                types={p.types}
                image={p.sprites.other["official-artwork"].front_default}
                ></CapturePokemonItem>
        )
    
    
        return(
            <div id="container">
                {pokemonsJSX}
            </div>
        )

}

export default CapturePokemonList
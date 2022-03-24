import { useState } from "react"

const CapturePokemonItem = (props) => {

    const [pokeName, setPokeName] = useState("")
    const [pokeType, setPokeType] = useState("")
    // poketype2
    const [pokeId, setPokeId] = useState("")
    const [pokeImg, setPokeImg] = useState("")


    
    useEffect(() => {
        if (pokemons) {
            fetch("https://pokeapi.co/api/v2/pokemon/"+id
            )
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setPokeName(data.name)
                    setPokeType(data.types[0].type.name)
                    setPokeImg(data.sprites.other.official-artwork.front_default)
                })
        }
    }, [pokemons])




    return(
        <div href="#" id="01">
            <div class="pokemonbox" >
                <div class="poketop">
                    <div class="poketopleft">
                        <h2>{pokeName}</h2>
                    </div>
                    <div class="poketopright">
                        <h3>#{pokeId}</h3>
                    </div>
                </div>
                <div class="pokebot">
                    <div class = "pokebotleft">
                        <div class="type">
                            <div></div>
                            <div></div>

                        </div>
                    </div>
                    <div class="pokebotright">
                        <img src={pokeImg} width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CapturePokemonItem
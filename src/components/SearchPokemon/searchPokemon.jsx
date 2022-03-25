import { useState } from "react"

const SearchPokemon = function(props) {

    // Props
    const { onSearch } = props

    // State
    const [pokemon, setPokemon] = useState("")
    const [normal, setNormal] = useState(true)
    const [fire, setFire] = useState(true)
    const [water, setWater] = useState(true)
    const [electric, setElectric] = useState(true)
    const [grass, setGrass] = useState(true)
    const [ice, setIce] = useState(true)
    const [fighting, setFighting] = useState(true)
    const [poison, setPoison] = useState(true)
    const [ground, setGround] = useState(true)
    const [psychic, setPsychic] = useState(true)
    const [bug, setBug] = useState(true)
    const [ghost, setGhost] = useState(true)
    const [dragon, setDragon] = useState(true)
    const [dark, setDark] = useState(true)
    const [steel, setSteel] = useState(true)
    const [fairy, setFairy] = useState(true)

return(
    <header>
        <div id="allbtn">
            <div id="search">
                <input type="text" value ="" id="recherche" placeholder="Nom ou n° de pokemon" onChange={e => setPokemon(e.target.value) }/>
                <input type="button" value="" id="rechercheBtn" onClick={() => onSearch(
                    normal, fire, water, electric, grass, ice, fighting, poison, ground, psychic, bug,
                    ghost, dragon, dark, steel, fairy
                )}/>
            </div>
            <div id="allCheck">
                <div id="checkL1">
                    <input type="checkbox" id="normal" name="normal" checked={normal} onChange={e => setNormal(e.target.checked) }/>
                    <label for="normal">Normal</label>

                    <input type="checkbox" id="fire" name="fire" checked={fire} onChange={e => setFire(e.target.checked) }/>
                    <label for="fire">Fire</label>

                    <input type="checkbox" id="water" name="water" checked={water} onChange={e => setWater(e.target.checked) }/>
                    <label for="water">Fire</label>

                    <input type="checkbox" id="electric" name="electric" checked={electric} onChange={e => setElectric(e.target.checked) }/>
                    <label for="electric">Electric</label>

                    <input type="checkbox" id="grass" name="grass" checked={grass} onChange={e => setGrass(e.target.checked) }/>
                    <label for="grass">Grass</label>

                    <input type="checkbox" id="ice" name="ice" checked={ice} onChange={e => setIce(e.target.checked) }/>
                    <label for="ice">Ice</label>

                    <input type="checkbox" id="fighting" name="fighting" checked={fighting} onChange={e => setFighting(e.target.checked) }/>
                    <label for="fighting">Fighting</label>

                    <input type="checkbox" id="poison" name="poison" checked={poison} onChange={e => setPoison(e.target.checked) }/>
                    <label for="poison">Poison</label>
                </div>
                <div id="checkL2">
                    <input type="checkbox" id="ground" name="ground" checked={ground} onChange={e => setGround(e.target.checked) }/>
                    <label for="ground">Ground</label>

                    <input type="checkbox" id="psychic" name="psychic" checked={psychic} onChange={e => setPsychic(e.target.checked) }/>
                    <label for="psychic">Psychic</label>

                    <input type="checkbox" id="bug" name="bug" checked={bug} onChange={e => setBug(e.target.checked) }/>
                    <label for="bug">Bug</label>

                    <input type="checkbox" id="ghost" name="ghost" checked={ghost} onChange={e => setGhost(e.target.checked) }/>
                    <label for="ghost">Ghost</label>

                    <input type="checkbox" id="dragon" name="dragon" checked={dragon} onChange={e => setDragon(e.target.checked) }/>
                    <label for="dragon">Dragon</label>

                    <input type="checkbox" id="dark" name="dark" checked={dark} onChange={e => setDark(e.target.checked) }/>
                    <label for="dark">Dark</label>

                    <input type="checkbox" id="steel" name="steel" checked={steel} onChange={e => setSteel(e.target.checked) }/>
                    <label for="steel">Steel</label>

                    <input type="checkbox" id="fairy" name="fairy" checked={fairy} onChange={e => setFairy(e.target.checked) }/>
                    <label for="fairy">Fairy</label>
                </div>
            </div>
        </div>
    </header>
)
}

export default SearchPokemon


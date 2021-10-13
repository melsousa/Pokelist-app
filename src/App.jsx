import React from "react";

import './App.css'

import Card from '../src/components/layout/Card'
import Image from "../src/components/layout/Image";

import Arcanine from '../src/components/img/Arcanine.png'
import Beedrill from '../src/components/img/Beedrill.png'
import Blastoise from '../src/components/img/Blastoise.png'
import Bulbasaur from '../src/components/img/Bulbasaur.png'
import Butterfree from '../src/components/img/Butterfree.png'
import Caterpie from '../src/components/img/Caterpie.png'
import Charizard from '../src/components/img/Charizard.png'
import Charmander from '../src/components/img/Charmander.png'
import Charmeleon from '../src/components/img/Charmeleon.png'
import Clefable from '../src/components/img/Clefable.png'
import Dewgong from '../src/components/img/Dewgong.png'
import Farfetchd from '../src/components/img/Farfetchd.png'
import Golbat from '../src/components/img/Golbat.png'
import Ivysaur from '../src/components/img/Ivysaur.png'
import Kadabra from '../src/components/img/Kadabra.png'
import Kakuna from '../src/components/img/Kakuna.png'
import Metapod from '../src/components/img/Metapod.png'
import Pidgeot from '../src/components/img/Pidgeot.png'
import Pidgeotto from '../src/components/img/Pidgeotto.png'
import Pidgey from '../src/components/img/Pidgey.png'
import Pikachu from '../src/components/img/Pikachu.png'
import Ponyta from '../src/components/img/Ponyta.png'
import Raichu from '../src/components/img/Raichu.png'
import Raticate from '../src/components/img/Raticate.png'
import Rattata from '../src/components/img/Rattata.png'
import Squirtle from '../src/components/img/Squirtle.png'
import Venusaur from '../src/components/img/Venusaur.png'
import Vulpix from '../src/components/img/Vulpix.png'
import Wartortle from '../src/components/img/Wartortle.png'
import Weedle from '../src/components/img/Weedle.png'




const App = props => (

    <div className="App">
        <h1>Pokelista</h1>

        <div className="Cards">

            <Card titulo="Arcanine" color="#FF6D03">
                <Image alt="Arcanine" src={Arcanine} />
            </Card>
            <Card titulo="Beedrill" color="#AE0B0B">
                <Image alt="Beedrill" src={Beedrill} />
            </Card>
            <Card titulo="Blastoise" color="#0785F9">
                <Image alt="Blastoise" src={Blastoise} />
            </Card>

            <Card titulo="Bulbasaur" color="#37B8E0">
                <Image alt="Bulbasaur" src={Bulbasaur} />
            </Card>
            <Card titulo="Butterfree" color="#830AE2">
                <Image alt="Butterfree" src={Butterfree} />
            </Card>
            <Card titulo="Caterpie" color="#01ED0A">
                <Image alt="Caterpie" src={Caterpie} />
            </Card>
            <Card titulo="Charizard" color="#FE6C02">
                <Image alt="Charizard" src={Charizard} />
            </Card>
            <Card titulo="Charmander" color="#992F02">
                <Image alt="Charmander" src={Charmander} />
            </Card>
            <Card titulo="Charmeleon" color="#F00A0A">
                <Image alt="Charmeleon" src={Charmeleon} />
            </Card>
            <Card titulo="Clefable" color="#FB55B8">
                <Image alt="Clefable" src={Clefable} />
            </Card>
            <Card titulo="Dewgong" color="#ECDEE6">
                <Image alt="Dewgong" src={Dewgong} />
            </Card>
            <Card titulo="Farfetchd" color="#A95A11">
                <Image alt="Farfetchd" src={Farfetchd} />
            </Card>
            <Card titulo="Golbat" color="#2E56BC">
                <Image alt="Golbat" src={Golbat} />
            </Card>
            <Card titulo="Ivysaur" color="#DE105A">
                <Image alt="Ivysaur" src={Ivysaur} />
            </Card>
            <Card titulo="Kadabra" color="#AD5C11">
                <Image alt="Kadabra" src={Kadabra} />
            </Card>
            <Card titulo="Kakuna" color="#DEB110">
                <Image alt="Kakuna" src={Kakuna} />
            </Card>
            <Card titulo="Metapod" color="#75D13D">
                <Image alt="Metapod" src={Metapod} />
            </Card>
            <Card titulo="Pidgeot" color="#E29E39">
                <Image alt="Pidgeot" src={Pidgeot} />
            </Card>
            <Card titulo="Pidgeotto" color="#E29E39">
                <Image alt="Pidgeotto" src={Pidgeotto} />
            </Card>
            <Card titulo="Pidgey" color="#925330">
                <Image alt="Pidgey" src={Pidgey} />
            </Card>
            <Card titulo="Pikachu" color="#FBE205">
                <Image alt="Pikachu" src={Pikachu} />
            </Card>
            <Card titulo="Ponyta" color="#EE5906">
                <Image alt="Ponyta" src={Ponyta} />
            </Card>
            <Card titulo="Raichu" color="#F26516">
                <Image alt="Raichu" src={Raichu} />
            </Card>
            <Card titulo="Raticate" color="#925330">
                <Image alt="Raticate" src={Raticate} />
            </Card>
            <Card titulo="Rattata" color="#8233A8">
                <Image alt="Rattata" src={Rattata} />
            </Card>
            <Card titulo="Squirtle" color="#37B8E0">
                <Image alt="Squirtle" src={Squirtle} />
            </Card>
            <Card titulo="Venusaur" color="#DE105A">
                <Image alt="Venusaur" src={Venusaur} />
            </Card>
            <Card titulo="Vulpix" color="#B27237">
                <Image alt="Vulpix" src={Vulpix} />
            </Card>
            <Card titulo="Wartortle" color="#583D7B">
                <Image alt="Wartortle" src={Wartortle} />
            </Card>
            <Card titulo="Weedle" color="#FE6C02">
                <Image alt="Weedle" src={Weedle} />
            </Card>



        </div>

    </div>
)

export default App
import React from 'react';
import Hero from './hero';
import Awards from './awards';
import Pricing from './pricing';
import Stats from './stats';
import Education from './education';
import OpenAccount from "../openAccount"

function HomePage() {
    return ( 
        <>
        <div>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount></OpenAccount>
            
        </div>

        </>
     );
}

export default HomePage;
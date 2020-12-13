import React from 'react'

import Aux from '../hoc/Aux'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTow } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

function Home() {
    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Aux>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTow} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </Aux>
    )
}

export default Home

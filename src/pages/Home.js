import React, { useRef, useEffect } from 'react'
import Header from '../components/Header';
import Services from '../components/Services';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

export default function Home(props) {
    const myRef = useRef(null)
    
   useEffect(() => {
    if(props.location.state){
        scrollToRef(myRef)
    }
   }, [myRef])
    const executeScroll = () => scrollToRef(myRef)

    return (
        <div>
            <Navigation execScroll={executeScroll}/>
            <Header />
            <Services ref={myRef} />
            <SocialMedia />
            <Footer />
        </div>
    )
}



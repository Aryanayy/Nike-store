import React from 'react';
import { Cart, FlexContent, Footer, Hero, Sales, Stories, Navbar} from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js'

const App = () => {
  return (
    <>

      <main className='flex flex-col gap-16 relative'>

        <Navbar/>
        <Cart />
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes}/>
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
        <Footer footerAPI={footerAPI}/>
        
        
      
      </main>



    </>
  )
}

export default App

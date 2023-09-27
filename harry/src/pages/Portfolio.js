import React from 'react'
import { AnimatePresence, motion } from "framer-motion";


const Portfolio = () => {
   
  return (
    <>
    <AnimatePresence>
    <motion.main 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.75, ease: "easeOut" }}
    exit={{ opacity: 1 }}>
    <div id="landing">
            <div id="landing-text">
                <div id="landing-text-inner">
                    <h1>My Photography Website</h1>
                    <h2>Beatyful Images</h2>
                    <a href="#header" class="btn" id="view-work">
                        View Work
                    </a>
                </div>
            </div>
            <div id="landing-image"></div>
        </div>
        
            <div className='image-con'>
            <div id="header">
                <h2>My Work</h2>
            </div>
        <div id="images">
            
            <div class="img-section">
            <img className='img-container' src="https://source.unsplash.com/1600x900/?nature,water
" alt="nature image" />
            <div class="caption">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            </div>
            <div class="img-section">
            <img className='img-container' src="https://source.unsplash.com/1600x900/?nature,trees
            " alt="nature image" />
            <div class="caption">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            </div>
            <div class="img-section">
            <img className='img-container' src="https://source.unsplash.com/1600x900/?nature,flowers
            " alt="nature image" />
            <div class="caption">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            </div>
            <div class="img-section">
            <img className='img-container' src="https://source.unsplash.com/1600x900/?nature,animals
            " alt="nature image" />
            <div class="caption">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            </div>
            <div class="img-section">
            <img className='img-container' src="https://source.unsplash.com/1600x900/?nature,clouds
            " alt="nature image" />
            <div class="caption">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            </div>
            </div>
        </div>
        
        </motion.main>

        
        </AnimatePresence>
    </>
  )
}

export default Portfolio
import * as React from "react";
import { Link } from "react-router-dom";
import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <AnimatePresence>
    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.75, ease: "easeOut" }}
    exit={{ opacity: 1 }}>
       <div class="hero">
  <h1>Welcome to our website!</h1>
  <p>Learn about our products and services.</p>
  <Link to="/portfolio"><div class="btn-primary">Download CV</div></Link>
</div>
</motion.div>
<button onClick={() => setOpen(true)}>Open sheet</button>

<Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
  <Sheet.Container>
    <Sheet.Header><h3><center>Drag it down </center></h3></Sheet.Header>
    <Sheet.Content><h3><center> Harry Pathak </center></h3></Sheet.Content>
  </Sheet.Container>
  <Sheet.Backdrop />
</Sheet>
</AnimatePresence>
    </>
  )
}

export default Home
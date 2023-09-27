import * as React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div class="dropdown">
  <button class="dropbtn"><i class="fa fa-bars"></i></button>
  <div class="dropdown-content">
  
  <Link to="/"><button class="drpbtn"><i class="fa fa-home"></i></button></Link>
    <Link to="/portfolio"><button class="drpbtn"><i class="fa fa-camera"></i></button></Link>
    <Link to="/about"><button class="drpbtn"><i class="fa fa-book"></i></button></Link>
  

  <div class="dropdown-content-two">
    
        <button class="drpbtn-two">Home</button>
    <button class="drpbtn-two">Portfolio</button>
    <button class="drpbtn-two">Blog</button>
  </div>
  </div>
</div>
  )
}

export default Menu

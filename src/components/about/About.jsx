import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
   return (
      <div className="about">
         <NavLink to={"/questions"}><div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem maxime, odit quos neque voluptates, expedita tempora voluptate sequi laudantium excepturi? Ullam culpa perferendis ipsam ex eos dolor corporis quo quaerat unde, laborum tempore hic iusto ad, repudiandae aliquam. Asperiores id, fuga modi nisi ea numquam rerum repellat veniam inventore.</p>
         </div></NavLink>
      </div>
   );
};

export default About;
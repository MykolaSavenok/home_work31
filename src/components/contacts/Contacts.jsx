import React from 'react';
import { NavLink } from 'react-router-dom';

const Contacts = () => {
   return (
      <div className="contacts">
         <NavLink to={"/contacts"}><div>
            <li>Country: Ukraine</li>
            <li>Tel: 067-777-77-77</li>
            <li>Lorem ipsum dolor sit amet.</li>
         </div></NavLink>
      </div>
   );
};

export default Contacts;
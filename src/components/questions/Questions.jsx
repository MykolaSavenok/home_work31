import React from 'react';
import { NavLink } from 'react-router-dom';

const Questions = () => {
   return (
      <div className="questions">
         <NavLink to={"/questions"}><div>
            <div>
               <label htmlFor="questions">Do you have a questions?</label>
               <input id='questions' type="text" />
            </div>
         </div></NavLink>
      </div>
   );
};

export default Questions;
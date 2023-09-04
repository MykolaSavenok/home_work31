import React from 'react';
import Description from './Description.jsx';
import Img from './Img.jsx';
import './main.scss';

const Main = () => {
   return (
     <main className="main">
       <Description text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus hic quod aut soluta laborum saepe adipisci rem magni officia explicabo minima libero quasi molestias inventore nostrum nisi nam, architecto quam." />
       <Img  logo/>
     </main>
   );
 };
 
 export default Main;

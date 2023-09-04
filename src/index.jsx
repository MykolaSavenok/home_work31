import './style.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom';

import App from './App.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Questions from './components/questions/Questions.jsx';
import About from './components/about/About.jsx';
import Header from './components/header/Header.jsx';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

const router = createHashRouter(
   [{
      path: '/',
      element: <App />,
   },
   {
      path: '/contacts',
      element: <div>
         <Header />
         <Contacts />
      </div>
   }, {
      path: '/questions',
      element: <div>
         <Header />
         <Questions />
      </div>
   },
   {
      path: '/about',
      element: <div>
         <Header />
         <About />
      </div>
   }
   ])

root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>)


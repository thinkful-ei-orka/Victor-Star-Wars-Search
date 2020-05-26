import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(props) {
     return (
          <header className='App-header'>
               <h1>
                    <Link to='/'>
                         Welcome To The Star Wars Search
                    </Link>
                    {' '}
               </h1>
               <h2>
                    May the force be with you!
               </h2>
          </header>
     )
}
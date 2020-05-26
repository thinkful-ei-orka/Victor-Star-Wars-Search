import React from 'react';

export default class SearchType extends React.Component {
     render() {
          return (
               <div className='Search-type-select'>
                    <label htmlFor='SearchType'>Category: </label>
                    <select id='SearchType' onChange={(event) => this.props.updateType('SearchType', event.target.value)}>
                         <option id='people' value='people'>People</option>
                         <option id='planets' value='planets'>Planets</option>
                         <option id='films' value='films'>Films</option>
                         <option id='species' value='species'>Species</option>
                         <option id='starships' value='starships'>Starships</option>
                         <option id='vehicles' value='vehicles'>Vehicles</option>
                    </select>
               </div>
          )
     }
}

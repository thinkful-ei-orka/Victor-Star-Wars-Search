import React from 'react'
import {Link} from 'react-router-dom'
import EnterButton from '../Buttons/EnterButton'
import CancelButton from '../Buttons/CancelButton'
import SearchType from './SearchType';
import ApiConfig from '../ApiConfig'


export default class SearchForm extends React.Component {
     constructor(props){
          super(props);
          this.input = React.createRef();
     }
     

     render() {

          const getResults = (event, searchInput) => {
               // event.preventDefault();
               console.log(searchInput)
               const url = `${ApiConfig.API_ENDPOINT}/people/?search=${this.input}`;
               fetch(url)
                    .then(res => {
                         if (!res.ok) {
                              throw new Error('Something went wrong!')
                         }
                         return res;
                    })
                    .then(res => res.json())
                    .then(data => {
                         this.setState({
                              results: data.items
                         })
                              .catch((Error) => {
                                   this.setState({
                                        error: Error.message
                                   })
                              })
                    })
          }

          return (          
               <div className='Search-container'>
                    <form onSubmit={getResults(this.input)}>
                         <h3 className='Search-Header'>New Search</h3>
                         <label htmlFor='Search'>Enter your search term(s): </label>
                         <input type='text' placeholder='Darth Vader' id='Search-Input' ref={this.input} />
                    </form>
                    <SearchType updateType={this.updateType} />
                    <EnterButton
                    tag={Link}
                    className='Search-Enter-button'
                    type='submit'
                    to='/search/{searchInput}'
                    >
                         Enter
                    </EnterButton>
                    <CancelButton
                    className='Search-Cancel-button'
                    type='button'
                    to='/'
                    >
                         Cancel
                    </CancelButton>
               </div>
          )
     }
}
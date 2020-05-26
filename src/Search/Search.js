import React from 'react';
import SearchType from './SearchType';
import SearchForm from './SearchForm';

export default class Search extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               searchTerm: '',
               searchType: '', 
          }
     }
    

     updateType = (key, prop) => {
          console.log(key, prop);
          this.setState({
               [key]: prop
          })
     }

     render() {
          return (
               <div>
               <SearchForm />
               {/* <SearchType updateType={this.updateType}></SearchType> */}
               </div>
          )
     }

}
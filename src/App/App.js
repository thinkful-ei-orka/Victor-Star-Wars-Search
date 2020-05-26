import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Result from '../Results/Result';
import ResultList from '../Results/ResultList';
import SearchForm from '../Search/SearchForm'
import SearchType from '../Search/SearchType'
import ApiContext from '../ApiContext';
import ApiConfig from '../ApiConfig';
import Routes from '../Routes';

export default class App extends React.Component {
  state = {
    results: [],
    searchInput: '',
    loading: false,
    error: '',
  }

  // getResults = (event, searchInput) => {
  //   event.preventDefault();
  //   console.log(searchInput)
  //   const url = `${ApiConfig.API_ENDPOINT}/people/?search=${searchInput}`;
  //   fetch(url)
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error('Something went wrong!')
  //     }
  //     return res;
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       results: data.items
  //     })
  //     .catch((Error) => {
  //       this.setState({
  //         error: Error.message
  //       })
  //     })
  //   })
  // }


  // routes() {
  //   return (
  //     <>
  //       {['/', '/people/:id/'].map(path => (
  //         <Route
  //           exact
  //           key={path}
  //           path={path}
  //           component={ResultList}
  //         />
  //       ))}      
  //     </>
  //   )
  // }

  render() {
    const contextValue = {
      results: this.state.results
    }

    if(this.state.hasError) {
      throw new Error('Error')
    }
    return (
      <ApiContext.Provider value={contextValue}>
      <div className='App'>
    <Header />
      <main className='App-main'>
        <Routes />
      </main>
      </div>
      </ApiContext.Provider>
    );
  }
}
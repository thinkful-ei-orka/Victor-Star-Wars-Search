import React from 'react';
import { Link } from 'react-router-dom';
import Result from './Result'
import BackButton from '../Buttons/BackButton';
import ApiContext from '../ApiContext';
import {findResultsForList} from '../Functions'
import './ResultList.css'

export default class ResultList extends React.Component {
     static defaultProps = {
          match: {
               params: {}
          }
     }
     static contextType = ApiContext

     render () {
          const { listId } = this.props.match.params
          const { results = [] } = this.context
          const resultsForList = findResultsForList(results, listId)
          return (
               <section>
                    <h2 className='ResultList-header'>
                         Results
                    </h2>
                    <ol> {resultsForList.map(result =>
                         <li>
                              <Result 
                              id={result.id}
                              name={result.name}
                              height={result.height}
                              mass={result.mass}
                              hair_color={result.hair_color}
                              skin_color={result.skin_color}
                              eye_color={result.eye_color}
                              birth_year={result.birth_year}
                              gender={result.gender}
                              homeworld={result.homeworld}
                              films={result.films}
                              species={result.species}
                              vehicles={result.vehicles}
                              starships={result.starships}
                              created={result.created}
                              edited={result.edited}
                              url={result.url}
                              />
                         </li>
                         )}
                    </ol>
                    <div className='ResultList-back-button-container'>
                         <BackButton
                              tag={Link}
                              className='ResultList-back-button'
                              type='button'
                              to='/'
                              >
                                   Back
                         </BackButton>
                    </div>
               </section>
          )
     }
}
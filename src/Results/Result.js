import React from 'react';
import './Result.css';
import ApiContext from '../ApiContext'

export default class Result extends React.Component {
     static contextType = ApiContext
     render() {
          const { name } = this.props
          return (
               <div className='Result'>
                    <h3 className='Result-name'>
                         {name}
                    </h3>
                    <div className='Result-content'>

                    </div>
               </div>
          )
     }
}
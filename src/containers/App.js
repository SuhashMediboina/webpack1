import React from 'react';
import LoanList from './loan-list'

class App extends React.Component {
  render() {
    return (
        <div>
            <h1>Webpack Ahoy!</h1>
            <LoanList/>
        </div>
    )        
  }
}

export default App;
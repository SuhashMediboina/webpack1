import React from 'react';
import LoanList from './loan-list';
import LoanForm from './loan-form';

class App extends React.Component {
  render() {
    return (
        <div>
            <h1>Webpack Ahoy!</h1>
            <LoanForm/>
        </div>
    )        
  }
}

export default App;
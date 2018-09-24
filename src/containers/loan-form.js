import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  margin: 12,
};

class LoanForm extends React.Component {
    
    handleClick() {
        console.log("Button Clicked");
    }
    
    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <TextField hintText="Enter a Loan number"/>
                    <RaisedButton label="Generate Query" primary={true} style={style} onClick={this.handleClick}/>
                </MuiThemeProvider>
            </div>    
        );
    }
}

export default LoanForm;
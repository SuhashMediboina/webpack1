import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoanList extends React.Component {
    createLoanList() {
        return this.props.loans.map((loan) => {
            return (
                <li key="loan.loan_id">
                    {loan.firstName} {loan.lastName}
                </li>
            );
       });
    }

    render() {
        return (
            <ul>
                {this.createLoanList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) =>{
    return { loans: state.loans };
};

export default connect(mapStateToProps)(LoanList);

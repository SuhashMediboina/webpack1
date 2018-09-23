import { combineReducers } from 'redux';
import LoanReducer from './loan-reducers';

const reducers = combineReducers({
    loans: LoanReducer
});

export default reducers;
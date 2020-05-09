import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { decrement, increment, incrementAsync, incrementIfOdd } from '../../state-management/actions/counter';
import { counterStateType } from '../../state-management/reducers/types';
import Counter from '../components/Counter';

function mapStateToProps(state: counterStateType) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

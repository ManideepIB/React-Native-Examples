import {all} from 'redux-saga/effects';
import {watchFetchTodos} from './saga';

function* rootSaga() {
  yield all([watchFetchTodos()]);
}

export default rootSaga;

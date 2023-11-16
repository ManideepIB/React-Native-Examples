import {put, takeEvery, call} from 'redux-saga/effects';
import {setTodos} from './action';

function* fetchTodosSaga() {
  try {
    const response = yield call(fetch, 'https://dummyjson.com/todos');
    const data = yield call([response, response.json]);
    console.log(data, 'data fetched');
    yield put(setTodos(data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

export function* watchFetchTodos() {
  yield takeEvery('FETCH_TODOS', fetchTodosSaga);
}

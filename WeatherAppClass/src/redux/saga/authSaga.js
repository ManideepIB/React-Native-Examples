import {call, put, takeLatest} from 'redux-saga/effects';
import {loginFailure, loginSuccess} from '../action/authActions';
import {LOGIN_REQUEST} from '../constants';

function* loginUser(action) {
  try {
    const response = yield call(fetch, 'https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: action.payload.username,
        password: action.payload.password,
      }),
    });
    console.log(
      'Request Data:',
      JSON.stringify({
        username: action.payload.username,
        password: action.payload.password,
      }),
    );

    if (response.status === 400) {
      const errorData = yield response.json();
      const errorMessage = errorData.message;
      console.log('API Error:', errorMessage);
      yield put(loginFailure(errorMessage));
    }

    if (response.status >= 200 && response.status < 300) {
      const user = yield response.json();
      yield put(loginSuccess(user));
    } else {
      const errorData = yield response.json();
      const errorMessage = errorData.message;
      yield put(loginFailure(errorMessage));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

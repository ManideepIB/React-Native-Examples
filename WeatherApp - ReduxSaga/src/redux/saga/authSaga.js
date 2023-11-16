import {put, takeEvery, call, takeLatest} from 'redux-saga/effects';
import {loginFailure, loginSuccess} from '../action/authActions';
import {LOGIN_SUCCESS} from '../constants';

// function* handleLogin(action) {
//   try {
//     // Replace this with your actual login logic (API call, authentication, etc.)
//     const { username, password } = action.payload;
//     if (username === 'user' && password === 'password') {
//       const user = { username };
//       yield put(loginSuccess(user));
//     } else {
//       yield put(loginFailure('Invalid credentials'));
//     }
//   } catch (error) {
//     yield put(loginFailure('Login failed'));
//   }
// }

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
    if (response.ok) {
      const user = yield response.json();
      console.log(user, 'user from saga');
      yield put(loginSuccess(user));
    } else {
      const error = yield response.text();
      yield put(loginFailure(error));
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_SUCCESS, loginUser);
}

// export default function* authSagas() {
//   yield [watchLogin()];
// }

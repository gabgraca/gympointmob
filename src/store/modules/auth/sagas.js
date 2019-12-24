import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Alert } from 'react-native';
import api from '~/services/api';
import { signInSucess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { email } = payload;

    const res = yield call(api.get, `/students/${email}/appLogin`);

    const student = res.data;

    yield put(signInSucess(student));
  } catch (error) {
    Alert.alert('Falha na autenticação', 'Aluno Não encontrado');
    yield put(signFailure());
  }
}

export function dummy() {}

export default all([
  takeLatest('persist/REHYDRATE', dummy),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
]);

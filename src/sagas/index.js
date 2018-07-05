import { all, fork } from 'redux-saga/effects';
import ExampleSaga from './example.saga';

const sagas = [
  ExampleSaga,
];

export default function* root() {
  yield all(sagas.map(fork));
}

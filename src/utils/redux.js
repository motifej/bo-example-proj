import { propOr, merge, identity } from 'ramda';

export const createReducer = (init, handlers) =>
  (state = init, action) => merge(
    state,
    propOr(identity, action.type, handlers)(state, action),
  );

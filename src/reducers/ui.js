import { createReducer } from 'utils/redux';

import { EXAMPLE_DATA } from 'constants/example';

const initialState = {
  loading: false,
};

const actionHandlers = {
  [EXAMPLE_DATA.GET.REQUEST]: () => ({ loading: true }),
  [EXAMPLE_DATA.GET.SUCCESS]: () => ({ loading: false }),
  [EXAMPLE_DATA.GET.FAIL]: () => ({ loading: false }),
};

export default createReducer(initialState, actionHandlers);

import { createReducer } from 'utils/redux';
import { EXAMPLE_DATA } from 'constants/example';

const actionHandlers = {
  [EXAMPLE_DATA.GET.SUCCESS]: (_, { payload }) => payload.data,
};

export default createReducer(null, actionHandlers);

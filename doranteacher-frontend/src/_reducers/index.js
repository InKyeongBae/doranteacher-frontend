import { combineReducers } from 'redux';
import user from './user_reducer';

// 앞으로 만들 user 리듀서를 합쳐 rootReducer 생성
const rootReducer = combineReducers({
  user,
});

export default rootReducer;
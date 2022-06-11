import {combineReducers, configureStore} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

// 리듀서가 처음 호출될때는 state가 아직 정의되지 않았으므로 초기화 필요
const countReducer = (state = initialState, action) => {
  // 상태 객체 변경 X -> 새로운 상태 리턴
  switch (action.type) {
    case 'INCREMENT':
      console.log('increment called');
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      console.log('decrement called');
      return {
        count: state.count - 1,
      };
    case 'ZERO':
      console.log('zero called');
      return {
        count: 0,
      };
    default:
      return state;
  }
};

export default configureStore({reducer: countReducer});

// 다중 리듀서 사용할 때
// const reducers = combineReducers({
//   count,
//   metadata,
// });
// export default configureStore({reducer: reducers})

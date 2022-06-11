// 액션을 만든 컴포넌트가 직접 스토어로 액션을 보낸다.
// 액션 생성자는 단순히 액션을 return
export const increment = () => {
  return (action = {
    type: 'INCREMENT',
  });
};

export const decrement = () => {
  return (action = {
    type: 'DECREMENT',
  });
};

export const zero = () => {
  return (action = {
    type: 'ZERO',
  });
};

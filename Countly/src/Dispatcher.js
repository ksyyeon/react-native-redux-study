// Redux에서는 필요없음
class Dispatcher {
  constructor() {
    this.isDispatching = false;
    this.actionHandlers = [];
  }

  register(actionHandler) {
    // 스토어가 handleAction 메서드 등록
    this.actionHandlers.push(actionHandler);
  }

  dispatch(action) {
    if (this.isDispatching) {
      throw new Error('Cannot dispatch in the middle of a dispatch');
    }
    this.isDispatching = true;

    // 등록된 액션 핸들러를 호출
    this.actionHandlers.forEach(handler => handler(action));

    this.isDispatching = false;
  }
}

export default new Dispatcher();

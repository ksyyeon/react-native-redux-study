import React, {Component, useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Provider, connect} from 'react-redux';
import * as actions from './src/action';
import store from './src/store';
import Counter from './src/Counter';

const mapStateToProps = state => ({
  count: state.count,
});

const CounterContainer = connect(mapStateToProps, actions)(Counter);

export default App = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.updateState = this.updateState.bind(this);
//     this.state = {
//       tally: store.getState(),
//       unsubscribe: store.subscribe(this.updateState),
//     };
//   }

//   componentDidMount() {}

//   componentWillUnmount() {
//     this.state.unsubscribe();
//   }

//   updateState() {
//     this.setState({
//       tally: store.getState(),
//     });
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <Counter />
//       </Provider>
//     );
//   }
// }

// export default App = props => {
//   const [tally, setTally] = useState(store.getState());
//   const updateState = useCallback(() => {
//     setTally(store.getState());
//   }, []);
//   const [unsubscribe, setUnsubscribe] = useState(store.subscribe(updateState));

//   useEffect(() => {
//     return unsubscribe;
//   }, []);

//   // onPress 함수에서 액션을 만들고
//   // 스토어의 dispatch 메서드를 호출해 그 액션을 스토어에 디스패치
//   return (
//     <View style={styles.container}>
//       <Text style={styles.appName}>Countly</Text>
//       <Text style={styles.tally}> Tally : {tally.count}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => store.dispatch(increment())}>
//         <Text style={styles.buttonText}>+</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => store.dispatch(decrement())}>
//         <Text style={styles.buttonText}>-</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => store.dispatch(zero())}>
//         <Text style={styles.buttonText}>0</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

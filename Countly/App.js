import React, {Component, useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {increment, decrement, zero} from './src/action';
import store from './src/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      tally: store.getState(),
      unsubscribe: store.subscribe(this.updateState),
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  updateState() {
    this.setState({
      tally: store.getState(),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Countly</Text>
        <Text style={styles.tally}> Tally : {this.state.tally.count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => store.dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => store.dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => store.dispatch(zero())}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },

  appName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tally: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    fontSize: 25,
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginBottom: 20,
    padding: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Drawer from './components/Drawer'
import Home from './components/Home'

const RouterWithRedux = connect()(Router);
import reducers from './reducers';
// other imports...

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="drawer" component={Drawer} open={true} >
            <Scene key="main" tabs={true} >
              <Scene key="home" component={Home} initial={true} title="Basic" />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
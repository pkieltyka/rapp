import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import { Router } from 'react-router'
import routes from 'routes'

import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'

const history = createBrowserHistory()
const store = configureStore(window.__INITIAL_STATE__)

syncReduxAndRouter(history, store, (state) => state.router)

class Root extends Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired
  }

  get router() {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    )
  }

  get devTools() {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          require('containers/DevTools/createDevToolsWindow').default(this.props.store)
        } else {
          window.devToolsExtension.open()
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require('containers/DevTools').default
        return <DevTools />
      }
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          {this.router}
          {this.devTools}
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Badges from '../pages/Badges.jsx'
import BadgeNew from '../pages/BadgeNew.jsx'
import Layout from './Layout.jsx'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/badges' component={Badges} />
            <Route exact path='/badges/new' component={BadgeNew} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App

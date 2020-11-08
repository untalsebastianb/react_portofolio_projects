import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Badges from '../pages/Badges.jsx'
import BadgeNew from '../pages/BadgeNew.jsx'
import BadgeEdit from '../pages/BadgeEdit.jsx'
import BadgeDetails from '../pages/BadgeDetails.jsx'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/badges' component={Badges} />
            <Route exact path='/badges/new' component={BadgeNew} />
            <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
            <Route exact path='/badges/:badgeId/' component={BadgeDetails} />
            <Route exact path='/' component={Home}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App

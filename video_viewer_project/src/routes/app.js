import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../container/Home'
import Login from '../container/Login'
import NotFound from '../container/NotFound'
import Register from '../container/Register'


const App = () => (
    <BrowserRouter>
    <Layout>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NotFound} />
      </Switch>
    </Layout>
    </BrowserRouter>
)

export default App
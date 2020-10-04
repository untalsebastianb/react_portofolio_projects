import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from '../container/Home'
import Login from '../container/Login'
import Register from '../container/Register'

const App = () => (
    <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    </BrowserRouter>
)

export default App
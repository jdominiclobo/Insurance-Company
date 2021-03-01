import React from 'react'
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { List, Space } from 'antd';
import { PageHeader, Button } from 'antd';

import Home from '../src/components/Home'
import Register from '../src/components/auth/Register'
import Login from '../src/components/auth/Login'



function App() {
  return (
        <BrowserRouter>
        {
          <div className="App">
            <nav className="mb-5 navbar navbar-expand-md navbar-light bg-light">
              <PageHeader
                className="site-page-header"
                onBack={() => null}
                title={<h1><a className="navbar-brand" href="/">Insuro</a></h1> }
                extra={[
                  <Button key="2" type="primary" href="/Register"> Register </Button>,
                  <Button key="1" type="primary" href="/Login"> Login </Button>
                ]}
              />
            </nav>  
        </div>
        }

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login}  />

        </Switch>

        </BrowserRouter>        
  );
}

export default App;
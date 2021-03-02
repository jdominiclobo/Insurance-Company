import React from 'react'
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { PageHeader, Button } from 'antd';

import Home from '../src/components/Home'
import Register from '../src/components/auth/Register'
import Login from '../src/components/auth/Login'



function App() {
  return (
        <BrowserRouter>
        {
          <div className="App">
              <PageHeader
                style={{color:"#40a9ff"}}
                className="site-page-header"
                // onBack={() => null}
                title={<h1><a style={{color:"#112a45"}} className="navbar-brand" href="/">INSURO</a></h1> }
                extra={[
                  <Button key="2" type="primary" href="/Register"> Register </Button>,
                  <Button key="1" type="primary" href="/Login"> Login </Button>
                ]}
              />
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
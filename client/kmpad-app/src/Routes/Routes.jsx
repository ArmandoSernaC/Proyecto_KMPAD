import React from 'react';
import {
    BrowserRouter as Router, 
    Switch, 
    Route } from "react-router-dom";
import Login from '../components/Login';
import PrivateLayout from '../Layouts/PrivateLayout';
import PublicLayout from '../Layouts/PublicLayout';
import Products from '../pages/Admin/Products';
import Sales from '../pages/Admin/Sales';
import Users from '../pages/Admin/Users';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={["/products", "/sales", "/users"]}>
                        <PrivateLayout>
                            <Switch>
                                <Route path= "/products" >
                                    <Products/>
                                </Route>
                                <Route path= "/sales" >
                                     <Sales/>
                                </Route>
                                <Route path= "/users" >
                                      <Users/>
                                </Route>
                            </Switch>
                        </PrivateLayout>
                    </Route>
                    <Route path ="/">                        
                        <Switch> 
                            <PublicLayout>
                                <Route path ="/">
                                    <Login/>
                                </Route>
                            </PublicLayout>
                        </Switch>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes

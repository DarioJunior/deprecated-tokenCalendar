import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Events } from './pages/Events';

import UserProvider from './context/UserProvider';

export function App() {
  return(
    <BrowserRouter>
     <UserProvider>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/register" component={ Register } />
        <Route exact path="/events/:id" component={ Events } />
      </Switch>
     </UserProvider>
    </BrowserRouter>
  );
}


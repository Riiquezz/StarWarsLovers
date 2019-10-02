import React from 'react';
import './App.css'
//import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './componentes/header'
import Home from './pages/home'
import Footer from './componentes/footer'
import Films from './pages/films';
import Login from './pages/login';
import People from './pages/people';
import Planets from './pages/planets';
import Species from './pages/species';
import Starships from './pages/starships';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {

	render() {
		return (
			
				<HashRouter>
					<Header />
			
					<Switch>
						<Route path="/" exact = {true} component={Home} />
						<Route path="/films" component={Films} />
						<Route path="/starships" component={Starships} />
						<Route path="/people" component={People} />
						<Route path="/planets" component={Planets} />
						<Route path="/species" component={Species} />
						<Route path="/login" component={Login} />
						
					</Switch>
					<Footer></Footer>
				</HashRouter>
				
			
		)
	}
}







export default App;

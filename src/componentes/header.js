import React, { Component } from 'react'
import Home from '../pages/home'
import Films from '../pages/films';
import Login from '../pages/login';
import People from '../pages/people';
import Planets from '../pages/planets';
import Species from '../pages/species';
import Starships from '../pages/starships';
import { Button } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<div>
				<header class="header_area">
					<div class="main_menu" id="mainNav">
						<nav class="navbar navbar-expand-lg navbar-light">
							<div class="container">

								<a class="navbar-brand logo_h" href="index.html">
									<img src="img/starwars.png" alt="" />

								</a>
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>

								<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
									<Nav className="ml-auto">

										<Button variant="outline-light"><Nav.Link><Link to="/" className="teste"><h5>Home</h5></Link></Nav.Link></Button>
										<Button variant="outline-light"><Nav.Link><Link to="/films" className="teste"><h5>Films</h5></Link></Nav.Link></Button>
										<Button variant="outline-light"><Nav.Link><Link to="/starships" className="teste"><h5>Starships</h5></Link></Nav.Link></Button>
										<Button variant="outline-light"><Nav.Link><Link to="/people" className="teste"><h5>People</h5></Link></Nav.Link></Button>
										<Button variant="outline-light"><Nav.Link><Link to="/planets" className="teste"><h5>Planets</h5></Link></Nav.Link></Button>
										<Button variant="outline-light"><Nav.Link><Link to="/species" className="teste"><h5>Species</h5></Link></Nav.Link></Button>
										<Button variant="outline-light"><Nav.Link><Link to="/login" className="teste"><h5>Login</h5></Link></Nav.Link></Button>

									</Nav>
								</div>
							</div>
						</nav>
					</div>
				</header>

			</div>
		)
	}
}

import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section class="home_banner_area">
                    <div class="banner_inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="banner_content">
                                        <h2>Star Wars Lovers <br />The home of Star Wars fans</h2>
                                        
                                        
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="home_right_box">
                                    <p><h4>Sobre o Desenvolvedor</h4></p>
                                    <p><h4>Henrique Pomatti dos Santos</h4></p>
                                    <p><h4>Registro Acadêmico : 1111708</h4></p>
                                    
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/carousel1.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="img/carousel2.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="img/carousel3.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>

            </div>
        )
    }
}

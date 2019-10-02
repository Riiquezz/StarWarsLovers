import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="starships">

                <section class="home_banner_area">
                    <div class="banner_inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div className="starships">
                                        <br></br>
                                        <div>
                                            <form>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email </label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu e-mail" />
                                                    <small id="emailHelp" class="form-text text-muted"></small>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Senha</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
                                                </div>

                                                <button type="submit" class="btn btn-primary">Login</button>
                                            </form>
                                        </div>
                                        <br></br>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}

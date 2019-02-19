import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Chismoso
                            </h1>
                            <h2 className="subtitle">
                                Agrega una firma invisible a tus fotografias :)
                            </h2>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <div className="tabs is-boxed is-fullwidth">
                            <ul>
                                <li className="is-active">
                                    <a>
                                        <span className="icon"><i className="fas fa-search" aria-hidden="true"/></span>
                                        <span>Verificar</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="icon"><i className="fas fa-plus-circle" aria-hidden="true"/></span>
                                        <span>Agregar</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Text input" value="bulma"/>
                                <span className="icon is-small is-left">
                                  <i className="fas fa-user"/>
                                </span>
                                <span className="icon is-small is-right">
                                  <i className="fas fa-check"/>
                                </span>
                            </div>
                            <p className="help is-success">This username is available</p>
                        </div>


                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Crear firma</button>
                            </div>
                            <div className="control">
                                <button className="button is-text">Limpiar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default App;

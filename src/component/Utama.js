import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Beranda from './Beranda';
import Tentang from './Tentang';
import Keahlian from './Keahlian';
const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/beranda" component={Beranda} />
        <Route path="/about" component={Tentang} />
        <Route path="/keahlian" component={Keahlian}/>
    </Switch>
)
export default Utama;

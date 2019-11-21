import React, { Component } from 'react';
import './App.css';
import Utama from './component/Utama'
import {Link} from 'react-router-dom';
import {Container,makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
  root:{
    position: 'fixed',
    width: '80%',
  },
  roots:{
    padding : '15px',
    boxShadow: 'none',
    textAlign: 'center',
    backgroundColor:'rgba(225, 225, 225,0.7)',
    marginTop: '10px',
    borderRadius:'3px'
  },
  link: {
    textDecoration: 'none',
    padding: '15px',
    color : 'grey',
    fontSize: '15.5px',
    fontFamily: 'Roboto'
},scroller:{
  overflow: 'hidden',
  marginRight:'25%'
},footer:{
  backgroundColor:'#4e4e4e',
  textAlign: 'center',
  height:'50px',
  lineHeight:'50px',
  fontFamily:'Roboto',
  color: 'white',
  fontSize: '10px',
}
});
 function Nav() {
  
  const classes = useStyle()
  return(
    <div className ={classes.scroller}>
      <div className={classes.root}>

        <div className={classes.roots}>
          <div>
            
          </div>
            <Link to="/beranda" className={classes.link}>Beranda</Link>
            <Link to="/about" className={classes.link}>Tentang</Link>
            <Link to="/keahlian" className={classes.link}>Keahlian</Link>

        </div>
      </div>
    </div>
  )
}
;


function Footer() {
  const classes = useStyle();
  return(
    <div className={classes.bottom}>
      <div className={classes.footer}>
        <h2>HIDAYATUS SHOLIKHIN © 2K19</h2>
      </div>
    </div>
  )
}
export default class App extends Component {
  render() { 
    return ( 
      <div>
        <Container>

          <Nav/>
        </Container>
           <Utama/>
           <Footer/>
      </div>
    )
  }
}
import React from 'react';
import { Typography,Container,makeStyles,Grid} from '@material-ui/core';
import Bg from '../img/bg2.jpg';
import Pp from '../img/ppp.JPG';
const useStyle = makeStyles(theme=>({
  root:{
    flexGrow : 1,
    margin : 0,
    width: '100%'
  },teks:{
    textAlign: 'center',
    fontFamily :'Roboto'
  },paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },isi:{
    paddingLeft: '25px',
    paddingBottom: '25px',
    fontFamily : 'Roboto'
  },img:{
    width:'100%',
},right:{
  textAlign: 'right',
  fontFamily : 'Roboto',
  fontSize: '20px'
},left:{
  fontFamily : 'Roboto',
  fontSize: '20px'
},pp:{
  width:'170px',
  marginRight:'50px',
  marginTop:'2px'
},p:{
  marginBottom:'2px',
  fontSize:'17px'
}
}));
export default function Tentang() {
  const classes = useStyle();
    return ( 
      <div>
        
        <img src={Bg} className={classes.img}/>
          <div className={classes.root}>
            <Container>
              <Typography>
              <h1 className={classes.teks}>Tentang Saya</h1>
              </Typography>
              <br/>
              <br/>
              <br/>
              <br/>
            <Grid container spacing={2}>
              <Grid item xs={6} className={classes.right}>
                 
                <img src={Pp} className={classes.pp}/>
              </Grid>
              <Grid item xs={6} className={classes.left}>
                <h4>
                Nama : Hidayatus Sholikhin
                </h4>
                <br/>
                <h4>
                Kelas : XI RPL 1
                </h4>
                <br/>
                <h4>
                TTL : Trenggalek, 26 April 2002
                </h4>
                <br/>
                <h4>
                Sekolah : SMK TELKOM MALANG
                </h4>
              </Grid>
            </Grid>
            <br/>
              <br/>
              <br/>
              <Typography className={classes.teks}>
                <h3 > Cerita Singkat</h3>
                <br/>
                <p className={classes.p}>Sebelumnya perkenalkan nama saya Hidayatus Sholikhin, yang biasa di panggil Tutus,</p>
                <p className={classes.p}>saya lahir disebuah keluarga sederhana, yaitu pada tanggal 26 April 2002</p>
                <p className={classes.p}>pada saat saya masih kecil, sangat sedikit sekali yang bisa menikmati layanan telepon</p>
                <p className={classes.p}>bahkan pada saat itu harga sebuah telepon genggam sangat mahal sekali</p>
                <p className={classes.p}>jadi tidak lumrah yang mempunyai hanya orang yang berkecukupan lebih saja saya masih ingat saat itu </p>
                <p className={classes.p}>saya di belikan telepon genggam oleh kakak saya</p>
                <p className={classes.p}>dan mulai saat itu saya tertarik pada dunia teknologi yang ada di Indonesia</p>
                <p className={classes.p}>oleh karena itu saya sekolah di SMK TELKOM </p>
                <p className={classes.p}>untuk menimba Ilmu agar kelak bisa menjadi salah satu pengembang dari teknologi yang akan menguasai pasar Global.</p>
              </Typography>
              <br/>
              <br/>
              <br/>
            </Container>
          </div>
      </div>
      
    );
}
    
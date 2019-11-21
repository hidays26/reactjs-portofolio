import React from 'react';
import {Typography,makeStyles,Container} from '@material-ui/core';
import Bg from '../img/bg.jpg';

const useStyle = makeStyles({
    img:{
        width:'100%',
    },
    Header:{
        textAlign:'center',
    },p:{
        textAlign:'center',
        marginBottom:'2px',
        fontSize:'17px'
    },thanks:{
        maxWidth: '50%',
        backgroundColor:'black',
        textAlign: 'center',
    },thanksText:{
        color: 'white',
    },footer:{
        padding:'15px',
        backgroundColor:'#4e4e4e',
        margin: 0
    },white:{
        color:'white',
        textAlign:'center',
        fontSize: 15,
        fontFamily: 'Roboto'
    }
});

export default function Beranda() {
    const classes  = useStyle();
        return (  
                <div>
                    <img src={Bg} className={classes.img}/>
                    <Typography>
                            <h1 className={classes.Header}>Welcome To My Portofolio</h1>
                        <br/><br/><br/>
                            <Container>
                                <p className={classes.p}>Ini Adalah Website tentang Portofolio yang pernah saya kerjakan, dan segala hal tentang saya mungkin ada disini,</p>
                                <p className={classes.p}>sebelumnya saya hanyalah seorang manusia yang ingin mencari ilmu, dengan rasa semangat empat puluh lima,</p>
                                <p className={classes.p}>yang rela jauh dari orang tua, untuk menuntut ilmu, dan ingin membahagiakan kedua orang tua agar mereka bisa hidup bahagia,</p>
                                <p className={classes.p}>dengan cara membanggakan nama orang tua saya.</p>
                            </Container>
                        <br/><br/><br/>
                                <h2 className={classes.Header}>Special Thanks</h2>
                                <br/>
                            <Container>
                                <p className={classes.p}>Allah SWT yang telah memberikan segala rezeki terhadap saya serta keluarga</p>
                                <p className={classes.p}>dan telah memberi saya kesempatan untuk merasakan nikmatnya dunia meskipun hanya sebentar,</p>
                                <p className={classes.p}>terimakasih juga terhadap guru - guru pengajar di SMK TELKOM Malang yang telah membimbing saya selama bersekolah,</p>
                                <p className={classes.p}>dan tidak lupa dengan Orang Tua saya yang telah mensupport saya terhadap passion saya di bidang IT.</p>
                            </Container>
                        <br/><br/><br/>
                    </Typography>
                </div>
         );
}
 
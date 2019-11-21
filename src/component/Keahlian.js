import React from 'react';
import {Typography,makeStyles,Grid,Container} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Bg from '../img/bg3.jpg';

const useStyle = makeStyles({
    img:{
        width:'100%'
    },
    header:{
        textAlign:'center',
        fontFamily:'Roboto'
    },right:{
        textAlign: 'right',
        fontFamily : 'Roboto',
        fontSize: '20px',
        marginTop:'5'
    },left:{
        marginTop:'5.2px'
    }
})

export default function Karya() {
    const classes = useStyle()
        return ( 
            <div>  
                    <div>
                        <img src={Bg} className={classes.img}/>
                        <Typography >
                            <h1 className={classes.header}>
                                Data Keahlian
                            </h1>
                        <br/>
                        <br/>
                        <br/>
                        <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={6} className={classes.right}>
                                Basic Programming
                                <br/>
                                PHP
                                <br/>
                                Java Script
                                <br/>
                                Styling CSS
                                <br/>
                                Code Igniter
                                <br/>
                                React Js
                                <br/>
                                Node Js
                            </Grid>
                            <Grid item xs={6} className={classes.left}>
                                <div>
                                    <Rating name="half-rating" value={4.5} precision={0.5} readOnly />
                                </div>
                                <div className={classes.left}>
                                    <Rating name="half-rating" value={4} precision={0.5} readOnly />
                                </div>
                                <div className={classes.left}>
                                    <Rating name="half-rating" value={4} precision={0.5} readOnly />
                                </div>
                                <div className={classes.left}>
                                    <Rating name="half-rating" value={3.5} precision={0.5} readOnly />
                                </div>
                                <div className={classes.left}>
                                    <Rating name="half-rating" value={4.5} precision={0.5} readOnly />
                                </div>
                                <div className={classes.left}>
                                    <Rating name="half-rating" value={4} precision={0.5} readOnly />
                                </div>
                                <div className={classes.left}>
                                    <Rating name="half-rating" value={4} precision={0.5} readOnly />
                                </div>
                            </Grid>
                            </Grid>
                        </Container>
                        <br/><br/><br/>
                        <h3 className={classes.header}>
                            Sekian Data Keahlian saya bila ada kekurangan mohon dimaafkan
                        </h3>
                        
                        <br/><br/><br/>
                        </Typography>
                    </div>
            </div>
         );
}
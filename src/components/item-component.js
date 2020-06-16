import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Grid, Avatar, Card, CardContent, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    card: {
        margin: theme.spacing(2),
        backgroundColor: '#C0C0C0'
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(17),
        height: theme.spacing(17),
    },
}));

export const ItemComponent = ({ item }) => {
    const classes = useStyles();
    return (
        <Grid item sm={12} lg={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container spacing={2} direction="row"
                        justify="center"
                        alignItems="center" >
                        <Grid item sm={12} lg={4} style={{ textAlign: "center", display: 'flex' }}>
                            <Box justifyContent="center"><Avatar style={{ alignSelf: 'center' }} alt={item.description} src={item.url} className={classes.large} /></Box>
                        </Grid>
                        <Grid item sm={12} lg={8}>
                            <Grid container spacing={3} direction="row"
                                justify="center"
                                alignItems="center">
                                <Grid item sm={12} lg={12} alignItems={"center"} alignContent={"center"} justify={"center"}>
                                    <Typography variant='h5'>{item.description}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} direction="row"
                                justify="center"
                                alignItems="center">
                                <Grid item sm={12} lg={12} justify={'flex-end'}>
                                    <Typography variant='h6'><CurrencyFormat decimalScale={2} fixedDecimalScale={true} value={item.value} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} /></Typography>
                                </Grid>
                                <Grid item sm={12} lg={12} justify={'flex-end'}>
                                    <Typography variant='h6'><CurrencyFormat decimalScale={2} fixedDecimalScale={true} value={item.newValue} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'R$ '} /></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {!item.showX2 ? <></> :
                            <>
                                <Grid item sm={12} lg={12} justify={'center'}>
                                    <hr></hr>
                                </Grid>
                                <Grid item sm={12} lg={12} justify={'flex-end'}>
                                    <Typography variant='h6'><CurrencyFormat decimalScale={2} fixedDecimalScale={true} value={item.newValue * 2} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'R$ '} /> (x2)</Typography>
                                </Grid>
                            </>
                        }
                    </Grid>
                </CardContent>
            </Card>
        </Grid>

    )
}
export default ItemComponent
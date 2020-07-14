import React from 'react'
import { Grid, Typography, Card, CardContent, Box, Avatar } from '@material-ui/core';
import AmandaETiago from '../data/AmandaETiago.png';
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ReactMarkdown from "react-markdown";
import LoyaltyIcon from '@material-ui/icons/Loyalty';

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
        backgroundColor: 'Transparent'
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


export const HoneyMoon = () => {


    const classes = useStyles();
    const Aereo = `
- Passagens compradas
- Companhia Aérea: _Gol_
- Ida - 15/03/2021:
    - Embarque: Guarulhos - 15:45
    - Desembarque: Porto Alegre - 17:30
- Volta - 21/03/2021:
    - Embarque: Porto Alegre - 13:05
    - Desembarque: Guarulhos - 14:45`;

    const Hospedagem = 
`
### 6 diarias no total

1. 15/03 Seg -> Ter 16/03 
2. 16/03 Ter -> Qua 17/03
3. 17/03 Qua -> Qui 18/03
4. 18/03 Qui -> Sex 19/03
5. 19/03 Sex -> Sab 20/03
6. 20/03 Sab >- Dom 21/03

* 2 nós queremos na Valduga / 500 por diaria
- Wine Experience * passeio

* 4 diarias na pousada/Hotel centro / 300 por diaria

### Opções de hospedagem Pousada/Hotel Centro

#### Opções 4x2 de hospedagem (2754 Max/2060 Min - A definir)

- 4 diárias no hotel centro/bento - +1pt $ 1654(Laghetto Viverone - Quarto Luxo) 8.5
ou
- 4 diárias no hotel centro/bento - $1368(Vinocap - Quarto superior com ar condicionado) 8.4
ou
- 4 diárias na pousada estrada/bento -1pt - $ 908(Farina - Apartamento superior) 8.5
ou
- 4 diárias na pousada estrada/bento - $1040 (Castelo Benvenutti - Quarto Duplo) 9.2  **** Tem apenas 3 diarias
ou
- 4 diárias no hotel centro/garibald - $960(dall onder - Apartamento Superior) 8.9

- 2 diárias na pousada estrada/bento - 1100(Casa Valduga - Quarto a definir) 

#### Opções 2x2x2 de hospedagem (2344 - A definir)

- 2 diárias na pousada estrada/bento - $560(Castelo Bevenutti - Quarto Duplo c/ banheira) 9.2
- 2 diárias na pousada estrada/bento - 1100(Casa Valduga - Quarto a definir) 
- 2 diárias no hotel centro/Bento -  $684(Vinocap - Quarto superior com ar condicionando) 8.4
    `;

    const Passeios = 
    `
- Casa Valduga(Bento)
- Maria Fumaça(Bento/Garibaldi/Carlos Barbosa)
- Cristais(Gramado/Canela)
- Chocolates(Gramado/Canela)
- Cave Geisse(Pinto Bandeira)
- Cervejaria Leopoldina(Bento)
    `;

    const Carro = 
    `
    - Localiza Hertz, Categoria F - 719,98
    `;

    const Resumo = 
    `
1. Aéreo - OK
2. Hospedagem - Em definição
3. Transporte Carros - Definido porém não pago - Classe F
4. Passeios - Em definição



Total 2x2x2
3063,98

Total 4x2 Min
2779,98

Total 4x2 Max
3473,98

    `;

    return <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12} alignItems={"center"} alignContent={"center"} justify={"center"}>

                <Card className={classes.card}>
                    <CardContent>
                        <Grid container spacing={2} direction="row"
                            justify="center"
                            alignItems="center" >
                            <Grid item sm={12} lg={2} style={{ textAlign: "center", display: 'flex' }}>
                                <Box justifyContent="center"><Avatar style={{ alignSelf: 'center' }} alt={'Amanda e Tiago'} src={AmandaETiago} className={classes.large} /></Box>
                            </Grid>
                            <Grid item sm={12} lg={10}>
                                <Typography variant="h3" >
                                    Amanda e Tiago - Lua de Mel na Serra Gaucha!</Typography>
                                <br></br>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} lg={12} alignItems={"center"} alignContent={"center"} justify={"center"}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid item sm={12} lg={12}>
                            <Typography variant="h3" >
                                <FlightIcon></FlightIcon>&nbsp;&nbsp;Aéreo - Status OK</Typography>
                        </Grid>
                        <Grid item sm={12} lg={12}>
                            <ReactMarkdown source={Aereo}/>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} lg={12} alignItems={"center"} alignContent={"center"} justify={"center"}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid item sm={12} lg={12}>
                            <Typography variant="h3" >
                                <HotelIcon></HotelIcon>&nbsp;&nbsp;Hospedagem</Typography>
                        </Grid>
                        <Grid item sm={12} lg={12}>
                            <ReactMarkdown source={Hospedagem}/>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} lg={12} alignItems={"center"} alignContent={"center"} justify={"center"}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid item sm={12} lg={12}>
                            <Typography variant="h3" >
                                <DirectionsCarIcon></DirectionsCarIcon>&nbsp;&nbsp;Carro/Trasport</Typography>
                        </Grid>
                        <Grid item sm={12} lg={12}>
                            <ReactMarkdown source={Carro}/>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} lg={12} alignItems={"center"} alignContent={"center"} justify={"center"}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid item sm={12} lg={12}>
                            <Typography variant="h3" >
                                <PersonPinCircleIcon></PersonPinCircleIcon>&nbsp;&nbsp;Passeios pretendidos</Typography>
                        </Grid>
                        <Grid item sm={12} lg={12}>
                            <ReactMarkdown source={Passeios}/>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} alignItems={"center"} alignContent={"center"} justify={"center"}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid item sm={12} lg={12}>
                            <Typography variant="h3" >
                                <LoyaltyIcon></LoyaltyIcon>&nbsp;&nbsp;Resumo</Typography>
                        </Grid>
                        <Grid item sm={12} lg={12}>
                            <ReactMarkdown source={Resumo}/>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>;
};

export default HoneyMoon;
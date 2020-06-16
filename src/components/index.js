import React from 'react';
import itensToConvert from '../data/'
import ItemComponent from './item-component'
import {  Grid, Typography } from '@material-ui/core';

export const MyApp = () => {

    const [cotacao, setCotacao] = React.useState(0);
    const [render, setRender] = React.useState(false);

    React.useEffect(() => {
        fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=CLP&to=BRL&amount=1000", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                "x-rapidapi-key": "335419af4amsh2e74fb26cd7c60bp18200bjsn03ff6928617f"
            }
        })
            .then(response => {
                return response.text();
            })
            .then(result => {
                const data = JSON.parse(result);
                setCotacao(parseFloat(data.rates.BRL.rate_for_amount));
            })
            .catch(err => {
                var value = prompt("Ocorreu um problema ao requisitar a cotação atual\n Por favor insira o valor em real de 1000 Pesos Chilenos", 6.666);
                setCotacao(parseFloat(value));
                console.log(err);
            }).finally(
                () => {
                    setRender(true);
                }
            );

    }, [render]);

    const totalValue = itensToConvert.reduce(function (sum, x) { return sum + x.value }, 0);

    const totalItem = { showX2: true, description: 'Total', value: totalValue, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl4tZZIF08_98JTy5dvbLBjZVslS6Gb3TuRygHDzWBIRlAJxuv&usqp=CAU', newValue: (totalValue * cotacao) / 1000 }

    const itens = itensToConvert.map(i => {
        return {
            ...i,
            newValue: (i.value * cotacao) / 1000
        };
    })

    return render === false ? <></> : <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12} alignItems={"center"} alignContent={"center"} justify={"center"}>

                <Typography variant="h3" >
                    Amanda e Tiago - Um sonho no chile!
                    </Typography>
                <br></br>
                <Typography variant="h4">Cotações para os pacotes da Lua de Mel!</Typography>

            </Grid>
            {itens.map((item, index) => {
                return (<ItemComponent key={index} item={item}></ItemComponent>)
            })}
            <ItemComponent item={totalItem}></ItemComponent>
        </Grid>
    </>;
};

export default MyApp;
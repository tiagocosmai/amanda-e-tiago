import React from 'react'
import CurrencyFormat from 'react-currency-format'

export const ItemComponent = ({ item }) => {

    const [newValue, setNewValue] = React.useState(0)

    React.useEffect(() => {


        fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=CLP&to=BRL&amount=" + item.value, {
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
                console.log(data);
                setNewValue(parseFloat(data.rates.BRL.rate_for_amount));
            })
            .catch(err => {
                console.log(err);
            });

    }, [item.value]);


    return (
        <div style={{ display: 'block', marginTop: '35px;' }}>
            <table>
                <tbody>
                    <tr>
                        <td rowSpan={5}>
                            <img width={'150px'} src={item.url} alt={item.description} />
                        </td>
                        <td style={{ verticalAlign: 'top', width: '300px' }}>
                            <h5>
                                {item.description}
                            </h5>
                        </td>
                    </tr>
                    <tr>
                        <td><span><CurrencyFormat decimalScale={2} fixedDecimalScale={true} value={item.value} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} /></span></td>
                    </tr>
                    <tr>
                        <td><span><CurrencyFormat decimalScale={2} fixedDecimalScale={true} value={newValue} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'R$ '} /></span></td>
                    </tr>
                    <tr>
                        <td>{item.showX2 ? <>
                            <hr style={{ width: '90%' }}></hr>
                            <span>2 pessoas: <CurrencyFormat decimalScale={2} fixedDecimalScale={true} value={newValue * 2} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'R$ '} /></span>
                        </> : <></>}</td>
                    </tr>
                    <tr>
                        <td style={{ height: '100%' }}> &nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ItemComponent
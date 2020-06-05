import React from 'react';
import itensToConvert from '../data/'
import ItemComponent from './item-component'

export const MyApp = () => {

    const totalValue = itensToConvert.reduce(function (sum, x) { return sum + x.value }, 0);

    const totalItem = { showX2: true, description: 'Total', value: totalValue, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl4tZZIF08_98JTy5dvbLBjZVslS6Gb3TuRygHDzWBIRlAJxuv&usqp=CAU' }


    return <div className={'myApp'}>
        <h3>Cotações para os pacotes da Lua de Mel no Chile!</h3>
        <table style={{ width: '80%', marginLeft: '15%' }}>
            <tbody>
                <tr>
                    <td style={{ width: '50%' }}>
                        <div>
                            {itensToConvert.map((item, index) => {
                                return (<ItemComponent key={index} item={item}></ItemComponent>)
                            })}
                        </div>
                    </td>
                    <td style={{ width: '50%' }}>
                        <div>
                            <ItemComponent item={totalItem}></ItemComponent>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>;
};

export default MyApp;
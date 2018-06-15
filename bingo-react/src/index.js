import React from 'react';
import ReactDOM from 'react-dom';

import {SettingHtml} from './settings';
import BingoGame from './BingoGame/BingoGame.jsx'
import swal from 'sweetalert2';

//load customized setting from user input

(async function getFormValues () {
    const {value: gameSetting} = await swal({
        title: 'Game Setting',
        html: SettingHtml,
        focusConfirm: true,
        allowOutsideClick:false,
        preConfirm: () => {
            return {
                ballNum: parseInt(document.getElementById('ballNum').value, 10),
                ticketSize: {
                    x:parseInt(document.getElementById('x').value, 10),
                    y:parseInt(document.getElementById('y').value, 10),
                },
                ticketNum:parseInt(document.getElementById('ticketNum').value, 10),
                drawBallPeriod:parseInt(document.getElementById('drawBallPeriod').value, 10),
            }
        }
    });

    ReactDOM.render(
        <BingoGame 
            ballNum={gameSetting.ballNum}
            ticketNum={gameSetting.ticketNum}
            ticketSize={gameSetting.ticketSize}
            drawBallPeriod={gameSetting.drawBallPeriod}
            />, 
        document.getElementById('root')
    );
})()



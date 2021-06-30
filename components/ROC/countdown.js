import React from 'react'
import CStyle from '../../styles/countdown.module.css'

function countdown({hoursMinSecs}) {

    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div className={CStyle.countdownFont}>
             <p className={CStyle.timeFont}>{`${hrs.toString().padStart(2, '0')} :`}<br/><span className={CStyle.dateFont}>Horas</span></p>
             <p className={CStyle.timeFont}>{`${mins.toString().padStart(2, '0')} :`}<br/><span className={CStyle.dateFont2}>Minutos</span></p>
             <p className={CStyle.timeFont}>{`${secs.toString().padStart(2, '0')}`}&nbsp;&nbsp;<br/><span className={CStyle.dateFont3}>Segundos</span></p>
        </div>
    )
}

export default countdown

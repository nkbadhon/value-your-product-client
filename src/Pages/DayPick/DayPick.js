import React from 'react';



const DayPick = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    console.log(date);
    return (

        <div className="App">
            <h1>Current date is {date}</h1>
        </div>
    );
}

export default DayPick;


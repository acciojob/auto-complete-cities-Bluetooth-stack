import React, { useEffect, useState } from "react";

const cities = [
    "bolangir",
    "patnagarh",
    "kendrapada",
    "bhubaneswar",
    "puri",
    "cuttack",
]

const Text = () => {
    let [change, setChange] = useState('');
    let [update, setUpdate] = useState([]);

    useEffect(() => {
        setUpdate(
            cities.filter((city) => (
                city.toLowerCase().includes(change.toLowerCase())
            ))
        )
    }, [change])

    return (
        <div>
            <input value={change} onChange={(e) => { setChange(e.target.value) }}></input>
            <ul>
                <li></li>
                {
                    update.map((city, ind) => (
                        <li key={ind} onClick={() => { setChange(city) }}>{city}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Text;
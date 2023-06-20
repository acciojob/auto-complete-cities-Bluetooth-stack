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
            <input onChange={(e) => { setChange(e.target.value) }}></input>

                {
                    // change &&
                    update.map((city, ind) => (
                        <li key={ind}>{city}</li>
                    ))
                }
        </div>
    )
}

export default Text;
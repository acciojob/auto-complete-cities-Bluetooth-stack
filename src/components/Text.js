import React, { useEffect, useState } from "react";

const cities = [
    'Ajmer',
    'Sangli Miraj Kupwad',
    'Adilabad',
    'Anantapur',
    'Chittoor',
    'Kakinada',
    'Guntur',
    'Hyderabad',
    'Karimnagar',
    'Khammam',
    'Krishna',
    'Kurnool',
    'Mahbubnagar',
    'Medak',
    'Nalgonda',
    'Nizamabad',
    'Ongole',
    'Hyderabad',
    'Srikakulam',
    'Nellore',
    'Visakhapatnam',
    'Vizianagaram',
    'Warangal',
    'Eluru',
    'Kadapa',
    'Anjaw',
    'Changlang',
    'East Siang',
    'Kurung Kumey',
    'Lohit',
    'Lower Dibang Valley',
    'Lower Subansiri',
    'Papum Pare',
    'Tawang',
    'Tirap',
    'Dibang Valley',
    'Upper Siang',
    'Upper Subansiri',
    'West Kameng',
    'West Siang',
    'Baksa',
    'Barpeta',
    'Bongaigaon',
    'Cachar',
    'Chirang',
    'Darrang',
    // 'Dhemaji',
    'Dima Hasao',
    'Dhubri',
    'Dibrugarh',
    'Goalpara',
    'Golaghat',
    'Hailakandi',
    'Jorhat',
    'Kamrup',
    'Kamrup Metropolitan',
    'Karbi Anglong',
    'Karimganj',
    // 'Kokrajhar',
    'Lakhimpur',
    'Marigaon',
    'Nagaon',
    'Nalbari',
    'Sibsagar',
    'Sonitpur',
    'Tinsukia',
    'Udalguri',
    'Araria',
    'Arwal',
    'Aurangabad',
    'Banka',
    'Begusarai',
    'Bhagalpur',
    'Bhojpur',
    'Buxar',
    'Darbhanga',
    'East Champaran',
    'Gaya',
    'Gopalganj',
    'Jamui',
    'Jehanabad',
    'Kaimur',
    'Katihar',
    'Khagaria',
    'Kishanganj',
    'Lakhisarai',
    'Madhepura',
    'Madhubani',
    'Munger',
    'Muzaffarpur',
    'Nalanda',
    'Nawada',
    'Patna',
    'Purnia',
    'Rohtas',
    'Saharsa',
    'Samastipur',
    'Saran',
    'Sheikhpura',
    'Sheohar',
    'Sitamarhi',
    'Siwan',
    'Supaul',
    'Vaishali',
    'West Champaran',
    'Chandigarh',
    'Bastar',
    'Bijapur',
    'Bilaspur',
    'Dantewada',
    'Dhamtari',
    'Durg',
    'Jashpur',
    'Janjgir-Champa',
    'Korba',
    'Koriya',
    'Kanker',
    'Kabirdham (Kawardha)',
    'Mahasamund',
    'Narayanpur',
    'Raigarh',
    // 'Rajnandgaon',
    'Raipur',
    'Surguja',
    'Ahmednagar',
    'Akola',
    'Amravati',
    'Aurangabad',
    'Bhandara',
    'Beed',
    'Buldhana',
    'Chandrapur',
    'Dhule',
    'Gadchiroli',
    'Gondia',
    'Hingoli',
    'Jalgaon',
    'Jalna',
    'Kolhapur',
    'Latur',
    'Mumbai',
    'Mumbai suburban',
    'Nandurbar',
    'Nanded',
    'Nagpur',
    'Nashik',
    'Osmanabad',
    'Parbhani',
    'Pune',
    'Raigad',
    'Ratnagiri',
    'Sindhudurg',
    'Sangli',
    'Solapur',
    'Satara',
    'Thane',
    'Wardha',
    'Washim',
    'Yavatmal',
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
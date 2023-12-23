import React,{useState} from "react";
import  './CardFooter.css';

const Giris = () =>{
    const[celcius,setCelsius] = useState('');
    const[kelvin,setKelvin] = useState('');
    const[fah,setFah] = useState('');

    const handleInputChange = (event) =>{
        const value = event.target.value;
        if(!isNaN(value)){
            setCelsius(value);
        }
    };

    const kelvinDonustur = () => {
        const celciusFloat = parseFloat(celcius);
        if(!isNaN(celciusFloat)){
            const kelvinValue = celciusFloat + 273.15;
            setKelvin(kelvinValue.toFixed(2));
            setFah('');
        }
    };

    const fahDonustur = () => {
        const celciusFloat = parseFloat(celcius);
        if(!isNaN(celciusFloat)){
            const fahrenheitValue = celciusFloat * 1.8 + 32;
            setFah(fahrenheitValue.toFixed(2));
            setKelvin('');
        }
        
    }


    
    return(
        <div className="div1">
            <h3
            style={{
            color: 'rgb(0, 0, 0)',
            textAlign:'center',
           }}>TEMPERATURE TRANSDUCER</h3>
            <label className="label">
                <p id="a">Enter the celcius value:</p>
                <input
                    id="input"
                    type="integer"
                    value={celcius}
                    onChange={handleInputChange}
                />
                <button id="kelbut" onClick={kelvinDonustur}>Convert to Kelvin</button>
                <button id="kelbut" onClick={fahDonustur}>Convert to Fahrenheit</button>
            </label>
            <h4 id="sonuc">Sonuç: {kelvin}{fah}</h4>
            
            
        </div>
    )
};
export default Giris;
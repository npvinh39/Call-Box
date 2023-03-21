import React from 'react';

import './App.css';
import './index.css';

import { InputNumber, KeyboardNumber, ButtonSubmit } from "./components"

const arrayNumberPhone = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];


function App() {
    const [phoneNumber, setPhoneNumber] = React.useState([]);
    const [isCalling, setIsCalling] = React.useState(false);
    const [isMute, setIsMute] = React.useState(false);

    return (
        <div className="App flex justify-center items-center">
            <div className="container grid flex justify-center">
                <InputNumber
                    phoneNumber={phoneNumber}
                    isCalling={isCalling}
                    setPhoneNumber={setPhoneNumber}
                    setIsCalling={setIsCalling}
                />
                <KeyboardNumber
                    data={arrayNumberPhone}
                    isCalling={isCalling}
                    setPhoneNumber={setPhoneNumber}
                    setIsCalling={setIsCalling}
                    isMute={isMute}
                    setIsMute={setIsMute}
                />
                <ButtonSubmit
                    phoneNumber={phoneNumber}
                    isCalling={isCalling}
                    setPhoneNumber={setPhoneNumber}
                    setIsCalling={setIsCalling}
                />
            </div>
        </div>
    );
}

export default App;

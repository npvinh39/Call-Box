import React from 'react';
import './App.css';
import './index.css';

import { InputNumber, KeyboardNumber, ButtonSubmit } from "./components"

const arrayNumberPhone = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];

function App() {
    const [numberPhone, setNumberPhone] = React.useState([])

    return (
        <div className="App flex justify-center items-center">
            <div className="container grid flex justify-center">
                <InputNumber numberPhone={numberPhone} setNumberPhone={setNumberPhone} />
                <hr />
                <KeyboardNumber
                    data={arrayNumberPhone}
                    setNumberPhone={setNumberPhone}
                />
                <ButtonSubmit setNumberPhone={setNumberPhone} />
            </div>
        </div>
    );
}

export default App;

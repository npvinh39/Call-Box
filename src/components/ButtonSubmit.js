import React from 'react';
import { StopCall, StartCall } from "./index";

export function ButtonSubmit({ phoneNumber, isCalling, setIsCalling, setPhoneNumber }) {
    console.log('phoneNumber', phoneNumber)
    return (
        <div>
            {
                isCalling ?
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-2 px-8 rounded-3xl shadow-2xl mt-8"
                        onClick={() => {
                            StopCall();
                            setIsCalling(!isCalling);
                        }}
                    >
                        <i className="fa-solid fa-phone-slash"></i>
                    </button>
                    :
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white text-3xl font-bold py-2 px-36 rounded-3xl shadow-2xl mt-8"
                        onClick={() => {
                            if (phoneNumber.length === 10) {
                                StartCall(phoneNumber, isCalling);
                                setIsCalling(!isCalling);
                            }
                        }}
                    >
                        <i className="fa-solid fa-phone"></i>
                    </button>
            }
        </div>

    );
}
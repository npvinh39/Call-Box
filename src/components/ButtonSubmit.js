import React from 'react';
import { Register } from "./index"

export function ButtonSubmit({ setNumberPhone }) {
    return (
        <div>
            <button
                className="bg-green-500 hover:bg-green-700 text-white text-3xl font-bold py-2 px-36 rounded-3xl shadow-2xl mt-8"
                // onClick={() => setNumberPhone((pre) => {
                //     return console.log(pre.join(''));
                // })}
                onClick={() => Register()}
            >
                <i className="fa-solid fa-phone"></i>
            </button>
        </div>

    );
}
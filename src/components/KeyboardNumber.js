import React from 'react';

export function KeyboardNumber({ data, isCalling, setIsCalling, setPhoneNumber }) {

    return (
        <div>
            {
                isCalling ?
                    <div className='flex justify-between text-white py-40'>
                        <div className='flex border-solid border-2 rounded-full text-xl justify-center items-center w-16 h-16 mx-2'>
                            <i className="fa-solid fa-microphone-slash"></i>
                        </div>
                        <div className='flex border-solid border-2 rounded-full text-xl justify-center items-center w-16 h-16 mx-2'>
                            <i className="fa-regular fa-keyboard"></i>
                        </div>
                        <div className='flex border-solid border-2 rounded-full text-xl justify-center items-center w-16 h-16 mx-2'>
                            <i className="fa-solid fa-pause"></i>
                        </div>
                        <div className='flex border-solid border-2 rounded-full text-xl justify-center items-center w-16 h-16 mx-2'>
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                    </div>
                    :
                    <div className="grid grid-cols-3 gap-4 text-white text-4xl max-w-lg w-96">
                        {
                            data.map((number) => (
                                <div
                                    key={number}
                                    className="cursor-pointer py-6"
                                    onClick={() => setPhoneNumber((pre) => {
                                        if (pre)
                                            return [...pre, number].join('').slice(0, 10);
                                        else return [number].join('');
                                    })}
                                >{number}</div>)
                            )
                        }
                    </div>
            }
        </div>

    );
}



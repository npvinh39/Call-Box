import React from 'react';

export function InputNumber({ phoneNumber, isCalling, setPhoneNumber }) {
    const handleSetNumber = (e) => {
        const value = e.target.value;
        if (phoneNumber.length < 10) {
            setPhoneNumber(value);
        }
    }
    console.log('phoneNumber', phoneNumber)
    return (
        <div>
            {
                isCalling ?
                    <div className='flex flex-col justify-center text-white'>
                        <p className='text-3xl bg-transparent text-center block'>{phoneNumber}</p>
                        <span>Gcalls</span>
                        <span className='pt-10'>Đang gọi...</span>
                    </div>
                    :
                    <div>
                        <div className='flex justify-between text-white'>
                            <input
                                type='text'
                                className='bg-transparent text-white text-3xl outline-none'
                                value={phoneNumber}
                                onChange={(e) => handleSetNumber(e)} autoFocus />
                            <i onClick={() => setPhoneNumber((pre) => {
                                return pre.slice(0, pre.length - 1)
                            })} className="fa-solid fa-delete-left text-white text-3xl ml-3 mb-1 cursor-pointer"></i>
                        </div>
                        <hr />
                    </div>
            }
        </div>

    );
}

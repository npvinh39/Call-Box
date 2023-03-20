import React from 'react';

export function InputNumber({ numberPhone, setNumberPhone }) {
    return (
        <div className='flex justify-between text-white'>
            <div className='flex'>
                {
                    numberPhone && numberPhone.map((number, index) => (
                        <p key={index} className='text-3xl bg-transparent flex '>{number}</p>
                    ))
                }
            </div>
            <i onClick={() => setNumberPhone((pre) => {
                return pre.slice(0, pre.length - 1)
            })} className="fa-solid fa-delete-left text-white text-3xl ml-3 mb-1 cursor-pointer"></i>
        </div>
    );
}

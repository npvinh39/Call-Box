import React from 'react';

export function KeyboardNumber({ data, setNumberPhone }) {

    return (
        <div className="grid grid-cols-3 gap-4 text-white text-4xl max-w-lg w-96">
            {
                data.map((number) => (
                    <div
                        key={number}
                        className="cursor-pointer py-6"
                        onClick={() => setNumberPhone((pre) => {
                            if (pre)
                                return [...pre, number]
                        })}
                    >{number}</div>)
                )
            }
        </div>

    );
}



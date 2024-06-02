import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Loader() {

    return (
        <>
            <div className="min-w-[320px] max-w-[450px] overflow-hidden mx-auto bs-white h-[100dvh]">
                <div className="h-[100vh] w-100 flex !bg-[#fff] items-center justify-center">
                    <div className="">
                        {/* <img className='w-[250px]' src="../../public/IMG/bull.png" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

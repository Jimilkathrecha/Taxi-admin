import React from 'react'

export default function Header() {
    return (
        <>
           
                <div className="w-100 h-[50px] text-center shadow-md scroll-d-none flex items-center justify-end relative overflow-hidden border-b-2 border-l-2 rounded-bl-lg border-yellow">

                    <div className="absolute bottom-0 right-0 rotate-[50deg] pointer origin-bottom-left min-w-[100px] max-w-[100px] min-h-[300px] max-h-[300px] flex items-center justify-center bs-yellow"></div>

                    <div className="pointer relative z-50 px-4">
                        <i className="fa-regular fa-user text-[17px] tx-white"></i>
                    </div>

                </div> 
        </>
    )
}





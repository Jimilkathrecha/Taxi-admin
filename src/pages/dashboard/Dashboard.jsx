import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn } from '@nextui-org/react';
import React, { useState } from 'react'

export default function Dashboard() {

    const [moreDetailedCapsuleCollaps, setMoreDetailedCapsuleCollaps] = useState(false);
    const [extaDetailsModal, setExtaDetailsModal] = useState(false);

    const togglemoreDetailedCapsuleCollaps = () => {
        setMoreDetailedCapsuleCollaps(prevCheck => !prevCheck);
    }

    const HandleMoreDetailedModal = (e) => {
        setExtaDetailsModal(true);
    }

    const dummyRidesData = [
        { id: "1", },
        { id: "2", },
        { id: "3", },
    ]


    return (
        <>
            <div className="w-100">

                <div className="bg-[#f6f7f9] fixed h-[100vh] w-100 top-0 start-0"></div>
                <div className="w-[75%] mx-auto flex gap-4 items-start  ">
                    <div className="w-fit flex flex-col items-center gap-3">
                        <div className="w-100 flex gap-3 justify-start">
                            <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">

                                <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Total Rides</p>
                                <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>

                                <div className="h-[clamp(66px,66px,66px)] w-[clamp(66px,66px,66px)] blue-gradi flex items-center justify-center absolute top-50 end-[-45px] translate-middle rounded-full">
                                    <i class="fa-light fa-box-circle-check text-[#776bff] text-[23px]"></i>
                                </div>
                            </div>
                            <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">

                                <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Completed rides</p>
                                <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>

                                <div className="h-[clamp(66px,66px,66px)] w-[clamp(66px,66px,66px)] yellow-gradi flex items-center justify-center absolute top-50 end-[-45px] translate-middle rounded-full">
                                    <i class="fa-light fa-box-circle-check text-[#ffaf14] text-[23px]"></i>
                                </div>
                            </div>
                            <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">

                                <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Upcoming rides</p>
                                <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>

                                <div className="h-[clamp(66px,66px,66px)] w-[clamp(66px,66px,66px)] red-gradi flex items-center justify-center absolute top-50 end-[-45px] translate-middle rounded-full">
                                    <i class="fa-light fa-box-circle-check text-[#f83f6e] text-[23px]"></i>
                                </div>
                            </div>
                            <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">

                                <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Cancelled rides</p>
                                <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>

                                <div className="h-[clamp(66px,66px,66px)] w-[clamp(66px,66px,66px)] green-gradi flex items-center justify-center absolute top-50 end-[-45px] translate-middle rounded-full">
                                    <i class="fa-light fa-box-circle-check text-[#54ba61] text-[23px]"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 select-none">
                            <div className="w-100 flex flex-col gap-3 justify-start">
                                <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                    <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>{moreDetailedCapsuleCollaps ? "Total Rides" : "Upcoming rides"}</p>
                                    <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>{moreDetailedCapsuleCollaps ? "544" : "85"}</p>
                                    <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                        <img className='w-100 object-cover' src="../../IMG/sidebar/airplane-org.png" alt="" />
                                    </div>
                                </div>
                                {moreDetailedCapsuleCollaps &&
                                    <>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Completed rides</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/airplane-org.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>{!moreDetailedCapsuleCollaps ? "Total Rides" : "Upcoming rides"}</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>{!moreDetailedCapsuleCollaps ? "544" : "85"}</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/airplane-org.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Cancelled rides</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/airplane-org.png" alt="" />
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="w-100 flex flex-col gap-3 justify-start">
                                <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                    <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>{moreDetailedCapsuleCollaps ? "Total Rides" : "Upcoming rides"}</p>
                                    <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>{moreDetailedCapsuleCollaps ? "544" : "85"}</p>
                                    <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                        <img className='w-100 object-cover' src="../../IMG/sidebar/taxi-org.png" alt="" />
                                    </div>
                                </div>
                                {moreDetailedCapsuleCollaps &&
                                    <>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Completed rides</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/taxi-org.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>{!moreDetailedCapsuleCollaps ? "Total Rides" : "Upcoming rides"}</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>{!moreDetailedCapsuleCollaps ? "544" : "85"}</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/taxi-org.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Cancelled rides</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/taxi-org.png" alt="" />
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="w-100 flex flex-col gap-3 justify-start">
                                <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                    <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>{moreDetailedCapsuleCollaps ? "Total Rides" : "Upcoming rides"}</p>
                                    <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>{moreDetailedCapsuleCollaps ? "544" : "85"}</p>
                                    <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                        <img className='w-100 object-cover' src="../../IMG/sidebar/outstation-org.png" alt="" />
                                    </div>
                                </div>
                                {moreDetailedCapsuleCollaps &&
                                    <>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Completed rides</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/outstation-org.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>{!moreDetailedCapsuleCollaps ? "Total Rides" : "Upcoming rides"}</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>{!moreDetailedCapsuleCollaps ? "544" : "85"}</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/outstation-org.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Cancelled rides</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/outstation-org.png" alt="" />
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="w-100 flex flex-col gap-3 justify-start">
                                <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                    <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>{moreDetailedCapsuleCollaps ? "Total Rides" : "Upcoming rides"}</p>
                                    <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>{moreDetailedCapsuleCollaps ? "544" : "85"}</p>
                                    <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                        <img className='w-100 object-cover' src="../../IMG/sidebar/hourly-org.png" alt="" />
                                    </div>
                                    <div onClick={togglemoreDetailedCapsuleCollaps} className="absolute bottom-0 end-0 pointer">
                                        <i class="fa-solid fa-sort-down px-2 py-2 tx-org"></i>
                                    </div>
                                </div>
                                {moreDetailedCapsuleCollaps &&
                                    <>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Completed rides</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/hourly-org.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>{!moreDetailedCapsuleCollaps ? "Total Rides" : "Upcoming rides"}</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>{!moreDetailedCapsuleCollaps ? "544" : "85"}</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/hourly-org.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items- justify-center shadow-capsule bs-white rounded-[13px] px-4 w-[clamp(210px,210px,210px)] h-[clamp(94px,94px,94px)] duration-300 ease-in-out relative overflow-hidden">
                                            <p className='text-[13px] tracking-wide font-Outfit font-semiibold opacity-80'>Cancelled rides</p>
                                            <p className='text-[25px] py- leading-[25px]  font-Outfit tx- font-semibold '>476</p>
                                            <div className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] -gradi flex items-center justify-center absolute top-50 end-[-10px] translate-middle rounded-full">
                                                <img className='w-100 object-cover' src="../../IMG/sidebar/hourly-org.png" alt="" />
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-100 h-[calc(100vh-170px)] col bs-white rounded-[15px] shadow-capsule relative z-20">
                        <div className="col w-100 flex flex-col col h-100 ">
                            <div className="w-[70%] text-center mx-auto px-5 rounded-[0%0%10%10%/0%0%100%100%] bs-org">
                                <p className='text-[18px] tracking-wide font-Outfit font-semibold tx-white opacity-90'>Rides</p>
                            </div>
                            {/* <div className="px-4">
                                <p className='text-[22px] tracking-wide font-Outfit font-semiibold opacity-80'>Rides</p>
                            </div> */}
                            <div className="flex flex-col gap-3 overflow-y-scroll scroll-d-none py-3 px-4 h-100">
                                {dummyRidesData.map((item) => (
                                    <div key={item.id} className="w-[100%] mx- bs-white shadow-1 py-3 px-2.5 rounded-2xl ">
                                        <div className="flex items-start w-100 justify-between px-2">
                                            <div className="">
                                                <p className='text-[15px] font-Outfit font-bold tracking-wider'>Aiport to Destination</p>
                                                <p className=' opacity-90 text-[12px] font-semibold font-Poppins tx-org'>#TRPAAOOI</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="bg-[#fef5f0] px-3 flex items-center justify-center gap-2 h-[clamp(30px,30px,30px)] py-2 tx-org rounded-lg">
                                                    <i class="fa-sharp fa-solid fa-circle text-[6px]"></i>
                                                    <p className=' text-[12px] font-semibold font-Poppins'> Not Assigned</p>
                                                </div>

                                                    <div className={`${extaDetailsModal === item.id ? "" : "hidden"}  w-[100vw] h-[100vh] fixed z-50 start-0 top-0 bg-dark opacity-[0.6]`} onClick={() => setExtaDetailsModal("")} ></div>
                                                <div onClick={() => setExtaDetailsModal(item.id)} className="w-[clamp(30px,30px,30px)] h-[clamp(30px,30px,30px)] bg-[#fef5f0] flex items-center justify-center relative rounded-lg">
                                                    <i class="fa-solid fa-eye text-[12px] tx-org"></i>
                                                    <div className={`${extaDetailsModal === item.id ? "" : "hidden"} bs-white absolute z-[100] top-[40px] right-0 bs-white p-3 shadow-lg rounded-xl border-1 border-org w-[clamp(450px,450px,450px)]`}>
                                                        <div className="col flex justify-between border-b-2 border-dashed border-org pb-3">
                                                            <div className="">
                                                                <p className='text-[17px] font-Outfit font-bold tracking-wider'>Aiport to Destination</p>
                                                            </div>
                                                            <div className="">
                                                                <p className='opacity-90 text-[14px] font-semibold font-Poppins tx-org'>#TRPAAOOI</p>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className={`col max-w-[100%] mx-auto min-h-[65px] max-h-[65px] relative flex items-center mt-3`}>
                                                                <div className="min-w-[3px] max-w-[3px] border-l-3 border-grey border-dashed col min-h-[40%] max-h-[40%] absolute top-50 start-[15px] translate-middle"></div>
                                                                <div className="flex flex-col w-100 min-h-[65px] max-h-[65px] justify-between">
                                                                    <div className="w-100 rounded-lg max-h-fit flex items-center gap-2" >
                                                                        <div className="w-[clamp(30px,30px,30px)] flex items-center justify-center relative z-20">
                                                                            <img className='w-[clamp(15px,15px,15px)]' src="../../../public/IMG/dot.png" alt="" />
                                                                        </div>
                                                                        <p className='text-[15px] font-Outfit opacity-85'>Antonietta Heights, Paxton - 57353</p>
                                                                    </div>
                                                                    <div className="w-100 rounded-lg max-h-fit flex items-center gap-2" >
                                                                        <div className="w-[clamp(30px,30px,30px)] flex items-center justify-center relative z-20 pt-2">
                                                                            <img className='w-[clamp(23px,23px,23px)]' src="../../../public/IMG/location.png" alt="" />
                                                                        </div>
                                                                        <p className='col pe-3 text-[15px] font-Outfit opacity-85 border-t-2 pt-2'>Gavin Lake, 08789 Bennett Lake</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col border-t-2 border-dashed border-org mt-3 pt-3.5 px-2">
                                                            <div className="w-100 flex items-end justify-between">
                                                                <div className="">
                                                                    <p className='text-[14px] font-Poppins font-semibold opacity-70 tracking-wider'>₹9 Per Km</p>
                                                                    <p className='text-[17px] font-Outfit font-bold tracking-wider'>Sedan - Etios</p>
                                                                    <p className='text-[14px] font-Outfit font- opacity-70 tracking-wider'>11/10/2023 - 09:10 AM</p>
                                                                </div>
                                                                <div className="pb-1 text-right">
                                                                    <p className='tx-org opacity-90 text-[34px] font-bold font-Poppins'>₹ 920</p>
                                                                    <p className='tx- mt-1.5 opacity-80 text-[15px] font-bold font-Poppins'>Total Range - 40km</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <Dropdown showArrow
                                                    classNames={{
                                                        base: "before:bg-[#ff8000] bg-[#ff8000] rounded-lg", // change arrow background
                                                        content: "py-1 px-1 border border-org bs-org  rounded-lg overflow-hidden",
                                                    }} >
                                                    <DropdownTrigger>
                                                        <div className="w-[clamp(30px,30px,30px)] h-[clamp(30px,30px,30px)] bg-[#fef5f0] flex items-center justify-center rounded-lg">
                                                            <i class="fa-solid fa-eye text-[12px] tx-org"></i>
                                                        </div>
                                                    </DropdownTrigger>
                                                    <DropdownMenu className='!p-0 !border-0 !outline-none !shadow-lg !rounded-none' variant="faded" aria-label="Dropdown menu with icons">
                                                        <DropdownItem className='!p-0 !border-0 !outline-none !shadow-none !rounded-none' key="new">
                                                            <div className="bs-white p-3 rounded-lg w-[clamp(450px,450px,450px)]">
                                                                <div className="col flex justify-between border-b-2 border-dashed border-org pb-3">
                                                                    <div className="">
                                                                        <p className='text-[17px] font-Outfit font-bold tracking-wider'>Aiport to Destination</p>
                                                                    </div>
                                                                    <div className="">
                                                                        <p className='opacity-90 text-[14px] font-semibold font-Poppins tx-org'>#TRPAAOOI</p>
                                                                    </div>
                                                                </div>
                                                                <div className="">
                                                                    <div className={`col max-w-[100%] mx-auto min-h-[65px] max-h-[65px] relative flex items-center mt-3`}>
                                                                        <div className="min-w-[3px] max-w-[3px] border-l-3 border-grey border-dashed col min-h-[40%] max-h-[40%] absolute top-50 start-[15px] translate-middle"></div>
                                                                        <div className="flex flex-col w-100 min-h-[65px] max-h-[65px] justify-between">
                                                                            <div className="w-100 rounded-lg max-h-fit flex items-center gap-2" >
                                                                                <div className="w-[clamp(30px,30px,30px)] flex items-center justify-center relative z-20">
                                                                                    <img className='w-[clamp(15px,15px,15px)]' src="../../../public/IMG/dot.png" alt="" />
                                                                                </div>
                                                                                <p className='text-[15px] font-Outfit opacity-85'>Antonietta Heights, Paxton - 57353</p>
                                                                            </div>
                                                                            <div className="w-100 rounded-lg max-h-fit flex items-center gap-2" >
                                                                                <div className="w-[clamp(30px,30px,30px)] flex items-center justify-center relative z-20 pt-2">
                                                                                    <img className='w-[clamp(23px,23px,23px)]' src="../../../public/IMG/location.png" alt="" />
                                                                                </div>
                                                                                <p className='col pe-3 text-[15px] font-Outfit opacity-85 border-t-2 pt-2'>Gavin Lake, 08789 Bennett Lake</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col border-t-2 border-dashed border-org mt-3 pt-3.5 px-2">
                                                                    <div className="w-100 flex items-end justify-between">
                                                                        <div className="">
                                                                            <p className='text-[14px] font-Poppins font-semibold opacity-70 tracking-wider'>₹9 Per Km</p>
                                                                            <p className='text-[17px] font-Outfit font-bold tracking-wider'>Sedan - Etios</p>
                                                                            <p className='text-[14px] font-Outfit font- opacity-70 tracking-wider'>11/10/2023 - 09:10 AM</p>
                                                                        </div>
                                                                        <div className="pb-1 text-right">
                                                                            <p className='tx-org opacity-90 text-[34px] font-bold font-Poppins'>₹ 920</p>
                                                                            <p className='tx- mt-1.5 opacity-80 text-[15px] font-bold font-Poppins'>Total Range - 40km</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown> */}
                                            </div>
                                        </div>
                                        <div className="flex items-end">
                                            <div className={`col max-w-[70%] mx-auto min-h-[65px] max-h-[65px] relative flex items-center mt-3`}>
                                                <div className="min-w-[3px] max-w-[3px] border-l-3 border-grey border-dashed col min-h-[40%] max-h-[40%] absolute top-50 start-[15px] translate-middle"></div>
                                                <div className="flex flex-col w-100 min-h-[65px] max-h-[65px] justify-between">
                                                    <div className="w-100 rounded-lg max-h-fit flex items-center gap-2" >
                                                        <div className="w-[clamp(30px,30px,30px)] flex items-center justify-center relative z-20">
                                                            <img className='w-[clamp(15px,15px,15px)]' src="../../../public/IMG/dot.png" alt="" />
                                                        </div>
                                                        <p className='text-[15px] font-Outfit'>Antonietta Heights, Paxton - 57353</p>
                                                    </div>
                                                    <div className="w-100 rounded-lg max-h-fit flex items-center gap-2" >
                                                        <div className="w-[clamp(30px,30px,30px)] flex items-center justify-center relative z-20 pt-2">
                                                            <img className='w-[clamp(23px,23px,23px)]' src="../../../public/IMG/location.png" alt="" />
                                                        </div>
                                                        <p className='pe-3 text-[15px] font-Outfit border-t-2 pt-2'>Gavin Lake, 08789 Bennett Lake</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-fit text-right">
                                                <p className=' opacity-80 text-[18px] font-bold font-Poppins'>₹ 920</p>
                                                <p className='text-[16px] font-Outfit font-bold tracking-wider'>Sedan - Etios</p>
                                                <p className='text-[14px] font-Outfit font- tracking-wider'>11/10/2023 - 09:10 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

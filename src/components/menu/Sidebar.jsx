import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ menuOverLap, setmenuOverLap, setAddPakagesModal, currentLocation }) {

    const [activeTab, setActiveTab] = useState("")

    const handleaddPakagesModal = () => {
        setAddPakagesModal(true)
    }

    const datalist = [
        { w: "w-[65px] mt-[5px]", click: () => setmenuOverLap(true), redirection: "/dashboard", ico: "../../IMG/sidebar/dashboard-org.png", icoActive: "../../IMG/sidebar/dashboard-white.png", name: "DASHBOARD" },
        { w: "w-[70px]", click: () => setmenuOverLap(true), redirection: "/airport", ico: "../../IMG/sidebar/airplane-org.png", icoActive: "../../IMG/sidebar/airplane-white.png", name: "Airports " },
        { w: "w-[70px]", click: () => setmenuOverLap(true), redirection: "/local-packages", ico: "../../IMG/sidebar/taxi-org.png", icoActive: "../../IMG/sidebar/taxi-white.png", name: "Local Packages" }, 
        { w: "w-[80px]", click: () => setmenuOverLap(true), redirection: "/outStation", ico: "../../IMG/sidebar/outstation-org.png", icoActive: "../../IMG/sidebar/outstation-white.png", name: "Outstation" },
        { w: "w-[70px]", click: () => setmenuOverLap(true), redirection: "/hourly-packages", ico: "../../IMG/sidebar/hourly-org.png", icoActive: "../../IMG/sidebar/hourly-white.png", name: "Hourly Rental" },
        { w: "w-[65px]", click: () => setmenuOverLap(true), redirection: "/trip-packages", ico: "../../IMG/sidebar/trip-org.png", icoActive: "../../IMG/sidebar/trip-white.png", name: "Trip Packages" },
        { w: "w-[75px]", click: () => setmenuOverLap(true), redirection: "/location", ico: "../../IMG/sidebar/location-org.png", icoActive: "../../IMG/sidebar/location-white.png", name: "Location Master" },
        { w: "w-[65px]", click: () => setmenuOverLap(true), redirection: "/vehicle", ico: "../../IMG/sidebar/car-setting-org.png", icoActive: "../../IMG/sidebar/car-setting-white.png", name: "Vehicle Master" },
        { w: "w-[60px]", click: () => setmenuOverLap(true), redirection: "/booking", ico: "../../IMG/sidebar/booking-org.png", icoActive: "../../IMG/sidebar/booking-white.png", name: "Bookings" },
        { w: "w-[60px]", click: () => setmenuOverLap(true), redirection: "/user", ico: "../../IMG/sidebar/profile-org.png", icoActive: "../../IMG/sidebar/profile-white.png", name: "User Master" },
        { w: "w-[65px]", click: () => setmenuOverLap(true), redirection: "/user-role", ico: "../../IMG/sidebar/permission-org.png", icoActive: "../../IMG/sidebar/permission-white.png", name: "User Role" },
        { w: "w-[60px]", click: () => setmenuOverLap(true), redirection: "/setting", ico: "../../IMG/sidebar/setting-org.png", icoActive: "../../IMG/sidebar/setting-white.png", name: "Settings" },
    ]


    return (
        <>
            <div className={`w-100  ${menuOverLap ? "min-h-[80px] max-h-[80px] " : "min-h-[150px] max-h-[150px]"} col border-b-2 border-blue rounded-b-3xl relative z-10 flex items-center justify-between shadow-sm rounded-r- `}>
                <div className={`h-fit w-[75%] flex justify-between gap-2 ${menuOverLap ? " absolute top-100 start-50 translate-middle" : "mx-auto mt-[-15px]"}`}>
                    <div className="w-100 flex gap-[30px] justify-between mx-auto">
                        {datalist.map((item) => (
                            <Link to={item.redirection}>
                                <div onClick={item.click} onMouseEnter={() => setActiveTab(item.name)} onMouseLeave={() => setActiveTab("")} className={`shadow-md ${activeTab === item.name || currentLocation === item.redirection ? "bs-org" : "bs-white"}  ${menuOverLap ? "slide-bottom" : "scale-up-top"}  rounded-lg pointer flex flex-col px-1 items-center justify-end w-[clamp(90px,90px,90px)] h-[clamp(90px,90px,90px)]`}>
                                    <div className={`px-2 flex items-center justify-center ${item.w} h-[clamp(80px,80px,80px)]`}>
                                        {activeTab === item.name || currentLocation === item.redirection ?
                                            <img className={`${item.w}  object-`} src={item.icoActive} alt="" />
                                            :
                                            <img className={`${item.w}  object-`} src={item.ico} alt="" />
                                        }
                                    </div>
                                    <p className={`px-1 w-100 text-center text-[10px] font- font-Outfit border-t-1 py-0.5   ${activeTab === item.name || currentLocation === item.redirection ? "tx-white border-white" : "tx-org border-org"} `}>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* <div className="flex gap-5">
                        {datalist.slice(3, 4).map((item) => (
                            <Link to={item.redirection}>
                                <div onClick={item.click} onMouseEnter={() => setActiveTab(item.name)} onMouseLeave={() => setActiveTab("")} className={`shadow-md ${activeTab === item.name ? "bs-org" : "bs-white"}  ${menuOverLap ? "slide-bottom" : "scale-up-top"}  rounded-lg pointer flex flex-col px-1 items-center justify-end w-[clamp(85px,85px,85px)] h-[clamp(90px,90px,90px)]`}>
                                    <div className={`px-2 flex items-center justify-center ${item.w} h-[clamp(80px,80px,80px)]`}>
                                        {activeTab === item.name ?
                                            <img className={`${item.w}  object-`} src={item.icoActive} alt="" />
                                            :
                                            <img className={`${item.w}  object-`} src={item.ico} alt="" />
                                        }

                                    </div>
                                    <p className={`px-1 w-100 text-center text-[10px] font-semibold font-Outfit border-t-1 py-0.5   ${activeTab === item.name ? "tx-white border-white" : "tx-org border-org"} `}>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-5">
                        {datalist.slice(4, 7).map((item) => (
                            <Link to={item.redirection}>
                                <div onClick={item.click} onMouseEnter={() => setActiveTab(item.name)} onMouseLeave={() => setActiveTab("")} className={`shadow-md ${activeTab === item.name ? "bs-org" : "bs-white"}  ${menuOverLap ? "slide-bottom" : "scale-up-top"}  rounded-lg pointer flex flex-col px-1 items-center justify-end w-[clamp(85px,85px,85px)] h-[clamp(90px,90px,90px)]`}>
                                    <div className={`px-2 flex items-center justify-center ${item.w} h-[clamp(80px,80px,80px)]`}>
                                        {activeTab === item.name ?
                                            <img className={`${item.w}  object-`} src={item.icoActive} alt="" />
                                            :
                                            <img className={`${item.w}  object-`} src={item.ico} alt="" />
                                        }

                                    </div>
                                    <p className={`px-1 w-100 text-center text-[10px] font-semibold font-Outfit border-t-1 py-0.5   ${activeTab === item.name ? "tx-white border-white" : "tx-org border-org"} `}>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div> */}
                </div>
                <div className={`h-fit w-[60%] flex justify-between gap-2 ${menuOverLap ? "d-none" : " absolute top-100 start-50 translate-middle"}`}>
                    <div className={` ${menuOverLap ? "" : "slide-left"}  flex items-center bs-white px-3 py-1 rounded-md border-2 border-blue gap-2 tx-org`}>
                        <i className="fa-solid fa-plus"></i>
                        <p className='text-[14px] font-bold font-Outfit'>Local city rates</p>
                    </div>
                    <div className={` ${menuOverLap ? "" : "slide-right"}  flex items-center bs-white px-3 py-1 rounded-md border-2 border-blue gap-2 tx-org`} onClick={handleaddPakagesModal} >
                        <i className="fa-solid fa-plus"></i>
                        <p className='text-[14px] font-bold font-Outfit'>Local packages</p>
                    </div>
                </div>
            </div>
        </>
    )
}

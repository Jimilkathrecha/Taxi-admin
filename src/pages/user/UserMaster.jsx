import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import React from 'react'

export default function UserMaster({ handleDeleteModal, closeDeleteModal }) {


    const airportSelector = [
        { label: "HSR - Rajkot Hirasar International Airport", value: "1", },
        { label: "AMD - Sardar Vallabhbhai Patel International Airport", value: "2", },
        { label: "STV - Surat International Airport", value: "3", },
        { label: "BOM - Chhatrapati Shivaji International Airport", value: "4", },
        { label: "MAA - Chennai International Airport", value: "5", },
        { label: "PNQ - Pune International Airport", value: "6", },
        { label: "BLR - Kempegowda International Airport Bengaluru", value: "7", },
        { label: "IDR - Devi Ahilyabai Holkar Airport Indore", value: "8", },
        { label: "DEL - Indira Gandhi International Airport", value: "9", },
        { label: "DED - Jolly Grant Airport Dehradun", value: "10", },
        { label: "UDR - Maharana Pratap Airport Udaipur", value: "11", },
    ];

    const getAllPackages = [
        { id: 1, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 5, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 6, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 7, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 8, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 9, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, username: "User name", number: "+91 99252 67849", Email: "user@gmail.com", lastlogindetails: "11/10/2023 - 09:10 AM", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
    ]



    return (
        <>
            <div className="w-[75%] h-100 mx-auto flex flex-col gap-3 h-100 overflow-hidden">
                <div className="w-[100%] mx-auto flex gap-3 items-center relative z-10">

                    <div className="w-fit tx-white bs-blue border-2 border-blue rounded-md pointer px-5 py-1 flex gap-2 items-center">
                        <p className='text-[16px] font-Outfit font-semibold'>Users</p>
                    </div>

                    <div className="col flex gap-2 border-2 border-blue rounded-md py- px-3 relative bs-white">
                        <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                        <Autocomplete
                            label=""
                            defaultItems={airportSelector}
                            // defaultItems={getAllAirPort || []}
                            placeholder="Search - Airport or short code"
                            className="col !font-bold !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>

                    <div className="w-fit tx- border-2 border-blue rounded-md px-3 min-h-[100%] flex gap-2 items-center bs-white">
                        <i className="fa-regular fa-arrow-up-from-bracket text-[18px]"></i>
                    </div>
                    <div className="w-fit border-2 border-blue rounded-md px-3 min-h-[100%] flex gap-2 items-center bs-white">
                        <i className="fa-regular fa-down-to-bracket tx-mix-org text-[18px]"></i>
                    </div>
                </div>
                <div className="w-[100%] h-[calc(100vh-260px)] mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                    <div className=' box-border w-100'>
                        <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[4%]'>
                                <input type="checkbox" id="check-all" />
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[6%]'>
                                <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.</p>
                            </div>
                            <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 min-w-[16%]'>
                                <p className='text-[15px] font-Outfit tx-white'>User</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[15%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Mobile number</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[17%]'>
                                <p className='text-[15px] font-Outfit tx-white'>E-mail</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[13%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Last login</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[16%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Data logs</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[6%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Status</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-black px-3 min-w-[7%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Actions</p>
                            </div>
                        </div>
                        <div>
                            {getAllPackages.map((item) => (
                                <div className='flex justify-between'>
                                    <div className='flex items-center justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[4%]'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex items-center justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[6%]'>
                                        <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                    </div>
                                    <div className='flex items-center justify-strat text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[16%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.username}</p>
                                    </div>
                                    <div className='flex items-center justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[15%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.number}</p>
                                    </div>
                                    <div className='flex items-center justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[17%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.Email}</p>
                                    </div>
                                    <div className='flex items-center justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[13%]'>
                                        <p className='text-[14px] font-medium font-Poppins tx-'>{item.lastlogindetails}</p>
                                    </div>
                                    <div className='fle items-center justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[16%]'>
                                        <div className="flex justify-center mx-auto items-center">
                                            <p className='text-[13px] font-Poppins font-bold'>Ad.</p>
                                            <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsAd || 0}</p>
                                        </div>
                                        <div className="flex justify-center mx-auto items-center">
                                            <p className='text-[13px] font-Poppins font-bold'>Up.</p>
                                            <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsUp || 0}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[6%]'>
                                        <div class="radio-btn">
                                            <input type="checkbox" class="checkbox" id={`checkbox${item.id}`} />
                                            <label class="switch" for={`checkbox${item.id}`}>
                                                <span class="custom-radio"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-b-1 border-black px-3 min-w-[7%]'>
                                        <i className="fa-solid fa-pen-to-square pointer"></i>
                                        <i onClick={handleDeleteModal} className="fa-solid fa-trash tx-red pointer"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

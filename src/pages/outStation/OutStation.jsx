import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React, { useEffect } from 'react'
import TypingEffect from '../../components/TypingEffect';

export default function OutStation({ handleDeleteModal, closeDeleteModal }) {

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
        { id: "1", statename: "Gujarat" },
        { id: "2", statename: "Kerala" },
        { id: "3", statename: "Maharastra" },
        { id: "4", statename: "Tamilnadu" },
        { id: "5", statename: "Uttar Pradesh" },
        { id: "6", statename: "Karnataka" },
        { id: "7", statename: "Madhya Pradesh" },
        { id: "8", statename: "Delhi" },
        { id: "9", statename: "Utrakhand" },
        { id: "10", statename: "Rajsathan" }, 
    ]



    return (
        <>
            <div className="w-[75%] h-100 mx-auto flex flex-col gap-3 h-100 overflow-hidden">
                <div className="w-[100%] mx-auto flex gap-3 items-center">

                    <div className="w-fit tx- rounded-md pointer px-4 flex gap-2 items-center">
                        <p className='text-[25px] font-Outfit font-semibold'>Outstation</p>
                    </div>

                    <div className="col flex gap-2 border-2 border-blue rounded-md py- px-3 relative">
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

                    <div className="w-fit tx- border-2 border-blue rounded-md px-3 min-h-[100%] flex gap-2 items-center">
                        <i className="fa-regular fa-arrow-up-from-bracket text-[18px]"></i>
                    </div>
                    <div className="w-fit tx-mix-org border-2 border-blue rounded-md px-3 min-h-[100%] flex gap-2 items-center">
                        <i className="fa-regular fa-down-to-bracket text-[18px]"></i>
                    </div>
                </div>
                <div className="w-[100%] h-100 mx-auto overflow-y-scroll scroll-d-none mb-3 ">
                    <div className="w-[100%] h-fit flex flex-wrap justify-center gap-2.5 mx-auto overflow-x-hidden">
                        {getAllPackages.map((item) => (
                            <div className="border-3 border-dotted border-org rounded-lg min-w-[390px] max-w-[450px] h-fit" key={item}>
                                <div className="py-1 px-3 text-center border-b-2 border-org">
                                    <p className='text-[14px] font-bold font-Outfit'>{item.statename}</p>
                                </div>
                                <div className="px-3 pt-1 pb-3">
                                    <div className="flex gap-2 mt-3">
                                        <div className="col">
                                            <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                <input className='min-w-[100%] max-w-[50px] text-center' placeholder='9/km' type="number" />
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>Hatchback</p>
                                        </div>
                                        <div className="col">
                                            <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                <input className='min-w-[100%] max-w-[50px] text-center' placeholder='9.5/km' type="number" />
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>Sedan</p>
                                        </div>
                                        <div className="col">
                                            <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                <input className='min-w-[100%] max-w-[50px] text-center' placeholder='11/km' type="number" />
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>SUV</p>
                                        </div>
                                        <div className="col">
                                            <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                <input className='min-w-[100%] max-w-[50px] text-center' placeholder='13/km' type="number" />
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>Innova Crysta</p>
                                        </div>
                                        <div className="col">
                                            <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                <input className='min-w-[100%] max-w-[50px] text-center' placeholder='17/km' type="number" />
                                            </div>
                                            <p className='text-[11px] text-center font-semibold'>Tempo Tr.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[calc(100%+6px)] ms-[-3px] mb-[-3px] flex items-center justify-center rounded-lg overflow-hidden">
                                    <div className="col flex justify-center bs-green px-5 py-2.5 border-[3px] !border-r-0 border-dotted border-white pointer rounded-s-lg">
                                        <i class="fa-solid fa-check tx-white"></i>
                                    </div>
                                    <div onClick={handleDeleteModal} className="col flex justify-center bs-red px-5 py-2.5 border-[3px] border-dotted border-white pointer rounded-e-lg">
                                        <i className="fa-light fa-trash tx-white pointer"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>












        </>
    )
}

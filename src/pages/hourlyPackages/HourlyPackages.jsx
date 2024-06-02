import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React, { useState } from 'react'

export default function HourlyPackages({ handleDeleteModal, closeDeleteModal }) {

    const [activeList, setactiveList] = useState("")

    const datacontentLocalPackages = [
        { id: "1", citycode: "RAJ", cityname: "Rajkot", totalpackages: "6" },
        { id: "2", citycode: "JAM", cityname: "Jamnagar", totalpackages: "57" },
        { id: "3", citycode: "JUN", cityname: "Junagadh", totalpackages: "22" },
        { id: "4", citycode: "DWA", cityname: "Dwarka", totalpackages: "52" },
        { id: "5", citycode: "DU", cityname: "Diu", totalpackages: "2" },
        { id: "6", citycode: "AND", cityname: "Anand", totalpackages: "27" },
        { id: "7", citycode: "SUT", cityname: "Surat", totalpackages: "01" },
        { id: "8", citycode: "VDR", cityname: "Vadodara", totalpackages: "8" },
        { id: "9", citycode: "AHD", cityname: "Ahemdabad", totalpackages: "83" },
        { id: "10", citycode: "MOR", cityname: "Morbi", totalpackages: "5" },
        { id: "11", citycode: "SOM", cityname: "Somnath", totalpackages: "35" },
        { id: "12", citycode: "DAM", cityname: "Daman", totalpackages: "75" },
    ]

    const citySelector = [
        { label: "Rajkot", value: "1", },
        { label: "Jamnagar", value: "2", },
        { label: "Junagadh", value: "3", },
        { label: "Dwarka", value: "4", },
        { label: "Diu", value: "5", },
        { label: "Anand", value: "6", },
        { label: "Surat", value: "7", },
        { label: "Vadodara", value: "8", },
        { label: "Ahemdabad", value: "9", },
        { label: "Morbi", value: "10", },
    ];

    const packagesSelector = [
        { label: "City Tour 4 hr", value: "1", },
        { label: "City Tour 4 hr", value: "2", },
        { label: "City Tour 4 hr", value: "3", },
        { label: "City Tour 4 hr", value: "4", },
    ];

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
        { id: 1, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 2, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 3, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 4, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 5, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 6, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 7, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 8, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 9, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 10, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 11, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 12, name: "City Tour 4 hr", citycode: "RAJ", cityname: "Rajkot", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
    ]

    return (
        <>
            {activeList === "" &&
                <div className="w-[75%] h-100 mx-auto flex flex-col gap-3 h-100 overflow-hidden">
                    <div className="w-[100%] mx-auto flex gap-3 items-center">

                        <div onClick={() => setactiveList("")} className="w-fit tx-white bs-blue border-2 border-blue rounded-md px-4 py-1 flex gap-2 items-center">
                            <p className='text-[16px] font-Outfit font-semibold'>Hourly Rental</p>
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
                        <div className="w-[100%] h-fit flex flex-wrap justify-between gap-2.5 mx-auto overflow-x-hidden">
                            {datacontentLocalPackages.map((item) => (
                                <div key={item.id} className='border-3 border-dotted border-org rounded-lg min-w-[237px] max-w-[270px] h-fit'>
                                    <div className="py-1 px-3 text-center border-b-2 border-org">
                                        <p className='text-[14px] font-bold font-Outfit'>{item.citycode} - {item.cityname}</p>
                                    </div>
                                    <div className="flex gap-2 mt-2 px-2 pb-3">
                                        <p className='text-[14px] font-bold opacity-85 mx-auto'>Total no. of packages: {item.totalpackages}</p>
                                    </div>
                                    <div className="w-[calc(100%+6px)] ms-[-3px] mb-[-3px] flex items-center justify-center rounded-lg overflow-hidden">
                                        <div onClick={() => setactiveList("packages-section")} className="col flex justify-center bs-green px-5 py-2.5 border-[3px] !border-r-0 border-dotted border-white pointer rounded-s-lg">
                                            <i class="fa-solid fa-plus tx-white"></i>
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
            }

            {activeList === "packages-section" &&
                <div className="w-[75%] h-100 mx-auto flex flex-col gap-3 h-100 overflow-hidden">
                    <div className="w-[100%] mx-auto flex gap-3 items-center">


                        <div onClick={() => setactiveList("")} className="w-fit tx-white bs-blue border-2 border-blue rounded-md pointer px-5 py-1 flex gap-2 items-center">
                            <i class="fa-solid fa-arrow-left text-[14px]"></i>
                            <p className='text-[16px] font-Outfit font-semibold'>Back</p>
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
                    <div className="w-[100%] h-[calc(100vh-260px)] mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                        <div className=' box-border w-100'>
                            <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                    <input type="checkbox" id="check-all" />
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                    <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.</p>
                                </div>
                                <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[15%]'>
                                    <p className='text-[15px] font-Outfit tx-white'>City Name</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[15%]'>
                                    <p className='text-[15px] font-Outfit tx-white'>Local Package Name</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                    <p className='text-[15px] font-Outfit tx-white'>Hatchback</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                    <p className='text-[15px] font-Outfit tx-white'>Sedan</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                    <p className='text-[15px] font-Outfit tx-white'>SUV</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                    <p className='text-[15px] font-Outfit tx-white'>Innova</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                    <p className='text-[15px] font-Outfit tx-white'>Tempo</p>
                                </div>
                                <div className='flex justify-center text-center py-2 border-black px-3 w-[10%]'>
                                    <p className='text-[15px] font-Outfit tx-white'>Actions</p>
                                </div>
                            </div>
                            <div>
                                <form className='flex justify-between bs-org'>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[4%]'>
                                        {/* <input type="checkbox" /> */}
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[6%]'>
                                        <p className='w-fit text-[15px] font-bold font-Poppins tx-white'>11</p>
                                    </div>
                                    <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[15%]'>
                                        <div className="col flex gap-2 bg-[#fff] rounded-md py- relative">
                                            <Autocomplete
                                                label=""
                                                defaultItems={citySelector}
                                                placeholder="Select City"
                                                className="col !font-bold !text-[14px] autocompleate-custome"
                                            >
                                                {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                            </Autocomplete>
                                        </div>
                                    </div>
                                    <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[15%]'>
                                        <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                        <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                        <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                            name="suv"
                                        />
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                        <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                            name="sedan"
                                        />
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                        <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                            name="innova"
                                        />
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                        <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                            name="tempo"
                                        />
                                    </div>
                                    <div className='flex gap-3 items-center justify-center bs-org hover:!bg-[#fff] tx-white hover:!text-[#2565DF] text-center text-[16px] py-1.5 border-y-1 border-black pointer px-3 w-[10%]' >
                                        <p className="text-[15px] font-semibold w-[90%] font-Outfit rounded-md">SUBMIT</p>
                                    </div>
                                </form>
                                {getAllPackages.map((item) => (
                                    <div className='flex justify-between'>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[4%]'>
                                            <input type="checkbox" />
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[6%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[15%]'>
                                            <p className='text-[15px] font-medium font-Poppins tx-'>{item.cityname}</p>
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[15%]'>
                                            <p className='text-[15px] font-medium font-Poppins tx-'>{item.name}</p>
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[10%]'>
                                            <p className='text-[15px] font-medium font-Poppins tx-'>{item.Hatchback}</p>
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[10%]'>
                                            <p className='text-[15px] font-medium font-Poppins tx-'>{item.Sedan}</p>
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[10%]'>
                                            <p className='text-[15px] font-medium font-Poppins tx-'>{item.SUV}</p>
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[10%]'>
                                            <p className='text-[15px] font-medium font-Poppins tx-'>{item.Innova}</p>
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[10%]'>
                                            <p className='text-[15px] font-medium font-Poppins tx-'>{item.Tempo}</p>
                                        </div>
                                        <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-b-1 border-black px-3 w-[10%]'>
                                            <i className="fa-solid fa-pen-to-square pointer"></i>
                                            <i onClick={handleDeleteModal} className="fa-solid fa-trash tx-red pointer"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

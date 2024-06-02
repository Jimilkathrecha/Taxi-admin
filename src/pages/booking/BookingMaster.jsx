import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React from 'react'

export default function BookingMaster({ handleDeleteModal, closeDeleteModal }) {


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

    const datacontentLocalPackages = [
        { id: "1", citycode: "#A00D1", cityname: "Rajkot", packages: "houly rented" },
        { id: "2", citycode: "#A00D2", cityname: "Jamnagar", packages: "trip package" },
        { id: "3", citycode: "#A00D3", cityname: "Junagadh", packages: "outstation" },
        { id: "4", citycode: "#A00D4", cityname: "Dwarka", packages: "local packages" },
        { id: "5", citycode: "#A00D5", cityname: "Diu", packages: "airpot" },
        { id: "6", citycode: "#A00D6", cityname: "Anand", packages: "houly rented" },
        { id: "7", citycode: "#A00D7", cityname: "Surat", packages: "trip package" },
        { id: "8", citycode: "#A00D8", cityname: "Vadodara", packages: "outstation" },
        { id: "9", citycode: "#A00D9", cityname: "Ahemdabad", packages: "local packages" },
        { id: "10", citycode: "#A00D10", cityname: "Morbi", packages: "airpot" },
        { id: "11", citycode: "#A00D11", cityname: "Somnath", packages: "houly rented" },
        { id: "12", citycode: "#A00D12", cityname: "Daman", packages: "trip package" },
    ]

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
            <div className="w-[75%] h-100 mx-auto flex flex-col gap-3 h-100 overflow-hidden">
                <div className="bg-[#f6f7f9] fixed h-[100vh] w-100 top-0 start-0 "></div>
                <div className="w-[100%] mx-auto flex gap-3 items-center relative z-10">

                    <div className="w-fit tx-white bs-blue border-2 border-blue rounded-md pointer px-5 py-1 flex gap-2 items-center">
                        <p className='text-[16px] font-Outfit font-semibold'>Bookings</p>
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
                <div className="w-[100%] h-100 mx-auto overflow-y-scroll scroll-d-none mb-3 ">
                    <div className="w-[100%] h-fit flex flex-wrap justify-between gap-2.5 mx-auto p-1 overflow-x-hidden">
                        {datacontentLocalPackages.map((item) => (
                            <div key={item.id} className=" min-w-[337px] max-w-[370px] h-[clamp(180px,180px,180px)] col bs-white rounded-[15px] shadow-md overflow-hidden relative z-20">
                                <div className="absolute top-50 start-0 translate-middle w-[clamp(7px,7px,7px)] rounded-full bg-[#e35200] h-[70%] "></div>
                                <div className="col w-100 flex flex-col px-4 py-3 col h-100 ">
                                    <div className="">
                                        <div className="flex items-start w-100 justify-between">
                                            <div className="">
                                                <p className='text-[15px] font-Outfit font-bold tracking-wider'>TRPAAOOI</p>
                                                <p className=' opacity-60 text-[12px] font-bold font-Poppins'>Sedan</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="bg-[#fef5f0] px-3 flex items-center justify-center gap-2 h-[clamp(30px,30px,30px)] py-2 text-[#e35200] rounded-lg">
                                                    <i class="fa-sharp fa-solid fa-circle text-[6px]"></i>
                                                    <p className=' text-[12px] font-semibold font-Poppins'> Not Assigned</p>
                                                </div>
                                                <div className="w-[clamp(30px,30px,30px)] h-[clamp(30px,30px,30px)] bg-[#fef5f0] flex items-center justify-center rounded-lg">
                                                    <i class="fa-solid fa-eye text-[12px] text-[#e35200]"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`w-[100%] mx-auto min-h-[65px] max-h-[65px] relative flex items-center mt-3`}>
                                            <div className="min-w-[3px] max-w-[3px] border-l-3 border-grey border-dashed col min-h-[40%] max-h-[40%] absolute top-50 start-[12px] translate-middle"></div>
                                            <div className="flex flex-col w-100 min-h-[65px] max-h-[65px] justify-between">
                                                <div className="w-100 rounded-lg max-h-fit flex items-center gap-2" >
                                                    <div className="w-[clamp(25px,25px,25px)] flex items-center justify-center relative z-20">
                                                        <img className='w-[clamp(18px,18px,18px)]' src="../../../public/IMG/dot.png" alt="" />
                                                    </div>
                                                    <p className='text-[15px] font-Outfit'>Antonietta Heights, Paxton 57353</p>
                                                </div>
                                                <div className="w-100 rounded-lg max-h-fit flex items-center gap-2" >
                                                    <div className="w-[clamp(25px,25px,25px)] flex items-center justify-center relative z-20 pt-2">
                                                        <img className='w-[clamp(30px,30px,30px)]' src="../../../public/IMG/location.png" alt="" />
                                                    </div>
                                                    <p className='col text-[15px] font-Outfit border-t-2 pt-2'>Gavin Lake, 08789 Bennett Lake</p>
                                                </div>
                                            </div>
                                        </div>
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































{/* <div className="w-[100%] h-100 mx-auto flex flex-col gap-3 h-100 overflow-hidden">
                <div className="w-[80%] mx-auto flex gap-3 items-center">

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
                <div className="w-[80%] h-[calc(100vh-260px)] mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                    <div className=' box-border w-100'>
                        <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[4%]'>
                                <input type="checkbox" id="check-all" />
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[6%]'>
                                <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.</p>
                            </div>
                            <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 min-w-[18%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Rider</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[15%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Booking Date</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[17%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Driver</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[10%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Vehical Type</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[10%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Status</p>
                            </div>
                            <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[10%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Fare</p>
                            </div> 
                            <div className='flex justify-center text-center py-2 border-black px-3 min-w-[10%]'>
                                <p className='text-[15px] font-Outfit tx-white'>Actions</p>
                            </div>
                        </div>
                        <div>
                            <form className='flex justify-between bs-org'>
                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[4%]'> 
                                </div>
                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[6%]'>
                                    <p className='w-fit text-[15px] font-bold font-Poppins tx-white'>11</p>
                                </div>
                                <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[18%]'>
                                    <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                        name="hatchBack" />
                                </div>
                                <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[15%]'>
                                    <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                        name="hatchBack" />
                                </div>
                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[17%]'>
                                    <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                        name="hatchBack" />
                                </div>
                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%]'>
                                    <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                        name="suv" />
                                </div>
                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%]'>
                                    <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                        name="sedan" />
                                </div>
                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%]'>
                                    <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                        name="innova" />
                                </div> 
                                <div className='flex gap-3 items-center justify-center bs-org hover:!bg-[#fff] tx-white hover:!text-[#2565DF] text-center text-[16px] py-1.5 border-t-1 border-black pointer px-3 min-w-[10%]' >
                                    <p className="text-[15px] font-semibold w-[90%] font-Outfit rounded-md">SUBMIT</p>
                                </div>
                            </form>
                            {getAllPackages.map((item) => (
                                <div className='flex justify-between'>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[4%]'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[6%]'>
                                        <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                    </div>
                                    <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[18%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.cityname}</p>
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[15%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.Hatchback}</p>
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[17%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.name}</p>
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.Sedan}</p>
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.SUV}</p>
                                    </div>
                                    <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%]'>
                                        <p className='text-[15px] font-medium font-Poppins tx-'>{item.Innova}</p>
                                    </div> 
                                    <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 min-w-[10%]'>
                                        <i className="fa-solid fa-pen-to-square pointer"></i>
                                        <i onClick={handleDeleteModal} className="fa-solid fa-trash tx-red pointer"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
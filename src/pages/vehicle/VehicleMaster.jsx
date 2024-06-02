import { Autocomplete, AutocompleteItem, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from 'react';

export default function VehicleMaster() {

    const [activeVehicleTab, setActiveVehicleTab] = useState("vehicle-category");
    const [selectedOption, setSelectedOption] = useState(null);

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

    const fuelTypeSelector = [
        { key: "CNG", label: "CNG", },
        { key: "LPG", label: "LPG", },
        { key: "Petrol", label: "Petrol", },
        { key: "Deasel", label: "Deasel", },
        { key: "Bio Gas", label: "Bio Gas", },
    ];

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const booleanSelector = [
        { label: "YES", value: "1", },
        { label: "NO", value: "2", },
    ];

    const vehicalCategorysSelector = [
        { label: "SUV", value: "1", },
        { label: "Sedan", value: "2", },
        { label: "Hatchback", value: "3", },
        { label: "Premium SUV", value: "4", },
        { label: "Tempo", value: "5", },
    ];

    const dataContentVehicleCategory = [
        { id: 1, categoryname: "SUV", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, categoryname: "Sedan", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, categoryname: "Hatchback", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, categoryname: "Premium SUV", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, categoryname: "Tempo Traveller", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
    ]

    const dataContentVehicle = [
        { id: 1, vehhiclename: "Lodge", categoryname: "SUV", seat: "6+1", fueltype: "CNG", ac: "AC", waterBottle: "No", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, vehhiclename: "Etios", categoryname: "Sedan", seat: "5+1", fueltype: "Petrol", ac: "Non/AC", waterBottle: "No", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, vehhiclename: "Tiago", categoryname: "Hatchback", seat: "6+1", fueltype: "Deasel", ac: "AC", waterBottle: "Yes", carrier: "No", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, vehhiclename: "Innova", categoryname: "Premium SUV", seat: "4+1", fueltype: "CNG", ac: "AC", waterBottle: "No", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 5, vehhiclename: "Lodge", categoryname: "SUV", seat: "5+1", fueltype: "CNG", ac: "Non/AC", waterBottle: "No", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 6, vehhiclename: "Swift Dezire", categoryname: "Sedan", seat: "4+1", fueltype: "Petrol", ac: "AC", waterBottle: "No", carrier: "No", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 7, vehhiclename: "Altroz", categoryname: "Tempo Traveller", seat: "15+1", fueltype: "Deasel", ac: "Non/AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 8, vehhiclename: "Innova", categoryname: "Hatchback", seat: "5+1", fueltype: "CNG", ac: "Non/AC", waterBottle: "Yes", carrier: "No", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
    ]


    return (
        <>
            <div className="w-[75%] mx-auto flex flex-col gap-3 h-100">
                <div className="flex gap-3 items-center">

                    <div onClick={() => { setActiveVehicleTab("vehicle-category") }} className={`${activeVehicleTab === "vehicle-category" ? "tx-white bs-blue  border-2 border-blue" : " border-2 border-org tx-org"}  w-[clamp(180px,180px,180px)] text-center rounded-md pointer px-4 py-1 flex gap-2 items-center`}>
                        <p className='text-[16px] text-center mx-auto font-Outfit font-semibold'>Vehicle Category</p>
                    </div>
                    <div onClick={() => { setActiveVehicleTab("vehicle") }} className={`${activeVehicleTab === "vehicle" ? "tx-white bs-blue  border-2 border-blue" : " border-2 border-org tx-org"}  w-[clamp(180px,180px,180px)] text-center rounded-md pointer px-4 py-1 flex gap-2 items-center`}>
                        <p className='text-[16px] text-center mx-auto font-Outfit font-semibold'>Vehicle Details</p>
                    </div>


                    <div className="col flex gap-2 border-2 border-blue rounded-md py- px-3 relative">
                        <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                        <Autocomplete
                            label=""
                            defaultItems={airportSelector}
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
                {activeVehicleTab === "vehicle-category" &&
                    <div className="w-100 h-100 mx-auto overflow-y-scroll scroll-d-none mb-3">
                        <div className="w-[100%] h-100 mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                        <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.No</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[40%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Category name</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Upload Image</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[30%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Date Logs</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 bord border-black px-3 w-[10%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Actions</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between bs-org'>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[4%]'>
                                            {/* <input type="checkbox" /> */}
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[6%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-white bs-org'>11</p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[40%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[20%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[30%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex gap-3 items-center justify-center bs-org hover:!bg-[#fff] tx-white hover:!text-[#2565DF] text-center text-[16px] py-1.5 border-y-1 border-black pointer px-3 w-[10%]' >
                                            <p className="text-[15px] font-semibold w-[90%] font-Outfit rounded-md">SUBMIT</p>
                                        </div>
                                    </div>
                                    {dataContentVehicleCategory.map((item) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black w-[4%]'>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black w-[6%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-3 border-b-1 border-black w-[40%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.categoryname}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black w-[20%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.uploadalt}</p>
                                            </div>
                                            <div className='flex gap-3 justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black w-[30%]'>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Ad.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsAd}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Up.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsUp}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-4 items-center justify-center text-center py-3 border-b-1 border-black px-3 w-[10%]'>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i className="fa-solid fa-trash tx-red pointer"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {activeVehicleTab === "vehicle" &&
                    <div className="w-100 h-[calc(100vh-260px)] mx-auto overflow-y-scroll scroll-d-none mb-3 absolute start-0 bottom-0">
                        <div className="w-[80%] h-100 mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[4%] max-w-[4%]'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[5%] max-w-[5%]'>
                                        <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.No</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[15%] max-w-[15%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Select Category</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 min-w-[16%] max-w-[16%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Vehicle Name</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Seat</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Fuel Type</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>AC/Non AC</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Water Bottel</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Carrier</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Upload Image</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Actions</p>
                                    </div>
                                </div>
                                <div className="w-100">
                                    <div className='w-100 flex justify-between bs-org'>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black overflow-hidden min-w-[4%] max-w-[4%]'>
                                            {/* <input type="checkbox" /> */}
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black overflow-hidden min-w-[5%] max-w-[5%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-white bs-org'>11</p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black overflow-hidden  min-w-[15%] max-w-[15%]'>
                                            <div className="col flex gap-2 bg-[#fff] rounded-md py- relative">
                                                <Autocomplete
                                                    label=""
                                                    defaultItems={vehicalCategorysSelector}
                                                    placeholder="Select Category"
                                                    className="col !font-bold !text-[14px] autocompleate-custome"
                                                >
                                                    {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                                </Autocomplete>
                                            </div>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black overflow-hidden  min-w-[16%] max-w-[16%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black overflow-hidden min-w-[8%] max-w-[8%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-2 border-r-1 py-1.5 border-y-1 border-black overflow-hidden min-w-[8%] max-w-[8%]'>
                                            <div className="col flex gap-2 bg-[#fff] rounded-md py- custom-select relative">
                                                <Autocomplete
                                                    label=""
                                                    placeholder="Select Fuel"
                                                    defaultItems={fuelTypeSelector}
                                                    className="col !font-bold !text-[14px] autocompleate-custome"
                                                >
                                                    {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                                </Autocomplete>
                                            </div>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black overflow-hidden min-w-[8%] max-w-[8%]'>
                                            <div className="col flex gap-2 bg-[#fff] rounded-md py- relative">
                                                <Autocomplete
                                                    label=""
                                                    defaultItems={booleanSelector}
                                                    placeholder=""
                                                    className="col !font-bold !text-[14px] autocompleate-custome"
                                                >
                                                    {(animal) => <AutocompleteItem key={animal.value} className=" autocompleate-custome">
                                                        {animal.label}
                                                    </AutocompleteItem>}
                                                </Autocomplete>
                                            </div>
                                        </div>
                                        <div className='flex justify-strat text-center px-2 border-r-1 py-1.5 border-y-1 border-black overflow-hidden min-w-[8%] max-w-[8%]'>
                                            <div className="col flex gap-2 bg-[#fff] rounded-md py- relative">
                                                <Autocomplete
                                                    label=""
                                                    defaultItems={booleanSelector}
                                                    placeholder="Select Bottel"
                                                    className="col !font-bold !text-[14px] autocompleate-custome"
                                                >
                                                    {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                                </Autocomplete>
                                            </div>
                                        </div>
                                        <div className='flex justify-strat text-center px-2 border-r-1 py-1.5 border-y-1 border-black overflow-hidden min-w-[8%] max-w-[8%]'>
                                            <div className="col flex gap-2 bg-[#fff] rounded-md py- relative">
                                                <Autocomplete
                                                    label=""
                                                    defaultItems={booleanSelector}
                                                    placeholder="Select carrier"
                                                    className="col !font-bold !text-[14px] autocompleate-custome"
                                                >
                                                    {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                                </Autocomplete>
                                            </div>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black overflow-hidden min-w-[10%] max-w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex gap-3 items-center justify-center bs-org hover:!bg-[#fff] tx-white hover:!text-[#2565DF] text-center text-[16px] py-1.5 border-y-1 border-black pointer px-3 w-[10%]' >
                                            <p className="text-[15px] font-semibold w-[90%] font-Outfit rounded-md">SUBMIT</p>
                                        </div>
                                    </div>
                                    {dataContentVehicle.map((item) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[4%] max-w-[4%]'>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[5%] max-w-[5%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[15%] max-w-[15%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.categoryname}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[16%] max-w-[16%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.vehhiclename}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.seat}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.fueltype}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.ac}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.waterBottle}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.carrier}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-3 border-b-1 border-black min-w-[10%] max-w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.uploadalt}</p>
                                            </div>
                                            <div className='flex gap-4 items-center justify-center text-center py-1.5 border-b-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i className="fa-solid fa-trash tx-red pointer"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

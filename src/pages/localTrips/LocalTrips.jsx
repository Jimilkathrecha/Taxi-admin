import { Autocomplete, AutocompleteItem, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import React, { useState } from 'react'

export default function LocalTrips({ setAddPakagesModal, addPakagesModal }) {

    const [itemView, setItemView] = useState("grid")

    const handleaddPakagesModal = () => {
        setAddPakagesModal(true)
    }
    const closeaddPakagesModal = () => {
        setAddPakagesModal(false)
    }

    const cityListing = [
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

    const datacontent = [
        { id: "1", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "2", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "3", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "4", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "5", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "6", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "7", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "8", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "9", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "10", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
        { id: "11", tripType: "One Way", fareDetails: [{ baseFare: "6200.00" }, { baseCoveredKM: "320.00" }, { coveredHours: "00:00" }, { nightCharge: "300.00" }, { driverCharge: "0.00" }, { extraHours: "0.00" }], pickDropVehicle: [{ pickupPoint: "Ahmedabad, Gujarat" }, { dropPoint: "Rakot Gujarat" }, { vehicleType: "SUV | Ertiga" }] },
    ]



    const datacontentLocalHourlyPackages = [
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
        { id: "1", location: "Ahmedabad", totalTime: "08:00 Hrs", TotalKms: "80 Kms" },
    ]



    return (
        <>
            <div className="w-[100%] h-100 mx-auto flex flex-col gap-3 h-100 overflow-hidden">

                {itemView === "grid" &&
                    <div className='w-100 flex flex-col '>
                        <div className="w-[90vw] h-fit mx-auto flex gap-3 items-center">
                            <div className="w-fit px-1 py-1 flex gap-2 items-center">
                                <p className='text-[25px] font-Outfit font-semibold'>One - Way</p>
                            </div>
                            <div className="col">
                                <div className="col max-w-[70%] flex gap-2 border-2 border-blue rounded-md py- px-3 relative">
                                    <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                                    <Autocomplete
                                        label=""
                                        defaultItems={cityListing}
                                        placeholder="Search - Airport or short code"
                                        className="col !font-bold !text-[14px] autocompleate-custome"
                                    >
                                        {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                    </Autocomplete>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center text-[20px]">
                                <div className="">
                                    <i onClick={() => setItemView("grid")} className={`fa-regular fa-grid-2 pointer ${itemView === "grid" ? "tx-org" : "tx-black"}`}></i>
                                </div>
                                <div className='col min-h-[25px] max-h-[25px] bs-black min-w-[2px] max-w-[2px]'></div>
                                <div className="">
                                    <i onClick={() => setItemView("list")} className={`fa-sharp fa-solid fa-list pointer ${itemView === "list" ? "tx-org" : "tx-black"}`}></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90vw] overflow-hidden mx-auto mt-2">
                            <div className="py-3 w-100 overflow-x-auto scroll-d-none">
                                <div className="w-[100wh] flex gap-5 pe-5">
                                    <div className="flex flex-col gap-2 min-w-[450px] max-w-[450px] drop-shadow-md box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                        <div className="w-fit h-fit bs-white rounded-md pointer absolute top-[2px] start-[calc(100%+2px)] translate-middle">
                                            <div className="checkbox-wrapper-46 bs-white">
                                                <input type="checkbox" id="cbx-46" className="inp-cbx bs-white" />
                                                <label for="cbx-46" className="cbx bs-white">
                                                    <span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg>
                                                    </span >
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                            </div>
                                            <div className="">
                                                <i className="fa-solid fa-right-long"></i>
                                            </div>
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-solid fa-map-pin tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                    <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                    <span>-</span>
                                                    <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                    <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                            <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                                <i className="fa-regular fa-pen-to-square tx-white pointer"></i>
                                            </div>
                                            <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                                <i className="fa-light fa-trash tx-white pointer"></i>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-2 min-w-[450px] max-w-[450px] drop-shadow-md box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                        <div className="w-fit h-fit bs-white rounded-md pointer absolute top-[2px] start-[calc(100%+2px)] translate-middle">
                                            <div className="checkbox-wrapper-46 bs-white">
                                                <input type="checkbox" id="cbx-47" className="inp-cbx bs-white" />
                                                <label for="cbx-47" className="cbx bs-white">
                                                    <span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg>
                                                    </span >
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                            </div>
                                            <div className="">
                                                <i className="fa-solid fa-right-long"></i>
                                            </div>
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-solid fa-map-pin tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                    <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                    <span>-</span>
                                                    <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                    <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                            <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                                <i className="fa-regular fa-pen-to-square tx-white pointer"></i>
                                            </div>
                                            <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                                <i className="fa-light fa-trash tx-white pointer"></i>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-2 min-w-[450px] max-w-[450px] drop-shadow-md box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                        <div className="w-fit h-fit bs-white rounded-md pointer absolute top-[2px] start-[calc(100%+2px)] translate-middle">
                                            <div className="checkbox-wrapper-46 bs-white">
                                                <input type="checkbox" id="cbx-48" className="inp-cbx bs-white" />
                                                <label for="cbx-48" className="cbx bs-white">
                                                    <span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg>
                                                    </span >
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                            </div>
                                            <div className="">
                                                <i className="fa-solid fa-right-long"></i>
                                            </div>
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-solid fa-map-pin tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                    <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                    <span>-</span>
                                                    <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                    <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                            <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                                <i className="fa-regular fa-pen-to-square tx-white pointer"></i>
                                            </div>
                                            <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                                <i className="fa-light fa-trash tx-white pointer"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[90vw] mx-auto overflow-hidden">
                            <div className="w-100 mx-auto px-1 flex gap-2 items-center">
                                <p className='text-[25px] font-Outfit font-semibold'>Round Trip</p>
                            </div>
                            <div className="py-3 w-100 overflow-x-auto scroll-d-none">
                                <div className="w-[100wh] flex gap-5">
                                    <div className="flex flex-col gap-2 min-w-[450px] max-w-[450px] drop-shadow-md box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                        <div className="w-fit h-fit bs-white rounded-md pointer absolute top-[2px] start-[calc(100%+2px)] translate-middle">
                                            <div className="checkbox-wrapper-46 bs-white">
                                                <input type="checkbox" id="cbx-49" className="inp-cbx bs-white" />
                                                <label for="cbx-49" className="cbx bs-white">
                                                    <span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg>
                                                    </span >
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                            </div>
                                            <div className="">
                                                <i className="fa-solid fa-right-long"></i>
                                            </div>
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-solid fa-map-pin tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                    <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                    <span>-</span>
                                                    <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                    <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                            <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                                <i className="fa-regular fa-pen-to-square tx-white pointer"></i>
                                            </div>
                                            <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                                <i className="fa-light fa-trash tx-white pointer"></i>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-2 min-w-[450px] max-w-[450px] drop-shadow-md box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                        <div className="w-fit h-fit bs-white rounded-md pointer absolute top-[2px] start-[calc(100%+2px)] translate-middle">
                                            <div className="checkbox-wrapper-46 bs-white">
                                                <input type="checkbox" id="cbx-50" className="inp-cbx bs-white" />
                                                <label for="cbx-50" className="cbx bs-white">
                                                    <span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg>
                                                    </span >
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                            </div>
                                            <div className="">
                                                <i className="fa-solid fa-right-long"></i>
                                            </div>
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-solid fa-map-pin tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                    <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                    <span>-</span>
                                                    <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                    <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                            <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                                <i className="fa-regular fa-pen-to-square tx-white pointer"></i>
                                            </div>
                                            <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                                <i className="fa-light fa-trash tx-white pointer"></i>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-2 min-w-[450px] max-w-[450px] drop-shadow-md box-border border-2 border-dotted border-org relative rounded-lg py-2.5 px-3">

                                        <div className="w-fit h-fit bs-white rounded-md pointer absolute top-[2px] start-[calc(100%+2px)] translate-middle">
                                            <div className="checkbox-wrapper-46 bs-white">
                                                <input type="checkbox" id="cbx-51" className="inp-cbx bs-white" />
                                                <label for="cbx-51" className="cbx bs-white">
                                                    <span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg>
                                                    </span >
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex items-end justify-between">
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Pickup point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Ahmedabad, Gujarat</p>
                                            </div>
                                            <div className="">
                                                <i className="fa-solid fa-right-long"></i>
                                            </div>
                                            <div className=" w-fit">
                                                <div className="w-fit flex items-center gap-2">
                                                    <i className="fa-solid fa-map-pin tx-org"></i>
                                                    <p className='text-[16px] font-Outfit font-semibold'>Drop point</p>
                                                </div>
                                                <p className='text-[16px] font-Outfit opacity-95'>Rajkot, Gujarat</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Fare :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>6200.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Base Covered KM : </p>
                                                    <p className='text-[14px] font-medium font-Outfit'>320.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Night Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'>300.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Driver Charge :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Covered Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 00:00</p>
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Extra Hours :</p>
                                                    <p className='text-[14px] font-medium font-Outfit'> 0.00</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-bold font-Outfit'>Vehicle type</p>
                                                    <span>-</span>
                                                    <p className='text-[14px] font-semibold font-Outfit'>SUV</p>
                                                    <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                                </div>
                                                <div className="flex gap-1.5 items-center">
                                                    <p className='text-[15px] font-light font-Outfit'>Ertiga</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 end-0 me-[-1.5px] mb-[-1.5px] flex items-center justify-center rounded-lg overflow-hidden">
                                            <div className="bs-green px-5 py-2 border-[1.8px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                                <i className="fa-regular fa-pen-to-square tx-white pointer"></i>
                                            </div>
                                            <div className="bs-red px-5 py-2 border-[1.8px] border-dotted border-white rounded-e-lg">
                                                <i className="fa-light fa-trash tx-white pointer"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {itemView === "list" &&
                    <>
                        <div className="w-[80%] h-fit mx-auto flex gap-3 items-center">

                            <div className="col">
                                <div className="col max-w-[70%] flex gap-2 border-2 border-blue rounded-md py- px-3 relative">
                                    <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                                    <Autocomplete
                                        label=""
                                        defaultItems={cityListing}
                                        placeholder="Search - Airport or short code"
                                        className="col !font-bold !text-[14px] autocompleate-custome"
                                    >
                                        {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                    </Autocomplete>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center text-[20px]">
                                <div className="">
                                    <i onClick={() => setItemView("grid")} className={`fa-regular fa-grid-2 pointer ${itemView === "grid" ? "tx-org" : "tx-black"}`}></i>
                                </div>
                                <div className='col min-h-[25px] max-h-[25px] bs-black min-w-[2px] max-w-[2px]'></div>
                                <div className="">
                                    <i onClick={() => setItemView("list")} className={`fa-sharp fa-solid fa-list pointer ${itemView === "list" ? "tx-org" : "tx-black"}`}></i>
                                </div>
                                <div className='col min-h-[25px] max-h-[25px] bs-black min-w-[2px] max-w-[2px]'></div>
                                <div className="">
                                    <i onClick={() => setItemView("box")} className={`fa-sharp fa-solid fa-list pointer ${itemView === "box" ? "tx-org" : "tx-black"}`}></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] h-100 mx-auto overflow-y-scroll scroll-d-none mb-3">
                            <div className="w-[80%] h-100 mx-auto rounded-[14px] border-1 custome-bar border-black overflow-x-hidden">
                                <div className=' box-border w-100'>
                                    <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                        <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                            <input type="checkbox" />
                                        </div>
                                        <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                            <p className='w-fit text-[15px] font-bold font-Outfit tx-white'>Sr.No</p>
                                        </div>
                                        <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[15%]'>
                                            <p className='text-[15px] font-bold font-Outfit tx-white'>Trip type</p>
                                        </div>
                                        <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[30%]'>
                                            <p className='text-[15px] font-bold font-Outfit tx-white'>Pickup - Drop & Vehicle</p>
                                        </div>
                                        <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                            <p className='text-[15px] font-bold font-Outfit tx-white'>Fare details</p>
                                        </div>
                                        <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                            <p className='text-[15px] font-bold font-Outfit tx-white'>Charges</p>
                                        </div>
                                        <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                            <p className='text-[15px] font-bold font-Outfit tx-white'>Actions</p>
                                        </div>
                                    </div>
                                    {datacontent.map((item) => (
                                        <div className='flex w-100'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[4%]'>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='flex justify-center text-center items-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[6%]'>
                                                <p className='w-fit text-[15px] font-medium font-Poppins tx-'>{item.id}</p>
                                            </div>
                                            <div className='flex justify-center text-center items-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[15%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.tripType}</p>
                                            </div>
                                            <div className='flex flex-col justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[30%]'>
                                                <div className="flex items-center gap-2">
                                                    <i className="fa-solid fa-map-pin tx-org"></i>
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.pickDropVehicle[0].pickupPoint}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <i className="fa-sharp fa-solid fa-location-dot tx-org"></i>
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.pickDropVehicle[1].dropPoint}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.pickDropVehicle[2].vehicleType}</p>
                                                    <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/suv.png" alt="" />
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                                <div className="flex items-center gap-2">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[0].baseFare}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[1].baseCoveredKM}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[2].coveredHours}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                                <div className="flex items-center gap-2">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[3].nightCharge}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[4].driverCharge}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[14px] font-semibold font-Outfit'>Pickup point -</p>
                                                    <p className='text-[14px] font-medium font-Poppins tx-'>{item.fareDetails[5].extraHours}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-2 items-center justify-center text-center py-1.5 border-t-1 border-black px-3 w-[10%]'>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i className="fa-regular fa-circle-info"></i>
                                                <i className="fa-solid fa-trash tx-red pointer"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </>
                }
                {itemView === "box" &&
                    <>
                        <div className="w-[80%] h-fit mx-auto flex gap-3 items-center">
                            <div className="w-fit px-1 py-1 flex gap-2 items-center">
                                <p className='text-[25px] font-Outfit font-semibold'>Local hourly packages</p>
                            </div>
                            <div className="col px-3">
                                <div className="col max-w-[70%] flex gap-2 border-2 border-blue rounded-md py- px-3 relative">
                                    <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                                    <Autocomplete
                                        label=""
                                        defaultItems={cityListing}
                                        placeholder="Search - Airport or short code"
                                        className="col !font-bold !text-[14px] autocompleate-custome"
                                    >
                                        {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                    </Autocomplete>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center text-[20px]">
                                <div className="">
                                    <i onClick={() => setItemView("grid")} className={`fa-regular fa-grid-2 pointer ${itemView === "grid" ? "tx-org" : "tx-black"}`}></i>
                                </div>
                                <div className='col min-h-[25px] max-h-[25px] bs-black min-w-[2px] max-w-[2px]'></div>
                                <div className="">
                                    <i onClick={() => setItemView("list")} className={`fa-sharp fa-solid fa-list pointer ${itemView === "list" ? "tx-org" : "tx-black"}`}></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] h-100 mx-auto overflow-y-scroll scroll-d-none mb-3 ">
                            <div className="w-[80%] h-fit flex flex-wrap gap-2.5 mx-auto  overflow-x-hidden">
                                {datacontentLocalHourlyPackages.map((item) => (
                                    <div key={item.id} className='border-3 border-dotted border-org rounded-lg min-w-[237px] max-w-[270px] h-fit'>
                                        <div className="py-1 px-3 text-center border-b-2 border-org">
                                            <p className='text-[14px] font-bold font-Outfit'>Local Rental 08Hrs/80Kms</p>
                                        </div>
                                        <div className="flex flex-col px-2 py-2">
                                            <div className="flex gap-2 items-center">
                                                <p className='text-[14px] font-semibold'>Location -</p>
                                                <p className='text-[14px] font-Outfit font-'>{item.location}</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <p className='text-[14px] font-semibold'>Total time -</p>
                                                <p className='text-[14px] font-Outfit font-'>{item.totalTime} </p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <p className='text-[14px] font-semibold'>Total Kms - </p>
                                                <p className='text-[14px] font-Outfit font-'>{item.TotalKms}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-2 px-2 pb-3">
                                            <div className="col">
                                                <div className="flex items-center justify-center border-3 border-dotted border-org rounded-lg px- py-1">
                                                    <p className='text-[13px] font-medium opacity-85'>800</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex items-center justify-center border-3 border-dotted border-org rounded-lg px- py-1">
                                                    <p className='text-[13px] font-medium opacity-85'>1100</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex items-center justify-center border-3 border-dotted border-org rounded-lg px- py-1">
                                                    <p className='text-[13px] font-medium opacity-85'>1800</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="flex items-center justify-center border-3 border-dotted border-org rounded-lg px- py-1">
                                                    <p className='text-[13px] font-medium opacity-85'>2500</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[calc(100%+4px)] ms-[-2px] mb-[-2px] flex items-center justify-center rounded-lg overflow-hidden">
                                            <div className="col flex justify-center bs-green px-5 py-2.5 border-[2px] !border-r-0 border-dotted border-white  rounded-s-lg">
                                                <i className="fa-regular fa-pen-to-square tx-white pointer"></i>
                                            </div>
                                            <div className="col flex justify-center bs-red px-5 py-2.5 border-[2px] border-dotted border-white rounded-e-lg">
                                                <i className="fa-light fa-trash tx-white pointer"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>


            <Modal isOpen={addPakagesModal} backdrop={"blur"} onOpenChange={closeaddPakagesModal}>
                <ModalContent className="rounded-3xl border-2 border-org close-btn-none">
                    {(closeaddPakagesModal) => (
                        <>
                            <ModalBody className="py-0 px-0 p-0">
                                <div className="">
                                    <div className="px-4 pt-4 pb-3">
                                        <div className="col border-2 flex items-center px-3 border-org rounded-lg overflow-hidden">
                                            <img className='w-[clamp(35px,35px,35px)] object-contain' src="../../../public/IMG/e-sign.png" alt="" />
                                            <input className='col w-100 py-[14px] px-3 !text-black' placeholder='Local Rental 08Hrs/80Kms' type="text" />
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <div className="col border-2 flex items-center border-org rounded-lg overflow-hidden py-2">
                                                <img className='w-[clamp(25px,25px,25px)] mx-2 object-contain' src="../../../public/IMG/city-locate.png" alt="" />
                                                {/* <input className='col w-100 py-[14px] !text-black' placeholder='Local Rental 08Hrs/80Kms' type="text" /> */}
                                                <p>AMD</p>
                                            </div>
                                            <div className="col border-2 flex items-center border-org rounded-lg overflow-hidden py-2">
                                                <img className='w-[clamp(25px,25px,25px)] mx-2 object-contain' src="../../../public/IMG/timer.png" alt="" />
                                                {/* <input className='col w-100 py-[14px] !text-black' placeholder='Local Rental 08Hrs/80Kms' type="text" /> */}
                                                <p>08:00 Hrs</p>
                                            </div>
                                            <div className="col border-2 flex items-center border-org rounded-lg overflow-hidden py-2">
                                                <img className='w-[clamp(25px,25px,25px)] mx-2 object-contain' src="../../../public/IMG/Kelometrs.png" alt="" />
                                                {/* <input className='col w-100 py-[14px] !text-black' placeholder='Local Rental 08Hrs/80Kms' type="text" /> */}
                                                <p>80.00 Km</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <div className="col">
                                                <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                    <p>800</p>
                                                </div>
                                                <p className='text-[11px] text-center font-semibold'>Hatchback</p>
                                            </div>
                                            <div className="col">
                                                <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                    <p>1100</p>
                                                </div>
                                                <p className='text-[11px] text-center font-semibold'>Sedan</p>
                                            </div>
                                            <div className="col">
                                                <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                    <p>1800</p>
                                                </div>
                                                <p className='text-[11px] text-center font-semibold'>SUV</p>
                                            </div>
                                            <div className="col">
                                                <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                    <p>2500</p>
                                                </div>
                                                <p className='text-[11px] text-center font-semibold'>Innova Crysta</p>
                                            </div>
                                            <div className="col">
                                                <div className="flex items-center justify-center border-2 border-org rounded-lg px-2 py-1">
                                                    <p>N/A</p>
                                                </div>
                                                <p className='text-[11px] text-center font-semibold'>Tempo Tr.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-100 border-t-2 border-org">
                                        <div className="col flex justify-center py-1 pointer border-e-2 border-org">
                                            <img className="max-w-[35px] object-contain" src="../../../public/IMG/close.png" alt="" />
                                        </div>
                                        <div className="col flex justify-center py-1 pointer">
                                            <img className="max-w-[27px]  object-contain" src="../../../public/IMG/done.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    )
}

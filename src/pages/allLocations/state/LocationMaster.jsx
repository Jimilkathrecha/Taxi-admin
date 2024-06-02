import { Autocomplete, AutocompleteItem, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { addStateAction, deleteStateAction, getAllStateAction } from '../../../redux/actions/state'
import { useDispatch, useSelector } from 'react-redux'
import { addCategoryAction, deleteCategoryAction, getAllCityAction } from '../../../redux/actions/city'
import Select from "react-select";

export default function LocationMaster() {

    const [activeLocationList, setactiveLocationList] = useState("state-list")

    const dataContentState = [
        { id: 1, stateCode: "GJ", stateName: "Gujarat", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, stateCode: "KL", stateName: "Kerala", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, stateCode: "MH", stateName: "Maharastra", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, stateCode: "TN", stateName: "Tamilnadu", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 5, stateCode: "UP", stateName: "Uttar Pradesh", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 6, stateCode: "KN", stateName: "Karnataka", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 7, stateCode: "MP", stateName: "Madhya Pradesh", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 8, stateCode: "DL", stateName: "Delhi", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 9, stateCode: "UT", stateName: "Utrakhand", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", }, 
    ]
    const dataContentCity = [
        { id: 1, stateCode: "GJ", state_name: "Gujarat", code: "RAJ", name: "Rajkot", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, stateCode: "KL", state_name: "Kerala", code: "TVP", name: "Thiruvananthapuram", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, stateCode: "MH", state_name: "Maharastra", code: "NAG", name: "Nagpur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, stateCode: "TN", state_name: "Tamilnadu", code: "CHE", name: "Chennai", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 5, stateCode: "UP", state_name: "Uttar Pradesh", code: "PRA", name: "Prayagraj", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 6, stateCode: "KN", state_name: "Karnataka", code: "BGL", name: "Bengaluru", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 7, stateCode: "MP", state_name: "Madhya Pradesh", code: "INE", name: "Indore", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 8, stateCode: "DL", state_name: "Delhi", code: "NDL", name: "New Delhi", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 9, stateCode: "UT", state_name: "Utrakhand", code: "DEH", name: "Dehradun", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", state_name: "Rajsathan", code: "JAI", name: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", }, 
    ]
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
    const stateSelector = [
        { label: "RJ - Rajasthan", value: "1", },
        { label: "UP - UttarPradesh", value: "2", },
        { label: "DL - Delhi", value: "3", },
        { label: "BH - Bihar", value: "4", },
        { label: "CH - Chattisgarh", value: "5", },
        { label: "GUJ - Gujarat", value: "6", },
        { label: "KER - Kerala", value: "7", },
        { label: "MHA - Maharastra", value: "8", },
        { label: "TML - Tamilnadu", value: "9", },
        { label: "KNK - Karnataka", value: "10", },
        { label: "MDP - Madhya Pradesh", value: "11", },
        { label: "UKD - Utrakhand", value: "12", },
    ];

    const dispatch = useDispatch();
    const { getAllState } = useSelector((state) => state?.stateState);
    const { getAllCity } = useSelector((state) => state?.cityState);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAllCity, setSelectAllCity] = useState(false);
    const [selectedCityRows, setSelectedCityRows] = useState([]);
    const [filterData, setFilterData] = useState({
        code_or_name: "",
    });

    const [filteredData, setFilteredData] = useState([]);
    const [addStateData, setAddStateData] = useState({
        name: "",
        code: "",
    });
    const [addCityData, setAddCityData] = useState({
        name: "",
        code: "",
        state: "",
    });
    const [deleteStateModal, setDeleteStateModal] = useState(false);

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setAddStateData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // validator.message(name, value, "required");
        // setValidationErrors((prevErrors) => ({
        //   ...prevErrors,
        //   [name]: validator.getErrorMessages()[name],
        // }));

    };

    const handleCityDataChange = (e) => {
        const { name, value } = e.target;
        setAddCityData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // validator.message(name, value, "required");
        // setValidationErrors((prevErrors) => ({
        //   ...prevErrors,
        //   [name]: validator.getErrorMessages()[name],
        // }));

    };

    const handleStateDataSubmit = (e) => {
        e.preventDefault();
        // if (validator.allValid()) {

        let body = {
            code: addStateData.code,
            name: addStateData.name,
        }
        dispatch(addStateAction(body));

        setAddStateData();
        // } else {
        //     validator.showMessages();
        //     setValidationErrors(validator.getErrorMessages());
        // }
    };
    const handleCityDataSubmit = (e) => {
        e.preventDefault();
        // if (validator.allValid()) {

        let body = {
            code: addCityData.code,
            name: addCityData.name,
            state: addCityData.state
        }
        dispatch(addCategoryAction(body));

        setAddCityData({
            ...addCityData,
            name: "",
            code: "",
            state: ""
        });
        // } else {
        //     validator.showMessages();
        //     setValidationErrors(validator.getErrorMessages());
        // }
        setAddStateData();
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission behavior
            handleStateDataSubmit();
        }
    };

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        if (checked) {
            setSelectedRows(getAllState)

        } else {
            setSelectedRows([]);
        }
    };

    const handleItemSelect = (e, item) => {
        const checked = e.target.checked;
        if (checked) {
            setSelectedRows((prevSelectedRows) => [...prevSelectedRows, item]);
        } else {
            setSelectedRows((prevSelectedRows) =>
                prevSelectedRows.filter((row) => row?._id !== item?._id)
            );
        }
    };

    const handleDeleteStateModal = () => {
        setDeleteStateModal(true)
    }

    const closeDeleteStateModal = () => {
        setDeleteStateModal(false)
    }

    const handleDeleteStateData = () => {
        selectedRows?.forEach((item) => {
            dispatch(deleteStateAction(item?._id));
        });
        setSelectedRows([]);
        setSelectAll(false);
        setDeleteStateModal(false)
    }

    const handleSelectAllCity = (e) => {
        const checked = e.target.checked;
        setSelectAllCity(checked);
        if (checked) {
            setSelectedCityRows(getAllCity)

        } else {
            setSelectedCityRows([]);
        }
    };

    const handleCitySelect = (e, item) => {
        const checked = e.target.checked;
        if (checked) {
            setSelectedCityRows((prevSelectedRows) => [...prevSelectedRows, item]);
        } else {
            setSelectedCityRows((prevSelectedRows) =>
                prevSelectedRows.filter((row) => row?._id !== item?._id)
            );
        }
    };

    const handleDeleteStateDataCity = () => {
        selectedCityRows?.forEach((item) => {
            dispatch(deleteCategoryAction(item?._id));
        });
        setSelectedCityRows([]);
        setSelectAllCity(false);
        setAddDestinationModal(false)
    }

    useEffect(() => {
        dispatch(getAllStateAction())
        dispatch(getAllCityAction())
    }, [dispatch])


    return (
        <>
            <div className="w-[75%] mx-auto flex flex-col gap-3 h-100">
                <div className="flex gap-3 items-center">

                    <div onClick={() => { setactiveLocationList("state-list") }} className={`${activeLocationList === "state-list" ? "tx-white bs-blue  border-2 border-blue" : " border-2 border-org tx-org"}  w-fit rounded-md pointer px-5 py-1 flex gap-2 items-center`}>
                        <p className='text-[16px] font-Outfit font-semibold'>State</p>
                    </div>
                    <div onClick={() => { setactiveLocationList("city-list") }} className={`${activeLocationList === "city-list" ? "tx-white bs-blue  border-2 border-blue" : " border-2 border-org tx-org"}  w-fit rounded-md pointer px-5 py-1 flex gap-2 items-center`}>
                        <p className='text-[16px] font-Outfit font-semibold'>City</p>
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

                <div className="w-100 h-100 mx-auto overflow-y-scroll scroll-d-none mb-3">
                    {activeLocationList === "state-list" &&
                        <div className="w-[100%] h-100 mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                        <input type="checkbox" id="check-all" checked={selectAll} onChange={handleSelectAll} />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                        <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>State Code</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[40%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>State Name</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[40%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Data Logs</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-black px-3 w-[10%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Actions</p>
                                    </div>
                                </div>
                                <div>
                                    <form className='flex justify-between bs-org' onSubmit={handleStateDataSubmit}>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[4%]'>
                                            {/* <input type="checkbox" /> */}
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[6%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-white bs-org'>11</p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[20%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" name="name"
                                                value={addStateData?.name}
                                                onChange={handleDateChange} />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[40%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" name="code"
                                                value={addStateData?.code}
                                                onChange={handleDateChange} />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[40%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" name=""
                                            // value={airPortData.cityName}
                                            // onChange={handleDateChange}
                                            />
                                        </div>
                                        <div onClick={(e) => handleStateDataSubmit(e)} className='flex gap-3 items-center justify-center bs-org hover:!bg-[#fff] tx-white hover:!text-[#2565DF] text-center text-[16px] py-1.5 border-t-1 border-black pointer px-3 w-[10%]' >
                                            <p className="text-[15px] font-semibold w-[90%] font-Outfit rounded-md">SUBMIT</p>
                                        </div>
                                    </form>
                                    {getAllState?.length > 0 && getAllState.map((item, index) => {
                                        return (
                                            <div className='flex justify-between'>
                                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[4%]'>
                                                    <input type="checkbox"
                                                        id={item?._id}
                                                        checked={selectedRows.includes(item)}
                                                        onChange={(e) =>
                                                            handleItemSelect(e, item)
                                                        } />
                                                </div>
                                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[6%]'>
                                                    <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{index}</p>
                                                </div>
                                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[20%]'>
                                                    <p className='text-[15px] font-medium font-Poppins tx-'>{item.name}</p>
                                                </div>
                                                <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[40%]'>
                                                    <p className='text-[15px] font-medium font-Poppins tx-'>{item.code}</p>
                                                </div>
                                                <div className='flex gap-3 justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[40%]'>
                                                    <div className="flex items-center">
                                                        <p className='text-[13px] font-Poppins font-bold'>Ad.</p>
                                                        <p className='text-[13px] font-medium font-Poppins tx-'>{item.addDate}</p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <p className='text-[13px] font-Poppins font-bold'>Up.</p>
                                                        <p className='text-[13px] font-medium font-Poppins tx-'>{item.addDate}</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-b-1 border-black px-3 w-[10%]'>
                                                    <i className="fa-solid fa-pen-to-square pointer"></i>
                                                    <i className="fa-solid fa-trash tx-red pointer" onClick={handleDeleteStateModal}></i>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    }


                    {activeLocationList === "city-list" &&
                        <div className="w-[100%] h-100 mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                        <input type="checkbox"
                                            id="check-all"
                                            checked={selectAllCity}
                                            onChange={handleSelectAllCity} />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                        <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 min-w-[30%] max-w-[30%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>State Name</p>
                                    </div>
                                    {/* <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>State Name</p>
                                    </div> */}
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>City Code</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>City Name</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[30%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Data Logs</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-black px-3 w-[10%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Actions</p>
                                    </div>
                                </div>
                                <div>
                                    <form className='flex justify-between bs-org' onSubmit={handleCityDataSubmit}>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[4%]'>
                                            {/* <input type="checkbox" /> */}
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[6%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-white bs-org'>11</p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black min-w-[30%] max-w-[30%]'>
                                            {/* <Select
                                                value={
                                                    addCityData.state
                                                        ? {

                                                            label: values.state.name,
                                                            value: values.state._id,
                                                        }
                                                        : null
                                                }
                                                onChange={(selectedOption) => {
                                                    setAddCityData("state", {
                                                        name: selectedOption.label,
                                                        _id: selectedOption.value,
                                                    });
                                                }}
                                                options={
                                                    Array.isArray(getAllState)
                                                        ? getAllState.map((state) => ({
                                                            label: state.name,
                                                            value: state._id,
                                                        }))
                                                        : []
                                                }
                                            /> */}
                                            <div className="w-100 flex gap-2 rounded-md py- bg-[#fff] relative"> 
                                                <Autocomplete
                                                    label=""
                                                    defaultItems={stateSelector}
                                                    placeholder="Select State"
                                                    className="col !font-bold !text-[14px] autocompleate-custome"
                                                >
                                                    {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                                </Autocomplete>
                                            </div>
                                            {/* <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" /> */}
                                        </div>
                                        {/* <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[20%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div> */}
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black min-w-[10%] max-w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[20%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[30%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div onClick={handleCityDataSubmit} className='flex gap-3 items-center justify-center bs-org hover:!bg-[#fff] tx-white hover:!text-[#2565DF] text-center text-[16px] py-1.5 border-y-1 border-black pointer px-3 w-[10%]' >
                                            <p className="text-[15px] font-semibold w-[90%] font-Outfit rounded-md">SUBMIT</p>
                                        </div>
                                    </form>
                                    {dataContentCity?.length > 0 && dataContentCity.map((item, index) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[4%]'>
                                                <input type="checkbox"  />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[6%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{index}</p>
                                            </div>
                                            <div className='flex justify-start text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[30%] max-w-[30%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.stateCode} - {item.state_name}</p>
                                            </div> 
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black min-w-[10%] max-w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.code}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[20%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.name}</p>
                                            </div>
                                            <div className='flex gap-3 justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[30%]'>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Ad.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsAd}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Up.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsUp}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-b-1 border-black px-3 w-[10%]'>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i className="fa-solid fa-trash tx-red pointer" onClick={() => handleDeleteStateDataCity()}></i>
                                            </div>
                                        </div>
                                    ))}
                                    {/* {getAllCity?.length > 0 && getAllCity.map((item, index) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[4%]'>
                                                <input type="checkbox"
                                                    id={item?._id}
                                                    checked={selectedCityRows.includes(item)}
                                                    onChange={(e) =>
                                                        handleCitySelect(e, item)
                                                    } />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[6%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{index}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[30%] max-w-[30%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.stateCode || "-"}{item.state_name}</p>
                                            </div> 
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%] max-w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.code}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.name}</p>
                                            </div>
                                            <div className='flex gap-3 justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[30%]'>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Ad.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsAd}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Up.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsUp}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 w-[10%]'>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i className="fa-solid fa-trash tx-red pointer" onClick={() => handleDeleteStateDataCity()}></i>
                                            </div>
                                        </div>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <Modal isOpen={deleteStateModal} backdrop={"blur"} onOpenChange={closeDeleteStateModal}>
                <ModalContent className="rounded-3xl border-2 border-org close-btn-none">
                    {(closeDeleteStateModal) => (
                        <>
                            <ModalBody className="py-0 px-0 p-0">
                                <div className="px-4 py-4 mt-2">
                                    <div className="flex gap-2 mt-3">
                                        <div className="min-w-[120px] max-w-[120px]">
                                            <img src="../../../public/IMG/dander-red.png" alt="" />
                                        </div>
                                        <div className="col flex flex-col text-[24px] font-Outfit opacity-70 items-center justify-center">
                                            <p>Are you sure,</p>
                                            <p>You want to delete?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-100 border-t-2 border-org">
                                    <div onClick={closeDeleteStateModal} className="col flex justify-center py-1 border-e-2 border-org pointer">
                                        <img className="max-w-[35px] object-contain" src="../../../public/IMG/close.png" alt="" />
                                    </div>
                                    <div onClick={handleDeleteStateData} className="col flex justify-center py-1 pointer">
                                        <img className="max-w-[27px]  object-contain" src="../../../public/IMG/done.png" alt="" />
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

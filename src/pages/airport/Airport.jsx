import { Autocomplete, AutocompleteItem, Modal, ModalBody, ModalContent, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAirPortAction, deleteAirPortAction, getAllAirPortAction } from "../../redux/actions/airport";
import { addDestinationLandMarkAction, deleteDestinationAction, getAllDestinationAction } from "../../redux/actions/destination";
import moment from 'moment';
import { DESTINATION_LOADING_FALSE, DESTINATION_LOADING_TRUE, AIRPORT_LOADING_FALSE, AIRPORT_LOADING_TRUE } from "../../redux/type";
// import Chip from '@mui/material/Chip';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

export default function Airport() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [addAirportModal, setAddAirportModal] = useState(false);
    const [activeAirportBtn, setActiveAirportBtn] = useState("airport-list")
    const [activeDestinationBtn, setActiveDestinationBtn] = useState("")
    const [activeDestinationList, setActiveDestinationList] = useState("")

    const [iterationCounter, setIterationCounter] = useState();
    const [currentDate, setCurrentDate] = useState('');
    const [airPortData, setAirPortData] = useState({
        name: "",
        code: "",
        cityName: "",
        dateLogs: currentDate
    });
    const [destinationData, setDestinationData] = useState({
        name: "",
    });
    const [landMarkData, setLandMarkDataData] = useState({
        name: "",
        airport: "",
        hatchBack: "",
        suv: "",
        sedan: "",
        innova: "",
        tempo: "",
    });

    const dispatch = useDispatch()
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAllLandMark, setSelectAllLandMark] = useState(false);
    const [selectedLandMarkRows, setSelectedLandMarkRows] = useState([]);
    const [filterData, setFilterData] = useState({
        code_or_name: "",
    });

    const [filteredData, setFilteredData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const { getAllAirPort, airPortLoading } = useSelector((state) => state?.airPortState);
    const { getAllDestination, destinationLoading } = useSelector((state) => state?.destinationState);
    const [addDestinationModal, setAddDestinationModal] = useState(false);
    const [deleteAirportModal, setDeleteAirportModal] = useState(false);
    const [addLandMarkLablesModal, setAddLandMarkLablesModal] = useState(false);
    const [airPortId, setAirPortId] = useState();
    const [destinationId, setdestinationId] = useState();


    console.log("getAllAirPort", getAllAirPort);

    useEffect(() => {
        setAirPortData(prevData => ({
            ...prevData,
            dateLogs: currentDate
        }));
    }, [currentDate]);

    useEffect(() => {
        dispatch(getAllAirPortAction())
        dispatch(getAllDestinationAction())
    }, [dispatch])

    useEffect(() => {
        if (filterData.code_or_name === "") {
            setFilteredData(getAllAirPort);
        } else {
            const lowerCaseCodeOrName = filterData.code_or_name.toLowerCase();
            const TempFilter = getAllAirPort.filter(item =>
                item.name.toLowerCase().includes(lowerCaseCodeOrName) ||
                item.code.toLowerCase().includes(lowerCaseCodeOrName)
            );
            setFilteredData(TempFilter);
            // setCurrentPage(1); // Reset to the first page when filtering changes
        }
    }, [filterData, getAllAirPort]);
    // const pageCount = Math.ceil(filteredData.length / PerPage);
    // const startIndex = (currentPage - 1) * PerPage;
    // const endIndex = startIndex + PerPage;
    // const displayedDataPaginated = Array.isArray(filteredData)
    //     ? filteredData.slice(startIndex, endIndex)
    //     : "";
    // const numbers = Array.isArray(filteredData) && filteredData?.length !== undefined
    //     ? [...Array(pageCount).keys()]?.map((num) => num + 1)
    //     : "";
    // const startSerial = (currentPage - 1) * PerPage + 1;


    useEffect(() => {
        //   const now = new Date();
        const formattedDate = moment().format();
        setCurrentDate(formattedDate);
    }, []);

    const handleSelectionChange = (e) => {
        setValues(new Set(e.target.value.split(",")));
    };

    const handleaddAirportModal = () => {
        dispatch({
            type: AIRPORT_LOADING_TRUE
        })
        // setAddAirportModal(true)
    }
    const closeaddAirportModal = () => {
        dispatch({
            type: AIRPORT_LOADING_FALSE
        })
        // setAddAirportModal(false)
    }

    const handleDeleteModal = (item) => {
        // setAirPortId(item)
        // dispatch({
        //     type:AIRPORT_LOADING_TRUE
        // })
        setDeleteAirportModal(true)
    }

    const handleDeleteAirPortData = () => {
        selectedRows?.forEach((item) => {
            dispatch(deleteAirPortAction(item?._id));
            setDeleteAirportModal(false)
            dispatch({
                type: AIRPORT_LOADING_FALSE
            })
        });
        // setAirPortId(item)
        setSelectedRows([]);
        setSelectAll(false);
        // setAddDestinationModal(false)
    }

    const closeDeleteModal = () => {
        setDeleteAirportModal(false)
    }

    const handleAddDestinationModal = () => {
        dispatch({
            type: DESTINATION_LOADING_TRUE
        })
        // setAddDestinationModal(true)
    }
    const closeAddDestinationModal = () => {
        dispatch({
            type: DESTINATION_LOADING_FALSE
        })
        // setAddDestinationModal(false)
    }

    const handleDeleteDestinationModal = (item) => {
        setdestinationId(item)
        dispatch({
            type: DESTINATION_LOADING_TRUE
        })
        // setDeleteAirportModal(true)
    }



    const handleDeleteDestinationData = () => {
        console.log("destination Deleted", destinationId);
        dispatch({
            type: DESTINATION_LOADING_FALSE
        })
        // dispatch(deleteDestinationAction(destinationId));
        // setAddDestinationModal(false)
    }

    const handleAddLandMarkLablesModal = () => {
        setAddLandMarkLablesModal(true)
    }
    const closeAddLandMarkLablesModal = () => {
        setAddLandMarkLablesModal(false)
    }

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

    const datacontentAirportList = [
        { id: "1", cityname: "Rajkot", code: "HSR", airport: "Rajkot Hirasar International Airport", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "2", cityname: "Ahmedabad", code: "AMD", airport: "Sardar Vallabhbhai Patel International Airport", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "3", cityname: "Surat", code: "STV", airport: "Surat International Airport", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "4", cityname: "Mumbai", code: "BOM", airport: "Chhatrapati Shivaji International Airport", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "5", cityname: "Chennai", code: "MAA", airport: "Chennai International Airport", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "6", cityname: "Pune", code: " PNQ", airport: "Pune International Airport", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "7", cityname: "Banglore", code: "BLR", airport: "Kempegowda International Airport Bengaluru", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "8", cityname: "Indore", code: "IDR", airport: "Devi Ahilyabai Holkar Airport Indore", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "9", cityname: "Delhi", code: "DEL", airport: "Indira Gandhi International Airport", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "10", cityname: "Dehradun", code: "DED", airport: "Jolly Grant Airport Dehradun", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: "11", cityname: "Udaipur", code: "UDR", airport: "Maharana Pratap Airport Udaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
    ]
    const dataContentDestinations = [
        { id: 1, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 2, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 3, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 4, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 5, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 6, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 7, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 8, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 9, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 10, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 11, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 12, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 13, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 14, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 15, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
        { id: 16, location: "HSR - Rajkot Hirasar International Airport", totalno: " 29", TotalKms: "80 Kms" },
    ]
    const dataContentLandMarks = [
        { id: 1, name: "Abdul Azeez", Hatchback: "750", Sedan: "500", SUV: "600", Innova: "550", Tempo: "900" },
        { id: 2, name: "Cosmoplex", Hatchback: "600", Sedan: "450", SUV: "500", Innova: "580", Tempo: "700" },
        { id: 3, name: "Trikon baug", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 4, name: "Kotecha circle", Hatchback: "750", Sedan: "500", SUV: "600", Innova: "550", Tempo: "900" },
        { id: 5, name: "Nirmala road", Hatchback: "600", Sedan: "450", SUV: "500", Innova: "580", Tempo: "700" },
        { id: 6, name: "Hanumanmadhi chowk", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 7, name: "Raiya chowkdi", Hatchback: "750", Sedan: "500", SUV: "600", Innova: "550", Tempo: "900" },
        { id: 8, name: "Telephone exchange", Hatchback: "600", Sedan: "450", SUV: "500", Innova: "580", Tempo: "700" },
        { id: 9, name: "Shital park", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
        { id: 10, name: "Ramapir chowkdi", Hatchback: "750", Sedan: "500", SUV: "600", Innova: "550", Tempo: "900" },
        { id: 11, name: "Crystal mall", Hatchback: "600", Sedan: "450", SUV: "500", Innova: "580", Tempo: "700" },
        { id: 12, name: "Big Bazar", Hatchback: "1500", Sedan: "1700", SUV: "2000", Innova: "2400", Tempo: "3000" },
    ]

    const generateDummyData = (num) => {
        const dummyData = [];
        for (let i = 1; i <= num; i++) {
            dummyData.push({
                id: i,
                name: `Landmark... ${i}`,
                Hatchback: "1500",
                Sedan: "1700",
                SUV: "2000",
                Innova: "2400",
                Tempo: "3000"
            });
        }
        return dummyData;
    }

    // Example usage 
    const dummyData = generateDummyData(20);

    // const top100Films = [
    //     { title: 'The Shawshank Redemption', year: 1994 },
    //     { title: 'The Godfather', year: 1972 },
    //     { title: 'The Godfather: Part II', year: 1974 },
    //     { title: 'The Dark Knight', year: 2008 },
    //     { title: '12 Angry Men', year: 1957 },
    //     { title: "Schindler's List", year: 1993 },
    //     { title: 'Pulp Fiction', year: 1994 },
    //     {
    //         title: 'The Lord of the Rings: The Return of the King',
    //         year: 2003,
    //     },
    //     { title: 'The Good, the Bad and the Ugly', year: 1966 },
    //     { title: 'Fight Club', year: 1999 },
    //     {
    //         title: 'The Lord of the Rings: The Fellowship of the Ring',
    //         year: 2001,
    //     },
    //     {
    //         title: 'Star Wars: Episode V - The Empire Strikes Back',
    //         year: 1980,
    //     },
    //     { title: 'Forrest Gump', year: 1994 },
    //     { title: 'Inception', year: 2010 },
    //     {
    //         title: 'The Lord of the Rings: The Two Towers',
    //         year: 2002,
    //     },
    // ]

    const top100Films = [
        { title: 'The Shawshank Redemption' },
        { title: 'The Godfather' },
        { title: 'The Godfather: Part II' },
        { title: 'The Dark Knight' },
        { title: '12 Angry Men' },
        // Add more film data as needed
    ];

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setFilteredOptions(
            top100Films.filter((option) => option.title.toLowerCase().includes(value.toLowerCase()))
        );
    };

    const handleSelectOption = (option) => {
        if (!selectedOptions.includes(option)) {
            setSelectedOptions([...selectedOptions, option]);
        }
        setInputValue('');
    };

    const handleRemoveOption = (index) => {
        const newOptions = [...selectedOptions];
        newOptions.splice(index, 1);
        setSelectedOptions(newOptions);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            if (!selectedOptions.includes(inputValue.trim())) {
                setSelectedOptions([...selectedOptions, inputValue.trim()]);
            }
            setInputValue('');
        }
    };

    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setFilterData({ code_or_name: value });
        // const { name, value } = event.target;
        // setFilterData((prevFilterData) => ({
        //     ...prevFilterData,
        //     [name]: value,
        // }));
    };

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        if (checked) {
            setSelectedRows(getAllAirPort)

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

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setAirPortData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // validator.message(name, value, "required");
        // setValidationErrors((prevErrors) => ({
        //   ...prevErrors,
        //   [name]: validator.getErrorMessages()[name],
        // }));

    };

    const handleLandMarkDateChange = (e) => {
        const { name, value } = e.target;
        setLandMarkDataData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // validator.message(name, value, "required");
        // setValidationErrors((prevErrors) => ({
        //   ...prevErrors,
        //   [name]: validator.getErrorMessages()[name],
        // }));

    };

    const handleDestinationDateChange = (e) => {
        const { name, value } = e.target;
        setDestinationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // validator.message(name, value, "required");
        // setValidationErrors((prevErrors) => ({
        //   ...prevErrors,
        //   [name]: validator.getErrorMessages()[name],
        // }));

    };

    const handleAirPortDataSubmit = (e) => {
        e.preventDefault();
        // if (validator.allValid()) {

        let body = {
            code: airPortData.code,
            name: airPortData.name,
            dateLogs: airPortData.dateLogs,
            cityName: airPortData.cityName
        }
        dispatch(addAirPortAction(body));
        // dispatch(getAllAirPortAction());

        setAirPortData({
            ...airPortData,
            name: "",
            code: "",
            cityName: "",
            dateLogs: ""
        });
        // } else {
        //     validator.showMessages();
        //     setValidationErrors(validator.getErrorMessages());
        // }
        setAirPortData();
    };

    const handleDestinationDataSubmit = (e) => {
        // e.preventDefault();
        // if (validator.allValid()) {

        let body = {
            name: destinationData.name,
        }
        // dispatch(addDestinationAction(body));

        setDestinationData({
            ...destinationData,
            name: "",
        });
        // } else {
        //     validator.showMessages();
        //     setValidationErrors(validator.getErrorMessages());
        // }
        setAirPortData();
    };
    const handleSelectAllLandMark = (e) => {
        const checked = e.target.checked;
        setSelectAllLandMark(checked);
        if (checked) {
            setSelectedLandMarkRows(getAllDestination)

        } else {
            setSelectedLandMarkRows([]);
        }
    };

    const handleLandMarkSelect = (e, item) => {
        const checked = e.target.checked;
        if (checked) {
            setSelectedLandMarkRows((prevSelectedRows) => [...prevSelectedRows, item]);
        } else {
            setSelectedLandMarkRows((prevSelectedRows) =>
                prevSelectedRows.filter((row) => row?._id !== item?._id)
            );
        }
    };
    const handleLandMarkDataSubmit = (e) => {
        e.preventDefault();
        // if (validator.allValid()) {

        let body = {
            name: landMarkData.name,
            airport: "664b52c0540ecf34e8156887",
            hatchBack: landMarkData?.hatchBack,
            suv: landMarkData?.suv,
            sedan: landMarkData?.sedan,
            innova: landMarkData?.innova,
            tempo: landMarkData?.tempo,
        }
        dispatch(addDestinationLandMarkAction(body));

        setLandMarkDataData({
            ...addStateData,
            name: "",
            code: "",
            hatchBack: "",
            suv: "",
            sedan: "",
            innova: "",
            tempo: "",
        });
        // } else {
        //     validator.showMessages();
        //     setValidationErrors(validator.getErrorMessages());
        // }
        setAddStateData();
    };


    return (
        <>
            <div className="w-[75%] mx-auto flex flex-col gap-3 h-100">

                <div className="flex gap-3 items-center">
                    {activeAirportBtn === "airport-list" ?
                        <div onClick={handleaddAirportModal} className="w-[clamp(160px,160px,160px)] tx-white bs-blue border-2 border-blue rounded-md pointer px-4 py-1 flex justify-center gap-2 items-center">
                            <i className="fa-solid fa-plus text-[14px] "></i>
                            <p className='text-[16px] font-Outfit font-semibold'>Airport</p>
                        </div>
                        :
                        <div onClick={() => { setActiveAirportBtn("airport-list"), setActiveDestinationBtn(""), setActiveDestinationList("") }} className="w-[clamp(160px,160px,160px)] tx-org border-2 border-org rounded-md pointer px-4 py-1 flex justify-center gap-2 items-center">
                            <p className='text-[16px] text-center  font-Outfit font-semibold'>Airport</p>
                        </div>
                    }
                    {activeDestinationBtn === "destination-list" ?
                        <div onClick={handleAddDestinationModal} className="w-[clamp(160px,160px,160px)] tx-white bs-blue border-2 border-blue rounded-md pointer px-4 py-1 flex justify-center gap-2 items-center">
                            <i className="fa-solid fa-plus text-[14px] "></i>
                            <p className='text-[16px] font-Outfit font-semibold'>Destination</p>
                        </div>
                        :
                        <>
                            <div onClick={() => { setActiveDestinationBtn("destination-list"), setActiveAirportBtn(""), setActiveDestinationList("") }} className={`${activeDestinationList === "landmark-list" ? "hidden" : ""}  w-[clamp(160px,160px,160px)] tx-org border-2 border-org rounded-md pointer px-4 py-1 flex justify-center gap-2 items-center`}>
                                <p className='text-[16px] text-center font-Outfit font-semibold'>Destination</p>
                            </div>
                            <div onClick={() => { setActiveDestinationBtn("destination-list"), setActiveAirportBtn(""), setActiveDestinationList("") }} className={`${activeDestinationList === "landmark-list" ? "" : "hidden"}  w-[clamp(160px,160px,160px)] tx-white bs-blue border-2 border-blue rounded-md pointer px-4 py-1 flex gap-2 justify-center items-center`}>
                                <i class="fa-solid fa-arrow-left text-[14px]"></i>
                                <p className='text-[16px] text-center font-Outfit font-semibold'>Back</p>
                            </div>
                        </>
                    }


                    <div className="col flex gap-2 border-2 border-blue rounded-md py- px-3 relative">
                        <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                        <Autocomplete
                            label=""
                            defaultItems={airportSelector}
                            // defaultItems={getAllAirPort || []}
                            placeholder="Search - Airport or short code"
                            className="col !font-bold !text-[14px] autocompleate-custome"
                            onChange={handleSearchInputChange}
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

                {activeAirportBtn === "airport-list" &&
                    <div className="w-100 h-100 mx-auto overflow-y-scroll scroll-d-none mb-3">
                        <div className="w-[100%] h-100 mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-b-1 border-black px-3 w-[4%]'>
                                        <input type="checkbox"
                                            id="check-all"
                                            checked={selectAll}
                                            onChange={handleSelectAll} />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-b-1 border-black px-3 w-[6%]'>
                                        <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.No</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-b-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>City name</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-b-1 border-black px-3 w-[40%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Airport with shortcodes</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-b-1 border-black px-3 w-[40%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Date Logs</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-b-1 border-black px-3 w-[15%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Actions</p>
                                    </div>
                                </div>
                                <div>
                                    {filteredData?.length > 0 && filteredData.map((item, index) => (
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
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{index + 1}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[20%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.cityName}</p>
                                            </div>
                                            <div className='flex justify-start text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[40%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'><span className="font-bold">{item.code}</span> - {item.name}</p>
                                            </div>
                                            <div className='flex gap-3 justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[40%]'>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Ad.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsAd || 0}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Up.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsUp || 0}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-4 items-center justify-center text-center py-1.5 border-b-1 border-black px-3 w-[15%]'>
                                                <i onClick={handleaddAirportModal} className="fa-solid fa-pen-to-square pointer"></i>
                                                <i onClick={() => handleDeleteModal()} className="fa-solid fa-trash tx-red pointer"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {activeDestinationBtn === "destination-list" &&
                    <div className="h-[calc(100vh-300px)] mx-auto w-[100%] overflow-hidden mb-3">
                        <div className=" h-fit temp-grid gap-2.5 mx-auto w-100 overflow-x-auto scroll-d-none">
                            {getAllDestination?.length > 0 && getAllDestination.map((item, index) => {
                                return (
                                    <>
                                        <div key={index} className='border-2 border-dashed border-org rounded-lg min-w-[300px] max-w-[370px] h-fit'>
                                            <div className="py-1 px-3 text-center border-b-2 border-org">
                                                <p className='text-[14px] font-bold font-Outfit'>{item.airportName}</p>
                                            </div>
                                            <div className="flex flex-col px-2 py-2">
                                                <div className="flex gap-2 items-center justify-center">
                                                    <p className='text-[15px] font-Outfit font-semibold'> Total no. of destination:</p>
                                                    <p className='text-[15px] font-Outfit font-'>{item.noOfDestination} </p>
                                                </div>
                                            </div>
                                            <div className="w-[calc(100%+4px)] ms-[-2px] mb-[-2px] flex  rounded-lg ">
                                                <div onClick={handleAddDestinationModal} className="w-[15%] col flex justify-center items-center bs-green px-1 pointer py-2 border-2 !border-r-0 border-dashed border-white  rounded-s-lg">
                                                    <i className="fa-regular fa-pen-to-square tx-white pointer"></i>
                                                </div>
                                                <div onClick={() => { setActiveDestinationList("landmark-list"), setActiveDestinationBtn(("")) }} className="w-[70%] col py-1 flex gap-1 items-center bs-white px-4 border-y-2 border-org border-dashed border-white pointer">
                                                    <i className="fa-solid fa-plus text-[14px] "></i>
                                                    <p className="text-[14px] font-semibold font-Outfit ">Destination</p>
                                                </div>
                                                <div onClick={() => handleDeleteDestinationModal(item?.airportId)} className="w-[15%] col flex justify-center items-center bs-red px-1 pointer py-2 border-2 border-dashed border-white rounded-e-lg">
                                                    <i className="fa-light fa-trash tx-white pointer"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                }

                {activeDestinationList === "landmark-list" &&
                    <div className="w-100 h-100 mx-auto overflow-y-scroll scroll-d-none mb-3">
                        <div className="w-[100%] h-100 mx-auto rounded-[10px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                        <input type="checkbox" id="check-all" checked={selectAllLandMark} onChange={handleSelectAllLandMark} />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                        <p className='w-fit text-[15px] font-Outfit tx-white'>Sr.</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[30%]'>
                                        <p className='text-[15px] font-Outfit tx-white'>Name</p>
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
                                    <form className='flex justify-between bs-org' onSubmit={handleLandMarkDataSubmit}>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[4%]'>
                                            {/* <input type="checkbox" /> */}
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[6%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-white'></p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[30%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text"
                                                name="name"
                                                onChange={handleLandMarkDateChange}
                                                value={landMarkData.name}
                                            />
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                                name="hatchBack"
                                                onChange={handleLandMarkDateChange}
                                                value={landMarkData.hatchBack}
                                            />
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                                name="suv"
                                                onChange={handleLandMarkDateChange}
                                                value={landMarkData.suv}
                                            />
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                                name="sedan"
                                                onChange={handleLandMarkDateChange}
                                                value={landMarkData.sedan}
                                            />
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                                name="innova"
                                                onChange={handleLandMarkDateChange}
                                                value={landMarkData.innova}
                                            />
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-y-1 border-black w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="number"
                                                name="tempo"
                                                onChange={handleLandMarkDateChange}
                                                value={landMarkData.tempo}
                                            />
                                        </div>
                                        <div className='flex gap-3 items-center justify-center bs-org hover:!bg-[#fff] tx-white hover:!text-[#2565DF] text-center text-[16px] py-1.5 border-y-1 border-black pointer px-3 w-[10%]' onClick={handleLandMarkDataSubmit}>
                                            <p className="text-[15px] font-semibold w-[90%] font-Outfit rounded-md">SUBMIT</p>
                                        </div>
                                    </form>
                                    {dataContentLandMarks.map((item) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[4%]'>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[6%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-b-1 border-black w-[30%]'>
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
                                                <i onClick={handleAddLandMarkLablesModal} className="fa-solid fa-circle-dot tx-org"></i>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i onClick={""} className="fa-solid fa-trash tx-red pointer"></i>
                                            </div>
                                        </div>
                                    ))}
                                    {/* {getAllDestination.map((item) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[4%]'>
                                                <input type="checkbox" id={item?._id}
                                                    checked={selectedLandMarkRows.includes(item)}
                                                    onChange={(e) =>
                                                        handleLandMarkSelect(e, item)
                                                    } />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[6%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[30%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.name}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.Hatchback}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.Sedan}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.SUV}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.Innova}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.Tempo}</p>
                                            </div>
                                            <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 w-[10%]'>
                                                <i onClick={handleAddLandMarkLablesModal} className="fa-solid fa-circle-dot tx-org"></i>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i onClick={""} className="fa-solid fa-trash tx-red pointer"></i>
                                            </div>
                                        </div>
                                    ))} */}
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div >


            <Modal isOpen={airPortLoading} backdrop={"blur"} onOpenChange={closeaddAirportModal}>
                <ModalContent className=" border-2 border-org">
                    {(closeaddAirportModal) => (
                        <>
                            <ModalBody className="py-0 px-0 p-0">
                                <div className="px-4 py-4 mt-2">
                                    <div className="col border-2 border-org rounded-lg overflow-hidden">
                                        <input className='col w-100 py-[14px] px-3' placeholder='City Name' type="text" name="cityName"
                                            value={airPortData?.cityName}
                                            onChange={handleDateChange} />
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                        <div className="w-[20%] border-2 border-org rounded-tl-lg overflow-hidden">
                                            <input className='col w-100 py-[14px] px-3' placeholder='Code' type="text" name="code"
                                                value={airPortData?.code}
                                                onChange={handleDateChange} />
                                        </div>
                                        <div className="col border-2 border-org rounded-tr-lg overflow-hidden">
                                            <input className='col w-100 py-[14px] px-3' placeholder='Airport Name' type="text" name="name"
                                                value={airPortData?.name}
                                                onChange={handleDateChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-100 border-t-2 border-org">
                                    <div className="col flex justify-center py-1 border-e-2 border-org" onClick={() => closeaddAirportModal()}>
                                        <img className="max-w-[35px] object-contain" src="../../../public/IMG/close.png" alt="" />
                                    </div>
                                    <div className="col flex justify-center py-1" onClick={(e) => handleAirPortDataSubmit(e)}>
                                        <img className="max-w-[27px]  object-contain" src="../../../public/IMG/done.png" alt="" />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Modal isOpen={destinationLoading} backdrop={"blur"} onOpenChange={closeAddDestinationModal}>
                <ModalContent className=" border-2 border-org">
                    {(closeAddDestinationModal) => (
                        <>
                            <ModalBody className="py-0 px-0 p-0 gap-0">
                                <div className="px-4 py-4">
                                    <div className="col flex gap-2 border-2 border-org rounded-md py- px-3 relative">
                                        <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                                        <Autocomplete
                                            label=""
                                            defaultItems={airportSelector}
                                            placeholder="Search - Airport or short code"
                                            className="col !font-bold !text-[14px] autocompleate-custome"
                                        // onChange={handleDestinationDateChange}
                                        >
                                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                        </Autocomplete>
                                    </div>
                                </div>
                                <div className="flex w-100 border-t-2 border-org">
                                    <div className="col flex justify-center py-1 border-e-2 border-org" onClick={() => closeAddDestinationModal()}>
                                        <img className="max-w-[35px] object-contain" src="../../../public/IMG/close.png" alt="" />
                                    </div>
                                    <div className="col flex justify-center py-1" onClick={(e) => handleDestinationDataSubmit(e)}>
                                        <img className="max-w-[27px]  object-contain" src="../../../public/IMG/done.png" alt="" />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>


            <Modal isOpen={addLandMarkLablesModal} backdrop={"blur"} onOpenChange={closeAddLandMarkLablesModal}>
                <ModalContent className="rounded-3xl border-2 border-org clos ">
                    {(closeAddLandMarkLablesModal) => (
                        <>
                            <ModalBody className="py-0 px-0 p-0">
                                <div className="px-4 py-4 mt-2">
                                    {/* <textarea className="vertical-lg w-100 border-2 border-org rounded-xl py-2 px-3 text-[14px]" name="" id="" placeholder="Tags"></textarea> */}
                                    <div>
                                        <div className="w-100 flex flex-wrap border-2 border-org rounded-md">
                                            <div className="w-fit flex flex-wrap gap-3">
                                                {selectedOptions.map((option, index) => (
                                                    <div key={index} className="bg-[#dfdfdf] px-3 text-[12px] flex items-center justify-center gap-1 font-semibold font-Outfit rounded-full" onClick={() => handleRemoveOption(index)}>
                                                        <p className="text-center p-0"> {option}</p>
                                                        <i class="fa-solid fa-xmark "></i>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="w-fit">
                                                <input
                                                    type="text"
                                                    value={inputValue}
                                                    onChange={handleInputChange}
                                                    onKeyPress={handleKeyPress}
                                                    className="text-[14px] w-fit px-2 py-1"
                                                    placeholder="Add your tags..."
                                                />
                                            </div>
                                        </div>


                                        {filteredOptions.length > 0 && (
                                            <div>
                                                {filteredOptions.map((option, index) => (
                                                    <div key={index} onClick={() => handleSelectOption(option.title)}>
                                                        {option.title}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex w-100 border-t-2 border-org">
                                    <div className="col flex justify-center py-1 border-e-2 border-org">
                                        <img className="max-w-[35px] object-contain" src="../../../public/IMG/close.png" alt="" />
                                    </div>
                                    <div className="col flex justify-center py-1">
                                        <img className="max-w-[27px]  object-contain" src="../../../public/IMG/done.png" alt="" />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Modal isOpen={destinationLoading} backdrop={"blur"} onOpenChange={closeDeleteModal}>
                <ModalContent className="rounded-3xl border-2 border-org close-btn-none">
                    {(closeDeleteModal) => (
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
                                    <div onClick={closeDeleteModal} className="col flex justify-center py-1 border-e-2 border-org pointer">
                                        <img className="max-w-[35px] object-contain" src="../../../public/IMG/close.png" alt="" />
                                    </div>
                                    <div onClick={handleDeleteDestinationData} className="col flex justify-center py-1 pointer">
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

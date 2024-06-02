import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Loader from './components/loader/Loader';
import Sidebar from './components/menu/Sidebar';
import Home from './pages/Home';
import AdminLogin from './pages/adminAuth/AdminLogin';
import Airport from './pages/airport/Airport';
import LocationMaster from './pages/allLocations/state/LocationMaster';
import BookingMaster from "./pages/booking/BookingMaster";
import Dashboard from './pages/dashboard/Dashboard';
import HourlyPackages from './pages/hourlyPackages/HourlyPackages';
import LocalPackages from './pages/localPackages/LocalPackages';
import LocalTrips from './pages/localTrips/LocalTrips';
import OutStation from './pages/outStation/OutStation';
import VehicleMaster from './pages/vehicle/VehicleMaster';
import UserMaster from "./pages/user/UserMaster";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOverLap, setmenuOverLap] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [deleteconformationModal, setDeleteconformationModal] = useState(false);

  // const [menuOverLap, setmenuOverLap] = useState(true)
  const [addPakagesModal, setAddPakagesModal] = useState(false);

  const userlocation = useLocation();
  const currentLocation = userlocation.pathname;

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform your asynchronous operation here

      // Simulate a delay (remove this line in a real application)
      await new Promise(resolve => setTimeout(resolve, 0));

      // Once the data is loaded, set loading to false
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleaddPakagesModal = () => {
    setAddPakagesModal(true);
  }
  const handleDeleteModal = () => {
    setDeleteconformationModal(true);
  }
  const closeDeleteModal = () => {
    setDeleteconformationModal(false);
  }

  return (
    <>
      <div className="w-100">
        {loading ?
          <Loader />
          :
          <>
            {currentLocation === "/" ?
              <Routes>
                <Route path="/" element={<AdminLogin />} />
              </Routes>
              :
              <div className='w-100 max-w-[100%] ease-in  flex gap-4 justify-between'>
                <div className={`col ease-in h-[100vh] flex flex-col ${menuOverLap ? " gap-0" : " gap-0"} justify-between `}>
                  <Sidebar menuOverLap={menuOverLap} setmenuOverLap={setmenuOverLap} setAddPakagesModal={setAddPakagesModal} currentLocation={currentLocation} />
                  <div className={`w-[100%]  ${menuOverLap ? "h-[calc(100vh-150px)]" : "h-[calc(100vh-175px)]"} mx-auto rounded-tl-lg overflow-hidden `}>
                    <Routes>
                      <Route path="/home" element={<Home />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/airport" element={<Airport />} />
                      <Route path="/local-packages" element={<LocalPackages handleDeleteModal={handleDeleteModal} closeDeleteModal={closeDeleteModal} />} />
                      <Route path="/outStation" element={<OutStation handleDeleteModal={handleDeleteModal} closeDeleteModal={closeDeleteModal} />} />
                      <Route path="/hourly-packages" element={<HourlyPackages handleDeleteModal={handleDeleteModal} closeDeleteModal={closeDeleteModal} />} />
                      <Route path="/local-trips" element={<LocalTrips setAddPakagesModal={setAddPakagesModal} addPakagesModal={addPakagesModal} />} />
                      <Route path="/vehicle" element={<VehicleMaster />} />
                      <Route path="/location" element={<LocationMaster />} />
                      <Route path="/booking" element={<BookingMaster handleDeleteModal={handleDeleteModal} closeDeleteModal={closeDeleteModal} />} />
                      <Route path="/user" element={<UserMaster handleDeleteModal={handleDeleteModal} closeDeleteModal={closeDeleteModal} />} />
                    </Routes>
                  </div>
                </div>
              </div>
            }
          </>
        }
      </div>


      <Modal isOpen={deleteconformationModal} backdrop={"blur"} onOpenChange={closeDeleteModal}>
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
                  <div onClick={handleDeleteModal} className="col flex justify-center py-1 pointer">
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

export default App

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginAction } from '../../redux/actions/auth';

export default function AdminLogin() {

    const [logInData, setLogInData] = useState({
        email: "admin@email.com",
        password: "Admin",
    })

    const [logInDataErr, setLogInDataErr] = useState({
        email: "",
        password: "",
    });
    // const user = useSelector((state) => state.auth);

    const [ShowPassword, setShowPassword] = useState(false);
    // const [logInData, setLogInData] = useState({
    //     email: "admin@email.com",
    //     password: "Admin",
    // })
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogInData({ ...logInData, [name]: value });
    }

    const validateEmail = () => {
        let flag = false;
        let err = {
            username: "",
            password: "",
        };
        if (logInData?.username === '') {
            err.username = ["Please enter your email"];
            flag = true;
        }
        if (logInData.password === '') {
            err.password = ["Please enter your password"];
            flag = true;
        } else if (logInData?.password?.length < 8) {
            err.password = ["Password must be greater then 8 character"];
            flag = true;
        }
        setLogInDataErr(err);
        return flag;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // if (logInData.username === 'admin' && logInData.password === 'password') {
        dispatch(loginAction(logInData));

        // setLogInData({ email: '', password: '' });
    }

    return (
        <>
            <div className="w-100 h-[100vh] bs-white relative">
                <div className="absolute top-50 start-50 z-50 translate-middle scale-up-ver-top">
                    <form className="border-2 border-org rounded-xl bs-white min-w-[400px] max-w-[400px]" onSubmit={(e) => handleLogin(e)}>

                        <div className="px-4 py-4 mt-1 flex flex-col gap-3">
                            <div className="col flex items-center border-2 border-org rounded-lg overflow-hidden px-3">
                                <img className='min-w-[30px] max-w-[30px]' src="../../../public/IMG/user.png" alt="" />
                                <input className='col w-100 py-[14px] px-3' placeholder='Username or Email' type="text"
                                    name="email"
                                    onChange={(e) => handleChange(e)}
                                    value={logInData?.email} />
                                {(logInDataErr?.email !== '') && (
                                    <small className="block text-red-500 text-xs">
                                        {logInDataErr.email}
                                    </small>
                                )}
                            </div>
                            <div className="col flex items-center border-2 border-org rounded-lg overflow-hidden px-3">
                                <img className='min-w-[30px] max-w-[30px]' src="../../../public/IMG/user-key.png" alt="" />
                                <input className='col w-100 py-[14px] px-3' placeholder='Password'
                                    type="password"
                                    name="password"
                                    onChange={(e) => handleChange(e)}
                                    value={logInData?.password} />
                                {(logInDataErr?.password !== '') && (
                                    <small className="block text-red-500 text-xs">
                                        {logInDataErr.password}
                                    </small>
                                )}
                            </div>
                        </div>
                        {/* <div className="absolute top-[5px] end-[10px]">
                            <i
                                className={`fa-regular tx-white fa-eye${isPasswordVisible ? "" : "-slash"}`}
                                onClick={handlePasswordVisibility}
                            ></i>
                        </div> */}

                        {/* <Link to="/airport"> */}
                        <div className="w-100 flex justify-center py-2.5 border-t-2 border-org pointer" onClick={(e) => handleLogin(e)}>
                            <img className="max-w-[27px]  object-contain" src="../../../public/IMG/done.png" alt="" />
                        </div>
                        {/* </Link>  */}
                    </form>
                </div>
                <div className="w-100 min-h-[50vh] max-h-[50vh] col bs-blue scale-up-ver-top rounded-b-3xl relative z-20 flex justify-between shadow-md rounded-r-">
                </div>
            </div>
        </>
    )
}


import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext)
    const  navigate  = useNavigate()
    const handleSocialLogin = (user) => {
       
        user()
            .then(res => {
                // console.log(res);
                if (res.user) {
                   
                    toast.success('User logged in successfully', {
                        position: 'top-center'

                    })
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);
                }

            }).catch(error => {
                toast.error( error);
            })
    }

    return (
        <>
            <div className="divider text-center text-white font-semibold  ">Continue with</div>
            <div className="flex justify-around ">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-ghost flex items-center justify-center text-white font-bold gap-1 pb-6  "><span className=" text-xl"><FcGoogle></FcGoogle></span >Login</button>
                <button
                    onClick={() => { handleSocialLogin(githubLogin) }}
                    className="btn btn-ghost flex items-center justify-center text-white font-bold gap-1 pb-6 "><span className="text-xl "> <BsGithub></BsGithub> </span> Github</button>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default SocialLogin;

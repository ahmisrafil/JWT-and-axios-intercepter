import { Link, Navigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";

const Login = () => {
    const [user, setUser] = useState();
    const {signIn} = useContext(AuthContext);

    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch(error=> console.log(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-4xl font-bold text-center mb-6 lg:mt-10">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Don't have an account </p> <Link to="/register"><span className="underline">Sign Up</span></Link>
                    </div>
                </div>
            </div>
            {
                user && <Navigate to="/"></Navigate>
            }
        </div>
    );
};

export default Login;
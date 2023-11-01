import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.log(error))


    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-4xl font-bold text-center  lg:my-2">Sign Up</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
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
                            
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Already have an account </p>
                        <Link to="/login"><span className="underline">Login</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
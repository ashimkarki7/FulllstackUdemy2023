import React from 'react';
import { useAuth } from "../../hooks/useAuth";
const Login: React.FC = () => {
    const { login } :any = useAuth();
    const handleForm = async(event: any) => {
        event.preventDefault() as any;

        const formData = new FormData(event.target); // Create a FormData object from the form
        // Access form values using FormData methods
        const email = formData.get('email');
        const password = formData.get('password');
        // const isChecked = formData.get('exampleCheck1') === 'on'; // Convert checkbox value to boolean
        // Use form values as needed
        if (email === 'booking@gmail.com' && password === 'qser') {
            await login({ email });
        }else {
            alert("Invalid username or password");
        }
    };
    return (
        <div className="customer-login-box">
            <div className="box box-default">
                <div className="box-body p-5">
                    <form
                        onSubmit={(values: any) => {
                            handleForm(values);
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-check">
                            <input
                                id="exampleCheck1"
                                name="exampleCheck1"
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                            </label>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

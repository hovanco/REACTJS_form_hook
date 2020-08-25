import React from 'react';
import {useForm} from 'react-hook-form';
import { BrowserRouter as Router,Link } from "react-router-dom";
import './App.css';

function App() {
  const { register, handleSubmit, errors} = useForm({mode:"onBlur"});
  const onSubmit = (values) => {
    console.log(values);
  }
  return (
    <Router>
      <div className="container">
        <header>SingUp Form</header>
          <form onSubmit={handleSubmit(onSubmit)}>
           <div className="row"> {/* row1 */}
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-field">
                  <input
                  type="text"
                  name="firstname"
                  ref={register({
                    required: "First Name is required",
                    minLength:{
                      value:2,
                      message: "First Name must be at least 2 characters"
                    }
                  })}
                  />
                  <label>First Name</label>
                  {errors.firstname && <span className="msage">{errors.firstname.message}</span>}
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-field">
                  <input
                  type="text"
                  name="lastname"
                  ref={register({
                    required: "User Name is required",
                    minLength:{
                      value:2,
                      message: "User Name must be at least 2 characters"
                    }
                  })}
                  />
                  <label>Last Name</label>
                  {errors.lastname && <span className="msage">{errors.lastname.message}</span>}
                </div>
              </div>
            </div> {/* end row1 */}
            <div className="input-field">
              <input
              type="number"
              name="phone"
              ref={register({
                required: "Phone Number is required",
                minLength:{
                  value:10,
                  message: "Phone Number must be at least 2 characters"
                }
              })}
              />
              <label>Phone Number</label>
              {errors.phone && <span className="msage">{errors.phone.message}</span>}
            </div>

            <div className="input-field">
              <input
                type="email"
                name="email"
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                    message: "Invalid email address"
                  }
                })}
              />
            <label>Email</label>
            {errors.email && <span className="msage">{errors.email.message}</span>}
            </div>
            
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-field">
                  <input
                    className="pswrd"
                      type="password"
                      name="password"
                      ref={register({
                        required: "Password is required",
                        minLength:{
                          value:6,
                          message: "Password must be at least 6 characters"
                        }
                      })}
                    />
                  <label>Password</label>
                  {errors.password && <span className="msage">{errors.password.message}</span>}
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-field">
                  <input
                    className="pswrd"
                      type="password"
                      name="confirPassword"
                      ref={register({
                        required: "Password is not match",
                        minLength:{
                          value:6,
                          message: "Password must be at least 6 characters"
                        }
                      })}
                    />
                  <label>Confirm Password</label>
                  {errors.confirPassword && <span className="msage">{errors.confirPassword.message}</span>}
                </div>
              </div>
            </div>
            <div className="button">
              <div className="inner"></div>
              <button>SING UP</button>
            </div>
            <div className="end-footer">
             <span>Already account?</span>
             <p><Link to="">Sing in</Link></p>
            </div>
            
          </form>
      </div>
    </Router>
  );
}
export default App;

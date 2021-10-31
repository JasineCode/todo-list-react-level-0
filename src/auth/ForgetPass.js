import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./../styles/auth.css"

const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"

function ForgetPasswordPage() {
    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML =
            `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card card-custom">
                    <div className="card-header">
                        <h3 style={{ marginTop: 15 }}>Forget Password</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square" ></i></span>
                            <span><i className="fab fa-google-plus-square" ></i></span>
                            <span><i className="fab fa-twitter-square" ></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-at" ></i></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Confirm Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send" className="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account ? <Link to="/register">
                                <a>Sign Up</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ForgetPasswordPage

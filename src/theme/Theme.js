

import { useEffect } from "react"
import SideBar from "../shared/SideBar"
import TopBar from "../shared/TopBar"
import "../styles/admin.css"

const cssCDN = "//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"


const Theme = ({children}) => {

    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML = 
        `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])

    return (
        <div className="home">
            <div className="container-fluid display-table">
                <div className="row display-table-row">
                    {/* SIDEBAR  */}
                    <SideBar />
                    {/* SIDEBAR/ */}
                    <div className="col-md-10 col-sm-11 display-table-cell v-align">
                        <div className="row">
                            {/* TOPBAR  */}
                            <TopBar />
                            {/* /TOPBAR */}
                        </div>
                        <div className="user-dashboard">
                            {/* PAGE CONTENT */}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme

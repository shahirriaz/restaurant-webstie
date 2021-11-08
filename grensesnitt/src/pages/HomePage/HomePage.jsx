import "./HomePage.css"
import React from 'react'
// import Header from "components/common/Header"
// import Header from "@/components/common/Header/Header"



//Code uses BEM convention to name CSS classes


function HomePage() {
    return (
        <div className="homepage">
             <Header />
            {/* <h1 className="homePage__heading">I am homepage</h1> */}
           
        </div>
    )
}

export default HomePage

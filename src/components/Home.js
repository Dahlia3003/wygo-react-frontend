import NavBar from "./NavBar/NavBar";
import React from "react";

const Home = () => {
    return (<div>
        <NavBar />
        <p>{localStorage.getItem('username')}</p>
        </div>
    );
}
export default Home;
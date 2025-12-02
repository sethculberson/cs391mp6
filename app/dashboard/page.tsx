"use client";
import getUserData from "../../lib/getUserData";
import addUserData from "@/lib/addUserData";
import {useState} from "react";

export default async function Dashboard() {
    const userData = await getUserData();
    const [name, setName] = useState<string>("");
    const [city, setCity] = useState<string>("");

    function handleNameInput(n : string) {
        setName(n);
    }
    function handleCityInput(c : string) {
        setCity(c);
    }
    function handleSubmit() {
        console.log("Submitting:", name, city);
        addUserData(name, city);
    }
    return (
      <>
        <h1>Dashboard</h1>
        {userData ? (
            <div>
                <p>Name: {userData.name}</p>
                <p>City: {userData.city}</p>
            </div>
        ) : (
            <>
                <input type="button" value={name} onChange={(e) => handleNameInput(e.target.value)}></input>
                <input type="button" value={city} onChange={(e) => handleCityInput(e.target.value)}></input>
            </>
        )}
      </>  
    );
}
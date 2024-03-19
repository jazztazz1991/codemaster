import { useState, useEffect } from "react"
import axios from "axios"
import { FaStar, FaRegStar } from "react-icons/fa";

export default function SavedBtn({ exercise }){
//  console.log("its been passed down",exercise._id)

 const [saved, setSaved] = useState(false)
 const [ error, setError] = useState("")

 useEffect(() => {
    const savedStatus = localStorage.getItem(`saved_exercise_${exercise._id}`)
    if (savedStatus === "true") {
        setSaved(true)
    }
 }, [exercise])

 const handleSaving = async () => {
    try {

        const userId = localStorage.getItem("userID");
         console.log("userid:",userId)
         const exerciseId= exercise._id;
         console.log("exerciseID",exerciseId)

        const response = await axios.post(`http://localhost:3001/auth/${userId}/${exerciseId}`)
        console.log("response" , response.data)

        if(response.data.message === "Exercise successfully saved!"){
            setSaved(true)
            localStorage.setItem(`saved_exercise_${exercise._id}`, "true")
        } else {
            setError("Failed to save.")
        }
    } catch(error){
        console.log(error)
    }
 }
    return(
        <div>
         <button className="text-yellow-400" onClick={handleSaving}> { saved ? <FaStar /> : <FaRegStar />}
            </button>
        </div>
    )

}
import { Button, FormControl, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { uploadDetailsApi } from "./services/allApi";
import { Link, useNavigate } from "react-router-dom";
import alldetails from "./Emptable";


const Employeedit = () => {
 const [employe,setEmploye]=useState({
    Id:'', Name:'',Email:'',status:''
 })
const navigate=useNavigate()












const handleUpload=async()=>{
    const{Id,Name,Email,status}=employe
    if(Id&&Name&&Email&&status){
try{   const response= await uploadDetailsApi(employe)
    if(response.status>=200&& response.status<300){
        setEmploye({...employe,Id:'',Name:'',Email:'',status})
        alert("sucessful")
        navigate("/")
    }
}     catch(err)  {
    console.log(err);
    
} // alert("working")


    }else{
        alert("fill the form completly")
    }
}

console.log(alldetails);



  return (
    <div className="flex flex-row justify-center items-center bg-black" style={{minHeight:"100vh"}} >
      <div className="flex  justify-center items-center bg-white rounded ">
       <form className="m-10">
        <h1 className="text-center font-bold">Employee Details</h1>
            <div className="m-3">
              <TextField id="outlined-basic" onChange={e=>setEmploye({...employe,Id:e.target.value})} label="ID" variant="outlined" className='w-100 ' />
            </div>
            <div className="m-3">
              <TextField id="outlined-basic" onChange={e=>setEmploye({...employe,Name:e.target.value})} label="Name" variant="outlined" className='w-100 ' />
            </div>
            
            <div className="m-3">
              <TextField id="outlined-basic"   type="email"  onChange={e=>setEmploye({...employe,Email:e.target.value})} label="Email" variant="outlined" className='w-100 '/>
            </div>
          
  <div className=' w-100'>
  <FormControl  margin="normal"  className="w-96 m-3">
  <TextField
    select
    label="Status"
    value={employe.status} // Use the correct state value
    onChange={(e) => setEmploye({ ...employe, status: e.target.value })}
    variant="outlined"
    fullWidth // Ensures the dropdown stretches to the full width of its container
  >
    <MenuItem value="active">Active</MenuItem>
    <MenuItem value="inactive">Inactive</MenuItem>
  </TextField>
</FormControl>
         



          </div>

         
         <Button onClick={handleUpload} variant="contained">submit</Button>
       </form>
       </div>

    </div>
  );
};

export default Employeedit;

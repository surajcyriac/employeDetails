import { useEffect, useState } from "react";
import { Button, IconButton,} from "@mui/material";
import { getDetailsApi, removeDetailApi } from "./services/allApi";
import Employeedit from "./Employeedit";
import { Link,useNavigate } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);
  const [alldetails, setalldetails] = useState([]);
  const navigate=useNavigate()

  const getAllDetails = async () => {
    try {
      const response = await getDetailsApi();
      setalldetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllDetails();
  }, [alldetails]);

  const deleteDetail=async(id)=>{
    const result =await removeDetailApi(id)
    // setDeleteVideoResponse(result)
      }
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          style={{ minHeight: "100vh" }}
          className="flex justify-center items-center bg-black"
        >
          <div  className="bg-slate-300 rounded p-5">
<div className="flex justify-between">
              <h3 className="text-center font-bold text-2xl">EMPLOYEE DETAILS </h3> <span><Link to={"/Add"} className="bg-blue-600 text-white p-2 rounded shadow-md">Add Employee</Link></span>
  
</div>            <table className="p-5 ">
              <thead>
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">UserName</th>
                  <th className="p-4">Email</th>
                  <th className="p-4"> Status</th>
                </tr>
              </thead>
              <tbody>
                {alldetails && alldetails.length > 0 ? (
                  alldetails.map((detail) => (
                    <tr key={detail?.id}>
                      <td className="p-4">{detail?.Id}</td>
                      <td className="p-4">{detail?.Name} </td>
                      <td className="p-4"> {detail?.Email}</td>
                      <td className="p-4">active</td>
                      <td className="">
                        {/* <Link to={"/Edit"}  className="bg-green-600 text-white p-2 m-2 rounded shadow-md">Edit</Link> */}
                        <Button onClick={() => navigate(`/Edit/${detail?.id}`)} variant="contained" color="success"  >
          Edit
          </Button>
                      </td>
                      <td>
                     
                        <Button onClick={()=>deleteDetail(detail?.id)} variant="contained" color="error">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div></div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

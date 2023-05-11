import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { getAllTaskCordinator } from "../../../DB/db";

const Coordinatorhome = () => {


  const navigate = useNavigate();
  const[data,setData] = useState([]);

  useEffect(()=>{
    load();
  },[])

  const load = async() =>{
    let rs = await getAllTaskCordinator();
    setData(rs);
  }

  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      
      {
        data.map((i)=>(
           
          <div className="max-w-sm py-6 relative rounded shadow bg-red-600     dark:bg-gray-800">
          <div className="px-6">
            <div className="w-20 h-20 mt-1 rounded-full absolute flex items-center justify-center bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
          <div className="border-t-2  px-6 pt-14 sm:mt-3 mt-8 border-gray-200 dark:border-gray-800">
            <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              {i.taskPlan.name}
            </p>
            <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
              {i.user.firstName}  {i.user.lastName}
            </p>

            <div className="space-x-4 mt-3">
              <button
                onClick={() => {
                  localStorage.setItem('taskId',i.taskPlan._id)
                  navigate("/taskhistory")
                }}
                className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-lg text-white "
              >
                Task History
              </button>
            </div>
          </div>
        </div>


        ))
      }
           
      </div>
    </>
  );
};

export default Coordinatorhome;

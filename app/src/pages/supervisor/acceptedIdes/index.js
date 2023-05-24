import React, { useState, useEffect } from "react";
import { acceptedIdeas, deleteIdea, downloadFile, getSubmitedTasks_Plans, updateIdea } from "../../../DB/db";
import { useNavigate } from "react-router-dom";
const AcceptedIdeas = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let res = await acceptedIdeas();
    setData(res);
   
  };


  const updateIDEA = async (id)=>{
    await updateIdea(id,'0')
    loadData()
  }


  const deleteIDEA = async (id)=>{
    await deleteIdea(id)
    loadData()
  }


  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Ideas-Accepted
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={() => navigate("/addidea")}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add New Idea
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Student
                    </th>
                  
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     Idea File
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     Solution File
                    </th>

                    
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                    
                    </th>

                    
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                     
                    </th>
                  
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((person) => (
                    <tr key={person.ob1._id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.ob1.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.ob2.firstName} {person.ob2.lastName}
                      </td>
                   
                      <td 
                       onClick={async()=>await downloadFile(person.ob1.proposalFile)}
                      className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.ob1.proposalFile}
                      </td>

                      <td 
                        onClick={async()=>await downloadFile(person.ob1.solFile)}
                       className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.ob1.solFile}
                      </td>
                      

                      {
                        person.ob1.status === 'ok' || person.ob1.status === undefined?
                         <>
                         <button 
                        onClick={()=>updateIDEA(person.ob1._id)}
                       className="whitespace-nowrap px-3 py-2 mt-2 text-sm text-white bg-green-400 rounded -lg">
                         Accept
                      </button>
                     
                      <button 
                        onClick={()=>deleteIDEA(person.ob1._id)}
                       className="whitespace-nowrap px-3 py-2 mt-2 text-sm text-white bg-red-400 rounded -lg">
                        Reject
                      </button>
                        </>:<>
                        <td 
                       
                       className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Accepted 
                      </td>
                        <td></td>
                        </>
                      }
                     

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default AcceptedIdeas;
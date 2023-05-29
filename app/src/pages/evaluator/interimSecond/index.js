import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateInterim } from "../../../DB/db";

const SecondInterim = () => {
  const navigate = useNavigate();
  const [performance, setperformance] = useState(0);
  const [formValues, setformValues] = useState({
    peroformanceIndiactor:"",
    range:"",
    systemSpec:"",
    designSpec:"",
    standardTech:"",
    presentSkill:"",
    domainKnowledge:"",
    comments:"",

    progress:"",
    demonstration:"",
    conformance:"",
    innovation:"",
    presentation:"",
    organization:"",
    result:"",
    integration:""
  })
 

  const handleProgressed = (params) => setformValues({...formValues,progress:params.target.value});
  const handledemonstration = (params) => setformValues({...formValues,demonstration:params.target.value});
 

 
  const handlechange = (params) => {
    let range = params.target.value;
    setperformance(range/20)
     setformValues({...formValues,range:range / 20})
  };

  const handlePerformance = (params) => { 

    setformValues({...formValues,peroformanceIndiactor:params.target.value})
 
   }
  
   const handlesystemSpec = (params) => {  
    setformValues({...formValues,systemSpec:params.target.value})

    }
  

     const handleStandard = ( params) => {
    setformValues({...formValues,standardTech:params.target.value})
      
       }

       const handlePresentation = (params) => {  
    setformValues({...formValues,presentSkill:params.target.value})

          }

          const handledomainKnowledge = (params) => { 
    setformValues({...formValues,domainKnowledge:params.target.value})

           }
           const handleComments = (params ) => {  
            setformValues({...formValues,comments:params.target.value})


            }


            const submit = async()=>{
            
             let res = await updateInterim(localStorage.getItem('taskPlanId'),formValues.peroformanceIndiactor,formValues.range,
             formValues.systemSpec,formValues.designSpec,formValues.standardTech,formValues.domainKnowledge,
              formValues.comments,formValues.progress,formValues.demonstration,formValues.conformance,formValues.presentSkill,
              formValues.organization,formValues.standardTech,formValues.result,formValues.integration
             )
             console.log('res',res)
            }



  return (
    <>
      <h1 className="text-start font-semibold text-xl ">Interim 2nd Form</h1>
      <div className="max-w-md mx-auto mt-6">
      <div className="mb-4">
          <label htmlFor="performance">Performance Indicator</label>
          <select
            id="performance"
            onChange={(event)=>handlePerformance(event)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>Exemplary</option>
            <option>Satisfactory</option>
            <option>Satisfactory with Few Changes</option>

            <option>Unsatisfactory</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="range">Range</label>
          <input
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            id="range"
            defaultValue={0}
            type="range"
            onChange={(event) => handlechange(event)}
          />
          {performance}
        </div>
        <div className="mb-4">
          <label htmlFor="system-spec">System Specification</label>
          <input 
            onChange={(e)=>handlesystemSpec(e)}
            type="text"
            id="system-spec"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="system-spec">Project Progress</label>
          <input
            type="text"
            id="proj-prog"
            onChange={(e)=>handleProgressed(e)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="standard-techniques">
            Use of Standard Techniques
          </label>
          <input
          onChange={(e)=>handleStandard(e)}
            type="text"
            id="standard-techniques"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="demonstration">Demonstration</label>
          <input
            onChange={(e)=>handledemonstration(e)}
            type="text"
            id="demonstration"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="presentation-skills">Presentation Skills</label>
          <input
          onChange={(e)=>handlePresentation(e)}
            type="text"
            id="presentation-skills"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="domain-knowledge">Domain Knowledge</label>
          <input
          onChange={(e)=>handledomainKnowledge(e)}
            type="text"
            id="domain-knowledge"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comments">Comments</label>
          <textarea
             onChange={(e)=>handleComments(e)}
            id="comments"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="space-x-7">
          <button 
           onClick={()=>submit()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            Submit
          </button>
          <button
            onClick={() => navigate("/evaluatorinterims")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondInterim;

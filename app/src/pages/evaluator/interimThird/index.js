import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateInterim } from "../../../DB/db";

const Thirdinterim = () => {
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
    const handleconformance = (params) => setformValues({...formValues,conformance:params.target.value});
    const handleresult = (params) => setformValues({...formValues,result:params.target.value});
  
    const handleinnovation = (params) => setformValues({...formValues,innovation:params.target.value});
    const handlpresentation = (params) => setformValues({...formValues,presentation:params.target.value});
    const handleintegration = (params) => setformValues({...formValues,integration:params.target.value});
  
    
    const handleorganization = (params) => setformValues({...formValues,organization:params.target.value});
   
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
      const handledesignSpec = ( params) => {  
      setformValues({...formValues,designSpec:params.target.value})
  
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
      <h1 className="text-start font-semibold text-xl ">Final interim form</h1>
      <div className="max-w-md mx-auto mt-6">
        <div className="mb-4">
          <label htmlFor="performance">Performance Indicator</label>
          <select
             onChange={(event)=>handlePerformance(event)}
            id="performance"
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
          <label htmlFor="spec-confor">Specification Conformance</label>
          <input
           onChange={(event) => handleconformance(event)}
            type="text"
            id="spec-confor"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="origin-inno">Originality / Innovation</label>
          <input
           onChange={(event) => handleinnovation(event)}
            type="text"
            id="origin-inno"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sys-inn">System Integration</label>
          <input
             onChange={(event) => handleintegration(event)}
            type="text"
            id="sys-inn"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="presentation">Presentation </label>
          <input
           onChange={(event) => handlePresentation(event)}
            type="text"
            id="presentation"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="demonstration">Demonstration</label>
          <input 
            onChange={(event) => handledemonstration(event)}
            type="text"
            id="demonstration"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="domain-knowledge">Domain Knowledge</label>
          <input
           onChange={(event) => handledomainKnowledge(event)}
            type="text"
            id="domain-knowledge"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="org-report">
            Organization and Clarity of the report
          </label>
          <input 
            onChange={(event) => handleorganization(event)}
            type="text"
            id="org-report"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tech-spec">Technical Specifications</label>
          <input 
           onChange={(event) => handleStandard(event)}
            type="text"
            id="tech-spec"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="result">Results and Conclusion</label>
          <input 
           onChange={(event) => handleresult(event)}
            type="text"
            id="result"
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comments">Comments</label>
          <textarea
             onChange={(event) => handleComments(event)}
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

export default Thirdinterim;

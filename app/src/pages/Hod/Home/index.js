import React,{useEffect,useState} from 'react'
import {  adminHome, adminIdeas } from '../../../DB/db';
import { useNavigate } from "react-router-dom";

export default function Hodhome() {
   
    const navigate = useNavigate();
    const [data,setData] = useState([])
    const [data2, setData2] = useState([]);

  
    useEffect(()=>{
     load()     
    },[])

    const load = async()=>{
       let rs = await adminHome();
       setData(rs)
       let idea = await adminIdeas();
       setData2(idea);
        console.log('idea',idea)
    }

  return (
    <>

<div className='flex flex-wrap mt-3 '>
        
{
    data.map((i)=>(
        <>
        <div 
        onClick={()=>{
          localStorage.setItem('m1Id',i.proposal.member1)
          localStorage.setItem('m2Id',i.proposal.member2)
          navigate('/projectdetail')
        }}
        class="w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
  <div class="p-5">
      <a >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
           {i.proposal.title}
          </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {i.std1.firstName} {i.std1.lastName} <br/>
        {i.std2.firstName} {i.std2.lastName} <br/>
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{i.user.firstName} {i.user.lastName}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
       {
        i.ev !== null? <>{i.ev.firstName} {i.ev.lastName}</>:''
       }
      </p>
    
  </div>
</div>
        </>
    ))
}

</div>
  
<div className="rounded mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data2.map((i) => (
          <>
            <div className="max-w-sm rounded shadow py-7  bg-gray-800">
              <div
                onClick={() => {
                  localStorage.setItem('m1Id',i.ob2._id)
                  localStorage.setItem('m2Id',i.ob2._id)
                  navigate('/projectdetail')
                  //  localStorage.setItem("ideaId", i.ob1._id);
                  //  localStorage.setItem("sid1", i.ob2._id);
                  //  navigate("/idea-tasks");
                }}
                className="px-8 flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-100">
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
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-bold leading-10 text-center mt-6 text-gray-800 dark:text-gray-100">
                  {i.ob1.title}
                </p>
                <p className="text-base sm:text-lg leading-9 text-center mt-4 text-gray-500 dark:text-gray-400">
                  {i.ob2.firstName} {i.ob2.lastName}
                </p>
               
              </div>

             
            </div>
           
          </>
        ))}
      </div>


    </>
  )
}

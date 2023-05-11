import React,{useEffect,useState} from 'react'
import Navbar from '../../../components/navbar'

import { adminHome } from '../../../DB/db';

export default function Hodhome() {

    const [data,setData] = useState([])
    
  
    useEffect(()=>{
     load()     
    },[])

    const load = async()=>{
       let rs = await adminHome();
       setData(rs)
       console.log('rs',rs)
    }

  return (
    <>

<div className='flex items-center justify-center justify-evenly mt-3 '>
        
{
    data.map((i)=>(
        <>
        <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
  <div class="p-5">
      <a >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project title</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {i.std1.firstName} {i.std1.lastName} <br/>
        {i.std2.firstName} {i.std2.lastName} <br/>
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{i.user.firstName} {i.user.lastName}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{i.ev.firstName} {i.ev.lastName}</p>
      {/* <button 
      onClick={()=>navigate('/projectdetail')}
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button> */}
  </div>
</div>
        </>
    ))
}

</div>

    </>
  )
}

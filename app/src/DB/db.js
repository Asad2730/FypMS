import axios from 'axios';


const URL = `http://localhost:8000/api/`

export const loginUser = async(email,password) => {
    try{
    
        let json = {email,password}
        let response = await axios.post(`${URL}users/login`,json)
        let{_id,role} = response.data;
        localStorage.setItem('Id',_id);
        console.log('ok',role)
        return role;
      
      }catch(ex){
       console.log('Error:',ex)
      }
}




export const addUser = async(firstName,lastName,email,password,role,profileImage)=>{
  try{
   let data = new FormData();
   data.append('firstName',firstName) 
   data.append('lastName',lastName) 
   data.append('password',password)
   data.append('email',email)
   data.append('role',role)
   data.append('profileImage',profileImage)

    let response = await axios.post(`${URL}users/`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } })

   return response.data;
  }catch(ex){
    console.log('Error:',ex)
  }

}


export const users = async()=>{
   try{
       
    let response = await axios.get(`${URL}users/`)
    return response.data;
   }catch(ex){
    console.log('Error:',ex)
   }
}


export const getSingleUser = async(id)=>{

  try{   
    let response = await axios.get(`${URL}users/${id}`)
    return response.data;
   }catch(ex){
    console.log('Error:',ex)
   }
}


export const updateUser = async(id,firstName,lastName,email,password,role,profileImage)=>{
  try{
   let data = new FormData();
   data.append('firstName',firstName) 
   data.append('lastName',lastName) 
   data.append('password',password)
   data.append('email',email)
   data.append('role',role)
   data.append('profileImage',profileImage)
   
   console.log('profileImage',profileImage)
  let response = await axios.put(`${URL}users/${id}`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } })
   
    console.log('DATA',response.data)
   return response.data;
  }catch(ex){
    console.log('Error:',ex)
  }

}



export const getUserByRole = async(role)=>{

  try{
    
    let response = await axios.get(`${URL}users/getSupervisors/${role}`)
    console.log('res',response.data)
    return response.data;
   }catch(ex){
    console.log('Error:',ex)
   }
}



export const addProposal = async(title,member1,member2,supervisorId,proposalFile)=>{
  try{
   let data = new FormData();
   data.append('title',title) 
   data.append('member1',member1) 
   data.append('member2',member2)
   data.append('supervisorId',supervisorId)
   data.append('proposalFile',proposalFile)
   data.append('uid',localStorage.getItem('Id'))
   
  let response = await axios.post(`${URL}proposal/`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } })
   
   console.log('DATA',response.data)

   return response.data;
  }catch(ex){
    console.log('Error:',ex)
  }

}


export const getUserPropsals = async()=>{

  try{
  
    let response = await axios.get(`${URL}proposal/${localStorage.getItem('Id')}`)
    console.log('res',response.data)
    return response.data;
   }catch(ex){
    console.log('Error:',ex)
   }
}


export const downloadFile = async (fileName) => {
  try {
    const response = await axios.post(`${URL}proposal/downloadFile/${fileName}`, { responseType: 'blob' });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    return response.data;
  } catch (ex) {
    console.log('Error:', ex);
  }
};



export const getProposals = async (status) => {
  try {
    const response = await axios.get(`${URL}proposal/getProposals/${status}`);   
    return response.data;
  } catch (ex) {
    console.log('Error:', ex);
  }
};


export const changeProposalStatus = async (id,status) => {
  try {
    let obj = {'id':id,'status':status};
    const response = await axios.put(`${URL}proposal/`,obj);   
    return response.data;
  } catch (ex) {
    console.log('Error:', ex);
  }
};


export const addEvaluator = async(id,evid,status)=>{

  try {
    let obj = {'id':id,'status':status,'evid':evid};
    const response = await axios.put(`${URL}proposal/addEvaluator`,obj);   
    return response.data;
  } catch (ex) {
    console.log('Error:', ex);
  }
}






export const addIdea = async(title,proposalFile)=>{
  try{
    let data = new FormData();
    data.append('title',title);
    data.append('proposalFile',proposalFile);
    data.append('uid',localStorage.getItem('Id'));
    let res = await axios.post(`${URL}idea/`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } })

     console.log('response:',res.data);
    return res.data;
  }catch(ex){
    console.log('Error:', ex);
  }

}


export const getIdeas = async()=>{
    try{
      let res = await axios.get(`${URL}idea/`)
      return res.data; 
    }catch(ex){
      console.log('Error:', ex);
    }
}


export const addTask = async(name,asgto,description,deadLine,proposalFile,proposalId)=>{

  try{
   
    let data = new FormData();
    data.append('name',name);
    data.append('proposalFile',proposalFile);
    data.append('asgby',localStorage.getItem('Id'));
    data.append('asgto',asgto)
    data.append('description',description)
    data.append('deadLine',deadLine)
    data.append('proposalId',proposalId)

   let res =await axios.post(`${URL}taskplan`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } }
    )


    return res.data;

  }catch(ex){
    console.log(ex);
  }
}



export const getTaskById = async(id) =>{
 try{
  let res = await axios.get(`${URL}taskplan/${id}`);
 
  return res.data;
 }catch(ex){
  console.log(ex)
 }

}


export const deleteTask = async(id)=>{
  try{
   let res = await axios.delete(`${URL}taskplan/${id}`);
   return res.data;
  }catch(ex){
    console.log(ex)
  }
}


export const editTask = async(name,asgto,description,deadLine,proposalFile,tid)=>{

  try{
   
    let data = new FormData();
    data.append('name',name);
    data.append('proposalFile',proposalFile);
    data.append('asgby',localStorage.getItem('Id'));
    data.append('asgto',asgto)
    data.append('description',description)
    data.append('deadLine',deadLine)
   
   let res =await axios.put(`${URL}taskplan/${tid}`,data,
    { headers: {'Content-Type': 'multipart/form-data'  } }
    )


    return res.data;

  }catch(ex){
    console.log(ex);
  }
}


export const singleTask = async(id)=>{

  try{
   let res =await axios.get(`${URL}taskplan/singleTask/${id}`)
    return res.data;
  }catch(ex){
    console.log(ex);
  }
}


export const addRemarks = async(to,detail)=>{
  try{
    let obj={from:localStorage.getItem('Id'),to,detail}
     let res =await axios.post(`${URL}remarks/`,obj)
     return res.data;
  }catch(ex){
    console.log(ex)
  }
}


export const getRemarks = async()=>{
  try{
   
     let res =await axios.get(`${URL}remarks/${localStorage.getItem('Id')}`)
     return res.data;
  }catch(ex){
    console.log(ex)
  }
}

export const deleteRemarks = async(id)=>{
  try{
   
     let res =await axios.delete(`${URL}remarks/${id}`)
     return res.data;
  }catch(ex){
    console.log(ex)
  }
}


export const getStudentTasks = async()=>{

  try{
   let res =await axios.get(`${URL}taskplan/stdTask/${localStorage.getItem('Id')}`)
    return res.data;
  }catch(ex){
    console.log(ex);
  }
}



export const updateTaskStatus = async(id,status)=>{
  
  try{
    let res = await axios.post(`${URL}taskplan/update/${id}`,{'status':status})
    return res.data;
  }catch(ex){
    console.log(ex);
  }
}


export const getAllTaskCordinator = async()=>{
  try{
   let res = await axios.get(`${URL}taskplan`);
   return res.data;
  }catch(ex){
   console.log(ex)
  }
}


export const getTaskHistory = async(id)=>{
  try{
   let res = await axios.get(`${URL}taskplan/taskHistory/${id}`);
   return res.data;
  }catch(ex){
   console.log(ex)
  }
}

export const allRemarks = async(to,detail)=>{
  try{
    
     let res =await axios.get(`${URL}remarks/`)
     return res.data;
  }catch(ex){
    console.log(ex)
  }
}


export const getEvaluatorProposals = async()=>{

  try{
    let uid = localStorage.getItem('Id');
   let r = await axios.get(`${URL}proposal/getEvaluator/${uid}`)
   return r.data;
  }catch(ex){
    console.log(ex)
  }
}


export const getProposalsTask = async()=>{
  try{
    const pid = localStorage.getItem('Pid')
    let res = await axios.get(`${URL}taskplan/getProposalsTask/${pid}`);
    return res.data;
  }catch(ex){
    console.log('Error',ex)
  }
}


export const updateTask = async(id,marks,remarks)=>{
    
   try{

    let ob = {'marks':marks,'remarks':remarks}
    let res = await axios.put(`${URL}taskplan/updateTask/${id}}`,ob);
    return res.data;
   }catch(ex){
    console.log('rs',ex)
   }

}


export const adminHome = async ()=>{
  try{

    console.log(`${URL}proposal/admin`)
    let rs = await axios.get(`${URL}proposal/getx/accept2`)
    return rs.data;
  }catch(ex){
    console.log(ex)
  }
}
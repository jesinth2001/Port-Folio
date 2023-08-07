const apiRequest =async (url='',options=null)=>
{
 try {
    
   const response= await fetch(url,options);
 

 }
 catch(err)
 {

  return "error"
 }
 
}
export default apiRequest;
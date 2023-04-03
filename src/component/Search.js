import { useState,useEffect } from "react"

function Search(){
    const [data, setdata] = useState([])
    const [filterdata,setfilterdata]=useState([]);
    const [query,setquery]=useState('');




    useEffect(()=>{
        const getuserdata=async()=>{
         const reqdata=await fetch("http://localhost:3000/student")
         const resdata =await reqdata.json()
         setdata(resdata)
         setfilterdata(resdata)
        }
        getuserdata();

     },[])
     const handelsearch=(event)=>{
        const getsearch=event.target.value
       
        //console.warn(getsearch)
        if(getsearch.length>0){
            const getsearch=event.target.value
            const searchdata=data.filter((item)=>item.name.toLowerCase().includes(getsearch));
            setdata(searchdata)
            console.warn(searchdata)
        }else{
            setdata(filterdata)
        }
        setquery(getsearch)

     }
    return(
        <div>
            <h1>this is home search</h1>
            <input type="search" value={query} onChange={(e)=>handelsearch(e)} className="form-control w-50 offset-2" placeholder="search"/>
      
       

        
        </div>
    )
}export default Search;
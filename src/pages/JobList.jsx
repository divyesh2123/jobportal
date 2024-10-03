import React, { useEffect, useState } from 'react'
import authFetch from '../authentication/interseptor'

export default function JobList() {

    const [data,setData]= useState([]);

    useEffect(()=>{
        authFetch.get("/jobs?myjobs=1").then(y=> {
            setData(y.data)
        
        })
    },[]);

    console.log(data)
  return (
    <div>JobList</div>
  )
}

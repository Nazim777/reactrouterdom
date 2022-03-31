import React, { useState,useEffect } from 'react'

const Postnews = () => {
    const [data,setdata]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setdata(resp)
            })
        })
    },[])

  return (
    <div>
        <div className="container">
            <div className="row">
                {
                    data.map((e)=>{
                        return(
                            <div className="col-md-4">




<div className="card" style={{width:'18rem'}}>
  <img src=' ' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>
    <p className="card-text">{e.body}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>








                            </div>
                        )
                    })
                }
            </div>
        </div>
        
      
    </div>
  )
}

export default Postnews

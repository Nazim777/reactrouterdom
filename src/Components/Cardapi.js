import React,{useState,useEffect} from 'react'

const Cardapi = () => {
    const [card,setcard] = useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setcard(resp)
            })
        })
    })
  return (
    <div>
        <div className="container">
            <div className="row">
                {
                    card.map((e)=>{
                        return(
                            <div className="col-md-4">






<div className="card" style={{width:'18rem'}}>
  <img src={e.thumbnailUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>
    <p className="card-text">{e.body}</p>
    <a href={e.url} className="btn btn-primary">Go somewhere</a>
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

export default Cardapi

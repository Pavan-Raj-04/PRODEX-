import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {

  let [apidata, setApiData] = useState([])

  let fetchapi = async ()=>{
    let response = await axios.get('http://localhost:4000/products')
    setApiData(response.data)
  }
  useEffect(()=>{
    fetchapi()
  },[])

  let navigate = useNavigate()
  let viewMore = (id)=>{
    navigate(`/viewmore/${id}`)
  }

//todo Filter catagory

  let [filterdeArray, setFilteredArray] = useState([])

  useEffect(()=>{
    setFilteredArray(apidata)
  },[apidata])

  let allCat = ["All", "men's clothing", "jewelery","electronics","women's clothing"]
  let handleCatBtn = (e)=>{
    let btnName = e.target.innerText

    if(btnName === 'All'){
      setFilteredArray(apidata)
    }else{
      let res = apidata.filter((elem)=>{
      return elem.category === btnName
    })
    setFilteredArray(res)
    }
  }

  return (
    <>
        <div className="products">
          <div className="catagory">
            <ul>
              {allCat.map((elem,ind)=>{
                return(
                  <li key={ind}><button onClick={handleCatBtn}>{elem}</button></li>
                )
              })}
            </ul>
          </div>
          <div className="con">
            {filterdeArray.map((elem,index)=>{
              let {id, title, image, price} = elem
              return(
                <div key={index} className="card">
                  <div className="img">
                    <img src={image} alt="" />
                  </div>
                  <div className="title">{title}</div>
                  <div className="price">{Math.floor(price*95)}.00/-</div>
                  <div><button onClick={()=>viewMore(id)}>View more</button></div>
                </div>
              )
            })}
          </div>
        </div>
    </>
  )
}

export default Landingpage

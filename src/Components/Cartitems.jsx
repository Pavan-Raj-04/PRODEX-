import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cartitems = () => {


  let [apiData, setApiData] = useState([])

  let fetchData = async()=>{
    let response = await axios.get('http://localhost:4000/cartitems')
    console.log(response.data)
    setApiData(response.data)

  }
  useEffect(()=>{
    fetchData()
  },[])

  let total = apiData.reduce((acc,elem)=>{
    return acc + Math.floor((elem.price)*95)
  }, 0)

  return (
    <>
      <div className="cart-items">
        <div className="table">
          <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Catrgory</th>
                <th>Rating</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((elem,index)=>{
                let {id,title, price, description, category, image, rating} = elem
                return(
                  <>
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{title}</td>
                      <td>{category}</td>
                      <td>{rating?.rate}</td>
                      <td>{Math.floor(price*95)}</td>
                    </tr>
                  </>
                )
              })}
    
            </tbody>
          </table>
          <h2>{`Subtotal (${apiData.length} items): ${total}`}</h2>
        </div>
      </div>        
    </>
  )
}

export default Cartitems

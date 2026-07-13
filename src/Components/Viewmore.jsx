import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Viewmore = () => {

   let params = useParams()
   let paramsId = params.id

   let [onePro, setOnePro] = useState({})

   let fetchapi = async()=>{
    let response = await axios.get(`http://localhost:4000/products/${paramsId}`)
    setOnePro(response.data)
    // console.log(response.data)
   }
   useEffect(()=>{
    fetchapi()
   },[paramsId])

   let {id,title, price, description, category, image, rating } = onePro

   let navigate = useNavigate()
   let close = ()=>{
    navigate('/')
   }
//todo Logic for delete product
   let handleDelete =()=>{
    let bool = window.confirm('Do you want to delete this product..?')

    if(bool){
        axios.delete('http://localhost:4000/products/${paramsId}')
        // alert('Product Deleted')
        toast.error("product deleted")
        navigate('/')
    }else{
        // alert('Product Not Deleted')
        toast.success('Product not deleted')
    }
    
   }
//todo Add the product to card items

   let addCart = ()=>{
    // alert('working')
    let bool = window.confirm('Do you want to add this product to cart ?')
        if(bool){
            axios.post('http://localhost:4000/cartitems',onePro)
            alert('Prodect added to cart Successfuly')
        }else{
           alert('Add to cart Failed...') 
        }
   }

  return (
    <div>
        <div className="viewmore-card">
            <div className="con">
            <div className="left">
                <div className="imgs">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="close" onClick={close}>✖️</div>
                <div className="cat">Category:<span style={{color:'#d78900'}}>{category}</span></div>
                <div className="title">{title}</div>
                <div className="desc">{description}</div>
                <div className="price">Starting at Rs. <span style={{color:'#fca309', fontSize:'30px',fontWeight:'bolder'}}>{Math.floor(price*95)}.00/</span></div>
                
                <div className="rating">
                    <div className="rate"><div className='star'>⭐</div>{rating?.rate}</div>
                    <div className="count">{`(${rating?.count})`}</div>
                </div>
                <div className="more">
                    <button onClick={addCart}>Add to cart</button> 
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Viewmore

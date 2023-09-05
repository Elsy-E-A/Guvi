import React, {useContext, useState} from 'react'
import { CartContext } from './CartContext'

function Detail() {
  const [visible,setVisible]=useState('false');
    const {data}=useContext(CartContext);
    const [count,setCount]=useState(0);
    const [tprice,setTprice]=useState(0);
    const [status, setStatus] = useState([1,1,1,1,1]);
    const initial=data.map ((value,index) =>{return value.price});
       const [price, setPrice] = useState(initial);
       const[dcart,setDcart]=useState(null);
    const [total,setTotal]=useState(0);
console.log(price);

    const add = (event,id) => {
      setCount(count=>count+1);
      setStatus({...status,[event.target.id]:status[event.target.id]+1});
      setPrice({...price,[event.target.id]:price[event.target.id]+initial[event.target.id]});
      setTprice(tprice=>tprice+initial[event.target.id]);
      
    }
    const minus = (event,key) => {
      if(status[event.target.id]>1 && count>0){
        setCount(count=>count-1);
      setStatus({...status,[event.target.id]:status[event.target.id]-1});
      setPrice({...price,[event.target.id]:price[event.target.id]-initial[event.target.id]});
      setTprice(tprice=>tprice-initial[event.target.id]);
      }
      else
      {
        setStatus({...status,[event.target.id]:status[event.target.id]});
        setPrice({...price,[event.target.id]:price[event.target.id]});
       
      }
     }
     const addCart=(event,id)=>{
setCount(count=>count+1);
let tqty=status[event.target.id]*initial[event.target.id]
setTprice(tprice=>tprice+initial[event.target.id]);

     }
     const remCart=(event,id)=>{
      if(status[event.target.id]>1 && count>0){
      setCount(count=>count-1);
      setStatus({...status,[event.target.id]:status[event.target.id]-1});
      setPrice({...price,[event.target.id]:price[event.target.id]-initial[event.target.id]});
     
      let tqty=status[event.target.id]*initial[event.target.id]

      setTprice(tprice=>tprice-initial[event.target.id]);
      }
      else
      {
       alert('Product is no more in cart')
       set
      }
     }

     const cart=()=>{
      console.log(count);
      if(count<1)
      {
        return(
       
          <div className="text-center">
          <h5  className="card-text">Your Cart is empty</h5>
           <br></br>
          Please add product to cart
       
      </div>
     )
      }
      else
      {
        return(
          <div className="text-center">
          <h5  className="card-text">The selected Product Quantity and Price is as follows,</h5><b>
          Total Quantity : {count}</b>
           <br></br>
           Total Amount : {tprice}<br></br>
   
      </div>
        )
      }
     }
    const fdata= data.map((value,index) => 
   
  { 
    return (
      <div className='container'>
                
      <div className="card">
      <div className='row'> 
                  <div className='col'>
                            <img className="card-img-top" src={value.thumbnail} alt="..." /></div>
                            <div className='col'>
                            <div className="card-body">
                                <div className="text-center">
                                    <h5  className="card-text">{value.title}</h5><b>
                                    {value.brand}</b>
                                     <br></br>
                                     {value.description}<br></br>
                                 
                                </div>
                                            
                      </div></div>
                      <div className='col'>
                            
                                <div className="text-center" > 
                                <button id={index} class="btn btn-outline-dark" onClick={(event,id)=>add(event,id)}>+
                                </button>
                                &nbsp;&nbsp;&nbsp; {status[index]}&nbsp;&nbsp;&nbsp;
     <button class="btn btn-outline-dark" id={index}  onClick={(event,id)=>minus(event,id)}>-</button>
     <div className="card-footer">
    
     <h6 className='card-text' style={{textAlign:'left',alignItems:'center'}}>
     <div id='price'> <h6 className='card-text' > Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {initial[index]}   <br></br>
SHIPPING : FREE <br></br>
 TOTAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {price[index]}</h6>  </div>
<br></br>
  
    <br></br> </h6>
    <button className='btn btn-primary' id={index}  onClick={(event,id)=>remCart(event,id)}>Remove from Cart</button>
    </div> </div>
      </div></div></div></div>
   
    )
    })
    
  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Shopping Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                   
                        <button className="btn btn-outline-dark" onClick={()=>cart()}>
                        <i className="fa fa-shopping-cart"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>
                  
                </div>
            </div></nav>
             <footer className="py-5 bg-light">
          <div className='cardItem'>
            <div></div>
         {visible=='false'?cart():alert('hi')}
          </div>
          </footer>
            <section className="py-5">
                
          <div className='col'>  {fdata};
                        
          </div>
          <div></div>
        </section>
       
  
    </div>
    
  )
}

export default Detail
import React,{useState,useEffect} from "react"
import {Link,useNavigate} from 'react-router-dom';
import {message} from 'antd';
const Header=()=>{
  const[loginUser,setLoginUser]=useState('')
  const navigate=useNavigate();

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    if(user){
      setLoginUser(user)
    }


  },[])
  const logoutHandler=()=>{
    localStorage.removeItem('user');
    message.success('Logout Successfully');
    navigate('/login');


  }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <div className="adjuster" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/">Expense Management</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <div style={{display:"flex",gap:"2px"}}><li className="nav-item"><p className="nav-link active">
         {loginUser && loginUser.name}</p>
        </li>
        <li className="nav-item">
         <button to='/user' className="btn btn-primary" aria-current='page' onClick={logoutHandler}>Logout</button>
        </li></div>
        
        
      </ul>
      </div>
 
  </div>
</nav>
        </>
    )
}
export default Header;
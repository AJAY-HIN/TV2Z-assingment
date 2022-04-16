import './Loginpage.css';
import {useState} from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import Seconpage from './Seconpage';
import {useNavigate} from "react-router-dom";

function Loginpage() {
  const [mail, setMail] = useState("");
  const [pwrd, setPwrd] = useState("");
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState('password');
  const [error, setError] =  useState("")



  const handleForm = (e)=>{
    e.preventDefault();
    localStorage.setItem("email" ,mail);
    localStorage.setItem("password", pwrd);
    setMail("");
    setPwrd("");

    // navigate('/Seconpage')
  }

    const hadleTOggle=()=>{
    //   const passwrdValid = ()=>{
    //     const regEx = /[a-zA_Z0-9._%+-*]/g;
    //     if(regEx.test(password)){
    //       setError("");
    //     }else{
    //       setError("Password is not strong")
    //     }
    // }
    
      if(type == 'password'){
        setIcon(eye);
        setType('text')
      }else{
        setIcon(eyeOff);
        setType('password')
      }
    }

   let navigate = useNavigate();

  return (
    <>
    <header>
    <li>TV2Z</li>
    <li style={{fontSize:"2rem"}}>Login</li>
    </header>

    <div className="input-login">
      <h2>LOG IN</h2>

      <p>Enter your credentials to login in to TV2Z</p>
      <div className='form-login'>
<form onSubmit={handleForm}>
    <input placeholder='Email' type="email" name="email" onChange={(e)=>setMail(e.target.value)}/>
    <input type={type} placeholder='Password' name="password" 
    
    onChange={(e)=>setPwrd(e.target.value)}/>
    <span onClick={hadleTOggle} id='eye'><Icon icon={icon} ></Icon></span>
    <br />
    {error}
    <p>Forgot password? <b>click here!</b></p>
    <br />
    <span>clicking on 'Log in' button, you are hereby agreeing to our <b>Privacy Policy</b>  and <b>Term & Conditions</b> </span> 
    <br />
     {/* <Link to={"/Seconpage"}> */}
     {/* <Router>
       <Routes>
         <Route> */}
    <button id="login-btn" onClick={()=>navigate('/Seconpage') }>Login</button>

         {/* </Route>
       </Routes>
     </Router> */}
    {/* </Link> */}
    </form>
    </div>
    <p>Don't have an account? <b>Sing up!</b> </p>

    <div id="footer">
      <footer>
        &copy; 2020 WT TV2Z All rights reserved.
      </footer>
    </div>


    </div>
    </>
  );
}

export default Loginpage;

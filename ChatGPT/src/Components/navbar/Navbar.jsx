import React, { useState ,useEffect} from 'react'
import Logo from "../../assets/logo.svg"
import "./Navbar.css"
import {GiHamburgerMenu} from"react-icons/gi"
const Menu=()=>(
  <>
    <p><a href='#Home'>Home</a></p>
    <p><a href='#Desc'>Description</a></p>
    <p><a href='#Info'>Blogs</a></p>
    <p><a href='#Footer'>About us</a></p>
      
  </>
)
const Btn=()=>(
  <>
    <p>Sign in</p>
    <button>Sign up</button>
  </>
)
const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [toggle,setToggle]=useState(false)
  console.log(screenWidth)
  useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  return (
    <div className='Nav-container'>
      <div className='Navbar'>
        <div className="Logo">
          <img src={Logo} alt='Logo'/>
        </div>
        <div className="Navs">
        <Menu/>
        </div>
        <div className="Btn">
          <div className='Btns'>
            <Btn/>
          </div>
          <div className='Toggle' onClick={()=>setToggle(!toggle)}>
            <GiHamburgerMenu size={25}/>
          </div>
        </div>
      {toggle && 
      <div className='ToggleMenu scale-up-center'>
          <Menu/>
          {
            screenWidth<600&& 
            <div>
              <Btn/>
            </div>
          }
        </div>}
        </div>
    </div>
  )
}

export default Navbar
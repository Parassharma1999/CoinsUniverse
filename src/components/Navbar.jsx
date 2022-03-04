import React,{useState, useEffect} from 'react';
import { Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../Images/index.jpg';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize]=  useState(null);

    useEffect(()=>{
    const handleResize = ()=> setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();
    return()=> window.removeEventListener('resize', handleResize);
    },[])

    useEffect(()=>{
     if(screenSize<700)
     {
         setActiveMenu(false);
     }
     else {
        setActiveMenu(true);
     }
    },[screenSize])

  return (
  <div className="nav-container">
      <div className="logo-container">
          <Avatar src={icon} size= "large" />
          <Typography.Title level={2} className = "logo"  style={{color:"white"}}>
              <Link to="/"  style={{color:"white"}}>CoinsUniverse</Link>
          </Typography.Title>
       <button className='menu-control-container' style={{color:'white'}} onClick={()=>setActiveMenu(!activeMenu)}>
           <MenuOutlined/>
       </button>
       </div>


       {activeMenu && (
      <Menu theme = 'dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>

            <Menu.Item icon={<FundOutlined/>}>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>

            <Menu.Item icon={<BulbOutlined/>}>
                <Link to='/news'>News</Link>
            </Menu.Item>

         <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to='/AboutUs'>About Me</Link>
            </Menu.Item>
        </Menu>

       )}
  </div>
    )
};

export default Navbar;

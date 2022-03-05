import './App.css';
import {Route,Routes,Link}  from 'react-router-dom';
import {Layout, Typography,Space} from 'antd';
import {Navbar,AboutUs,Homepage,Cryptocurrencies,News,CrytpoDetails} from './components/Importer'


function App() {
  
  return (
    <div className="app">
      <div className="navbar">
       <Navbar/>
      </div>

      <div className="main">
     <Layout>
       <div className ="routes">
         <Routes>
           <Route exact path = "/" element= { <Homepage/>}/>            
           <Route exact path = "/cryptocurrencies" element = {<Cryptocurrencies/>}/>
           <Route exact path = "/crypto/:coinId" element = { <CrytpoDetails/>}/>
           <Route exact path = "/news" element = {<News/>}/>
           <Route exact path = "/Aboutus" element = {<AboutUs/>}/>

         </Routes>
       </div>
     </Layout>
      <div className="footer">
        <Typography.Title level ={5} style={{color: "white",textAlign:'center'}}>
          CoinsUniverse | All rights reserved <br />
          Developed and Maintained by <a href="https://www.linkedin.com/in/paras-kumar-sharma-2494781b3/">Paras Kumar Sharma</a>
        </Typography.Title>
        <Space style={{color:"white"}}>
          <Link to='/'>Home</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          <Link to='/news'>News</Link>
          <Link to='/Aboutus'>About me</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;

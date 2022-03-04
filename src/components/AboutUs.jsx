import React from 'react';

const AboutUs = () => {
  return (
  <article>
<h1 style={{fontSize:"40px"}}>ABOUT ME</h1>
<h3>Hi there, This is Paras Kumar sharma, a passionate Frontend Developer, who wants to learn more and more about web development world !!  </h3><br />
<h3 style={{fontWeight:"bold"}}>You can Connect to me via</h3>
<button style={{backgroundColor:"darkblue",padding:"5px",borderRadius:"10%",border:"none"}}>
<a href='https://www.linkedin.com/in/paras-kumar-sharma-865106233/' style={{color:"white",textDecoration:"none"}}>LinkedIn</a>
</button>
<button style={{backgroundColor:"darkblue",padding:"5px",borderRadius:"10%",border:"none",margin:"10px"}}>
<a href='https://twitter.com/ParasKu27161805' style={{color:"white",textDecoration:"none"}}>Twitter</a>
</button>
</article>
  )
};

export default AboutUs;

import React from 'react';
import './index.css';

function Person (props) {
  const{Name,age,hobbies }=props;

 const shortName=Name.length>8?Name.substring(0,6)+"":Name;
 const list=hobbies.map((hobby)=><li>{hobby}</li>);
 
  return (
    <div >
      <p style={{color:'#228af6'}}> Learn some information about this person. </p>
      <h3>name:{shortName}</h3>
      <h3>age: {props.age} years old.</h3>{props.age>=19?<h3 style={{color:'#29e90c',fontFamily:"fantasy"}}>you can drive!</h3>:<h3 style={{color:'#e90c44',fontFamily:"fantasy"}}>you must be 
        18</h3>}

     <h3> hobbies:<ul>{list}</ul></h3>
    </div>
  );
};
function App(){
  return(
   <div>
    <Person Name="aarush verma" age={18} hobbies={["dancing","reading"]} />
    <Person Name="aman" age={30} hobbies={["cycling","photography"]}/>
     <Person Name="Ananya mehrotra" age={11} hobbies={["cycling","photography"]}/>
   </div>

  );

};


export default App;
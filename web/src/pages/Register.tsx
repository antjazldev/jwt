import React, { useState } from 'react'; 
import { useRegisterMutation } from '../generated/graphql';
import { useHistory } from 'react-router-dom';

interface Props{}
function Register() {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [register] = useRegisterMutation();

  return (
  <form
  onSubmit={async e => {
    e.preventDefault();
    console.log("form submited!");
    console.log(email,password);
    const response = await register({
      variables:{email,password}
    });
    
    history.push("/");
    console.log(response)
  }}
  >
    <div>
      <input value ={email} 
      placeholder="email" 
      onChange={e => {setEmail(e.target.value);
      }}/>
    </div>  
    <div>
      <input
      type='password'
       value ={password} 
       placeholder="password" 
       onChange={e => 
       {setPassword(e.target.value);
       }}/>
    </div>  
    <button type="submit">register</button>
  </form>
  );
};
export default Register;
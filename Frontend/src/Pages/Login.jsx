import React, { useState } from 'react'
import { Button, Input, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const[username,setusername] = useState('');
    let navigate = useNavigate()
    const handleChange = (e)=>{
     setusername(e.target.value);
    }
    let postdata = async(userdata)=>{
        let res = await fetch('http://localhost:8080/login',{
            method: 'POST',
            body : JSON.stringify(userdata),
            headers:{
                'content-type': 'application/json'
            }
        })
        let res2 = await res.json();
        if(res2.message==='successfully registered' || res2.message==='successfully logged in'){
          navigate('/notices')
        }
    }
    const handleLogin = ()=>{
     if(username==''){
        alert('Please enter a username')
     }else{
       let userdata = {
        username: username
       }
       localStorage.setItem('username',username)
        postdata(userdata)
     }
    }
  return (
    <div >
      <Stack  mt='150px' display='flex' flexDirection='column'  alignItems='center'>
      <Input w='30%' placeholder='Please Enter Your Username' size='md' borderColor='black' value={username} onChange={handleChange} />
      <Button w='90px' display='block' margin='auto' colorScheme='green' onClick={handleLogin}>Login</Button>
      </Stack>
    </div>
  )
}

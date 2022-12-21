import { Box, Button, Heading, Stack, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { NoticeCard } from '../Components/NoticeCard';

export const Notice = () => {
    const[notices,setnotices] = useState([]);
    const[loading,setloading] = useState(false);
    const[inputnotice,setinputnotice] = useState('');
    let username = localStorage.getItem('username');
    let fetchAndUpdate = async()=>{
       try {
        setloading(true);
        let res = await fetch('http://localhost:8080/notice');
        let res2 =await res.json();
        setnotices(res2.notices)
        setloading(false);
       } catch (error) {
        console.log(error)
       }
    }
    const handleSubmit = async()=>{
        if(inputnotice.length>100){
           alert('Please enter words less than 100')
        }else{
            let noticeobj = {
                notice : inputnotice,
                username : username
            }

            await fetch('http://localhost:8080/notice',{
                method : 'POST',
                body : JSON.stringify(noticeobj),
                headers : {
                    'content-type': 'application/json'
                }
            })
            fetchAndUpdate();
        }
    }
    useEffect(()=>{
     fetchAndUpdate();
    },[])

  return (
    <div className="Container">
    <Heading fontSize="30" textDecoration='underline' mt='30px' textAlign='center'>Notice Board</Heading>
    <Stack mt='30px' display='flex' flexDirection='column'  alignItems='center'>
    <Text ml='-920px' fontSize='20px'>Submit a Notice :</Text>
    <Textarea placeholder='' w='70%' borderColor='black' value={inputnotice} onChange={(e)=>setinputnotice(e.target.value)}/>
    <Button style={{
        color : 'white',
        backgroundColor: 'black',
    }} onClick={handleSubmit} >Submit</Button>
    </Stack>
    <NoticeCard notices={notices} loading={loading} />
  </div>
  )
}

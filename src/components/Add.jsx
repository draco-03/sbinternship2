import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    const [ counter, setCounter ]=useState(0);
    const [form,setForm]=useState({
      "name":'',
      "adm":'',
      "dept":'',
      "sem":''
    })
    let showData=()=>{
      console.log(form);
    }
    // let valueAdd=()=>{
    //   setCounter(counter+1);
    // }

    function valueCap(e){
      //console.log(e)
      setForm({...form,[e.target.name]:e.target.value})
    }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="name"
          name='name'
          value={form.name}
          onChange={valueCap}
        />
        <TextField
          required
          id="outlined-required"
          label="Admission Number"
          defaultValue="adm"
          name='adm'
          value={form.adm}
          onChange={valueCap}
        />     
        <TextField
         required
         id="outlined-required"
         label="Department"
         defaultValue="dept"
         name='dept'
         value={form.dept}
         onChange={valueCap}
        />
        <TextField
          required
          id="outlined-required"
          label="Semester"
          defaultValue="sem"
          name='sem'
          value={form.sem}
          onChange={valueCap}
        />
        
      </div>
      <Button variant="contained" onClick={showData}>Submit</Button>
      <br/>
      {/* <small>button is clicked {counter} times</small> */}
    </Box>
  )
}

export default Add
import React from 'react'
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
export default function SignUpForRecruiter() {

  const ford = useFormik({

    initialValues: {
      name: "",
      contactNumber: "",
      email: "",
      password: "",
       bio:"",
      type: "recruiter",
     
    },
    onSubmit: (values)=>{

      axios.post("http://localhost:4444/auth/signup",values).then(y=>{
        localStorage.setItem("uinfo",JSON.stringify(y.data))
      })
    

    }

  }); 
  return (
    <div>
      <form onSubmit={ford.handleSubmit}>

          <TextField    fullWidth   label="Name" variant="standard" value={ford?.values?.name} onChange={ford.handleChange} onBlur={ford.handleBlur} name='name' type='text'/>
          <TextField    fullWidth   label="Email" variant="standard"  value={ford?.values?.email} onChange={ford.handleChange} onBlur={ford.handleBlur}  name='email' type='email'/>
          <TextField    fullWidth   label="Password" variant="standard"  value={ford?.values?.password} onChange={ford.handleChange} onBlur={ford.handleBlur} name='password' type='password'/>
          <TextField    fullWidth   label="Contact Number" variant="standard"  value={ford?.values?.contactNumber} onChange={ford.handleChange} onBlur={ford.handleBlur} name='contactNumber'/>
          <TextField    fullWidth   label="bio" variant="standard" sx={{ marginBottom:"20px"}} multiline rows={5} value={ford?.values?.bio} onChange={ford.handleChange} onBlur={ford.handleBlur} name='bio'/>

          <Button color="primary" variant="contained" fullWidth type="submit">
          Registration
        </Button>
      </form>

    </div>
  )
}

import React from 'react';
import {useState} from 'react';
import toast from "react-hot-toast";

const useSignup = () => {
 const [loading, setLoading ] = useState(false);

 const signup = async ({fullNamr, username, password, confirmpassword, gender}) => {
  const success = handleInputErrors({fullName, username, password, confirmPassword, gender});
  if(!success) return;

  setLoading(true);
  try{
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
body: JSON.stringify({fullName, username, password, confirmpassword, gender}),

    });

    const data = await res.json();
    console.log(data);
    }
    catch (error){
      toast.error(error.message);
    }finally{
      setLoading(falase);
    }
 };
 return {loading, signup};
};


export default useSignup;

//2:42
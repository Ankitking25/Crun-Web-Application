function Validation(values){
      let error = {};   //error is array to store my user input password and eamil:
       
      const email_pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const password_patter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/       

      if(values.email===""){
         error.email = "Name should not be empty"
      }
      else if(!email_pattern.test(values.email)){
        error.email = "Email Didn't match"
      }
      else{
         error.email = ""
      }
      
   
       if(values.password ===""){
           error.password = "Password should not be empty"
       }
       else if(!password_patter.test(values.password)){
           error.password = "Password Didn't Match"
       }
       else{
          error.password = ""
       }
       return error;


}


export default Validation;
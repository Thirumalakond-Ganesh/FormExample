import React from "react";
import {useForm} from  "react-hook-form";
import "./App.css";


function MyForm(){
  const{
    register,
    handleSubmit,
    reset,
    formState:{errors,isDirty,isSubmitting,isValid},
    watch,
  }=useForm({
    defaultValues:{
      name:'',
      email:''
    },
  });
    
   const onSubmit=(data)=>{
    console.log('Form data Submitted:',data);

    reset();// after submitting the form it will reset the form
   };

   const nameValue=watch('name');//watch the name values when you are entering into the name field 


    return(
      <div className="container">
        <h2 style={{textAlign:"center"}}>React Hook Form Example</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input {...register('name',{required:'Name Is Required',minLength:{value:3,message:'Name Must Be Atleast 3 Characters Long'},})}/>
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </label>

          <label>
            Email:
            <input {...register('email',{required:'Email Is Required',pattern:{value:/^\S+@\S+$/i,message:'Invalid Email Address'},})}/>
            {errors.email&&<p className="error-message">{errors.email.message}</p>}
          </label>

          <button type="submit" disabled={!isDirty || isSubmitting || !isValid} >
          Submit
        </button>
        </form>
        <div className="form-state">
          <h3>Form State</h3>
          <p>isDirty:{isDirty ?'Yes':'No'}</p>
          <p>isSubmitting:{isSubmitting ?'Yes':'No'}</p>
          <p>IsValid:{isValid ?'Yes':'No'}</p>
        </div>
        <div className="watched-values">
          <h3>Watched Values</h3>
          <p>Name Value:{nameValue}</p>
        </div>
      </div>
    )


}
export default MyForm;

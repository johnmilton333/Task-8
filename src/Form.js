import React from 'react';
import { useForm } from 'react-hook-form';

export default function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className='first'>
       
      <form onSubmit={handleSubmit(onSubmit)} className='path1'>
      <h1>Contact Us</h1>
        <input type="text"className='nxt1' placeholder="First name" {...register("firstName", { required: true, pattern: /^[a-zA-Z0-9]+$/ })} />
        <input type="text"className='nxt2' placeholder="Last name" {...register("lastName", { required: true, maxLength: 100, pattern: /^[a-zA-Z0-9]+$/ })} />
        <input type="text"className='nxt3' placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        <input type="tel" className='nxt4'placeholder="Mobile number" {...register("mobileNumber", { required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]*$/ })} />

        <div className='nxt7'>
  <input {...register("gender", { required: true })} type="radio" value="Male" id="male" />
  <label htmlFor="male">Male</label>
</div>
<div className='nxt8'>
  <input {...register("gender", { required: true })} type="radio" value="Female" id="female" />
  <label htmlFor="female">Female</label>
</div>
<div className='nxt9'>
  <input {...register("gender", { required: true })} type="radio" value="Others" id="others" />
  <label htmlFor="others">Others</label>
</div>


        <input type="password" className='nxt5'placeholder="Password" {...register("password", { required: true })} />

        <input type="submit"  className='nxt6' />
      </form>
    </div>
  );
}

import React from 'react'
import { motion } from 'framer-motion';
import Backdrop from './backdrop';
import { useForm } from 'react-hook-form';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function Modal({modalOpen, handleClose, addEmployee}) {
  
  const {
    register,
    handleSubmit, 
    formState: {errors},
  } = useForm();  

  const onSubmit = (data) => {
    const newEmployee = {
      name: data.name,
      department: data.department,
    }
    console.log(newEmployee);
    addEmployee(newEmployee);
    handleClose(false);
  }



  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        onClick={e => e.stopPropagation()}
        className='rounded-lg bg-white w-96'
        variants={dropIn}
        initial="hidden"  
        animate="visible"
        exit="exit"
      >
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
          <div className='flex flex-col gap-1 w-full p-4 py-2'>
            <label>Name</label>
            <input  className='p-2 py-1 bg-gray-100 rounded-md ' {...register("name", {required: true, maxlength: 20})}/>
            {errors.name?.type === "required" && (
              <span className='text-sm text-gray-600'>Username is required</span>
            )}  
          </div>
          <div className='flex flex-col w-full p-4 py-2'>
            <label>Department</label>
            <input className='p-2 py-1 bg-gray-100 rounded-md ' {...register("department", {required: true})}/>
            {errors.department?.type === "required" && (
              <span className='text-sm text-gray-600'>Password is required</span>
            )}
          </div>
          <input 
            className='p-6 text-sm py-1 border ml-4 mb-4 font-bold bg-gray-300 rounded-md transition-all hover:bg-gray-700 hover:text-white'
            type="submit" 
            value="Add" />
        </form>
      </motion.div>
    </Backdrop>
  )
}

export default Modal;
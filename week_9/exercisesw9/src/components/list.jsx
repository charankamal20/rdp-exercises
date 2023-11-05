import React from 'react'
import employees from '../data/employees'
import ListItem from './listItem';
import filter from '../svgs/filter.svg'
import Dropdown from './dropdown';
import { useState, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import add from '../svgs/add.svg'
import Modal from './modal';
import { AnimatePresence } from 'framer-motion';



function List() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const departmentParam = searchParams.get('department');


  const [department, setDepartment] = useState('All');
  const [dropdownState, setdropdownState] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);

  const employeeReducer = (employeesArr, action) => {
    switch (action.type) {
      case "ADD_TASK": {
        return [...employeesArr, action.employee]
      }
      case "DELETE_TASK": {
        return employeesArr.filter((emp) => emp.name !== action.employee.name);
      }
      default: {
        console.log(employeesArr);
        return employeesArr;
      }
    }
  };
  
  const [employeesArr, dispatch] = useReducer(employeeReducer, employees);
  
  function handleAddEmployee(employee) {
    dispatch({
      type:"ADD_TASK",
      employee,
    })
  }

  function deleteEmployee(employee) {
    dispatch({
      type: "DELETE_TASK",
      employee,
    })
  }

  function updateURLWithDepartment(department) {
    // Get the current URL without the query parameters
    const baseUrl = window.location.href.split('?')[0];
  
    // Create the new URL with the 'department' query parameter
    const newURL = `${baseUrl}?department=${department}`;
  
    // Replace the current URL with the new URL
    window.history.replaceState(null, '', newURL);
  }

  
  const setCurrentDepartment = (currentDepartment) => {
    setDepartment(currentDepartment);
    updateURLWithDepartment(currentDepartment);
  };

  useEffect(() => {
    // Process the 'department' query parameter
    if (departmentParam) {
      // Filter employees based on the 'department' parameter
      setCurrentDepartment(departmentParam);
    }
  }, [departmentParam]);

  return ( 
    <div className='w-1/6 min-w-[300px] rounded-lg mt-12'>
      <div className='flex relative justify-between items-center'>
        <h1 className='font-bold text-lg'>Employee List</h1>
        <div className='flex justify-between gap-1 items-center'>
          <button onClick={() => setmodalOpen(!modalOpen)}>
            <img className='w-4 hover:rotate-90 transition-all' src={add} alt="" />
          </button>
          <button onClick={() => setdropdownState(!dropdownState)}>
              <img className='w-4 m-1 hover:drop-shadow-lg hover:-translate-y-px transition-all' src={filter} alt="Filter Icon" />        
          </button>
        </div>
        <div className='absolute right-0 top-9'>
          <Dropdown isActive={dropdownState} empArr={employeesArr} setDepartment={setCurrentDepartment}/>
        </div>
      </div>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
        >
        {modalOpen && <Modal modalOpen={modalOpen} addEmployee={handleAddEmployee} handleClose={setmodalOpen}/>}
      </AnimatePresence>
      <ul className='mt-2'>
        {employeesArr.map((employee, index) => {
          if(department === "All" || department === employee.department) {
            return (
              <li key={index} >
                <ListItem handleDelete={deleteEmployee} employee={employee}/>
              </li>
            )
          }
          return <></>
        } 
        )}
      </ul>
    </div>
  );
};

export default List;

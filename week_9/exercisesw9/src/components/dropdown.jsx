import React from 'react'

function Dropdown({isActive, setDepartment, empArr}) {

  function getUniqueDepartments () {
    const uniqueDepartments = ['All'];
  
    empArr.forEach((employee) => {

      if (!uniqueDepartments.includes(employee.department)) {
        uniqueDepartments.push(employee.department);
      }
    });
  
    return uniqueDepartments;
  }

  const departments = getUniqueDepartments();

  return (
    <div className={`${isActive ? '' : 'hidden'} bg-white rounded-md shadow-lg`}>
      {
        departments.map((department, index) => {
          return <button onClick={() => setDepartment(departments[index])} className='text-left w-full block p-2 mr-8 hover:bg-black/20' key={index}>{department}</button>
        })
      }
    </div>
  )
}

export default Dropdown;

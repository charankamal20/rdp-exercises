import React from 'react';

import deleteIcon from '../svgs/delete.svg';

function ListItem({employee, handleDelete}) {
  return (
    <div className='bg-slate-100 w-full border-b leading-4 flex justify-between  p-2 transition-all hover:bg-white '>
        <div className='flex flex-col items-start justify-center'>
          <span className='font-semibold'>{employee.name}</span>
          <span className='text-sm text-gray-700'>{employee.department}</span>
        </div>
        <button onClick={() => handleDelete(employee)}> 
          <img className='w-5 hover:-translate-y-px' src={deleteIcon} alt="" />
        </button>
    </div>
  )
}

export default ListItem;
import React from 'react'
import './MyGigs.scss'
import Table from '../../components/table/Table'
7
const columns = [{
    name:"Name" ,
    label:"Name"
  },
  {
    name:"Company" ,
    label:"Company"
  },
  {
    name:"City" ,
    label:"City"
  },
  {
    name:"Action" ,
    label:"Action" ,
    options :{
      customBodyRender : (value) => (<button href={"https"+value} className="delete">
        Delete
      </button>),
      filter:false,
       
    }
  }
  
  
  
  
  
  ];
  

const MyGigs = () => {
    const datatables = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
       ];
return (
    <div className='MyGigs'>
         
            
            <Table columns={columns} tabledata={datatables} title="MyGigs " />
       
        




    </div>
)
}

export default MyGigs
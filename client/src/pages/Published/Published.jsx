import React from 'react'
import './Published.scss'
import Table from '../../components/table/Table'
7
const columns = [{
    name:"Title" ,
    label:"Title"
  },
  {
    name:"PRICE" ,
    label:"Price"
  },
  {
    name:"CATEGORY" ,
    label:"Category"
  },
  {name:"date",
  label:"added "

  },
 
  {
    name:"modify",
    label:"action",
    options:{ customBodyRender : (value) => (<button href={"https"+value} className="modify">
    Modify
  </button>),
  filter:false,

    }
  }, {
    name:"Action" ,
    label:"Action" ,
    options :{
      customBodyRender : (value) => (<button href={"https"+value} className="delete">
        Delete
      </button>),
      filter:false,
       
    }
  },
  
  
  
  
  
  ];
  

const Published = () => {
    const datatables = [
        ["Afro Danse Club", "80DT", "Danse Club", "18/04/2024"],
        ["HipHop Club", "60DT", "Danse Club", "16/04/2024"],
        ["Breakdance", "50dt", "Danse Club", "13/04/2024"],
        
       ];
return (
    <div className='Published'>
         
            
            <Table columns={columns} tabledata={datatables} title="Published " />
       
        




    </div>
)
}

export default Published
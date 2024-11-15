import React from "react";
import "./dashboard.scss";
import Table from '../../components/table/Table'



import StatBar from "../../components/statbar/statbar";
import Mydoughnut from "../../components/doughnut/mydoughnut";





//["Name", "Company", "City", "State"];
const columns_users = [{
  name:"Username" ,
  label:"UserName"
},
{
  name:"Email" ,
  label:"Email"
},
{
  name:"Phone" ,
  label:"Phone"
},
{
  name:"ISACtive" ,
  label:"ISACTIVE" ,
 
}





];

const columns_actusers = [{
  name:"Username" ,
  label:"UserName"
},
{
  name:"title" ,
  label:"Title"
},
{
  name:"Time" ,
  label:"Selected Time"
},
{
  name:"Date" ,
  label:"Date " ,
 
}
,{
  name:"Price",
  label:"Price",
}
, {
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





const labels = ["Workshop", "Theatre", "Instruments", "Danse", "Art"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Effectif",
      data: [9, 5, 3, 4, 1, 8, 6],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
      
    },
  ],
};



//const loading = false;





const dashboard = () => {
  const datatables = [
    ["Iheb Bezzez", "iheb123@gmail.com", "22 605 968", "true"],
    ["John Wals", "johnw@gmail.com", "28 789 357", "false"],
    ["Hsan Bezzez", "bezhsan@gmai.com", "56 489 123", "true"],
    ["Youssef Naas", "ysfnaas@gmail.com", "98 456 112", "true"],
    ["user1", "user1@gmail.com", "54 121 555", "false"],
   ];
   
   const datatablesactive = [
    ["Iheb Bezzez", "Afro Dance Club", "Monday 9am-10am", "25/03/2024","80DT"],
    ["Hsan Bezzez", "Afro Dance Club", "Sunday 8am-9am", "27/03/2024","80DT"],
    ["Youssef Naas", "BreakDance Club ", "saturday 9am-10am", "22/03/2024","50DT"],
   ];
  

  

  return (
    <div className="dashboard">
      <h1>Dashbord</h1>
      <br></br>
       <br></br>
       
      <Mydoughnut />
      <br></br>
       <br></br>
       <Table columns={columns_users} tabledata={datatables} title="All Users " />
       <br></br>
       <br></br>
       <Table columns={columns_actusers} tabledata={datatablesactive} title="Active Users" />
       <div className="statbars">
       <br></br>
       <br></br>
       <div className="stat1">
      <StatBar data={data} />
      <span className="title">Gains  par catégorie  </span>
      </div>
      <div className="stat2">
      <StatBar data={data} />
      <span className="title">Effectifs par catégorie  </span>
      </div>
      </div>
    </div>
  );
};
export default dashboard;

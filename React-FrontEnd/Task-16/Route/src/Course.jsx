import React from 'react'
import { useParams } from 'react-router-dom'

function Course() {
    const { name } = useParams();
    const data =[{id:1,cor:'full',img:'https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-1536x804.png',title:'The Top 10 Tools Every Full Stack Developer Should Master in 2023',des:'As a full stack developer, having the right set of tools is crucial for your',date:'5 August 2023'},
    {id:2,cor:'data',img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp',title:'10 Best Data Science Frameworks in 2023',des:'Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.',date:'5 August 2023'},
    {id:3,cor:'cyber',img:'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png ',title:'Cybersecurity Vs Ethical Hacking: Top 10 Differences',des:'Cybersecurity & Ethical hacking and have been key in making sure that your data online',date:'27 December 2022 '},
    {id:4,cor:'full',img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/image-6.png',title:'Top Skills To Become a Full Stack Developer in 2023',des:'Are you interested in becoming a great full-stack developer? If so, then you’re at the',date:'3 August 2023'},
    {id:5,cor:'data',img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/conceptual-data-analysis-with-wooden-blocks-magnifying-glass-side-view-1-1200x748.jpg',title:'Best Way to Learn Data Science in 2023',des:'Have you ever wondered what it takes to become a data scientist? Is unraveling complex',date:'28 July 2023 '},
    {id:6,cor:'cyber',img:'https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-1536x804.png',title:'Top 7 Cyber Security Attacks in Real Life',des:'Cyber security attacks are the type of actions that are designed to destroy, steal, modify,',date:'5 August 2023'},
    {id:7,cor:'cyber',img:'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png',title:'8 Different Types of Cybersecurity and Threats Involved',des:'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',date:'5 August 2023'},
  
    {id:8,cor:'full',img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/24746653_7002417-1-1536x1024.jpg',title:'The Future & Scope of Full Stack Developers in India',des:'Have you ever wondered about the future of full stack developers in India? These talented',date:'27 July 2023'}
  ];
if(name=='all'){
  var fdata=data;
}
else{
    var fdata=data.filter((item) => {
      if(item.cor==name)
      return item;
         })
    console.log(fdata);}
  return (
    <div className='row'>{fdata.map((value,index)=>(
      <div className="col-sm-4">
  <div className="card" key={index}>
  <div className="card-header">
    <img className="card-img-top" src={value.img} alt="..." /></div>
    <div className="card-body">                       
      <h4 className="card-title"> {value.title}</h4>
      <h7 className="card-title" > {value.des}</h7><br></br>
      <h10 style={{'color':'green','left':'0'}}> Read More</h10>
      <div className="card-footer">
      <h15 className="card-text" id='date'> {value.date}  .  No Comments</h15>
      
      </div>
      </div>
  </div></div>))}</div>
  )
}

export default Course
fetch("http://localhost:3000/Allqueries")
.then((data)=>{
    return data.json();// converted to object 
}).then((x)=>{
   query=[" ","when will the results be out","I didnt get my exam link","I didnt applied for exam due to technical glitch","I got shortlisted for dream , Can i apply Super Dream","query5"]
   let names=new Set()
   x.filter((values)=>{
     
      if(values.companyType==="Dream"){
        names.add(values.companyname)
      }
   })

   let tabledata="";
   names.forEach(element => {
      for(let i=1;i<=5;i++){
        let c=0
         x.filter((val)=>{
            if(val.companyType==="Dream" && val.companyname===element && val.queryid===i){
                c=c+1
            }
         })

         tabledata+=`
         <tr>
         <td>${element}</td>
         <td>Dream</td>
         <td>${i}</td>
         <td>${query[i]}</td>
         <td>${c}</td>
        
       <td><button type="button" class="btn btn-success" id="${element}" onclick="myFunction(${i},${c})">Send</button></td>
         </tr>
         `
      }
   });
   document.getElementById("table-body").innerHTML=tabledata;
  
})
 
function myFunction(i,c){
   
   if(c==0){
      alert("No queries are there")
   }
   else{
      var z=prompt("enter your answer here")
      console.log(z)
    const names=new Set()
          let a=event.srcElement.id
          
          fetch("http://localhost:3000/Allqueries")
          .then((data)=>{
              return data.json();// converted to object 
          }).then((res)=>{
             
             res.filter((x)=>{
                if(x.companyname===a && x.queryid===i){
                    console.log(x.studentName)
                    names.add(x.studentemail)
                }
            })
            



            const array = Array.from(names);
            


            for(let i=0;i<c;i++){
               console.log(array[i]);
               Email.send({
                  Host : "smtp.elasticemail.com",
                  Username : "venkatasaisai993@gmail.com",
                  Password : "51D4A368BEE620EF46EE85BE1C144A66BE59",
                  To : array[i],
                  From : "venkatasaisai993@gmail.com",
                  Subject : "This is the subject",
                  Body : z
              }).then(
                message => alert(message)
              );
            }

            
            // for(let i=0;i<c-1;i++){
            //     console.log(array[i],i)
            //    Email.send({
            //       Host : "smtp.elasticemail.com",
            //       Username : "chitti",
            //       Password : "",
            //       To : array[i],
            //       From : "",
            //       Subject : "Reply for query",
            //       Body :z
            //   }).then(()=>{
               
            //     if(i==c-1){
            //        alert("new")
            //     }
                
            //   }).catch((err)=>{
            //      console.log(err)
            //   });
            //    }
               
          })
          
          
   }
    
}

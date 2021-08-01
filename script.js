/* let varj1={
    lname:["Grigoryan", "Sargsyan", "Avagyan", "Torosyan"],
    age:[15,24,21,10],
    city:["Vanadzor","Yerevan","Gyumri", "Goris"]
 }
 for(var  i=0; i<varj1.age.length; i++){
    if(varj1.age[i]>21&&varj1.city[i]==="Yerevan"){
 console.log(varj1.lname[i])
    }
 } 
 */



 
/*  let students={
    name:["Tatev", "Anahit", "Poghos", "Petros"],
    lname:["Harutyunyan", "Ananyan", "Poghosyan", "Petrosyan"],
    number:[10,18,14,9]
 }
 for (var i=0; i<students.name.length;i++){
    if(students.number[i]>11 && students.number[i]<20 && students.lname[i][0]==="A"){
       console.log(students.lname[i])
    
 }
 

 }  */


/* var sum=0
 let books={
    authors: ["Austen","Hemingway", "Adams"],
    pageCount:[ 10, 20, 30 ],
   } 
    for (var i=0; i<books.authors.length; i++){
       if( books.authors[i][0]==="A"){
 
           sum+=books.pageCount[i]
 
    }
 
    }
  console.log(sum)  */

/* 
  let books={
  authors:["Austen","Hemingway", "Adams"],
  title:["Pride and Prejudice","Farewell to Arms", "Hystory of modern era" ],
 }
 
 for (var i=0; i<books.authors.length; i++){
    if(books.title[i].includes("Hystory")){
       console.log(books.title[i])
    }
   

 }   */



/*  let k=30;

let books={
     authors:["Austen","Hemingway", "Adams"],
     pages:[35,46,35], 
     price:[10, 35, 44]

 }
 for(var i=0; i<books.authors.length;i++){
     if(books.pages[i]>k){
       newPrices=books.price[i]*2
       
     }else{
         books.price[i]
     }
    
console.log(books.authors[i]+" "+newPrices) 
 } */
  

 /* let tv={
    titles:["Firefly", "Land of the lost","DeadWood"],
    hour:[18, 21, 14],
    minutes:[20, 15, 30]

 }
 for( var i=0; i<tv.titles.length; i++ ){
    if (tv.hour[i]===18 && tv.minutes[i]===20){
       console.log(tv.titles[i])

    }
       
    } */

   /*  
     let tv={
        titles:["Firefly", "Land of the lost","DeadWood"],
        hour:[19, 20, 14],
        minutes:[35, 21, 25]
     }
     for (var i=0; i<tv.titles.length; i++){
        if(tv.hour[i]>=19 && tv.minutes[i]>30||tv.hour[i]>=19 && tv.minutes[i]<30){
           console.log(tv.titles[i])
        }
     } */


/* var movieTitle="Like a boss"
     let cinemas={
        titles:["moscow", "Nairi", "cinemastar"],
        movies:["365 days","Like a boss","Fatherhood"]        
     }

     for (var i=0; i<cinemas.titles.length; i++){
        if(cinemas.movies[i]===movieTitle){
         console.log(cinemas.titles[i]+" "+cinemas.movies[i])

        }

     }
     */

   /*   let studentExams={
        date:['2021-07-21', '2021-07-24','2021-07-30'],
        days:["Wednesday","Saturday","Friday"]

     }
     for (var i=0;i<studentExams.date.length; i++){
        if(studentExams.days[i]==="Saturday"){
          console.log(studentExams.date[i])
        } 
     }
 */
/*  var a=55
 var b=60
     let student={
        subjectName:["Math", "English", "Physics"],
        points:[60, 98, 80],
        marks:[50,65,70]
     }
    for (var i=0; i<student.subjectName.length; i++){
       if(student.points[i]>a && student.marks[i]>b){
          console.log(student.subjectName[i])
       }

     } */


   let student={
      name:"Poghos",
      lname:"Poghosyan",
      
     
         math:50,
         lang:80,
         biology:70,
         physics:84,
         info:56,
    

         hc:function (){
            var grades=0
            var sum=0;
            var count=5;
            

            for (var i=0; i<student.length; i++){
               sum+=student.i
               Avgmarks=sum/count
               if(Avgmarks>80){
                  alert("գերազանց")
               }else if(Avgmarks>70){
               alert("լավ")
            } else if (Avgmarks>40){
                 alert("բավարար") 
            }else{
               alert("հեռացնել բուհ-ից") 
            }
             

            } 
            
      }  
      
      
   }  
  
   
student.hc()


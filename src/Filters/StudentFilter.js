



export default (students, name, tag)=>{

  const nameMatch=()=>{
    return students.filter((student) => {
      const studentName=`${student.firstName} ${student.lastName}`;
       
      const nameMatch = (studentName.toLowerCase().includes(name.toLowerCase()));
  
      return nameMatch;
    })
  }

  const tagMatch=()=>{
    return students.filter((student)=>{
      if(student.tag){
       for(var i=0;i<student.tag.length;i++){
         if(student.tag[i].includes(tag))
          return true
       }
       return false
      }
      else{
        return false
      }
    })
  }

  if(name==='' && tag !==''){
    return tagMatch()
  }
  else if(tag==='' && name!==''){
    return nameMatch()
  }
   else if(tag!=='' && name!==''){
     return nameMatch().filter((student)=> tagMatch().includes(student))
    }
  else{
    return students
  }
}

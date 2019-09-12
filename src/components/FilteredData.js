import React from 'react';
import { connect } from 'react-redux';
import selectStudents from '../Filters/StudentFilter';
import DisplayData from './DisplayData';

 const FilteredData=(props)=>{
    return(
        props.students.length === 0 ? (
            <div> 
               <p>No such student found</p>
            </div>
          ) : (
              props.students.map((student) => {
                
                return <DisplayData key={student.id} student={student} />;
              })
            )
    )
      
    
 }
const mapStateToProps = (state) => {
    return {
        students:selectStudents(state.students,state.filter.text,state.filter.tag)
    }
  };
 
  
  export default connect(mapStateToProps)(FilteredData);
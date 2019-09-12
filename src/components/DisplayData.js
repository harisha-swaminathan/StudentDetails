import React from 'react';
import { connect } from 'react-redux';
import { editStudent } from '../actions/students';
class DisplayData extends React.Component{
    state={
        displayMarks:false,
        hasTag:false
    }
    onExpanding=()=>{
        this.setState((prevState)=>{
            return {displayMarks:!prevState.displayMarks}
        })
    }
    
onAddingTag=(e)=>{
    
    const tag=e.target.value;
    if(e.KeyCode===13||e.which===13){
    this.props.editStudent(tag,this.props.student.id);
    e.target.value='';
    }
    this.setState((prevState)=>{
        return {hasTag:!prevState.hasTag}
    })
    
}

   render(){
    const grades=this.props.student.grades
    var sum=0
    for (var i = 0; i < grades.length; i++) {
        sum += parseInt(grades[i])
      }
   const avg=sum/grades.length
   const student=this.props.student
   var test=0;
       return(
        <div>
             {
                    <>
                    <div className="students">
                        <img alt= {`${student.id}`} src={student.pic}/>
                        <div className="student">
                        <h1 className="student-name">{`${(student.firstName).toUpperCase()} ${(student.lastName).toUpperCase()}`}</h1>
                        <p>{`Email: ${student.email}`}</p>
                        <p>{`Comapny: ${student.company}`}</p>
                        <p>{`Skill: ${student.skill}`}</p>
                        {`Average: ${avg}%`}
                        {this.state.displayMarks &&  <div>
                        {student.grades.map(mark => {
                            test++
                           return <p>{`Test ${test}: ${mark}%`}</p>
                        })}
                        { !!student.tag && student.tag.map((eachTag)=>{
                            return <p className="tag">{eachTag}</p>
                        })}
                       <input type="text"
                       placeholder="Add a tag"
                       onKeyDown={this.onAddingTag}
                       ></input>
                        </div>
                        }
                        </div>
                        <div>
                        {!this.state.displayMarks && <button onClick={this.onExpanding} ><h1 className="plus">+</h1></button> }
                        {this.state.displayMarks && <button onClick={this.onExpanding}><h1 className="minus">-</h1></button>  } 
                        </div>
                        
                    </div>
                    </>
            }
        </div>
       )
   }
}
const mapDispatchToProps = (dispatch) => ({
    editStudent: (student,id) => dispatch(editStudent(student,id))
  });
  
  export default connect(undefined, mapDispatchToProps)(DisplayData);
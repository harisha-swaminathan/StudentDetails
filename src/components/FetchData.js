import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FilterStudents from './FilterStudents'
import { populateStudent } from '../actions/students';
import FilteredData from './FilteredData';
 class FetchData extends React.Component{
    state={
        students:[],
        populated:false
      };
        componentDidMount() {
          axios.get(`https://www.hatchways.io/api/assessment/students`)
          .then(
              student => {
                const students = student.data;
                
                 this.props.populateStudent(students);
          })
          .then(
            this.setState((prevState)=>{
              return {populated:!prevState.populated}
            })
          )
          } 
    render(){
        return(
        <div>
        <FilterStudents />
         {this.state.populated && <FilteredData/>}
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
  populateStudent: (student) => dispatch(populateStudent(student))
});

export default connect(undefined, mapDispatchToProps)(FetchData);



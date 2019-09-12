 import React from 'react';
 import { connect } from 'react-redux';
  import { setTextFilter, setTagFilter} from '../actions/filter';
class FilterStudents extends React.Component {
  
  onTextChange=(e) => {
    this.props.setTextFilter(e.target.value);
  };
  onTagChange=(e)=>{
    this.props.setTagFilter(e.target.value);
  }
  render() {
    return (
      <div> 
        <div>
          <div>
            <input 
              type="text"
              placeholder="Search by name"
             // value={this.props.filters.text}
              onChange={this.onTextChange}
            />
            <input
              type="text"
              placeholder="Search by tags"
             // value={this.props.filters.text}
              onChange={this.onTagChange}
            /> 
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {

  return {
    filters: state.filters
  };
};
const mapDispatchToProps=(dispatch)=>{
  return{
    setTextFilter:(text)=>dispatch(setTextFilter(text)),
    setTagFilter:(tag)=>dispatch(setTagFilter(tag))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FilterStudents);

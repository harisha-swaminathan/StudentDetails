
const DefaultState = [];
var tag=[]
export default (state = DefaultState, action) => {
    switch (action.type) {
    case 'POPULATE_STUDENTS':
      return [
        ...state,
        ...action.students.students
    ];
      case 'EDIT_STUDENT':
      return state.map((student) => {
        if (student.id === action.id) {
          if(!student.tag){
            tag=[]
            tag.push(action.tag)
          }
          else{
           tag=student.tag
           tag.push(action.tag)
          }
          return {
            ...student,
            tag
          };
        } else {
          return student;
        };
      });
    default:
      return state;
  }
};

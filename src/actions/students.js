export const populateStudent = (students) => {
  return{
    type: 'POPULATE_STUDENTS',
    students
  }
}

export const editStudent = (tag, id) => ({
  type: 'EDIT_STUDENT',
  id,
  tag
});



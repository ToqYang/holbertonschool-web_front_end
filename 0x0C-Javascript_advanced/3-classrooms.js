// Closure and loops
function createClassRoom(numbersOfStudents) {

  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }

  students = [];
  for (i = 0; i < numbersOfStudents; ++i) {
    students.push(studentSeat(i + 1));
  }

  return students;
}

const classRoom = createClassRoom(10);

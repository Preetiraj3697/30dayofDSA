
var minMovesToSeat = function(seats, students) {
    let moves = 0;
    seats = seats.sort((a,b)=>b-a);
    // console.log(seats);
    students = students.sort((a,b)=>b-a);
    // console.log(students)
    seats.forEach((s,i)=>
    moves = moves+ Math.abs(s-students[i]));
    return moves
};

console.log(minMovesToSeat([3,1,5],[2,7,4]))
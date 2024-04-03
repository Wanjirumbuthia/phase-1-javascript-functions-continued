// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}


function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(params = '*') {
    return function name(adjective = "special") {
        return `You are ${params}${adjective}${params}!`
    }
}

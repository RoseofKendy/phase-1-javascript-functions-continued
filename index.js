// (1, 2, 3) Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // (4, 5, 6) Function expression for mondayWork
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // (7, 8, 9) Function for wrapAdjective
  function wrapAdjective(wrapper = "*") {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  // Test Cases
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"
  
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // "This Monday, I will work from home."
  
  const highlight = wrapAdjective("*");
  console.log(highlight("amazing")); // "You are *amazing*!"
  
  const emphasize = wrapAdjective("||");
  console.log(emphasize("a genius")); // "You are ||a genius||!"
  
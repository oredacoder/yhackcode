var perc, exp, s_lvl;  
      s_lvl=0;
function percQuiz(){
      if (document.getElementById("perc35").checked{
          s_lvl= s_lvl+1; 
          }
      else if (document.getElementById("perc70").checked{
               s_lvl=s_lvl+2;
               }
      else if (document.getElementById("perc100").checked{
               s_lvl=s_lvl+3; 
               } 
    }
function activityQuiz(){
  if (document.getElementById("fewE").checked{
          s_lvl= s_lvl+1; 
          }
  if (document.getElementById("someE").checked{
          s_lvl= s_lvl+2; 
          }
  if (document.getElementById("manyE").checked{
          s_lvl= s_lvl+3; 
          }
    }
function fieldChoice(){
  if document.getElementById("bin1").checked{
    if s_lvl<4{
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Beginner Writer Workshop \n Course 2: Introduction to Film and Media Studies \n \
 Activity 1: Join school magazine or literary journal \n Activity 2: Join an improv club"
    }
    if s_lvl >= 4 {
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Advanced Writing Seminar \n Course 2: Introduction to Videography \n \
 Activity 1: Attend a color theory or pattern making workshop \n Activity 2: Join an event planning committee"
    }
  }
  if document.getElementById("bin2").checked{
    if s_lvl<4{
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Modern Political Thought \n Course 2: The Politics of Crime and Policing \n \
 Activity 1: Join a school debate team \n Activity 2: Join a Literary or History journal"
    }
    if s_lvl >= 4 {
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Advanced Writing Seminar \n Course 2: History of Health Inequality \n \
 Activity 1: Join a Law Review Journal \n Activity 2: Become a contributor to a school newspapaper"
    }
  }
  if document.getElementById("bin3").checked{
    if s_lvl<4{
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Multicultural Elementary Pedagogy \n Course 2: Introduction to Social Cognition \n \
 Activity 1: Become a local tutor \n Activity 2: Volunteer with adult education programs"
    }
    if s_lvl >= 4 {
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 The Developing Brain \n Course 2: Gender, Sexuality, and Schooling \n \
 Activity 1: Join a Literary or History journal \n Activity 2: Become a contributor to a school newspapaper"
    }
  }
  if document.getElementById("bin4").checked{
    if s_lvl<4{
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Strategy Formulation \n Course 2: Principles of Economics \n \
 Activity 1: Join a school debate team \n Activity 2: Join a Literary or History journal"
    }
    if s_lvl >= 4 {
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 The Developing Brain \n Course 2: Leadership in Organizations \n \
 Activity 1: Join a Law Review Journal \n Activity 2: Become a contributor to a school newspapaper"
    }
  }
  if document.getElementById("bin5").checked{
    if s_lvl<4{
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Marketing Management \n Course 2: Global Economy \n \
 Activity 1: Join a Pre-Professional Business Society \n Activity 2: Join a school debate team"
    }
    if s_lvl >= 4 {
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 The Developing Brain \n Course 2: Strategy Formulation \n \
 Activity 1: Join a Law Review Journal \n Activity 2: Join a Pre-Professional Business Society"
    }
  }
  if document.getElementById("bin6").checked{
    if s_lvl<4{
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Clean Object-Oriented Design \n Course 2: Programming and Problem Solving \n \
 Activity 1: Participate in a Hackathon \n Activity 2: Join a Robotics Team"
    }
    if s_lvl >= 4 {
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Database System Implementation \n Course 2: Advanced Software Engineering \n \
 Activity 1: Do Undergraduate Research with a Selected Professor \n Activity 2: TA a class in Math, CS or IT"
    }
  }
  if document.getElementById("bin7").checked{
    if s_lvl<4{
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Biochemistry: Structure and Metabolism \n Course 2: Linear Algebra \n \
 Activity 1: Participate in a Hackathon \n Activity 2: Join the Pre-Med Society"
    }
    if s_lvl >= 4 {
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Molecular Biology \n Course 2: Software Engineering \n \
 Activity 1: Do Undergraduate Research with a Selected Professor \n Activity 2: TA a class in Math, CS or Biology"
    }
  }
  if document.getElementById("bin8").checked{
    if s_lvl<4{
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Financial Economics \n Course 2: Marketing Management \n \
 Activity 1: Join a Pre-Professional Business Society \n Activity 2: Become a contributor to a school newspapaper"
    }
    if s_lvl >= 4 {
      recommendations= "Based on your completed coursework and current activities \
 we recommend these additional courses and activities: \n Course 1: \
 Money and Banking \n Course 2: Corporate Finance \n \
 Activity 1: Join an Economics Review Journal \n Activity 2: TA a class in Math, Business or Economics"
    }
  }
}


 
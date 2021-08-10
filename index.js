
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
writing array of questions
*/
const chalk = require('chalk');
const GotQuiz = [{
  question:(chalk.cyan)
  ` who was the hand of the king before Ned stark?
   a:jon arryn
   b:jamie lannister
   c:tyrion lannister\n`,
      answer:"a"
},
{
  question:(chalk.cyan)
  ` who is youngest of stark siblings?
    a:robb
    b:rickon
    c:brandon\n`,
       answer:"b"
},
{
  question:(chalk.cyan)
  `who is the brother of ned stak?
    a:benjin stark
    b:robert barathion
    c:ser davos\n`,
      answer:"a"
},
{
  question:(chalk.cyan)
  `what is the name of the mother of jon snow?
     a:catlyn stark
     b:wylla
     c:lyanna stark\n`,
       answer:"c"
},
{
  question:(chalk.cyan)
  ` who is called as Kingslayer?
    a:jamie lannister
    b:ned stark
    c:tywin lannister\n`,
       answer:"a"
},
{
  question:(chalk.cyan)
  ` who is the bastard son of king robert?
    a:gendry
    b:joffery
    c:jon snow\n`,
       answer:"a"
},
{
  question:(chalk.cyan)
  ` what is the name of arya's wolf?
     a:neymeria
     b:lady
     c:ghost\n`,
       answer:"a"
},
{
  question:(chalk.cyan)
` how is jon snow and danearys relaated?
   a:nephew-aunt
   b:sister-brother
   c:king-queen'\n `,
      answer:"a"
}
];

let quizIndex=0;

function quiz(){
  rl.question(GotQuiz[quizIndex].question, (answer)=>{

  
  if(answer.toLowerCase()== GotQuiz[quizIndex].answer.toLowerCase())
  {
    console.log(chalk.magenta("you are correct"));
    quizIndex++;
    play();
  }
  else{
    console.log(chalk.red(" oops wrong!!! "));
    console.log(chalk.red(" try again "));
    quiz();
  }
  });
}

function play(){
  if(end())
  {
          console.log(chalk.green("thanks for playing..."));

    rl.close();
  }
  else
  {
 rl.question( "press y to continue.. any other key to exit", (choice) =>{
    
    if(choice.toLowerCase() == "y")
    {

      quiz();
    }
    else
    {
      console.log(chalk.green("thanks for playing..."));
      rl.close();
    }
  });
 
  }
 
  

}

function end(){
  if(GotQuiz.length == quizIndex)
  {
    return true;
  }
}
play();
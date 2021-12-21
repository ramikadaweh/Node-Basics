
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
} 


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.startsWith('hello')  ){
    hello(text);
  }
  else if(text ==='help\n'){
    help();
  }
  else if(text ==='list\n'){
    list();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name){
  console.log(name.trim()+"!")
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**  
 * list all command
 */
 var l=["name => change application name",
 "quit => end the application",
 "exit => end the application",
 "help => get all commands ",
 "hello => return hello!",
 "hello+'name' => return hello name!"]
   function help(){
     console.log("show all commands \n")
    l.forEach(i => console.log(i + "\n"));
   }

   //list function 

   function list() {
    tasks = ["add","remove","delete"];
    console.log("list of tasks :");
    tasks.map((value) => {
  
      console.log(`${tasks.indexOf(value)+1} - ${value}`);
  
    });
  
  }

// The following line starts the application
startApp("rami kadaweh")

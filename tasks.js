
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
  else if(text.startsWith('add')){
    add(text);
  }
  else if(text.startsWith('remove')){
    remove(text);
  }
  else if(text ==='remove 1\n'){
    removeFirst();
  }
  else if(text ==='remove 2\n'){
    removeSecond();
  }
  else if(text.startsWith('edit')){
    edit(text);
  }
  else if(text.startsWith('check')){
    check(text);
  }
  else if(text === 'uncheck\n'){
    uncheck(text);
  }
  else if(text ==='object\n'){
    showObject();
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
 "hello+'name' => return hello name!",
 "list => list all tasks",
 "add x => add a task x to list",
 "remove => remove the last task",
 "remove 1 => remove the first task",
 "remove 2 => remove the second task"]
  
   function help(){
     console.log("show all commands \n")
    l.forEach(i => console.log(i + "\n"));
   }

   //list function 
   tasks = [milk={done:'false'},water={done:'false'},tea={done:'true'}];
  function list() {
   
    console.log("list of tasks :");
    tasks.map((value) => {
  
      console.log(`${tasks.indexOf(value)+1} - ${value}`);
  
    });
  
  }

  //add function
  function add(task){
    task == "add\n" ? console.log('error'):tasks.push(task.substring(4));

  }

  //remove last task 
  function remove(text){
    myarr=text.split(" ");
    let index = myarr[1]-1;
    if (index < tasks.length) {
      tasks.splice((index), 1);
    }
    else{
      console.log("error")
    }
    
    

  }
  //remove first task
  function removeFirst(){
    tasks.shift()
  }
  //remove second task
  function removeSecond(){
    tasks.splice(1,1)
  }


  //edit command
  function edit(text){
    
    myarr=text.split(" ");
    if(text == 'edit\n'){
      console.log("error")
    }
    if(text.startsWith('edit 1')){
      tasks[0]= myarr[2]
    }
    else{
      tasks[tasks.length-1]= myarr[1]
    }
  }



  function showObject(){
    
    
   for(i=0;i<tasks.length;i++){
     if(tasks[i]["done"]=="true"){
       tasks[i].done="[✓]"
     }
     else{
      tasks[i].done="[]"
     }
   }
   console.log('tasks: %O',tasks);
  } 


  function check(text){
    if (text == 'check\n'){
      console.log("error")
    }
    if (text == 'check 1\n'){
       tasks[0]["done"]="true"
    }
  }
  function uncheck(text){
   for(i=0 ;i<tasks.length;i++){
    if(tasks[i]["done"]=="true"){
      tasks[i]["done"]="false"
    }
    
  }
    
  }
   


  

// The following line starts the application
startApp("rami kadaweh")

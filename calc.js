const operations = require('./operations.js');
const readline = require('readline');

//Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(
  'Calc.js\n' +
  'Welcome DevOps Calculator!\n' +

'Add two numbers and get the calculated value,\n'  
);

rl.question('Enter the first number: ', x => {
    rl.question('Enter the second number: ', y => {
      rl.question(
        'Select One operation:\n' +
      '[1] Addition (+)\n' +
      '[2] Subtraction (-)\n' +
      '[3] Multiplication (*)\n' +
      '[4] Division (/)\n' +
      
      'Enter your choice: \n',
        choice => {
          // additional code to be added here
          if(!operations.validateNumbers(x, y)){
            console.log('plaese restart the program, only numbers are allowed');
          }else{
              switch(choice){
                case '1' : 
                    console.log('The sum of' + x +' and ' + y +' is '+ operations.add(x, y) +'.');
                    break;
                case '2' : 
                    console.log('The difference of ' + x +' and ' + y +' is '+ operations.substract(x, y) +'.');
                    break;
                case '3' : 
                    console.log('The product of ' + x +' and ' + y +' is '+ operations.multiply(x, y) + '.');
                    break;
                case '4' : 
                    console.log('The product of' + x +' and ' + y +' is '+ operations.divide(x, y) +'.');
                    break;
                default:
                    console.log('Please restart the program and select a number between 1 and 4');
                    break;
              }
          }
          rl.close()
        }
      )
    })
  })


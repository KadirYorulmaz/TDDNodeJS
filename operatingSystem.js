// const operations = require('./operations.js');
const readline = require('readline');

//Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var logicalArray  = [4,8,1,9,5,0,3,7,2,6];
var physicalArray = [];
var checkArray    = [0,0,0,0,0,0,0,0,0,0];

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

var ptr = [];

function lineReader () {
    rl.question('Give the allocation size ', x => {
    

        for(var i = 0; i < x; i++){
               console.log(i);
            ptr.push(Math.floor((Math.random() * 100) + 1));
            console.log('ptr: ' +i , ptr);
        }

        
        // const found = checkArray.findIndex(element => element > 0);
        // console.log("found: ",found);

        var j=0;

        for(var i = 0; i < checkArray.length; i++ ){
            if(checkArray[i] == 0){
                // checkArray[i]
                // console.log(i);
                // console.log(checkArray[i]);
           
                const findFinalAddressIndex = logicalArray.find(element => element > i);
                console.log("found: ",findFinalAddressIndex);

             
                if(j < ptr.length){
                    physicalArray.insert(findFinalAddressIndex, ptr[j]); // We insert the given value from stdin
                    console.log(physicalArray);
                  
                    // console.log('j++: ', j);
                    checkArray[j] = 1;
                    j++
                }
                
                
                

                console.log(checkArray);

                for (var key in physicalArray) {
                    console.log("key " + key + " has value " + physicalArray[key]);
                  }
                // const find = logicalArray.find(element => element > i);
                // physicalArray.insert(x, );
                // break;
            }
            
        }

    
        // for(var i = 0; i < buffer.lenght; i++){
        //     console.log(buffer[i]);
        //   }
        // console.log(buffer);
        //   rl.question(
        //   'Write one number' +
          
        //   'Enter your choice: \n',
            // choice => {
              // additional code to be added here
            //   if(!operations.validateNumbers(x, y)){
            //     console.log('plaese restart the program, only numbers are allowed');
            //   }
            // console.log(logicalArray);
            // console.log("Hello");
            
    // lineReader();
              rl.close()
            // }
        //   )
       
      })
}

lineReader();





//callbackhell :-ex:-1

function sleep(){

    var startDateTime = new Date().getTime();
    var endDateTime  = startDateTime + 6000
    
    while(new Date().getTime() < endDateTime){

    }


}

/*function Testsleep(){

    sleep();
    console.log('Task Complete');
}

Testsleep();


function StepOne(callbackfn){
        console.log("Step One");
        callbackfn();
    }

function StepTwo(callbackfn){
        console.log("Step Two");
        callbackfn();
    }

function StepThree(){
    console.log("Step Three");
    }

    StepOne(() =>{
        StepTwo(() =>{
            StepThree();
        })
    })*/

    //example :-2

    function StepOne(callbackfn){
     sleep(3000);
        console.log("Step One");
        callbackfn();
}

function StepTwo(callbackfn){
    sleep(5000);
        console.log("Step Two");
        callbackfn();
}

function StepThree(){
    sleep(8000);
        console.log("Step Three");
}

console.time("MyTaskTime");

 StepOne(()=>{
        StepTwo(()=>{
            StepThree();
        })
     })

    console.timeEnd("MyTaskTime");
    console.log("All Works are Done...");

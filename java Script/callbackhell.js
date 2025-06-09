//callbackhell :-ex:-1

function sleep(){

    var startDateTime = new Date().getTime();
    var endDateTime  = startDateTime + 6000
    
    while(new Date().getTime() < endDateTime){

    }


}

function Testsleep(){

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
    })
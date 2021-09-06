console.log('fahim')

// alert('Ma is coming')

const maComing = () =>{
    alert('Ma is coming be alert')
};

const askPicnic = () =>{
    let response = confirm('are you going to picnic')
    console.log(response);
    if(response === true){
        alert('amk free ta bkash kora da')
    }
    else{
        console.log('...............................')
    }
}

const askName = () =>{
   const name = prompt('what is your name?')
   if(name){
    console.log(name)
   }
}
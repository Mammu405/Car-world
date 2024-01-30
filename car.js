function store(){
    const car={
        carname:brand.value,
        carprice:price.value
    }
    var id=document.getElementById('key').value
    if(id in localStorage){
        alert("key is already exist")
    }
    else{
        console.log(car);
        localStorage.setItem(id,JSON.stringify(car))
        alert("Data added successfully")
        window.location='./index.html'
    } 
}

// function store(){
//     var brand=document.getElementById('brand').value
//     var id=document.getElementById('key').value
//     localStorage.setItem(id,brand)
// }


function retrv(){
    var num=document.getElementById('re').value
    if(num in localStorage){
        car=JSON.parse(localStorage.getItem(num))
        console.log(car);
        data=""
        data=`<p>Car Name:${car.carname}</p>
        <p>Car price:${car.carprice}</p>`
        document.getElementById('ret').innerHTML=data
    }
    else{
        alert("Key is not exist")
        window.location='./index.html'
    }
   
}
// function retrv(){
//     var num=document.getElementById('re').value
//     var carname=localStorage.getItem(num)
//     ret.innerHTML =carname
//     console.log(carname);
// }

function rem(){
    var num=document.getElementById('remkey').value
    if(num in localStorage){
        localStorage.removeItem(num)
        alert("Removed successfully")
        window.location='./index.html'
    }
    else{
        alert("Key is not exist")
        window.location='./index.html'
    }
}

function clr(){
    localStorage.clear()
    window.location='./index.html'
}
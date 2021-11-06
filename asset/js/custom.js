let name = document.getElementById('name');
let gender = document.getElementById('gender');
let age = document.getElementById('age');
let submit = document.getElementById('submit-btn');
let allDetail = document.getElementById('all-details')
let newarr = new Array();

submit.addEventListener('click', function () {
    let myname = name.value;
    let mygender = gender.value;
    let myage = age.value;
    let id=Math.floor(Math.random() * 100);

    let mydetails = {
        id:id,
        name: myname,
        gender: mygender,
        age: myage
    }

    if(myname===""||myage===""){
        alert('kisu de vai')
    }
    else{
        
    newarr.push(mydetails);
    allDetail.innerHTML="";
    let getvalue = newarr.map(item => {
        return `
            <div class="card">
                <div class="card-body">
                    <div class="content">
                        <h3>id: ${item.id}</h3>
                        <h3>Name: ${item.name}</h3>
                        <h3>Gender: ${item.gender}</h3>
                        <h3>Age: ${item.age}</h3>
                    </div>
                </div>
            </div>`
    })
    allDetail.innerHTML = getvalue;
    }
})
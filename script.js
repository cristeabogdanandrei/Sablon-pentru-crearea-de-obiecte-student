class Student {
  
    getInfo (){
        const newLine = '\n'
        return(
            
           'Name: '+ this.name + newLine +
           "Adress: "+ this.adress + newLine +
            "Phone "+ this.phone + newLine +
            "Course "+this.course + newLine 

        )
    }
    constructor(name, adress, phone, course){
        this.name = name
        this.adress= adress
        this.phone = phone
        this.course = course


    }
}

const p_1 = document.getElementById('1')
const p_2 = document.getElementById('2')
const p_3 = document.getElementById('3')
const p_4 = document.getElementById('4')
const p_5 = document.getElementById('5')
let outputDiv= document.querySelector('#outputDiv')
let button= document.querySelector('#get-text-btn')

button.addEventListener("click", function () {
    getData();
});

async function getData() {
    try{

        let response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt')
        if((await response).status !==200) {
            throw new Error ('Error while reading File.')
        }
        let text =  await response.text()
        console.log(response)
        
        studentData = text.split('\n')
        console.log(studentData)

let x = 0
let y = 5

const nextStudent=()=>{
    x += 4;
    y += 5;

}


       a = new Student (...studentData.slice(x, y)) ; nextStudent();
       b = new Student (...studentData.slice(x , y)) ; nextStudent();
       c = new Student (...studentData.slice(x, y)) ; nextStudent();
       d = new Student (...studentData.slice(x, y));  nextStudent();
       e = new Student (...studentData.slice(x, y))

     


       p_1.innerText = a.getInfo()
       p_2.innerText = b.getInfo()
       p_3.innerText = c.getInfo()
       p_4.innerText = d.getInfo()
       p_5.innerText = e.getInfo()


        
       
    } catch (err){
        outputDiv.innerHTML = 'Fetch Problem ' + err.message
    }

 
}
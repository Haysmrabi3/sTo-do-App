let taskInput = document.getElementById("taskInput");
let table = document.getElementById("taskList");
let update = document.querySelector(".update");
let add = document.querySelector(".add");



let data = [];
let updatedTask ; 

    function addTask() {
      if (taskInput.value !== "" && taskInput.value !== " ") {
        data.push({
            name: taskInput.value,
            done: false
          }) 
        taskInput.value = "";
        displayData();
      }
    }

    function displayData() {
        table.innerHTML = ""; 
    
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] !== "undefined") {
                let tr = document.createElement("tr"); 
                tr.innerHTML = `
                    <td data-column="Header 1">${i}</td>
                    <td data-column="Header 2">${data[i].name}</td>
                    <td data-column="Header 2"><button class="btn1" onclick="toggleTask(${i})">Toggle</button></td>
                    <td data-column="Header 2">
                        <button class="btn2" onclick="deleteTask(${i})">Delete</button>
                        <button class="btn3" onclick="upDateTask(${i})">Update</button>
                    </td>
                `;
                if (data[i].done) {
                    tr.childNodes[3].style.textDecoration = "line-through";
                }
                table.appendChild(tr); 
                console.log();
                
            }
        }
    }


    function deleteTask(i) {
        let newData = data.filter( (_ , index) => index !== i);
        data = [...newData];
        displayData();
    }

 
    function upDateTask(i){
        updatedTask = data[i]
        add.classList.add(`d-none`)
        update.classList.remove(`d-none`)
        taskInput.value = data[i].name
    } 


    function submitUpdate() {
        let index = data.indexOf(updatedTask)
        if(taskInput.value !== "" && taskInput.value !== " ") {
            data[index].name =  taskInput.value
            taskInput.value = ''
        }else {
            data.splice(index, 1);
        }
        add.classList.remove(`d-none`)
        update.classList.add(`d-none`)
        displayData()        
    }


    function ClearInput() {
        taskInput.value = ``
      }


    function toggleTask(index) {
        if (data[index].done === false) {
          data[index].done = true;
        } else {
          data[index].done = false;
        }
        displayData();
        checkAllTasksDone()
      }
  
     


      function checkAllTasksDone() {
        let allDone = data.every(task => task && task.done);
        if (allDone && data.length > 0) {
            console.log("All tasks done!");
        }
    }



    // Extra confusing logic
    // setInterval(() => {
    //   var allDone = true;
    //   for (var z = 0; z < data.length; z++) {
    //     if (data[z] && data[z].done === false) {
    //       allDone = false;
    //     }
    //   }
    //   if (allDone && data.length > 0) {
    //     console.log("All tasks done!");
    //   }
    // }, 10000);

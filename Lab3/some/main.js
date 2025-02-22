const userText = document.getElementById("user_text");
const addBtn = document.getElementById("add_button");
const blockContainer = document.getElementById("block-container");
const checkBox = document.getElementById("done");
const taskText = document.getElementById("task_text");

function add(event){
    event.preventDefault();
    
    if(userText.value.trim() === ''){
        window.alert("you must write something");
        return;
    }
    
    let block = document.createElement("div");
    block.className = "block";
    block.innerHTML = `
                    <div class="part1">
                        <input type="checkbox" class="checker">
                        <div class="block_name" id="block-text">
                            <div class="task_text">
                                ${userText.value}
                                <div class="done_line" id = "myLine"></div>

                            </div>
                            
                        </div>   
                    </div>
                    
                    <img src="trash.png" alt="trash" class="image" onclick = "remove(this)">
                    `;
    
    blockContainer.appendChild(block);
    userText.value = '';
}
function remove(element){
    element.parentElement.remove();
}

blockContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        let taskText = e.target.closest(".block").querySelector(".task_text");
        if (taskText) {
            let doneLine = taskText.querySelector(".done_line");

            if (doneLine) {
                doneLine.classList.toggle("active"); // Добавляем/убираем стиль
            }
            
        }
    }
});

addBtn.addEventListener("click", add);


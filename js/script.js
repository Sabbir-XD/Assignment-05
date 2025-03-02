// background color change 
const bgColors = ["#cfecf7", "#494afd", "#008080", "#FFC0CB", "#e74c3c", "#2ecc71"];
document.getElementById("bg-colo-btn")
    .addEventListener('click', function(){
        const BgRandomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
        document.body.style.backgroundColor = BgRandomColor;
    })

// dynamic date in js

 function updateDate() {
    const todayDate = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[todayDate.getMonth()];
    const day = todayDate.getDate();
    const year = todayDate.getFullYear();

    const formattedDate = `${month} ${day} ${year}`;
    document.getElementById("displayDate").innerText = formattedDate;

}

updateDate();


// click the button and some feature working
const buttonComplete = document.querySelectorAll('.btn-complete');
let clickCount = 0;

for(let i = 0; i < buttonComplete.length; i++ ){
    const btnComplete = buttonComplete[i];
    btnComplete.addEventListener('click', function(event){
        alert("Board updated successfully");

        let checkBoxCount = parseInt(document.getElementById('check-box-count').innerText);
        let taskCount = parseInt(document.getElementById('task-count').innerText);
       
        checkBoxCount++;
        taskCount--;
        

        document.getElementById("check-box-count").innerText = checkBoxCount;
        document.getElementById("task-count").innerText = taskCount;
        const cartTitle = document.querySelectorAll('.cart-title');
        const nowTime = new Date();
        const currentTime = nowTime.toLocaleTimeString();
  
        const history = document.getElementById('history-list');
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="p-3 text-sm mt-3 bg-blue-50 rounded-lg">You have Complete The Task ${cartTitle[i].innerText} at ${currentTime}</p>
        `;
        history.appendChild(div);

        event.target.disabled = true;
        
        clickCount++;
        if (clickCount === buttonComplete.length) {
            alert("Congratulations, you have completed all the current tasks");
        }
    });
}

// clear history click js part
document.getElementById('clear-history-btn')
    .addEventListener("click", function(){
        const history = document.getElementById('history-list');
        history.innerHTML = "";
    })


// discover button click shift a another page
document.getElementById("discover-btn")
    .addEventListener('click', function(){
        window.location.href=("faq.html");
    });






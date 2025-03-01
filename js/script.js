// background color change 
const bgColors = ["#cfecf7", "#494afd", "	#008080", "#FFC0CB", "#e74c3c", "#2ecc71"];
document.getElementById("bg-colo-btn")
    .addEventListener('click', function(){
        const BgRandomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
        document.body.style.backgroundColor = BgRandomColor;
    })

// dynamic date in js


 function updateDateAndTime() {
    const todayDate = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[todayDate.getMonth()];
    const day = todayDate.getDate();
    const year = todayDate.getFullYear();

    const formattedDate = `${month} ${day} ${year}`;
    document.getElementById("displayDate").innerText = formattedDate;

}

updateDateAndTime();


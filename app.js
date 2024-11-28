const time = document.getElementById("time");
const day = document.getElementById("day");

function updateClock() {
    const date = new Date();
    const formatDate = date.toLocaleDateString();
    const formatTime = date.toLocaleTimeString();
    time.innerHTML = formatTime;
    day.innerHTML = formatDate;
    setTimeout(updateClock, 1000);
}
updateClock();

const clockContainer = document.querySelector(".clock-container");

document.getElementById('backgroundSelect').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case 'anime':
            clockContainer.style.backgroundImage = "url('images/anime.jpg')";
            time.style.color = "black";
            day.style.color = "black";
            break;
        case 'gradient':
            clockContainer.style.backgroundImage = "url('images/gradient.jpg')";
            time.style.color = "white";
            day.style.color = "white";
            break;
        case 'background':
            clockContainer.style.backgroundImage = "url('images/background.jpg')";
            time.style.color = "white";
            day.style.color = "white";
            break;
        case 'minimal':
            clockContainer.style.backgroundImage = "url('images/minimalist.jpg')";
            time.style.color = "black";
            day.style.color = "black";
            break;
        case 'landscape':
            clockContainer.style.backgroundImage = "url('images/landscape.jpg')";
            time.style.color = "white";
            day.style.color = "white";
            break;
    }
});

document.getElementById('sizeSelect').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    time.style.fontSize = selectedOption;
    day.style.fontSize = selectedOption;
});

document.getElementById('styleSelect').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    time.style.fontStyle = selectedOption;
    day.style.fontStyle = selectedOption;
});

document.getElementById('fontSelect').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    const fontMap = {
        'courier': 'Courier New',
        'gill': 'Gill Sans',
        'lucida': 'Lucida Sans',
        'times': 'Times New Roman',
        'trebuchet': 'Trebuchet MS'
    };
    const fontFamily = fontMap[selectedOption];
    time.style.fontFamily = fontFamily;
    day.style.fontFamily = fontFamily;
});

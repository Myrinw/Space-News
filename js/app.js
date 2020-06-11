const title = document.querySelector('.hero__title-text');

const typewriter = new Typewriter(title, {
    loop: false
});

typewriter.typeString('SPACE')
.pauseFor(400)
.typeString("-NEWS")
.start();

async function fetchData(){
    const response = await fetch('https://api.nasa.gov/insight_weather/?api_key=mqxrxvst1lt1TQEUglgJUwg2ikHjr6c6lOwtjadR&feedtype=json&ver=1.0');
    const data = await response.json();

   return data
}


fetchData().then(data => storeData(data));

function storeData(data){
    console.log(data);
}


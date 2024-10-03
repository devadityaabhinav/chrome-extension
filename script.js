let joke_box = document.getElementById("joke");
    let time_box = document.getElementById("time");
    setInterval(()=>{
        let date = new Date();
        let time = date.toLocaleTimeString()
        time_box.innerText = time
    },1000)


    const url = 'https://icanhazdadjoke.com/slack';
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onreadystatechange = function status(){
        if(xhr.status == 200){
            data = this.response
       
        data = JSON.parse(data)
        
        const joke = data.attachments[0].fallback;
        
        joke_box.innerHTML = joke;
        }
        
    }
    xhr.send();
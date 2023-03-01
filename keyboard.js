const infotext = document.querySelector('.maintext')
document.addEventListener('keydown', function(e){
    console.log(e.type)
    if(e.keyCode != 32){
        infotext.innerHTML = `You just pressed ${e.key} ${e.keyCode}`
        console.log(e.key.toUpperCase())
    }
    else{
        infotext.innerHTML = `You just pressed spacebar ${e.keyCode}`
        console.log('SPACE')
    }
})
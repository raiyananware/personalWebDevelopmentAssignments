function toggleTheme(){
    const styleTag=document.getElementById("cssLink"),
    toggleButton=document.getElementById("toggleButton")
    if(toggleButton.innerHTML=="Light"){
        styleTag.setAttribute("href", "./light.css")
        toggleButton.innerHTML="Dark"
    }
    else if(toggleButton.innerHTML=="Dark"){
        styleTag.setAttribute("href", "./dark.css")
        toggleButton.innerHTML="Light"
    }

    
}

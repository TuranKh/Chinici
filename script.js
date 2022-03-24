function itemFullScreen() {
    (document.getElementsByClassName("main-section")[0]).style.display = "none"
    document.getElementById("product-full-screen").style.display = "block"
}   
function minimiseFullScreen(){
    
    (document.getElementsByClassName("main-section")[0]).style.display = "block"
    document.getElementById("product-full-screen").style.display = "none"
}


function moveOnScroll() {
    window.addEventListener('scroll', () => {
        let y = window.scrollY
        let distance = document.getElementsByClassName('secondary-product-image')

        let finalValue = 170 - y*0.12;
        if(finalValue > -1100) {
            distance[0].style.top = `${finalValue}px`

        }
        let previousItem=0;
        
        if (-13<finalValue < 170 && finalValue > -13) {
            document.getElementsByClassName("item-left")[previousItem].style.opacity = 1
            document.getElementsByClassName("item-left")[previousItem + 1].style.opacity = 0.7;
        }

        else if (finalValue < -13 && finalValue > -198) {
            controlActiveElement(0);
        }
        else if (finalValue < -198 && finalValue > -382) {
            controlActiveElement(1);
        }
        else if (finalValue < -382 && finalValue > -566) {
            controlActiveElement(2);

        }
        else if (finalValue < -566 && finalValue > -750) {
            controlActiveElement(3);

        }
        else if (finalValue < -750 && finalValue > -934) {
            controlActiveElement(4);
        }
        
        else if (finalValue < -934 && finalValue > -1118) {
            controlActiveElement(5);
        }

        else if (finalValue < -1118 && finalValue > -1302) {
            controlActiveElement(6);
        }

        else if (finalValue < -1302 && finalValue > -1486) {
            controlActiveElement(7);
        }
        
        else if (finalValue < -1486 && finalValue > -1670) {
            controlActiveElement(8);
        }
    
    })
}

function controlActiveElement (previousItem) {
    document.getElementsByClassName("item-left")[previousItem].style.opacity = 0.7;
    document.getElementsByClassName("item-left")[previousItem + 1].style.opacity = 1;
    document.getElementsByClassName("item-left")[previousItem + 2].style.opacity = 0.7;
}

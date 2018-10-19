


let headerContainer = document.createElement('header')
// headerContainer.className = 'header'
backGroundContainer.appendChild(headerContainer);

    let logoContainer = document.createElement('div')
    logoContainer.className = 'logo-container'
    headerContainer.appendChild(logoContainer)

        let myLogo = document.createElement('h2')
        myLogo.className = 'my-logo'
        myLogo.textContent = 'Rocknroll Man'
        logoContainer.appendChild(myLogo)

    let gumbMenuHeader = document.createElement('div')
    gumbMenuHeader.className = 'gumb-menu'
    gumbMenuHeader.addEventListener('click', openReserveMenu)
    headerContainer.appendChild(gumbMenuHeader);

        let gumbImage = document.createElement('img')
        gumbImage.src = '../La_page_js_ver/static/burg.svg'
        gumbImage.bool = true
        gumbMenuHeader.appendChild(gumbImage)

let headerLineHr = document.createElement('div')
headerLineHr.className = 'line-bottom-header'
backGroundContainer.appendChild(headerLineHr);


function openReserveMenu(){
    if(gumbImage.bool === true){
    gumbImage.src = '../La_page_js_ver/static/arrow_play.svg';
    gumbImage.bool = false;
}
    else{
        gumbImage.src = '../La_page_js_ver/static/burg.svg';
        gumbImage.bool = true;
    }
};

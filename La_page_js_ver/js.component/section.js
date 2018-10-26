let leftMenuContainer = document.createElement('div')
leftMenuContainer.className = 'left-menu-open'
content.appendChild(leftMenuContainer)

let burgLeftMenu = document.createElement('div')
burgLeftMenu.className = 'burg-left-menu'
burgLeftMenu.addEventListener('click', openMenu)
leftMenuContainer.appendChild(burgLeftMenu)

    let arrowImage = document.createElement('img')
    arrowImage.src = '../La_page_js_ver/static/arrow_back.svg'
    arrowImage.bool = true;
    burgLeftMenu.appendChild(arrowImage)

let leftNavMenu = document.createElement('nav')
    leftNavMenu.className = 'left-Menu-nav'
    leftMenuContainer.appendChild(leftNavMenu)

let linkToWorks = document.createElement('li')
leftNavMenu.appendChild(linkToWorks)

    function openMenu(){
        if(arrowImage.bool === true){
            arrowImage.src = '../La_page_js_ver/static/arrow_play.svg';
            leftMenuContainer.className = 'left-menu-close'
            arrowImage.bool = false;


    }
        else{
            arrowImage.src = '../La_page_js_ver/static/arrow_back.svg';
            leftMenuContainer.className = 'left-menu-open'
            arrowImage.bool = true;
        }
    };
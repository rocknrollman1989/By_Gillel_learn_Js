let footerContainer = document.createElement('footer')
backGroundContainer.appendChild(footerContainer);

let footerLineHr = document.createElement('div')
footerLineHr.className = 'line-bottom-footer'
footerContainer.appendChild(footerLineHr);

        let allRights = document.createElement('h2')
        allRights.className = 'my-rights'
        allRights.textContent = 'All rights reserved. I think you know it'
        footerContainer.appendChild(allRights)
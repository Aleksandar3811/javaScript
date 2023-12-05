function lockedProfile() {

    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach((button) => {
        button.addEventListener('click', showMoreInfo)
    })

    function showMoreInfo(event) {
        let btn = event.target;
        let profile = btn.parentElement;
        let children = Array.from(profile.children);

        let unloclocked = children[4];
        let additionInfo = children[9];

        if(!unloclocked.checked){
            return;
        }
        if(btn.textContent==='Show more'){
            additionInfo.style.display='block';
            btn.textContent='Hide it';
        }  else if(btn.textContent==='Hide it'){
            additionInfo.style.display='none';
            btn.textContent='Show more';
        }
    }
}
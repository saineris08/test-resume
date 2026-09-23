document.addEventListener('DOMContentLoaded',()=>{
    //тема
    let btn_theme=document.getElementById('btn_th');

    if (localStorage.getItem('theme')==='dark'){
        document.body.classList.add('dark_theme');
        btn_theme.textContent='Светлая';
    }

    btn_theme.addEventListener('click',()=>{
        document.body.classList.toggle('dark_theme');
        if (document.body.classList.contains('dark_theme')){
            btn_theme.textContent='Светлая';
            localStorage.setItem('theme','dark');
        }else{
            btn_theme.textContent='Темная';
            localStorage.setItem('theme','light');
        }
    });

    //фильтры
    let find=document.getElementById('skills_find');
    let filtBtn=document.querySelectorAll('.btn_filt');
    let itemSkl=document.querySelectorAll('.list p');
    let noRes=document.getElementById('skills_no');
    let nowCat='all';

    function filterSkills(){
        let findTxt=find.value.toLowerCase().trim();
        let skillsHave=false;
        itemSkl.forEach(item =>{
            let nameItm=item.getAttribute('data-tech').toLowerCase();
            let itemCat=item.getAttribute('data-cat');
            let simCat=(nowCat==='all'||itemCat===nowCat);
            let simFind=nameItm.includes(findTxt);
            if (simCat&&simFind){
                item.style.display='flex';
                skillsHave=true;
            }else{
                item.style.display='none';
            }
        });

        if (skillsHave){
            noRes.style.display='none';
        }else{
            noRes.style.display='block';
        }
    }

    if (find){
        find.addEventListener('input',filterSkills);
    }

    filtBtn.forEach(button =>{
        button.addEventListener('click',()=>{
            let actBtn = document.querySelector('.btn_filt.active');
            if (actBtn) actBtn.classList.remove('active');
            button.classList.add('active');
            nowCat=button.getAttribute('data-category');
            filterSkills();
        });
    });
});

const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('navLinks');
function closeMenu() { menu.classList.remove('active'); menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Menü megnyitása'); }
menuButton.addEventListener('click', () => { const isOpen = menu.classList.toggle('active'); menuButton.setAttribute('aria-expanded',String(isOpen)); menuButton.setAttribute('aria-label',isOpen?'Menü bezárása':'Menü megnyitása'); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.dataset.copy);const old=button.innerHTML;button.textContent='Másolva ✓';setTimeout(()=>button.innerHTML=old,1800);}catch(e){button.textContent='Adószám: '+button.dataset.copy;}}));

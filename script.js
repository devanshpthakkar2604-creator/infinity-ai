const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
menu?.addEventListener('click',()=>{
  const open=menu.getAttribute('aria-expanded')==='true';
  menu.setAttribute('aria-expanded',String(!open));
  nav?.classList.toggle('open');
});

document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

document.querySelectorAll('[data-alert]').forEach(btn=>{
  btn.addEventListener('click',()=>alert(btn.dataset.alert+' selected. Connect your lessons/resources backend here.'));
});

document.querySelectorAll('.options button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const feedback=document.querySelector('#quiz-feedback');
    document.querySelectorAll('.options button').forEach(x=>x.disabled=true);
    if(btn.dataset.correct==='true'){
      feedback.textContent='✅ Correct! Going Concern Concept assumes the business will continue operating for the foreseeable future.';
      feedback.className='quiz-feedback correct';
    }else{
      feedback.textContent='❌ Not quite. The correct answer is B. Going Concern Concept.';
      feedback.className='quiz-feedback wrong';
    }
  });
});

document.querySelector('#copy-address')?.addEventListener('click',async()=>{
  const address='Shop No. 12, Napoleon Tower, Sai World Empire, Kharghar, Navi Mumbai';
  try{
    await navigator.clipboard.writeText(address);
    document.querySelector('#copy-address').textContent='Copied ✓';
  }catch{
    alert(address);
  }
});

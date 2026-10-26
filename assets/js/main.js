
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('[data-drive-id]').forEach(el=>{
    const id=(el.getAttribute('data-drive-id')||'').trim();
    const target=el.querySelector('[data-video-slot]');
    if(id && id!=='ISI_ID_VIDEO_DI_SINI'){
      const iframe=document.createElement('iframe');
      iframe.className='video-frame'; iframe.src='https://drive.google.com/file/d/'+encodeURIComponent(id)+'/preview';
      iframe.title=el.getAttribute('data-video-title')||'Video praktik mengajar';
      iframe.allow='autoplay; encrypted-media; picture-in-picture'; iframe.allowFullscreen=true;
      if(target) target.replaceWith(iframe);
    }
  });
});

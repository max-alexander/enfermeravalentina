document.querySelectorAll('.copy').forEach(function(b){
  b.addEventListener('click',function(){
    var done=function(){b.textContent='Copiado';setTimeout(function(){b.textContent='Copiar'},1600)};
    var sel=function(){var r=document.createRange();r.selectNodeContents(document.getElementById('tel'));var s=getSelection();s.removeAllRanges();s.addRange(r)};
    try{navigator.clipboard.writeText(b.getAttribute('data-copy')).then(done,sel)}catch(e){sel()}
  });
});

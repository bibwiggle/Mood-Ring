
    var btn=document.getElementById('btn');
    var ring=document.getElementById('ring').style.backgroundColor = "lightblue";
    btn.addEventListener('click', function(){
      if (btn.value=="Click and Hold") btn.value = "Let go whenever";
    else btn.value = "Click and Hold";
    })
    
    btn.addEventListener('click', function(){
      ring.style.backgroundColor ="red";
    }
  );

function addNumbers()
{
  var val1 = parseInt(document.getElementById("value1").value);
  var ansD = document.getElementById("answer");
  ansD.value = val1*17.2843;
  if(ansD.value>100)
    alert("You have crossed the threshold value");
  
    for (var i = 0; i < ansD.value; i++) {   
    var img=new Image();
  img.src = "image.jpg";
  img.style.width=20;   
  img.section="plotSettings";
        document.body.appendChild(img);
    }

}
                
        
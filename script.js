function agecalc(){
    var birthyear= prompt("What year were you born?? ");
    var res=(2020-birthyear)*365;
    var h1=document.createElement('h1');
     var textAnswer=document.createTextNode('You are '+ res + 'days old');
  //var textAnswer= 'You are'+ res +'days old';
    h1.setAttribute('id','hid');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(textAnswer);

}

function reset()
{
    document.getElementById('hid').remove();
}

function generate()
{
    var img= document.createElement('img');
    img.setAttribute('src','http://thecatapi.com/api/images/get?format=src&type=gif');
    
    document.getElementById('gen_cat').appendChild(img);
}
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

let items = ['who is listening?', 'who is the listener?', 'what is sounding?', 'what is the quality of a sound you hear (real or imagined)?', 'what is the character of a sound you hear (real or imagined)?', 'where is the listener?', 'where do sounds arise?', 'when do sounds arise?', 'why judge sounds?', 'how do sounds arise?'];

let generatedText = random_item(items);
    myText = document.createTextNode(generatedText);
document.body.appendChild(myText);
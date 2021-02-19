function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ['who is listening?', 'what is sounding?', 'what is the quality of the sound?', 'WHAT IS THE CHARACTER OF THE SOUND?', 'where is the listener?', 'when do sounds arise?', 'why judge sounds?', 'how do sounds arise?']; // caps vs lc?

var generatedText = random_item(items);
    myText = document.createTextNode(generatedText);
document.body.appendChild(myText); // huh?

// add next question function on click, blank click to begin
// add more questions
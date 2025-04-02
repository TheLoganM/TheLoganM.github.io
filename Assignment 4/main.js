/* 
Name: Logan
Date: March 31, 2025
Description: The purpose of this code is to created a randomly generated story that can take name inputs and switch between UK and U.S metrics

*/ 

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');



function randomValueFromArray(array){

  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const StoryText = 'It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day.'
const insertx = ['Willy the Goblin','Big Daddy','Father Christmas']
const inserty = ['the soup kitchen','Disneyland','the White House']
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk','turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {
  let NewStory = StoryText

  const Xitem = randomValueFromArray(insertx)
  const Yitem = randomValueFromArray(inserty)
  const Zitem = randomValueFromArray(insertz)

  NewStory = NewStory.replaceAll ('insertx',Xitem)
  NewStory = NewStory.replaceAll ('inserty',Yitem)
  NewStory = NewStory.replaceAll ('insertz',Zitem)

  if(customName.value !== '') {
    const name = customName.value;
    NewStory = NewStory.replaceAll('Bob',name)

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.0714)} Stone`;
    const temperature =  `${Math.round((94 - 32)*5 / 9)} Centigrade`
    NewStory = NewStory.replaceAll("94 fahrenheit",temperature)
    NewStory = NewStory.replaceAll("300 pounds",weight)



  }

  story.textContent = NewStory
  story.style.visibility = 'visible';
  
  
}


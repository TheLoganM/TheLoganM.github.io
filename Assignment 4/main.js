
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');



function randomValueFromArray(array){
  
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const StoryText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
const insertx = ['Willy the Goblin','Big Daddy','Father Christmas']
const inserty = ['the soup kitchen','Disneyland','the White House']
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk','turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {
  let NewStory = StoryText

  if(customName.value !== '') {
    const name = customName.value;
    name = name.replaceAll('Bob',customName)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = NewStory
  story.style.visibility = 'visible';
  
  
}

const NewStory = StoryText
const Xitem = randomValueFromArray(insertx)
const Yitem = randomValueFromArray(inserty)
const Zitem = randomValueFromArray(insertz)

NewStory = NewStory.replaceAll ('insertx',Xitem)
NewStory = NewStory.replaceAll ('inserty',Yitem)
NewStory = NewStory.replaceAll ('insertz',Zitem)


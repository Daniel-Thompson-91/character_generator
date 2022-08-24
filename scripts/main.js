const race1 = ['Elf', 'Human', 'Dwarf', 'Ogre', 'Giant', 'Gnome', 'Fairy', 'Dragon', 'Sentient Animal', 'shape-shifter'];
let race2 = [];
const adjectives = ['an enchanted', 'a vast', 'a lush', 'a fortified', 'a quaint', 'an endless', 'a dark', 'a mysterious', 'a small', 'a lonely'];
const environments = ['forest', 'desert', 'meadow', 'city', 'village', 'mountain range', 'swamp', 'fishing town'];
const act1 = ['hiking', 'fishing', 'hunting', 'mining', 'raising animals', 'adventuring', 'sparring', 'creating', 'reading', 'travelling'];
let act2 = [];
let act3 = [];
const timeFrames = ['day', 'week', 'month', 'year', 'decade', 'century', 'millenia', 'age'];

let race1InDoc = document.getElementById('race1');
let race2InDoc = document.getElementById('race2');
let adjectiveInDoc = document.getElementById('adjective');
let environmentInDoc = document.getElementById('environment');
let act1InDoc = document.getElementById('act1');
let act2InDoc = document.getElementById('act2');
let act3InDoc = document.getElementById('act3');
let timeFrameInDoc = document.getElementById('timeFrame');
let generate = document.getElementById('generate');

const generateRace1 = () => {
  let race1Gen = race1[Math.floor(Math.random() * race1.length)];
  race2 = race1;
  for (let i = 0; i < race1.length; i++) {
    if (race1[i] === race1Gen) {
      race2 = race1.filter(arr => arr !== race1Gen);
    }
  };
  if (race1Gen[0] === 'A' || race1Gen[0] === 'E' || race1Gen[0] === 'I' || race1Gen[0] === 'O' || race1Gen[0] === 'U') {
    race1InDoc.innerHTML = `an ${race1Gen}`;
  } else {
    race1InDoc.innerHTML = `a ${race1Gen}`;
  };
};

const generateRace2 = () => {
  let race2Gen = race2[Math.floor(Math.random() * race2.length)];
  race2InDoc.innerHTML = race2Gen;
};

const adjective = () => {
  let adjGen = adjectives[Math.floor(Math.random()*adjectives.length)];
  adjectiveInDoc.innerHTML = adjGen;
};

const environment = () => {
  let enviroGen = environments[Math.floor(Math.random()*environments.length)];
  environmentInDoc.innerHTML = enviroGen;
};

const activity1 = () => {
  let act1Gen = act1[Math.floor(Math.random() * act1.length)];
  act2 = act1;
  for (let i = 0; i < act1.length; i++) {
    if (act1[i] === act1Gen) {
      act2 = act1.filter(arr => arr !== act1Gen);
    }
  };
  act1InDoc.innerHTML = act1Gen;
};

const activity2 = () => {
  let act2Gen = act2[Math.floor(Math.random() * act2.length)];
  act3 = act2;
  for (let i = 0; i < act2.length; i++) {
    if (act2[i] === act2Gen) {
      act3 = act2.filter(arr => arr !== act2Gen);
    }
  };
  act2InDoc.innerHTML = act2Gen;
};

const activity3 = () => {
  let act3Gen = act3[Math.floor(Math.random() * act3.length)];
  act3InDoc.innerHTML = act3Gen;
};

const timeFrame = () => {
  let timeGen = timeFrames[Math.floor(Math.random()*timeFrames.length)];
  timeFrameInDoc.innerHTML = timeGen;
};

//generate.onclick = runProgram;
generate.addEventListener('click', generateRace1);
generate.addEventListener('click', adjective);
generate.addEventListener('click', environment);
generate.addEventListener('click', activity1);
generate.addEventListener('click', activity2);
generate.addEventListener('click', activity3);
generate.addEventListener('click', generateRace2);
generate.addEventListener('click', timeFrame);

/*const generateCharacter = () => {
  console.log(`You are ${generateRace1(race1)} from ${adjective(adjectives)} ${environment(environments)}. You enjoy ${activity1(act1)}, ${activity2(act2)}, and ${activity3(act3)}. Your race has been at war with the ${generateRace2(race2)} society for a little over a ${timeFrame(timeFrames)}.`);
  console.log('You are the only one who can bridge the gap between the races.');
  console.log('Your adventure starts now!');
}*/
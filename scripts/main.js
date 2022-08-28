const race1 = ['Elf', 'Human', 'Dwarf', 'Ogre', 'Giant', 'Gnome', 'Fairy', 'Dragon', 'Sentient Animal', 'shape-shifter'];
let race2 = [];
const adjectives = ['enchanted', 'vast', 'lush', 'fortified', 'quaint', 'endless', 'dark', 'mysterious', 'small', 'lonely'];
const environments = ['forest', 'desert', 'meadow', 'city', 'village', 'mountain range', 'swamp', 'fishing town'];
const act1 = ['hiking', 'fishing', 'hunting', 'mining', 'raising animals', 'adventuring', 'sparring', 'creating', 'reading', 'travelling'];
let act2 = [];
let act3 = [];
const timeFrames = ['day', 'week', 'month', 'year', 'decade', 'century', 'millenia', 'age'];

const WelcomeSection = document.getElementById('before-generate');
const CharacterSection = document.getElementById('after-generate');
const race1InDoc = document.getElementById('race1');
const race2InDoc = document.getElementById('race2');
const adjectiveInDoc = document.getElementById('adjective');
const environmentInDoc = document.getElementById('environment');
const act1InDoc = document.getElementById('act1');
const act2InDoc = document.getElementById('act2');
const act3InDoc = document.getElementById('act3');
const timeFrameInDoc = document.getElementById('timeFrame');
const generate = document.getElementsByClass('generate');

const hideWelcomeSection = () => {
  welcomeSection.style.display = 'none';
};

const showCharacterSection = () => {
  CharacterSection.style.display = 'flex';
};

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

const generateAdjective = () => {
  let adjGen = adjectives[Math.floor(Math.random()*adjectives.length)];
  if (adjGen[0] === 'A' || adjGen[0] === 'E' || adjGen[0] === 'I' || adjGen[0] === 'O' || adjGen[0] === 'U') {
    adjectiveInDoc.innerHTML = `an ${adjGen}`;
  } else {
    adjectiveInDoc.innerHTML = `a ${adjGen}`;
  };
};

const generateEnvironment = () => {
  let enviroGen = environments[Math.floor(Math.random()*environments.length)];
  environmentInDoc.innerHTML = enviroGen;
};

const generateActivity1 = () => {
  let act1Gen = act1[Math.floor(Math.random() * act1.length)];
  act2 = act1;
  for (let i = 0; i < act1.length; i++) {
    if (act1[i] === act1Gen) {
      act2 = act1.filter(arr => arr !== act1Gen);
    }
  };
  act1InDoc.innerHTML = act1Gen;
};

const generateActivity2 = () => {
  let act2Gen = act2[Math.floor(Math.random() * act2.length)];
  act3 = act2;
  for (let i = 0; i < act2.length; i++) {
    if (act2[i] === act2Gen) {
      act3 = act2.filter(arr => arr !== act2Gen);
    }
  };
  act2InDoc.innerHTML = act2Gen;
};

const generateActivity3 = () => {
  let act3Gen = act3[Math.floor(Math.random() * act3.length)];
  act3InDoc.innerHTML = act3Gen;
};

const generateTimeFrame = () => {
  let timeGen = timeFrames[Math.floor(Math.random()*timeFrames.length)];
  timeFrameInDoc.innerHTML = timeGen;
};

//generate.onclick = runProgram;
generate.addEventListener('click', hideWelcomeSection, {once: true});
generate.addEventListener('click', showCharacterSection, {once: true});
generate.addEventListener('click', generateRace1);
generate.addEventListener('click', generateAdjective);
generate.addEventListener('click', generateEnvironment);
generate.addEventListener('click', generateActivity1);
generate.addEventListener('click', generateActivity2);
generate.addEventListener('click', generateActivity3);
generate.addEventListener('click', generateRace2);
generate.addEventListener('click', generateTimeFrame);

/*const generateCharacter = () => {
  console.log(`You are ${generateRace1(race1)} from ${adjective(adjectives)} ${environment(environments)}. You enjoy ${activity1(act1)}, ${activity2(act2)}, and ${activity3(act3)}. Your race has been at war with the ${generateRace2(race2)} society for a little over a ${timeFrame(timeFrames)}.`);
  console.log('You are the only one who can bridge the gap between the races.');
  console.log('Your adventure starts now!');
}*/
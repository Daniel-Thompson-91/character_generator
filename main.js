const race1 = ['Elf', 'Human', 'Dwarf', 'Ogre', 'Giant', 'Gnome', 'Fairy', 'Dragon', 'Sentient Animal', 'shape-shifter'];
let race2 = [];
const adjectives = ['an enchanted', 'a vast', 'a lush', 'a fortified', 'a quaint', 'an endless', 'a dark', 'a mysterious', 'a small', 'a lonely'];
const environments = ['forest', 'desert', 'meadow', 'city', 'village', 'mountain range', 'swamp', 'fishing town'];
const act1 = ['hiking', 'fishing', 'hunting', 'mining', 'raising animals', 'adventuring', 'sparring', 'creating', 'reading', 'travelling'];
let act2 = [];
let act3 = [];
const timeFrames = ['day', 'week', 'month', 'year', 'decade', 'century', 'millenia', 'age'];

const generateRace1 = race => {
  let race1Gen = race[Math.floor(Math.random() * race.length)];
  race2 = race;
  for (let i = 0; i < race.length; i++) {
    if (race[i] === race1Gen) {
      race2 = race.filter(arr => arr !== race1Gen);
    }
  };
  if (race1Gen[0] === 'A' || race1Gen[0] === 'E' || race1Gen[0] === 'I' || race1Gen[0] === 'O' || race1Gen[0] === 'U') {
    return `an ${race1Gen}`;
  } else {
    return `a ${race1Gen}`;
  }
};

const generateRace2 = race => {
  let race2Gen = race[Math.floor(Math.random() * race.length)];
  return race2Gen;
};

const adjective = (adj) => {
  let adjGen = adj[Math.floor(Math.random()*adj.length)];
  return adjGen;
};

const environment = (enviro) => {
  let enviroGen = enviro[Math.floor(Math.random()*enviro.length)];
  return enviroGen;
};

const activity1 = (act) => {
  let act1Gen = act[Math.floor(Math.random() * act.length)];
  act2 = act1;
  for (let i = 0; i < act.length; i++) {
    if (act[i] === act1Gen) {
      act2 = act.filter(arr => arr !== act1Gen);
    }
  }
  return act1Gen;
};

const activity2 = (act) => {
  let act2Gen = act[Math.floor(Math.random() * act.length)];
  act3 = act2;
  for (let i = 0; i < act.length; i++) {
    if (act[i] === act2Gen) {
      act3 = act.filter(arr => arr !== act2Gen);
    }
  }
  return act2Gen;
};

const activity3 = act => act[Math.floor(Math.random() * act.length)];

const timeFrame = (time) => {
  let timeGen = time[Math.floor(Math.random()*time.length)];
  return timeGen;
};

const generateCharacter = () => {
  console.log(`You are ${generateRace1(race1)} from ${adjective(adjectives)} ${environment(environments)}. You enjoy ${activity1(act1)}, ${activity2(act2)}, and ${activity3(act3)}. Your race has been at war with the ${generateRace2(race2)} society for a little over a ${timeFrame(timeFrames)}.`);
  console.log('You are the only one who can bridge the gap between the races.');
  console.log('Your adventure starts now!');
}
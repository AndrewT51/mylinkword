// import Sound from 'react-native-sound';

function loadSounds(file){
  // return new Sound(file, Sound.MAIN_BUNDLE, (error) => this.play)
}

var AnimalData = [
  
  {
    en: 'CAT',
    sp: 'GATO',
    phonetic: '',
    desc: 'Imagine a cat eating a GATEAU'
  },
  {
    en: 'DOG',
    sp: 'PERRO',
    phonetic: 'PERRO',
    desc: 'Imagine a dog PIROUETTING',
  },
  {
    en: 'GOAT',
    sp: 'CABRA',
    phonetic: 'KABRA',
    desc: 'Imagine a COBRA striking at a goat'
  },
  {
    en: 'BULL',
    sp: 'TORO',
    phonetic: 'TORO',
    desc: 'Imagine a TOREADOR fighting a bull'

  },
  {
    en: 'COW',
    sp: 'VACA',
    audio: '',
    phonetic: 'VAKA',
    desc: 'Imagine a cow VACCUUMING a field'

  },
  {
    en: 'DUCK',
    sp: 'PATO',
    audio: '',
    phonetic: 'PATO',
    desc: 'Imagine PATTING a duck on its head'
  },
  {
    en: 'GOOSE',
    sp: 'GANSO',
    audio: '',
    phonetic: 'GANSO',
    desc: 'Imagine GANGS OF geese going around together'
  },
  {
    en: 'PIG',
    sp: 'CERDO',
    audio: '',
    phonetic: 'CERDO',
    desc: 'Imagine you eat a THIRD O\' a pig',
  },
  {
    en: 'DONKEY',
    sp: 'BURRO',
    audio: '',
    phonetic: 'BOORRO',
    desc: 'Imagine a donkey at a writing BUREAU'
  },

  {
    en: 'FROG',
    sp: 'RANA',
    audio: '',
    phonetic: 'RANA',
    desc: 'Imagine you RAN A mile after seeing a horrible frog',
    initiateRevision: true
  },
  {
    grammar: true,
    heading: 'Elementary grammar',
    sentences: [
      'The first bit of grammar to learn is that all nouns, or things, whether living or non-living, are either masculine or feminine.',
      'If they end in an "o", they are MASCULINE.',
      'For example, BULL is TORO, CAT is GATO and DOG is PERRO.',
      'All these words end in an "o" and are therefore masculine words.',
      'Words which end in an "a" are FEMININE words.',
      'CABRA for GOAT and VACA for COW end in an "a" and are therefore feminine words.',
      '\n',
      'PATO',
      'MASCULINE',
      '\n',
      'BURRO',
      'MASCULINE',
      '\n',
      'RANA',
      'FEMININE',
      '\n',
      'GANSO',
      'MASCULINE',
      '\n',
      'A few words do not end in "o" or "a". Do not worry about these. We will deal with them later.'
    ],
    text: 'The first bit of grammar to learn is that all nouns, or things, whether living or non-living, are either masculine or feminine.\n'+
      '\n'+
      'If they end in an "o", they are MASCULINE.\n'+
      'For example, BULL is TORO, CAT is GATO and DOG is PERRO.\n'+
      'All these words end in an "o" and are therefore masculine words.\n'+
      '\n'+
      'Words which end in an "a" are FEMININE words.\n'+
      'CABRA for GOAT and VACA for COW end in an "a" and are therefore feminine words.\n'+
      '\n'+
      'PATO\n'+
      'MASCULINE\n'+
      '\n'+
      'BURRO\n'+
      'MASCULINE\n'+
      '\n'+
      'RANA\n'+
      'FEMININE\n'+
      '\n'+
      'GANSO\n'+
      'MASCULINE\n'+
      '\n'+
      'A few words do not end in "o" or "a". Do not worry about these. We will deal with them later.'

  },
  {
    en: 'MONKEY',
    sp: 'MONO',
    audio: '',
    phonetic: 'MONO',
    desc: 'Imagine a monkey wearing a MONOCLE'
  },
  {
    en: 'RAT',
    sp: 'RATA',
    audio: '',
    phonetic: 'RATA',
    desc: 'Imagine a RAT fighting a bullfighter'
  },
  {
    en: 'MOUSE',
    sp: 'RATON',
    audio: '',
    phonetic: 'RATON',
    desc: 'Imagine a RAT ON a mouse, squashing it flat'
  },
  {
    en: 'ANIMAL',
    sp: 'ANIMAL',
    audio: '',
    phonetic: 'ANEEMAL',
    desc: 'Imagine a bullfighter surrounded by a whole lot of different ANIMALS'
  },
  {
    en: 'SALMON',
    sp: 'SALMON',
    audio: '',
    phonetic: 'SALMON',
    desc: 'Imagine a SALMON leaping over a bullfighter'
  },
  {
    en: 'WASP',
    sp: 'AVISPA',
    audio: '',
    phonetic: 'AVEESPA',
    desc: 'Imagine A WHISPER in your ear as a wasp buzzes near you'
  },
  {
    en: 'BEAR',
    sp: 'OSO',
    audio: '',
    phonetic: 'OSO',
    desc: 'Imagine a big grizzly bear OH! SO near you'
  },
  {
    en: 'A (LIVE) FISH',
    sp: 'PEZ',
    audio: '',
    phonetic: 'PEZ',
    desc: 'Imagine a fish in an aquarium eating the PITH of an orange'
  },
  {
    en: 'ELEPHANT',
    sp: 'ELEPHANTE',
    audio: '',
    phonetic: 'ELEFANTAY',
    desc: 'Imagine a bullfighter fighting an ELEPHANT'
  },
  {
    en: 'BEE',
    sp: 'ABEJA',
    audio: '',
    phonetic: 'ABEHA',
    desc: 'Imagine a BAKER being chased by a bee',
    initiateRevision: true
  },
  {
    grammar: true,
    heading: 'Elementary grammar',
    text: 'You learned after the last group of words that all nouns are either '+
    'masculine or feminine. If they end in "o" they are masculine, like GATO for '+
    'CAT. If they end in "a" they are feminine like CABRA for GOAT.\n' +
    '\n'+
    'If they do not end in either an "o" or an "a", you can assume they are masculine, '+
    'although you will make the occasional mistake.\n' +
    '\n'+
    'If the word is MASCULINE, then the word for THE is EL.\n' +
    '\n'+
    'So: \n'+
    'EL TORO is THE BULL \n'+
    'EL GATO is THE CAT \n'+
    'EL MONO is THE MONKEY \n'+
    '\n'+
    'Try to remember that men are HELL to live with.\n'+
    'If the word is FEMININE, however, then the word for THE is LA.\n'+
    '\n'+
    'So: \n'+
    'LA VACA is THE COW \n'+
    'LA RATA is THE RAT \n'+
    'LA CABRA is THE GOAT \n'+
    '\n'+
    'As we saw just now, where the word does not end in an "a" or an "o", such as '+
    'ANIMAL, RATON, PEZ, etc., it is almost always masculine.\n'+
    '\n'+
    'So: \n'+
    'EL ANIMAL is THE ANIMAL \n'+
    'EL PEZ is THE FISH \n'+
    'EL ELEFANTE is THE ELEPHANT \n'+
    '\n'+
    'THE DOG\n' +
    'EL PERRO\n'+
    '\n'+
    'THE SALMON\n' +
    'EL SALMON\n'+
    '\n'+
    'THE GOAT\n' +
    'LA CABRA\n'+
    '\n'+
    'THE COW\n' +
    'LA VACA\n'+
    '\n'
  }

].map(function(word){
  if (!word.hasOwnProperty('grammar')){
    word.audio = loadSounds(word.sp.toLowerCase() + '.mp3')
  }
  return word
})


export default AnimalData

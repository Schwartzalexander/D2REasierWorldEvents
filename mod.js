// all credit to olegbl, based off his mods

const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);

cubemain.rows.push({
  description: `${config.itemPortal} > ingredients for a Pandemonium Portal`,
  enabled: 1,
  version: 100,
  numinputs: 1,
  'input 1': config.itemPortal,
  output: `pk1`,
  'output b': `pk2`,
  'output c': `pk3`,
  ilvl: 1000,
  '*eol': 0,
});

cubemain.rows.push({
  description: `${config.itemFinalePortal} > ingredients for a Pandemonium Finale Portal`,
  enabled: 1,
  version: 100,
  numinputs: 1,
  'input 1': config.itemFinalePortal,
  output: `dhn`,
  'output b': `bey`,
  'output c': `mbr`,
  ilvl: 1000,
  '*eol': 0,
});

cubemain.rows.push({
  description: `${config.itemJordan} > ${config.itemJordan} + The Stone of Jordan`,
  enabled: 1,
  version: 100,
  numinputs: 1,
  'input 1': config.itemJordan,
  output: "useitem",
  'output b': "The Stone of Jordan",
  'b lvl': 39,
  '*eol': 0,
});

D2RMM.writeTsv(cubemainFilename, cubemain);


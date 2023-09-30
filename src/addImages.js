export default (arr) => {
  const images = [
    '/assets/jyuratodus.png',
    '/assets/tobi-kadachi.png',
    '/assets/anjanath.jpg',
    '/assets/azure-rathalos.webp',
  ];

  for (let i = 0; i < arr.length; i += 1) {
    const obj = images[i];
    if (obj === undefined) return;
    const monster = arr[i];
    const newMonster = { ...monster, image: obj };
    arr.splice(arr.indexOf(monster), 1, newMonster);
  }
};

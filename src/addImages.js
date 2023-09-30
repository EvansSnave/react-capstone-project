export default (arr) => {
  const images = [
    '/assets/jyuratodus.png',
    '/assets/tobi-kadachi.png',
    '/assets/anjanath.jpg',
    '/assets/azure-rathalos.webp',
    '/assets/bazelgeuse.webp',
    '/assets/behemot.png',
    '/assets/deviljho.png',
    '/assets/diablos.png',
    '/assets/black-diablos.png',
    '/assets/dodogama.webp',
    '/assets/great-girros.png',
    '/assets/kirin.webp',
    '/assets/kulve-taroth.png',
    '/assets/kushala-daora.webp',
    '/assets/lavasioth.webp',
    '/assets/legiana.png',
  ];

  for (let i = 0; i < arr.length; i += 1) {
    const obj = images[i];
    if (obj === undefined) return;
    const monster = arr[i];
    const newMonster = { ...monster, image: obj };
    arr.splice(arr.indexOf(monster), 1, newMonster);
  }
};

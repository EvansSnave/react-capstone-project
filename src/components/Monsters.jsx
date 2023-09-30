import { useSelector } from 'react-redux';

export default () => {
  const state = useSelector((state) => state.monsters);
  const monsters = state.slice(20, 36);
  const newMonsters = [];

  const images = [
    '/assets/jyuratodus.png',
  ];

  for (let i = 0; i < monsters.length; i++) {
    const obj = { ...monsters[i], img: images[i] };
    newMonsters.push(obj);
  }

  return newMonsters;
};

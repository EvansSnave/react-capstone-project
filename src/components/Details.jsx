import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const monsters = useSelector((state) => state.monsters);
  const monsterCut = monsters.slice(20, 36);
  console.log(monsters);
  const [monster, setMonster] = useState('');
  const { monsterID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    monsters.forEach((monster) => {
      if (monster.id === Number(monsterID)) {
        setMonster(monster);
      }
    });
  }, [monsterID, monsterCut]);

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate('/')}
      />
      <div>
        <h1>{monster.name}</h1>
        <img alt="" />
      </div>
      <div>
        <div>{monster.elements[0]}</div>
        <div>{monster.description}</div>
        <div>{monster.locations[0].name}</div>
        <div>{monster.locations[1].name}</div>
        <div>{monster.resistances[0].element}</div>
        <div>{monster.weaknesses[0].element}</div>
      </div>
    </div>
  );
};

export default Details;

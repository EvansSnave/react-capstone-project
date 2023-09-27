import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const monsters = useSelector((state) => state.monsters);
  const monsterCut = monsters.slice(20, 36);
  const [monster, setMonster] = useState('');
  const monsterID = useParams();
  const id = Number(monsterID.monster);
  const navigate = useNavigate();

  useEffect(() => {
    monsterCut.forEach((monster) => {
      if (monster.id === id) {
        setMonster(monster);
      }
    });
  }, [id, monsterCut]);

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
        <div>{monster.description}</div>
        <div>{monster.type}</div>
        <div>{monster.species}</div>
      </div>
    </div>
  );
};

export default Details;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMonstersAPI } from '../redux/slices/monsterSlice';
import addImages from '../addImages';

const CreateCard = ({
  name, species, id, image,
}) => (
  <Link to={`/${id}`}>
    <img alt="" />
    <div>
      <img alt="" src={image} />
      <h2>{name}</h2>
      <p>{species}</p>
    </div>
  </Link>
);

CreateCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMonstersAPI());
  }, [dispatch]);

  const monsters = useSelector((state) => state.monsters);
  const reducedList = monsters.slice(20, 36);
  addImages(reducedList);

  return (
    <main>
      <div>
        <img alt="" />
        <h1>Monster Hunter data</h1>
      </div>
      <div>
        <div>Large monsters</div>
        <div>
          {reducedList.map((monster) => (
            <CreateCard
              key={monster.id}
              id={monster.id}
              name={monster.name}
              species={monster.species}
              image={monster.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;

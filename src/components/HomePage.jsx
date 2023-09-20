import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMonstersAPI } from '../redux/slices/monsterSlice';

const CreateCard = () => (
  <div>
    <img alt="" />
    <div>
      <img alt="" />
      <h2>Monster name</h2>
      <p>Species</p>
    </div>
  </div>
);

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMonstersAPI());
  }, [dispatch]);

  return (
    <main>
      <div>
        <img alt="" />
        <h1>Monster Hunter data</h1>
      </div>
      <div>
        <div>Large monsters</div>
        <div>
          <CreateCard />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

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

const HomePage = () => (
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

export default HomePage;

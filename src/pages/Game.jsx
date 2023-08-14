const Game = () => {
  return (
    <>
      <div
        id='bg-animation'
        className='hero min-h-screen bg-[url(/src/assets/Bg-Game.jpg)] bg-no-repeat bg-cover'
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-3xl sm:text-5xl font-bold'>Game Balap Karung</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;

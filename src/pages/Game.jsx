const Game = () => {
  return (
    <>
      <div
        id='bg-animation'
        className='hero fixed top-0 left-0 -z-[999] w-screen h-screen bg-[url(/src/assets/Bg-Game.jpg)] brightness-50 bg-no-repeat bg-cover'
      >
      </div>
      <div className="wrapper z-[999] flex justify-center items-center w-screen h-screen">
        <div className="box-game bg-white rounded-lg overflow-hidden border-4 border-red-700 w-[400px] h-[500px]">
          
        </div>
      </div>
    </>
  );
};

export default Game;

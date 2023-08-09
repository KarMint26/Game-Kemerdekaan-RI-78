import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hello">Hello World</div>
      <div className='hero min-h-screen bg-[url(/src/assets/Hero.jpg)] bg-cover bg-no-repeat'>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-3xl sm:text-5xl font-bold'>Selamat Datang</h1>
            <p className='mb-5 text-sm sm:text-base font-semibold'>Ini adalah website untuk memainkan game dalam rangka memperingati kemerdekaan RI yang ke-78 <br /> Dirgahayu Republik Indonesia</p>
            <Link to='/game-kemerdekaan-ri' className='btn btn-primary text-white'>Main Sekarang</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
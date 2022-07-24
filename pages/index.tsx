import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <ConnectButton />

      <form>
        <input className='border-2' type='text' />

        <button type='submit'>Mint</button>
      </form>
    </div>
  );
};

export default Home;

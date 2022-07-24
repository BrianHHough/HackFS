import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useContract, useContractWrite, useProvider } from 'wagmi';
import abiFile from '../abi.json';
import Confetti from 'react-confetti';

const CONTRACT_ADDRESS = '0xEB2648a8c9aE50605973821855056068103c9b88';

const getOpenSeaURL = (tokenId: string | number) =>
  `https://testnets.opensea.io/collection/scoops-domains-on-polygon-v3`;
// `https://testnets.opensea.io/assets/goerli/${CONTRACT_ADDRESS}/${tokenId}`;

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [mintLoading, setMintLoading] = useState(false);
  const [mintedTokenId, setMintedTokenId] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const contractConfig = {
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abiFile.abi,
  };

  const { writeAsync: mint, error: mintError } = useContractWrite({
    ...contractConfig,
    functionName: 'registerDomainToOwner',
  });

  const provider = useProvider();

  const contract = useContract({
    ...contractConfig,
    signerOrProvider: provider,
  });

  const onMintClick = async () => {
    try {
      setMintLoading(true);

      console.log(contract);

      // get domain's price
      const price = await contract.priceOfDomain(name);

      console.log(price.toString());

      const tx = await mint({
        args: [name, { value: price.toString() }],
      });
      const receipt = await tx.wait();
      console.log('TX receipt', receipt);
      // @ts-ignore
      const mintedTokenId = await receipt.events[0].args[2].toString();
      setMintedTokenId(mintedTokenId);
    } catch (error) {
      console.error(error);
    } finally {
      setMintLoading(false);
      setShowConfetti(true);
    }
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <div className='p-20 flex flex-col items-center'>
        <div className='flex justify-center'>
          <ConnectButton />
        </div>

        <h1 className='mt-6 text-4xl font-bold'>Scoop Domain Service 🍨</h1>
        <h3 className='mt-2 text-xl font-semibold text-slate-500'>
          Mint a domain of your choice on Polygon Mumbai 💜
        </h3>

        <form className='mt-10 flex flex-col items-center'>
          <div className='flex flex-col items-start'>
            <label htmlFor='nameInput' className='text-sm'>
              Name
            </label>
            <input
              id='nameInput'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border-2 p-2 rounded min-w-[300px]'
              type='text'
              placeholder='Enter the domain name you want to pick'
            />
          </div>

          <button
            className='disabled:opacity-20 border-[1px] text-white bg-blue-700 font-bold rounded-lg mt-6 w-fit px-4 py-2 drop-shadow-lg'
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              onMintClick();
            }}
            disabled={mintLoading}
          >
            Mint
          </button>
        </form>

        {mintError && (
          <pre style={{ marginTop: '8px', color: 'red' }}>
            <code>{JSON.stringify(mintError, null, ' ')}</code>
          </pre>
        )}
        {mintLoading && <p className='mt-2'>Minting... please wait</p>}

        {mintedTokenId && (
          <p className='mt-2'>
            🥳 Mint successful! You can view your NFT{' '}
            <a
              href={getOpenSeaURL(mintedTokenId)}
              className='underline text-blue-700'
              target='_blank'
              rel='noreferrer'
            >
              here!
            </a>
          </p>
        )}
      </div>
    </>
  );
};

export default Home;

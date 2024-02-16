import { useRef } from 'react'
import Image from 'next/image'
import styles from './Hero.module.scss'
import {
  ConnectWallet,
  darkTheme,
  useAddress,
  Web3Button,
} from '@thirdweb-dev/react'

export default function Hero() {
  const address = useAddress()

  const customTheme = darkTheme({
    colors: {
      modalBg: 'transparent',
      primaryText: '#7e7d86',
      walletSelectorButtonHoverBg: '#EEEEEE',
      separatorLine: '#EEEEEE',
      borderColor: '#EEEEEE',
      secondaryText: '#EEEEEE',
    },
  })

  return (
    <main id="Home" className={styles.main}>
      <div className="bg-black w-screen xl:h-[7vh] h-[8vh] fixed z-50">
        <div className="border-2 border-gray-900 left-0 top-0 fixed w-[30vw] md:w-[32vw] lg:w-[24vw] bg-white z-50 h-16 flex flex-row justify-between lg:px-6 m-4 rounded-[50px] shadow-[3px_3px_0px_0px_#000]">
          <div className="p-2 flex flex-row relative">
            <div className={styles.burst}></div>
            <p className="xl:text-3xl md:text-2xl lg:text-xl text-sm ml-2 mt-1 lg:ml-0">Rupesh Wadne.</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className="w-full xl:p-7 p-2 items-center flex flex-col lg:text-5xl xl:text-8xl text-8xl font-bold lg:gap-14 gap-4">
          <div className="flex items-center justify-center">
            <h1 className="">Web3</h1>
            <Image
              className="object-cover lg:w-24 w-16 lg:h-24 h-16 rounded-full shadow-[5px_5px_0px_0px_#000] border-2 border-gray-900 ml-6"
              height={100}
              width={100}
              src="/blockchain.gif"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <Image
              className="object-cover rounded-xl lg:w-50 w-30 lg:h-20 h-14 shadow-[5px_5px_0px_0px_#000] border-2 border-gray-900 items-center mr-6"
              height={100}
              width={200}
              src="/gbb.gif"
              alt=""
            />
            <h1 className="">Full-stack</h1>
          </div>
          <div className="flex items-center">
            <h1 className="">Developer</h1>
            <Image
              className="object-cover lg:w-24 w-16 lg:h-24 h-16 rounded-full shadow-[5px_5px_0px_0px_#000] border-2 border-gray-900 ml-6"
              height={100}
              width={100}
              src="/hero.png"
              alt=""
            />
          </div>
        </div>
        {/* <div ref={plane} className={styles.body}>
          <div className="flex items-center">
            <Text3d primary={'Rupesh'} secondary={'Wadne'} />
            <Image
              className="object-cover w-32 h-32 rounded-full shadow-[5px_5px_0px_0px_#000] border-2 border-gray-900 ml-6 mb-4"
              height={100}
              width={100}
              src="/hero.png"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <Image
              className="object-cover rounded-xl w-60 h-36 shadow-[5px_5px_0px_0px_#000] border-2 border-gray-900 items-center mr-6 mb-4"
              height={100}
              width={200}
              src="/gbb.gif"
              alt=""
            />
            <Text3d primary={'FullStack'} secondary={'Developer'} />
          </div>
          <Text3d primary={'Web3'} secondary={'Gardener'} />
        </div> */}
      </div>
      <div className={styles.container2}>
        <div className={styles.body}>
          <div className={styles.frame}>
            <Image
              className={styles.img}
              quality={100}
              width={800}
              height={800}
              src={`/shubham.jpeg`}
              alt="profile"
            />
            {/* {address ? (
              <Web3Button
                style={{
                  marginLeft: '300px',
                  marginTop: '10px',
                  borderRadius: '50px',
                  border: '1px solid #1f1f1f',
                }}
              >
                Mint NFT
              </Web3Button>
            ) : (
              <ConnectWallet
                style={{
                  marginLeft: '300px',
                  marginTop: '10px',
                  borderRadius: '50px',
                  border: '1px solid #1f1f1f',
                  boxShadow: '5px 5px 0px 0px #02131f',
                }}
                className={styles.button}
                theme={customTheme}
                modalSize={'wide'}
                modalTitle="Maratha Buildoor"
                modalTitleIconUrl=""
                btnTitle="Login"
              />
            )} */}
          </div>
        </div>
      </div>
    </main>
  )
}

// function Text3d({ primary, secondary }) {
//   return (
//     <div className={styles.textContainer}>
//       <p className={styles.primary}>{primary}</p>
//       <p className={styles.secondary}>{secondary}</p>
//     </div>
//   )
// }

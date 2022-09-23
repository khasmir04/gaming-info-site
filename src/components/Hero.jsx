import React from 'react';
import Footer from './Footer';
import LatestGames from './LatestGames';
import NaviBar from './NaviBar';
import { Link } from 'react-router-dom';
import LatestNews from './LatestNews';
import { useEffect } from 'react';
import AOS from 'aos';

const Hero = () => {
  useEffect(() => {
    document.title = 'Game On | HOME';
    AOS.init();
  }, []);
  return (
    <div>
      <NaviBar title='Home' />
      <div className='hero-bg bg-cover bg-opacity-50 h-[calc(100vh-210px)] flex flex-col justify-center items-center'>
        <div
          data-aos='fade-up'
          data-aos-duration='800'
          className='ml-16 md:-ml-20 lg:-ml-80'
        >
          <div className='flex flex-col'>
            <p className='text-2xl md:text-3xl lg:text-4xl text-[#DC3D4B] nunito'>
              Welcome Gamer
            </p>
            <p className='text-5xl md:text-6xl lg:text-7xl halant font-bold text-white'>
              EXPLORE THE BEST <span className='md:block'>GAMES TODAY</span>
            </p>
            <div>
              <button className='bg-[#DC3D4B] hover:bg-gray-800 hover:border-white hover:border text-white py-2 px-4 rounded mt-2'>
                <Link to='/games'>See More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='h-28 bg-[#201B1B]'>
        <div className='flex justify-around'>
          <svg
            className='mt-2'
            width='80'
            height='100'
            viewBox='0 0 116 106'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_7_62)'>
              <path
                d='M32.0373 5.59539C40.1355 1.88332 48.8709 0.000366211 58.0004 0.000366211C67.0031 0.000366211 75.632 1.83363 83.6455 5.45026C84.4761 5.82519 84.9827 6.61439 84.9351 7.45949C84.8886 8.3046 84.2957 9.04411 83.428 9.34037C74.6131 12.3419 66.4002 16.3749 59.0184 21.3256C58.6092 21.6012 58.1275 21.7378 57.6447 21.7378C57.1619 21.7378 56.6802 21.6012 56.2711 21.3256C48.998 16.4473 40.919 12.4599 32.2584 9.47494C31.3959 9.17868 30.8077 8.44124 30.7599 7.60028C30.7112 6.75952 31.2133 5.97239 32.0373 5.59539ZM57.6447 17.0007C63.517 13.1976 69.8675 9.94139 76.5955 7.27958C64.6267 3.20086 50.9518 3.24848 39.0238 7.41208C45.6269 10.047 51.8676 13.2597 57.6447 17.0007Z'
                fill='#585252'
              />
              <path
                d='M21.612 11.7269C22.3726 11.1656 23.4368 11.1012 24.2732 11.5654C29.913 14.6911 38.6359 19.8054 48.1579 26.4176C48.6939 26.7884 49.0261 27.3538 49.0703 27.9691C49.1133 28.5823 48.8639 29.1829 48.3856 29.6137C45.0227 32.6526 41.8638 35.9626 38.9964 39.4531C25.7672 55.573 20.5782 68.1922 18.724 76.861C25.4192 62.9017 37.9583 48.6958 56.1372 34.5024C57.0054 33.8229 58.2839 33.8229 59.1521 34.5024C77.357 48.7165 89.9018 62.9369 96.5902 76.9086C94.7405 68.1671 89.5212 55.573 76.2917 39.4531C73.4253 35.9628 70.2663 32.6505 66.9037 29.6137C66.4243 29.1829 66.1748 28.5821 66.2181 27.9691C66.2623 27.3538 66.5944 26.7884 67.1307 26.4176C76.8224 19.6897 85.6902 14.5048 91.4241 11.3397C92.2549 10.8799 93.3091 10.9441 94.0683 11.4929C108.006 21.618 116 36.7476 116 53C116 65.9196 110.854 78.3667 101.512 88.0444C101.248 88.3179 100.919 88.5187 100.56 88.6369C100.461 88.9766 100.27 89.2936 99.9974 89.5545C88.9387 100.16 74.0239 106 58.0007 106C41.888 106 26.3669 99.7978 15.418 88.9849C15.1051 88.6762 14.9046 88.2951 14.8321 87.8912C14.406 87.7773 14.0161 87.5514 13.7156 87.2283C4.87132 77.681 0 65.526 0 53C0 36.8926 7.87735 21.8499 21.612 11.7269ZM101.889 80.7343C108.03 72.6247 111.358 62.9657 111.358 53C111.358 38.5395 104.479 25.0462 92.4259 15.7474C87.2531 18.6454 80.0013 22.9395 72.0505 28.3438C74.8751 31.0367 77.5431 33.9078 80.0049 36.9091C96.1232 56.5462 100.852 71.4316 101.889 80.7343ZM58.0005 101.757C72.3156 101.757 85.6696 96.6906 95.7469 87.4624C91.1712 71.703 78.3625 55.3823 57.6445 38.9144C37.1601 55.1958 24.4035 71.3426 19.6964 86.9446C29.7125 96.3716 43.5992 101.757 58.0005 101.757ZM35.2835 36.907C37.7464 33.9076 40.4144 31.0367 43.239 28.3438C35.4561 23.0554 28.3538 18.8359 23.2761 15.9795C11.4126 25.2698 4.64272 38.6782 4.64272 53C4.64272 62.6073 7.75614 71.9763 13.5061 79.9161C14.7209 70.7107 19.5673 56.0574 35.2835 36.907Z'
                fill='#585252'
              />
            </g>
            <defs>
              <clipPath id='clip0_7_62'>
                <rect
                  width='116'
                  height='106'
                  fill='white'
                  transform='matrix(-1 0 0 1 116 0)'
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className='mt-1'
            width='80'
            height='100'
            viewBox='0 0 121 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M119.925 77.3011C117.56 80.5264 111.77 82.8263 111.77 82.8263L68.6915 99.5605V87.2201L100.394 75.0038C103.992 73.6093 104.544 71.6391 101.62 70.6042C98.7013 69.5665 93.4158 69.8639 89.8158 71.2644L68.6915 79.3103V66.5026L69.9095 66.0571C69.9095 66.0571 76.0132 63.7208 84.5969 62.6924C93.1799 61.67 103.689 62.8319 111.94 66.2144C121.238 69.3921 122.285 74.0759 119.924 77.3011H119.925ZM72.7927 56.2869V24.7266C72.7927 21.0202 72.1602 17.6086 68.9445 16.6423C66.4818 15.7891 64.954 18.2616 64.954 21.9653V101L45.2457 94.2349V0C53.6252 1.68201 65.834 5.65936 72.3967 8.05184C89.0873 14.2492 94.7462 21.9626 94.7462 39.3419C94.7462 56.281 85.0778 62.701 72.7927 56.2869ZM9.08263 85.93C-0.462912 83.0226 -2.05119 76.9654 2.29931 73.4758C6.32041 70.2539 13.1587 67.8283 13.1587 67.8283L41.4171 56.9617V69.3504L21.0818 77.2205C17.4897 78.6144 16.9372 80.5878 19.8565 81.6222C22.7776 82.6565 28.0655 82.3624 31.6631 80.9652L41.4171 77.1372V88.2207C40.7986 88.3396 40.1093 88.4586 39.4713 88.5743C29.7143 90.2986 19.323 89.5788 9.08263 85.9293V85.93ZM113.647 90.8372C114.881 90.8372 116.038 91.354 116.909 92.3084C117.339 92.77 117.68 93.3193 117.912 93.9244C118.144 94.5296 118.263 95.1786 118.261 95.8337C118.263 96.4889 118.145 97.138 117.913 97.7432C117.681 98.3485 117.34 98.8977 116.909 99.359C116.483 99.8255 115.975 100.195 115.414 100.447C114.854 100.699 114.253 100.827 113.647 100.824C113.04 100.826 112.439 100.698 111.879 100.447C111.319 100.195 110.811 99.8252 110.385 99.359C109.955 98.8976 109.614 98.3483 109.382 97.743C109.15 97.1378 109.033 96.4887 109.035 95.8337C109.035 93.081 111.102 90.8372 113.647 90.8372ZM109.81 95.8337C109.81 96.942 110.209 97.9856 110.935 98.7641C111.289 99.1523 111.711 99.46 112.177 99.6692C112.643 99.8785 113.142 99.9851 113.647 99.9829C114.664 99.9825 115.64 99.5453 116.359 98.7672C117.079 97.9892 117.483 96.9341 117.484 95.8337C117.484 94.722 117.088 93.6791 116.359 92.8966C116.005 92.5088 115.582 92.2016 115.116 91.9929C114.651 91.7842 114.151 91.6782 113.647 91.6812C113.142 91.6783 112.643 91.7844 112.177 91.9932C111.711 92.202 111.288 92.5094 110.934 92.8973C110.576 93.2817 110.292 93.7393 110.099 94.2434C109.906 94.7475 109.808 95.2881 109.81 95.8337V95.8337ZM115.04 93.1438C115.546 93.3843 115.801 93.8483 115.801 94.5079C115.801 94.8469 115.735 95.1318 115.601 95.3552C115.504 95.5158 115.368 95.646 115.214 95.759C115.335 95.8363 115.441 95.9288 115.521 96.0359C115.631 96.1899 115.694 96.4371 115.702 96.7728L115.727 97.4833C115.735 97.6736 115.746 97.819 115.774 97.9083C115.801 98.0391 115.853 98.1224 115.92 98.1488L115.988 98.1845V98.5084H114.994L114.961 98.4462C114.931 98.377 114.909 98.3043 114.895 98.2295C114.874 98.0857 114.862 97.9407 114.859 97.7952L114.818 96.9123C114.807 96.6063 114.711 96.4166 114.529 96.3148C114.416 96.2586 114.23 96.2322 113.977 96.2322H112.577V98.5084H111.684V92.9534H114.07C114.46 92.9534 114.788 93.0156 115.04 93.1438V93.1438ZM112.577 95.3816H114.001C114.287 95.3816 114.515 95.3254 114.678 95.2098C114.826 95.0935 114.898 94.8826 114.898 94.576C114.898 94.2435 114.796 94.0261 114.581 93.9104C114.463 93.8483 114.298 93.8126 114.089 93.8126H112.578V95.3816H112.577Z'
              fill='#585252'
            />
          </svg>
          <svg
            className='mt-4'
            width='80'
            height='80'
            viewBox='0 0 94 106'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.92662 0C2.74025 0 0.47225 2.24256 0.47225 8.29781V81.4478C0.47225 82.1401 0.509375 82.7761 0.563375 83.3657C0.722 84.694 0.722 85.9892 1.98425 87.4368C2.10575 87.609 3.37475 88.5233 3.37475 88.5233C4.05987 88.8512 4.53237 89.093 5.30525 89.4011L42.8184 104.824C44.7522 105.689 45.5825 106.053 46.9865 106H47.0034C48.4242 106.053 49.2545 105.692 51.1884 104.824L88.6812 89.4011C89.4744 89.093 89.9266 88.8479 90.6286 88.5233C90.6286 88.5233 91.8976 87.5726 92.0191 87.4368C93.2847 85.9892 93.2847 84.694 93.44 83.3657C93.494 82.7794 93.5311 82.1434 93.5311 81.4676V8.30113C93.5311 2.24588 91.2462 0.0033125 85.0767 0.0033125L8.92662 0ZM69.0286 13.7303H72.083C77.1826 13.7303 79.6801 16.165 79.6801 21.2398V29.5376H73.4937V21.5644C73.4937 19.9446 72.7377 19.2026 71.1346 19.2026H70.0816C68.4313 19.2026 67.6752 19.9446 67.6752 21.5644V47.2329C67.6752 48.8528 68.4313 49.5948 70.0816 49.5948H71.2595C72.839 49.5948 73.595 48.8528 73.595 47.2329V38.054H79.7814V47.5278C79.7814 52.5793 77.2535 55.067 72.137 55.067H69.0286C63.8952 55.067 61.3775 52.5628 61.3775 47.5278V21.2828C61.3775 16.2313 63.8919 13.727 69.0286 13.727V13.7303ZM14.1815 14.0814H28.1911V19.7226H20.4725V31.2104H27.911V36.8383H20.4725V49.0846H28.2991V54.7291H14.1815V14.0814ZM31.3535 14.0814H41.2355C46.3486 14.0814 48.8799 16.5824 48.8799 21.6339V32.436C48.8799 37.4876 46.3453 39.9753 41.2355 39.9753H37.6681V54.7258H31.3535V14.0814ZM51.7284 14.0814H58.0194V54.7291H51.7284V14.0814ZM37.6479 19.5471V34.5196H40.25C41.8329 34.5196 42.5889 33.7643 42.5889 32.1379V21.9254C42.5889 20.3056 41.8329 19.5438 40.25 19.5438L37.6479 19.5471ZM20.297 64.3851H21.2285L21.4411 64.4215H21.7786L21.9541 64.4745H22.1296L22.2883 64.5242L22.4637 64.5606L22.6021 64.5971L22.916 64.6666L23.0949 64.7163L23.2164 64.7528L23.3548 64.8058L23.5302 64.8588L23.6518 64.9084L23.8306 64.978L23.9893 65.0476L24.1276 65.1304L24.2863 65.1999L24.4078 65.2828L24.5866 65.3722L24.725 65.455L24.8634 65.5246L25.0018 65.6273L25.1469 65.7167L25.2684 65.8194L25.6903 66.1341L25.5823 66.2699L25.4608 66.3891L25.3528 66.5117L25.2313 66.6475L25.1469 66.7668L25.0389 66.8893L24.9174 67.0086L24.8094 67.1444L24.725 67.2636L24.6001 67.4061L24.4955 67.5253L24.374 67.6611L24.266 67.7837L24.1816 67.9195L24.0567 68.0388L23.9521 68.1812L23.8306 68.3004L23.7226 68.4197L23.6011 68.3369L23.4628 68.2143L23.3176 68.1315L23.0578 67.9593L22.8991 67.8698L22.754 67.787L22.5954 67.6976L22.4739 67.628L22.3355 67.5618L22.052 67.4558L21.8765 67.4259L21.7381 67.3895L21.5795 67.3531L21.4006 67.3166L21.2251 67.3001H21.0496L20.8438 67.2636H20.5062L20.3307 67.2802H20.1552L19.9797 67.3332L19.8414 67.3696L19.6828 67.4226L19.5241 67.4524L19.379 67.522L19.2035 67.5916L18.9605 67.7638L18.8154 67.8466L18.6939 67.9526L18.5724 68.0354L18.4475 68.1414L18.3631 68.2607L18.218 68.3799L18.0425 68.6218L17.9581 68.7576L17.8872 68.9133L17.8029 69.0358L17.7117 69.1915L17.6578 69.3472L17.5902 69.483L17.5362 69.6553L17.5194 69.8275L17.4688 69.9865L17.4316 70.1588V70.331L17.4148 70.5033V70.9008L17.4316 71.073V71.2088L17.4485 71.3811L17.4789 71.5368L17.5329 71.6726L17.5498 71.8481L17.6038 71.9839L17.6544 72.1032L17.7253 72.2754L17.8164 72.4477L17.8839 72.5703L18.0594 72.8452L18.1674 72.981L18.2517 73.1036L18.3969 73.2063L18.4813 73.3255L18.6027 73.4315L18.8863 73.6402L19.0077 73.7064L19.1461 73.7959L19.3081 73.8654L19.4836 73.9317L19.6051 74.0013L19.9561 74.1039L20.1148 74.1205L20.2903 74.1735L20.4657 74.1901H21.2218L21.4344 74.1735H21.593L21.7719 74.1039L21.9474 74.0874L22.1229 74.0377L22.2613 74.0013L22.4199 73.9317L22.5583 73.8654L22.7169 73.7959L22.8249 73.7263L22.9633 73.6435V72.1065H20.4826V69.642H26.0885V75.1639L25.967 75.2468L25.8455 75.3494L25.7206 75.4389L25.5823 75.5416L25.4439 75.6111L25.3224 75.7171L25.0389 75.8894L24.8634 75.9722L24.5833 76.1444L24.4044 76.214L24.266 76.2803L24.1074 76.3498L23.7564 76.4856L23.618 76.5552L23.2974 76.6579L23.1388 76.6943L22.9801 76.7473L22.8046 76.8003L22.6663 76.8301L22.1398 76.9361L21.9778 76.9527L21.6268 76.9891L21.4344 77.0057L21.2589 77.0189L21.0665 77.0355H20.189L20.0135 77.0057H19.838L19.6625 76.9693H19.5039L19.3284 76.9163L18.8154 76.8136L18.677 76.7606L18.5184 76.744L18.3429 76.6744L18.0222 76.5718L17.7084 76.4359L17.5329 76.3664L17.4114 76.2968L17.2359 76.2306L17.111 76.1246L16.9355 76.0583L16.8309 75.9689L16.6925 75.8861L16.409 75.6774L16.2706 75.5879L16.1626 75.4853L16.0242 75.3793L15.7947 75.1573L15.6732 75.0513L15.5686 74.9321L15.4437 74.8095L15.3594 74.6737L15.2514 74.571L15.167 74.4286L15.059 74.2928L14.9746 74.1735L14.8835 74.0377L14.7991 73.8787L14.7282 73.7429L14.6574 73.5872L14.5899 73.4514L14.4515 73.1367L14.3975 73.0174L14.3266 72.8618L14.2895 72.7061L14.2591 72.5703L14.222 72.398L14.168 72.239L14.1309 72.0668L14.114 71.9309L14.0836 71.7587L14.0465 71.4506L14.0094 71.1061V70.1919L14.0465 70.0163V69.8441L14.1005 69.6718V69.4996L14.1511 69.3439L14.2051 69.1716L14.276 68.8636L14.3266 68.6913L14.3806 68.5356L14.5933 68.0686L14.6608 67.9328L14.7316 67.7771L14.8227 67.6181L14.8903 67.4823L14.9814 67.363L15.1569 67.0848L15.2615 66.9489L15.3695 66.8297L15.4539 66.6939L15.6834 66.4686L15.788 66.3461L15.9129 66.2268L16.0175 66.1076L16.1626 66.0016L16.4056 65.7929L16.544 65.6902L16.6891 65.6008L16.8106 65.4981L16.949 65.4086L17.0941 65.3424L17.2528 65.2529L17.4283 65.1701L17.5498 65.0807L17.7253 65.0144L17.8839 64.9449L18.0425 64.8621L18.1876 64.8256L18.3631 64.7726L18.5015 64.7031L18.6601 64.6733L18.8187 64.6203L18.9942 64.5838L19.1394 64.5308L19.3149 64.4944H19.4904L19.649 64.4447H19.8245L20 64.4083H20.1586L20.297 64.3851ZM74.2464 64.4215H75.1779L75.3905 64.4579H75.7246L75.9001 64.5076H76.0925L76.268 64.5606L76.5819 64.6302L76.7574 64.6666L76.916 64.6964L77.0949 64.7494L77.2535 64.8024L77.3919 64.8389L77.5505 64.8886L77.726 64.9416L77.8644 65.0111L78.0399 65.0774L78.2019 65.1469L78.3605 65.2364L78.482 65.3026L78.6406 65.3921L78.7993 65.4583L78.9444 65.5478L79.103 65.6504L79.2245 65.7399L79.508 65.9486L79.6464 66.0314L79.5384 66.1672L79.454 66.3096L79.3494 66.4289L79.2414 66.5647L79.157 66.7204L79.0659 66.8628L78.9612 66.9821L78.8532 67.1179L78.7689 67.2603L78.6609 67.3961L78.5765 67.5154L78.4685 67.6512L78.3841 67.8102L78.2761 67.946L78.1715 68.0653L78.0635 68.2011L77.9791 68.3435L77.8407 68.2375L77.6787 68.1547L77.5573 68.0653L77.4189 67.9824L77.2602 67.9129L77.1151 67.8234L76.9565 67.7572L76.835 67.6876L76.6595 67.6214L76.5346 67.5518L76.3962 67.4988L76.0824 67.3961L75.7314 67.2901L75.2049 67.1874L75.0294 67.1709L74.7087 67.1344H74.3409L74.1485 67.1709L73.973 67.2073L73.8144 67.2438L73.676 67.31L73.5511 67.3796L73.4127 67.4988L73.3081 67.6545L73.2372 67.8135V68.2243L73.3284 68.4131L73.3959 68.5191L73.5039 68.6218L73.6794 68.7112L73.8177 68.794L73.9764 68.8636L74.1519 68.9298L74.3814 68.9828L74.5029 69.0358L74.648 69.0723L74.8235 69.1087L74.9619 69.1584L75.1205 69.1948L75.3129 69.2478L75.4884 69.3008L75.6807 69.3505L75.8731 69.3869L76.0317 69.4399L76.2241 69.4896L76.3996 69.5261L76.5582 69.5625L77.0881 69.7182L77.2265 69.7712L77.402 69.8242L77.5606 69.8904L77.7361 69.9799L78.0871 70.1157L78.2457 70.2051L78.5292 70.3774L78.7891 70.5662L78.9511 70.6689L79.0726 70.7881L79.1941 70.9306L79.319 71.0498L79.4034 71.1691L79.5282 71.3413L79.6126 71.4639L79.6835 71.6361L79.751 71.7388L79.805 71.9111L79.859 72.0535L79.8961 72.2092L79.9636 72.5537L79.9805 72.7259L79.9974 72.8816V73.2957L79.9805 73.4845L79.9434 73.829L79.9062 74.0013L79.8556 74.1569L79.8185 74.3292L79.7645 74.5014L79.7139 74.6571L79.643 74.7797L79.5721 74.9354L79.4877 75.0712L79.3797 75.1938L79.2042 75.4687L78.9916 75.7105L78.8701 75.7933L78.7317 75.9159L78.6238 76.0186L78.4854 76.1213L78.347 76.1908L78.2086 76.2968L78.0466 76.3796L77.7328 76.5353L77.5573 76.6049L77.3986 76.6711L77.2231 76.7241L77.0645 76.7771L76.9194 76.8136L76.5684 76.8798L76.4469 76.9163L76.2714 76.9527H76.0959L75.9372 76.9891H75.7617L75.5862 77.0256H74.3341L73.8076 76.9726L73.6321 76.9361L73.4735 76.9196L73.1225 76.8533L72.9301 76.8169L72.7715 76.7804L72.596 76.7274L72.4171 76.691L72.2585 76.6413L72.083 76.5883L71.9075 76.5188L71.7691 76.4691L71.5936 76.4161L71.4181 76.3465L71.2932 76.2803L71.1177 76.2273L70.9794 76.1378L70.8039 76.0716L70.6655 75.9821L70.5406 75.8993L70.3651 75.8099L70.2436 75.7436L70.1052 75.6376L69.9669 75.5548L69.8217 75.4488L69.7002 75.3461L69.5619 75.2401L69.437 75.1573L69.2986 75.0348L69.4066 74.8989L69.5281 74.7797L69.6327 74.6571L69.7576 74.5213L69.842 74.4021L69.95 74.2663L70.0715 74.1437L70.1761 74.0244L70.301 73.8886L70.3854 73.7661L70.5102 73.6468L70.6149 73.511L70.7229 73.3884L70.8444 73.2526L70.9287 73.1334L71.0536 73.0108L71.1751 72.875L71.2966 72.981L71.4586 73.0837L71.5801 73.1864L71.7556 73.2758L71.8771 73.3653L72.0357 73.4679L72.1809 73.5574L72.3395 73.6236L72.461 73.7131L72.6196 73.7628L72.7951 73.8323L72.9403 73.9019L73.0989 73.9516L73.2372 74.0211L73.4127 74.0741L73.5714 74.1238L73.7469 74.1768L73.9224 74.1934L74.0844 74.2464L74.2599 74.2629H74.4523L74.6109 74.3126H75.5592L75.7179 74.2828L75.8934 74.2464L76.0149 74.2298L76.16 74.1768L76.2815 74.1106L76.4401 74.0046L76.5312 73.8853L76.5987 73.7495L76.6527 73.5905V73.193L76.5819 73.0373L76.4975 72.9015L76.3895 72.7988L76.2309 72.6928L76.1094 72.6431L75.9507 72.5736L75.7752 72.504L75.5829 72.4212L75.458 72.3848L75.3196 72.3483L75.1441 72.2953L75.0226 72.2655L74.8471 72.2125L74.6716 72.1959L74.4927 72.1264L74.3172 72.1098L74.1249 72.0601L73.9662 72.0237L73.7907 71.9707L73.6152 71.9343L73.4397 71.8846L73.2811 71.8316L73.1056 71.7951L72.9672 71.7421L72.6466 71.6394L72.4711 71.5699L72.2956 71.5202L71.9446 71.3778L71.786 71.2949L71.6105 71.2055L71.489 71.1227L71.327 71.0333L71.2055 70.9504L71.0469 70.861L70.8174 70.6358L70.6959 70.5331L70.4832 70.2913L70.3921 70.172L70.3246 70.0528L70.2166 69.8938L70.166 69.7745L70.004 69.3604L69.9736 69.1882L69.9365 69.0325V68.8768L69.8994 68.7046V67.999L69.9365 67.6545L69.9736 67.5121L70.004 67.3564L70.058 67.2206L70.0951 67.0483L70.166 66.9291L70.2335 66.7535L70.3044 66.6177L70.3719 66.4454L70.463 66.3262L70.5845 66.1904L70.6756 66.0479L70.814 65.9287L70.9186 65.8094L71.0266 65.667L71.1852 65.5478L71.2932 65.4583L71.4316 65.3556L71.7117 65.1834L71.8704 65.0939L72.191 64.9383L72.3294 64.8886L72.488 64.8356L72.6635 64.766L72.839 64.7163L72.9639 64.6799L73.1225 64.6434L73.2609 64.607L73.4195 64.5706L73.595 64.5341L73.946 64.5043L74.108 64.4878L74.2464 64.4215ZM32.6731 64.5408H35.8558L36.0009 64.8554L36.0684 64.9913L36.1224 65.1635L36.1933 65.3192L36.2439 65.455L36.335 65.6107L36.4396 65.9254L36.5308 66.0811L36.6691 66.3891L36.7063 66.5249L36.9864 67.1477L37.0404 67.3034L37.1112 67.4458L37.1956 67.6015L37.2328 67.7572L37.3239 67.9294L37.3543 68.0851L37.5162 68.3932L37.5838 68.5158L37.6546 68.688L37.7086 68.8603L37.7593 68.9795L37.8504 69.1518L37.9044 69.2942L37.9719 69.4664L38.0259 69.5857L38.0968 69.7579L38.2554 70.066L38.306 70.2217L38.3431 70.3807L38.414 70.5364L38.4984 70.6722L38.5693 70.8444L38.6401 71.0001L38.6908 71.1359L38.8359 71.4506L38.8865 71.6063L38.9574 71.762L39.0114 71.9177L39.0789 72.0535L39.17 72.2125L39.2375 72.3682L39.3084 72.504L39.3455 72.6763L39.4839 72.9843L39.5547 73.1268L39.6054 73.2824L39.7505 73.5905L39.8349 73.7628L39.872 73.8986L39.9631 74.0741L39.9935 74.1934L40.0644 74.3656L40.1555 74.5379L40.223 74.6571L40.277 74.8294L40.3479 74.9718L40.3985 75.1441L40.4896 75.2633L40.5943 75.6078L40.6651 75.7304L40.7326 75.9026L40.8238 76.0384L40.8946 76.2107L40.925 76.3664L40.979 76.5022L41.0499 76.6579L41.1343 76.8003H37.6209L37.5365 76.6579L37.4825 76.5022L37.4116 76.3465L37.3441 76.1743L37.307 76.0384L37.1619 75.7304L37.1112 75.5879L36.9729 75.2799L36.9189 75.1441L36.848 74.9718L36.7434 74.6571L36.6725 74.5213H31.7855L31.718 74.677L31.664 74.8194L31.5931 74.9917L31.5256 75.1474L31.4885 75.2832L31.4176 75.4554L31.3501 75.5913L31.2961 75.7469L31.2253 75.8894L31.1578 76.0616L31.1038 76.1809L31.0329 76.3531L30.9822 76.5254L30.9114 76.6479L30.8574 76.8202H27.3778L27.4284 76.6612L27.5735 76.3531L27.6241 76.1809L27.6781 76.0451L27.7693 75.8894L27.8367 75.7337L27.9076 75.5913L27.9448 75.4356L28.0122 75.2633L28.1034 75.1275L28.1709 74.9718L28.2789 74.6571L28.4375 74.3491L28.4915 74.1934L28.559 74.0576L28.613 73.8986L28.8256 73.4348L28.8965 73.2626L28.9471 73.1268L29.0011 72.9711L29.0923 72.8286L29.1597 72.6564L29.2137 72.5007L29.2678 72.3649L29.3353 72.1926L29.4264 72.0701L29.4804 71.8978L29.5479 71.762L29.6019 71.6063L29.6728 71.4341L29.7571 71.2983L29.8111 71.126L29.8786 71.0034L29.9326 70.8312L30.0035 70.6589L30.071 70.5397L30.1419 70.3674L30.1959 70.225L30.2634 70.0528L30.3174 69.9335L30.4085 69.7613L30.476 69.589L30.5469 69.4532L30.584 69.2975L30.6515 69.1385L30.7426 68.9828L30.8101 68.847L30.8472 68.6748L30.9181 68.5191L30.989 68.3766L31.1274 68.0686L31.178 67.9328L31.3231 67.5883L31.3906 67.4657L31.4615 67.2934L31.5155 67.1576L31.5661 66.9854L31.637 66.8297L31.7281 66.6939L31.7956 66.5216L31.8496 66.3991L31.9036 66.2268L31.9711 66.091L32.0623 65.9353L32.1163 65.7631L32.1669 65.6206L32.2378 65.4484L32.3053 65.3291L32.3964 65.1569L32.4504 64.9846L32.501 64.8654L32.5719 64.6931L32.6731 64.5408ZM42.5551 64.6302H46.0347L46.1428 64.766L46.3183 65.0443L46.4026 65.1999L46.4938 65.3192L46.5781 65.4749L46.6693 65.6107L46.7536 65.7697L46.8448 65.9055L46.9291 66.0248L47.0203 66.1804L47.1046 66.3229L47.2295 66.4587L47.2801 66.5945L47.3881 66.7502L47.4725 66.8926L47.5805 67.0119L47.6514 67.1676L47.7358 67.3034L47.8438 67.4458L47.8944 67.5816L48.0193 67.7373L48.2791 68.1514L48.35 68.2872L48.4546 68.423L48.5458 68.5588L48.6301 68.7178L48.8968 69.1286L48.9811 69.2876L49.0723 69.4234L49.1769 69.2876L49.2478 69.112L49.3524 68.9928L49.4435 68.8371L49.5279 68.7178L49.5988 68.5456L49.7203 68.423L49.8114 68.2673L49.8823 68.1481L49.9666 68.0056L50.0746 67.8499L50.159 67.7307L50.2501 67.5584L50.3345 67.4392L50.4425 67.2802L50.51 67.1609L50.6011 66.9887L50.6855 66.886L50.7766 66.7436L50.8812 66.5713L50.9724 66.4521L51.0399 66.2964L51.1479 66.1738L51.2322 66.0016L51.3234 65.8989L51.428 65.7631L51.5191 65.5908L51.6035 65.4683L51.6946 65.3126L51.779 65.1933L51.8701 65.0211L51.9748 64.8985L52.0456 64.7428L52.1367 64.6236H55.6704V76.9428H52.3629V69.695L52.2785 69.8176L52.1705 69.9898L52.0861 70.0925L51.9781 70.2283L51.9106 70.4006L51.8026 70.5231L51.7183 70.6424L51.6102 70.8146L51.4347 71.0564L51.3301 71.1923L51.239 71.3645L51.1344 71.4871L51.0433 71.6063L50.9757 71.7786L50.8678 71.8978L50.7834 72.0204L50.6754 72.1926L50.591 72.3119L50.483 72.4477L50.3986 72.6034L50.3278 72.7259L50.2231 72.8618L50.132 73.0174L50.0274 73.1367L49.9194 73.2791L49.8519 73.4149L49.7608 73.5706L49.6561 73.6932L49.5481 73.829L49.4806 74.0013L49.3558 74.1039L49.2882 74.2398L49.1803 74.4153L49.0959 74.5346H49.025L48.9204 74.3789L48.8293 74.2364L48.7449 74.0808L48.6538 73.9615L48.5491 73.8058L48.458 73.67L48.3534 73.5276L48.2623 73.3918L48.1779 73.2361L48.0868 73.1168L47.9652 72.9578L47.8944 72.822L47.7897 72.6663L47.6986 72.5471L47.6142 72.3914L47.5062 72.2489L47.4219 72.0767L47.3139 71.9574L47.2295 71.8018L47.1384 71.6593L47.054 71.5036L46.946 71.3844L46.8616 71.2287L46.7536 71.0929L46.6861 70.9504L46.5781 70.8146L46.4938 70.6589L46.3858 70.5397L46.3014 70.3807L46.1934 70.2449L46.1259 70.0892L46.001 69.9699L45.9335 69.8109L45.8255 69.6751V76.9394H42.5754V64.7395L42.5551 64.6302ZM58.1611 64.6302H68.06V67.4094H61.4484V69.3936H67.3884V72.0171H61.4484V74.1205H68.1444V76.9163H58.178V64.7362L58.1611 64.6302ZM34.2189 68.4064L34.1649 68.5621L34.1143 68.7046L34.0434 68.8768L33.9725 69.0325L33.9219 69.1882L33.7768 69.4963L33.7093 69.6685L33.6552 69.8109L33.6012 69.9832L33.5338 70.1024L33.4798 70.2747L33.4089 70.4469L33.3414 70.5695L33.2874 70.7418L33.2199 70.8776L33.1659 71.0498L33.0747 71.2055L33.0376 71.3413L32.9701 71.5136L32.8992 71.6726L32.8453 71.8084L32.7778 71.9806H35.6769L35.6094 71.8084L35.5554 71.6527L35.417 71.338L35.363 71.1823L35.2921 71.0465L35.2415 70.8743L35.1706 70.7186L35.1166 70.5629L35.0491 70.4204L34.9951 70.2648L34.9243 70.0925L34.8736 69.9567L34.7285 69.6486L34.6981 69.4896L34.6272 69.3339L34.5564 69.1617L34.5058 69.0424L34.3606 68.6979L34.31 68.5423L34.2189 68.4064ZM29.0551 91.4747H65.1035L46.703 97.4273L29.0551 91.4747Z'
              fill='#585252'
            />
          </svg>
          <svg
            className='mt-1'
            width='80'
            height='100'
            viewBox='0 0 103 107'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M91.0469 71.8594C83.6094 88.5938 68.4688 97.3594 52.2656 97.0938C21.1875 95.5 12.1562 59.6407 32.875 46.625L33.6719 47.6875C11.0938 76.9063 55.4531 105.063 75.9062 71.3282C92.6406 36.2657 50.9375 1.73442 14.8125 28.2969L14.0156 27.5C23.5781 12.3594 42.1719 5.7188 59.7031 10.2344C66.12 11.726 72.1328 14.6036 77.3196 18.6653C82.5065 22.727 86.7418 27.8744 89.7285 33.7464C92.7151 39.6185 94.3807 46.0729 94.6085 52.6569C94.8362 59.2409 93.6206 65.795 91.0469 71.8594V71.8594ZM61.8281 71.3282C60.4877 73.299 58.66 74.8895 56.5229 75.9449C54.3858 77.0003 52.0119 77.4847 49.6321 77.351C47.2524 77.2173 44.9477 76.47 42.9422 75.1819C40.9368 73.8938 39.2988 72.1087 38.1875 70C33.1406 59.375 40.3125 49.8125 49.3438 49.5469C60.5 49.0157 65.0156 61.5 58.1094 68.6719L61.8281 71.3282ZM13.2188 70L11.8906 70.5313C-0.0625 24.5782 58.9062 12.625 70.5938 49.0157L69.5312 49.5469C52 24.5782 11.625 33.3438 13.2188 70ZM102.734 53C102.592 41.067 98.455 29.5258 90.985 20.219C83.5149 10.9122 73.1422 4.37636 61.5227 1.65496C49.9033 -1.06645 37.707 0.183483 26.8811 5.2052C16.0552 10.2269 7.22382 18.7309 1.79688 29.3594L5.78125 32.2813C2.32812 39.9844 0.734375 47.4219 0.734375 55.125C2.32812 89.125 27.2969 106.125 52.2656 106.125C77.2344 105.859 103 86.2032 102.734 53Z'
              fill='#585252'
            />
          </svg>
          <svg
            className='mt-1'
            width='80'
            height='100'
            viewBox='0 0 106 106'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M52.9138 0C25.0855 0 2.2591 21.4617 0.102661 48.7401L28.5007 60.4896C30.9155 58.8499 33.814 57.8859 36.9542 57.8859C37.2292 57.8859 37.5074 57.9025 37.7823 57.9025L50.4129 39.6142V39.3558C50.4129 28.3318 59.3666 19.3781 70.3906 19.3781C81.4146 19.3781 90.3848 28.3484 90.3848 39.3724C90.3848 50.3964 81.4146 59.3501 70.3906 59.3501H69.9434L51.93 72.2026C51.93 72.4444 51.9466 72.6696 51.9466 72.9114C51.9466 81.1927 45.252 87.9038 36.9708 87.9038C29.7595 87.9038 23.6512 82.7264 22.2533 75.8629L1.93116 67.4425C8.22822 89.6992 28.6398 106.003 52.9138 106.003C82.1732 106.003 105.897 82.2825 105.897 53.0033C105.897 23.7241 82.1765 0.0033125 52.9138 0.0033125V0ZM33.2972 80.4308L26.7915 77.7378C27.9475 80.136 29.9483 82.1368 32.6049 83.2597C38.3322 85.6414 44.9407 82.9152 47.3223 77.1879C48.4784 74.3921 48.4784 71.3579 47.3389 68.5787C46.1994 65.7829 44.0264 63.6265 41.2472 62.4704C38.5045 61.3144 35.553 61.3674 32.966 62.3313L39.6771 65.1105C43.9038 66.886 45.9046 71.7355 44.1457 75.9622C42.3867 80.189 37.5207 82.1898 33.2939 80.4308H33.2972ZM83.7102 39.3359C83.7102 32.0021 77.741 26.0164 70.4072 26.0164C63.0402 26.0164 57.0876 32.0021 57.0876 39.3359C57.0876 46.6864 63.0402 52.6555 70.4072 52.6555C77.741 52.6555 83.7102 46.6864 83.7102 39.3359ZM60.4365 39.3194C60.4365 33.7809 64.9051 29.3123 70.427 29.3123C75.949 29.3123 80.4507 33.7809 80.4507 39.3194C80.4507 44.8413 75.949 49.3264 70.427 49.3264C64.9051 49.3264 60.4365 44.8413 60.4365 39.3194V39.3194Z'
              fill='#585252'
            />
          </svg>
        </div>
      </div>
      <div className='bg-[#291D24] pb-40'>
        <div>
          <LatestGames />
        </div>
        <div>
          <LatestNews />
        </div>
      </div>
      <Footer title='Home' />
    </div>
  );
};

export default Hero;

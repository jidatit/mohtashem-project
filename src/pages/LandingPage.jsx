/* eslint-disable react/no-unescaped-entities */
import img1 from "../assets/images/sect1/0F250C9D-87BE-486A-A259-47F36693D43F-removebg-preview.png"
import img2 from "../assets/images/sect2/F603D010-22D7-4C84-953A-9B42D42DA377-removebg-preview.png"
import radium from "../assets/images/sect3/radium.jpeg"
import pinksale from "../assets/images/sect3/pinksale.png"
import dexscreener from "../assets/images/sect3/dexscreener.png"
import coingecko from "../assets/images/sect3/coingecko.png"
import dexview from "../assets/images/sect3/dexview.png"
import solscan from "../assets/images/sect3/solscan.png"
import kucoin from "../assets/images/sect3/kucoin.jpeg"
import jupiter from "../assets/images/sect3/jupiter.jpeg"
import img4 from "../assets/images/sect4/FECAFAC2-32FA-47D3-918F-52230CDDE19B-removebg-preview.png"
import Canvas from "../components/Canvas"
import coinimg from "../assets/images/sect1/coin.png"
import maintitleimg from "../assets/images/sect1/main.png"

function LandingPage() {

  const handleCopyText = () => {
    const textToCopy = 'fCuw5ppJ9aZYzjm8EsT2fHwxV1h5JwUfqXM44iX3Pzb';
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <>
      <section id="about" className="relative bg-blu h-screen">

        <div className="w-full relative md:min-h-screen">
          <Canvas imageSrc={coinimg} windSpeed={2} />
          <img src={maintitleimg} className="w-[80%] md:w-[40%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
        </div>

        <div className=" z-[5] absolute top-0 bottom-[0] left-0 right-0 w-full">
          <div className=" h-full flex lg:flex-row flex-col-reverse justify-between gap-3">
            <div className=" flex items-end justify-start z-0 w-[30%] min-w-[285px]">
              <img className=" w-full " src={img1} />
            </div>

            <div className="flex flex-col items-center justify-start lg:w-[70%] px-3 py-24">
              {/* <p className="text-lg font-secondary text-center"> REFUND ADDRESS - Click to copy</p> */}
              <div onClick={handleCopyText} className=" cursor-pointer border-black rounded-[50px] border-x-[3px] border-t-[3px] border-b-[6px] p-3 bg-white">
                <p className=" text-xs sm:text-sm md:text-xl font-secondary text-black text-center">2rzys53Xx1aqX8ARTeaMyZfH85PbDzH8wuUBCoegs5Xi</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="story" className=" border-t-2 border-black bg-blu">
        <div className=" flex flex-col w-full">
          <div className=" h-[42px] bg-blu"></div>
          <div className=" h-[19px] bg-dark"></div>
          <div className=" h-[19px] bg-light"></div>
        </div>
        <div className=" flex md:flex-row flex-col-reverse md:justify-between gap-8 pt-5 md:pt-20">
          <div className=" w-[30%] min-w-[255px] flex items-end justify-start ">
            <img src={img2} className=" w-full" />
          </div>
          <div className=" w-full md:w-[70%] md:max-w-[1000px] px-5 md:px-32 py-5 md:py-20">
            <div className=" border-black rounded-[50px] border-x-[3px] border-t-[3px] border-b-[6px] p-6 bg-white flex flex-col gap-4 ">
              <h3 className=" font-primary text-[36px] md:text-[60px] text-center">SIamese Story</h3>
              <p className=" font-secondary text-md xl:text-[30px] leading-7 sm:leading-10 max-h-[300px] overflow-y-auto md:max-h-[400px]">$Siamese, known as the dog cat because of its extreme loyalty to its owner. His sapphire blue eyes set him apart from any other cat.
                The meme became devoid of creativity, which made the Siamese set off on his own journey to work on the quality and creativity to make memes great again.
                <br />
                Discover the wide world of Siamese Meme and the digital financial ecosystem, powered by Siamese. A magical fantasy world where memes mean empowerment and creativity to create real value, with limitless interactions and integrations.
                Siamese isn't just a meme - it's setting the standard for the future of memes on Web3.
                <br />
                Join the Siamese movement today and together, we will make the meme space a more fun and creative place for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contributors" className=" border-t-2 border-black bg-blu">
        <div className=" flex flex-col w-full">
          <div className=" h-[42px] bg-blu"></div>
          <div className=" h-[19px] bg-dark"></div>
          <div className=" h-[19px] bg-light"></div>
        </div>
        <div className=" flex px-4 md:px-10 py-5 md:py-20 justify-center">
          <div className=" w-full max-w-[600px] border-black rounded-[30px] border-x-[3px] border-t-[3px] border-b-[6px] py-6 px-10 bg-white flex flex-col gap-4">
            <h3 className=" font-primary text-[36px] md:text-[36px] lg:text-[60px] text-center">Contributors</h3>
            <div className=" flex justify-center flex-wrap gap-x-6 gap-y-3 font-secondary">
              <div className=" flex flex-col items-center">
                <img className=" w-[100px] h-[100px]" src={radium} />
                <p>Radium</p>
              </div>
              <div className=" flex flex-col items-center">
                <img className=" w-[100px] h-[100px]" src={pinksale} />
                <p>Pinksale</p>
              </div>
              <div className=" flex flex-col items-center">
                <img className=" w-[100px] h-[100px]" src={dexscreener} />
                <p>Dex Screener</p>
              </div>
              <div className=" flex flex-col items-center">
                <img className=" w-[100px] h-[100px]" src={coingecko} />
                <p>Coingecko</p>
              </div>
              <div className=" flex flex-col items-center">
                <img className=" w-[100px] h-[100px]" src={dexview} />
                <p>Dexview</p>
              </div>
              <div className=" flex flex-col items-center">
                <img className=" w-[100px] h-[100px]" src={solscan} />
                <p>Solscan</p>
              </div>
              <div className=" flex flex-col items-center">
                <img className=" w-[100px] h-[100px]" src={kucoin} />
                <p>Kucoin</p>
              </div>
              <div className=" flex flex-col items-center">
                <img className=" w-[100px] h-[100px]" src={jupiter} />
                <p>Jupiter</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="last" className=" border-t-2 border-black bg-blu">
        <div className=" flex flex-col w-full">
          <div className=" h-[42px] bg-blu"></div>
          <div className=" h-[19px] bg-dark"></div>
          <div className=" h-[19px] bg-light"></div>
        </div>
        <div className=" flex flex-col px-4 pt-14 pb-40 md:py-32 gap-4 justify-center items-center relative">
          <h3 className=" z-[1] font-primary text-[36px] md:text-[60px] text-center">SIAMESENOMICS</h3>
          <div className=" z-[1] w-full max-w-[526px] border-black rounded-[30px] border-x-[3px] border-t-[3px] border-b-[6px] py-6 px-10 bg-white">
            <div className=" text-white font-secondary flex justify-center flex-wrap gap-x-6 gap-y-4">
              <div className=" py-2 md:py-5 w-[200px] text-xl uppercase flex flex-col items-center justify-center bg-dark rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                <p>total supply</p>
                <p>500m</p>
              </div>
              <div className=" py-2 md:py-5 w-[200px] text-xl uppercase flex flex-col items-center justify-center bg-dark rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                <p>0 Tax</p>
                <p>No team token</p>
              </div>
              <div className=" py-2 md:py-5 w-[200px] text-xl uppercase flex flex-col items-center justify-center bg-dark rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                <p>LP BURNED</p>
                <p>AT LAUNCH</p>
              </div>
              <div className=" py-2 md:py-5 w-[200px] text-xl uppercase flex flex-col items-center justify-center bg-dark rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                <p>All Authorities</p>
                <p>REVOKED</p>
              </div>
            </div>
          </div>
          <div className=" absolute left-0 bottom-0 z-[0] w-[30%] min-w-[150px] ">
            <img src={img4} className=" w-full" />
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
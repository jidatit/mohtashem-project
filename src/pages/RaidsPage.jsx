import { useState } from 'react'
import img1 from "../assets/images/raids/1.png"
import img2 from "../assets/images/raids/2.png"
import img3 from "../assets/images/raids/3.png"
import img4 from "../assets/images/raids/4.png"
import img5 from "../assets/images/raids/5.png"
import img6 from "../assets/images/raids/6.png"
import img7 from "../assets/images/raids/7.png"
import img8 from "../assets/images/raids/8.png"
import img9 from "../assets/images/raids/9.png"
import img10 from "../assets/images/raids/10.png"
import img11 from "../assets/images/raids/11.png"


const allJokes = [
    // {
    //     joke_title: "dummy 1",
    //     joke_image: img1,
    //     message: `Siamese NFT is coming soon.
    //     Stay tuned`
    // },
    {
        joke_title: "dummy 2",
        joke_image: img2,
        message: `Siamese will make you rich`
    },
    {
        joke_title: "dummy 3",
        joke_image: img3,
        message: `The Siamese train is coming and you can't miss it`
    },
    {
        joke_title: "dummy 4",
        joke_image: img4,
        message: `Siamese to the moon`
    },
    {
        joke_title: "dummy 5",
        joke_image: img5,
        message: `Siamese is the next wave`
    },
    {
        joke_title: "dummy 6",
        joke_image: img6,
        message: `Siamese is the king of memes`
    },
    {
        joke_title: "dummy 7",
        joke_image: img7,
        message: `Siamese send it`
    },
    {
        joke_title: "dummy 8",
        joke_image: img8,
        message: `Siamese builds its own ecosystem`
    },
    {
        joke_title: "dummy 9",
        joke_image: img9,
        message: `$Siamese if you don't know now you know`
    },
    {
        joke_title: "dummy 10",
        joke_image: img10,
        message: `$Siamese done with the smart contract`
    },
    {
        joke_title: "dummy 11",
        joke_image: img11,
        message: `$Siamese is cooking something`
    },
];

const RaidsPage = () => {
    const [currentJoke, setCurrentJoke] = useState(allJokes[0]);
    const [nft, setNft] = useState(false);
    

    const handleShuffleJoke = () => {
        const randomIndex = Math.floor(Math.random() * allJokes.length);
        setCurrentJoke(allJokes[randomIndex]);
    };

    const handleShuffleJoke2 = () => {
        setNft(!nft)
    };

    return (
        <>
            <section id="raids" className="relative px-2 md:px-10 py-20 md:py-20 bg-blu w-full min-h-screen flex flex-col items-center justify-start">

                <div className='md:w-[50%] lg:w-[35%] w-[90%] gap-2 flex flex-col justify-start items-center'>
                    <h1 className='font-secondary text-white text-[60px] sm:text-[80px] text-center'>SIAMESE</h1>
                    { !nft ? (
                        <>
                            <p className='font-secondary text-white text-[30px] text-center'>Siamese raiiiddd faaasssttt</p>
                            <img className='md:w-full w-full max-w-[350px] rounded-md' src={currentJoke.joke_image} alt={currentJoke.joke_title} />
                            <div className='py-5 px-6 rounded-lg bg-dark text-white font-secondary'>{currentJoke.message}</div>
                            <div className='w-full flex flex-row justify-center items-center gap-5'>
                                <div onClick={handleShuffleJoke} className="py-2 px-1 w-[200px] hover:bg-dark text-dark hover:text-white cursor-pointer text-xl font-secondary uppercase flex flex-col items-center justify-center bg-light rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                                    <p className=' text-sm md:text-lg text-center'>shuffle meme</p>
                                </div>

                                <div onClick={handleShuffleJoke2} className="py-2 px-1 w-[200px] text-xl hover:bg-dark text-dark hover:text-white cursor-pointer uppercase font-secondary flex flex-col items-center justify-center bg-light rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                                    <p className=' text-sm md:text-lg text-center'>NFT Raid</p>
                                </div>
                            </div>
                            <div className="py-2 w-[200px] text-xl hover:bg-light text-white hover:text-dark cursor-pointer uppercase font-secondary flex flex-col items-center justify-center bg-dark rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                                <p className=' text-lg md:text-lg text-center'>Raid</p>
                            </div>

                        </>
                    ):(
                        <>
                            <img className='md:w-full w-full max-w-[350px] rounded-md' src={img1} alt={"nft"} />
                            <div className=" border-black rounded-[50px] border-x-[3px] border-t-[3px] border-b-[6px] p-6 bg-white flex flex-col gap-4 ">
                                <h3 className=" font-primary text-[24px] md:text-[30px] text-center">SIamese NFT</h3>
                                <p className=" font-secondary text-sm xl:text-[20px] leading-7 sm:leading-7 max-h-[300px] overflow-y-auto md:max-h-[400px]">
                                    10,000 unique siamese collectible characters with proof of ownership stored on the Solana blockchain.
                                    Uniquely generated. No two are exactly alike, and each one can be trustlessly collected by anyone interacting with the Solana blockchain.
                                    <br/>
                                    Types & Attributes:
                                </p>
                                <div className=' flex md:flex-row flex-col gap-2 items-center justify-center'>
                                    <div className=" text-md font-secondary text-white py-2 md:py-3 w-[200px] uppercase flex flex-col items-center justify-center bg-dark rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                                        <p>5 TYPES</p>
                                        <p>100 ATTRIBUTES</p>
                                    </div>
                                    <div className=" text-md font-secondary text-white py-2 md:py-3 w-[200px] uppercase flex flex-col items-center justify-center bg-dark rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                                        <p>NFT pixel size</p>
                                        <p>64 x 64 pixels</p>
                                    </div>

                                </div>
                                <h3 className=" font-primary text-[24px] md:text-[30px] text-center">Siamese NFT is coming soon. stay tuned.</h3>
                            </div>
                            <div onClick={handleShuffleJoke2} className="py-2 px-1 w-[200px] hover:bg-dark text-dark hover:text-white cursor-pointer text-xl font-secondary uppercase flex flex-col items-center justify-center bg-light rounded-[20px] border-x-[3px] border-t-[3px] border-b-[6px] border-black">
                                <p className=' text-sm md:text-lg text-center'>Back to RAIDS</p>
                            </div>

                        </>
                    )}
                </div>

            </section>

        </>
    );
};

export default RaidsPage;
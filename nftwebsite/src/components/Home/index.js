import './index.scss';
import img from '../../assets/images/nft_1.png';  
//import img2 from '../../assets/images/nft_2.png';  

const Home = () => {
    return (
      <>
         <div className="container header">
            <div className="centered">
               <h1>Lucky Rabbit Club</h1>
               <p>An Environment that is connecting<br/>Creative and like-minded people,<br/>communiti-driven project!</p>
               <img className="nft_1" src={img} alt="nft1" />
            </div>
         </div> 
         <div className="container about">
            <div className="content">
               <h2>About</h2>
               <p id="text">
                  The Lucky Rabbit Club is a series of high-quality, unique,<br/>
                  and col lectible non-fungible tokens (NFTs) featuring the <br/>
                  artwork of the Lucky Rabbit Collective! Lucky Rabbit Club <br/>
                  was created becouse we are tired of so much rug pulls and <br/>
                  useless staking for earning ponzi coin! 
               </p>
               <p className="text2">
                  The Lucky Rabbit team created the NFT project as a way to share <br/>
                  their beautiful artwork with collectors and fans around the world.<br/>
                  The NFTs allow collectors to own a truly one-of-a-kind piece and <br/>
                  support the artists in their work. We have added a new trade nexus <br/>
                  tool to our server.(Which will be available until mint, after mint <br/>
                  tools will be available only to holders). 
               </p>
            </div>
         </div>
      </>
    );
}
export default Home;
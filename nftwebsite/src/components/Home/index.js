import './index.scss';
import img from '../../assets/images/nft_1.png';  
import img2 from '../../assets/images/nft_2.png';  

const Home = () => {
    return (
      <>
        <div className="container">
           <div className="col">
              <h2 className="header">Lucky Rabbit Club</h2>
              <p className="text">An Environment that is connecting<br/>Creative and like-minded people,<br/>communiti-driven project!</p>
           </div>
           <div className="col">
              <img src={img} alt="img" />
           </div>
        </div>
        <div className="about_container">
        <h2 className="header_about">ABOUT</h2>
           <p className="text_2">
            The Lucky Rabbit Club is a series of high-quality, unique,<br/>
            and col lectible non-fungible tokens (NFTs) featuring the <br/>
            artwork of the Lucky Rabbit Collective! Lucky Rabbit Club <br/>
            was created becouse we are tired of so much rug pulls and <br/>
            useless staking for earning ponzi coin! <br/>
           </p>
           <p className='text_3'>
            The Lucky Rabbit team created the NFT project as a way to share <br/>
            their beautiful artwork with collectors and fans around the world.<br/>
            The NFTs allow collectors to own a truly one-of-a-kind piece and <br/>
            support the artists in their work. We have added a new trade nexus <br/>
            tool to our server.(Which will be available until mint, after mint <br/>
            tools will be available only to holders).<br/>
           </p>
           <p className="text_4">
            This tool includes analytics, mints, trackers, <br/>
            and LMNFT capabilities. We are confident that this new addition will <br/>
            enhance your trading experience and provide valuable insights.<br/>
            The Lucky Rabbit NFTs will be available for mint and purchase through <br/>
            various online marketplaces and platforms.<br/>
           </p>
           <p className="text_5">
            Keep an eye out for announcements from the<br/>
            Lucky Rabbit Collective on social media or their website<br/>
            for details on how and where to purchase the NFTs.  <br/>
            We always continue to build, grow our community, giveaways,<br/>
            holders rewards and some promotions on socials! Website almoust ready to<br/>
            go live and we have some BIIG NEWS for y'all... Stay tuned for updates!<br/>
           </p>
           <div className="img">
           <img className="img_2" src={img2} alt="img"/>
           </div>
        </div>
      </>
    );
}
export default Home;
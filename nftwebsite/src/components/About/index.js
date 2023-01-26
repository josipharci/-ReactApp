import './index.scss';
import img from '../../assets/images/nft_2.png';  



const About = () => {
   return(
         <div class="About">
           <h2>ABOUT</h2>
           <p>
           The Lucky Rabbit Club is a series of high-quality, unique, and collectible non-fungible tokens (NFTs) featuring the artwork of the Lucky Rabbit Collective!
           Lucky Rabbit Club was created becouse we are tired of so much rug pulls and useless staking for earning ponzi coin! The Lucky Rabbit team created the NFT project as a way to share their beautiful artwork with collectors and fans around the world. <br/>The NFTs allow collectors to own a truly one-of-a-kind piece and support the artists in their work. We have added a new trade nexus tool to our server.(Which will be available until mint, after mint tools will be available only to holders).<br/>This tool includes analytics, mints, trackers, and LMNFT capabilities. We are confident that this new addition will enhance your trading experience and provide valuable insights.
           The Lucky Rabbit NFTs will be available for mint and purchase through various online marketplaces and platforms. Keep an eye out for announcements from the Lucky Rabbit Collective on social media or their website for details on how and where to purchase the NFTs.  
           We always continue to build, grow our community, giveaways, holders rewards and some promotions on socials! Website almoust ready to go live and we have some BIIG NEWS for y'all... Stay tuned for updates!
           </p>
           <img src={img} alt="img"/>
         </div>
   );
}

export default About;

import './index.scss';
import img from '../../assets/images/nft_1.png';  
import img2 from '../../assets/images/nft_2.png';  

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
                  The Lucky Rabbit Club is a series of high-quality, unique,            <br/>
                  and col lectible non-fungible tokens (NFTs) featuring the             <br/>
                  artwork of the Lucky Rabbit Collective! Lucky Rabbit Club             <br/>
                  was created becouse we are tired of so much rug pulls and             <br/>
                  useless staking for earning ponzi coin! 
               </p>
               <p className="text2">
                  The Lucky Rabbit team created the NFT project as a way to share       <br/>
                  their beautiful artwork with collectors and fans around the world.    <br/>
                  The NFTs allow collectors to own a truly one-of-a-kind piece and      <br/>
                  support the artists in their work. We have added a new trade nexus    <br/>
                  tool to our server.(Which will be available until mint, after mint    <br/>
                  tools will be available only to holders). 
               </p>
               <img src={img2} alt="nft_2" />
               <p className="text3">
                  This tool includes analytics, mints, trackers,and LMNFT capabilities.  <br/>
                  We are confident that this new addition will enhance your trading      <br/>
                  experience and provide valuable insights.The Lucky Rabbit NFTs will    <br/>
                  be available for mint and purchase through various online              <br/>
                  marketplaces and platforms.                                             
               </p>
               <p className="text4">
                  Keep an eye out for announcements from the Lucky Rabbit Collective      <br/>
                  on social media or their website for details on how and where           <br/>
                  to purchase the NFTs.We always continue to build, grow our              <br/>  
                  community, giveaways,holders rewards and some promotions on socials!    <br/>
                  Website almoust ready to go live and we have some BIIG NEWS for y'all...<br/>
                  Stay tuned for updates!
               </p>
            </div>
         </div>
         <div className="container contact">
            <div className="contact_box">
               <h2>Contact</h2>
               <form action="#">
                  <label htmlFor="E-mail">E-mail:</label>
                  <input type="email" />
                  <label htmlFor="name">Name:</label>
                  <input type="text" />
                  <label htmlFor="title">Title:</label>
                  <input type="text" />
                  <label htmlFor="message">Message:</label>
                  <textarea name="mass" id="" cols="30" rows="10"></textarea>

               </form>
            </div>
         </div>
      </>
    );
}
export default Home;
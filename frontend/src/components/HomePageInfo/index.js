import React from 'react';
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom';
//css
import './HomePageInfo.css'

const HomePageInfo = () => {
     return (
       <div className="homeBottom">
         <div>
           <h1 className="header">What is Hook Loose?</h1>
           <div className="container">
             <div className="displayBox">
               <h2>Unique Creations</h2>
               <p>
                 Hook Loose makes products from hand that are unique in there
                 own way.
               </p>
             </div>
             <div className="displayBox">
               <h2>Support an independent creator</h2>
               <p>
                 There’s no Hook Loose warehouse – just regular people selling
                 the things they love. We make the whole process easy, helping
                 you connect directly with makers to find something
                 extraordinary.
               </p>
             </div>
             <div className="displayBox">
               <h2>Peace of mind</h2>
               <p>
                 Your privacy is the highest priority of our dedicated team. And
                 if you ever need assistance, we are always ready to step in for
                 support.
               </p>
             </div>
           </div>
         </div>
         <div className="footer">
           <div className="footerItem">
             <h4>Shop</h4>
             <Link>
               <p>Gift cards</p>
             </Link>
             <Link>
               <p>Blog</p>
             </Link>
           </div>
           <div className="footerItem">
             <h4>Sell</h4>
             <Link>
               <p>Forums</p>
             </Link>
             <Link>
               <p>Affiliates</p>
             </Link>
           </div>
           <div className="footerItem">
             <h4>About</h4>
             <Link>
               <p>Policies</p>
             </Link>
             <Link>
               <p>Investors</p>
             </Link>
             <Link>
               <p>Careers</p>
             </Link>
             <Link>
               <p>Impact</p>
             </Link>
           </div>
           <div className="footerItem">
             <h4>Help</h4>
             <Link>
               <p>Help Center</p>
             </Link>
             <Link>
               <p>Privacy settings</p>
             </Link>
           </div>
         </div>
       </div>
     );
}

export default HomePageInfo;
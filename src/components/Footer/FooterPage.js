import React from 'react'
import SimpleReactFooter from "simple-react-footer";
import { useHistory,Link} from "react-router-dom";
export default function FooterPage() {

  const history = useHistory();


  // const description = "We all have rapidly adapted ourselves to the era of smartphones. Social Media has emerged as one of the most effective and necessary ways to reach out to targeted audience and engage your church members. Many congregations and houses of worship brought their church services online with little knowledge. But full utilization of social media is still not the best for most of the churches, leaving aside mega churches. Yours could be one of them. Views, shares and likes could potentially increase to millions and people will start coming in-person by seeing your continuous online presence. Simply outsource the social media management and digital marketing work to professionals like us with 80% lesser cost and see great results in front of your eyes while we let you focus on what you do the best.";
  const logo = <img src={require('../../assets/images/conecting mediabluebg.jpg')} height={80} width={300} />
  const copyright =<span style={{color:'orange'}}> <img src={require('../../assets/images/imit_logo_new.png')} height="30"/>  imit Park </span>
  // const next = "park. All Rights Reserved";
  const columns = [
    // {
    //     title: "Resources",
    //     resources: [
    //         {
    //             name: "About",
    //             link: "/about"
    //         },
    //         {
    //             name: "Careers",
    //             link: "/careers"
    //         },
    //         {
    //             name: "Contact",
    //             link: "/contact"
    //         },
    //         {
    //             name: "Admin",
    //             link: "/admin"
    //         }
    //     ]
    // },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    // {
    //     title: "Visit",
    //     resources: [
    //         {
    //             name: "Locations",
    //             link: "/locations"
    //         },
    //         {
    //             name: "Culture",
    //             link: "/culture"
    //         }
    //     ]
    // }
 ];
  return (
    <div>
      <SimpleReactFooter 
    // description={logo} 
    // title={title}
   
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright={copyright}
    iconColor="black"
    backgroundColor="white"
    fontColor="black"
    copyrightColor="darkgrey"
    className="foooter"
 />
    </div>
  )
}

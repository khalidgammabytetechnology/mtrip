// client/src/Components/Maps.js

import React from "react";
import "../Css/maps.css";

const locations = [
  {
    city: "Hotel Maple Tree-Ahmedabad",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117514.61286604006!2d72.36520141640622!3d23.011591900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b94fde97571%3A0xfc06cf3047550b45!2sPushpak%20Complex!5e0!3m2!1sen!2sin!4v1752151041907!5m2!1sen!2sin",
  },
  {
    city: "Hotel Maple Inn-Ahmedabad",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.981600581375!2d72.56833127514058!3d23.02444777917242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e852b7b4b6b95%3A0x37c24aac37c784b9!2sSanidhya%20Building!5e0!3m2!1sen!2sin!4v1752151129906!5m2!1sen!2sin",
  },
  {
    city: "Hotel Mukund Inn-Ahmedabad",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58751.707941993365!2d72.52970639102409!3d23.02444242623037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2703dc9f67%3A0xe47094b8af16027b!2sKFC!5e0!3m2!1sen!2sin!4v1752151181161!5m2!1sen!2sin",
  },
  {
    city: "Hotel Maple Leaf-Ahmedabad",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7934896245474!2d72.46781007514085!3d23.031353479167674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b9cc462b20d%3A0x8665f62dc2582893!2sTRP%20Mall!5e0!3m2!1sen!2sin!4v1752151218905!5m2!1sen!2sin",
  },
  {
    city: "Hotel Maple-Ahmedabad",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7939413042036!2d72.4706376!3d23.031336900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b800e4ba6c5%3A0x63cc31126fed77d4!2sHotel%20Maple!5e0!3m2!1sen!2sin!4v1754981966965!5m2!1sen!2sin",
  },
  {
    city: "Hotel Ellis Bridge-Ahmedabad",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9808809808715!2d72.5710288!3d23.0244742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8586494c67c7%3A0x20ce14fdf66763d7!2smtrip%20hotel!5e0!3m2!1sen!2sin!4v1754980889604!5m2!1sen!2sin",
  },
  {
    city: "Hotel Bilva Tree SCIENCITY",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.4740834135937!2d72.5017969!3d23.079734999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d023b7ee6b1%3A0xdffa55e0401f0957!2sHOTEL%20BILVA%20TREE!5e0!3m2!1sen!2sin!4v1754980954930!5m2!1sen!2sin",
  },
  {
    city: "The Melberry Villas-Ahmedabad",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3945644638957!2d72.3668321751401!3d23.009280679183107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e98c421d5d1a1%3A0x33cac90eeba02bbb!2sKalhaar%20Blues%20%26%20Greens%20Golf%20Club%20(KBG%20CLUB)!5e0!3m2!1sen!2sin!4v1756293658471!5m2!1sen!2sin",
  },
];

const Maps = () => {
  return (
    <div className="map-section">
      <h3 className="map-title">Our Branch Locations</h3>
      <div className="map-container">
        {locations.map((loc, index) => (
          <div key={index} className="map-card">
            <h5>{loc.city}</h5>
            <iframe
              src={loc.url}
              width="100%"
              height="200"
              style={{ borderRadius: 10 }}
              allowFullScreen=""
              loading="lazy"
              title={loc.city}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;

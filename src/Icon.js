import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaIcons() {
  return (
    <div className='fedmore'>
        <h1>-----Follow Us-----</h1>
    <div className="switch">
      <div className="note1"><FontAwesomeIcon icon={faTwitter} /></div>
      <div className="note2"><FontAwesomeIcon icon={faFacebookF} /></div>
      <div className="note3"><FontAwesomeIcon icon={faLinkedinIn} /></div>
      <div className="note4"><FontAwesomeIcon icon={faInstagram} /></div>
    </div>
    </div>
  );
}

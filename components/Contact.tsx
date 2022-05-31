import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const contactInfo = [
    {
      site: 'facebook',
      link: 'https://www.facebook.com/josephhl.wang',
      icon: faFacebookSquare,
    },
    {
      site: 'linkedin',
      link: 'https://www.linkedin.com/in/jhlwang',
      icon: faLinkedin,
    },
    {
      site: 'instagram',
      link: 'https://www.instagram.com/xjsphwng',
      icon: faInstagramSquare,
    },
    {
      site: 'github',
      link: 'https://www.github.com/josephhlwang',
      icon: faGithubSquare,
    },
  ]

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-10 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Socials</h3>
      <div className="grid grid-cols-4 place-items-center">
        {contactInfo.map((contact) => (
          <div key={contact.site} className="cursor-pointer">
            <a href={contact.link}>
              <FontAwesomeIcon icon={contact.icon} className="fa-3x" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact

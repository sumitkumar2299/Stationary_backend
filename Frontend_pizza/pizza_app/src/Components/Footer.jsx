
import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// export default function Footer() {
//   return (
//     <div>
//       <h1>2025 all rights reserved</h1>
//       <FontAwesomeIcon icon={faEnvelope} />
//       <FontAwesomeIcon icon={faInstagram} />
//       <FontAwesomeIcon icon={faLinkedin} />
//       <FontAwesomeIcon icon={faGithub} />
//     </div>
//   )
// }



export default function Footer() {
  return (
    <footer className="bg-yellow-50 border-t border-yellow-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Text */}
        <p className="text-center text-sm text-gray-700 mb-4 md:mb-0">
          🍕 2025 © PizzaApp. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-5 text-xl text-red-500">
          <a href="mailto:pizzaapp@example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="hover:text-red-700 transition" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-red-700 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-red-700 transition" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="hover:text-red-700 transition" />
          </a>
        </div>
      </div>
    </footer>
  )
}
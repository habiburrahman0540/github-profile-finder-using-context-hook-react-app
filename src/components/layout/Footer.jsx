import React from 'react'

const Footer = () => {
    const FooterYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
            <p>CopyRight &copy;{FooterYear} All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
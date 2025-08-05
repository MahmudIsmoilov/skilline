import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logos">
            <img src="./images/footer-logo.svg" alt="" />
            <div className='chiziq'></div>
            <p>Virtual Class<br /> for Zoom</p>
        </div>
        <form>
            <h1 className='footer-title'>Subscribe to get our Newsletter</h1>
            <div className="footer-row">
                <input placeholder='Your Email' className='input1' type="text" />
                <input className='input2' value={'Subscribe'} type="submit" />
            </div>
        </form>
    </div>
  )
}

export default Footer
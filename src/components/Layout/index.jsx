import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Header from '../Header';

export default function Layout({ children, data, SeoData, navServices }) {

  return (
  
    <div>
      {SeoData && <Header data={SeoData} />}
      <Navbar data={data?.navbar} navServices={data?.servicesLink}  />
      <div className="flex-1">{children}</div>
      <Footer data={data?.footer} navServices={data?.servicesLink} />
    </div>
  )
}


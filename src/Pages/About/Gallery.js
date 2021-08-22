import React from 'react'
import gallery05 from '../../Assets/Images/ImgAbout/gallery05.jpeg'
import gallery06 from '../../Assets/Images/ImgAbout/gallery06.jpeg'
import gallery07 from '../../Assets/Images/ImgAbout/gallery07.jpeg'
import gallery08 from '../../Assets/Images/ImgAbout/gallery08.jpeg'
import gallery09 from '../../Assets/Images/ImgAbout/gallery09.jpeg'
import gallery10 from '../../Assets/Images/ImgAbout/gallery10.jpeg'
import gallery11 from '../../Assets/Images/ImgAbout/gallery11.jpeg'
import gallery12 from '../../Assets/Images/ImgAbout/gallery12.jpeg'
import gallery13 from '../../Assets/Images/ImgAbout/gallery13.jpeg'

export default function Gallery() {
  return (
    <section className="gallery text-center pt-5 pb-5">
      <div className="container mt-5">
        <div className="gallery-header px-5">
          <h2 className="text-success mb-3">WE ARE FLEX</h2>
          <h1 className="display-4 font-weight-bold mb-4">GET TO KNOW US</h1>
          <p className="mb-5 px-5" style={{fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        </div>
        <section className="gallery-body">
          <div className="row">
           <div className="col-lg-3 col-md-6">
             <div className="p-3"><img src={gallery05} alt={gallery05} width='110%' /></div>
             <div className="p-3"><img src={gallery06} alt={gallery06} width='110%'/></div>
             <div className="p-3"><img src={gallery07} alt={gallery07} width='110%'/></div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="p-3"><img src={gallery11} alt={gallery11} width='110%'/></div>
             <div className="p-3"><img src={gallery12} alt={gallery12} width='110%'/></div>
             <div className="p-3"><img src={gallery13} alt={gallery13} width='110%'/></div>
           </div>
           <div className="col-lg-6 col-md-12">
              <div className="col-12 p-2"><img src={gallery08} alt={gallery08} width='102%'/></div>
              <div className="row p-2">
                <div className="col-md-6 p-3"><img src={gallery09} alt={gallery09} width='100%'/></div>
                <div className="col-md-6 p-3"><img src={gallery10} alt={gallery10} width='100%'/></div>
             </div>
           </div>
          
          </div>
        </section>
      </div>
    </section>
  )
}

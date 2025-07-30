import React from 'react';
import Navbar from './comm/Navbar';
import Footer from './comm/Footer';


const galleryImages = [
  { src: 'https://content.jdmagicbox.com/v2/comp/ahmednagar/e4/9999px241.x241.120112140407.y8e4/catalogue/d-chandrakant-mens-wear-dilli-gate-ahmednagar-tailors-for-men-SrsvKdguMX.jpg', alt: 'shop', category: 'shop' },
  { src: 'https://images.jdmagicbox.com/comp/ahmednagar/j3/9999px241.x241.100102130656.t2j3/catalogue/chini-tailors-bagadpatti-ahmednagar-gents-tailors-m9l09-250.jpg', alt: 'work', category: 'work' },
  { src: 'https://content3.jdmagicbox.com/v2/comp/ahmednagar/e4/9999px241.x241.120112140407.y8e4/catalogue/d-chandrakant-mens-wear-dilli-gate-ahmednagar-tailors-for-men-KRYtZk5Y6N.jpg', alt: 'costomer clicks', category: 'costomer clicks' },
  { src: 'https://content3.jdmagicbox.com/v2/comp/ahmednagar/e4/9999px241.x241.120112140407.y8e4/catalogue/d-chandrakant-mens-wear-dilli-gate-ahmednagar-tailors-for-men-7hJhLDZRFv.jpg', alt: 'shop', category: 'shop' },
  { src: 'https://content.jdmagicbox.com/comp/ahmednagar/e4/9999px241.x241.120112140407.y8e4/catalogue/d-chandrakant-mens-wear-dilli-gate-ahmednagar-readymade-garment-retailers-gpz61z1-250.jpg', alt: 'work', category: 'work' },
  { src: 'https://content3.jdmagicbox.com/v2/comp/ahmednagar/e4/9999px241.x241.120112140407.y8e4/catalogue/d-chandrakant-mens-wear-dilli-gate-ahmednagar-tailors-for-men-KRYtZk5Y6N.jpg', alt: 'Lcostomer clicks', category: 'costomer clicks' },
  { src: 'https://content.jdmagicbox.com/v2/comp/ahmednagar/e4/9999px241.x241.120112140407.y8e4/catalogue/d-chandrakant-mens-wear-dilli-gate-ahmednagar-tailors-for-men-YnOtw0RhPz-250.jpg', alt: 'shop', category: 'shop' }
];

function Gallery()
{
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>

    <Navbar />


    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="gallery-title">Our Gallery</h2>
          <p className="gallery-subtitle">Explore our portfolio of bespoke creations</p>
          <div className="gallery-underline mx-auto"></div>
        </div>

        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Photos
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'suits' ? 'active' : ''}`}
            onClick={() => setActiveCategory('shop')}
          >
            Our Shop
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'shirts' ? 'active' : ''}`}
            onClick={() => setActiveCategory('work')}
          >
            Our Works
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'wedding' ? 'active' : ''}`}
            onClick={() => setActiveCategory('costomer clicks')}
          >
            Customer Clicks 
          </button>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <div className="image-container">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-4">
        <div className="container">
          <div className="mb-4">
            <h2 className="benefit-title">WHAT YOU WILL GET</h2>
            <div className="benefit-underline"></div>
          </div>

          <div className="row g-4">
            <div className="col-md-3 col-12">
              <div className="benefit-item h-100">
                <i class="fa-solid fa-ranking-star fs-4 me-3"></i>
                <span className="benefit-name">BEST QUALITY</span>
              </div>
            </div>

            <div className="col-md-3 col-12">
              <div className="benefit-item h-100">
                <i class="fa-solid fa-vest fs-4 me-3"></i>
                <span className="benefit-name">BEST STYLE</span>
              </div>
            </div>

            <div className="col-md-3 col-12">
              <div className="benefit-item h-100">
                <i class="fa-solid fa-shirt fs-4 me-3"></i>
                <span className="benefit-name">BEST FINISHING</span>
              </div>
            </div>

            <div className="col-md-3 col-12">
              <div className="benefit-item h-100">
                <i class="fa-solid fa-wand-magic-sparkles fs-4 me-3"></i>
                <span className="benefit-name">BEST DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    <Footer />

    </>
  );
};

export default Gallery;
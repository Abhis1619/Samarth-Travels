import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const Gallery = () => {
  // Sample images with unique ids and different src/alt values
  const images = [
//  { id: 1, src: '/images/gallery/1.jpg', alt: 'Image 1' },
//   { id: 2, src: '/images/gallery/02.jpg', alt: 'Image 2' },
//   { id: 3, src: '/images/gallery/3.jpg', alt: 'Image 3' },
//   { id: 4, src: '/images/gallery/4.jpg', alt: 'Image 4' },
//   { id: 5, src: '/images/gallery/5.jpg', alt: 'Image 5' },
//   { id: 6, src: '/images/gallery/6.jpg', alt: 'Image 6' },
//   { id: 7, src: '/images/gallery/7.jpg', alt: 'Image 7' },
//   { id: 8, src: '/images/gallery/8.jpg', alt: 'Image 8' },
//   { id: 9, src: '/images/gallery/9.jpg', alt: 'Image 9' },
  { id: 10, src: '/images/gallery/107.jpeg', alt: 'Image 10' },
  { id: 12, src: '/images/gallery/12.jpg', alt: 'Image 12' },
  { id: 11, src: '/images/gallery/108.jpeg', alt: 'Image 11' },

  { id: 14, src: '/images/gallery/14.jpg', alt: 'Image 14' },

  { id: 9, src: '/images/gallery/114.jpeg', alt: 'Image 9' },
  { id: 6, src: '/images/gallery/111.jpeg', alt: 'Image 6' },
  { id: 8, src: '/images/gallery/113.jpeg', alt: 'Image 8' },

  { id: 7, src: '/images/gallery/112.jpeg', alt: 'Image 7' },

  { id: 13, src: '/images/gallery/13.jpg', alt: 'Image 13' },
  { id: 15, src: '/images/gallery/15.jpg', alt: 'Image 15' },
  { id: 16, src: '/images/gallery/16.jpg', alt: 'Image 16' },
  { id: 17, src: '/images/gallery/17.jpg', alt: 'Image 17' },
  { id: 18, src: '/images/gallery/18.jpg', alt: 'Image 18' },
  { id: 19, src: '/images/gallery/19.jpg', alt: 'Image 19' },
  { id: 20, src: '/images/gallery/20.jpg', alt: 'Image 20' },
  { id: 21, src: '/images/gallery/21.jpg', alt: 'Image 21' },
  { id: 22, src: '/images/gallery/22.jpg', alt: 'Image 22' },
  { id: 23, src: '/images/gallery/23.jpg', alt: 'Image 23' },
  { id: 24, src: '/images/gallery/24.jpg', alt: 'Image 24' },
  { id: 25, src: '/images/gallery/25.jpg', alt: 'Image 25' },
  { id: 26, src: '/images/gallery/26.jpg', alt: 'Image 26' },
  { id: 27, src: '/images/gallery/27.jpg', alt: 'Image 27' },
  { id: 28, src: '/images/gallery/28.jpg', alt: 'Image 28' },
  { id: 29, src: '/images/gallery/29.jpg', alt: 'Image 29' },
  { id: 30, src: '/images/gallery/30.jpg', alt: 'Image 30' },
  { id: 31, src: '/images/gallery/31.jpg', alt: 'Image 31' },
  { id: 32, src: '/images/gallery/32.jpg', alt: 'Image 32' },
  // { id: 33, src: '/images/gallery/33.jpg', alt: 'Image 33' },
  { id: 34, src: '/images/gallery/34.jpg', alt: 'Image 34' },
  // { id: 35, src: '/images/gallery/35.jpg', alt: 'Image 35' },
  { id: 36, src: '/images/gallery/36.jpg', alt: 'Image 36' },
  { id: 37, src: '/images/gallery/37.jpg', alt: 'Image 37' },
  // { id: 38, src: '/images/gallery/38.jpg', alt: 'Image 38' },
  { id: 39, src: '/images/gallery/39.jpg', alt: 'Image 39' },
  { id: 40, src: '/images/gallery/40.jpg', alt: 'Image 40' },
  { id: 41, src: '/images/gallery/41.jpg', alt: 'Image 41' },
  { id: 42, src: '/images/gallery/42.jpg', alt: 'Image 42' },
  { id: 43, src: '/images/gallery/43.jpg', alt: 'Image 43' },
  { id: 44, src: '/images/gallery/44.jpg', alt: 'Image 44' },
  { id: 45, src: '/images/gallery/45.jpg', alt: 'Image 45' },
  { id: 47, src: '/images/gallery/109.jpeg', alt: 'Image 47' },
  { id: 48, src: '/images/gallery/110.jpeg', alt: 'Image 48' },
  // { id: 49, src: '/images/gallery/49.jpg', alt: 'Image 49' },
  { id: 50, src: '/images/gallery/50.jpg', alt: 'Image 50' },
  { id: 51, src: '/images/gallery/51.jpg', alt: 'Image 51' },
  { id: 52, src: '/images/gallery/52.jpg', alt: 'Image 52' },
  { id: 53, src: '/images/gallery/53.jpg', alt: 'Image 53' },
  { id: 54, src: '/images/gallery/54.jpg', alt: 'Image 54' },
  { id: 55, src: '/images/gallery/55.jpg', alt: 'Image 55' },
  { id: 56, src: '/images/gallery/56.jpg', alt: 'Image 56' },
  { id: 58, src: '/images/gallery/58.jpg', alt: 'Image 58' },
  { id: 59, src: '/images/gallery/59.jpg', alt: 'Image 59' },
  { id: 60, src: '/images/gallery/60.jpg', alt: 'Image 60' },
  { id: 61, src: '/images/gallery/61.jpg', alt: 'Image 61' },
  { id: 62, src: '/images/gallery/62.jpg', alt: 'Image 62' },
  { id: 63, src: '/images/gallery/63.jpg', alt: 'Image 63' },
  { id: 64, src: '/images/gallery/64.jpg', alt: 'Image 64' },
  { id: 65, src: '/images/gallery/65.jpg', alt: 'Image 65' },
  { id: 66, src: '/images/gallery/66.jpg', alt: 'Image 66' },
  { id: 67, src: '/images/gallery/67.jpg', alt: 'Image 67' },
  { id: 68, src: '/images/gallery/68.jpg', alt: 'Image 68' },
  { id: 69, src: '/images/gallery/69.jpg', alt: 'Image 69' },
  { id: 70, src: '/images/gallery/70.jpg', alt: 'Image 70' },
  { id: 71, src: '/images/gallery/71.jpg', alt: 'Image 71' },
  { id: 72, src: '/images/gallery/72.jpg', alt: 'Image 72' },
  { id: 73, src: '/images/gallery/73.jpg', alt: 'Image 73' },
  // { id: 75, src: '/images/gallery/75.jpg', alt: 'Image 75' },
  { id: 76, src: '/images/gallery/76.jpg', alt: 'Image 76' },
  { id: 77, src: '/images/gallery/77.jpg', alt: 'Image 77' },
  { id: 78, src: '/images/gallery/78.jpg', alt: 'Image 78' },
  { id: 79, src: '/images/gallery/79.jpg', alt: 'Image 79' },
  { id: 80, src: '/images/gallery/80.jpg', alt: 'Image 80' },
  { id: 81, src: '/images/gallery/81.jpg', alt: 'Image 81' },
  { id: 82, src: '/images/gallery/82.jpg', alt: 'Image 82' },
  // { id: 85, src: '/images/gallery/85.jpg', alt: 'Image 85' },
  { id: 86, src: '/images/gallery/86.jpg', alt: 'Image 86' },
  { id: 87, src: '/images/gallery/87.jpg', alt: 'Image 87' },
  { id: 88, src: '/images/gallery/88.jpg', alt: 'Image 88' },
  { id: 89, src: '/images/gallery/89.jpg', alt: 'Image 89' },
  { id: 90, src: '/images/gallery/90.jpg', alt: 'Image 90' },
  { id: 91, src: '/images/gallery/91.jpg', alt: 'Image 91' },
  { id: 92, src: '/images/gallery/92.jpg', alt: 'Image 92' },
  { id: 93, src: '/images/gallery/93.jpg', alt: 'Image 93' },
  { id: 94, src: '/images/gallery/94.jpg', alt: 'Image 94' },
  { id: 95, src: '/images/gallery/95.jpg', alt: 'Image 95' },
  { id: 96, src: '/images/gallery/96.jpg', alt: 'Image 96' },
  // { id: 97, src: '/images/gallery/97.jpg', alt: 'Image 97' },
  { id: 98, src: '/images/gallery/98.jpg', alt: 'Image 98' },
  { id: 99, src: '/images/gallery/99.jpg', alt: 'Image 99' },
  { id: 100, src: '/images/gallery/100.jpg', alt: 'Image 100' },

  
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal and set the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Show next image in the modal
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Show previous image in the modal
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };



  return (

<>

 <div className="breadcumb-wrapper" data-bg-src="/images/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title text-center">Gallery</h1>
                </div>
            </div>
        </div>
         


    
    <div className="gallery-container  ">
      <div className="gallery-grid ">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-image-item borderr"
            onClick={() => openModal(index)} // Open the modal on click
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay border">
          <button className="modal-close-button" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content-container ">
            <button className="modal-prev-button" onClick={prevImage}>
              &#10094;
            </button>
            <div className="modal-image-container">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="modal-image"
              />
            </div>
            <button className="modal-next-button" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>

</>
  );
};

export default Gallery;
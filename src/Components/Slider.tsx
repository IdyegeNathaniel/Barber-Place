// import React, { useState } from 'react';
// import { gallery } from '../assets/assets';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


// interface ImageGalleryProps {
//     initialIndex?: number;
//     imageWidth?: number;
//     imageHeight?: number;
//     gap?: number
// }

// const ImageGallery: React.FC<ImageGalleryProps> = ({
//     initialIndex = 0,
//     imageWidth = 300,
//     imageHeight = 300,
//     gap = 20
// }) => {
//     const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

//     const nextSlide = (): void => {
//         setCurrentIndex((prev) => (prev + 1) % gallery.length);
//     };

//     const prevSlide = (): void => {
//         setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
//     };

//     const handleDotClick = (index: number): void => {
//         setCurrentIndex(index);
//     };

//     return (
//         <div className="relative w-full max-w-4xl mx-auto py-12">
//             <div className="overflow-hidden relative">
//                 <div
//                     className="flex transition-transform duration-300 ease-in-out"
//                     style={{
//                         transform: `translateX(-${currentIndex * 100}%)`,
//                     }}
//                 >
//                     <div className="flex">
//                         {gallery.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative min-w-full transform transition-transform duration-500
//                                             ${index === currentIndex ? 'scale-100' : 'scale-90 opacity-75'}`}>
//                                 <div className="flex items-center justify-center" style={{ padding: `${gap / 2}px` }}>
//                                     <img
//                                         src={item.image}
//                                         alt='image'
//                                         className="rounded-lg shadow-xl object-cover"
//                                         style={{
//                                             maxWidth: `${imageWidth}px`,
//                                             height: `${imageHeight}px`
//                                         }}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <button
//                 onClick={prevSlide}
//                 aria-label="Previous slide"
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
//             >
//                 <FaArrowLeft />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 aria-label="Next slide"
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
//             >
//               <FaArrowRight />
//             </button>

//             {/* Pagination Dots */}
//             <div className="flex justify-center gap-2 mt-4">
//                 {gallery.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handleDotClick(index)}
//                         aria-label={`Go to slide ${index + 1}`}
//                         className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
//                             }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ImageGallery;
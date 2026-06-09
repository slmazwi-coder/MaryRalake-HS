import { useState } from 'react'
import { Camera, X } from 'lucide-react'

const GALLERY_ITEMS = [
  {
    src: '/assets/FB_IMG_1780831250932.jpg',
    alt: 'Class photo with school backdrop',
    caption: 'School Community',
  },
  {
    src: '/assets/FB_IMG_1780831268707.jpg',
    alt: 'Three learners with Matric ties',
    caption: 'Matric Celebration',
  },
  {
    src: '/assets/FB_IMG_1780831282062.jpg',
    alt: 'Tie ceremony celebration',
    caption: 'Tie Ceremony 2026',
  },
  {
    src: '/assets/FB_IMG_1780831293456.jpg',
    alt: 'Learner speaker at microphone',
    caption: 'Tie Ceremony Speech',
  },
  {
    src: '/assets/FB_IMG_1780831303458.jpg',
    alt: 'Leadership moment',
    caption: 'School Leadership',
  },
  {
    src: '/assets/FB_IMG_1780831319291.jpg',
    alt: 'Matric 2026 tie close-up',
    caption: 'Matric 2026 Tie',
  },
  {
    src: '/assets/FB_IMG_1780831324893.jpg',
    alt: 'Matric 2026 tie merchandise',
    caption: 'Tie Merchandise',
  },
  {
    src: '/assets/FB_IMG_1780831503746.jpg',
    alt: 'Aerial school view',
    caption: 'School Campus',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #102060 100%)' }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Photo Gallery</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore moments from Mary Ralake High School — from the Tie Ceremony to school life and community events.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square" style={{ background: '#E8EDFB' }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center" style="background: #E8EDFB">
                          <svg class="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p class="text-sm text-gray-400 mt-2">${item.caption}</p>
                        </div>
                      `
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-md inline-block">
              <div className="flex items-center gap-2 text-gray-500">
                <Camera size={20} />
                <span className="text-sm">All photos by <strong>EverLasting Portraits</strong> (official school photographer)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.9)' }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 font-semibold">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </main>
  )
}
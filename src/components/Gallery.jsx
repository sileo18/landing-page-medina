import { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: '/assets/corte-1.JPG', alt: 'Corte Premium' },
    { src: '/assets/corte-2.JPG', alt: 'Estilo Clássico' },
    { src: '/assets/corte-3.JPG', alt: 'Acabamento Perfeito' },
    { src: '/assets/ambiente.jpg', alt: 'Nosso Espaço' }
  ]

  return (
    <section id="galeria" className="section-padding bg-rich-black">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="gold-line mb-6"></div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Galeria</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4">
              Nosso <span className="text-gold">Trabalho</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md lg:text-right">
            Cada corte é uma expressão de estilo e personalidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="group relative aspect-square overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(images[0])}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-deep-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span className="font-display text-xl">{images[0].alt}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              className="group relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(images[1])}
            >
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="font-display text-sm">{images[1].alt}</span>
              </div>
            </div>
            <div
              className="group relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(images[2])}
            >
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover scale-x-[-1]"
              />
              <div className="absolute inset-0 bg-deep-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="font-display text-sm">{images[2].alt}</span>
              </div>
            </div>
            <div
              className="group relative col-span-2 aspect-[2/1] overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(images[3])}
            >
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="font-display text-lg">{images[3].alt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
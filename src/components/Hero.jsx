import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário na Mr Medina.')
    window.open(`https://wa.me/5511948557163?text=${message}`, '_blank')
  }

  return (
    <section id="inicio" className="relative h-screen min

-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ambiente.webp"
          alt="Mr Medina Barbearia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/80 to-deep-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/50"></div>
      </div>

      <div className="relative z-10 container-custom px-5 sm:px-8 lg:px-16 w-full">
        <div className="max-w-3xl">
          <div className="gold-line mb-8 animate-fade-in"></div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 animate-fade-up">
            Mais que um corte.
            <br />
            <span className="text-gold">Uma experiência.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 font

-light leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Barbearia premium que une tradição, estilo e atitude.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary group"
            >
              <span>Agendar pelo WhatsApp</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            
            <a href="#servicos" className="btn-outline">
              Ver Serviços
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-xs text-white/40 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b

 from-gold to-transparent"></div>
      </div>
    </section>
  )
}

export default Hero
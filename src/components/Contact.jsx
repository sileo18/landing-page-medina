import { MessageCircle, Instagram, Phone, ArrowRight } from 'lucide-react'

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário na Mr Medina.')
    window.open(`https://wa.me/5511948557

163?text=${message}`, '_blank')
  }

  return (
    <section id="contato" className="section-padding bg-rich-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-line mx-auto mb-6"></div>
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Contato</span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl mt-4 mb-6">
            Pronto para sua
            <span className="text-gold"> transformação?</span>
          </h2>
          
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            Agende seu horário e viva a experiência Mr Medina
          

</p>

          <button
            onClick={handleWhatsAppClick}
            className="btn-primary text-lg px-12 py-5 group"
          >
            <MessageCircle size={24} />
            <span>Agendar pelo WhatsApp</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <div className="flex items-center justify-center gap-8 mt-16 pt-16 border-t border-white/10">
            <a
              href="https://wa.me/5511948557163"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors"
            >
              <Phone size={20} strokeWidth={1.5} />
              <span>(11) 94855-7163</span>
            </a>
            <a
              href="https://instagram.com/mr.medinaofc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/50 hover:text-

gold transition-colors"
            >
              <Instagram size={20} strokeWidth={1.5} />
              <span>@mr.medinaofc</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
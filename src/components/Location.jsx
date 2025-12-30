import { MapPin, Clock } from 'lucide-react'

const Location = () => {
  return (
    <section id="localizacao" className="section-padding bg-deep-black">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="gold-line mx-auto mb-6"></div>
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Localização</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4">
            Venha nos <span className="text-gold">visitar</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-dark-gray to-medium-gray p-8 lg:p-10 border border-gold/20 hover:border-gold/40 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center">
                      <MapPin className="text-gold" size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl lg:text-3xl mb-4 tracking-wide">ENDEREÇO</h3>
                    <div className="space-y-1 text-white/60 leading-relaxed">
                      <p className="text-white/80">Avenida Boturussu, 588</p>
                      <p>Parque Boturussu</p>
                      <p>São Paulo - SP</p>
                      <p className="text-gold/60 text-sm mt-2">CEP 03802-010</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-dark-gray to-medium-gray p-8 lg:p-10 border border-gold/20 hover:border-gold/40 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center">
                      <Clock className="text-gold" size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl lg:text-3xl mb-4 tracking-wide">HORÁRIO</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-white/60">Segunda a Sábado</span>
                        <span className="text-gold font-semibold">09h - 21h</span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-white/60">Domingo</span>
                        <span className="text-white/30">Fechado</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Feriados</span>
                        <span className="text-white/50 text-sm">Horário reduzido</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto min-h-[500px] relative group">
            <div className="absolute inset-0 bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-500"></div>
            <div className="relative h-full border border-gold/20 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543.8904730086526!2d-46.488087168541895!3d-23.50211368296348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60f0acb489b1%3A0xf980f1fcbdc7353!2sAv.%20Boturussu%2C%20588%20-%20Parque%20Boturussu%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003802-010!5e0!3m2!1spt-BR!2sbr!4v1767053486237!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(85%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Mr Medina Barbearia"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
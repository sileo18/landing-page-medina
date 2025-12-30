const About = () => {
  return (
    <section id="sobre" className="section-padding bg-rich-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/assets/ambiente.webp"
                alt="Ambiente Mr Medina"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/30"></div>
          </div>

          <div className="lg:pl-8">
            <div className="gold-line mb-6"></div>
            <span

 className="text-gold text-sm tracking-[0.3em] uppercase">Sobre Nós</span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-8 leading-tight">
              Onde tradição encontra
              <span className="text-gold"> atitude</span>
            </h2>
            
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                A <span className="text-white">Mr Medina</span> nasceu da fusão entre a barbearia clássica e a cultura street. Um espaço pensado para homens que entendem que estilo é identidade.
              </p>
              <p>
                Nosso ambiente combina elementos industriais, iluminação intimista e acabamentos premium — criando uma atmosfera única onde cada detalhe foi projetado para proporcionar uma experiência completa.
              </p>
              <p>
                Aqui, você não vem apenas cortar o cabelo. Você vem viver um momento de cuidado, relaxamento e transform

ação.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <span className="font-display text-3xl lg:text-4xl text-gold">5+</span>
                <p className="text-white/50 text-sm mt-2">Anos de experiência</p>
              </div>
              <div>
                <span className="font-display text-3xl lg:text-4xl text-gold">2k+</span>
                <p className="text-white/50 text-sm mt-2">Clientes atendidos</p>
              </div>
              <div>
                <span className="font-display text-3xl lg:text-4xl text-gold">100%</span>
                <p className="text-white/50 text-sm mt-2">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
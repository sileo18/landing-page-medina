import { Scissors, Wind, Sparkles, Flame, Lightbulb, Trash2, Brush, Eye } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Scissors,
      name: 'Corte',
      description: 'Do clássico ao contemporâneo, executado com precisão'
    },
    {
      icon: Wind,
      name: 'Barba',
      description: 'Modelagem e acabamento para uma barba impecável'
    },
    {
      icon: Eye,
      name: 'Sobrancelha',
      description: 'Design que valoriza e harmoniza o olhar'
    },
    {
      icon: Flame,
      name: 'Progressiva',
      description: 'Fios alinhados e disciplinados por mais tempo'
    },
    {
      icon: Sparkles,
      name: 'Botox Capilar',
      description: 'Reconstrução profunda com brilho e maciez'
    },
    {
      icon: Lightbulb,
      name: 'Luzes',
      description: 'Coloração que adiciona dimensão ao visual'
    },
    {
      icon: Trash2,
      name: 'Remoção de Pelos',
      description: 'Acabamento refinado em nariz e orelha'
    },
    {
      icon: Brush,
      name: 'Penteado',
      description: 'Finalização profissional para qualquer ocasião'
    }
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de consultar valores e agendar um horário.')
    window.open(`https://wa.me/5511948557163?text=${message}`, '_blank')
  }

  return (
    <section id="servicos" className="section-padding bg-deep-black">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="gold-line mx-auto mb-6"></div>
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Serviços</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            Experiência <span className="text-gold">Premium</span>
          </h2>
          <p className="text-white/50">
            Cada serviço executado com técnica apurada e produtos de alta performance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((service

, index) => (
            <div
              key={index}
              className="group bg-deep-black hover:bg-dark-gray p-8 lg:p-10 transition-all duration-500"
            >
              <service.icon className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={32} strokeWidth={1.5} />
              <h3 className="font-display text-xl mb-3">{service.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button onClick={handleWhatsAppClick} className="btn-primary">
            Consultar valores e agendar
          </button>
          <p className="text-white/30 text-sm mt-4">
            Valores sob consulta via WhatsApp
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
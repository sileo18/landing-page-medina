import { Phone } from 'lucide-react'

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário na Mr Medina.')
    window.open(`https://wa.me/5511948557163?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-600/20 transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <Phone size={28} strokeWidth={1.5} />
    </button>
  )
}

export default WhatsAppButton
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
      document.documentElement.classList.add('bg-black')
    } else {
      document.body.classList.remove('overflow-hidden')
      document.documentElement.classList.remove('bg-black')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
      document.documentElement.classList.remove('bg-black')
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário na Mr Medina.')
    window.open(`https://wa.me/5511948557163?text=${message}`, '_blank')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-deep-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    }`}>
      <nav className="container-custom px-5 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="relative z-10">
            <img src="/assets/LOGO.png" alt="Mr Medina" className="h-12 lg:h-14" />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-white/60 hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="hidden lg:block text-sm border border-gold/40 text-gold hover:bg-gold hover:text-deep-black px-6 py-2.5 transition-all duration-300 tracking-wide"
          >
            Agendar
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Backdrop overlay for mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={isMobileMenuOpen ? 'false' : 'true'}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Mobile menu content */}
        <div
          className={`relative flex flex-col items-center justify-center h-full gap-8 transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-2xl font-display text-white/80 hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={handleWhatsAppClick}
            className="mt-4 border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-deep-black transition-all duration-300"
          >
            Agendar Horário
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
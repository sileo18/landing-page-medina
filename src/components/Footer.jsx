const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-black border-t border-white/5">


      <div className="container-custom px-5 sm:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl">
              <span className="text-gold">Mr</span>
              <span className="text-white font-light"> Medina</span>
            </span>
            <span className="text-white/20 mx-4">|</span>
            <span className="text-white/40 text-sm">© {currentYear}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <span>Desenvolvido por</span>
            <img className="w-auto h-5 -translate-y-1" alt="Sileo Logo" src="/assets/LOGO_SILEO_PNG_B.png"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
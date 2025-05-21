import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Diagonal stripes – seamless and long */}
      <div className="absolute right-24 top-[-100%] h-[400%] w-8 rotate-12 bg-[#87CEFA] opacity-20 z-0"></div>
      <div className="absolute right-[10rem] top-[-100%] h-[400%] w-8 rotate-12 bg-[#0C2C57] opacity-20 z-0"></div>
      <div className="absolute right-[14rem] top-[-100%] h-[400%] w-8 rotate-12 bg-[#C42A2B] opacity-20 z-0"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              Agency<span className="text-[#87CEFA]">Force</span>
            </h3>
            <p className="text-gray-400">
              Spájame špičkové talenty s poprednými spoločnosťami naprieč rôznymi odvetviami.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Rýchle odkazy</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Domov</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">O nás</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Naše služby</Link></li>
              <li><Link href="/references" className="text-gray-400 hover:text-white transition-colors">Referencie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Služby</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Executive Search</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Dočasné zamestnávanie</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Outsourcing náborového procesu</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">HR poradenstvo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Karloveská 49</p>
              <p>841 04, Bratislava</p>
              <p>Email: info@agencyforce.com</p>
              <p>Telefón: +421 123 456 789</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AgencyForce. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}
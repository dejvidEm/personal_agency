"use client"

import Image from "next/image"
import CTABanner from "@/components/cta-banner"
import AnimatedSection from "@/components/animated-section"
import { Award, Quote } from "lucide-react"

// Declare the updateActiveDot function
function updateActiveDot(index) {
  const dots = document.querySelectorAll("#pagination-dots button")
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-blue-600", i === index)
    dot.classList.toggle("bg-gray-300", i !== index)
  })
}

export default function ReferencesPage() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/business-handshake.png" alt="Referencie klientov" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Referencie klientov</h1>
            <p className="text-xl text-gray-200">
              Neberte to len z našich slov. Tu je, čo naši klienti hovoria o spolupráci s TalentForce.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vybrané referencie</h2>
            <p className="text-lg text-gray-600">
              Sme hrdí na vzťahy, ktoré sme vybudovali s našimi klientmi, a na vplyv, ktorý sme mali na ich podnikanie.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Slider controls for mobile/tablet */}
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <button
                onClick={() => {
                  const container = document.getElementById("testimonials-container")
                  if (container) {
                    // Get all testimonial items
                    const items = container.querySelectorAll(":scope > div")
                    if (!items.length) return

                    // Calculate current visible item
                    const containerWidth = container.offsetWidth
                    const scrollLeft = container.scrollLeft
                    const currentIndex = Math.round(scrollLeft / containerWidth)

                    // Calculate target index (previous)
                    let targetIndex = currentIndex - 1
                    if (targetIndex < 0) {
                      // Loop to the last item
                      targetIndex = items.length - 1
                      container.scrollTo({ left: targetIndex * containerWidth, behavior: "smooth" })
                    } else {
                      container.scrollBy({ left: -containerWidth, behavior: "smooth" })
                    }

                    // Update pagination dots
                    updateActiveDot(targetIndex)
                  }
                }}
                className="bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Predchádzajúce referencie"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="text-gray-600">Posúvajte pre viac referencií</span>
              <button
                onClick={() => {
                  const container = document.getElementById("testimonials-container")
                  if (container) {
                    // Get all testimonial items
                    const items = container.querySelectorAll(":scope > div")
                    if (!items.length) return

                    // Calculate current visible item
                    const containerWidth = container.offsetWidth
                    const scrollLeft = container.scrollLeft
                    const currentIndex = Math.round(scrollLeft / containerWidth)

                    // Calculate target index (next)
                    let targetIndex = currentIndex + 1
                    if (targetIndex >= items.length) {
                      // Loop to the first item
                      targetIndex = 0
                      container.scrollTo({ left: 0, behavior: "smooth" })
                    } else {
                      container.scrollBy({ left: containerWidth, behavior: "smooth" })
                    }

                    // Update pagination dots
                    updateActiveDot(targetIndex)
                  }
                }}
                className="bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Ďalšie referencie"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Testimonials container - scrollable on mobile, grid on desktop */}
            <div
              id="testimonials-container"
              className="flex lg:grid lg:grid-cols-2 gap-6 lg:gap-12 overflow-x-auto pb-4 lg:overflow-visible snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={(e) => {
                // Only handle scroll on mobile/tablet
                if (window.innerWidth >= 1024) return

                const container = e.currentTarget
                const containerWidth = container.offsetWidth
                const scrollLeft = container.scrollLeft
                const currentIndex = Math.round(scrollLeft / containerWidth)

                // Update pagination dots
                updateActiveDot(currentIndex)
              }}
            >
              <style jsx global>{`
                #testimonials-container::-webkit-scrollbar {
                  display: none;
                }
                @media (max-width: 1023px) {
                  #testimonials-container > div {
                    min-width: 85vw;
                    scroll-snap-align: center;
                  }
                }
              `}</style>
              <AnimatedSection delay={0.2} className="bg-white rounded-lg shadow-lg p-8 relative">
                <div className="absolute top-6 right-6 text-blue-600 opacity-20">
                  <Quote size={48} />
                </div>
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="/professional-woman-portrait.png"
                      alt="Sarah Johnson"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sarah Johnson</h4>
                    <p className="text-gray-600">HR riaditeľka, Tech Innovations</p>
                    <div className="flex text-yellow-400 mt-1">
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "TalentForce konzistentne dodáva vysokokvalitných kandidátov, ktorí majú nielen potrebné zručnosti,
                  ale aj dokonale zapadajú do našej firemnej kultúry. Ich tím skutočne rozumie nášmu podnikaniu a stal
                  sa rozšírením nášho HR oddelenia. Od začiatku spolupráce s nimi sme znížili čas potrebný na prijatie o
                  35%."
                </p>
                <p className="text-gray-600">
                  <strong>Výsledky:</strong> 35% zníženie času potrebného na prijatie, 90% miera udržania umiestnených
                  kandidátov po jednom roku
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="bg-white rounded-lg shadow-lg p-8 relative">
                <div className="absolute top-6 right-6 text-blue-600 opacity-20">
                  <Quote size={48} />
                </div>
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="/professional-man-portrait.png"
                      alt="Michael Chen"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Michael Chen</h4>
                    <p className="text-gray-600">CEO, Growth Ventures</p>
                    <div className="flex text-yellow-400 mt-1">
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Spolupráca s TalentForce transformovala náš náborový proces. Ich RPO riešenie znížilo náš čas
                  potrebný na prijatie o 40% a zároveň zlepšilo kvalitu kandidátov, ktorých prijímame. Ako rýchlo
                  rastúci startup je mať spoľahlivého náborového partnera neoceniteľné pre náš úspech."
                </p>
                <p className="text-gray-600">
                  <strong>Výsledky:</strong> 40% zníženie času potrebného na prijatie, 50% zníženie náborových nákladov
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4} className="bg-white rounded-lg shadow-lg p-8 relative">
                <div className="absolute top-6 right-6 text-blue-600 opacity-20">
                  <Quote size={48} />
                </div>
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="/professional-woman-portrait.png"
                      alt="Emily Rodriguez"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Emily Rodriguez</h4>
                    <p className="text-gray-600">Manažérka prevádzky, Global Logistics</p>
                    <div className="flex text-yellow-400 mt-1">
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Riešenia dočasného zamestnávania od TalentForce boli neoceniteľné počas našich sezónnych špičiek.
                  Poskytujú spoľahlivých profesionálov, ktorí môžu začať pracovať s minimálnym zaškolením. Čo ich
                  odlišuje, je ich schopnosť porozumieť našim špecifickým potrebám a firemnej kultúre."
                </p>
                <p className="text-gray-600">
                  <strong>Výsledky:</strong> 100% miera plnenia sezónnych personálnych potrieb, 30% dočasných
                  zamestnancov konvertovaných na trvalé pozície
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.5} className="bg-white rounded-lg shadow-lg p-8 relative">
                <div className="absolute top-6 right-6 text-blue-600 opacity-20">
                  <Quote size={48} />
                </div>
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="/professional-man-portrait.png"
                      alt="Robert Thompson"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Robert Thompson</h4>
                    <p className="text-gray-600">CTO, Innovate Solutions</p>
                    <div className="flex text-yellow-400 mt-1">
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Nájsť kvalifikované technické talenty bolo pre nás vždy výzvou, až kým sme nezačali spolupracovať s
                  TalentForce. Ich špecializovaní technickí náborári rozumejú nášmu odvetviu a technickým požiadavkám,
                  čo dramaticky zlepšilo našu úspešnosť pri prijímaní. Pomohli nám vybudovať špičkový inžiniersky tím."
                </p>
                <p className="text-gray-600">
                  <strong>Výsledky:</strong> 80% zníženie voľných technických pozícií, 25% zlepšenie kvality technických
                  prijatí
                </p>
              </AnimatedSection>
            </div>

            {/* Pagination dots for mobile */}
            <div className="flex justify-center mt-6 lg:hidden">
              <div className="flex space-x-2" id="pagination-dots">
                <button
                  className="w-3 h-3 rounded-full bg-blue-600"
                  aria-label="Strana 1"
                  data-index="0"
                  onClick={() => {
                    const container = document.getElementById("testimonials-container")
                    if (container) {
                      const containerWidth = container.offsetWidth
                      container.scrollTo({ left: 0, behavior: "smooth" })
                      updateActiveDot(0)
                    }
                  }}
                ></button>
                <button
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400"
                  aria-label="Strana 2"
                  data-index="1"
                  onClick={() => {
                    const container = document.getElementById("testimonials-container")
                    if (container) {
                      const containerWidth = container.offsetWidth
                      container.scrollTo({ left: containerWidth, behavior: "smooth" })
                      updateActiveDot(1)
                    }
                  }}
                ></button>
                <button
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400"
                  aria-label="Strana 3"
                  data-index="2"
                  onClick={() => {
                    const container = document.getElementById("testimonials-container")
                    if (container) {
                      const containerWidth = container.offsetWidth
                      container.scrollTo({ left: containerWidth * 2, behavior: "smooth" })
                      updateActiveDot(2)
                    }
                  }}
                ></button>
                <button
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400"
                  aria-label="Strana 4"
                  data-index="3"
                  onClick={() => {
                    const container = document.getElementById("testimonials-container")
                    if (container) {
                      const containerWidth = container.offsetWidth
                      container.scrollTo({ left: containerWidth * 3, behavior: "smooth" })
                      updateActiveDot(3)
                    }
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Príbehy úspechu klientov</h2>
            <p className="text-lg text-gray-600">
              Preskúmajte, ako naše náborové riešenia pomohli organizáciám prekonať ich náborové výzvy a dosiahnuť ich
              obchodné ciele.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/tech-startup-office.png"
                  alt="Prípadová štúdia technologického startupu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Škálovanie technologického startupu</h3>
                <p className="text-gray-600 mb-4">
                  Ako sme pomohli rýchlo rastúcemu technologickému startupu prijať 50 inžinierov za 6 mesiacov bez
                  kompromisov v kvalite.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">Odvetvie:</span>
                  <span className="font-medium">Technológie</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="mr-2">Služba:</span>
                  <span className="font-medium">RPO & Executive Search</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/diverse-healthcare-team.png"
                  alt="Prípadová štúdia zdravotníckej organizácie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Riešenie personálneho obsadenia v zdravotníctve</h3>
                <p className="text-gray-600 mb-4">
                  Ako naše riešenia dočasného zamestnávania pomohli zdravotníckej organizácii udržať kvalitu
                  starostlivosti počas významného rozšírenia.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">Odvetvie:</span>
                  <span className="font-medium">Zdravotníctvo</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="mr-2">Služba:</span>
                  <span className="font-medium">Dočasné zamestnávanie</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/financial-services-office.png"
                  alt="Prípadová štúdia finančných služieb"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Transformácia finančných služieb</h3>
                <p className="text-gray-600 mb-4">
                  Ako sme pomohli firme poskytujúcej finančné služby prebudovať ich vedúci tím počas iniciatívy
                  digitálnej transformácie.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">Odvetvie:</span>
                  <span className="font-medium">Finančné služby</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="mr-2">Služba:</span>
                  <span className="font-medium">Executive Search</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dôverujú nám popredné spoločnosti</h2>
            <p className="text-lg text-gray-600">
              Sme hrdí na to, že spolupracujeme s organizáciami všetkých veľkostí naprieč rôznymi odvetviami.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <AnimatedSection delay={0.1} className="flex justify-center">
              <Image
                src="/abstract-tech-logo.png"
                alt="Logo klienta"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="flex justify-center">
              <Image
                src="/healthcare-company-logo.png"
                alt="Logo klienta"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="flex justify-center">
              <Image
                src="/finance-company-logo.png"
                alt="Logo klienta"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.25} className="flex justify-center">
              <Image
                src="/abstract-retail-logo.png"
                alt="Logo klienta"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex justify-center">
              <Image
                src="/manufacturing-company-logo.png"
                alt="Logo klienta"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.35} className="flex justify-center">
              <Image
                src="/education-company-logo.png"
                alt="Logo klienta"
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  )
}

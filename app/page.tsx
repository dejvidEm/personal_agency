"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CTABanner from "@/components/cta-banner"
import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"
import { CheckCircle, Users, Award, TrendingUp, Briefcase, ArrowBigLeft, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-[#0066B1] font-medium tracking-wider text-sm uppercase">
                Začnite svoju kariéru tu!
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hľadáte{" "}
                <span className="relative inline-block">
                  zmenu
                  <svg
                    className="absolute sm:-bottom-2 -bottom-0 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 7C50 5 100 9 198 7" stroke="#0076B1" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                kariéry? Prepojíme firmy s ochotnými rukami.
              </h1>

              <p className="text-lg text-gray-600">
                Nie sme personálna agentúra – ale dodáme vám pracovníkov rýchlo, flexibilne a férovo.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 space-x-6">
                <div className="flex -space-x-4">
                  <Image
                    src="/professional-woman-portrait.png"
                    alt="Člen"
                    width={0}
                    height={0}
                    className="rounded-full border-3 w-16 h-12 border-white shadow-md"
                  />
                  <Image
                    src="/professional-man-portrait.png"
                    alt="Člen"
                    width={0}
                    height={0}
                    className="rounded-full border-3 w-16 h-12 border-white shadow-md"
                  />
                  <Image
                    src="/professional-ceo-portrait.png"
                    alt="Člen"
                    width={0}
                    height={0}
                    className="rounded-full border-3 w-16 h-12 border-white shadow-md"
                  />
                  <Image
                    src="/professional-cto-portrait.png"
                    alt="Člen"
                    width={0}
                    height={0}
                    className="rounded-full border-3 w-16 h-12 border-white shadow-md"
                  />
                  <Image
                    src="/professional-coo-portrait.png"
                    alt="Člen"
                    width={0}
                    height={0}
                    className="rounded-full border-3 w-16 h-12 border-white shadow-md"
                  />
                </div>
                <span className="text-gray-700 font-medium text-lg">2 tisíc + aktívnych členov</span>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md flex items-center space-x-2 group transition-all duration-300"
                >
                  <Link href="/services" className="flex items-center space-x-2">
                    <span>Kontaktujte nás</span>
                    <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[550px] -mb-48"
            >
              {/* Background blobs */}
              <div className="absolute top-[15%] right-[10%] w-[65%] h-[65%] rounded-full bg-[#00305B] opacity-80 z-0"></div>
              <div className="absolute bottom-[15%] left-[20%] w-[55%] h-[55%] rounded-full bg-[#D10A11] opacity-80 z-0"></div>
              <div className="absolute top-[55%] left-[84%] w-[40%] h-[40%] rounded-full bg-[#009ADA] opacity-70 z-0"></div>

              {/* Dotted pattern */}
              <div className="absolute top-[10%] right-[10%] grid grid-cols-5 gap-2 z-10">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                ))}
              </div>

              {/* Dotted pattern - bottom left */}
              <div className="absolute bottom-[10%] left-[10%] grid grid-cols-5 gap-2 z-10">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                ))}
              </div>

              {/* Decorative lines - bottom left */}
              <svg
                className="absolute bottom-[15%] left-[15%] w-24 h-24 text-white opacity-30 z-10"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 30C30 30 70 30 90 30" stroke="currentColor" strokeWidth="2" />
                <path d="M10 50C30 50 70 50 90 50" stroke="currentColor" strokeWidth="2" />
                <path d="M10 70C30 70 70 70 90 70" stroke="currentColor" strokeWidth="2" />
              </svg>

              {/* Decorative lines */}
              <svg
                className="absolute top-[15%] right-[15%] w-24 h-24 text-white opacity-30 z-10"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 30C30 30 70 30 90 30" stroke="currentColor" strokeWidth="2" />
                <path d="M10 50C30 50 70 50 90 50" stroke="currentColor" strokeWidth="2" />
                <path d="M10 70C30 70 70 70 90 70" stroke="currentColor" strokeWidth="2" />
              </svg>

              {/* Main image - positioned to appear coming out of the blobs */}
              <div className="absolute bottom-0 right-[5%] z-20 h-[580px] w-[450px]">
                <Image
                  src="/businessman-transparent.png"
                  alt="Profesionál"
                  fill
                  className="object-contain object-bottom"
                  style={{ transform: "translateX(-20px) translateY(-30px)" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Naše špecializované služby</h2>
            <p className="text-lg text-gray-600">
              Ponúkame komplexné personálne riešenia prispôsobené vašim špecifickým potrebám, zabezpečujúce dokonalý
              súlad medzi zamestnávateľmi a kandidátmi.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection
              delay={0.2}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              {/* Akcent prúžok hore */}
              <div className="absolute top-0 left-0 w-full h-2 flex">
                <div className="w-1/3 h-full bg-[#87CEFA]"></div>
                <div className="w-1/3 h-full bg-[#0C2C57]"></div>
                <div className="w-1/3 h-full bg-[#C42A2B]"></div>
              </div>

              <div className="text-gray-500 mb-4">
                <Briefcase size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Executive Search</h3>
              <p className="text-gray-600 mb-4">
                Špecializovaný nábor pre seniorské a exekutívne pozície, hľadanie lídrov, ktorí posunú vašu organizáciu vpred.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:underline">
                Dozvedieť sa viac →
              </Link>
            </AnimatedSection>

            <AnimatedSection
              delay={0.3}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 flex">
                <div className="w-1/3 h-full bg-[#87CEFA]"></div>
                <div className="w-1/3 h-full bg-[#0C2C57]"></div>
                <div className="w-1/3 h-full bg-[#C42A2B]"></div>
              </div>

              <div className="text-gray-500 mb-4">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Dočasné zamestnávanie</h3>
              <p className="text-gray-600 mb-4">
                Flexibilné riešenia pracovnej sily na uspokojenie vašich dočasných, zmluvných alebo sezónnych potrieb s
                kvalifikovanými profesionálmi.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:underline">
                Dozvedieť sa viac →
              </Link>
            </AnimatedSection>

            <AnimatedSection
              delay={0.4}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 flex">
                <div className="w-1/3 h-full bg-[#87CEFA]"></div>
                <div className="w-1/3 h-full bg-[#0C2C57]"></div>
                <div className="w-1/3 h-full bg-[#C42A2B]"></div>
              </div>

              <div className="text-gray-500 mb-4">
                <TrendingUp size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Outsourcing náborového procesu</h3>
              <p className="text-gray-600 mb-4">
                Komplexné náborové riešenia, ktoré optimalizujú váš proces prijímania, znižujú náklady a zlepšujú kvalitu
                prijatých zamestnancov.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:underline">
                Dozvedieť sa viac →
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5} className="flex justify-center text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md flex items-center space-x-2 group transition-all duration-300"
            >
              <Link href="/services" className="flex items-center space-x-2">
                <span>Kontaktuje Nás</span>
                <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src="/why_us.jpg" alt="Náš tím pri práci" fill className="object-cover" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prečo si vybrať TalentForce?</h2>
              <p className="text-lg text-gray-600 mb-8">
                S rokmi skúseností a hlbokým porozumením rôznych odvetví poskytujeme personalizované personálne
                riešenia, ktoré prinášajú výsledky.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Odbornosť v odvetví</h3>
                    <p className="text-gray-600">
                      Špecializovaní náborári s hlbokými znalosťami v rôznych sektoroch, zabezpečujúci presné spárovanie
                      kandidátov.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rozsiahla sieť</h3>
                    <p className="text-gray-600">
                      Prístup k rozsiahlej databáze preverených kandidátov, vrátane pasívnych uchádzačov o prácu, ktorí
                      nie sú dostupní na pracovných portáloch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalizovaný prístup</h3>
                    <p className="text-gray-600">
                      Prispôsobené náborové stratégie navrhnuté tak, aby vyhovovali vašim špecifickým požiadavkám a
                      firemnej kultúre.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Čo hovoria naši klienti</h2>
            <p className="text-lg text-gray-600">
              Neberte to len z našich slov. Tu je, čo niektorí z našich spokojných klientov hovoria o našich službách.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src="/professional-woman-portrait.png"
                    alt="Sarah Johnson"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">HR riaditeľka, Tech Innovations</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "TalentForce konzistentne dodáva vysokokvalitných kandidátov, ktorí majú nielen potrebné zručnosti, ale
                aj dokonale zapadajú do našej firemnej kultúry. Ich tím skutočne rozumie nášmu podnikaniu."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src="/professional-man-portrait.png"
                    alt="Michael Chen"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">CEO, Growth Ventures</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Spolupráca s TalentForce transformovala náš náborový proces. Ich RPO riešenie znížilo náš čas potrebný
                na prijatie o 40% a zároveň zlepšilo kvalitu kandidátov, ktorých prijímame."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src="/professional-woman-portrait.png"
                    alt="Emily Rodriguez"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Emily Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Manažérka prevádzky, Global Logistics</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Riešenia dočasného zamestnávania od TalentForce boli neoceniteľné počas našich sezónnych špičiek.
                Poskytujú spoľahlivých profesionálov, ktorí môžu začať pracovať s minimálnym zaškolením."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
                <Award className="h-5 w-5" />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <Link href="/references">Zobraziť všetky referencie</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0C2C57] text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Náš vplyv v číslach</h2>
            <p className="text-lg opacity-90">Pomohli sme tisícom spoločností a profesionálov dosiahnuť ich ciele.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.2} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <p className="text-xl opacity-90">Obslúžených spoločností</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">10k+</div>
              <p className="text-xl opacity-90">Úspešných umiestnení</p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">95%</div>
              <p className="text-xl opacity-90">Spokojnosť klientov</p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">15+</div>
              <p className="text-xl opacity-90">Rokov skúseností</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  )
}

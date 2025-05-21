"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CTABanner from "@/components/cta-banner"
import AnimatedSection from "@/components/animated-section"
import { Briefcase, Users, TrendingUp, FileSearch, GraduationCap, Building, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/modern-office-meeting.png" alt="Naše služby" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Naše služby</h1>
            <p className="text-xl text-gray-200">
              Komplexné personálne riešenia prispôsobené vašim špecifickým potrebám, zabezpečujúce dokonalý súlad medzi
              zamestnávateľmi a kandidátmi.
            </p>
          </AnimatedSection>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Komplexné personálne riešenia</h2>
            <p className="text-lg text-gray-600">
              Od executive search po dočasné zamestnávanie ponúkame plný rozsah náborových služieb na uspokojenie vašich
              personálnych potrieb.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {/* Executive Search */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src="/strategy.jpg" alt="Executive Search" fill className="object-cover" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="text-blue-600 mb-4">
                  <Briefcase size={48} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Executive Search</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Naša služba executive search je navrhnutá na identifikáciu a prilákanie špičkových vedúcich talentov
                  pre vašu organizáciu. Chápeme, že nájdenie správneho vedúceho pracovníka je kľúčové pre úspech vašej
                  spoločnosti.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Komplexná analýza trhu a identifikácia kandidátov</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Hĺbkové hodnotenie vodcovských schopností a kultúrnej zhody</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Diskrétny prístup k pasívnym kandidátom na vedúcich pozíciách</p>
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">Informujte sa o Executive Search</Link>
                </Button>
              </AnimatedSection>
            </div>

            {/* Temporary Staffing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="order-2 lg:order-1">
                <div className="text-blue-600 mb-4">
                  <Users size={48} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Dočasné zamestnávanie</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Naše riešenia dočasného zamestnávania vám poskytujú kvalifikovaných profesionálov na uspokojenie
                  vašich krátkodobých, sezónnych alebo projektových potrieb, čo vám umožňuje udržať produktivitu počas
                  špičiek alebo neprítomnosti zamestnancov.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Rýchle nasadenie preverených, kvalifikovaných profesionálov</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Flexibilné personálne riešenia pre rôzne časové rámce a pracovné zaťaženie
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Možnosti dočasného zamestnania s prechodom na trvalý pracovný pomer na vyhodnotenie kandidátov
                      pred trvalým prijatím
                    </p>
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">Požiadať o dočasných zamestnancov</Link>
                </Button>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="order-1 lg:order-2">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src="/second.jpg" alt="Dočasné zamestnávanie" fill className="object-cover" />
                </div>
              </AnimatedSection>
            </div>

            {/* Recruitment Process Outsourcing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/planning.jpg"
                    alt="Outsourcing náborového procesu"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="text-blue-600 mb-4">
                  <TrendingUp size={48} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Outsourcing náborového procesu</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Naše RPO riešenia vám umožňujú outsourcovať celú alebo časť vašej náborovej funkcie nášmu tímu
                  expertov, optimalizovať váš proces prijímania, znížiť náklady a zlepšiť kvalitu vašich prijatých
                  zamestnancov.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Komplexné riadenie náboru alebo podpora pre špecifické náborové iniciatívy
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Škálovateľné riešenia, ktoré sa prispôsobujú vašim meniacim sa náborovým potrebám
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Pokročilé náborové technológie a analytika na optimalizáciu vášho procesu prijímania
                    </p>
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">Dozvedieť sa o našich RPO riešeniach</Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Špecializované služby</h2>
            <p className="text-lg text-gray-600">
              Okrem našich základných ponúk poskytujeme špecializované služby na riešenie špecifických náborových
              výziev.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection
              delay={0.2}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <FileSearch size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Preverovanie kandidátov</h3>
              <p className="text-gray-600 mb-4">
                Komplexné kontroly pozadia a verifikačné služby, ktoré zabezpečujú, že robíte informované rozhodnutia
                pri prijímaní a zmierňujete potenciálne riziká.
              </p>
              <Link href="/contact" className="text-blue-600 font-medium hover:underline">
                Dozvedieť sa viac →
              </Link>
            </AnimatedSection>

            <AnimatedSection
              delay={0.3}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Rozvoj talentov</h3>
              <p className="text-gray-600 mb-4">
                Tréningové a rozvojové programy, ktoré pomáhajú vašim novým zamestnancom a existujúcim zamestnancom
                dosiahnuť ich plný potenciál a prispievať k úspechu vašej organizácie.
              </p>
              <Link href="/contact" className="text-blue-600 font-medium hover:underline">
                Dozvedieť sa viac →
              </Link>
            </AnimatedSection>

            <AnimatedSection
              delay={0.4}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <Building size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">HR poradenstvo</h3>
              <p className="text-gray-600 mb-4">
                Strategické HR poradenské služby, ktoré vám pomôžu optimalizovať plánovanie pracovnej sily, zlepšiť
                udržanie zamestnancov a vytvoriť pozitívnu firemnú kultúru.
              </p>
              <Link href="/contact" className="text-blue-600 font-medium hover:underline">
                Dozvedieť sa viac →
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Odvetvia, ktorým slúžime</h2>
            <p className="text-lg text-gray-600">
              Naši špecializovaní náborári majú hlboké odborné znalosti v širokom spektre odvetví, čo nám umožňuje
              porozumieť jedinečným požiadavkám na talenty v každom sektore.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0.2} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold mb-2">Technológie</h3>
              <p className="text-sm text-gray-600">Softvér, IT, Kybernetická bezpečnosť</p>
            </AnimatedSection>

            <AnimatedSection delay={0.25} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold mb-2">Zdravotníctvo</h3>
              <p className="text-sm text-gray-600">Medicína, Farmácia, Biotechnológie</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold mb-2">Financie</h3>
              <p className="text-sm text-gray-600">Bankovníctvo, Poisťovníctvo, Investície</p>
            </AnimatedSection>

            <AnimatedSection delay={0.35} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold mb-2">Výroba</h3>
              <p className="text-sm text-gray-600">Produkcia, Inžinierstvo, Dodávateľský reťazec</p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold mb-2">Maloobchod</h3>
              <p className="text-sm text-gray-600">E-commerce, Merchandising, Prevádzka</p>
            </AnimatedSection>

            <AnimatedSection delay={0.45} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold mb-2">Vzdelávanie</h3>
              <p className="text-sm text-gray-600">Základné a stredné školy, Vysoké školstvo, EdTech</p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold mb-2">Pohostinstvo</h3>
              <p className="text-sm text-gray-600">Hotely, Reštaurácie, Turizmus</p>
            </AnimatedSection>

            <AnimatedSection delay={0.55} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold mb-2">Stavebníctvo</h3>
              <p className="text-sm text-gray-600">Architektúra, Inžinierstvo, Kvalifikované remeslá</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      ;<CTABanner />
    </div>
  )
}

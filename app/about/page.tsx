"use client"

import Image from "next/image"
import CTABanner from "@/components/cta-banner"
import AnimatedSection from "@/components/animated-section"
import { Users, Target, Clock, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/modern-office-team.png" alt="O TalentForce" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">O AgencyForce</h1>
            <p className="text-xl text-gray-200">
              Našou misiou je transformovať spôsob, akým spoločnosti hľadajú talenty a ako profesionáli objavujú
              príležitosti.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Náš príbeh</h2>
              <p className="text-lg text-gray-600 mb-6">
                Založená v roku 2008, TalentForce začala s jednoduchou víziou: vytvárať zmysluplné spojenia medzi
                spoločnosťami a profesionálmi, ktoré presahujú rámec jednoduchého spárovania zručností s popismi práce.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Naši zakladatelia, ktorí z prvej ruky zažili výzvy tradičných náborových procesov, sa rozhodli vybudovať
                personálnu agentúru, ktorá rovnako prioritizuje pochopenie firemnej kultúry a ašpirácií kandidátov.
              </p>
              <p className="text-lg text-gray-600">
                Dnes sme vyrástli na poprednú personálnu agentúru s kanceláriami po celej krajine, slúžiac klientom od
                startupov až po spoločnosti z Fortune 500. Napriek nášmu rastu zostáva naša základná misia nezmenená:
                vytváranie dokonalých spojení, ktoré prinášajú úspech ako zamestnávateľom, tak aj kandidátom.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?key=fqyga" alt="Tím TalentForce" fill className="object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Naše základné hodnoty</h2>
            <p className="text-lg text-gray-600">
              Tieto princípy usmerňujú všetko, čo robíme, a definujú, ako pracujeme s našimi klientmi a kandidátmi.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Prístup zameraný na ľudí</h3>
              <p className="text-gray-600">
                Veríme, že úspešné umiestnenia začínajú pochopením ľudí—ich ašpirácií, hodnôt a potenciálu. Venujeme čas
                tomu, aby sme hlboko poznali našich klientov aj kandidátov.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <Target size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excelentnosť vo všetkom</h3>
              <p className="text-gray-600">
                Sme odhodlaní poskytovať výnimočné služby a výsledky. Od nášho dôkladného procesu preverovania
                kandidátov až po naše personalizované konzultácie s klientmi sa snažíme o dokonalosť v každom kroku.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Dlhodobé vzťahy</h3>
              <p className="text-gray-600">
                Nerobíme len umiestnenia; budujeme trvalé partnerstvá. Náš úspech sa meria dlhodobým úspechom našich
                umiestnení a pretrvávajúcimi vzťahmi, ktoré udržiavame s klientmi a kandidátmi.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <Globe size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Diverzita a inklúzia</h3>
              <p className="text-gray-600">
                Sme odhodlaní podporovať rôznorodé a inkluzívne pracoviská. Veríme, že rôznorodé tímy podporujú inovácie
                a lepšie obchodné výsledky, a aktívne pracujeme na eliminácii predsudkov v procese prijímania.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Spoznajte náš vedúci tím</h2>
            <p className="text-lg text-gray-600">
              Náš skúsený vedúci tím prináša desaťročia kombinovaných odborných znalostí v oblasti náboru, HR a rôznych
              odvetví.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.2} className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <Image src="/professional-ceo-portrait.png" alt="Jennifer Martinez" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Jennifer Martinez</h3>
              <p className="text-gray-600">CEO & Zakladateľka</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <Image src="/professional-coo-portrait.png" alt="David Wilson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">David Wilson</h3>
              <p className="text-gray-600">COO</p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?key=g9elu" alt="Sophia Lee" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Sophia Lee</h3>
              <p className="text-gray-600">Riaditeľka Executive Search</p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <Image src="/professional-cto-portrait.png" alt="Marcus Johnson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Marcus Johnson</h3>
              <p className="text-gray-600">Vedúci technologického náboru</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  )
}

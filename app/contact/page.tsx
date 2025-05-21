"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimatedSection from "@/components/animated-section"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setIsSubmitted(true)
  }

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/contact.jpg" alt="Kontaktujte nás" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Kontaktujte nás</h1>
            <p className="text-xl text-gray-200">
              Ste pripravení nájsť svoju dokonalú zhodu? Spojte sa s naším tímom a prediskutujte svoje personálne
              potreby.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Spojte sa s nami</h2>
              <p className="text-lg text-gray-600 mb-8">
                Či už hľadáte špičkové talenty alebo svoju ďalšiu kariérnu príležitosť, sme tu, aby sme vám pomohli.
                Vyplňte formulár nižšie a jeden z našich špecialistov sa vám čoskoro ozve.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Zavolajte nám</h3>
                    <p className="text-gray-600">+421 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Napíšte nám</h3>
                    <p className="text-gray-600">info@agencyforce.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Navštívte nás</h3>
                    <p className="text-gray-600">
                      Karloveská 49
                      <br />
                      841 04, Bratislava
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            Meno*
                          </label>
                          <Input id="firstName" placeholder="Zadajte svoje meno" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Priezvisko*
                          </label>
                          <Input id="lastName" placeholder="Zadajte svoje priezvisko" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-mailová adresa*
                        </label>
                        <Input id="email" type="email" placeholder="Zadajte svoju e-mailovú adresu" required />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Telefónne číslo
                        </label>
                        <Input id="phone" placeholder="Zadajte svoje telefónne číslo" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Názov spoločnosti
                        </label>
                        <Input id="company" placeholder="Zadajte názov vašej spoločnosti" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Služba, o ktorú máte záujem*
                        </label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Vyberte službu" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="executive-search">Executive Search</SelectItem>
                            <SelectItem value="temporary-staffing">Dočasné zamestnávanie</SelectItem>
                            <SelectItem value="rpo">Outsourcing náborového procesu</SelectItem>
                            <SelectItem value="background-screening">Preverovanie kandidátov</SelectItem>
                            <SelectItem value="talent-development">Rozvoj talentov</SelectItem>
                            <SelectItem value="hr-consulting">HR poradenstvo</SelectItem>
                            <SelectItem value="other">Iné</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Správa*
                        </label>
                        <Textarea id="message" placeholder="Povedzte nám o vašich potrebách" rows={5} required />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Send className="mr-2 h-4 w-4" /> Odoslať správu
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Ďakujeme!</h3>
                    <p className="text-gray-600 mb-6">
                      Vaša správa bola úspešne odoslaná. Jeden z členov nášho tímu vás čoskoro bude kontaktovať.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Poslať ďalšiu správu
                    </Button>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Často kladené otázky</h2>
            <p className="text-lg text-gray-600">
              Máte otázky? Máme odpovede. Ak nenájdete to, čo hľadáte, neváhajte nás kontaktovať priamo.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold text-left">
                    Ako rýchlo viete poskytnúť kandidátov?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Časové rámce sa líšia v závislosti od zložitosti pozície a trhových podmienok, ale zvyčajne
                    predstavíme prvých kandidátov do 1-2 týždňov pre väčšinu pozícií. Pre urgentné potreby môžeme často
                    proces urýchliť.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-bold text-left">
                    V akých odvetviach sa špecializujete?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Máme špecializovaných náborárov v rôznych odvetviach vrátane technológií, zdravotníctva, financií,
                    výroby, maloobchodu, vzdelávania, pohostinstva a stavebníctva, okrem iných.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-bold text-left">
                    Ako zabezpečujete, že kandidáti sú vhodní?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Používame komplexný proces preverovania, ktorý hodnotí nielen zručnosti a skúsenosti, ale aj
                    kultúrnu zhodu, kariérne ašpirácie a pracovný štýl. Venujeme čas pochopeniu potrieb našich klientov
                    a cieľov našich kandidátov.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl font-bold text-left">
                    Aká je vaša cenová štruktúra?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Naše ceny sa líšia v závislosti od služby a konkrétnych požiadaviek. Ponúkame flexibilné modely
                    vrátane podmienečného, retainovaného vyhľadávania a projektového oceňovania. Kontaktujte nás pre
                    prispôsobenú ponuku na základe vašich potrieb.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

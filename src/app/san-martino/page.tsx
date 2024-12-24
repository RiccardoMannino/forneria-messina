'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import Pin from '../../assets/map-pin.svg'
import Whatsapp from '../../assets/brand-whatsapp.svg'
import Clock from '../../assets/clock.svg'
import Facebook from '../../assets/brand-facebook.svg'
import Instagram from '../../assets/brand-instagram.svg'
import Trip from '../../assets/brand-tripadvisor.svg'
import Logo from '../../assets/logo_sanmartino.png'
import { usePathname } from 'next/navigation'
import Footer from '@/components/ui/Footer'

export default function MonrealePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const path = usePathname()

  return (
    <>
      <Section className="mt-36 flex h-[600px] w-full items-center justify-center bg-[url(../assets/background_sanmartino.png)] bg-cover">
        <Image
          src={Logo}
          alt="Palermo"
          width={400}
          height={400}
          className="h-auto w-auto"
        />
      </Section>
      <Section className="m-20 grid grid-cols-2 gap-6 font-semibold pad:m-10 pad:grid pad:grid-cols-1">
        <div className="flex flex-col gap-6 text-lg text-white pad:text-center">
          <h1 className="">Partecipa ai nostri eventi!</h1>
          <h2 className="">Sei già stato alla Forneria Messina?</h2>
          <h3 className="">Sei già iscritto alla nostra carta eventi?</h3>
          <p className="">
            Un’irresistibile esclusiva mail dove riceverai in anteprima le date
            dei nostri eventi speciali <br />
            legati al mondo del vino delle birre artigianali e della pizza
            contemporanea.
          </p>
        </div>

        <div className="text-white pad:mt-20">
          <form className="flex h-full flex-col gap-6">
            <p className="text-center">
              LASCIA LA TUA EMAIL QUI SOTTO E SARAI DEI NOSTRI!
            </p>
            <label>Nome</label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Nome"
              className="rounded-md p-2 text-[#282828] placeholder:text-[#282828] focus:outline-none focus:ring-2 focus:ring-[#FFab00]"
            />
            <label>Cognome</label>
            <input
              {...register('lastname', { required: true })}
              type="text"
              placeholder="Cognome"
              className="rounded-md p-2 text-[#282828] placeholder:text-[#282828] focus:outline-none focus:ring-2 focus:ring-[#FFab00]"
            />
            <label>Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Email"
              className="rounded-md p-2 text-[#282828] placeholder:text-[#282828] focus:outline-none focus:ring-2 focus:ring-[#FFab00]"
            />
            <label>
              <input
                {...register('marketing', { required: true })}
                type="checkbox"
                className="mr-2 accent-[#FFAB00]"
                value="1"
              />
              Fornisco il consenso per la ricezione di comunicazioni commerciali
            </label>
            <label>
              <input
                {...register('privacy', { required: true })}
                type="checkbox"
                className="mr-2 accent-[#FFAB00]"
                value="1"
              />
              Dichiaro di aver letto e compreso la
              <Link className="ml-2 text-[#FFAB00]" href={'/privacy'}>
                Privacy Policy
              </Link>
            </label>
            <input id="language" name="language" type="hidden" value="it" />
            <input
              {...register('ok_url', { required: true })}
              type="hidden"
              value="https://www.forneriamessina.it/grazie/"
            />
            <input
              {...register('ko_url', { required: true })}
              type="hidden"
              //value="https://www.forneriamessina.it/errore/"
            />
            <input
              {...register('hash', { required: true })}
              type="hidden"
              value="26c70dce9d6e40d8856308cc7dfc7186"
            />

            <input
              {...register('tag', { required: true })}
              type="hidden"
              value="NEWSLETTER"
            />

            <Button
              className="w-fit bg-[#FFab00] transition duration-700 hover:opacity-70 pad:w-full"
              type="submit"
            >
              Iscrivimi alla Newsletter!
            </Button>
          </form>
        </div>
      </Section>

      <Section
        opacity={1}
        transition={'all ease 0.9s'}
        transform={'none'}
        translate={'translateX(-200px)'}
        className="m-10 justify-center text-xl font-semibold text-white pad:text-base"
      >
        <div className="flex flex-col items-center justify-center gap-6 text-center font-semibold">
          <h1>Le nostre pizze</h1>
          <p>
            Una pizza con gli amici è sempre molto gradita… poi se la pizza è
            leggera e digeribile ci guadagna anche la salute…
          </p>
          <p>
            La nostra Pizza è realizzata con farine semintegrali di TIPO 1,
            macinate con mulini a pietra, e semola rimacinata di grani duri
            siciliani, farine nate per valorizzare al massimo ciò che la natura
            ci dona nel chicco di grano
          </p>
          <p>
            Vitamine, fibre, Sali minerali, germe – rispondendo alle crescenti
            esigenze di benessere e gusto del consumatore moderno, mantenendo
            inalterati i sapori di un tempo.
          </p>
        </div>
        <div className="mt-32 grid w-auto grid-cols-2 gap-10 pad:grid-cols-1">
          <div className="flex flex-col gap-6 text-center">
            <Image
              src={'/pizza.webp'}
              alt="le nostre pizze"
              height={400}
              width={400}
              className="h-auto w-auto self-center"
            />
            <h1>CEREALI & SEMI</h1>
            <p>
              Pizza scura, altamente digeribile, fonti di fibre, Omega3, sali
              minerali, vitamine e un incredibile mix di cereali e semi: farina
              di grano tenero tipo 1, farina di segale, farina di orzo, farina
              di avena, semi di girasole, sesamo e lino, con germe di grano
              tostato, importante fonte vegetale di acidi grassi Omega3.{' '}
            </p>
            <p>
              La grande varietà di cereali e semi di cui è composta, permette di
              ottenere una pizza dal profumo intenso, dal colore unico e dal
              gusto di tostato di una volta.
            </p>
            <div className="flex flex-col gap-4 border-y-4 border-white">
              <p className="mt-10">
                Nelle nostre pizze usiamo solo mozzarella fior di latte da
                pascolo italiano.
              </p>
              <p className="mb-10">
                Una volta dato il primo morso alla nostra pizza rimarrai stupito
                da come la mozzarella si scioglierà tra i tuoi denti come
                soffice burro
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 pad:text-center">
            <h1>TRA STORIA E LEGGENDA</h1>
            <h2>
              LA PIZZA STORICA DI &quot;SEMOLA RIMACINATA DI GRANO DURO&quot; La
              Pizza storica nasce nel 1877, era prodotta con la SEMOLA
              RIMACINATA DI GRANO DURO CON FIBRE.
            </h2>
            <p>
              Quando i contadini e pastori della &quot;Val Gamisia&quot; (antico
              nome di San Martino delle Scale) si riunivano per produrre il Pane
              di grano duro per tutta la settimana, utilizzavano una piccola
              porzione dell’impasto che schiacciavano e cuocevano nei forni
              dell’epoca.
            </p>
            <p>
              Oggi la SEMOLA RIMACINATA e’ un valido sostituto del grano tenero,
              ha infatti una migliore digeribilità, gusto e aroma. Rimane ancora
              oggi il prodotto antico per la vita moderna, per la tipicità, la
              salute e lo sport.
            </p>
            <Link
              className="self-start pad:w-full"
              href="https://forneriamessina.plateform.app/menu/menurp"
            >
              <Button className="w-fit bg-[#FFab00] transition duration-700 hover:opacity-70 pad:w-full">
                Visita il nostro menù
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section
        opacity={1}
        transition={'all ease 0.9s'}
        transform={'none'}
        translate={'translateX(200px)'}
        className="m-20 justify-center text-xl font-semibold text-white pad:m-10 pad:text-base"
      >
        <div className="flex flex-col items-center justify-center gap-6 text-center font-semibold">
          <h1>I PRIMI SARANNO... BUONI !!!</h1>
        </div>
        <div className="mt-32 grid w-auto grid-cols-2 gap-10 pad:grid-cols-1">
          <div className="flex flex-col gap-6 text-center">
            <Image
              src={'/primi.webp'}
              alt="primi piatti"
              height={400}
              width={400}
              className="self-center pad:h-auto pad:w-auto"
            />
            <h1>I CONSIGLI DELLO CHEF</h1>
            <p>
              Chiedi allo staff i piatti consigliati dal nostro chef, creati
              seguendo la ricerca dei profumi e sapori che la stagione ci offre.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 pad:text-center">
            <p className="mt-10">
              Una selezione di primi piatti nello stile Forneria Messina:
              ricette semplici, ma mai scontate, ed ingredienti eccellenti della
              tradizione regionale italiana.
            </p>
            <p className="mb-10">
              La nostra pasta fresca viene preparata con semola di grano duro e
              successivamente lavorata in trafile che la rendono ruvida in
              superficie per un maggiore assorbimento dei sughi.
            </p>
            <Link
              className="self-start pad:w-full"
              href="https://forneriamessina.plateform.app/menu/menurp"
            >
              <Button className="w-fit bg-[#FFab00] transition duration-700 hover:opacity-70 pad:w-full">
                Visita il nostro menù
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section
        opacity={1}
        transition={'all ease 0.9s'}
        transform={'none'}
        translate={'translateX(-200px)'}
        className="m-20 justify-center text-xl font-semibold text-white pad:m-10 pad:text-base"
      >
        <div className="flex flex-col items-center justify-center gap-6 text-center font-semibold">
          <h1>Sulla Griglia</h1>
          <p>
            Sulla Griglia Lo staff della Forneria Messina lavora ogni settimana
            per selezionare le carni della più alta qualità dai migliori
            allevamenti.
          </p>
          <p>
            La nostra missione è quella di soddisfare i palati più esigenti con
            un’attenta e accurata selezione delle migliori carni. Il risultato
            al palato è un concentrato di sapore, succulenza e tenerezza.
          </p>
        </div>
        <div className="mt-32 flex w-auto flex-col items-center justify-center gap-10">
          <h1 className="text-center">LA BISTECCA PERFETTA</h1>
          <div className="ml-10 grid grid-cols-2 gap-6 text-center pad:mx-5 pad:grid-cols-1">
            <Image
              src={'/angus.webp'}
              alt="angus"
              height={400}
              width={400}
              className="h-auto w-auto justify-self-center"
            />
            <div className="flex flex-col justify-center gap-6">
              <h1>Costata di Scottona d&apos;Angus</h1>
              <p className="mt-10">
                Una selezione di primi piatti nello stile Forneria Messina:
                ricette semplici, ma mai scontate, ed ingredienti eccellenti
                della tradizione regionale italiana.
              </p>
              <Link
                className="self-center pad:w-full"
                href="https://forneriamessina.plateform.app/menu/menurp"
              >
                <Button className="w-fit bg-[#FFab00] transition duration-700 hover:opacity-70 pad:w-full">
                  Visita il nostro menù
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="mx-10 my-20 flex w-auto flex-col pb-10 text-white">
        <div className="flex flex-col items-center justify-center gap-6 text-center font-semibold">
          <h1>KRAFT BEER LE ARTIGIANALI DI CASA MESSINA</h1>
          <p>
            Dalla passione di Forneria Messina verso le birre artigianali e
            dell’amicizia nata con Elia Adanti del birrificio RentOn e Iacopo
            Lenci del birrificio Bruton, sono nate quattro birre con l’idea di
            ritrovare in bicchiere ciò che avremmo voluto bere noi per primi.
          </p>
          <p>
            Abbiamo selezionato con cura le materie prime, per mettere a punto
            ricette del tutto originali, e formulare quattro proposte diverse
            per chi vuole bere Birre artigianali esclusive.
          </p>
          <div className="mt-16 flex items-center justify-center gap-10 pad:flex-col">
            <Image
              src={'/birre.jpeg'}
              alt="birre"
              height={400}
              width={400}
              className="self-center pad:h-auto pad:w-auto"
            />
            <Image
              src={'/birra1.jpeg'}
              alt="birre"
              height={400}
              width={400}
              className="self-center pad:h-auto pad:w-auto"
            />
          </div>
        </div>
      </Section>

      <Section className="mx-10 my-20 flex w-auto flex-col items-center justify-center gap-10 border-y-4 border-white py-20">
        <div className="flex w-full items-center justify-center gap-10 px-20 pad:flex-col pad:px-0">
          <Image
            src="/chisiamo.jpeg"
            alt="chi siamo"
            height={400}
            width={400}
            className="rounded-xl border-2 border-[#FFAb00] hover:cursor-pointer"
          />
          <div className="flex h-full w-[50%] flex-col gap-6 self-start font-semibold text-white pad:w-full pad:text-center">
            <div className="flex pad:justify-center">
              <div className="relative mr-2 mt-1 flex h-0 w-12 self-center border-b-2 border-[#FFAb00] pad:hidden"></div>
              <h1 className="flex items-end text-xl text-[#FFAB00]">
                [
                <span className="mx-2 text-base tracking-wider text-[#fff]">
                  INARRESTABILI!
                </span>
                ]
              </h1>
            </div>

            <h2 className="text-lg">LA NOSTRA STORIA!</h2>
            <p className="text-base">
              La tradizione familiare, incontra un forte legame con il
              territorio siciliano e i gusti tipici di questa fantastica terra
              per dare vita a Forneria Messina, luogo immerso in un paesaggio di
              campagna, che vi riporterà ai sapori e agli odori della tradizione
              popolare monrealese, qui mai dimenticata.
            </p>
            <Button className="flex w-fit gap-3 bg-[#FFab00] transition duration-700 hover:opacity-70 pad:self-center">
              Scopri la nostra storia!
            </Button>
          </div>
        </div>
      </Section>

      <Footer id="contatti" location="San Martino" />
    </>
  )
}

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className=" col-span-1 space-y-4 text-[14px]">
            <Image
              src="/logo-white.svg"
              alt="edulia logo"
              width={200}
              height={100}
            />
            <p>
              Edulia srl è soggetta ad attività di controllo e coordinamento
              dell&apos;Istituto della Enciclopedia Italiana fondata da Giovanni
              Treccani Spa.
            </p>
            <p>
              Ufficio del registro delle imprese: CCIAA di Roma | REA:
              RM-1635221 Capitale sociale: € 176.651,00 (deliberato) e €
              138.326,00 (sottoscritto e versato)
            </p>
            <p>
              edulia è un’organizzazione certificata{" "}
              <Link href="/" className="underline">
                ISO9001
              </Link>
              .
            </p>
            <p className="mb-12">
              Leggi la{" "}
              <Link href="/" className="underline">
                politica della qualità
              </Link>
              .
            </p>
            <div className="flex flex-row justify-center items-center gap-x-8 text-[14px]">
              <Image
                src="/cert.jpg"
                width={50}
                height={50}
                alt="certification logo"
              />
              <p>
                Treccani Futura, oggi edulia Srl, è stata selezionata da{" "}
                <Link href="/" className="underline">
                  HolonIQ
                </Link>{" "}
                tra le 200 startup più promettenti d’Europa in ambito EdTech.
              </p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <div className="col-span-1 flex flex-col items-start space-y-2 lg:ml-40">
              <h3 className="font-bold text-start">LINK UTILI</h3>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <Link href="/" className="hover:underline">
                    Chi siamo
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Come funziona
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Lavora con noi
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Metodi di pagamento
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Domande Frequenti
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Proponi un corso
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Termini e Condizioni
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Gestisci i cookie
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 flex flex-col items-start space-y-2 lg:ml-40">
              <h3 className="font-bold text-start">CATEGORIE</h3>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <Link href="/" className="hover:underline">
                    Arte, cultura e filosofia
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Business e management
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Coding e programmazione
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Crescita personale e professionale
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Marketing e social media
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Scienze e tecnologie emergenti
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Strumenti per la produttività
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center p-3 bg-[#f8485e] text-[12px] mt-20">
        <p>
          © 2024 Edulia | Piazza dell’Enciclopedia Italiana 4, 00186 Roma -
          Italy | P.IVA e CF: IT16110111008 | Cod. Univoco: USAL8PV
        </p>
      </div>
    </footer>
  );
};

export default Footer;

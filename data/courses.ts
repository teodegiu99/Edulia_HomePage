export const coursesList: string[] = [
    "Animenta",
    "Arte, cultura e filosofia",
    "Business e management",
    "Coding e programmazione",
    "Comunicazione e scrittura",
    "Crescita personale e professionale",
    "Komen Italia",
    "Marketing e social media",
    "Project Management",
    "Scienze e tecnologie moderne",
    "Sostenibilità e CSR",
    "Startup e innovazione",
    "Strumenti per la produttività",
    "Superskill",
    "TikTok",
    "Video, podcast e fotografia",
    "Web-design e grafica",
    "Vedi tutti",
  ];

  export interface Review {
    id: number;
    name: string;
    job: string;
    stars: number;
    desc: string;
  }

export interface Course {
  id: number;
  imgUrl: string;
  title: string;
  author: string;
  desc: string;
}

export interface Path {
    id: number,
    imgUrl: string;
  title: string;
  hours: number;
  lessons: number;
}

export const path: Path[] = [
    {
        id: 0,
        imgUrl: "/path/1.png",
        title: "IA Generativa per il lavoro",
        hours: 8,
        lessons: 44,
    },
    {
        id: 1,
        imgUrl: "/path/2.png",
        title: "Project Management",
        hours: 11,
        lessons: 99,
    },
    {
        id: 2,
        imgUrl: "/path/3.png",
        title: "Leadership",
        hours: 8,
        lessons: 64,
    },
    {
        id: 3,
        imgUrl: "/path/4.png",
        title: "Imprenditori...",
        hours: 17,
        lessons: 119,
    },
    {
        id: 4,
        imgUrl: "/path/5.png",
        title: "Diversity & Inclusion",
        hours: 5,
        lessons: 43,
    },
    {
        id: 5,
        imgUrl: "/path/6.png",
        title: "Protagonisti della sostenibilità",
        hours: 9,
        lessons: 70,
    },
    {
        id: 6,
        imgUrl: "/path/7.png",
        title: "Strategie di comunicazi...",
        hours: 13,
        lessons: 100,
    },
    {
        id: 7,
        imgUrl: "/path/8.png",
        title: "Blockchain",
        hours: 10,
        lessons: 74,
    },
    {
        id: 8,
        imgUrl: "/path/9.png",
        title: "Digital Marketing",
        hours: 16,
        lessons: 123,
    },
    {
        id: 9,
        imgUrl: "/path/10.png",
        title: "Legal - Privacy Policy",
        hours: 5,
        lessons: 42,
    },
    {
        id: 10,
        imgUrl: "/path/11.png",
        title: "Sales management",
        hours: 11,
        lessons: 84,
    },
    {
        id: 11,
        imgUrl: "/path/12.png",
        title: "People Management",
        hours: 9,
        lessons: 69,
    },
    {
        id: 12,
        imgUrl: "/path/13.png",
        title: "Digital Upskilling",
        hours: 11,
        lessons: 84,
    },
    {
        id: 13,
        imgUrl: "/path/14.png",
        title: "Intelligenza artificiale",
        hours: 6,
        lessons: 49,
    },
    {
        id: 14,
        imgUrl: "/path/15.png",
        title: "Cybersecuri...",
        hours: 7,
        lessons: 47,
    },
    {
        id: 15,
        imgUrl: "/path/16.png",
        title: "Welcome kit",
        hours: 13,
        lessons: 95,
    },
    {
        id: 16,
        imgUrl: "/path/17.png",
        title: "Strumenti di grafica",
        hours: 5,
        lessons: 46,
    },
    {
        id: 17,
        imgUrl: "/path/18.png",
        title: "Universo Social",
        hours: 11,
        lessons: 92,
    },
    {
        id: 18,
        imgUrl: "/path/19.png",
        title: "Pensare Creativo",
        hours: 7,
        lessons: 54,
    },
    {
        id: 19,
        imgUrl: "/path/20.png",
        title: "Presentazioni efficaci e come comunicarle",
        hours: 5,
        lessons: 43,
    },
    {
        id: 20,
        imgUrl: "/path/21.png",
        title: "Divulgazione culturale con TikTok",
        hours: 0,
        lessons: 9,
    },
]



export const courses: Course[] = [
  {
    id: 0,
    imgUrl: "/allCourses/1.png",
    title: "Come usare ChatGPT per scrivere con l'AI",
    author: "Pier Luigi Pisa",
    desc: "Comunicazione e scrittura, corsi di intelligenza artificiale, scienze e tecnologie emergenti, tecniche di...",
  },
  {
    id: 1,
    imgUrl: "/allCourses/2.png",
    title: "Inserire ChatGPT nei flussi di lavoro",
    author: "Raffaele Gaito",
    desc: "Corsi di intelligenza artificiale, scienze e tecnologie emergenti",
  },
  {
    id: 2,
    imgUrl: "/allCourses/3.png",
    title: "Emozioni e intelligenza emotiva",
    author: "Ilaria Gaspari",
    desc: "Crescita personale e professionale, gestione delle emozioni e dello stress",
  },
  {
    id: 3,
    imgUrl: "/allCourses/4.png",
    title: "Cambia il tuo Mindset con la Psicologia Positiva",
    author: "Lara Zucchini",
    desc: "Cambiamento e life design, crescita personale e professionale, gestione delle emozioni e dello stress",
  },
  {
    id: 4,
    imgUrl: "/allCourses/5.png",
    title: "Digital Business Strategy",
    author: "Mauro Lupi",
    desc: "Fondamenti di marketing, marketing e social media",
  },
  {
    id: 5,
    imgUrl: "/allCourses/6.png",
    title:
      "NFT: non solo arte. Come usarli nella propria attività e strategie di marketing",
    author: "Amelia Tomasicchio",
    desc: "Blockchain, growth marketing, marketing e social media, scienze e tecnologie emergenti",
  },
  {
    id: 6,
    imgUrl: "/allCourses/7.png",
    title: "<<Ho le mie buone ragioni>>: sceglieree diventare sé stessi",
    author: "Roberto Mordacci",
    desc: "Arte, cultura e filosofia, cambiamento e life design, crescita personale e professionale, storia e filosofia",
  },
  {
    id: 7,
    imgUrl: "/allCourses/8.png",
    title: "Cybersecurity: un rischio concreto e come difendersi",
    author: "Marco Govoni",
    desc: "Cybersecurity, scienze e tecnologie emergenti",
  },
  {
    id: 8,
    imgUrl: "/allCourses/9.png",
    title: "Graphic journalism: i fumetti per raccontare la realtà",
    author: "Marco Rizzo",
    desc: "Comunicazione e scrittura, corsi di scrittura creativa",
  },
  {
    id: 9,
    imgUrl: "/allCourses/10.png",
    title:
      "Comunicare con le immagini: il linguaggio visivo ai tempi dei social",
    author: "Benedetto Demaio",
    desc: "Comunicazione e scrittura, corsi di scrittura creativa, corsi di social media e influencer marketing, marketing...",
  },
  {
    id: 10,
    imgUrl: "/allCourses/11.png",
    title: "Introduzione al Minimum Viable Product",
    author: "Marco Imperato",
    desc: "Start-up, start-up e innovazione",
  },
  {
    id: 11,
    imgUrl: "/allCourses/12.png",
    title: "Come si scrive un reportage",
    author: "Annalisa Camilli",
    desc: "Comunicazione e scrittura, giornalismo ed editoria, tecniche di scrittura",
  },
  {
    id: 12,
    imgUrl: "/allCourses/13.png",
    title: "Autonomia e condizionamenti sociali",
    author: "Mario De Caro",
    desc: "Crescita personale e professionale, prendere decisioni e problem solving",
  },
  {
    id: 13,
    imgUrl: "/allCourses/14.png",
    title: "Come distillare un brand",
    author: "Francesca Bardelli Nonino",
    desc: "Branding, Marketing e social media",
  },
];

export const latestCourses: Course[] = [
    {
      id: 0,
      imgUrl: "/latest/1.webp",
      title: "Scopri gli algoritmi e massimizza le venite con Instagram e TikTok",
      author: "Anna Roberta Sorbo",
      desc: "Corsi di social media e inlfuencer marketing, marketing e social media",
    },
    {
      id: 1,
      imgUrl: "/latest/2.png",
      title: "Instagram Base",
      author: "Andrea Mangano",
      desc: "Comunicazione efficace, corsi di social media e influencer marketing, marketing e social media",
    },
    {
      id: 2,
      imgUrl: "/latest/3.png",
      title: "Visual storytelling: come raccontare storie con le immagini",
      author: "Gloria Aura Bortolini",
      desc: "Comunicazione e scrittura, video, podcast e fotografia",
    },
    {
      id: 3,
      imgUrl: "/latest/4.png",
      title: "Microsoft Office e Intelligenza Artificiale",
      author: "Andrea Pacchiarotti",
      desc: "Corsi di intelligenza artificiale, pacchetto office, scienze e tecnologie emergenti, strumenti per la...",
    },
    {
      id: 4,
      imgUrl: "/latest/5.png",
      title: "Digital Business Strategy",
      author: "Claudia Campisi",
      desc: "Business e management, corsi di intelligenza artificiale, crescita professionale e personale, ricerca del lavoro...",
    },
    {
      id: 5,
      imgUrl: "/latest/6.png",
      title:"Introduzione alla transculturità",
      author: "Rosanna Maryam Sirignano",
      desc: "Cambiamento e life design, crescita personale e professionale",
    },
    {
      id: 6,
      imgUrl: "/latest/7.png",
      title: "Corporate Reputation: quello che il pubblico pensa della tua azienda",
      author: "Miriam Frigerio",
      desc: "Branding, marketing e social media",
    },
    {
      id: 7,
      imgUrl: "/latest/8.png",
      title: "Nuove sfide per la carriera: gestisci e crea il tuo cambiamento professionale",
      author: "Serenella Panaro",
      desc: "Cambiamento e life design, crescita personale e professionale",
    },
    {
      id: 8,
      imgUrl: "/latest/9.png",
      title: "Come riconoscere e contrastare le fake news",
      author: "Paolo Attivissimo",
      desc: "Altro, scienze e tecnologie emergenti",
    },
    {
      id: 9,
      imgUrl: "/latest/10.png",
      title: "Debunking: come smascherare false teorie scientifiche",
        author: "Paolo Attivissimo",
        desc: "Altro, scienze e tecnologie emergenti",
    },
    {
      id: 10,
      imgUrl: "/latest/11.png",
      title: "Come lanciare un'impresa minimizzando i costi e i rischi: la validazione dell'idea",
      author: "Giulia D'amato",
      desc: "Start-up, start-up e innovazione",
    },
    {
      id: 11,
      imgUrl: "/latest/11.png",
      title: "Corporate Venture Builder: come portare l'innovazione e il cambiamento in azienda",
      author: "Alessio Boceda",
      desc: "Start-up, start-up e innovazione",
    },
    {
      id: 12,
      imgUrl: "/latest/12.png",
      title: "SEO da 0 a 100",
      author: "Fabio Antichi",
      desc: "Marketing e social media, seo",
    },
    {
      id: 13,
      imgUrl: "/latest/13.png",
      title: "Newsjacking: la notizia che fa publibblicità",
      author: "Francesco Martinelli",
      desc: "Comunicazione e scrittura, comunicazione efficace",
    },
    {
        id: 14,
        imgUrl: "/latest/14.png",
        title: "Creare un ambiente di lavoro inclusivo: sfide e risorse",
        author: "Emiliano Ceglie",
        desc: "Business e management, cambiamento e life design, crescita personale e professionale, risorse umane",
      },
  ];
  

  export const popularCourses: Course[] = [
    {
        id: 0,
        imgUrl: "/allCourses/1.png",
        title: "Come usare ChatGPT per scrivere con l'AI",
        author: "Pier Luigi Pisa",
        desc: "Comunicazione e scrittura, corsi di intelligenza artificiale, scienze e tecnologie emergenti, tecniche di...",
      },
    {
      id: 1,
      imgUrl: "/popular/2.png",
      title: "Midjourney e DALL-E2: generare immagini con prompt efficaci",
      author: "Andrea Feo",
      desc: "Altri strumenti pratici, corsi di intelligenza artificiale, scienze e tecnologie emergenti, strumenti per la...",
    },
    {
      id: 2,
      imgUrl: "/popular/3.png",
      title: "CapCut: impara a creare e modificare video in pochi passi",
      author: "Roberto Iadanza",
      desc: "Video e film-making, video, podcast e fotografia",
    },
    {
      id: 3,
      imgUrl: "/popular/4.png",
      title: "IA Generativa per il lavoro",
      author: "",
      desc: "",
    },
    {
      id: 4,
      imgUrl: "/popular/5.png",
      title: "Scrivere per farsi leggere: la scrittura professionale in pratica",
      author: "Roberta Zantedeschi",
      desc: "Comunicazione e scrittura, crescita personale e professionale",
    },
    {
      id: 5,
      imgUrl: "/popular/6.png",
      title:"Le basi della scrittura emotiva",
      author: "Valerio Carbone",
      desc: "Comunicazione e scrittuta, corsi di scrittura creativa",
    },
    {
      id: 6,
      imgUrl: "/popular/6.webp",
      title: "Corso base di public speaking",
      author: "Nicola Bolzan",
      desc: "Crescita personal e professionale, parlare in pubblico",
    },
    {
      id: 7,
      imgUrl: "/popular/7.png",
      title: "Musica e IA: come usare ChatGpt e AIVA",
      author: "Michele Maraglino",
      desc: "Arte, cultura e filosofia, corsi di intelligenza artificiale, musica, scienze e tecnologie emergenti",
    },
    {
        id: 8,
        imgUrl: "/allCourses/4.png",
        title: "Cambia il tuo Mindset con la Psicologia Positiva",
        author: "Lara Zucchini",
        desc: "Cambiamento e life design, crescita personale e professionale, gestione delle emozioni e dello stress",
      },
    {
      id: 9,
      imgUrl: "/popular/8.png",
      title: "La comunicazione interpersonale e la motivazione attraverso il feedback",
        author: "Emanuela Spaggiari",
        desc: "Business e management, risorse umane",
    },
    {
      id: 10,
      imgUrl: "/popular/10.png",
      title: "IA: introduzione al Promt Design 101",
      author: "Andrea Feo",
      desc: "Corsi di intelligenza artificiale, scienze e tecnologie emergenti",
    },
    {
      id: 11,
      imgUrl: "/popular/11.png",
      title: "Presentazioni e video efficaci con Canva",
      author: "Eugenia Brini",
      desc: "Grafica e design, video e film making, video, podcast e fotografia web-design e grafica",
    },
    {
      id: 12,
      imgUrl: "/popular/12.png",
      title: "Migliorare la comunicazone a lavoro con l'intelligenza artificiale",
      author: "Gianluigi Bonanomi",
      desc: "Corsi di inteliigenza  artificiale, crescita personale e professionale, scienze e tecnologie emergenti, svilupp...",
    },
    {
      id: 13,
      imgUrl: "/popular/13.png",
      title: "I 7 pilastri della gestione di un collaboratore",
      author: "Daniela bonetti",
      desc: "Business e management, crescita personale e professionale, leadership, risorse umane",
    },
    {
        id: 14,
        imgUrl: "/popular/14.png",
        title: "Squadra vincente",
        author: "Daniela bonetti",
        desc: "Business e management, crescita personale e professionale, leadership, risorse umane",
    },
  ];

  export const reviews: Review[] = [
    {
      id: 0,
      name: "Angelo P.",
      job: "Consulente",
      stars: 4,
      desc: "Sono davvero soddisfatto di come siano stati approfonditi gli argomenti, i corsi mi hanno fornito nuove informazioni importanti e fatto scoprire nuovi approcci",
  },
  {
    id: 1,
    name: "Francesca B.",
    job: "Studentessa universitaria",
    stars: 5,
    desc: "Tutti gli ambiti che abbiamo trattato e le attività suggerite sono stati interessanti, ho potuto vedere le tematiche affrontate da punti di vista diversi",
},
{
  id: 2,
  name: "Marinella G.",
  job: "Docente di italiano",
  stars: 4,
  desc: "Bellissimi e interessanti questi corsi, grazie per avermi dato l'opportunità di crescere professionalmente",
},
{
  id: 3,
  name: "Mattia M.",
  job: "Studente",
  stars: 5,
  desc: "Mi è piaciuto molto il percorso che abbiamo fatto, i corsi mi sono stati d'aiuto per capire alcune cose che penso mi aiuteranno nelle scelte che dovrò fare nel mio futuro",
},
{
  id: 4,
  name: "Federica E.",
  job: "Giovane lavoratrice",
  stars: 5,
  desc: "Consiglio Edulia a chi vuole capire come può essere il futuro per la propria persona, per il proprio lavoro o per l'azienda per cui lavora",
},
]
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import useThemeSwitcher from "./useThemeSwitcher";

import Iphone from "/images/projects/iPhone-webiste.webp";
import RuotaLibera from "/images/projects/RuotaLibera.webp";
import ProxiSaldatura from "/images/projects/ProxiSaldatura.webp";
import YelpCamp from "/images/projects/YelpCamp.webp";
import Omnifood from "/images/projects/Omnifood.webp";
import ArtMetal from "/images/projects/ArtMetal.png";
import MovieApi from "/images/projects/MovieApi.png";

const images = {
  RuotaLibera,
  Iphone,
  ProxiSaldatura,
  YelpCamp,
  Omnifood,
  ArtMetal,
  MovieApi,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          navbarLink: "Projects",

          home: {
            homeTitle: "My journey into the World of Web Development",
            bio: "Welcome to my portfolio! My name is Giovanni Pasini and I am a passionate junior full-stack developer with a strong dedication to turning ideas into powerful web applications. I live in Italy and constantly strive to stay up to date with the latest technologies and development practices. Here you can explore my latest projects, which demonstrate my expertise especially in using React.js and web development in general. I'm always looking for new challenges and growth opportunities, so don't hesitate to contact me if you want to collaborate or discuss innovative ideas!",
          },

          about: {
            aboutTitle: "About Me!",
            bioTitle: "Biography",
            biographys: [
              {
                line: "Graduated in Computer Science from the Piamarta institute in Brescia in 2013.",
              },
              {
                line: "I worked as a technician, warehouse worker and IT manager in the company Proxi Srl for 10 years. Now I understand that I want to do something else in life, I want to learn different jobs and start studying again.",
              },
              {
                line: "Over the last year I have carried out online training courses on programming and creating websites. I am a person who is committed to the things he does and who, when he doesn't know them, always tries to find the best solution.",
              },
              {
                line: "I completed an internship at the Photonic company located in Taiwan",
              },
            ],
            numbers: [
              { number: 5, title: "Satisfied Clients" },
              { number: 8, title: "Projects Completed" },
              { number: 4, title: "Years Of Experience" },
            ],
            experiences: [
              {
                position: "Web Development Intern",
                company: "Photonic",
                time: "2024",
                address: "Taipei, Taiwan",
                work: "2 months experience thanks to Rotary New Generations Service Exchange. Followed the development of the front end part of the company. Studied various types of languages ​​such as HTML, CSS, Javascript and SQL. Used different components such as Node, Vite and React. Learned about Taiwanese work culture by participating in various team events and bonding with colleagues.",
                companyLink: "https://www.photonic.com.tw/",
              },
              {
                position: "Freelance / Web Developer",
                company: "Ruota Libera",
                time: "2022-Present",
                address: "Gussago, Brescia",
                work: "Created website via the Wordpress platform, using various plugins, searching for the best solution and implementing the use of HTML and CSS. Followed the various directives requested by the client to find the best solution",
                companyLink: "https://www.ruotaliberabrescia.com",
              },
              {
                position: "IT Manager and Repairman",
                company: "Proxi srl",
                time: "2013-2023",
                address: "Longhena, Brescia",
                work: "Creation of the site for the company via the Wix platform. Management of video surveillance. Failure analysis and repair of various types of welding machines. Collaboration with colleagues. Organization of time based on work and customer management. Warehouse manager. ",
                companyLink: "https://www.proxisaldatura.com",
              },
            ],
            educations: [
              {
                info: "Javascript programming update. Using React, Node, Express and MongoDatabase. Deepened my knowledge on creating websites.",
                type: "Udemy / The Web Developer Bootcamp 2024",
                company: "Udemy",
                time: "2024",
                place: "Online",
              },
              {
                info: "Learned to program in Javascript. First approach with Javascript, React, Node, Machine Learning. Deepened my knowledge on creating websites.",
                type: "Udemy / The Complete Web Developer in 2023: Zero To Mastery",
                company: "Udemy",
                time: "2023",
                place: "Online",
              },
              {
                info: "Learned to program in Python. First approach to data science, game and application creation. Deepened my knowledge of website creation.",
                type: "Udemy / The Complete Python Bootcamp",
                company: "Udemy",
                time: "2022 - 2023",
                place: "Online",
              },
              {
                info: "Studyed programming languages: C++, Java, HTML, CSS, PHP, DOS. Learned electrical engineering and how to diagnose and repair computers.",
                type: "Istituto tecnico superiore Piamarta / Perito Informatico",
                company: "Istituto Piamarta",
                time: "2007 - 2013",
                place: "Brescia",
              },
            ],
            educationTitle: "Education",
          },
          projects: {
            projectTitle: "Projects",
            visit: "Visit the Webiste!",
            items: [
              {
                title: "Electric Bike Shop",
                summary:
                  "Website created with Wordpress showing the electric bicycles the shop sells.",
                link: "https://ruotaliberabrescia.com/",
                type: "Wordpress, HTML, CSS",
                imageKey: "RuotaLibera",
              },
              {
                title: "Website created for a metallurgical company",
                summary:
                  "Created with HTML, CSS, and Javascript, with email sending options and an API for sending emails",
                link: "https://www.gruppoartmetal.it/index.html",
                type: "HTML, CSS, Javascipt e API",
                imageKey: "ArtMetal",
              },
              {
                title: "Site that searches for films via API",
                summary:
                  "Website that shows with a list of movies fetching them with a free API",
                link: "https://magicgionson93.github.io/movieapi/",
                type: "HTML, CSS, Javascript, API",
                imageKey: "MovieApi",
              },
              {
                title: "Company specialized in the sale of welding machines",
                summary:
                  "Website created with Wix showing the various products the company sells.",
                link: "https://proxisaldatura.com/",
                type: "Wix",
                imageKey: "ProxiSaldatura",
              },
              {
                title: "Creation and management of campsites",
                summary:
                  "Website created with HTML, CSS, Javascript, Node and MongoDB. Ability to register, create and manage campsites.",
                link: "#",
                type: "HTML, CSS, Javascript, Node e MongoDB",
                imageKey: "YelpCamp",
              },
              {
                title: "Showcase website",
                summary:
                  "Website created with HTML, CSS and Javascript. Created as a showcase site and used different types of animations.",
                link: "https://magicgionson93.github.io/omnifood/",
                type: "HTML, CSS e Javascript",
                imageKey: "Omnifood",
              },
              {
                title: "Iphone webiste with 3D render",
                summary:
                  "Website that shows with visual effects the new Iphone 15. I used GSAP and Three for the animations with a 3D render of the iPhone.",
                link: "https://magicgionson93.github.io/iPhone-website/",
                type: "HTML, CSS, Javascript, React, GSAP, Three, Tailwind",
                imageKey: "Iphone",
              },
            ],
          },
        },
      },
      it: {
        translation: {
          navbarLink: "Progetti",

          home: {
            homeTitle: "Il mio viaggio nel Mondo dello Sviluppo Web",
            bio: "Benvenuto nel mio portfolio! Mi chiamo Giovanni Pasini e sono un appassionato junior full-stack developer con una forte dedizione nel trasformare idee in potenti applicazioni web. Vivo in Italia e mi impegno costantemente a rimanere al passo con le più recenti tecnologie e pratiche di sviluppo. Qui potrai esplorare i miei ultimi progetti, che dimostrano la mia competenza specialmente nell'utilizzo di React.js e nello sviluppo web in generale. Sono sempre alla ricerca di nuove sfide e opportunità di crescita, quindi non esitare a contattarmi se desideri collaborare o discutere di idee innovative!",
          },
          about: {
            aboutTitle: "Chi sono!",
            bioTitle: "Biografia",
            biographys: [
              {
                line: "Diplomato in Informatica presso l'istituto Piamarta a Brescia nel 2013.",
              },
              {
                line: "Ho lavorato come tecnico, magazziniere e IT manager nell'azienda Proxi Srl per 10 anni. Ora ho capito che voglio fare altro nella vita, voglio imparare diversi lavori e ricominciare a studiare.",
              },
              {
                line: "Ho eseguito in questo ultimo anno corsi di formazione online sulla programmazione e la creazione di siti web. Sono una persona che si impegna sulle cose che fa e che quando non le sa cerca sempre di trovare la soluzione migliore.",
              },
              {
                line: "Ho completato una internship presso l'azienda Photonic situata in Taiwan",
              },
            ],
            numbers: [
              { number: 5, title: "Clienti Soddisfatti" },
              { number: 8, title: "Progetti Completati" },
              { number: 4, title: "Anni di esperienza" },
            ],
            experiences: [
              {
                position: "Web Development Intern",
                company: "Photonic",
                time: "2024",
                address: "Taipei, Taiwan",
                work: "Esperienza di 2 mesi grazie a Rotary New Generations Service Exchange. Seguito lo sviluppo della parte front end dell'azienda. Studiato vari tipi di linguaggi come HTML, CSS, Javascript e SQL. Utilizzato diversi componenti come Node, Vite e React. Appreso la cultura lavorativa Taiwanese partecipando a diversi team events e creando legami con i colleghi.",
                companyLink: "https://www.photonic.com.tw/",
              },
              {
                position: "Freelance / Web Developer",
                company: "Ruota Libera",
                time: "2022-Present",
                address: "Gussago, Brescia",
                work: "Creato sito web tramite la piattaforma di Wordpress, utilizzando diversi plugin, ricercando la migliore soluzione e implementando l'utilizzo HTML e CSS. Seguito le varie direttive richieste dal cliente per trovare la soluzione migliore",
                companyLink: "https://www.ruotaliberabrescia.com",
              },
              {
                position: "IT Manager and Repairman",
                company: "Proxi srl",
                time: "2013-2023",
                address: "Longhena, Brescia",
                work: "Creazione del sito per l'azienda tramite la piattaforma Wix. Gestione della videosorveglianza. Analisi delle avarie e riparazione di vari tipi di saldatrici. Collaborazione con i colleghi. Organizzazione del tempo in base al lavoro e gestione della clientela. Responsabile Magazzino.",
                companyLink: "https://www.proxisaldatura.com",
              },
            ],
            educations: [
              {
                info: "Aggiornamento programmazione Javascript. Utilizzo di React, Node, Express e MongoDatabase. Approfondito la mia conoscenza sulla creazione di siti web.",
                type: "Udemy / The Web Developer Bootcamp 2024",
                company: "Udemy",
                time: "2024",
                place: "Online",
              },
              {
                info: "Imparato a programmare in Javascript. Primo approccio con Javascript, React, Node, Machine Learning. Approfondito la mia conoscenza sulla creazione di siti web.",
                type: "Udemy / The Complete Web Developer in 2023: Zero To Mastery",
                company: "Udemy",
                time: "2023",
                place: "Online",
              },
              {
                info: "Imparato a programmare in Python. Primo approccio con data science, creazione di giochi e applicazioni. Approfondito la mia conoscenza sulla creazione di siti web.",
                type: "Udemy / The Complete Python Bootcamp",
                company: "Udemy",
                time: "2022 - 2023",
                place: "Online",
              },
              {
                info: "Studiato linguaggi di programmazione: C++, Java, HTML, CSS, PHP, DOS. Imparato elettrotecnica e come diagnosticare e riparare computer.",
                type: "Istituto tecnico superiore Piamarta / Perito Informatico",
                company: "Istituto Piamarta",
                time: "2007 - 2013",
                place: "Brescia",
              },
            ],

            educationTitle: "Educazione",           
          },
          projects: {
            projectTitle: "Progetti!",
            visit: "Visita il Sitoweb!",
            items: [
              {
                title: "Negozio di Bici Elettriche",
                summary:
                  "Sito Web creato con Wordpress che mostra le biciclette elettriche che il negozio vende.",
                link: "https://ruotaliberabrescia.com/",
                type: "Wordpress, HTML, CSS",
                imageKey: "RuotaLibera",
              },
              {
                title: "Sito Web creato per azienda metallurgica",
                summary:
                  "Creato con HTML, CSS e Javascript con selezione di invio email e aggiunta API per inviare mail",
                link: "https://www.gruppoartmetal.it/index.html",
                type: "HTML, CSS, Javascript e API",
                imageKey: "ArtMetal",
              },
              {
                title: "Azienda specializzata nella vendita delle Saldatrici",
                summary:
                  "Sito Web creato con Wix che mostra i vari prodotti che l'azienda vende.",
                link: "https://proxisaldatura.com/",
                type: "Wix",
                imageKey: "ProxiSaldatura",
              },
              {
                title: "Ricerca film tramite API",
                summary:
                  "Sito che ti permette di effettuare una ricerca di film tramite API",
                link: "https://magicgionson93.github.io/movieapi/",
                type: "HTML, CSS, Javascript, API",
                imageKey: "MovieApi",
              },
              {
                title: "Creazione e gestione di campeggi",
                summary:
                  "Sito Web creato con HTML, CSS, Javascript, Node e MongoDB. Possibilità di registrazione, creazione e gestione di campeggi.",
                link: "#",
                type: "HTML, CSS, Javascript, Node e MongoDB",
                imageKey: "YelpCamp",
              },
              {
                title: "Sito Web vetrina",
                summary:
                  "Sito Web creato con HTML, CSS e Javascript. Creato come sito vetrina e utilizzato diversi tipi di animazioni.",
                link: "https://magicgionson93.github.io/omnifood/",
                type: "HTML, CSS e Javascript",
                imageKey: "Omnifood",
              },
              {
                title: "Sito Web iPhone con 3D iPhone",
                summary:
                  "Sito Web che mostra il nuovo iPhone 15 con animazioni e effetti. Ho utilizzato GSAP e Three per le animazioni e l'iPhone in 3D.",
                link: "https://magicgionson93.github.io/iPhone-website/",
                type: "HTML, CSS, Javascript, React, GSAP, Three, Tailwind",
                imageKey: "Iphone",
              },
            ],
          },
        },
      },
    },
  });

export default images;

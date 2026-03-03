import AnimatedSection from './animated-section';
import ScrollProgress from './scroll-progress';
import EmailSignup from './email-signup';

interface StoryCard {
  title: string;
  narrative: string;
  bg: string;
  text: string;
  subtitle?: string;
  era?: string;
  fact?: string;
  image?: string;
  highlight?: string;
  pauseAndThink?: string;
}

const storyData: StoryCard[] = [
  {
    title: "Angélique Kidjo",
    subtitle: "A Retrospective",
    narrative: "Five Grammys. Four decades. One voice that bent the arc of African music toward the world.",
    bg: "bg-ink",
    text: "text-parchment",
  },
  {
    title: "The Voice of Ouidah",
    era: "1960",
    narrative: "Ouidah, Benin—a coastal city at the crossroads of Vodun spirituality and the Atlantic slave trade. Born here on July 14, 1960, Angélique was one of ten children. Her father Franck, a Fon musician and civil servant, taught her that words represent honor and dignity. Her mother Yvonne, a Yoruba choreographer and activist, ran a women's rights group and directed a theater troupe. Angélique was onstage by six. By eight, she was singing Miriam Makeba on Beninese radio.",
    fact: "Her early role model was Togolese singer Bella Bellow. Kidjo's debut album Pretty (1981) was recorded on a student loan with her brother Oscar.",
    bg: "bg-parchment",
    text: "text-ink",
    image: '/images/benin.svg',
  },
  {
    title: "A World in a Radio",
    era: "1970s",
    narrative: "The Kidjo household radio pulled in signals from across the Atlantic—Makeba, James Brown, Hendrix, Aretha Franklin. These were not distant curiosities. They were proof that rhythm moved freely across oceans and languages. By her teens, Angélique fronted a school band called Les Sphinx and adapted Makeba's 'Les Trois Z' into a version that got picked up by national radio. Professional female musicians were considered immoral in Benin at the time. She persisted.",
    fact: "She speaks and sings in five languages: Fon, French, Yorùbá, Gen, and English.",
    bg: "bg-ink",
    text: "text-parchment",
  },
  {
    title: "The Exodus",
    era: "1983",
    narrative: "A military coup installed a Marxist-Leninist government in Benin. Musicians were ordered to praise the regime. Kidjo refused. At twenty-three, she left for Paris—and spent the next six years unable to contact her parents because phone lines were under government surveillance. She survived as a babysitter and hotel cleaner while studying jazz at the CIM school, where she met bassist Jean Hebrail. He became her husband, collaborator, and co-producer.",
    fact: "The CIM (Centre d'Informations Musicales) was a renowned Parisian jazz school that shaped her approach to harmony and improvisation.",
    bg: "bg-terracotta",
    text: "text-parchment",
    pauseAndThink: "What would you refuse to say, even if silence meant exile?",
    image: '/images/paris.svg',
  },
  {
    title: "Logozo",
    era: "1991",
    narrative: "Island Records founder Chris Blackwell—the man who signed Bob Marley—heard Kidjo and offered her a deal. Logozo was recorded between Miami and Paris with Miami Sound Machine drummer Joe Galdo producing and Branford Marsalis and Manu DiBango on saxophones. The result was her most club-ready record, the one that put her on the Billboard World Music chart and proved West African polyrhythm could drive a dance floor anywhere on earth.",
    fact: "Chris Blackwell has been credited with breaking reggae, U2, and Angélique Kidjo to international audiences through Island Records.",
    bg: "bg-parchment",
    text: "text-ink",
    highlight: "Logozo (1991) · Ayé (1994) · FIFA (1996)",
  },
  {
    title: "Tracing the Slave Routes",
    era: "1998–2004",
    narrative: "Across three albums, Kidjo followed the transatlantic slave trade through its musical afterlife. Oremi explored Black America—she covered Hendrix's 'Voodoo Child' and layered Fon rhythms over funk. Black Ivory Soul went to Bahia, Brazil, where centuries of forced migration had preserved West African rhythms in samba and candomblé. Oyaya! traced the Caribbean connection. Together, the trilogy was both musical scholarship and a profound act of remembrance.",
    fact: "AllMusic called Black Ivory Soul 'her most consistent and satisfying effort to date.' Kidjo described the project as following the route of the slaves.",
    bg: "bg-ink",
    text: "text-parchment",
    highlight: "Oremi · Black Ivory Soul · Oyaya!",
    image: '/images/ocean.svg',
  },
  {
    title: "Remain in Light",
    era: "2018",
    narrative: "In 1983, at a Paris party, Kidjo first heard the Talking Heads' 'Once in a Lifetime' and immediately recognized West African drumming patterns in its looping, polyrhythmic structure. Decades later she recorded a complete reimagining of their album Remain in Light, produced by Jeff Bhasker with Fela Kuti's drummer Tony Allen and the Antibalas horn section. She sang in Fon, layering proverbs about inequality and corruption over the grooves. It was a conceptual argument made in sound: this music began in Africa.",
    fact: "David Byrne, who co-wrote the original album, reportedly said of her version: 'I wish I could have done it like that.'",
    bg: "bg-parchment",
    text: "text-ink",
    pauseAndThink: "When music travels the world and returns transformed, who does it belong to?",
  },
  {
    title: "Celia",
    era: "2019",
    narrative: "Kidjo first heard Celia Cruz's voice in Benin and later met her in Paris, where they sang 'Quimbara' together onstage. After a sold-out tribute concert at Celebrate Brooklyn in 2017—Philip Glass was in the audience and urged her to record it—she went into the studio and Africanized Cruz's Cuban arrangements with Congolese guitar, Tony Allen's drums, and Gangbe Brass Band horns, layering 6/8 African clave beneath the 4/4 structures. Her reasoning: put it back where it all started.",
    fact: "The Guardian called the result 'magnificent.' The Financial Times gave it five stars.",
    bg: "bg-terracotta",
    text: "text-parchment",
    image: '/images/dance.svg',
  },
  {
    title: "Five Grammys",
    era: "2008–2022",
    narrative: "No other African artist, living or deceased, holds more Grammy Awards. Djin Djin in 2008—produced by David Bowie collaborator Tony Visconti with Alicia Keys, Peter Gabriel, and Carlos Santana. Eve in 2015, featuring choirs from ten Beninese and Kenyan villages alongside the Kronos Quartet. Sings in 2016, a collaboration with the Luxembourg Philharmonic. Celia in 2020—where she dedicated the award to Burna Boy. Mother Nature in 2022, her fifth.",
    fact: "In 2023, she received the Polar Music Prize, hailed as one of the greatest singer-songwriters of our era. She is the first Black African artist selected for the Hollywood Walk of Fame.",
    bg: "bg-ink",
    text: "text-parchment",
    highlight: "Djin Djin · Eve · Sings · Celia · Mother Nature",
  },
  {
    title: "A Voice Beyond Music",
    era: "2002–present",
    narrative: "UNICEF Goodwill Ambassador since 2002. Founder of the Batonga Foundation for girls' secondary education. She has visited refugee camps in Darfur and Chad, performed at the 2011 Nobel Peace Prize ceremony honoring three women laureates, and campaigned against female genital mutilation. She has been asked to enter politics many times and always refuses, calling it a dirty game. Her position: an artist is only really a full artist if they are aware of the society around them.",
    fact: "Time Magazine named her one of the 100 most influential people in the world. She performed NPR Music's historic 1,000th Tiny Desk Concert.",
    bg: "bg-parchment",
    text: "text-ink",
    image: '/images/education.svg',
  },
  {
    title: "Passing the Torch",
    era: "2021–present",
    narrative: "Mother Nature, her fifteenth album, was made during lockdown with what she called a minimum carbon footprint—collaborations sent between continents via WhatsApp. Burna Boy contributed a verse remotely. Yemi Alade co-wrote 'Dignity' during the EndSARS protests. Mr Eazi and Salif Keita joined her on a track spanning three generations of African music. The torch is being passed. She has no intention of letting go.",
    fact: "On Mother Nature, Kidjo deliberately paired veterans like Salif Keita and Sting with rising voices—Mr Eazi, Yemi Alade, Shungudzo, and EarthGang.",
    bg: "bg-ink",
    text: "text-parchment",
    pauseAndThink: "Whose shoulders do today's biggest artists stand on?",
  },
];

const TOTAL_SECTIONS = storyData.length + 1; // +1 for email section

export default function Home() {
  return (
    <>
      <ScrollProgress total={TOTAL_SECTIONS} />
      <main className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory bg-parchment">
        {storyData.map((card, index) => (
          <AnimatedSection
            key={index}
            card={card}
            index={index}
            sectionNumber={card.subtitle ? undefined : index}
            showChevron
          />
        ))}

        {/* Email Signup Section */}
        <section
          data-section-index={storyData.length}
          className="h-[100dvh] w-full snap-start flex flex-col justify-center items-center p-6 md:p-12 relative overflow-hidden bg-ink text-parchment"
        >
          <div className="z-10 max-w-md w-full flex flex-col items-center text-center space-y-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-50">
              Stay Connected
            </span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.1]">
              The Story Continues
            </h2>
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-current opacity-20" />
              <span className="w-1.5 h-1.5 rotate-45 border border-current/20" />
              <span className="w-8 h-[1px] bg-current opacity-20" />
            </div>
            <p className="font-sans text-sm font-light leading-relaxed tracking-wide opacity-70">
              Four decades in, Kidjo keeps surprising us. Sign up for updates
              on new releases, performances, and the ongoing legacy.
            </p>
            <EmailSignup />
          </div>
        </section>
      </main>
    </>
  );
}

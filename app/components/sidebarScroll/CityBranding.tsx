const mediaExamples = [  
  {outlet: 'San Antonio Express-News', href: 'https://www.hearstmediasa.com/web'},
  {outlet: 'San Antonio Current', href: 'https://mediakit.sacurrent.com/'},
  {outlet: 'mySA', href: 'https://www.hearstmediasa.com/web'},
  {outlet: 'Texas Public Radio', href: 'https://www.tpr.org/'},
  {outlet: 'do210', href: 'https://do210.com/'},
]

const localTechExamples = [
  {company: 'greater:SATX', href: 'https://greatersatx.com/industries/technology/'},
  {company: 'Geekdom', href: 'https://geekdom.com/'},
  {company: 'Port San Antonio', href: 'https://www.portsanantonio.us/'},
  {company: 'Codeup', href: 'https://codeup.edu/san-antonio/'},
  {company: 'UTSA (edX)', href: 'https://bootcamp.utsa.edu/coding/'},
  //{company: 'NuCamp', href: 'https://www.nucamp.co/community/tx/san-antonio'},
  //{company: 'Coding Dogo', href: 'https://www.codingdojo.com/campus/san-antonio-coding-bootcamp'},
]

export default function CityBranding() {
  return (
    <>
      <img
        className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-lg"
        src="https://a-us.storyblok.com/f/1015487/1200x630/5a73b03d05/publicartsbanner.png"
        alt="San Antonio Public Art"
      />
      <h1 className="mt-6 text-2xl font-bold leading-8 text-missionbellGrey sm:text-3xl sm:leading-9">San Antonio's visual identity </h1>
      <p className="mt-6 text-lg leading-8 text-gray-500">
        San Antonio's visual identity combines elements of history, architecture, natural beauty, and cultural diversity to create a distinct and vibrant representation of the city's essence
      </p>
      <p className="mt-2 text-[0.8125rem]/6 font-semibold leading-8 text-conchaPink hover:text-nopalesGreen">
        <a href="https://www.sa.gov/Design/Getting-Started/Toolkits/Brand-Toolkit/Creative-Elements" rel="noreferrer" target="_blank">
          San Antonio Brand Toolkit&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>

      <div className="mt-16 sm:mt-20 ">
        <img
          className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-lg"
          src="https://a-us.storyblok.com/f/1015487/232x150/154dea8163/floralprint.svg"
          alt="San Antonio branded floral print pattern"
        />
        <h1 className="mt-6 text-2xl font-bold leading-8 text-missionbellGrey sm:text-3xl sm:leading-9">
          San Antonio's media outlets
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          Leveraging the local press effectively can raise awareness about DevMountain's web development bootcamp.
          Here are some notable media outlets in San Antonio: 
        </p>
        <ul
          className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-conchaPink sm:grid-cols-2"
        >
          {mediaExamples.map((example) => (
            <a href={example.href} key={example.outlet} rel="noreferrer" target="_blank">
              <li className="flex gap-x-3">
                <img 
                  className="h-7 w-5 flex-none text-riverwalkTeal" 
                  aria-hidden="true" 
                  alt="pepper icon"
                  src="https://a-us.storyblok.com/f/1015487/150x150/5c39875406/pepper.svg"
                />
                {example.outlet}
              </li>
            </a>
          ))}
        </ul>
      </div>

      <div className="mt-16 sm:mt-20 ">
        <img
          className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-lg"
          src="https://a-us.storyblok.com/f/1015487/8601x3701/e9ba022569/skyline.jpg"
          alt="San Antonio skyline"
        />
        <h1 className="mt-6 text-2xl font-bold leading-8 text-missionbellGrey sm:text-3xl sm:leading-9">
          San Antonio's Growing Tech Scene
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          San Antonio has been cultivating a thriving tech ecosystem, with the emergence of startups, tech companies, and innovation hubs.
        </p>
        <ul
          className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-conchaPink sm:grid-cols-2"
        >
          {localTechExamples.map((example) => (
            <a href={example.href} key={example.company} rel="noreferrer" target="_blank">
              <li className="flex gap-x-3">
                <img 
                  className="h-7 w-5 flex-none text-riverwalkTeal" 
                  aria-hidden="true" 
                  alt="cactus icon"
                  src="https://a-us.storyblok.com/f/1015487/150x150/5a562096a9/cactus.svg"
                />
                {example.company}
              </li>
            </a>
          ))}
        </ul>
      </div>

      <div className="mt-16 sm:mt-20 ">
        <img
          className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-lg"
          src="https://a-us.storyblok.com/f/1015487/2152x1073/1b2ec2d4d2/preview.png"
          alt="devmountain logo with san antonio branded colors"
        />
        <h1 className="mt-6 text-2xl font-bold leading-8 text-missionbellGrey sm:text-3xl sm:leading-9">
          VIVA! DevMountain
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          San Antonio's visual identity celebrates its rich cultural diversity, particularly its Hispanic heritage. 
          Visual elements such as traditional Mexican folk art, Mariachi music instruments, papel picado, and sombreros may be used to represent the city's lively arts scene and cultural traditions.
        </p>
        <p className="mt-6 flex items-baseline gap-x-2 text-[0.8125rem]/6 text-conchaPink hover:text-riverwalkTeal font-semibold">
          <a href="https://image-gallery-starter-pi-eosin.vercel.app/" rel="noreferrer" target="_blank">
            Preview DevMountain San Antonio branding concepts&nbsp;<span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </>
  )
}
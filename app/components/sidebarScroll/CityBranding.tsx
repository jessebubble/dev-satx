import { CheckCircleIcon } from '@heroicons/react/20/solid'

const mediaExamples = [  
  {outlet: 'San Antonio Express-News', href: 'https://www.hearstmediasa.com/web'},
  {outlet: 'San Antonio Current', href: 'https://mediakit.sacurrent.com/'},
  {outlet: 'mySA', href: 'https://www.hearstmediasa.com/web'},
  {outlet: 'Texas Public Radio', href: 'https://www.tpr.org/'},
]

const bootcampExamples = [
  {bootcamp: 'Codeup', href: 'https://codeup.edu/san-antonio/'},
  {bootcamp: 'UTSA (edX)', href: 'https://bootcamp.utsa.edu/coding/'},
  {bootcamp: 'NuCamp', href: 'https://www.nucamp.co/community/tx/san-antonio'},
  {bootcamp: 'Coding Dogo', href: 'https://www.codingdojo.com/campus/san-antonio-coding-bootcamp'},
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
          src="https://a-us.storyblok.com/f/1015487/3600x2400/abf134eb6c/culture.jpg"
          alt="San Antonio fiesta parade"
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
                <CheckCircleIcon className="h-7 w-5 flex-none text-riverwalkTeal" aria-hidden="true" />
                {example.outlet}
              </li>
            </a>
          ))}
        </ul>
      </div>

      <div className="mt-16 sm:mt-20 ">
        <img
          className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-lg"
          src="https://a-us.storyblok.com/f/1015487/3500x2333/d302792ca9/sanjosemission.jpg"
          alt="San Jose Mission"
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
          {bootcampExamples.map((example) => (
            <a href={example.href} key={example.bootcamp} rel="noreferrer" target="_blank">
              <li className="flex gap-x-3">
                <CheckCircleIcon className="h-7 w-5 flex-none text-riverwalkTeal" aria-hidden="true" />
                {example.bootcamp}
              </li>
            </a>
          ))}
        </ul>
      </div>

      <div className="mt-16 sm:mt-20 ">
        <img
          className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-lg"
          src="https://a-us.storyblok.com/f/1015487/3600x2400/823c4bcdbd/fiesta.jpg"
          alt="San Antonio fiesta parade"
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
            Early preview to logo concepts we're working on&nbsp;<span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </>
  )
}
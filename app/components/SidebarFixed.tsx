  export function Hero() {
  return (
    <>
      <main className="-mt-12 lg:-mt-16">
        <div className="-ml-8"> 
          <a href="https://devmountain.com/learn-to-code-in-person-your-favorite-instructor?utm_source=jesse-hernandez&utm_medium=social-email&utm_campaign=og-in-person-san-antonio" rel="noreferrer" target="_blank">
            <img 
              src="https://a-us.storyblok.com/f/1015487/194x150/1215650675/devsatx-logo-teal-pink.svg"
              className="h-40 lg:h-44 w-auto"
              alt="devMountain SATX Logo"
            />
          </a>
        </div>
        <h1 className="font-display text-4xl/tight font-light text-riverwalkTeal">
          Hola! DevMountain
          <span className="block text-conchaPink">Welcome to the San Antonio community</span>
        </h1>
        <p className="mt-4 text-sm/6 text-pearlWhite">
          We're a city that embraces history, celebrates diversity, and offers a warm embrace to all who visit.
          Enjoy the enchanting missions, embrace the beauty of the Riverwalk, savor the flavors of Hispanic culture, and join us in paying homage to our military heroes
        </p>
      </main>
    </>
  )
}
  
export function HeroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-pearlWhite hover:text-conchaPink">
      <a href="https://www.strayer.edu/campus-locations/texas/san-antonio/" rel="noreferrer" target="_blank">
        Part of Strayer University&nbsp;<span aria-hidden="true">&rarr;</span>
      </a>
    </p>
  )
}
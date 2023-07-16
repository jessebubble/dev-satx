import { useId } from 'react'

export default function SignUpForm() {
  let id = useId()

  return (
    <form className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        placeholder="Email address"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
      />
      <button type="submit" className="py-1.5 text-[0.8125rem]/6 font-semibold text-white p-2 rounded-md bg-inherit hover:text-indigo-400">
        Let's connect&nbsp;<span aria-hidden="true">&rarr;</span>
      </button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-indigo-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-indigo-300" />
    </form>
  )
}

//test 
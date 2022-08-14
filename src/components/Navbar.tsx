import React from 'react'

const Navbar = (props: { setName: React.Dispatch<React.SetStateAction<string | null>>, themeChange: () => void, setMode: React.Dispatch<React.SetStateAction<boolean>>, mode: boolean }) => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ps</span>
        </a>
        <div className="flex items-center justify-center">
          <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox"
              onChange={() => { props.setMode(!props.mode); props.themeChange() }}
              id="default-toggle"
              className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div>
          <input
            onChange={e => props.setName(e.target.value)}
            type="text"
            id="search-navbar"
            className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

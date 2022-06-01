import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((results) => setCategories(results.reverse()))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-white py-8">
        <div className="block text-center md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              Joseph Wang
            </span>
          </Link>
        </div>
        <div className="text-md flex justify-center space-x-4 align-middle md:float-right md:space-x-8 md:text-xl">
          {categories.map((category: any) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
          <a href="/resume.pdf">
            <span className="mt-2 cursor-pointer align-middle font-semibold text-white md:float-right">
              Resume
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header

import React, { useState } from 'react'
import "./_categoriesBar.scss"

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Marathi Songs',
  'DSA',
  'Development',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'News',
]

function CategoriesBar() {
  const [activeElement, setActiveElement] = useState('All')

  const handleClick = (value) => {
    setActiveElement(value)
  }

  return (
    <div className='categoriesBar'>
      {
        keywords.map((value, i) => (
          <span
            key={i}
            onClick={() => handleClick(value)}
            className={activeElement === value ? 'active' : ""}
          >
            {value}
          </span>
        ))
      }
    </div>
  )
}

export default CategoriesBar

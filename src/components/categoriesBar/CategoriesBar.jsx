import React, { useState } from 'react'
import "./_categoriesBar.scss"
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'

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

  const dispatch = useDispatch()

  const handleClick = (value) => {
    setActiveElement(value)
    console.log(value);
    if (value === 'All') {
      dispatch(getPopularVideos())
    } else {
      dispatch(getVideosByCategory(value))
    }
  }

  return (
    <div className='categoriesBar'>
      {
        keywords.map((value, i) => (
          <span
            key={i}
            onClick={(e)=>handleClick(value)}
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

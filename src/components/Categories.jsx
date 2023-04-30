import React from 'react'
import "../styles/Categories.css"
import cat1 from "../assets/cat-1.jpg"
import cat2 from "../assets/cat-2.jpg"
import cat3 from "../assets/cat-3.jpg"
import cat4 from "../assets/cat-4.jpg"

const Categories = () => {
  return (
    <div className="category">
        <h1 className='category-title'>Categories</h1>
        <div className='category-container'>
            <div className="cat-1">
            <img className='cat-img' src={cat1} alt="cat" />
            <img className='cat-img' src={cat2} alt="cat" />
            </div>
            <div className="cat-2">
            <img className='cat-img' src={cat3} alt="cat" />
            <img className='cat-img' src={cat4} alt="cat" />
            </div>
        </div>
    </div>
  )
}

export default Categories

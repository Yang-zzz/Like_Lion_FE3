import React from 'react'
import './category.css'

export default function Category({category}) {
  console.log(category)
  return (
    <dl className="category">
    <dt className="a11y-hidden">Category</dt>
    <dd>
      {
        category.map((el,index) => {
          <dd key={index}>{el}</dd>
        })
      }
    </dd>
    <dd>Style</dd>
  </dl>
  )
}

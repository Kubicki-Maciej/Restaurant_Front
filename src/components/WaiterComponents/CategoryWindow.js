import React from 'react'

export default function CategoryWindow({category_name}) {
  return (
  <ScreenMain>
    <Navbar/>
    <ScreenMenu>
      {categoryData.map((category, index)=>(
        <CategoryButton  categoryObject={category}/>
      ))}
    </ScreenMenu>
  </ScreenMain>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

function Post() {
  return (
   <>
     <div className="post">
        <div className="image">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwmAmgSnhCfFXtoeaGc_ApiM66FHwLyggCO51NLWtmZwJsVnCXKyUvEmfJKJWQ-O5K_s&usqp=CAU' alt='' />
        </div>
        
        <div className="content">
        <h2>The href attribute requires a valid value to be accessible. Provide a valid</h2>
        <div className="info">
          <Link to="" className="author">Shoaib</Link>
          <time>2023-08-24</time>

        </div>
        <p className="summary"> The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href</p>
        </div>
      </div>
   </>
  )
}

export default Post
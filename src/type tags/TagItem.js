import React from 'react'

const TagItem = ({id, title, removeTagHandler}) => {
  return (
    <div id={id}>
        <button onClick={()=> removeTagHandler(id)}>&times;</button>
        {title}
    </div>
  )
}

export default TagItem
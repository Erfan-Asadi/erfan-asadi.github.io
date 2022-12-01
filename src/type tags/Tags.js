import React, { useState } from 'react'
import TagItem from './TagItem';


const Tags = ({tags, removeTagHandler}) => {

  return (
    <div>
        {
            tags.map(tag => <TagItem removeTagHandler={removeTagHandler} title={tag.title} id={tag.id} key={tag.id}/>)
        }
    </div>
  )
}

export default Tags
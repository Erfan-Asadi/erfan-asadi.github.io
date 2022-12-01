import React from 'react'
import SingleTag from './SingleTag'

const tagsStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '5px'
}
const Tags = ({tags, clickHandler}) => {

  return (
    <div style={tagsStyle}>
        {
            tags.map(tag => <SingleTag key={tag.id} id={tag.id} title={tag.title} clickHandler={clickHandler}/>)
        }
    </div>
  )
}

export default Tags
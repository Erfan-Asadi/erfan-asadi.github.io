import React, { useState } from 'react'
import Tags from './Tags'
import Form from './Form';

const tagItems = [
    {
        title: 'css3',
        id: 3
    },
    {
        title: 'html5',
        id: 1
    },
    {
        title: 'js',
        id: 2
    }
]


const Container = () => {
    const [tags, setTags] = useState(tagItems);

    function handleClick(itemValue) {
        setTags(prevState => [...prevState, {title: itemValue, id: Math.random() * 1e5}])
    }

    function removeTagHandler(tagId) {
        const filteredTags = tags.filter(tag => tag.id !== tagId);
        setTags(filteredTags)
    }

  return (
    <>
    <Form handleClick={handleClick}/>
    <Tags tags={tags} removeTagHandler={removeTagHandler}/>
    </>
  )
}

export default Container
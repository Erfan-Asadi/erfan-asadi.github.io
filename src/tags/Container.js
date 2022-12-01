import React, {useState} from 'react'
import Form from './Form'
import Tags from './Tags'

const initialTags = [
    {
        title: 'HTML4',
        id: 1
    },
    {
        title: 'CSS3',
        id: 3
    },
    {
        title: 'Tawlwind',
        id: 2
    }
]
const Container = () => {
    const [tags, setTags] = useState(initialTags);

    const clickHandler = (itemId) => {
        setTags((prevTags) => {
            const filteredtags = prevTags.filter(tag => tag.id !== itemId);
            return filteredtags;
        })
    }
    const tagValueHandler = (tagValue) => {
        console.log(tagValue)
        setTags(prev => [...prev, {id: Math.trunc(Math.random() * 1e5 ), title: tagValue}])
    }
  return (
    <div>
        <Form tagValueHandler={tagValueHandler} />
        <Tags clickHandler={clickHandler} tags={tags} />
    </div>
  )
}

export default Container
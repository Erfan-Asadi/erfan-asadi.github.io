import React from 'react';

const Color = ({colorItem, setColors}) => {
    const styles = {backgroundColor: colorItem.color}
    function changeColorHandler() {

        setColors(prev => {
            const prevActiveColor = prev.find(color => color.selected);
            if(prevActiveColor.id === colorItem.id) return prev;

           const chanagedArray =  prev.map(item => {
                if(item.id === colorItem.id) {
                    return {...item, selected: !item.selected}
                } else {
                    return {...item, selected: false}
                }
            })
            return chanagedArray;
        })
    }
  return (
    <div style={styles} 
         className={`color ${colorItem.selected && 'selected'}`}
         onClick={changeColorHandler}>

    </div>
  )
}

export default Color
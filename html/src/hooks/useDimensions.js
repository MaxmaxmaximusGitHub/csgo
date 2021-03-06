import {useEffect, useRef, useState} from "react";

// const ro = new ResizeObserver((entries, observer) => {
//   for (const entry of entries) {
//     const {left, top, width, height} = entry.contentRect;
//
//     console.log('Element:', entry.target);
//     console.log(`Element's size: ${ width }px x ${ height }px`);
//     console.log(`Element's paddings: ${ top }px ; ${ left }px`);
//   }
// });
//
// ro.observe(document.body);
//
// console.log(ro)


export default function useDimensions(dimensionProps) {
  const ref = useRef()

  const [dimensions, setDimensions] = useState(() => {
    return getDimensions(ref.current, dimensionProps)
  })

  useEffect(() => {
    function updateDimensions() {
      let newDimensions = getDimensions(ref.current, dimensionProps)

      if (isChanged(dimensions, newDimensions)) {
        setDimensions(newDimensions)
      }
    }

    updateDimensions()
  })

  return [ref, dimensions]
}


function getDimensions(node, dimensionProps) {

  if (!dimensionProps) {
    dimensionProps = ['width', 'height', 'left', 'top']
  }

  if (node) {
    var dimensions = node.getBoundingClientRect().toJSON()
    dimensions.offsetLeft = node.offsetLeft
    dimensions.offsetTop = node.offsetTop
  } else {
    var dimensions = {
      bottom: 0, height: 0, left: 0, offsetLeft: 0, offsetTop: 0,
      right: 0, top: 0, width: 0, x: 0, y: 0,
    }
  }

  if (!dimensionProps.length) {
    return dimensions
  }

  let clearedDimensions = {}
  for (let i = 0; i < dimensionProps.length; i++) {
    let prop = dimensionProps[i]
    clearedDimensions[prop] = dimensions[prop]
  }

  return clearedDimensions
}


function isChanged(dimensions, newDimensions) {
  for (let key in newDimensions) {
    if (newDimensions.hasOwnProperty(key)) {
      if (newDimensions[key] !== dimensions[key]) {
        return true
      }
    }
  }

  return false
}


function startObserver() {
  // console.log('startObserver')
}


function stopObserver() {
  // console.log('stopObserver')
}



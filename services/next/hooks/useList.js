export default function useList(count, template) {

  return new Array(count).fill(true).map((val, index) => {
    return Object.assign({id: index}, template)
  })

}




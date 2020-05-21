import React, { useState, useEffect, useRef } from 'react'
import css from 'styled-jsx/css'
import Roll from "../Widgets/Roll";
import Button from "../Widgets/Button";
import useRepeat from "../../hooks/useRepeat";
import List from "../Widgets/List";


export default function FAQ() {


  return <List>
    { useRepeat(15, (index) =>
      <Roll title='dfdf' key={ index }>
        <Button>fddddf</Button>
      </Roll>
    ) }

    <style jsx>{ style }</style>
  </List>
}


// language=Stylus
const style = css`
`
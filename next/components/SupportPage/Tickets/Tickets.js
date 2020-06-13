import React from 'react'
import css from 'styled-jsx/css'
import TicketsList from "./TicketsList";
import ActiveTicket from "./ActiveTicket";


export default function Tickets() {

  const activeTicket = false

  if (!activeTicket) {
    var content = <>
      <TicketsList></TicketsList>
    </>
  } else {
    var content = <ActiveTicket ticket={activeTicket}/>
  }

  return <div className='tickets'>
    {content}
    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .tickets {
    align-self stretch
    flex-grow 1
    display flex
    flex-direction column
    background-color red
  }
`


import React from 'react'
import css from 'styled-jsx/css'
import PromoTitle from "./PromoTitle";
import bonusTitle from 'res/images/bonus.svg'
import BonusNickLevels from "./BonusNickLevels";


export default function BonusesNickName() {

  return <div className='bonuses-nick-name'>

    <PromoTitle
      icon={bonusTitle}
      iconPadding={0.2}
      title='Бонусы за сайт в имени'
      description="Зависит от времени, которое
      сайт находится у вас в никнейме Steam"
    />

    <BonusNickLevels activeLevel={3}/>

    <style jsx>{style}</style>
  </div>
}


// language=Stylus
const style = css`
  .bonuses-nick-name {
    margin-top 0.5em
  }
`

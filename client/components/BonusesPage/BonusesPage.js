import css from 'styled-jsx/css'
import Page from "../Widgets/Page"
import PromoCode from "./PromoCode";
import BonusesFAQ from "./BonusesFAQ";
import BonusesNickName from "./BonusesNickName";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";


export default function BonusesPage() {

  return <Page>

    <div className="container">
      <div className="left-panel">
        <PromoCode/>
        <BonusesNickName/>
      </div>

      <BonusesFAQ/>
    </div>

    <style jsx>{ style }</style>
  </Page>
}


// language=Stylus
const style = css`
  .container {
    flex-grow 1
    display flex
    flex-direction row
    padding-bottom 1em
    border-radius 0.5em
    overflow hidden

    .left-panel {
      flex-grow 1
      display flex
      flex-direction column
      padding 0 2em
    }
  }


`
import React from 'react'
import css from 'styled-jsx/css'


export default React.memo(function GlobalFonts() {

  return <style jsx global>{ style }</style>
})


// language=Stylus
const style = css`

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-BoldItalic.eot');
    src: local('Gotham Pro Bold Italic'), local('GothamPro-BoldItalic'),
      url('res/fonts/GothamPro-BoldItalic.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-BoldItalic.woff') format('woff'),
      url('res/fonts/GothamPro-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-Italic.eot');
    src: local('Gotham Pro Italic'), local('GothamPro-Italic'),
      url('res/fonts/GothamPro-Italic.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-Italic.woff') format('woff'),
      url('res/fonts/GothamPro-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-Medium.eot');
    src: local('Gotham Pro Medium'), local('GothamPro-Medium'),
      url('res/fonts/GothamPro-Medium.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-Medium.woff') format('woff'),
      url('res/fonts/GothamPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-BlackItalic.eot');
    src: local('Gotham Pro Black Italic'), local('GothamPro-BlackItalic'),
      url('res/fonts/GothamPro-BlackItalic.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-BlackItalic.woff') format('woff'),
      url('res/fonts/GothamPro-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-Bold.eot');
    src: local('Gotham Pro Bold'), local('GothamPro-Bold'),
      url('res/fonts/GothamPro-Bold.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-Bold.woff') format('woff'),
      url('res/fonts/GothamPro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Pro Narrow';
    src: url('res/fonts/GothamProNarrow-Bold.eot');
    src: local('Gotham Pro Narrow Bold'), local('GothamProNarrow-Bold'),
      url('res/fonts/GothamProNarrow-Bold.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamProNarrow-Bold.woff') format('woff'),
      url('res/fonts/GothamProNarrow-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Pro Narrow';
    src: url('res/fonts/GothamProNarrow-Medium.eot');
    src: local('Gotham Pro Narrow Medium'), local('GothamProNarrow-Medium'),
      url('res/fonts/GothamProNarrow-Medium.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamProNarrow-Medium.woff') format('woff'),
      url('res/fonts/GothamProNarrow-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-LightItalic.eot');
    src: local('Gotham Pro Light Italic'), local('GothamPro-LightItalic'),
      url('res/fonts/GothamPro-LightItalic.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-LightItalic.woff') format('woff'),
      url('res/fonts/GothamPro-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-Light.eot');
    src: local('Gotham Pro Light'), local('GothamPro-Light'),
      url('res/fonts/GothamPro-Light.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-Light.woff') format('woff'),
      url('res/fonts/GothamPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-Black.eot');
    src: local('Gotham Pro Black'), local('GothamPro-Black'),
      url('res/fonts/GothamPro-Black.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-Black.woff') format('woff'),
      url('res/fonts/GothamPro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro.eot');
    src: local('Gotham Pro'), local('GothamPro'),
      url('res/fonts/GothamPro.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro.woff') format('woff'),
      url('res/fonts/GothamPro.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: url('res/fonts/GothamPro-MediumItalic.eot');
    src: local('Gotham Pro Medium Italic'), local('GothamPro-MediumItalic'),
      url('res/fonts/GothamPro-MediumItalic.eot?#iefix') format('embedded-opentype'),
      url('res/fonts/GothamPro-MediumItalic.woff') format('woff'),
      url('res/fonts/GothamPro-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }
`

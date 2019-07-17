module.exports = `
  * {
    text-align: left;
    font-family: Lato;
  }

  #outlook a {
    padding: 0;
  }

  body {
    width: 100% !important;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    margin: 0;
    padding: 0;
    background-color: #ff9c23;
  }

  .ExternalClass {
    width: 100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height: 100%;
  }

  #backgroundTable {
    margin: 0;
    padding: 0;
    width: 100% !important;
    line-height: 100% !important;
  }

  img {
    outline: none;
    text-decoration: none;
    border: none;
    -ms-interpolation-mode: bicubic;
  }

  a img {
    border: none;
  }

  .image_fix {
    display: block;
  }

  p {
    margin: 0px 0px !important;
  }

  table td {
    border-collapse: collapse;
  }

  table {
    border-collapse: collapse;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
  }

  a {
    color: #0a8cce;
    text-decoration: none;
    text-decoration: none !important;
  }

  table[class='full'] {
    width: 100%;
    clear: both;
  }

  @media only screen and (max-width: 640px) {
    a[href^='tel'],

    a[href^='sms'] {
      text-decoration: none;
      color: #0a8cce;
      pointer-events: none;
      cursor: default;
    }
    
    .mobile_link a[href^='tel'],
    .mobile_link a[href^='sms'] {
      text-decoration: default;
      color: #0a8cce !important;
      pointer-events: auto;
      cursor: default;
    }
    
    table[class='devicewidth'] {
      width: 440px !important;
      text-align: center !important;
    }
    
    table[class='devicewidthinner'] {
      width: 420px !important;
      text-align: center !important;
    }
    
    img[class='banner'] {
      width: 440px !important;
      height: 220px !important;
    }
    
    img[class='colimg2'] {
      width: 440px !important;
      height: 220px !important;
    }
  }

  @media only screen and (max-width: 480px) {
    a[href^='tel'],
    a[href^='sms'] {
      text-decoration: none;
      color: #0a8cce;
      pointer-events: none;
      cursor: default;
    }
    
    .mobile_link a[href^='tel'],
    .mobile_link a[href^='sms'] {
      text-decoration: default;
      color: #0a8cce !important;
      pointer-events: auto;
      cursor: default;
    }
    
    table[class='devicewidth'] {
      width: 280px !important;
      text-align: center !important;
    }
    
    table[class='devicewidthinner'] {
      width: 260px !important;
      text-align: center !important;
    }
    
    img[class='banner'] {
      width: 280px !important;
      height: 140px !important;
    }
    
    img[class='colimg2'] {
      width: 280px !important;
      height: 140px !important;
    }
    
    td[class='mobile-hide'] {
      display: none !important;
    }
    
    td[class='padding-bottom25'] {
      padding-bottom: 25px !important;
    }
  }
`;

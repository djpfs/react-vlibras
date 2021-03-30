import * as React from 'react'

export default class VLibras extends React.Component {
  widgetSrc: string;
  scriptSrc: string;
  script: any;

  constructor(props: any) {
    super(props);
    this.widgetSrc = 'https://vlibras.gov.br/app';
    this.scriptSrc = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    this.script = null;
  }

  init() {
    this.script = document.createElement('script');
    this.script.src = this.scriptSrc;
    this.script.async = true;
    this.script.onload = (load: Event) => {
      // @ts-ignore: Unreachable code error
      new window.VLibras.Widget(this.widgetSrc);
    };
    document.head.appendChild(this.script);
  }

  componentDidMount() {
    this.init();
  }

 render () {
  return (
      // @ts-ignore: Unreachable code error
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    );
 }
  
}

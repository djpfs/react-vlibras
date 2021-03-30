"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class VLibras extends react_1.Component {
    constructor(props) {
        super(props);
        this.widgetSrc = 'https://vlibras.gov.br/app';
        this.scriptSrc = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        this.script = new HTMLScriptElement();
    }
    init() {
        this.script = document.createElement('script');
        this.script.src = this.scriptSrc;
        this.script.async = true;
        this.script.onload = (load) => {
            // @ts-ignore: Unreachable code error
            new window.VLibras.Widget(this.widgetSrc);
        };
        document.head.appendChild(this.script);
    }
    componentDidMount() {
        this.init();
    }
    render() {
        return `<div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>`;
    }
}
exports.default = VLibras;

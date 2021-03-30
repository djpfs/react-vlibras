"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class VLibras extends React.Component {
    constructor(props) {
        super(props);
        this.widgetSrc = 'https://vlibras.gov.br/app';
        this.scriptSrc = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        this.script = null;
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
        return (
        // @ts-ignore: Unreachable code error
        React.createElement("div", { vw: "true", className: "enabled" },
            React.createElement("div", { "vw-access-button": "true", className: "active" }),
            React.createElement("div", { "vw-plugin-wrapper": "true" },
                React.createElement("div", { className: "vw-plugin-top-wrapper" }))));
    }
}
exports.default = VLibras;

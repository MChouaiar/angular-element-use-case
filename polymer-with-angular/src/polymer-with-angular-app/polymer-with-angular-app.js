import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';

/**
 * @customElement
 * @polymer
 */
class PolymerWithAngularApp extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="angular-element-example/styles.79f87c4faa454ec36725.css"/>
    
     <style>
        :host {
          font-family: sans-serif;
        }
        .polymer{
            border-style: solid;
            border-color: #160F99;
            padding: 30px;
        }
        .angular{
          border-style: solid;
          border-color: #99050a;
          padding: 30px;
        }
      </style>
      
      <div class="polymer">
        <div style="text-align:center">
            <img width="300" alt="Javascript Logo" src="img/polymer-2.svg">
        </div>
      <div class="angular">
          <app-root message="{{message}}" number="{{number::count-change}}"></app-root>
      </div>
          
         <paper-input label="Polymer paper-input" value="{{message::keyup}}">
          <div prefix>$</div>
          <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
         </paper-input>
          <h3>[[number]]</h3>
          <h3>[[message]]</h3>
          <paper-button raised on-click="increaseCounter">Increase the counter</paper-button>
          <paper-button toggles raised on-click="decreaseCounter">Decrease the counter</paper-button>
      </div>
    `;
  }
  static get properties() {
    return {
        number: {
            type: Number,
            value : 0,
            notify: true,
            readOnly: false
        },
        message:{
            type: String,
            value: "Hello from Polymer component",
            notify: true,
            readOnly: false
        }
    };
  }
    handleCounterChange(event) {
      this.number = event.detail;
    }

    increaseCounter(){
        ++this.number;
    }

    decreaseCounter(){
        --this.number;
    }
}

window.customElements.define('polymer-with-angular-app', PolymerWithAngularApp);

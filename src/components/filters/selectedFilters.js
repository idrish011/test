import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import './index.css';
export class selectFilter extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            class: 'section',
            FilterData: [],
            buttonParam: '+',
            selectFilter: []
        };
    }

    handleClick(val, e) {
        var inputval = document.getElementById(val + 'val').value;
        if (inputval == "true") {
            document.getElementById(val).classList.add('show');
            document.getElementById(val + 'val').value = 'false';
            document.getElementById(val + 'expand').innerHTML = '-';
        } else {
            document.getElementById(val).classList.remove('show');
            document.getElementById(val + 'val').value = 'true';
            document.getElementById(val + 'expand').innerHTML = '+';

        }
    }
    getInitialState() {
        return {};
    }
    componentDidMount() {
      //  global.selectedcheckbox = '';
     
      if (global.selectedcheckbox != undefined) {
        // if (global.selectedcheckbox != undefined) {
             var selectedVal=global.selectedcheckbox;
             //global.selectedcheckbox="";
             var arrFilter=(selectedVal).split(',');
             for(var i=0;i<arrFilter.length;i++){
                 alert(arrFilter[i]);
                 
               //  filterBox(); 
  
             document.getElementById(arrFilter[i]).click();
             }
            // ListOnChange(global.selectedcheckbox);

         }
        
        
    }
    render() {

      return (
            <div class="collaps">
                
               
            </div>
        )
    }
}

export default selectFilter

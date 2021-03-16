import React, { Component } from 'react';
import { Header } from './Header';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import ParentSSO from './ParentSSO';
import Container from 'react-bootstrap/Container';
import Form  from 'react-bootstrap/Form';
import Loader from './loader/loader';
import Footer from './Footer/Footer';
import Button from 'react-bootstrap/Button'
import WSTABS from './tabs/winTabs';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
class WinAssetDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ErrorShow:false
        };
        
    }
    componentDidMount() {
        global.selectedcheckbox="";
        localStorage.setItem('selectedFilters',"");
    //     global.statusTab="details";
  //  alert(window.location.href);
        var url = window.location.href;  
        var error=(url).split('errorMsg=');
         alert(error[1]);

      //  alert(url.indexOf("?idcs=") );
       if(url.indexOf("?idcs=")!=-1){
         //  alert('1');
         this.setState({
            ErrorShow: true
        });
       }
    // }
    document.getElementById('Loader').classList.add('hide');

    }
   
    render() {
     //   alert(this.state.ErrorShow)
        // function FuncRedirect(event) {
        //     // alert('1');
        //     // global.selectedCategory="ASSET";
        //     window.history.go(-1);
        // }
           return (
            <div className="App">
                {/* <Header /> */}
                    <div className=" bkError">
                        <Container fluid={false} > 
                        <div className="text-center">
                            <Row>
                            {/* <div class="Pull-right col-md-12"><a onClick={FuncRedirect} href="javascript:void(0);">&#x2190; &nbsp;Back to Previous Screen</a></div> */}
                            
                            <Col md={12} >
                                <img className="mt-4" src="../img/404e.png"/>
                                <p className="text-center">
                                    {this.state.ErrorShow==true && <>Site is not reachable, please reach out to us on <a href="https://app.slack.com/client/TA8NTTZE0/CMHTP1AC8" target="_blank"> Slack</a>.

</>}
                                    {this.state.ErrorShow==false && 
                                    <> You are not authorized to access this application. 
                                    please reach out to us on <a href="https://app.slack.com/client/TA8NTTZE0/CMHTP1AC8" target="_blank"> Slack</a>
                                    </>}
                                    <br/>go back to home page <a href="/">click here</a>
                                </p>
                            </Col>
                                
                                {/* <Col md={12}><img src="../img/Error.png"/></Col> */}
                                 {/* <ParentSSO/> */}
                            </Row>
                        </div>
                        </Container>
                <Footer />
                </div>
               
            </div>
        );
    }
  }
  
  export default WinAssetDetails;
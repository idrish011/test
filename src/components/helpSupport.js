import React, { Component } from 'react';
import { Header } from './Header';
import Tabs from './tabs/tabs';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import ParentSSO from './ParentSSO';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Loader from './loader/loader';
import Footer from './Footer/Footer';
import Button from 'react-bootstrap/Button'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
class AssetDetails extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        HelpData: []
    }
    componentDidMount() {
        global.selectedcheckbox="";
        localStorage.setItem('selectedFilters',"");
        if ((sessionStorage.getItem('user_email') != "") && (sessionStorage.getItem('user_email') != null) && (sessionStorage.getItem('user_email') != undefined)) {
            // axios.get(global.Ip + global.Port + '/asset/favourites', {
            //     headers: {
            //         "user_email": sessionStorage.getItem("user_email")
            //     }
            // }).then(res => {
            //     console.log(res.data);
            //     // this.setState({ AssetCount:res.data.asset_Count, HubCount:res.data.hubs_Count, WinsCount:res.data.winstory_Count });
            // });
            axios.get(global.Ip + global.Port + '/asset/helpandsupport', {
                headers: {
                    "user_email": sessionStorage.getItem("user_email")
                }
            }).then(helpSupport => {
                const HelpData = helpSupport.data;

                this.setState({ HelpData });
                document.getElementById('Loader').classList.add('hide');

            })

        }

    }

    render() {
        //global.selectedcheckbox = "";

        var helpSupportnew = this.state.HelpData;
        return (
            <div className="App">
                <Header />
                <div className="BodyContainer mt-4">
                    <Container fluid={false}>
                        <Row>
                            <div className="mb40">
                                <div className="Pull-right col-md-12 mb20"><a href="javascript:window.history.back(-1)">&#x2190; &nbsp;Back to Previous Screen</a></div>
                                {/* <h5 className="col-md-12 mb20 clearfix">HELP</h5> */}

                                {helpSupportnew.map((HelpData, index) =>
                                    <>
                                        {(HelpData.USER_GUIDE) &&
                                            <div>
                                                <h5 className="col-md-12 mt10 mb10">User Guide</h5>
                                                <Col md={10}>{HelpData.USER_GUIDE}, Please click <a target="_blank" href={HelpData.USER_GUIDE_URL}>here</a></Col>
                                                <hr />
                                            </div>
                                        }
                                        {(HelpData.PROMO_VIDEO_URL) &&
                                            <div>
                                                <h5 className="col-md-12 mb20">Promo Video</h5>

                                                <Col md={10}>
                                                    <iframe id="kmsembed-0_39k6jvkd" width="608" height="402" src={HelpData.PROMO_VIDEO_URL} class="kmsembed" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" ></iframe>
                                                </Col>
                                            </div>
                                        }
                                        {/* <h5 className="col-md-12 mb20">SUPPORT</h5>
                                        <Col md={10}>For Further queries reach out to us &nbsp;<a href="https://app.slack.com/client/TA8NTTZE0/CMHTP1AC8" target="_blank"><button class="btn-bord btn-xs ">Connect us on Slack</button></a></Col> */}
                                        {/* <div class="mb40"></div> */}

                                    </>
                                )}
                                <h5 className="col-md-12 mb20 clearfix">How-To Videos</h5>
                                {helpSupportnew.map((HelpData, index) =>
                                    <>
                                        <h5 className="col-md-12 mb20">{HelpData.HOW_TO_VIDEO_DESCRIPTION}</h5>
                                        <Col md={10}>
                                            <iframe id="kmsembed-0_39k6jvkd" width="608" height="402" src={HelpData.HOW_TO_VIDEO_LINK} class="kmsembed" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" ></iframe>
                                        </Col>
                                        {/* <h5 className="col-md-12 mb20">Use Case: Win Search and SE Assistance</h5>
                                        <Col md={10}>
                                            <iframe id="kmsembed-0_39k6jvkd" width="608" height="402" src='https://otube.oracle.com/embed/secure/iframe/entryId/0_vxttk6cf/uiConfId/43012852' class="kmsembed" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" ></iframe>
                                        </Col> */}
                                    </>
                                )}
                            </div>
                            {/* <ParentSSO/> */}
                        </Row>
                    </Container>
                    <Footer />
                </div>

            </div >
        );
    }
}

export default AssetDetails;
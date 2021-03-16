import React, { Component } from 'react';
import { Header } from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MyAsseTCard from './imageCard/MyAssetsCard';
import Loader from './loader/loader';
import Footer from './Footer/Footer';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 'assetTitle': 'My Asset', componentMange: '', assetData: '', errorMsg: '', assetCount: '', filterData: '', searchParamResult: "", classClear: 'hide clearall small pull-right','url':global.Ip + global.Port+"/winstory/getassetsdump" };
    }

    componentDidMount() { }


    render() {
        global.selectedcheckbox="";
        localStorage.setItem('selectedFilters',"");


        global.classClear = this.state.classClear;
        return (
            <div className="App">
                <Header />
                <div className="BodyContainer">
                    <Container fluid={true}>
                        <Row>
                            <Col sm={12}>
                                <h5 class="col-sm-12 mt10">My Assets  {(sessionStorage.getItem('role').indexOf('reviewer') != -1 || sessionStorage.getItem('role').indexOf('admin') != -1) && <a href={this.state.url}><button type="button" class="btn btn-primary pull-right mb-20 ml-20 btn-sm"><i className="icon-Download"/>Assets Dump</button></a>} <Link to="/AssetManagement"><button type="button" class="btn btn-primary pull-right mb-20 btn-sm">Create Asset</button></Link></h5>
                                <Row className="errorMSG">
                                    <Col md={12} className="mb-12 text-center"> <strong >{this.state.errorMsg}</strong></Col>
                                </Row>
                                <Loader />
                                <MyAsseTCard errorMSG={this.state.errorMsg} />
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default ParentComponent;
import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from "./profileDropdown";
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      AssetCount: '',
      HubCount: '',
      username: '',
      name: '',
      TabStatus: '',
      WinsCount: '',
      statusTab: '',
      LoginName: '',
      LoginPwd: '',
      LoginSuccess: '',
      ErrorPage:'',
      ErrorPage1:''
    };
    // localStorage.setItem('user_email', 'deepika.r@oracle.com');
    // localStorage.setItem('user_name', 'Deepika R');
    // localStorage.setItem('LOB', "Others");
    // localStorage.setItem('role', "admin,reviewer,winloader");
    // localStorage.setItem('leader', true);

    // sessionStorage.setItem("user_name", localStorage.getItem("user_name"));
    // sessionStorage.setItem("user_email", localStorage.getItem("user_email"));

    
  }


  componentDidMount() {

    // alert(sessionStorage.getItem('role'));
    setTimeout(function () { 
      document.getElementById('header-container').scrollIntoView();
      
   }, 1000);


    if ((localStorage.getItem("user_email") != undefined) && (localStorage.getItem("user_email") != null) && (localStorage.getItem("user_email") != "")) {
           
      sessionStorage.setItem("user_email",localStorage.getItem("user_email"));
      sessionStorage.setItem("user_name",localStorage.getItem("user_name"));


      var reqParms = {
          "email": localStorage.getItem('user_email'),
          "user_email": localStorage.getItem("user_email")
      }
      axios.post(global.Ip + global.Port + '/user/findbyemail/', reqParms, {
          headers: {
              "user_email": localStorage.getItem("user_email")

          }
      })
          .then(res => {
              if (res.data.exist == 'no') {
                  localStorage.setItem('loginStatus',res.data.exist);
                  global.loginStatus = res.data.exist;
                  // document.getElementById("myModalnew").style.display = 'block';
                  //     alert('test');
                  this.setState({
                      ErrorPage: true
                  });
                  // alert('NOt registred');
                  //  document.getElementById("myModalnew").style.display = 'block'; 
              } else {
                  localStorage.setItem('loginStatus',res.data.exist);

                  global.loginStatus = res.data.exist;
                  sessionStorage.setItem("role", res.data.role);
                  sessionStorage.setItem("location", res.data.location);
                  sessionStorage.setItem("pillar", res.data.pillar);
                  sessionStorage.setItem("phone", res.data.phone);
                  sessionStorage.setItem("leader", res.data.leader);

                  localStorage.setItem("role", res.data.role);
                  localStorage.setItem("location", res.data.location);
                  localStorage.setItem("pillar", res.data.pillar);
                  localStorage.setItem("phone", res.data.phone);
                  localStorage.setItem("leader", res.data.leader);


                  if (res.data.lob == null) {
                      sessionStorage.setItem("LOB", "Others");
                      localStorage.setItem("LOB", "Others");


                  } else {
                      sessionStorage.setItem("LOB", res.data.lob);
                      localStorage.setItem("LOB", res.data.lob);

                  }

                  // global.role=res.data.role;
                  // global.location=res.data.location;
                  // global.pillar=res.data.pillar;
                  this.setState({
                      LoginSuccess: true
                  });
              }
          }).catch(error => {
              // alert(error+", Sorry for the delayed response");
              sessionStorage.clear();
              localStorage.clear();
              this.setState({
                  ErrorPage: true
              });
          });


  } else {
    /*https://run.mocky.io/v3/3eb7001a-ba7c-45c6-b339-854bda8e3f94  LOCAl*/
    /*global.baseDom + '/ssoheader.php'  Prod*/
      axios.get(global.baseDom + '/ssoheader.php') 
          .then(res => {
              if (res.data.indexOf('<!DOCTYPE html>') == -1) {
                  var split = res.data.split('#');
                  if ((split[1] != "") && (split[1] != undefined) && (split[1] != null)) {
                      global.email = split[0].trim();
                      global.name = split[1].trim();
                  } else { }
                  localStorage.setItem("user_name", global.name);
                  localStorage.setItem("user_email", global.email);
                  sessionStorage.setItem("user_name", global.name);
                  sessionStorage.setItem("user_email", global.email);
                  if (localStorage.getItem('user_name') != undefined) {
                      var reqParms = {
                          "email": sessionStorage.getItem('user_email'),
                          "user_email": sessionStorage.getItem("user_email")
                      }
                      axios.post(global.Ip + global.Port + '/user/findbyemail/', reqParms, {
                          headers: {
                              "user_email": sessionStorage.getItem("user_email")

                          }
                      })
                          .then(res => {
                              if (res.data.exist == 'no') {
                                  localStorage.setItem('loginStatus',res.data.exist);

                                  global.loginStatus = res.data.exist;
                                  // document.getElementById("myModalnew").style.display = 'block';
                                  //     alert('test');
                                  this.setState({
                                      ErrorPage: true
                                  });
                                  // alert('NOt registred');
                                  //  document.getElementById("myModalnew").style.display = 'block'; 
                              } else {
                                  localStorage.setItem('loginStatus',res.data.exist);

                                  global.loginStatus = res.data.exist;
                                  localStorage.setItem("role", res.data.role);
                                  localStorage.setItem("location", res.data.location);
                                  localStorage.setItem("pillar", res.data.pillar);
                                  localStorage.setItem("phone", res.data.phone);
                                  localStorage.setItem("leader", res.data.leader);

                                  sessionStorage.setItem("role", res.data.role);
                                  sessionStorage.setItem("location", res.data.location);
                                  sessionStorage.setItem("pillar", res.data.pillar);
                                  sessionStorage.setItem("phone", res.data.phone);
                                  sessionStorage.setItem("leader", res.data.leader);
                                  if (res.data.lob == null) {
                                      sessionStorage.setItem("LOB", "Others");
                                      localStorage.setItem("LOB", "Others");

                                  } else {
                                      sessionStorage.setItem("LOB", res.data.lob);
                                      localStorage.setItem("LOB", res.data.lob);

                                  }
                                  // global.role=res.data.role;
                                  // global.location=res.data.location;
                                  // global.pillar=res.data.pillar;
                                  this.setState({
                                      LoginSuccess: true
                                  });
                              }
                          }).catch(error => {
                              // alert(error+", Sorry for the delayed response");
                              sessionStorage.clear();
                              localStorage.clear();
                              this.setState({
                                  ErrorPage: true
                              });
                          });

                      axios.post(global.Ip + global.Port + '/user/captureactivity/w/login/' + sessionStorage.getItem("user_name") + '/' + sessionStorage.getItem("user_email")).then(res => {
                        setTimeout(function () { 
                          if(document.getElementById('F-session'))     {
                                            document.getElementById('F-session').value=sessionStorage.getItem("user_email");
                                            if(document.getElementById('F-session').value!=""){
                                              // alert(document.getElementById('F-session').value);
                                              window.location.href=window.location.href;
                                            }
                          }
                      }, 2000);

                      })
                  }
              }

              else {
                  //  alert("Bad session, Sorry for the delayed response");
                  sessionStorage.clear();
                  localStorage.clear();
                  this.setState({
                      ErrorPage1: true
                  });
              }

          }




          ).catch(error => {
              //   alert(error+", Sorry for the delayed response");
              sessionStorage.clear();
              localStorage.clear();
              this.setState({
                  ErrorPage1: true
              });
          });

  }




    //if ((sessionStorage.getItem('user_email') != "") && (sessionStorage.getItem('user_email') != null) && (sessionStorage.getItem('user_email') != undefined)) {
    // sessionStorage.setItem('user_email','deepika.r@oracle.com');
    // sessionStorage.setItem('user_name','deepika R');

    var name = sessionStorage.getItem('user_name');
    if (name !== undefined) {
      var firsttwoletter = name.substring(0, 1);
      this.setState({
        username: firsttwoletter,
        name: name
      });
      global.username = firsttwoletter;
      global.name = name;
    }

    axios.get(global.Ip + global.Port + '/asset/banner', {
      headers: {
        "user_email": sessionStorage.getItem('user_email')

      }
    })
      .then(res => {
        global.totalUniqueVisitors = (res.data.visit[0].COUNT) + (res.data.visit[1].COUNT);
        this.setState({ AssetCount: res.data.asset_Count, HubCount: res.data.hubs_Count, WinsCount: res.data.winstory_Count });
      })

    //}


  }

  handleTab = (value) => {
    global.statusTab = value;
    global.selectedcheckbox="";
    localStorage.setItem('selectedFilters',"");

    this.setState({
      statusTab: global.statusTab
    })

  }
  assetClick = (value) => {
    var elmnt = document.getElementById("assetContent");
    elmnt.scrollIntoView();
  }
  comingSoon = () => {
    window.open(' https://bit.ly/fy21-nac-salesplays', '_blank');
    return false;
  }
  winClick = (value) => {
    var elmnt = document.getElementById("winContent");
    elmnt.scrollIntoView();
  }
  linkOpen(url) {
    if (url == "") {
      alert('Coming Soon!');
    }
    else
      window.open(url, "_blank");
  }
  render() {
    sessionStorage.setItem("user_name", localStorage.getItem("user_name"));
    sessionStorage.setItem("user_email", localStorage.getItem("user_email"));
    sessionStorage.setItem("role", localStorage.getItem("role"));
    sessionStorage.setItem("location", localStorage.getItem("location"));
    sessionStorage.setItem("pillar", localStorage.getItem("pillar"));
    sessionStorage.setItem("phone", localStorage.getItem("phone"));
    sessionStorage.setItem("leader", localStorage.getItem("leader"));
    sessionStorage.setItem("LOB", localStorage.getItem("LOB"));

    //  console.log(this.state.statusTab);


    global.redirectUrl = window.location.href;
    if (global.selectedCategory == undefined) {
      global.selectedCategory = "ASSET";
    }
    //   if(global.selectedCategory=="ASSET"){
    //     var Title="Assets";
    //     // var TotalCount=this.state.AssetCount;
    //   }else{
    //     var Title="Wins";
    //     // var TotalCount=this.state.WinsCount;
    //   }
    var TotalWinCount = this.state.WinsCount;
    var TotalAssetCount = this.state.AssetCount;
     //alert(window.location.href);
    if(((window.location.href).indexOf("WSdetails") !=-1) || ((window.location.href).indexOf("details") !=-1) ){
      localStorage.setItem('assetDetailsDirect',window.location.href);
      //alert(window.location.href);
    }else{
      localStorage.setItem('assetDetailsDirect',window.location.href);
    }
    if ((localStorage.getItem('loginStatus') == undefined)) {
      //   window.location.href = "/"
     }
    // localStorage.setItem('redirectUrLPrev',window.location.href);
    // if ((localStorage.getItem('loginStatus') != undefined) && (localStorage.getItem('loginStatus') != null) && (localStorage.getItem('loginStatus') == "")) {
    // }else{
    //  window.location.href = "/"

    // }
    var getPage = window.location.href.split('/');
    if (getPage[3] === 'home') {
      global.statusTab = "";
    } else if (getPage[3] === 'MyAssets') {
      global.statusTab = "MYAssets";

    } else if (getPage[3] === 'Governance') {
      global.statusTab = "Governance";

    } else if (getPage[3] === 'MyWinStories') {
      global.statusTab = "MyWinStories";

    }
    else if (getPage[3] === 'Reports') {
      global.statusTab = "Reports";

    }
    else if (getPage[3] == 'WSdetails') {
      global.statusTab = "WSdetails";

    }
    else if (getPage[3] == 'helpSupport') {
      global.statusTab = 'helpSupport';
    }
    else {
      global.statusTab = "Details";
    }

    if(this.state.ErrorPage){
      return <Redirect push to="/error" />;

  }
  if(this.state.ErrorPage1){
      return <Redirect push to="/error?idcs=invalidData" />;

  }
  
 
  // if(document.getElementById('F-session')){
  //  alert(document.getElementById('F-session').value);

 // }
    return (
      <div >
        <Navbar variant="light">
        <input type="hidden" id="visited" name="visited" value="" />
        <input type="hidden" id="F-session"/>

          <Navbar.Brand href="/home" onClick={() => this.handleTab('')}>
            <img
              className="d-block clearfix logoImage"
              src="../img/Logo.png"
              alt="First slide"
              id="logoPanel"
            />

          </Navbar.Brand>
          <Nav className="ml-auto">
            <input type="text" id="header-container" />
            <Link to="/home" className={global.statusTab == '' || global.statusTab == undefined ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('')} >HOME</Link>
            <Link to="/MyAssets" className={global.statusTab == 'MYAssets' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('MYAssets')} >My ASSETS</Link>
            {sessionStorage.getItem('role').indexOf('winloader') != -1 && <Link to="/MyWinStories" className={global.statusTab == 'MyWinStories' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('MyWinStories')} >My Wins</Link>}
            {(sessionStorage.getItem('role').indexOf('reviewer') != -1 || sessionStorage.getItem('role').indexOf('admin') != -1) && <Link to="/Governance" className={global.statusTab == 'Governance' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('Governance')} >Governance</Link>}
            {/* {sessionStorage.getItem('role').indexOf('admin') !=-1  && <Link to="/Governance" className={global.statusTab == 'Governance' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('Governance')} >Governance</Link>} */}
            {sessionStorage.getItem('leader') == "true" && <Link to="/Reports" className={global.statusTab == 'Reports' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('Reports')} >Reports</Link>}
            <Link to="/helpSupport" className={global.statusTab == 'helpSupport' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('helpSupport')} >Help & Support</Link>
          </Nav>
          <Profile />
        </Navbar>

        <div className="carouselCover" >
          {/* { global.selectedCategory */}

          {((global.statusTab == '') || (global.statusTab == undefined)) ? (
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block imgHomeBanner w-100"
                  src="../img/Banner.png"
                  alt="Banner Image" />
                <Carousel.Caption className="text-left d-none d-sm-block">

                  <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "70%", display: "block", marginTop: "15px" }}>
                      <div>
                        <label style={{ fontFamily: "Georgia Bold !important", fontSize: "30px" }}>To Install the Mobile App from EMM</label>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ width: "10%" }}> <label style={{ color: "#F2A006", fontSize: "15px" }}>Step 1: </label></div>
                        <div style={{ width: "25%" }}>
                          <label style={{ color: "#c2c2c2", fontSize: "15px" }}>Scan QR Code </label>
                          <p style={{ marginTop: "-12px", color: "#c2c2c2" }}>https://getwsone.com/</p>
                        </div>
                        <div style={{ width: "33%" }}>
                          <img
                            src="../img/qrcode.png"
                            alt="qrcoe"
                            className="qrcode"
                          />
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ width: "10%" }}> <label style={{ color: "#F2A006", fontSize: "15px" }}>Step 2: </label></div>
                        <div style={{ width: "25%" }}>
                          <label style={{ color: "#c2c2c2", fontSize: "15px" }}>Enroll Your Device </label>
                        </div>
                        <div style={{ width: "33%" }}>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ width: "10%" }}> <label style={{ color: "#F2A006", fontSize: "15px" }}>Step 3: </label></div>
                        <div style={{ width: "27%" }}>
                          <label style={{ color: "#c2c2c2", fontSize: "15px" }}>Download & Install </label>
                        </div>
                        <div style={{ width: "33%" }}>
                          <img
                            src="../img/appicon.png"
                            alt="qrcoe"
                            className="mobileappIcon"
                          />
                        </div>
                      </div>

                    </div>
                    <div class="bRightContainer" style={{}}>

                      <div class="vRightContP" style={{}}>
                        <div class="flex">
                          <img src="../img/salesPlayWS.png" alt="qrcoe" class="bannerstoryIcon" />
                          <div class="innerSec" style={{}}>
                            <span>
                             North America FY21 Sales Play Workshops</span>
                            <div class="small mb-1 subsec" style={{}}>Video's / Workshops / Technical Proofs to penetrate<br /> 9000 non-cloud accounts and drive consumption.</div>
                            <span onClick={this.comingSoon} style={{ 'font-size': '12px', 'border-radius': "12px", 'margin-top': '6px', 'background': '#F3921F' }} title="coming soon" class="btn btn-primary btn-sm">Click Here</span>
                          </div>
                        </div>





                        {/* <div style={{ marginLeft: "10px", width: "34%", display: "block", textAlign: 'center' }}>
                          <div>
                            <img src="../img/salesPlayWS.png" alt="qrcoe" className="bannerstoryIcon" />
                            <div style={{ margin: "10px" }}>
                              <span style={{ fontSize: "15px" }}>Everything in one place</span>
                          </div>
                          </div> */}

                        {/* <div>
                            <p>
                              Explore all the Assets/Wins and its collaterals in one place
                          </p>
                          </div>  */}
                      </div>
                      {/* <div style={{ marginLeft: "10px", width: "30%", display: "block", textAlign: 'center' }}>
                          <div>
                            <img src="../img/homeicon2.png" alt="qrcoe" className="bannerstoryIcon" />
                          </div>
                          <div style={{ margin: "10px" }}>
                            <span style={{ fontSize: "15px" }}>Request for a demo</span>
                          </div>
                         
                        </div> */}
                      {/* <div style={{ marginLeft: "10px", width: "30%", display: "block", textAlign: 'center' }}>
                          <div>
                            <img src="../img/homeicon3.png" alt="qrcoe" className="bannerstoryIcon" />
                          </div>
                          <div style={{ margin: "10px" }}>
                            <span style={{ fontSize: "15px" }}>Personalised Home</span>
                          </div>
                         
                        </div> */}
                      {/* </div> */}
                      <div>

                      </div>
                    </div>
                  </div>
                  <div style={{ width: "85%", display: "flex", marginBottom: "25px", marginTop: "25px" }}>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <div className="bannerCard" onClick={() => this.linkOpen(global.Ip + global.Port + '/guide/NAC_Consumption_Infographic.pdf')}>
                        <img src="../img/Top_consuming_customers.png" alt="qrcoe" className="bannerstoryIconSmall" />
                        <span style={{ color: "#000", lineHeight: "1.2" }}>Top Consuming Customers</span>
                      </div>
                      <div className="bannerCard" onClick={() => this.linkOpen(global.Ip + global.Port + '/guide/NAC_Buyer_Infographic.pdf')}>
                        <img src="../img/Top_consuming_customers.png" alt="qrcoe" className="bannerstoryIconSmall" />
                        <span style={{ color: "#000", lineHeight: "1.2" }}>Top Booking Customers</span>
                      </div>
                      <div className="bannerCard" onClick={() => this.linkOpen('https://oradocs-corp.sites.us2.oraclecloud.com/authsite/site-cloud-oc/cloud-success-stories.html')}>
                        <img src="../img/Win_Slides.png" alt="qrcoe" className="bannerstoryIconSmall" />
                        <span style={{ color: "#000", lineHeight: "1.2" }}>NAC Consulting Wins & Go-Lives</span>
                      </div>
                      <div className="bannerCard" onClick={() => this.linkOpen(global.Ip + global.Port + '/guide/Customer_Ready.pdf')}>
                        <img src="../img/Win_Slides.png" alt="qrcoe" className="bannerstoryIconSmall" />
                        <span style={{ color: "#000", lineHeight: "1.2" }}>Customer Ready Slides</span>
                      </div>
                      <br />

                      <div className="bannerCard" onClick={() => this.linkOpen(global.Ip + global.Port + '/guide/Reference_Information.pdf')}>
                        <img src="../img/ReferenceAssets.png" alt="qrcoe" className="bannerstoryIconSmall" />
                        <span style={{ color: "#000", lineHeight: "1.2" }}>Reference Assets</span>
                      </div>
                      <div className="bannerCard" onClick={() => this.linkOpen(global.Ip + global.Port + '/guide/Resource_Information.pdf')}>
                        <img src="../img/ResourceAssets.png" alt="qrcoe" className="bannerstoryIconSmall" />
                        <span style={{ color: "#000", lineHeight: "1.2" }}>Resource Assets</span>
                      </div>

                    </div>
                    <div>

                    </div>
                  </div>


                  {/* <Row>
                    <Col sm={4} >
                      <h5>Assets</h5>
                      <p>Get a holistic overview of NAC’s assets and seamless access to Sales & SE teams</p>
                    </Col>
                    <Col sm={3} className="ml-auto">
                     <br /><h6><span className="ml-2 spanClickable"  onClick={this.winClick}><span className="countStyl colY ">{this.state.WinsCount}</span>  Wins</span> | <span className="mr-2 spanClickable" onClick={this.assetClick}> <span className="countStyl "  >{this.state.AssetCount}</span> Assets</span> </h6>
                      <p>All wins and assets are in one place</p>
                    </Col>
                  </Row> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          ) : ((global.statusTab == 'helpSupport')) ? (
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <img style={{ maxHeight: '225px' }}
                  className="d-block"
                  src="../img/Banner.png"
                  alt="Banner Image"

                />
                <Carousel.Caption className="text-left d-none d-sm-block">

                  <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "60%", display: "block", margin: "35px 6px" }}>
                      <div>
                        <label style={{ fontWeight: "600", fontSize: "30px", lineHeight: 'normal', marginBottom: '0px' }}>Need Help?</label>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ width: "40%" }} onClick={() => this.linkOpen('https://app.slack.com/client/TA8NTTZE0/CMHTP1AC8')}> <label style={{ fontSize: "20px" }}>Reach out to us on <b style={{ textDecoration: 'underline' }}>slack</b></label></div>

                      </div>
                    </div>
                    <div style={{ width: "50%", display: "block", margin: "25px 6px" }}>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginLeft: "10px", width: "30%", display: "block", textAlign: 'center' }}>
                          <div>
                            <img src="../img/homeicon1.png" style={{ width: '60px', marginBottom: '10px' }} alt="qrcoe" />
                          </div>
                          <div>
                            <span>Everything in one place</span>
                          </div>
                        </div>
                        <div style={{ marginLeft: "10px", width: "30%", display: "block", textAlign: 'center' }}>
                          <div>
                            <img src="../img/homeicon2.png" style={{ width: '60px', marginBottom: '10px' }} alt="qrcoe" />
                          </div>
                          <div>
                            <span>Request for a demo</span>
                          </div>
                        </div>
                        <div style={{ marginLeft: "10px", width: "30%", display: "block", textAlign: 'center' }}>
                          <div>
                            <img src="../img/homeicon3.png" style={{ width: '60px', marginBottom: '10px' }} alt="qrcoe" />
                          </div>
                          <div>
                            <span>Personalised Home</span>
                          </div>
                        </div>
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                  {/* <Row>
                    <Col sm={4} >
                      <h5>Assets</h5>
                      <p>Get a holistic overview of NAC’s assets and seamless access to Sales & SE teams</p>
                    </Col>
                    <Col sm={3} className="ml-auto">
                     <br /><h6><span className="ml-2 spanClickable"  onClick={this.winClick}><span className="countStyl colY ">{this.state.WinsCount}</span>  Wins</span> | <span className="mr-2 spanClickable" onClick={this.assetClick}> <span className="countStyl "  >{this.state.AssetCount}</span> Assets</span> </h6>
                      <p>All wins and assets are in one place</p>
                    </Col>
                  </Row> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          ) : (
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item>
                    <div style={{ height: "100px" }}>
                      <img
                        className="d-block detailImg"
                        src="../img/Banner_Small.png"
                        alt="First slide"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>)}

        </div>
      </div>

    )
  }
}

export default Header

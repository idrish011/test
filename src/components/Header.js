import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from "./profileDropdown";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form'

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
      ErrorPage1:'',
      msgError:'',
      BannerLinks: [],
      selectedBannerTab:'',
      BANNER_URL:''
    };
   

    
  }


  componentDidMount() {
   
    // alert(sessionStorage.getItem('role'));
    setTimeout(function () { 
    if((localStorage.getItem("user_email") != undefined)&& (localStorage.getItem("user_email") != "undefined") && (localStorage.getItem("user_email") != null)&&(localStorage.getItem("user_email") != "null") && (localStorage.getItem("user_email") != "")){
        document.getElementById('header-container').scrollIntoView();

      }
      
   }, 1000);
  //  function sessionCheck(email){

  //  // alert('1');
   
  //  }

    if ((localStorage.getItem("user_email") != undefined)&& (localStorage.getItem("user_email") != "undefined") && (localStorage.getItem("user_email") != null)&&(localStorage.getItem("user_email") != "null") && (localStorage.getItem("user_email") != "")) {
      document.getElementById('root').classList.remove('hide');
      if(localStorage.getItem('pathSetted')!="oTube"){
        localStorage.setItem('pathSetted',"oTube");
     var myWindow=  window.open("https://otube.oracle.com/embed/secure/iframe/entryId/1_xpp70qav/uiConfId/43012852/pbc/105282352","_blank");
  
      setTimeout(function () { myWindow.close(); }, 7000);
      }
      var reqParms = {
        "email": localStorage.getItem("user_email"),
        "user_email": localStorage.getItem("user_email")
      }
      


     
      sessionStorage.setItem("user_email",localStorage.getItem("user_email"));
      sessionStorage.setItem("user_name",localStorage.getItem("user_name"));

      var reqParms = {
        "email": localStorage.getItem("user_email"),
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
                    ErrorPage: true,
                    msgError:'user is not registered'
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
                ErrorPage: true,
                msgError:error

            });
        });





  } else {
   
    if(document.cookie && document.cookie.indexOf('ORA_UCM_INFO')!= -1){
      document.getElementById('root').classList.add('hide');

                  global.email = (document.cookie).match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)[0];
                   
                  localStorage.setItem("user_email", ((global.email).toLowerCase()));
                  // sessionStorage.setItem("user_name", global.name);
                  sessionStorage.setItem("user_email", ((global.email).toLowerCase()));
                  if ((localStorage.getItem("user_email") != undefined)&& (localStorage.getItem("user_email") != "undefined") && (localStorage.getItem("user_email") != null)&&(localStorage.getItem("user_email") != "null") && (localStorage.getItem("user_email") != "")) {
                    var reqParms = {
                      "email": localStorage.getItem("user_email"),
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
                                  ErrorPage: true,
                                  msgError:'user is not registered'

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
                              sessionStorage.setItem("leader", res.data.leader);
                              sessionStorage.setItem("user_name", res.data.name);

                              localStorage.setItem("role", res.data.role);
                              localStorage.setItem("location", res.data.location);
                              localStorage.setItem("pillar", res.data.pillar);
                              localStorage.setItem("phone", res.data.phone);
                              localStorage.setItem("leader", res.data.leader);
                              localStorage.setItem("user_name", res.data.name);

                              
                
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
                              ErrorPage: true,
                              msgError:error

                          });
                      });
                 
                 
                 
                 
                 
                 

                      axios.post(global.Ip + global.Port + '/user/captureactivity/w/login/' + sessionStorage.getItem("user_name") + '/' + sessionStorage.getItem("user_email")).then(res => {
                        setTimeout(function () { 
                          // var myWindow=  window.open("https://otube.oracle.com/embed/secure/iframe/entryId/1_xpp70qav/uiConfId/43012852/pbc/105282352", "myWindow", "width=5, height=5");

                          // setTimeout(function () { myWindow.close();}, 5000);
                          if(document.getElementById('F-session'))     {
                                            document.getElementById('F-session').value=sessionStorage.getItem("user_email");
                                            if(document.getElementById('F-session').value!=""){
                                              // alert(document.getElementById('F-session').value);
                                              window.location.href=window.location.href;
                                              
                                            }
                          }
                      }, 200);

                      })
                  }
         
        }else{
         // alert('test');
          document.getElementById('root').classList.add('hide');
         /* https://run.mocky.io/v3/3eb7001a-ba7c-45c6-b339-854bda8e3f94 ==== ANgan
            https://run.mocky.io/v3/156abd5c-7046-478c-8e7d-e11354682b9d ==== deepika
         global.baseDom + '/ssoheader.php'
         
         */
          axios.get(global.baseDom + '/ssoheader.php') 
          .then(res => {
              if (res.data.indexOf('<!DOCTYPE html>') == -1) {
                  var split = res.data.split('#');
                  if ((split[1] != "") && (split[1] != undefined) && (split[1] != null)) {
                      global.email = split[0].trim();
                      global.name = split[1].trim();
                  } else { }
                  localStorage.setItem("user_name", global.name);
                  localStorage.setItem("user_email", ((global.email).toLowerCase()));
                  sessionStorage.setItem("user_name", global.name);
                  sessionStorage.setItem("user_email", ((global.email).toLowerCase()));
                  if ((localStorage.getItem("user_email") != undefined)&& (localStorage.getItem("user_email") != "undefined") && (localStorage.getItem("user_email") != null)&&(localStorage.getItem("user_email") != "null") && (localStorage.getItem("user_email") != "")) {
                 
                    var reqParms = {
                      "email": localStorage.getItem("user_email"),
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
                                  ErrorPage: true,
                                  msgError:'user is not registered'

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
                              sessionStorage.setItem('user_name',res.data.name)
                              localStorage.setItem("role", res.data.role);
                              localStorage.setItem("location", res.data.location);
                              localStorage.setItem("pillar", res.data.pillar);
                              localStorage.setItem("phone", res.data.phone);
                              localStorage.setItem("leader", res.data.leader);
                              localStorage.setItem('user_name',res.data.name)
                
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
                              ErrorPage: true,
                              msgError:error
                          });
                      });
                 
                 
                 
                   

                      axios.post(global.Ip + global.Port + '/user/captureactivity/w/login/' + sessionStorage.getItem("user_name") + '/' + sessionStorage.getItem("user_email")).then(res => {
                        setTimeout(function () { 

                          
                          if(document.getElementById('F-session'))     {
                                            document.getElementById('F-session').value=sessionStorage.getItem("user_email");
                                            if(document.getElementById('F-session').value!=""){
                                              // alert(document.getElementById('F-session').value);
                                              //alert('test');
                                              window.location.href=window.location.href;
                                            }
                                             


                                            
                          }
                      }, 200);

                      })
                  }
              }

              else {
                  //  alert("Bad session, Sorry for the delayed response");
                  sessionStorage.clear();
                  localStorage.clear();
                  this.setState({
                      ErrorPage1: true,
                      msgError:"invalid IDCS data"

                  });
              }

          }




          ).catch(error => {
              //   alert(error+", Sorry for the delayed response");
              sessionStorage.clear();
              localStorage.clear();
              this.setState({
                  ErrorPage1: true,
                  msgError:error

              });
          });
        }

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
        const BannerLinks = res.data.bannerlinks;
        this.setState({ BannerLinks });
        // console.log(res.data);
        this.setState({ AssetCount: res.data.asset_Count, HubCount: res.data.hubs_Count, WinsCount: res.data.winstory_Count });
      })

    //}


  }
  onUploadClick = (e) => {
   if(global.CoverPhoto){
    var id=this.state.selectedBannerTab;
    axios.post(global.Ip + global.Port + '/asset/bannerimageupload/'+id, global.CoverPhoto, {
      headers: global.headerObj
    }).then(response => {

          alert(response.data.msg);
          axios.get(global.Ip + global.Port + '/asset/banner', {
            headers: {
              "user_email": sessionStorage.getItem('user_email')
      
            }
          }) .then(res => {
      
      
      
      
              
              global.totalUniqueVisitors = (res.data.visit[0].COUNT) + (res.data.visit[1].COUNT);
              const BannerLinks = res.data.bannerlinks;
              this.setState({ BannerLinks });
              // console.log(res.data);
              this.setState({ AssetCount: res.data.asset_Count, HubCount: res.data.hubs_Count, WinsCount: res.data.winstory_Count });
            })
          document.getElementById('upload-cover-photo').value="";
          document.getElementById("myModal").style.display = 'none';
          document.getElementById('uploadBoxBanner').style.display = 'none';  

      }).catch(error => {
        alert(error);
      })
   }else{
     alert('Please add document first');
     return false;
   }
   

  }
  UploadMediaFile = (e) => {
  //  console.log(e);
    e.preventDefault();
    var data = new FormData()
    var filename = e.target.files[0].name;
    var filesize = e.target.files[0].size;
    console.log(filename + filesize);
    var SplitExtn = filename.split('.');
    var tolowerextn = (SplitExtn[1].toLowerCase());
  
      //  if (filesize <= 500000 && (tolowerextn == 'png' || tolowerextn == 'jpg' || tolowerextn == 'jpeg')) {
            for (const file of e.target.files) {
                data.append('file', file, file.name)
                    var headerObj = {
                        "type": 'thumbnail',
                        "Content-Type": 'multipart/form-data',
                        "user_email": sessionStorage.getItem("user_email")
                    }
                    global.CoverPhoto = data;
                    global.headerObj = headerObj;
                    console.log(global.CoverPhoto);
                  }
               
          //  }
      /*  } else {
            if (filesize > 500000) {
                alert('Please upload image upto  500 kb');
                document.getElementById(e.target.getAttribute("id")).value = "";
                return false;
            }
            else {
                if (tolowerextn == 'png' || tolowerextn == 'jpg' || tolowerextn == 'jpeg') {
                }
                else {
                    alert('Please Upload either PNG or jpg/jpeg image');
                    document.getElementById(e.target.getAttribute("id")).value = "";
                    return false;

                }
            }
        }*/
   
   
    // if ((e.target.getAttribute("id") == "documents")) {
    //     for (const file of e.target.files) {
    //         data.append('file', file, file.name)
    //         this.state.documentdata.push(data);
    //     }
    // }
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
    window.open('http://salescentral.oracle.com/salesplay-workshops', '_blank');
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
  closePop() {
    document.getElementById("myModal").style.display = 'none';
    document.getElementById('uploadBoxBanner').style.display = 'none';
  }
  openEditPop(id,url) {
    // alert(id);
    this.setState({
      selectedBannerTab: id,
      BANNER_URL:url
    })
    
    document.getElementById("myModal").style.display = 'block';
    document.getElementById('uploadBoxBanner').style.display = 'block';  
    // document.getElementById('uploadedId').setAttribute('alt',id);

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
    if (getPage[3] === '') {
      global.statusTab = "";
    }
    else if (getPage[3] === 'home') {
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
      var url="/error?errorMsg="+this.state.msgError;
      return <Redirect push to={url}/>;

  }
  if(this.state.ErrorPage1){
    var url="/error?idcs=invalidData&errorMsg="+this.state.msgError;
      return <Redirect push to={url} />;

  }
  var BannerLinknew;

  BannerLinknew=this.state.BannerLinks;
  
  // if(document.getElementById('F-session')){
  //  alert(document.getElementById('F-session').value);

 // }
    return (
      <div >
                {/* <iframe class="V-hide" width="20" height="20" src="https://otube.oracle.com/embed/secure/iframe/entryId/1_xpp70qav/uiConfId/43012852/pbc/105282352" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        <Navbar variant="light">
        <input type="hidden" id="visited" name="visited" value="" />
        {/* <iframe class="V-hide" id="kmsembed-0_39k6jvkd" width="608" height="402" src="https://otube.oracle.com/embed/secure/iframe/entryId/1_x8m5gwd6/uiConfId/43012852" class="kmsembed" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" ></iframe> */}
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
            <Link to="/home" className={global.statusTab == '' || global.statusTab == undefined ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('')} ><i className={global.statusTab == '' || global.statusTab == undefined ? "icon-Home active" : "icon-Home"} title="Home"></i></Link>
            <Link to="/MyAssets" className={global.statusTab == 'MYAssets' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('MYAssets')} ><i className={global.statusTab == 'MYAssets' ? "icon-My-Assets active" : "icon-My-Assets"} onClick={() => this.handleTab('MYAssets')} title="My Assets"></i></Link>
            {sessionStorage.getItem('role').indexOf('winloader') != -1 && <Link to="/MyWinStories" className={global.statusTab == 'MyWinStories' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('MyWinStories')} ><i className={global.statusTab == 'MyWinStories' ? "icon-My-Wins active" : "icon-My-Wins"} title="My Wins"></i></Link>}
            {(sessionStorage.getItem('role').indexOf('reviewer') != -1 || sessionStorage.getItem('role').indexOf('admin') != -1) && <Link to="/Governance" className={global.statusTab == 'Governance' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('Governance')} ><i className={global.statusTab == 'Governance' ? "icon-Governance active" : "icon-Governance"} title="Governance"></i></Link>}
            {/* {sessionStorage.getItem('role').indexOf('admin') !=-1  && <Link to="/Governance" className={global.statusTab == 'Governance' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('Governance')} >Governance</Link>} */}
            {sessionStorage.getItem('leader') == "true" && <Link to="/Reports" className={global.statusTab == 'Reports' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('Reports')} ><i className={global.statusTab == 'Reports' ? "icon-Reports active" : "icon-Reports"} title="Reports"></i></Link>}
            <Link to="/helpSupport" className={global.statusTab == 'helpSupport' ? "nav-link active" : "nav-link"} onClick={() => this.handleTab('helpSupport')} ><i className={global.statusTab == 'helpSupport' ? "icon-Help-Support active" : "icon-Help-Support"} title="Help & Support"></i></Link>
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
                  <div class="bannerCover">
                      <div>
                        <label style={{ fontFamily: "Georgia Bold !important", fontSize: "30px" }}>Welcome To Asset Hub!</label>
                      </div>
                      






                      <Tabs defaultActiveKey="SalesResources" transition={false} id="BannerTabs">
                          <Tab eventKey="SalesResources" title="Sales Resources">
                            {/* <div className="headingText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</div> */}
                          <div style={{ display: "flex", marginBottom: "25px", marginTop: "25px" }}>
                              <div style={{ display: "flex", marginBottom: "10px" , 'flex-wrap': "wrap"}}>
                              {/*openEditPop onClick={() => this.linkOpen(global.Ip + global.Port + '/guide/NAC_Consumption_Infographic.pdf')} */}
                              {BannerLinknew.map((BannerLinknew,index)=> <>
                                {(sessionStorage.getItem('role').indexOf('winloader') == -1) ? (
           
                                    <>
                                    <div className="bannerCard" onClick={() => this.linkOpen(BannerLinknew.BANNER_URL)}>
                                      {/* <a href="javscript:void(0)"  >Edit</a> */}
                                      <img src={BannerLinknew.BANNER_ICON} alt="qrcoe" className="bannerstoryIconSmall" />
                                      <span style={{ color: "#000", lineHeight: "1.2" }}>{BannerLinknew.BANNER_TYPE}</span>
                                    </div>
                                    </>):(

                                      <>
                                      <div className="bannerCard" >
                                        {/* <a href="javscript:void(0)"  >Edit</a> */}
                                        <img src={BannerLinknew.BANNER_ICON} alt="qrcoe" className="bannerstoryIconSmall" />
                                        <span style={{ color: "#000", lineHeight: "1.2" }}>{BannerLinknew.BANNER_TYPE}</span>
                                        <div class="upload">
                                            <span class="text-right" onClick={() => this.linkOpen(BannerLinknew.BANNER_URL)}>View</span>
                                            <span class="pipe">|</span>
                                            <span class="text-left" onClick={() => this.openEditPop(BannerLinknew.BANNER_ID, BannerLinknew.BANNER_URL)}>Edit</span>
                                      </div>
                                      </div>
                                     

                                      </>


                                    )}
                                </>)}
                             </div>
                              <div>

                              </div>
                  </div>
                          
                          </Tab>
                          <Tab eventKey="FY21SalesPlay" title="FY21 Sales Play">
                        <div class="flex pt-3">
                          <img src="../img/salesPlayWS.png" alt="qrcoe" class="bannerstoryIcon" />
                          <div class="innerSec" style={{}}>
                            <span>
                             North America FY21 Sales Play Workshops</span>
                            <div class="small mb-1 subsec" style={{}}>Video's / Workshops / Technical Proofs to penetrate 9000 non-cloud accounts and drive consumption.</div>
                            <span onClick={this.comingSoon} style={{ 'font-size': '11px', 'border-radius': "12px", 'margin-top': '6px',color:'#000', 'background': '#F3921F','font-weight':'600' }} class="btn btn-primary btn-sm">Click Here</span>
                          </div>
                        </div>                          </Tab>
                        <Tab eventKey="MobileAppGuide" title="Mobile App Guide">
                          <div class="flex appEmm">
                            <div class="pt-4 flex">
                              <div class="step"> Step 1</div>
                              <div class="ml-2">
                                <label style={{ color: "#c2c2c2"}}>Scan QR Code </label>
                                <p style={{ marginTop: "-4px", color: "#c2c2c2" }}>https://getwsone.com/</p>
                              </div>
                              <div class="ml-4">
                                <img
                                  src="../img/qrcode.png"
                                  alt="qrcoe"
                                  className="qrcode"
                                />
                              </div>
                            </div>
                            <div class="pt-4 flex">
                              <div class="step"> Step 2</div>
                              <div class="ml-2">
                                <label style={{ color: "#c2c2c2"}}>Enroll Your Device </label>
                              </div>
                              <div>
                              </div>
                            </div>
                            <div class="pt-4 flex">
                              <div class="step">Step 3</div>
                              <div class="ml-2">
                                <label style={{ color: "#c2c2c2"}}>Download & Install </label>
                              </div>
                              <div class="ml-3">
                                <img
                                  src="../img/appicon.png"
                                  alt="qrcoe"
                                  className="mobileappIcon"
                                />
                              </div>
                            </div>                          
                          </div>
                        </Tab>
                     </Tabs>    
                  
                  

                  </div>
                 
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
        {/* <input type="text" id="uploadedId" value=""/> */}

        <div id="myModal" class="modal">


          <div class="modal-content" style={{'width':'40%',"padding":'5px'}}>

          <div class="modal-header"style={{'margin':'-5px'}}>
             <h5>Upload File</h5>
             <span class="closePop text-right" onClick={() => this.closePop()}>&times;</span>

        </div>
           
            <p id="uploadBoxBanner"> <Form.Group as={Col} md={12} >
                                            {/* <a className="pd-2 primary-link" md={5} href="javascript:void(0)"  onClick={() => this.linkOpen(this.state.BANNER_URL)}><img src="../img/BannerView-icon.jpg" style={{'width':'40px'}}/></a> */}
                                           <div >
                                            {/* <Form.Label>Upload File <span title="Upload the default file that would be displayed as link for the tab.">&#x1f6c8;</span></Form.Label> */}
                                             <br/> {/* <label for="upload-photo">Browse...</label> */}

                                                <input type="file" encType="multipart/form-data" name="file" id="upload-cover-photo" onChange={e => this.UploadMediaFile(e)} />

                                            
                                            
                                            <a variant="primary" id="uploadedId" href="javscript:void(0);" className="text-center mb20 CreateAsset" onClick={(e) => this.onUploadClick(e)} type="submit">
                                               Upload
                                            </a>
                                            </div>
                                        </Form.Group>
                                        </p>
          </div>

      </div>           
      </div>

    )
  }
}

export default Header

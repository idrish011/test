import React, { Component } from 'react'
import {
    Redirect
} from "react-router-dom";
import axios from 'axios';
export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoginName: '',
            LoginPwd: '',
            LoginSuccess: '',
            ErrorPage:'',
            ErrorPage1:''
        };
        localStorage.setItem('user_email', 'deepika.r@oracle.com');
        localStorage.setItem('user_name', 'Deepika R');
    }
    componentDidMount() {
        // global.selectedcheckbox="";
        // document.getElementById('Loader').classList.add('hide');

        // alert(global.loginStatus);
         
        // alert('1');
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






    }
    render() {
        if (this.state.LoginSuccess) {
            // alert("localStorage"+localStorage.getItem('assetDetailsDirect'));
            // alert(window.location.href+'landing url');
            
            if(((localStorage.getItem('assetDetailsDirect')).indexOf("WSdetails") !=-1) || ((localStorage.getItem('assetDetailsDirect')).indexOf("details") !=-1) && (localStorage.getItem('assetDetailsDirect')!=undefined) && (localStorage.getItem('assetDetailsDirect')!="") && (localStorage.getItem('assetDetailsDirect')!=null)){
              
              
                window.location.href=localStorage.getItem('assetDetailsDirect');

            }else{
            //     window.location.href="/home";
                   return <Redirect push to="/home" />;
            }
            // if(localStorage.getItem('redirectUrLPrev') && ){
            //     window.location.href=localStorage.getItem('redirectUrLPrev');
            // }else{

           // }
        }
        if(this.state.ErrorPage){
            return <Redirect push to="/error" />;

        }
        if(this.state.ErrorPage1){
            return <Redirect push to="/error?idcs=invalidData" />;

        }
        return (
            <div></div>
        )
    }
}

export default Footer

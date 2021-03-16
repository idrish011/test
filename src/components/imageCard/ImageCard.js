import React, { Component } from 'react'
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Moment from 'react-moment';
import axios from 'axios';
 /* eslint-disable */ 
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
export class ImageCard extends Component {
    state = {
        AssetData: [],
        winData: [],
        consumingStatus:'',
        redirectPage: '', AssetID: '', redirectEditPage: '', classDeploy: '', redirectDeployPage: '', redirectWinPage: '', winID: '',
        assetMsg: 'No matched record are available for your search yet',
        url:global.Ip + global.Port+"/winstory/getAllWinStoryByFilters"
        // WinMsg:'No matched record are available for your search yet'
    }
    componentDidMount() {
        var referenceStatus;
            //alert(global.referenceStatus);
             if ((global.referenceStatus =='yes')) {
                 referenceStatus = 'yes';
                 // SearchedParams='Search result is For Filters: ' +data + 'Search '+Searchdata;
     
             } else {
                 referenceStatus = 'no';
                 // SearchedParams='Search result is For Filters: ' +data;
             }
        // alert(global.selectedcheckbox);
      /*  if ((global.selectedcheckbox != "")&&(global.selectedcheckbox != undefined)&& (global.selectedcheckbox != null)) {
        //    if(global.selectedcheckbox == undefined){
        //     global.selectedcheckbox=localStorage.getItem('selectedFilters');
        //    }else{
        //     global.selectedcheckbox=global.selectedcheckbox;
        //    }
            // if (global.selectedcheckbox != undefined) {
            // var selectedVal=global.selectedcheckbox;
            // //global.selectedcheckbox="";
            // var arrFilter=(selectedVal).split(',');
            // for(var i=0;i<arrFilter.length;i++){
            //     alert(arrFilter[i]);
            //     setTimeout(function () { document.getElementById('ZeOpqutb38vb5Q').click(); }, 2000);

            // // document.getElementById(arrFilter[i]).click();
            // }
            // }




            

            //  alert(sessionStorage.getItem("user_email"));
            if ((sessionStorage.getItem('user_email') != "") && (sessionStorage.getItem('user_email') != null) && (sessionStorage.getItem('user_email') != undefined)) {
                global.assetData = undefined;
                axios.get(global.Ip + global.Port + '/asset/allAssetsFilters', {
                    headers: {
                        filters: global.selectedcheckbox,
                        "offset": 0,
                        "limit": -1,
                        sortBy: "createdDate",
                        order: "desc",
                        "ref":referenceStatus,
                        "user_email": sessionStorage.getItem("user_email")

                    }
                })
                    .then(res => {
                        //   console.log(res.data);
                        const AssetData = res.data.ASSETS;
                        global.AssetCount = res.data.TOTALCOUNT;

                        this.setState({ AssetData });
                    })
                global.winData = undefined;

                //   var mainUrl=global.Ip + global.Port + '/winstory/getAllWinStoryByFilters';
                //   var header= {
                //           "offset":0,
                //           "limit":-1,
                //           "searchString":Searchdata,
                //           "filters":SplitCat[0]
                //       }
                axios.get(global.Ip + global.Port + '/winstory/getAllWinStoryByFilters', {
                    headers: {
                        filters: global.selectedcheckbox,
                        limit: -1,
                        offset: 0,
                        sortBy: "createdDate",
                        order: "desc",
                        "ref":referenceStatus,
                        "user_email": sessionStorage.getItem("user_email")

                    }
                })
                    .then(res => {
                        //    console.log(res.data);
                        //    alert('1');
                        const winData = res.data.WINSTORIES;
                        global.WinCount = res.data.TOTALCOUNT;
                        this.setState({ winData });
                    })

            }





        }else if((global.selectedDropdownContract != "")&&(global.selectedDropdownContract != undefined)&&(global.selectedDropdownContract != null)) {
                //    if(global.selectedcheckbox == undefined){
                //     global.selectedcheckbox=localStorage.getItem('selectedFilters');
                //    }else{
                //     global.selectedcheckbox=global.selectedcheckbox;
                //    }
                    // if (global.selectedcheckbox != undefined) {
                    // var selectedVal=global.selectedcheckbox;
                    // //global.selectedcheckbox="";
                    // var arrFilter=(selectedVal).split(',');
                    // for(var i=0;i<arrFilter.length;i++){
                    //     alert(arrFilter[i]);
                    //     setTimeout(function () { document.getElementById('ZeOpqutb38vb5Q').click(); }, 2000);
        
                    // // document.getElementById(arrFilter[i]).click();
                    // }
                    // }
        
        
        
        
                    
        
                    //  alert(sessionStorage.getItem("user_email"));
                    if ((sessionStorage.getItem('user_email') != "") && (sessionStorage.getItem('user_email') != null) && (sessionStorage.getItem('user_email') != undefined)) {
                        global.assetData = undefined;
                        axios.get(global.Ip + global.Port + '/asset/allAssetsFilters', {
                            headers: {
                                "searchString": global.selectedDropdownContract,

                                "offset": 0,
                                "limit": -1,
                                sortBy: "createdDate",
                                order: "desc",
                                "ref":referenceStatus,
                                "user_email": sessionStorage.getItem("user_email")
        
                            }
                        })
                            .then(res => {
                                //   console.log(res.data);
                                const AssetData = res.data.ASSETS;
                                global.AssetCount = res.data.TOTALCOUNT;
        
                                this.setState({ AssetData });
                            })
                        global.winData = undefined;
        
                        //   var mainUrl=global.Ip + global.Port + '/winstory/getAllWinStoryByFilters';
                        //   var header= {
                        //           "offset":0,
                        //           "limit":-1,
                        //           "searchString":Searchdata,
                        //           "filters":SplitCat[0]
                        //       }
                        axios.get(global.Ip + global.Port + '/winstory/getAllWinStoryByFilters', {
                            headers: {
                                "searchString": global.selectedDropdownContract,

                                limit: -1,
                                offset: 0,
                                sortBy: "createdDate",
                                order: "desc",
                                "ref":referenceStatus,
                                "user_email": sessionStorage.getItem("user_email")
        
                            }
                        })
                            .then(res => {
                                //    console.log(res.data);
                                //    alert('1');
                                const winData = res.data.WINSTORIES;
                                global.WinCount = res.data.TOTALCOUNT;
                                this.setState({ winData });
                            })
        
                    }
        
        
        
        
        
                
        }else */
        
        
        if(((global.selectedDropdownContract != "")&&(global.selectedDropdownContract != undefined)&&(global.selectedDropdownContract != null) )|| ((global.selectedcheckbox != "") &&(global.selectedcheckbox != undefined) && (global.selectedcheckbox != null))) {
           if(global.selectedDropdownContract==undefined){
            global.selectedDropdownContract="";
           } if(global.selectedcheckbox==undefined){
            global.selectedcheckbox="";
           }
            //    if(global.selectedcheckbox == undefined){
            //     global.selectedcheckbox=localStorage.getItem('selectedFilters');
            //    }else{
            //     global.selectedcheckbox=global.selectedcheckbox;
            //    }
                // if (global.selectedcheckbox != undefined) {
                // var selectedVal=global.selectedcheckbox;
                // //global.selectedcheckbox="";
                // var arrFilter=(selectedVal).split(',');
                // for(var i=0;i<arrFilter.length;i++){
                //     alert(arrFilter[i]);
                //     setTimeout(function () { document.getElementById('ZeOpqutb38vb5Q').click(); }, 2000);
    
                // // document.getElementById(arrFilter[i]).click();
                // }
                // }
    
    
    
    
                
    
                //  alert(sessionStorage.getItem("user_email"));
                if ((sessionStorage.getItem('user_email') != "") && (sessionStorage.getItem('user_email') != null) && (sessionStorage.getItem('user_email') != undefined)) {
                    global.assetData = undefined;
                    axios.get(global.Ip + global.Port + '/asset/allAssetsFilters', {
                        headers: {
                            "searchString": global.selectedDropdownContract,
                            filters: global.selectedcheckbox,

                            "offset": 0,
                            "limit": -1,
                            sortBy: "createdDate",
                            order: "desc",
                            "ref":referenceStatus,
                            "user_email": sessionStorage.getItem("user_email")
    
                        }
                    })
                        .then(res => {
                            //   console.log(res.data);
                            const AssetData = res.data.ASSETS;
                            global.AssetCount = res.data.TOTALCOUNT;
    
                            this.setState({ AssetData });
                        })
                    global.winData = undefined;
    
                    //   var mainUrl=global.Ip + global.Port + '/winstory/getAllWinStoryByFilters';
                    //   var header= {
                    //           "offset":0,
                    //           "limit":-1,
                    //           "searchString":Searchdata,
                    //           "filters":SplitCat[0]
                    //       }
                    axios.get(global.Ip + global.Port + '/winstory/getAllWinStoryByFilters', {
                        headers: {
                            "searchString": global.selectedDropdownContract,
                            filters: global.selectedcheckbox,

                            limit: -1,
                            offset: 0,
                            sortBy: "createdDate",
                            order: "desc",
                            "ref":referenceStatus,
                            "user_email": sessionStorage.getItem("user_email")
    
                        }
                    })
                        .then(res => {
                            //    console.log(res.data);
                            //    alert('1');
                            const winData = res.data.WINSTORIES;
                            global.WinCount = res.data.TOTALCOUNT;
                            this.setState({ winData });
                        })
    
                }
    
    
    
    
    
            
    } else {
           // alert(sessionStorage.getItem('user_email')+"testing");
            // alert('1');
            if ((sessionStorage.getItem('user_email') != "")&& (sessionStorage.getItem('user_email') != "null") && (sessionStorage.getItem('user_email') != null) && (sessionStorage.getItem('user_email') != undefined)) {
                global.assetData = undefined;
                axios.get(global.Ip + global.Port + '/asset/allAssetsFilters', {
                    headers: {
                        "offset": 0,
                        "limit": -1,
                        sortBy: "createdDate",
                        order: "desc",
                        "ref":referenceStatus,
                        "user_email": sessionStorage.getItem("user_email")

                    }
                })
                    .then(res => {
                        //   console.log(res.data);
                        const AssetData = res.data.ASSETS;
                        global.AssetCount = res.data.TOTALCOUNT;

                        this.setState({ AssetData });
                    })
                global.winData = undefined;

                //   var mainUrl=global.Ip + global.Port + '/winstory/getAllWinStoryByFilters';
                //   var header= {
                //           "offset":0,
                //           "limit":-1,
                //           "searchString":Searchdata,
                //           "filters":SplitCat[0]
                //       }
                axios.get(global.Ip + global.Port + '/winstory/getAllWinStoryByFilters', {
                    headers: {
                        limit: -1,
                        offset: 0,
                        sortBy: "createdDate",
                        order: "desc",
                        "ref":referenceStatus,
                        "user_email": sessionStorage.getItem("user_email")

                    }
                })
                    .then(res => {
                        //    console.log(res.data);
                        //    alert('1');
                        const winData = res.data.WINSTORIES;
                        global.WinCount = res.data.TOTALCOUNT;
                        this.setState({ winData });
                    })

            }
        }
        global.referenceStatus=referenceStatus;
        document.getElementById('dropdown-basic').innerHTML = 'Recently Added';

        document.getElementById('Loaderbk').classList.add('hide');

    }
    getConsumingWin = (e) => {
        global.loader="show";   
        document.getElementById('Loader').classList.remove('hide');

// alert("test");
        //     alert(e);
             var status="";
             if(e=="yes"){
                 status="no";
             }else{
                 status="yes"; 
             }
              // alert(status) ;
             this.setState({
                 consumingStatus: status
             })
             //alert(this.state.consumingStatus);
             global.referenceStatus=status;
             var SearchedParams="";
             var Searchdata = "";
         if (global.selectedDropdownContract != undefined) {
             Searchdata = global.selectedDropdownContract;
             // SearchedParams='Search result is For Filters: ' +data + 'Search '+Searchdata;
 
         } else {
             Searchdata = '';
             // SearchedParams='Search result is For Filters: ' +data;
         }
         var ValSortBy = "";
         if (global.selectedSortOption != undefined) {
             ValSortBy = global.selectedSortOption;
             var offsetLimit = 20;
         } else {
             ValSortBy = "createdDate";
             var offsetLimit = -1;
 
         }
         var referenceStatus;
        // alert(global.referenceStatus);
         if ((global.referenceStatus =='yes')) {
             referenceStatus = 'yes';
             // SearchedParams='Search result is For Filters: ' +data + 'Search '+Searchdata;
 
         } else {
             referenceStatus = 'no';
             // SearchedParams='Search result is For Filters: ' +data;
         }
         var filterdata;
         if (global.selectedcheckbox != undefined) {
             filterdata = global.selectedcheckbox;
         } else {
             filterdata = '';
         }
        //  alert(ValSortBy);

         if ((filterdata.indexOf('fd5k53p09dl') != -1) && (filterdata.indexOf('170k5dr4xvz') == -1)) {
            var mainWinUrl = 'winstory/getAllWinStoryByFilters';

            //}
            if (ValSortBy == "likes") {
                var SelectedTargetVal = "Most Liked";
                var SelectedVal = "likes";
                global.LobMsg = "";
                global.referenceStatus ='no';
                global.showreference="false";



            } else if (ValSortBy == "Most Viewed") {
                var SelectedTargetVal = "Most Viewed";
                var SelectedVal = "views";
                global.LobMsg = "";
                global.referenceStatus ='no';
                global.showreference="false";


            } else if (ValSortBy == "createdDate") {
                var SelectedTargetVal = "Recently Added";
                var SelectedVal = "createdDate";
                global.LobMsg = "";
                global.showreference="true";


            } else if (ValSortBy == "LOBDATA") {
                var SelectedTargetVal = "LOB Recommendations";

                var SelectedVal = "LOBDATA";
                global.LobMsg = "LOB";
                global.referenceStatus ='no';

            }
            else {
                var SelectedVal = "Suggestions";
                var SelectedTargetVal = "Suggestions For You";
                global.referenceStatus ='no';
                global.showreference="false";



            }
            global.targetVal=SelectedTargetVal;
            document.getElementById('dropdown-basic').innerHTML = '' + SelectedTargetVal;

            if (SelectedVal != "Suggestions" && SelectedVal != "LOBDATA") {
                var SortUrl = global.Ip + global.Port + '/' + mainWinUrl;
                var SortHeader = {
                    "offset": 0,
                    "limit": -1,
                    "order": 'desc',
                    "sortBy": SelectedVal,
                    "searchString": Searchdata,
                    "filters": filterdata,
                    "ref":referenceStatus,
                    "user_email": sessionStorage.getItem("user_email")
                }
                this.setState({
                    disabledUI: false,
                    disabletabs: false

                })

            } else if (SelectedVal == "LOBDATA") {//http://129.213.212.175:8001/winstory/filterWinsbylob/deepika.r@oracle.com
                var SortUrl = global.Ip + global.Port + '/winstory/filterWinsbylob';
                var SortHeader = {
                    offset: 0,
                    limit: -1,
                    sortBy: "createdDate",
                    order: "desc",
                    "ref":referenceStatus,
                    user_email: sessionStorage.getItem('user_email'),
                    searchString: Searchdata,
                    filters: filterdata
                }
                this.setState({
                    disabledUI: true,
                    disabletabs: false

                })
            }

            else {
                var SortUrl = global.Ip + global.Port + '/winstory/allPrefferedWins/' + sessionStorage.getItem('user_email');
                var SortHeader = {
                    offset: 0,
                    limit: -1,
                    sortBy: "createdDate",
                    order: "desc",
                    "ref":referenceStatus,
                    user_email: sessionStorage.getItem('user_email'),
                    searchString: Searchdata,
                    filters: filterdata
                }
                this.setState({
                    disabledUI: true,
                    disableTabs: true

                })
            }

            axios.get(SortUrl, {
                headers: SortHeader
            })
                .then(resWin => {
                    document.getElementById('Loader').classList.add('hide');
                    // document.getElementById('dataAssetShow').classList.remove('hide');

                    //   global.assetData=res.data.ASSETS;

                    // if(SplitCat[1]=="WIN"){
                    //     global.assetData=res.data.WINSTORIES;
                    //     global.assetCount="Win Stories (" +res.data.TOTALCOUNT +")";
                    // }else{
                    global.winData = resWin.data.WINSTORIES;
                    // global.assetCount="Win Stories (" + res.data.TOTALCOUNT +")";

                    // var msg;
                    // if(global.winData.length==0){
                    //         msg='No Record found.';
                    //         document.getElementById('dataWinShow').classList.add('hide');

                    // }else{
                    //         msg=''; 
                    //         document.getElementById('dataWinShow').classList.remove('hide');

                    // }
                    // global.assetData=res.data.ASSETS;
                    // global.assetCount="Asset (" +res.data.TOTALCOUNT + ")";


                    //}

                    // var msg;
                    // if(global.assetData.length==0){
                    //     msg='No Record found.';
                    //     document.getElementById('dataAssetShow').classList.add('hide');

                    // }else{
                    //     msg=''; 
                    //     document.getElementById('dataAssetShow').classList.remove('hide');

                    // }
                    //   alert(res.data.TOTALCOUNT);
                    //     if( global.winData!="" && global.winData!=undefined){
                    //         var CountTotal=global.assetCount
                    //     }
                    //     else{
                    //     var CountTotal=0;   

                    // }
                    this.setState({
                        winData: resWin.data.ASSETS,
                        // errorMsg:msg,
                        // filterData:filterdata,
                        assetTitle: 'Search Result'
                    })
                })
            global.assetData = [];
            this.setState({
                assetData: [],
                // assetDataCount: global.assetCount,
                // errorMsg:msg,
                searchParamResult: "SearchedParams",
                assetTitle: 'Search Result'
            })

        } else if ((filterdata.indexOf('170k5dr4xvz') != -1) && (filterdata.indexOf('fd5k53p09dl') == -1)) {
            var mainUrl = 'asset/allAssetsFilters';

            //}
            var SelectedVal = "";
            // var SelectedVal = "";
            if (ValSortBy == "likes") {
                var SelectedTargetVal = "Most Liked";
                var SelectedVal = "likes";
                global.LobMsg = "";
                global.referenceStatus ='no';
                global.showreference="false";



            } else if (ValSortBy == "Most Viewed") {
                var SelectedTargetVal = "Most Viewed";
                var SelectedVal = "views";
                global.LobMsg = "";
                global.referenceStatus ='no';
                global.showreference="false";



            } else if (ValSortBy == "createdDate") {
                var SelectedTargetVal = "Recently Added";
                var SelectedVal = "createdDate";
                global.LobMsg = "";
                global.showreference="true";



            } else if (ValSortBy == "LOBDATA") {
                var SelectedTargetVal = "LOB Recommendations";
                global.LobMsg = "LOB";
                var SelectedVal = "LOBDATA";
                global.referenceStatus ='no';
                global.showreference="false";


            }
            else {
                var SelectedVal = "Suggestions";
                var SelectedTargetVal = "Suggestions For You";
                global.referenceStatus ='no';
                global.showreference="false";



            }
            global.targetVal=SelectedTargetVal;
            document.getElementById('dropdown-basic').innerHTML = '' + SelectedTargetVal;

            if (SelectedVal != "Suggestions" && SelectedVal != "LOBDATA") {
                var SortUrl = global.Ip + global.Port + '/' + mainUrl;
                var SortHeader = {
                    "offset": 0,
                    "limit": -1,
                    "order": 'desc',
                    "ref":referenceStatus,
                    "sortBy": SelectedVal,
                    "searchString": Searchdata,
                    "filters": filterdata,
                    "user_email": sessionStorage.getItem("user_email")
                }
                this.setState({
                    disabledUI: false,
                    disabletabs: false

                })
                global.sortByval = SelectedVal;

            } else if (SelectedVal == "LOBDATA") {
                var SortUrl = global.Ip + global.Port + '/asset/assetbylob/' + sessionStorage.getItem('LOB');
                var SortHeader = {
                    "offset": 0,
                    "limit": -1,
                    sortBy: "createdDate",
                    order: "desc",
                    "ref":referenceStatus,
                    "user_email": sessionStorage.getItem("user_email"),
                    "searchString": Searchdata,
                    "filters": filterdata
                }
                this.setState({
                    disabledUI: true,
                    disabletabs: false

                })
            }

            else {
                var SortUrl = global.Ip + global.Port + '/asset/allPrefferedAssets/' + sessionStorage.getItem('user_email'); //
                var SortHeader = {
                    offset: 0,
                    limit: -1,
                    sortBy: "createdDate",
                    order: "desc",
                    "ref":referenceStatus,
                    user_email: sessionStorage.getItem("user_email"),
                    searchString: Searchdata,
                    filters: filterdata
                }
                this.setState({
                    disabledUI: true,
                    disableTabs: true,
                })
            }

            axios.get(SortUrl, {
                headers: SortHeader
            })
                .then(res => {
                    document.getElementById('Loader').classList.add('hide');
                    // document.getElementById('dataAssetShow').classList.remove('hide');

                    //   global.assetData=res.data.ASSETS;

                    // if(SplitCat[1]=="WIN"){
                    //     global.assetData=res.data.WINSTORIES;
                    //     global.assetCount="Win Stories (" +res.data.TOTALCOUNT +")";
                    // }else{
                    global.assetData = res.data.ASSETS;
                    global.assetCount = "Asset (" + res.data.TOTALCOUNT + ")";


                    //}

                    // var msg;
                    // if(global.assetData.length==0){
                    //     msg='No Record found.';
                    //     document.getElementById('dataAssetShow').classList.add('hide');

                    // }else{
                    //     msg=''; 
                    //     document.getElementById('dataAssetShow').classList.remove('hide');

                    // }
                    //   alert(res.data.TOTALCOUNT);
                    if (global.assetCount != "" && global.assetCount != undefined) {
                        var CountTotal = global.assetCount
                    }
                    else {
                        var CountTotal = 0;

                    }
                    this.setState({
                        assetData: global.assetData,
                        assetDataCount: CountTotal,
                        // errorMsg:msg,
                        // filterData:filterdata,
                        assetTitle: 'Search Result'
                    })
                    global.winData = [];
                    this.setState({
                        winData: [],
                        // assetDataCount: global.assetCount,
                        // errorMsg:msg,
                        searchParamResult: "SearchedParams",
                        assetTitle: 'Search Result'
                    })
                })

            global.assetData = [];
            this.setState({
                assetData: [],
                // assetDataCount: global.assetCount,
                // errorMsg:msg,
                searchParamResult: "SearchedParams",
                assetTitle: 'Search Result'
            })
        } else {
            var mainUrl = 'asset/allAssetsFilters';

            //}
            var SelectedVal = "";
            if (ValSortBy == "likes") {
                var SelectedTargetVal = "Most Liked";
                var SelectedVal = "likes";
                global.LobMsg = "";
                global.referenceStatus ='no';
                global.showreference="false";



            } else if (ValSortBy == "Most Viewed") {
                var SelectedTargetVal = "Most Viewed";
                var SelectedVal = "views";
                global.LobMsg = "";
                global.referenceStatus ='no';
                global.showreference="false";



            } else if (ValSortBy == "createdDate") {
                var SelectedTargetVal = "Recently Added";
                var SelectedVal = "createdDate";
                global.LobMsg = "";
                global.showreference="true";


            } else if (ValSortBy == "LOBDATA") {
                var SelectedTargetVal = "LOB Recommendations";
                global.LobMsg = "LOB";
                var SelectedVal = "LOBDATA";
                global.referenceStatus ='no';
                global.showreference="false";


            }
            else {
                var SelectedVal = "Suggestions";
                var SelectedTargetVal = "Suggestions For You";
                global.referenceStatus ='no';
                global.showreference="false";



            }
            global.targetVal=SelectedTargetVal;
            document.getElementById('dropdown-basic').innerHTML = '' + SelectedTargetVal;

            if (SelectedVal != "Suggestions" && SelectedVal != "LOBDATA") {
                var SortUrl = global.Ip + global.Port + '/' + mainUrl;
                var SortHeader = {
                    "offset": 0,
                    "limit": -1,
                    "order": 'desc',
                    "sortBy": SelectedVal,
                    "ref":referenceStatus,
                    "searchString": Searchdata,
                    "filters": filterdata,
                    "user_email": sessionStorage.getItem("user_email")
                }
                this.setState({
                    disabledUI: false,
                    disabletabs: false

                })
                global.sortByval = SelectedVal;

            } else if (SelectedVal == "LOBDATA") {
                var SortUrl = global.Ip + global.Port + '/asset/assetbylob/' + sessionStorage.getItem('LOB');
                var SortHeader = {
                    "offset": 0,
                    "limit": -1,
                    "sortBy": "createdDate",
                    "order": "desc",
                    "ref":referenceStatus,
                    "user_email": sessionStorage.getItem("user_email"),
                    "searchString": Searchdata,
                    "filters": filterdata
                }
                this.setState({
                    disabledUI: true,
                    disabletabs: false

                })
            }

            else {
                var SortUrl = global.Ip + global.Port + '/asset/allPrefferedAssets/' + sessionStorage.getItem('user_email'); //
                var SortHeader = {
                    offset: 0,
                    limit: -1,
                    sortBy: "createdDate",
                    order: "desc",
                    "ref":referenceStatus,
                    user_email: sessionStorage.getItem("user_email"),
                    searchString: Searchdata,
                    filters: filterdata
                }
                this.setState({
                    disabledUI: true,
                    disableTabs: true,

                })
            }

            axios.get(SortUrl, {
                headers: SortHeader
            })
                .then(res => {
                    document.getElementById('Loader').classList.add('hide');
                    // document.getElementById('dataAssetShow').classList.remove('hide');

                    //   global.assetData=res.data.ASSETS;

                    // if(SplitCat[1]=="WIN"){
                    //     global.assetData=res.data.WINSTORIES;
                    //     global.assetCount="Win Stories (" +res.data.TOTALCOUNT +")";
                    // }else{
                    global.assetData = res.data.ASSETS;
                    global.assetCount = "Asset (" + res.data.TOTALCOUNT + ")";


                    //}

                    // var msg;
                    // if(global.assetData.length==0){
                    //     msg='No Record found.';
                    //     document.getElementById('dataAssetShow').classList.add('hide');

                    // }else{
                    //     msg=''; 
                    //     document.getElementById('dataAssetShow').classList.remove('hide');

                    // }
                    //   alert(res.data.TOTALCOUNT);
                    if (global.assetCount != "" && global.assetCount != undefined) {
                        var CountTotal = global.assetCount
                    }
                    else {
                        var CountTotal = 0;

                    }
                    this.setState({
                        assetData: global.assetData,
                        assetDataCount: CountTotal,
                        // errorMsg:msg,
                        // filterData:filterdata,
                        assetTitle: 'Search Result'
                    })
                })
            var mainWinUrl = 'winstory/getAllWinStoryByFilters';

            //}
            var SelectedVal = "";
            if (ValSortBy == "likes") {
                var SelectedTargetVal = "Most Liked";
                var SelectedVal = "likes";
                global.LobMsg = "";
                global.referenceStatus ='no';
                global.showreference="false";


                

            } else if (ValSortBy == "Most Viewed") {
                var SelectedTargetVal = "Most Viewed";
                var SelectedVal = "views";
                global.LobMsg = "";
                global.referenceStatus ='no';
                global.showreference="false";



            } else if (ValSortBy == "createdDate") {
                var SelectedTargetVal = "Recently Added";
                var SelectedVal = "createdDate";
                global.LobMsg = "";
                global.showreference="true";


            } else if (ValSortBy == "LOBDATA") {
                var SelectedTargetVal = "LOB Recommendations";
                global.LobMsg = "LOB";
                var SelectedVal = "LOBDATA";
                global.referenceStatus ='no';
                global.showreference="false";


            }
            else {
                var SelectedVal = "Suggestions";
                var  SelectedTargetVal= "Suggestions For You";
                global.referenceStatus ='no';
                global.showreference="false";



            }
            
            document.getElementById('dropdown-basic').innerHTML = '' + SelectedTargetVal;

            if (SelectedVal != "Suggestions" && SelectedVal != "LOBDATA") {
                var SortUrl = global.Ip + global.Port + '/' + mainWinUrl;
                var SortHeader = {
                    "offset": 0,
                    "limit": -1,
                    "order": 'desc',
                    "sortBy": SelectedVal,
                    "searchString": Searchdata,
                    "ref":referenceStatus,
                    "filters": filterdata,
                    "user_email": sessionStorage.getItem("user_email")
                }
                this.setState({
                    disabledUI: false,
                    disabletabs: false

                })

            } else if (SelectedVal == "LOBDATA") {//http://129.213.212.175:8001/winstory/filterWinsbylob/deepika.r@oracle.com
                var SortUrl = global.Ip + global.Port + '/winstory/filterWinsbylob';
                var SortHeader = {
                    offset: 0,
                    limit: -1,
                    sortBy: "createdDate",
                    order: "desc",
                    "ref":referenceStatus,
                    user_email: sessionStorage.getItem('user_email'),
                    searchString: Searchdata,
                    filters: filterdata
                }
                this.setState({
                    disableUI: true,
                    disabletabs: false

                })
            }

            else {
                var SortUrl = global.Ip + global.Port + '/winstory/allPrefferedWins/' + sessionStorage.getItem('user_email');
                var SortHeader = {
                    offset: 0,
                    limit: -1,
                    sortBy: "createdDate",
                    order: "desc",
                    "ref":referenceStatus,
                    user_email: sessionStorage.getItem('user_email'),
                    searchString: Searchdata,
                    filters: filterdata
                }
                this.setState({
                    disabledUI: true,
                    disableTabs: true


                })
            }

            axios.get(SortUrl, {
                headers: SortHeader
            })
                .then(resWin => {
                    document.getElementById('Loader').classList.add('hide');
                    // document.getElementById('dataAssetShow').classList.remove('hide');

                    //   global.assetData=res.data.ASSETS;

                    // if(SplitCat[1]=="WIN"){
                    //     global.assetData=res.data.WINSTORIES;
                    //     global.assetCount="Win Stories (" +res.data.TOTALCOUNT +")";
                    // }else{
                    global.winData = resWin.data.WINSTORIES;
                    // global.assetCount="Win Stories (" + res.data.TOTALCOUNT +")";

                    // var msg;
                    // if(global.winData.length==0){
                    //         msg='No Record found.';
                    //         document.getElementById('dataWinShow').classList.add('hide');

                    // }else{
                    //         msg=''; 
                    //         document.getElementById('dataWinShow').classList.remove('hide');

                    // }
                    // global.assetData=res.data.ASSETS;
                    // global.assetCount="Asset (" +res.data.TOTALCOUNT + ")";


                    //}

                    // var msg;
                    // if(global.assetData.length==0){
                    //     msg='No Record found.';
                    //     document.getElementById('dataAssetShow').classList.add('hide');

                    // }else{
                    //     msg=''; 
                    //     document.getElementById('dataAssetShow').classList.remove('hide');

                    // }
                    //   alert(res.data.TOTALCOUNT);
                    //     if( global.winData!="" && global.winData!=undefined){
                    //         var CountTotal=global.assetCount
                    //     }
                    //     else{
                    //     var CountTotal=0;   

                    // }
                    this.setState({
                        winData: resWin.data.ASSETS,
                        // errorMsg:msg,
                        // filterData:filterdata,
                        assetTitle: 'Search Result'
                    })
                })


        }




       /*  if ((filterdata.indexOf('fd5k53p09dl') != -1) && (filterdata.indexOf('170k5dr4xvz') == -1)) {
             //////////////////////////win selected///////////////////////////////////////////////
             var mainWinUrl = global.Ip + global.Port + '/winstory/getAllWinStoryByFilters';
             var headerWin = {
                 "offset": 0,
                 "limit": offsetLimit,
                 "searchString": Searchdata,
                 "filters": filterdata,
                 "sortBy": ValSortBy,
                 order: "desc",
                 "ref":referenceStatus,
                 "user_email": sessionStorage.getItem("user_email")
             }
             axios.get(mainWinUrl, {
                 headers: headerWin
             })
                 .then(resWin => {
                    global.loader="hide";
                    document.getElementById('Loader').classList.add('hide');
                     //document.getElementById('Loader').classList.add('hide');
                     global.winData = resWin.data.WINSTORIES;
                     this.setState({
                         winData: resWin.data.ASSETS,
                         // assetDataCount: global.assetCount,
                         // errorMsg:msg,
                         searchParamResult: SearchedParams,
                         assetTitle: 'Search Result'
                     })
 
                     global.assetData = [];
                     axios.get(global.Ip + global.Port + '/asset/allfilters', {
                         headers: {
                             "user_email": sessionStorage.getItem('user_email')
 
                         }
                     })
                         .then(res => {
                             // const SuggesForYouFilter = res.data.suggestions;
                             //  console.log(res.data.suggestions);
                             global.SuggesForYouFilter = res.data.suggestions;
                             //  this.setState({ SuggesForYouFilter });
                             //  console.log(this.state.SuggesForYouFilter);
                             //  document.getElementById('Loader').classList.add('hide');
 
                         })
                     this.setState({
                         assetData: [],
                         // assetDataCount: global.assetCount,
                         // errorMsg:msg,
                         searchParamResult: SearchedParams,
                         assetTitle: 'Search Result'
                     })
                 })
         } else if ((filterdata.indexOf('170k5dr4xvz') != -1) && (filterdata.indexOf('fd5k53p09dl') == -1)) {
             /////////////Nothing selected/////////////////
             var mainUrl = global.Ip + global.Port + '/asset/allAssetsFilters';
             var header = {
                 "offset": 0,
                 "limit": offsetLimit,
                 "searchString": Searchdata,
                 "filters": filterdata,
                 "sortBy": ValSortBy,
                 "ref":referenceStatus,
                 order: "desc",
                 "user_email": sessionStorage.getItem("user_email")
             }
             axios.get(mainUrl, {
                 headers: header
             })
                 .then(res => {
                    global.loader="hide";
                    document.getElementById('Loader').classList.add('hide');
                    // document.getElementById('Loader').classList.add('hide');
                     global.assetData = res.data.ASSETS;
                     global.assetCount = "Asset (" + res.data.TOTALCOUNT + ")";
                     global.AssetCount = res.data.TOTALCOUNT;
                     this.setState({
                         assetData: global.assetData,
                         assetDataCount: global.assetCount,
                         // errorMsg:msg,
                         searchParamResult: SearchedParams
                     })
                     global.winData = [];
                     axios.get(global.Ip + global.Port + '/asset/allfilters', {
                         headers: {
                             "user_email": sessionStorage.getItem('user_email')
 
                         }
                     })
                         .then(res => {
                             // const SuggesForYouFilter = res.data.suggestions;
                             //  console.log(res.data.suggestions);
                             global.SuggesForYouFilter = res.data.suggestions;
                             //  this.setState({ SuggesForYouFilter });
                             //  console.log(this.state.SuggesForYouFilter);
                             //  document.getElementById('Loader').classList.add('hide');
 
                         })
                     this.setState({
                         winData: [],
                         // assetDataCount: global.assetCount,
                         // errorMsg:msg,
                         searchParamResult: SearchedParams,
                         assetTitle: 'Search Result'
                     })
                 })
 
         }
         else {
             var mainUrl = global.Ip + global.Port + '/asset/allAssetsFilters';
             var header = {
                 "offset": 0,
                 "limit": offsetLimit,
                 "searchString": Searchdata,
                 "filters": filterdata,
                 "sortBy": ValSortBy,
                 "ref":referenceStatus,
                 order: "desc",
                 "user_email": sessionStorage.getItem("user_email")
             }
             axios.get(mainUrl, {
                 headers: header
             })
                 .then(res => {
                    global.loader="hide";
                    document.getElementById('Loader').classList.add('hide');
                     //document.getElementById('Loader').classList.add('hide');
                     global.assetData = res.data.ASSETS;
                     global.assetCount = "Asset (" + res.data.TOTALCOUNT + ")";
                     global.AssetCount = res.data.TOTALCOUNT;
                     this.setState({
                         assetData: global.assetData,
                         assetDataCount: global.assetCount,
                         // errorMsg:msg,
                         searchParamResult: SearchedParams
                     })
                 })
             var mainWinUrl = global.Ip + global.Port + '/winstory/getAllWinStoryByFilters';
             var headerWin = {
                 "offset": 0,
                 "limit": offsetLimit,
                 "searchString": Searchdata,
                 "filters": filterdata,
                 "sortBy": ValSortBy,
                 "ref":referenceStatus,
                 order: "desc",
                 "user_email": sessionStorage.getItem("user_email")
             }
             axios.get(mainWinUrl, {
                 headers: headerWin
             })
                 .then(resWin => {
                    global.loader="hide";
                    document.getElementById('Loader').classList.add('hide');
                   //  document.getElementById('Loader').classList.add('hide');
                     global.winData = resWin.data.WINSTORIES;
                     axios.get(global.Ip + global.Port + '/asset/allfilters', {
                         headers: {
                             "user_email": sessionStorage.getItem('user_email')
 
                         }
                     })
                         .then(res => {
                             // const SuggesForYouFilter = res.data.suggestions;
                             //  console.log(res.data.suggestions);
                             global.SuggesForYouFilter = res.data.suggestions;
                             //  this.setState({ SuggesForYouFilter });
                             //  console.log(this.state.SuggesForYouFilter);
                             //  document.getElementById('Loader').classList.add('hide');
 
                         })
                     this.setState({
                         winData: resWin.data.ASSETS,
                         // assetDataCount: global.assetCount,
                         // errorMsg:msg,
                         searchParamResult: SearchedParams,
                         assetTitle: 'Search Result'
                     })
                 })
         }*/

         

           //  winOnChange(global.referenceStatus);

         }
    handleView = id => event => {
        // alert(sessionStorage.getItem('user_email'));
        var resparam = {
            "assetId": id,
            "viewed_on": "Web",
            "viewedBy": sessionStorage.getItem('user_email'),
            'viewed_by_username': sessionStorage.getItem('user_name'),
            "user_email": sessionStorage.getItem("user_email")

        }
        axios.post(global.Ip + global.Port + '/asset/views', resparam, {
            headers: {
                "user_email": sessionStorage.getItem("user_email")

            }
        })
            .then(res => {
                if (res.data.status == "view added") {
                    // console.log('Added View');
                }
            })
        this.setState({
            redirectPage: true,
            AssetID: id,
            statusTab: 'Details'
        });
        global.statusTab = 'Details'
    }
    downLoadWin = (referenceStatus,selectedcheckbox,selectedDropdownContract,selectedSortOption) => event=> {
       if((referenceStatus==null)||(referenceStatus==undefined)||(referenceStatus=="")){
           var referenceStatusurl="";
       }else{
           var referenceStatusurl=referenceStatus;
       }
       if((selectedcheckbox==null)||(selectedcheckbox==undefined)||(selectedcheckbox=="")){
           var selectedcheckboxurl="";
        }else{
            var selectedcheckboxurl= selectedcheckbox;
        }
        if((selectedDropdownContract==null)||(selectedDropdownContract==undefined)||(selectedDropdownContract=="")){
            var selectedDropdownContracturl="";
         }else{
            var selectedDropdownContracturl= selectedDropdownContract;
         }
         if((selectedSortOption==null)||(selectedSortOption==undefined)||(selectedSortOption=="")){
            var selectedSortOptionurl="createdDate";
         }else{
            var selectedSortOptionurl=selectedSortOption;
         }
        
        window.location.href=global.Ip + global.Port+"/winstory/getwindumpbyfilter/?ref="+referenceStatusurl+"&off=0&lmt=-1&flt="+selectedcheckboxurl+"&srch="+selectedDropdownContracturl+"&odr=desc&srtby="+selectedSortOptionurl+"&email="+sessionStorage.getItem('user_email');
    }
    handleViewWin = id => event => {
        //   alert('test');
        // alert(sessionStorage.getItem('user_email'));
        var resparam = {
            "winstoryId": id,
            "viewed_on": "w",
            "viewed_by_email": sessionStorage.getItem('user_email'),
            'viewed_by_username': sessionStorage.getItem('user_name'),
            "user_email": sessionStorage.getItem("user_email")

        }
        axios.post(global.Ip + global.Port + '/winstory/view', resparam, {
            headers: {
                "user_email": sessionStorage.getItem("user_email")

            }
        })
            .then(res => {
                if (res.data.status == "view added") {
                    // console.log('Added View');
                }
            })
        this.setState({
            redirectWinPage: true,
            winID: id,
            statusTab: 'Details'
        });
        global.statusTab = 'Details'
    }

    handleEdit = id => event => {
        this.setState({
            redirectEditPage: true,
            EditAssetID: id
        });
    }
    handledeploy = id => event => {

        this.setState({
            redirectDeployPage: true,
            deployAssetID: id
        });

    }
   
    render() {

        var winOnChange = this.props.onClick;
        const { open } = this.state;
       // alert(global.referenceStatus);
        winOnChange(global.referenceStatus,global.loader);


        //              winOnChange(global.referenceStatus);


    //    function getConsumingWin(e) {
    //         //     alert(e);
    //              var status="";
    //              if(e=="yes"){
    //                  status="no";
    //              }else{
    //                  status="yes"; 
    //              }
    //             //   alert(status) ;
    //             //  this.setState({
    //             //      consumingStatus: status
    //             //  })
    //              //alert(this.state.consumingStatus);
    //              global.referenceStatus=status;
    //             // alert(global.referenceStatus);
    //              winOnChange(global.referenceStatus);

    //          }





        var msg;
        if (this.state.redirectPage) {
            // window.open("/details/?" + this.state.AssetID, '_blank');
            global.statusTab = "DETAILS";
            return <Redirect push to={"/details/?" + this.state.AssetID} />;
        }
        if (this.state.redirectDeployPage) {
            // window.open("/deploy/?" + this.state.deployAssetID, '_blank');

            return <Redirect push to={"/deploy/?" + this.state.deployAssetID} />;
        }
        if (this.state.redirectEditPage) {
            // window.location.href="/AssetManagement/?" + this.state.EditAssetID;
            // window.open("/AssetManagement/?" + this.state.EditAssetID, '_blank');

            return <Redirect push to={"/AssetManagement/?" + this.state.EditAssetID} />;
        }
        if (this.state.redirectWinPage) {
            // window.open("/WSdetails/?" + this.state.winID, '_blank');
            global.statusTab = "DETAILS";

            return <Redirect push to={"/WSdetails/?" + this.state.winID} />;

        }
        var AssetDatanew; var onlyWorkshopData; var onlyWhitePaper;
        var WinDatanew;
        var onlyWinData; var onlyConsultingWin;
        //   console.log(global.assetData);
        if (global.LobMsg == "LOB") {
            var norecordMsg = "No recommendations available for your LOB yet";

        } else {
            var norecordMsg = this.state.assetMsg;
        }

        if (global.assetData != undefined) {
            // AssetDatanew = global.assetData;
            AssetDatanew = global.assetData.filter(function (el) {
                return el.GROUP_TYPE[0].FILTER_ID === "170k5dr4xvz";
            });
            onlyWorkshopData = global.assetData.filter(function (el) {
                return el.GROUP_TYPE[0].FILTER_ID === "dq7k9lprfox";
            });
            onlyWhitePaper = global.assetData.filter(function (el) {
                return el.GROUP_TYPE[0].FILTER_ID === "dq7k9sdgroc"
            });
            // console.log(global.assetData.length + ' AssetDatanew' + AssetDatanew.length + 'onlyWorkshopData' + onlyWorkshopData.length)
        } else {
            //AssetDatanew = this.state.AssetData;
            AssetDatanew = this.state.AssetData.filter(function (el) {
                return el.GROUP_TYPE[0].FILTER_ID === "170k5dr4xvz";
            });
            onlyWorkshopData = this.state.AssetData.filter(function (el) {
                return el.GROUP_TYPE[0].FILTER_ID === "dq7k9lprfox";
            });
            onlyWhitePaper = this.state.AssetData.filter(function (el) {
                return el.GROUP_TYPE[0].FILTER_ID === "dq7k9sdgroc"
            });
            // console.log(this.state.AssetData.length + ' this.state.AssetData' + AssetDatanew.length + 'onlyWorkshopData' + onlyWorkshopData.length)

        }
        //alert(global.winData);

        if (global.winData != undefined) {

            WinDatanew = global.winData;
            // onlyWinData = global.winData.filter(function (el) {
            //     return el.GROUP_TYPE[0].FILTER_NAME == "Wins"
            // });
            // onlyConsultingWin = global.winData.filter(function (el) {
            //     return el.GROUP_TYPE[0].FILTER_NAME === "Consulting Wins"
            // });
            onlyWinData = global.winData;
        } else {
            WinDatanew = this.state.winData;

            // onlyWinData = this.state.winData.filter(function (el) {
            //     return el.GROUP_TYPE[0].FILTER_NAME === "Wins"
            // });
            // onlyConsultingWin = this.state.winData.filter(function (el) {
            //     return el.GROUP_TYPE[0].FILTER_NAME === "Consulting Wins"
            // });
            onlyWinData = WinDatanew;
        }
        var AsstCnt = AssetDatanew.length;
        var WinCnt = WinDatanew.length;
        var winHeader = "Wins";
        // (" + onlyWinData.length + ")";
        var winindustry

        var consultingwinHeader = "Consulting Wins"
        //  (" + onlyConsultingWin.length + ")";
        // console.log(AsstCnt);
        setTimeout(function () {
            if (AsstCnt > 0) {
                msg = '';
                // document.getElementById('dataAssetShow').classList.remove('hide');



            } else {

                msg = 'No Record found.';
                // document.getElementById('dataAssetShow').classList.add('hide');    // global.

            }
            if (WinCnt > 0) {
                msg = '';
                // document.getElementById('dataAssetShow').classList.remove('hide');
                // document.getElementById('dataWinShow').classList.remove('hide');


            } else {
                msg = 'No Record found.';
                // document.getElementById('dataAssetShow').classList.add('hide');
                // document.getElementById('dataWinShow').classList.add('hide');    


            }



            if (WinDatanew.length > 0) {
                if (document.getElementById('uncontrolled-tab-example-tab-Wins')) {
                    // document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", true);
                    // document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link active");
                    // document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "false");
                    // document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane active show");
                    document.getElementById('uncontrolled-tab-example-tab-Wins').click();

                }

                // if (document.getElementById('uncontrolled-tab-example-tab-SolutionAssets')) {
                //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("class", "fade tab-pane");

                // }
                // if (document.getElementById('uncontrolled-tab-example-tab-Workshops')) {
                //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane");

                // }
                // if (document.getElementById('uncontrolled-tab-example-tab-WhitePapers')) {
                //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane");

                // }






            }
            else if (AssetDatanew.length > 0) {
                if (document.getElementById('uncontrolled-tab-example-tab-SolutionAssets')) {
                    // document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("aria-selected", true);
                    // document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("class", "nav-item nav-link active");
                    // document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("aria-hidden", "false");
                    // document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("class", "fade tab-pane active show");
                    document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').click();


                }

                // if (document.getElementById('uncontrolled-tab-example-tab-Wins')) {
                //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane");

                // }
                // if (document.getElementById('uncontrolled-tab-example-tab-Workshops')) {
                //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane");

                // }
                // if (document.getElementById('uncontrolled-tab-example-tab-WhitePapers')) {
                //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane");

                // }



                // document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", false);
                // document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link");
                // document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", false);
                // document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link");
                // document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("aria-selected", false);
                // document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("class", "nav-item nav-link");


                // document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "true");
                // document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane");
                // document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "true");
                // document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane");
                // document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "true");
                // document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane");







            }
            else if (onlyWorkshopData.length > 0) {
                if (document.getElementById('uncontrolled-tab-example-tab-Workshops')) {
                    // document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", true);
                    // document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link active");
                    // document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "false");
                    // document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane active show");
                    document.getElementById('uncontrolled-tab-example-tab-Workshops').click();

                }



                // if (document.getElementById('uncontrolled-tab-example-tab-Wins')) {
                //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane");

                // }
                // if (document.getElementById('uncontrolled-tab-example-tab-SolutionAssets')) {
                //     document.getElementById('uncontrolled-tab-example-tab-WSolutionAssets').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("class", "fade tab-pane");

                // }
                // if (document.getElementById('uncontrolled-tab-example-tab-WhitePapers')) {
                //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane");

                // }







            } else if (onlyWhitePaper.length > 0) {
                if (document.getElementById('uncontrolled-tab-example-tab-WhitePapers')) {
                    // document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("aria-selected", true);
                    // document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("class", "nav-item nav-link active");
                    // document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "false");
                    // document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane active show");
                    document.getElementById('uncontrolled-tab-example-tab-WhitePapers').click();

                }

                // if (document.getElementById('uncontrolled-tab-example-tab-Wins')) {
                //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane");

                // }
                // if (document.getElementById('uncontrolled-tab-example-tab-SolutionAssets')) {
                //     document.getElementById('uncontrolled-tab-example-tab-WSolutionAssets').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("class", "fade tab-pane");

                // }
                // if (document.getElementById('uncontrolled-tab-example-tab-Workshops')) {
                //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", false);
                //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "true");
                //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane");

                // }




                // document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("aria-selected", false);
                // document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("class", "nav-item nav-link");
                // document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", false);
                // document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link");
                // document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", false);
                // document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link");

                // document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "false");
                // document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane active show");
                // document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "true");
                // document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane");
                // document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("aria-hidden", "true");
                // document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("class", "fade tab-pane");
                // document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "true");
                // document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane");


            }

        }, 700);

        // else if(AssetDatanew.length>0){
        //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("aria-selected", true);
        //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("class", "nav-item nav-link active");
        //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link");
        //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link");
        //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("class", "nav-item nav-link");


        //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("aria-hidden", "false");
        //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("class", "fade tab-pane active show");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane");
        //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane");







        // }
        // else if(onlyWorkshopData.length>0){
        //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", true);
        //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link active");          
        //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("class", "nav-item nav-link");
        //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link");
        //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("class", "nav-item nav-link");


        //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "false");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane active show");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane");
        //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("class", "fade tab-pane");
        //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane");





        // }else if(onlyWhitePaper.length>0){
        //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("aria-selected", true);
        //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').setAttribute("class", "nav-item nav-link active");          
        //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').setAttribute("class", "nav-item nav-link");
        //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-Wins').setAttribute("class", "nav-item nav-link");
        //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("aria-selected", false);
        //     document.getElementById('uncontrolled-tab-example-tab-Workshops').setAttribute("class", "nav-item nav-link");

        //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("aria-hidden", "false");
        //     document.getElementById('uncontrolled-tab-example-tabpane-WhitePapers').setAttribute("class", "fade tab-pane active show");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Wins').setAttribute("class", "fade tab-pane");
        //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-SolutionAssets').setAttribute("class", "fade tab-pane");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("aria-hidden", "true");
        //     document.getElementById('uncontrolled-tab-example-tabpane-Workshops').setAttribute("class", "fade tab-pane");


        // }

        // if(WinDatanew.length<1){
        //     document.getElementById('uncontrolled-tab-example-tab-Wins').style.display= "none";





        // }
        // else if(AssetDatanew.length<1){
        //     document.getElementById('uncontrolled-tab-example-tab-SolutionAssets').style.display= "none";




        // }
        // else if(onlyWorkshopData.length<1){
        //     document.getElementById('uncontrolled-tab-example-tab-Workshops').style.display= "none";




        // }else if(onlyWhitePaper.length<1){
        //     document.getElementById('uncontrolled-tab-example-tab-WhitePapers').style.display= "none";

        // }

        // alert(global.selectedCategory);
        //   console.log("test");
        //   console.log(WinDatanew);

        return (
            <Row className="sectionCover mt-30" >
                {/* <h5 id="winContent" class="col-md-12 mt-20 " style={{ fontWeight: 600, marginBottom: "20px", marginTop: "0px" }}>Wins */}
                {/* ( {WinCnt} ) */}
                {/* </h5> */}

                <hr />
                {/* <Navbar  variant="light">              
                <Nav className="ml-auto">

                    <Link className="nav-link" onClick={() => this.handleTab('')} >Wins</Link>
                    <Link className="nav-link" onClick={() => this.handleTab('MYAssets')} >Consulting Wins</Link>
                   
               </Nav> 
            </Navbar> */}


                {/* {WinCnt}WinCnt<br/>{AsstCnt}AsstCnt <br/>{onlyWorkshopData.length}WS<br/>{onlyWhitePaper.length}WP */}



                <div id="dataWinShow" class="dataWindow homepage col-md-12">
                    <Tabs defaultActiveKey="Wins" id="uncontrolled-tab-example" className="mb-4">
                        {WinCnt != 0 && <Tab eventKey="Wins" title="Wins">
                            {WinCnt != 0 ? (
                                

                                <div id="dataWinShow" class="dataWindow col-md-12">
                                {sessionStorage.getItem('role').indexOf('winloader') != -1 &&    <span class="pull-right"> <a href="javascript:void(0)"  onClick={this.downLoadWin(global.referenceStatus,global.selectedcheckbox,global.selectedDropdownContract,global.selectedSortOption)}><button type="button" class="btn btn-primary  ml-20 btn-sm"><i class="icon-Download"></i>Win Export</button></a></span>}
                                  {global.showreference!="false" &&
                                  
                                        <span class="pull-right"> <small className="review_tab bold">Referenceable Account :</small><label class="switch">
                                       
                                        <input type="checkbox" id="togBtn" value={global.referenceStatus} name="disablePromote" checked={global.referenceStatus == "yes" ? "checked" : ""} onChange={e => this.getConsumingWin(global.referenceStatus)}/>
                                        <span class="slider round"></span>
                                        </label>
                                    </span>}
                                    <div className="Scroll mt-40" >
                                        {onlyWinData.map((winData, index) => <>
                                            
                                                 <Col md={4} data-id={winData.WINSTORY_ID} style={{ border: "thin solid #e0e0e0", borderRadius: "12px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: "url(" + winData.WINSTORY_LOGO + ")" }} className="mb-4 itemCardHomePage cards" >
                                                {/* <div class="extta"> */}
                                                {winData.PROMOTE == true &&
                                                    <div class="promoted" >Promoted</div>}
                                                <div class="dfd">
                                                    {/* <Image src={winData.WINSTORY_LOGO} className="roundedCard" onClick={this.handleViewWin(winData.WINSTORY_ID)} /> */}
                                                    <div class="viewEdit text-center home">
                                                        <a href="javascript:void(0);" onClick={this.handleViewWin(winData.WINSTORY_ID)} class="view"> View </a>
                                                    </div>
                                                    <div className="cardInforHomePage">
                                                        <div class="tooltipDiv">
                                                            <img class="infoIcon" src="../img/info.png" />
                                                        </div>
                                                        <div className="tooltipCustom">
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Industries : </span>
                                                                {winData.INDUSTRY.map((indus, index) =>
                                                                    <span> {indus.FILTER_NAME}  </span>
                                                                )}
                                                                {winData.INDUSTRY.length == 0 && <span> NA  </span>}
                                                            </div>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Solution Area : </span>
                                                                {winData.SOLUTION_AREAS.map((indus, index) =>
                                                                    <span> {indus.FILTER_NAME}  </span>
                                                                )}
                                                                {winData.SOLUTION_AREAS.length == 0 && <span> NA  </span>}
                                                            </div>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Competitor(s) : </span>
                                                                <span>{winData.WINSTORY_COMPETIION}</span>
                                                            </div>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Partner : </span>
                                                                <span>{winData.WINSTORY_PARTNER}</span>
                                                            </div>
                                                            {/* {winData.WINSTORY_REFERENCEABLE=="yes" && <>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Referenceable Account : </span>
                                                                <span>Yes</span>
                                                            </div>
                                                            </>} */}
                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="cardTitleImagecard" title={winData.WINSTORY_NAME}>
                                                                {winData.WINSTORY_NAME}
                                                            </div>

                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div style={{ width: '60%' }}>
                                                                <div className="small" style={{ paddingTop: "4px" }}>
                                                                {winData.WINSTORY_REFERENCEABLE=="yes" && <>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Referenceable</span>
                                                            </div>
                                                            </>}
                                                                    {/* <Moment format="DD MMMM YYYY">{winData.WINSTORY_CREATED_ON}</Moment> */}
                                                                </div>
                                                            </div>
                                                            <div style={{ display: "flex", width: '40%' }}>
                                                                <div className="cardLikes" name={winData.LIKES.LIKES_COUNT}>
                                                                    {winData.LIKES.LIKE_COUNT > 0 &&
                                                                        <div class="flex" >
                                                                            <img src="../img/Icon_Like.png" /><span>{winData.LIKES.LIKE_COUNT}</span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                <div className="cardView" style={{ padding: '2px' }} name={winData.VIEWS.VIEW_COUNT}>
                                                                    {winData.VIEWS.VIEW_COUNT > 0 &&
                                                                        <div class="flex">
                                                                            <img src="../img/Icon_view.png" />
                                                                            <span>{winData.VIEWS.VIEW_COUNT}</span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* </div> */}
                                            </Col>
                                                
                                               
                                           
                                            </>
                                        )}
                                    </div>
                                </div>
                                
                                ) : (<Row className="errorMSG">
                                    <Col md={12} className="mb-12 pd40 text-center"> <strong >{norecordMsg}</strong></Col>
                                </Row>)}
                        </Tab>}
                        {AsstCnt != 0 && <Tab eventKey="SolutionAssets" title="Solution Assets">
                            {AsstCnt != 0 ? (
                                <div id="dataAssetShow" class="col-md-12">

                                    <div className="Scroll" >
                                        {AssetDatanew.map((AssetData, index) =>
                                            <Col md={4} data-id={AssetData.ASSET_ID} style={{ borderRadius: "12px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: "url(" + AssetData.ASSET_THUMBNAIL + ")" }} className="mb-4 itemCardHomePage cards" >
                                                {/* <div class="extta"> */}
                                                {AssetData.PROMOTE == true &&
                                                    <div class="promoted" >Promoted</div>}
                                                <div class="dfd ">

                                                    {/* <div class="imagePanel">
                                                <Image src={AssetData.ASSET_THUMBNAIL} className="roundedCard" />
                                            </div> */}
                                                    <div class="viewEdit text-center home col-md-6">
                                                        <a href="javascript:void(0);" onClick={this.handleView(AssetData.ASSET_ID)} class="view"> View </a>
                                                    </div>
                                                    {/* <div class="viewPromote text-center home col-md-6">
                 <a href="javascript:void(0);"  onClick={this.handleView(AssetData.ASSET_ID)} class="view"> Promote </a>
        </div> */}

                                                    <div className="cardInforHomePage">
                                                        <div class="tooltipDiv">
                                                            <img class="infoIcon" src="../img/info.png" />
                                                        </div>
                                                        <div className="tooltipCustom">

                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Industries : </span>
                                                                {AssetData.INDUSTRY.map((indus, index) =>
                                                                    <span> {indus.FILTER_NAME}  </span>
                                                                )}
                                                                {AssetData.INDUSTRY.length == 0 && <span> NA  </span>}
                                                            </div>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Solution Area : </span>
                                                                {AssetData.SOLUTION_AREAS.map((indus, index) =>
                                                                    <span> {indus.FILTER_NAME}  </span>
                                                                )}
                                                                {AssetData.SOLUTION_AREAS.length == 0 && <span> NA  </span>}
                                                            </div>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Sales Initiatives : </span>
                                                                {AssetData.SALES_PLAY.map((indus, index) =>
                                                                    <span> {indus.FILTER_NAME}  </span>
                                                                )}
                                                                {AssetData.SALES_PLAY.length == 0 && <span> NA  </span>}
                                                            </div>

                                                        </div>
                                                        <div class="kckgBd"><div class="Cktv6e"></div></div>


                                                        <div style={{ display: "flex" }}>
                                                            <div className="cardTitleImagecard" title={AssetData.ASSET_TITLE}>
                                                                {AssetData.ASSET_TITLE}
                                                            </div>

                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div style={{ width: '60%' }}>
                                                                <div className="small" style={{ paddingTop: "4px" }}><Moment format="DD MMMM YYYY">{AssetData.ASSET_CREATED_DATE}</Moment></div>
                                                            </div>
                                                            <div style={{ display: "flex", width: '40%' }}>
                                                                <div className="cardLikes" name={AssetData.LIKES.LIKES_COUNT}>
                                                                    {AssetData.LIKES.LIKE_COUNT > 0 &&
                                                                        <div class="flex" >
                                                                            <img src="../img/Icon_Like.png" /><span>{AssetData.LIKES.LIKE_COUNT}</span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                <div className="cardView" style={{ padding: '2px' }} name={AssetData.VIEWS.VIEW_COUNT}>
                                                                    {AssetData.VIEWS.VIEW_COUNT > 0 &&
                                                                        <div class="flex">
                                                                            <img src="../img/Icon_view.png" />
                                                                            <span>{AssetData.VIEWS.VIEW_COUNT}</span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                {/* </div> */}
                                            </Col>
                                        )}

                                    </div>


                                </div>
                            ) : (
                                    <div>
                                        <Row className="errorMSG">
                                            <Col md={12} className="mb-12 pd40 text-center"> <strong >{norecordMsg}</strong></Col>
                                        </Row>
                                    </div>
                                )}
                        </Tab>}
                        {onlyWorkshopData.length != 0 &&
                            <Tab eventKey="Workshops" title="Workshops">
                                {onlyWorkshopData.length != 0 ? (
                                    <div id="dataAssetShow" class="col-md-12">

                                        <div className="Scroll" >
                                            {onlyWorkshopData.map((AssetData, index) =>
                                                <Col md={4} data-id={AssetData.ASSET_ID} style={{ borderRadius: "12px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: "url(" + AssetData.ASSET_THUMBNAIL + ")" }} className="mb-4 itemCardHomePage cards" >
                                                    {/* <div class="extta"> */}
                                                    {AssetData.PROMOTE == true &&
                                                        <div class="promoted" >Promoted</div>}
                                                    <div class="dfd ">

                                                        {/* <div class="imagePanel">
                                          <Image src={AssetData.ASSET_THUMBNAIL} className="roundedCard" />
                                      </div> */}
                                                        <div class="viewEdit text-center home col-md-6">
                                                            <a href="javascript:void(0);" onClick={this.handleView(AssetData.ASSET_ID)} class="view"> View </a>
                                                        </div>
                                                        {/* <div class="viewPromote text-center home col-md-6">
           <a href="javascript:void(0);"  onClick={this.handleView(AssetData.ASSET_ID)} class="view"> Promote </a>
  </div> */}

                                                        <div className="cardInforHomePage">
                                                            <div class="tooltipDiv">
                                                                <img class="infoIcon" src="../img/info.png" />
                                                            </div>
                                                            <div className="tooltipCustom">

                                                                <div style={{ width: "100%" }}>
                                                                    <span style={{ color: '#F2A006', fontWeight: 600 }}>Industries : </span>
                                                                    {AssetData.INDUSTRY.map((indus, index) =>
                                                                        <span> {indus.FILTER_NAME}  </span>
                                                                    )}
                                                                    {AssetData.INDUSTRY.length == 0 && <span> NA  </span>}
                                                                </div>
                                                                <div style={{ width: "100%" }}>
                                                                    <span style={{ color: '#F2A006', fontWeight: 600 }}>Solution Area : </span>
                                                                    {AssetData.SOLUTION_AREAS.map((indus, index) =>
                                                                        <span> {indus.FILTER_NAME}  </span>
                                                                    )}
                                                                    {AssetData.SOLUTION_AREAS.length == 0 && <span> NA  </span>}
                                                                </div>
                                                                <div style={{ width: "100%" }}>
                                                                    <span style={{ color: '#F2A006', fontWeight: 600 }}>Sales Initiatives : </span>
                                                                    {AssetData.SALES_PLAY.map((indus, index) =>
                                                                        <span> {indus.FILTER_NAME}  </span>
                                                                    )}
                                                                    {AssetData.SALES_PLAY.length == 0 && <span> NA  </span>}
                                                                </div>

                                                            </div>
                                                            <div class="kckgBd"><div class="Cktv6e"></div></div>


                                                            <div style={{ display: "flex" }}>
                                                                <div className="cardTitleImagecard" title={AssetData.ASSET_TITLE}>
                                                                    {AssetData.ASSET_TITLE}
                                                                </div>

                                                            </div>
                                                            <div style={{ display: "flex" }}>
                                                                <div style={{ width: '60%' }}>
                                                                    <div className="small" style={{ paddingTop: "4px" }}><Moment format="DD MMMM YYYY">{AssetData.ASSET_CREATED_DATE}</Moment></div>
                                                                </div>
                                                                <div style={{ display: "flex", width: '40%' }}>
                                                                    <div className="cardLikes" name={AssetData.LIKES.LIKES_COUNT}>
                                                                        {AssetData.LIKES.LIKE_COUNT > 0 &&
                                                                            <div class="flex" >
                                                                                <img src="../img/Icon_Like.png" /><span>{AssetData.LIKES.LIKE_COUNT}</span>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                    <div className="cardView" style={{ padding: '2px' }} name={AssetData.VIEWS.VIEW_COUNT}>
                                                                        {AssetData.VIEWS.VIEW_COUNT > 0 &&
                                                                            <div class="flex">
                                                                                <img src="../img/Icon_view.png" />
                                                                                <span>{AssetData.VIEWS.VIEW_COUNT}</span>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    {/* </div> */}
                                                </Col>
                                            )}

                                        </div>


                                    </div>
                                ) : (
                                        <div>
                                            <Row className="errorMSG">
                                                <Col md={12} className="mb-12 pd40 text-center"> <strong >{norecordMsg}</strong></Col>
                                            </Row>
                                        </div>
                                    )}

                            </Tab>}
                        {onlyWhitePaper.length != 0 && <Tab eventKey="WhitePapers" title="White Papers">
                            {onlyWhitePaper.length != 0 ? (
                                <div id="dataAssetShow" class="col-md-12">

                                    <div className="Scroll" >
                                        {onlyWhitePaper.map((AssetData, index) =>
                                            <Col md={4} data-id={AssetData.ASSET_ID} style={{ borderRadius: "12px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: "url(" + AssetData.ASSET_THUMBNAIL + ")" }} className="mb-4 itemCardHomePage cards" >
                                                {/* <div class="extta"> */}
                                                {AssetData.PROMOTE == true &&
                                                    <div class="promoted" >Promoted</div>}
                                                <div class="dfd ">

                                                    {/* <div class="imagePanel">
                                          <Image src={AssetData.ASSET_THUMBNAIL} className="roundedCard" />
                                      </div> */}
                                                    <div class="viewEdit text-center home col-md-6">
                                                        <a href="javascript:void(0);" onClick={this.handleView(AssetData.ASSET_ID)} class="view"> View </a>
                                                    </div>
                                                    {/* <div class="viewPromote text-center home col-md-6">
           <a href="javascript:void(0);"  onClick={this.handleView(AssetData.ASSET_ID)} class="view"> Promote </a>
  </div> */}

                                                    <div className="cardInforHomePage">
                                                        <div class="tooltipDiv">
                                                            <img class="infoIcon" src="../img/info.png" />
                                                        </div>
                                                        <div className="tooltipCustom">

                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Industries : </span>
                                                                {AssetData.INDUSTRY.map((indus, index) =>
                                                                    <span> {indus.FILTER_NAME}  </span>
                                                                )}
                                                                {AssetData.INDUSTRY.length == 0 && <span> NA  </span>}
                                                            </div>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Solution Area : </span>
                                                                {AssetData.SOLUTION_AREAS.map((indus, index) =>
                                                                    <span> {indus.FILTER_NAME}  </span>
                                                                )}
                                                                {AssetData.SOLUTION_AREAS.length == 0 && <span> NA  </span>}
                                                            </div>
                                                            <div style={{ width: "100%" }}>
                                                                <span style={{ color: '#F2A006', fontWeight: 600 }}>Sales Initiatives : </span>
                                                                {AssetData.SALES_PLAY.map((indus, index) =>
                                                                    <span> {indus.FILTER_NAME}  </span>
                                                                )}
                                                                {AssetData.SALES_PLAY.length == 0 && <span> NA  </span>}
                                                            </div>

                                                        </div>
                                                        <div class="kckgBd"><div class="Cktv6e"></div></div>


                                                        <div style={{ display: "flex" }}>
                                                            <div className="cardTitleImagecard" title={AssetData.ASSET_TITLE}>
                                                                {AssetData.ASSET_TITLE}
                                                            </div>

                                                        </div>
                                                        <div style={{ display: "flex" }}>
                                                            <div style={{ width: '60%' }}>
                                                                <div className="small" style={{ paddingTop: "4px" }}><Moment format="DD MMMM YYYY">{AssetData.ASSET_CREATED_DATE}</Moment></div>
                                                            </div>
                                                            <div style={{ display: "flex", width: '40%' }}>
                                                                <div className="cardLikes" name={AssetData.LIKES.LIKES_COUNT}>
                                                                    {AssetData.LIKES.LIKE_COUNT > 0 &&
                                                                        <div class="flex" >
                                                                            <img src="../img/Icon_Like.png" /><span>{AssetData.LIKES.LIKE_COUNT}</span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                <div className="cardView" style={{ padding: '2px' }} name={AssetData.VIEWS.VIEW_COUNT}>
                                                                    {AssetData.VIEWS.VIEW_COUNT > 0 &&
                                                                        <div class="flex">
                                                                            <img src="../img/Icon_view.png" />
                                                                            <span>{AssetData.VIEWS.VIEW_COUNT}</span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                {/* </div> */}
                                            </Col>
                                        )}

                                    </div>


                                </div>
                            ) : (
                                    <div>
                                        <Row className="errorMSG">
                                            <Col md={12} className="mb-12 pd40 text-center"> <strong >{norecordMsg}</strong></Col>
                                        </Row>
                                    </div>
                                )}


                        </Tab>}



                    </Tabs>
                    {WinCnt == 0 && AsstCnt == 0 && onlyWorkshopData.length == 0 && onlyWhitePaper.length == 0 &&
                        <><div class="no_tabs"><strong>{norecordMsg}</strong></div>
                        </>}


                </div>
                <h5 class="col-md-12 sectionCover" id="assetContent"></h5>
                {/* </>  */}
                {/* // )} */}

            </Row>
        )
    }
}

export default ImageCard

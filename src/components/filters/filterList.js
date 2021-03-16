import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import './index.css';
// import SELECTFILTERS from './selectedFilters';
export class FiltersList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            class: 'section',
            FilterData: [],
            buttonParam: '+',
            selectFilter: [],
            classClear:'hide'
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
    //   function filterBox(){
    //   }
      
        
        document.getElementById('Loader').classList.remove('hide');
        //  return false;
        //this.state.selectFilter = global.selectedcheckbox.split(',');
        if ((sessionStorage.getItem('user_email') != "") && (sessionStorage.getItem('user_email') != null) && (sessionStorage.getItem('user_email') != undefined)) {
            axios.get(global.Ip + global.Port + '/asset/allfilters', {
                headers: {
                    "user_email": sessionStorage.getItem('user_email')

                }
            })
                .then(res => {

                   // console.log(res.data);
                    // document.getElementById('Loader').classList.add('hide');
                    const FilterData = res.data.allFilters;
                  //  console.log(FilterData)
                    FilterData.splice(1, 0, res.data.allFilters[res.data.allFilters.length - 1]);
                  //  console.log(FilterData)
                    FilterData.pop();
                  //  console.log(FilterData)
                    global.SuggesForYouFilter = res.data.suggestions;
                    this.setState({ FilterData });
                    setTimeout(function () { document.getElementById('Loader').classList.add('hide'); 
                    if (global.selectedcheckbox != undefined) {
                        // if (global.selectedcheckbox != undefined) {
                             var selectedVal=global.selectedcheckbox;
                            // global.selectedcheckbox="";
                             var arrFilter=(selectedVal).split(',');
                             for(var i=0;i<arrFilter.length;i++){
                              //   alert(arrFilter[i]);
                                 
                                //  filterBox(); 
                                if( document.getElementById(arrFilter[i])){
                                    document.getElementById(arrFilter[i]).checked = true;
                                    document.getElementById('clearsec').classList.remove('hide');
                                    // this.setState({
                                    //     classClear: 'clearall small pull-right'
                                    // })

                                    // ListOnChange(selectedVal);


                                }
                             // document.getElementById(arrFilter[i]).click();
                             }
                            // ListOnChange(global.selectedcheckbox);
                
                         }
                
                
                }, 5000);


                })
        }
    }
    render() {

        var ListOnChange = this.props.onChange;
        const { open } = this.state;
        function filterBox(event) {
            var j = "";
           // alert(global.selectedcheckbox);
            if (global.selectedcheckbox != undefined) {
                j += global.selectedcheckbox + ',' + event.target.getAttribute("id");
                if (global.selectedcheckbox.indexOf(event.target.getAttribute("id")) != -1) {
                    var array = global.selectedcheckbox.split(',');
                    for (var i = array.length - 1; i >= 0; i--) {
                        if (array[i] === event.target.getAttribute("id")) {
                            array.splice(i, 1);
                            j = array.toString();
                        }
                    }

                } else { }
            } else {
                j = event.target.getAttribute("id");
                
            }
            var TrimmedVar = j.replace(/^,|,$/g, '');
            global.selectedcheckbox = TrimmedVar;
            // alert(global.selectedcheckbox);
            ListOnChange(global.selectedcheckbox);
        }
        //   function  UncheckAllFilters(event){
        //     global.selectedcheckbox= "";
        //     ListOnChange(global.selectedcheckbox);
        //     var items=document.getElementsByName('filterData');
        //         for(var i=0; i<items.length; i++){
        //             if(items[i].type=='checkbox')
        //                 items[i].checked=false;
        //         }
        //   }{this.state.ASSET_THUMBNAIL!="" && 
        // <img src={this.state.ASSET_THUMBNAIL} class={this.state.class} width="60px" height="60px"/>}
        return (
            <div class="collaps">
                
                {this.state.FilterData.map((FilterData, index) =>
                <>
                    {/* {FilterData.filters[0].FILTER_STATUS!="-1" && <> */}

                    <div className={this.state.class}>

                        <h6 onClick={this.handleClick.bind(this, FilterData.Type)}>{FilterData.Type}<span className="expand" id={FilterData.Type + 'expand'}>-</span></h6>
                        <ListGroup id={FilterData.Type} className="show">
                            {FilterData.filters.map((Filters, index) =>
                                <ListGroup.Item >
                                    {/* {Filters.FILTER_STATUS!="-1" && <> */}
                                    {['checkbox'].map(type => (
                                        <div key={Filters.FILTER_ID} class="filterSelction">
                                           <label> <input type="checkbox" onClick={filterBox}
                                                custom
                                                type={type}
                                                id={Filters.FILTER_ID}
                                                label={Filters.FILTER_NAME}
                                                name="filterData"/>&nbsp;&nbsp;{Filters.FILTER_NAME}</label>
                                            {/* <Form.Check onClick={filterBox}
                                                custom
                                                type={type}
                                                id={Filters.FILTER_ID}
                                                label={Filters.FILTER_NAME}
                                                name="filterData"
                                            /> */}
                                        </div>
                                    ))}
                             {/* </>} */}
                                </ListGroup.Item>)}
                            <input type="hidden" id={FilterData.Type + 'val'} value="false" />
                        </ListGroup>
                         {/* <SELECTFILTERS/>           */}
                    </div>
                      {/* </>}  */}
                      
                        </>
                )}
            </div>
        )
    }
}

export default FiltersList

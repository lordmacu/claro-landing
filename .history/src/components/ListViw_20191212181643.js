import React from 'react';
import SectionNavbar from './Navbar';
import ReactSlider from 'react-slider';

class SectionList extends React.Component {

    internetRef = React.createRef();
    minutosRef = React.createRef();
    smsRef = React.createRef();
    typeRef = React.createRef();

    filterPhone = (e) => {
        e.preventDefault();

        console.log()
        const infoFilter = {
            internetRef: this.state.stepsInternet[this.state.internetValue],
            minutosRef: this.state.stepsMinutos[this.state.minutesValue],
            smsRef: this.state.stepsSms[this.state.smsValue],
            type: this.typeRef.current.value

        }
        console.log(infoFilter)
    }
    sendData = () => {

        console.log({stepValue:this.state.stepValue});
        this.props.parentCallback({stepValue:this.state.stepValue});
       //console.log(this.props);
   }

    

    constructor(props) {

        
        super(props);


 
        
        this.state = {
            filters:[],
            stepValue:[],
            networks:[],
            results: [
                {
                    id: 1,
                    image: ('./imagen/logo-result.png'),
                    internet: 4800,
                    minutos: 200,
                    messages: 1600,
                    name: "PLAN CONTROL"
                }, {
                    id: 2,
                    internet: 6000,
                    minutos: 200,
                    messages: 1400,
                    name: "Paquete Portabilidad",
                    image: ('./imagen/movi.jpeg')

                }, {
                    id: 3,
                    internet: 2000,
                    minutos: 200,
                    messages: 2000,
                    name: "Paquete $10 Cierto",
                    image: ('./imagen/at&t.png')

                }, {
                    id: 4,
                    internet: 3100,
                    minutos: 200,
                    messages: 1200,
                    name: "Plan 1 Díalo",
                    image: ('./imagen/Cierto-l.png  ')

                }
            ],
            temporalResults: [],

            networkValue: 0,
            internetValue: 0,
            minutesValue: 0,
            smsValue: 0,
            priceValue:0,
            steps:[]
        }

        this.filterPlanByKey = this
            .filterPlanByKey
            .bind(this);
        this.getAllResults = this
            .getAllResults
            .bind(this);
        this.clearAllResults = this
            .clearAllResults
            .bind(this);

        //this.setState({temporalResults:this.state.results})

        this.state.temporalResults = this.state.results;

    }

    getAllResults() {
        this.setState({temporalResults: this.state.results})
    }

    clearAllResults() {
        this.setState({temporalResults: []})
    }

    //internet  40
    filterPlanByKey(propiedadABuscar, value) {
        //console.log("saqui ",this.state.results,key)

        var resultsLocal = this.state.results;

        var internalArray = [];

        for (let index in resultsLocal) { //4

            for (let propiedadObjetoLocal in resultsLocal[index]) {

                let objecto = resultsLocal[index];

                let valueProperty = objecto[propiedadObjetoLocal];

                if (propiedadObjetoLocal === propiedadABuscar) {

                    if (valueProperty >= value) {
                        internalArray.push(objecto);
                    }
                    //  console.log(key,results[item][key]);
                }

            }
            // console.log(this.state.results[item]);
        }

        console.log(internalArray)

        this.setState({temporalResults: internalArray})

    }

    calculateInternet() {
        console.log("dataSteps",this.state.steps);
        //return this.state.steps[this.state.internetValue];
    }
    calculateStepInternet() {
        let stepInternet = 1;
        return stepInternet;
    }

    calculateMinutos() {
        //return this.state.stepsMinutos[this.state.minutesValue];
    }
    calculateStepMinutos() {
        let stepMinutos = 1;
        return stepMinutos;
    }

    getFilters(){

      
        const res = fetch('http://comparador.tiendaclaro.uy/getFilters', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                 return response.json()
            })
            .then((responseJson) => {
                console.log("aqui estoy ",responseJson);
                var responseJson =responseJson.data;
                var stapsArray=[];
                for(var i =0; i <responseJson.length;i++){
                    stapsArray[responseJson[i].id]=responseJson[i].filters;
                }
                
                this.setState({networks:networks})
                this.setState({steps:stapsArray})
                this.setState({filters:responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
       
        this.getFilters();
        console.log("se ha montado el componente");
    }

    fetchDataFilter(){

      
        const res = fetch('http://comparador.tiendaclaro.uy/getPlans', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({filtersValue:this.state.stepValue})
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({results:responseJson.data})
                this. clearAllResults();


            })
            .catch((error) => {
                console.error(error);
            });
    }

    claculaSms() {
        return this.state.stepsSms[this.state.smsValue];
    }
    calculateSeptSms() {
        let stepSms = 1;
        return stepSms;
    }
    render() {

        return (

            <div className="section-principal">
                <SectionNavbar className="navbar-viw"/>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="row">
                                <div className="col-12 display-on-in-mobile">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-12  ">
                                            <p className="elige-mobile">ELEGÍ EL MEJOR PLAN PARA CELULAR !</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12  display-on-in-desktop">
                                    <img alt=" " className="img-list" src="./imagen/elige.png"/>
                                </div>
                                <div className="col-lg-8 col-sm-12">
                                    <div className="col-12">
                                        <div className="dropdown">
                                            <div
                                                className="dropdown-toggle curso-pointer "
                                                id="dropdownMenuButton"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <span className="pr-1 rest-font device-selector">OPCIONES SIN EQUIPO
                                                </span>
                                            </div>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href=" # ">Action</a>
                                                <a className="dropdown-item" href=" # ">Another action</a>
                                                <a className="dropdown-item" href=" # ">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-lg-5 col-sm-12">
                                                <form className="filter-list" onSubmit={this.filterPhone}>
                                                    <div className="row">
                                                    {this
                                                    .state
                                                    .filters
                                                    .map((item, key) => {
                                                        return  <div className="col-lg-12 container-slide">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <p className="subtitle mt-0">{item.name}:
                                                         
                                                         
                                                                    <b className="rest-font value-filter">{item.value}</b>
                                                                </p>
                                                                <div className="whith-silider">
                                                                    <ReactSlider
                                                                        className="horizontal-slider"
                                                                        step={1}
                                                                        thumbClassName="example-thumb"
                                                                        trackClassName="example-track"
                                                                        max={item.filters.length-1}
                                                                        min={0}
                                                                        onChange={(value) => {
                                                                            item.value=""+item.filters[value].value; 
                                                                            var stepsValue=this.state.stepValue;
                                                                            stepsValue[item.id]=item.filters[value].value_filter;
                                                                            this.setState({stepValue: stepsValue})
                                                                            this.sendData(); 
                                                                    }}
                                                                        renderThumb={(props, state) => <div {...props}></div>}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    })}
                                                        
                                                       
                                                     
                                                    </div>

                                                </form>
                                            </div>
                                            <div className="col-lg-6 col-ms-12 pl-5">
                                                <div className="row">
                                                    <div className="col-lg-12  pr-0 container-dropdown-filter">
                                                        <p className="font-bold title-item-filter">REDES</p>
                                                        <div className="dropdown">
                                                            <a
                                                                ref={this.redesRef}
                                                                className="btn inputColor  dropdown-toggle btn-arrow"
                                                                href=" # "
                                                                role="button"
                                                                id="dropdownMenuLink"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false">
                                                                MOSTRAR TODAS
                                                            </a>

                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                
                                                              {this
                                                    .state
                                                    .filters
                                                    .map((item, key) => {
                                                        return  <a className="dropdown-item" href=" # ">Action</a>
                                                    })}

                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-12  pr-0 container-dropdown-filter">
                                                        <p className="font-bold title-item-filter">REGION</p>
                                                        <div className="dropdown">
                                                            <a
                                                                ref={this.estadoRef}
                                                                className="btn inputColor  dropdown-toggle btn-arrow2"
                                                                href=" # "
                                                                role="button"
                                                                id="dropdownMenuLink"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false">
                                                                NINGUNA
                                                            </a>

                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <a className="dropdown-item" href=" # ">Action</a>
                                                                <a className="dropdown-item" href=" # ">Another action</a>
                                                                <a className="dropdown-item" href=" # ">Something else here</a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-12  pr-0 container-dropdown-filter">
                                                        <p className="font-bold title-item-filter">COMPAÑIAS</p>
                                                        <div className="dropdown">
                                                            <a
                                                                ref={this.compañiaRef}
                                                                className="btn inputColor  dropdown-toggle btn-arrow3"
                                                                href=" # "
                                                                role="button"
                                                                id="dropdownMenuLink"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false">
                                                                COMPAÑIAS
                                                            </a>

                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <a className="dropdown-item" href=" # ">Action</a>
                                                                <a className="dropdown-item" href=" # ">Another action</a>
                                                                <a className="dropdown-item" href=" # ">Something else here</a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-12 p-3">
                                                        <button type="button" className="btn btn-danger btn-serach">BUSCAR</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 display-on-in-desktop description-filter">
                                        <p className="font-goth">SELECCIONES UNO O VARIOS FILTROS PARA REALIZAR SU BÚSQUEDA</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        )
    }

}

export default SectionList;
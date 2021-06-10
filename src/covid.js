const fetch= require('node-fetch')

function cisEquals(a, b) {
    return typeof a === 'string' && typeof b === 'string'

        ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
        : a === b;
}


async function  dataReturn(value){
	const dataReturn=[];
	await fetch('https://api.covid19india.org/data.json')
	.then(response => response.json())
	.then(data => {
		dataReturn.push(data);
	});

	return dataReturn[0][value];

}


async function  dataReturnDistrict(state){
	
	const dataReturn=[];
	await fetch('https://api.covid19india.org/state_district_wise.json')
	.then(response => response.json())
	.then(data => {
		dataReturn.push(data);
	});

	return ( state?dataReturn[0][state]:dataReturn[0]);

}

async function dataReturnDistrictOfState(state,district){
try {
	// console.log({state,district});
	const data= await dataReturnDistrict(state);
	const districts=(Object.keys(data.districtData));
	const districtsMatch=districts.filter(districtName=>cisEquals(districtName,district))
	// eslint-disable-next-line no-sequences
	.reduce( (res, key) => ((res[key] = data.districtData[key]), res), {} );
	return( district?districtsMatch:data.districtData);
}
catch (error) {
	console.log(error);
	return {};
}
}



async function caseDateReturn(date){
	const data= await dataReturn('cases_time_series');
	return date?data.find(element=>element.dateymd===date):data;
	
}



async function stateNameReturn(name){
	const data= await dataReturn('statewise');
	return (name?data.find(element=>cisEquals(element.state,name)):data);
	
}

async function stateCodeReturn(code){
	const data= await dataReturn('statewise');
	return (code?data.find(element=>cisEquals(element.statecode,code)):data);
	
}


async function totalTested(date){
	const data= await dataReturn('tested');
	return (date?data.find(element=>cisEquals(element.testedasof,date)):data);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// totalTested("5/6/2021")  //used
// .then(function(result) {
// 	   console.log(result) 
// 	})
// .catch(e=>{
// 	return {};
// })


// stateNameReturn('West Bengal') //used
// .then(function(result) {
//    console.log(result) 
// })
// .catch(e=>{
// 	return {};
// })


// dataReturnDistrictOfState("Tamil Nadu","madurai") //used
// .then(function(result) {
// 	console.log(result) 
//  })
// .catch(e=>{
// 	return {};
// })

// stateCodeReturn('WB')
// .then(function(result) {
// 	console.log(result) 
//  })
// .catch(e=>{
// 	return {};
// })

// caseDateReturn('2021-05-04') 
// .then(function(result) {
// 	console.log(result) 
//  })
// .catch(e=>{
// 	return {};
// })

export {caseDateReturn,stateCodeReturn,stateNameReturn,totalTested,dataReturnDistrictOfState,numberWithCommas}
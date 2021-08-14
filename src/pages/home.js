import React, { useState, useEffect } from "react";
import Loading from "../loading";
import {
  totalTested,
  stateNameReturn,
  numberWithCommas,
  caseDateReturn,
} from "../covid";
import Container from "../components/container";
import StateInfo from "../components/stateinfo";
import Dailyinfo from "../components/dailyInfo";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [casedaily, setCaseADaily] = useState({
    dailyconfirmed: "",
    dailydeceased: "",
    dailyrecovered: "",
    date: "",
    dateymd: "",
    totalconfirmed: "",
    totaldeceased: "",
    totalrecovered: "",
  });
  const [stateData, setStateData] = useState([]);
  const [totaldata1, settotaldata1] = useState({
    dailyrtpcrsamplescollectedicmrapplication: "",
    firstdoseadministered: "",
    frontlineworkersvaccinated1stdose: "",
    frontlineworkersvaccinated2nddose: "",
    healthcareworkersvaccinated1stdose: "",
    healthcareworkersvaccinated2nddose: "",
    over45years1stdose: "",
    over45years2nddose: "",
    over60years1stdose: "",
    over60years2nddose: "",
    positivecasesfromsamplesreported: "",
    "registration18-45years": "",
    registrationabove45years: "",
    registrationflwhcw: "",
    registrationonline: "",
    registrationonspot: "",
    samplereportedtoday: "",
    seconddoseadministered: "",
    source: "",
    source2: "",
    source3: "",
    source4: "",
    testedasof: "",
    testsconductedbyprivatelabs: "",
    "to60yearswithco-morbidities1stdose": "",
    "to60yearswithco-morbidities2nddose": "",
    totaldosesadministered: "",
    totalindividualsregistered: "",
    totalindividualstested: "",
    totalindividualsvaccinated: "",
    totalpositivecases: "",
    totalrtpcrsamplescollectedicmrapplication: "",
    totalsamplestested: "",
    totalsessionsconducted: "",
    updatetimestamp: "",
    years1stdose: "",
    years2nddose: "",
  });
  const [totaldata2, settotaldata2] = useState({
    dailyrtpcrsamplescollectedicmrapplication: "",
    firstdoseadministered: "",
    frontlineworkersvaccinated1stdose: "",
    frontlineworkersvaccinated2nddose: "",
    healthcareworkersvaccinated1stdose: "",
    healthcareworkersvaccinated2nddose: "",
    over45years1stdose: "",
    over45years2nddose: "",
    over60years1stdose: "",
    over60years2nddose: "",
    positivecasesfromsamplesreported: "",
    "registration18-45years": "",
    registrationabove45years: "",
    registrationflwhcw: "",
    registrationonline: "",
    registrationonspot: "",
    samplereportedtoday: "",
    seconddoseadministered: "",
    source: "",
    source2: "",
    source3: "",
    source4: "",
    testedasof: "",
    testsconductedbyprivatelabs: "",
    "to60yearswithco-morbidities1stdose": "",
    "to60yearswithco-morbidities2nddose": "",
    totaldosesadministered: "",
    totalindividualsregistered: "",
    totalindividualstested: "",
    totalindividualsvaccinated: "",
    totalpositivecases: "",
    totalrtpcrsamplescollectedicmrapplication: "",
    totalsamplestested: "",
    totalsessionsconducted: "",
    updatetimestamp: "",
    years1stdose: "",
    years2nddose: "",
  });

  const fetchtotaldata1 = async () => {
    setLoading(true);

    try {
      totalTested().then(function (result) {
        settotaldata1(
          result[Object.keys(result)[Object.keys(result).length - 1]]
        );
        settotaldata2(
          result[Object.keys(result)[Object.keys(result).length - 2]]
        );
        // console.log(result)
      });

      stateNameReturn().then(function (result) {
        if (result !== {}) {
          setStateData(result);
          // console.log(stateData);
        }
      });

      caseDateReturn().then(function (result) {
        if (result !== {}) {
          setCaseADaily(
            result[Object.keys(result)[Object.keys(result).length - 1]]
          );
          // console.log( result[Object.keys(result)[Object.keys(result).length - 1]]);
        }
      });

      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchtotaldata1();
  }, []);

  if (loading)
    return (
      <div className="page">
        <Loading />
      </div>
    );
  else {
    if (error)
      return (
        <div className="page">
          <h1>Error Loading the data, plese try again</h1>
          <Loading />
        </div>
      );
    else
      return (
        <div className="page">
          <div className="about-title">Maintain social distance(Dummy data Shown)</div>
          <div className="center-flex">
            <img
              className="covidimg"
              src={window.location.origin + "/research.png"}
              alt=""
            />
          </div>

          <div className="container1 top">
            <Container
              mssg1="Vaccination Dose"
              num1={
                totaldata1.totaldosesadministered -
                  totaldata2.totaldosesadministered >
                0
                  ? numberWithCommas(
                      totaldata1.totaldosesadministered -
                        totaldata2.totaldosesadministered
                    )
                  : "N/A"
              }
              mssg2="Vaccination Doses Day Before"
              num2={
                numberWithCommas(totaldata1.totaldosesadministered) || "N/A"
              }
              mssg3="Total Vaccination Doses"
            />

            <div className="c-block imp-info">
              <div className="c-view">
                <span>
                  <strong>
                    {numberWithCommas(
                      totaldata1.dailyrtpcrsamplescollectedicmrapplication
                    ) || "N/A"}
                  </strong>{" "}
                  Daily RT-PCR samples collected
                </span>
                <span>
                  <strong>
                    {numberWithCommas(totaldata1.firstdoseadministered) ||
                      "N/A"}
                  </strong>
                  First dose administered
                </span>
                <span>
                  <strong>
                    {numberWithCommas(totaldata1.seconddoseadministered) ||
                      "N/A"}
                  </strong>
                  Second dose administered
                </span>
                <span>
                  <strong>
                    {numberWithCommas(totaldata1.totalindividualsvaccinated) ||
                      "N/A"}
                  </strong>
                  Total individuals vaccinated
                </span>
              </div>
            </div>

            {stateData
              .filter((state) => state.statecode === "TT")
              .map((totalStates, index) => (
                <div className="c-block total-info" key={index}>
                  <div className="c-view">
                    <span>
                      <strong>{numberWithCommas(totalStates.active)}</strong>
                      Active Cases
                    </span>
                    <span>
                      <strong>{numberWithCommas(totalStates.confirmed)}</strong>{" "}
                      Total Cases
                    </span>
                    <span>
                      <strong>{numberWithCommas(totalStates.deaths)}</strong>
                      Deaths
                    </span>
                    <span>
                      <strong>{numberWithCommas(totalStates.recovered)}</strong>
                      Recovered
                    </span>
                  </div>
                </div>
              ))}
          </div>

          <Dailyinfo obj={casedaily} />

          <p className="heading">COVID-19 Statewise Status:</p>

          <div className="container1 state-container">
            {stateData.map((state, index) => (
              <StateInfo
                key={index}
                state={state.state}
                statecode={state.statecode}
                active={state.active}
                confirmed={state.confirmed}
                deaths={state.deaths}
                recovered={state.recovered}
                lastupdatedtime={state.lastupdatedtime}
              />
            ))}
          </div>
        </div>
      );
  }
};

export default Home;

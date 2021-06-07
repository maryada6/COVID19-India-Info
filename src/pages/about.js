import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const About = () => {
  return (
    <div className="page">
    <div className="about-container">
      <div className="about-title">Covid - 19 India Information Page</div>
      <img className="covidimg" src={window.location.origin + '/covid.jpg'}  alt="" />
      <div className="covid-details">
      <details>
        <summary>COVID-19 Overview</summary>
        <div className="covid-info">
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus.
        </div>
        <div className="covid-info">
          Most people infected with the COVID-19 virus will experience mild to
          moderate respiratory illness and recover without requiring special
          treatment. Older people, and those with underlying medical problems
          like cardiovascular disease, diabetes, chronic respiratory disease,
          and cancer are more likely to develop serious illness.
        </div>
        <div className="covid-info">
          The best way to prevent and slow down transmission is to be well
          informed about the COVID-19 virus, the disease it causes and how it
          spreads. Protect yourself and others from infection by washing your
          hands or using an alcohol based rub frequently and not touching your
          face.
        </div>
        <div className="covid-info">
          The COVID-19 virus spreads primarily through droplets of saliva or
          discharge from the nose when an infected person coughs or sneezes, so
          it’s important that you also practice respiratory etiquette (for
          example, by coughing into a flexed elbow).
        </div>
      </details>

      <details>
        <summary>COVID-19 Prevention</summary>
        <div className="covid-info">
          To prevent infection and to slow transmission of COVID-19, do the
          following:
          <ul className="Prevention" style={{ listStyleType: "disc" }}>
            <li> 
              Wash your hands regularly with soap and water, or clean them with
              alcohol-based hand rub.
            </li>
            <li> 
              Maintain at least 1 metre distance between you and people coughing
              or sneezing.
            </li>
            <li> Avoid touching your face.</li>
            <li> Cover your mouth and nose when coughing or sneezing.</li>
            <li> Stay home if you feel unwell.</li>
            <li> 
              Refrain from smoking and other activities that weaken the lungs.
            </li>
            <li> 
              Practice physical distancing by avoiding unnecessary travel and
              staying away from large groups of people.
            </li>
          </ul>
        </div>
      </details>

      <details>
        <summary>COVID-19 Symptoms</summary>
        <div className="covid-info">
          COVID-19 affects different people in different ways. 
          Most infected people will develop mild to moderate illness and recover without
          hospitalization. 
          Most common symptoms:
          <ul>
           <li>  fever.</li> 
          <li> dry cough. </li>
          <li> tiredness.</li>
           </ul>
          Less common symptoms:
           <ul>
          <li>  aches and pains. </li>
         <li>  sore throat. </li>
          <li>  diarrhoea. </li>
          <li>  conjunctivitis. </li>
          <li>  headache. </li>
          <li>  loss of taste or smell. </li>
          <li>  a rash on skin, or discolouration of fingers or toes. </li>
          <li>  Serious symptoms: difficulty breathing or shortness of breath.</li> 
          <li>  chest pain or pressure. </li>
          <li>  loss of speech or movement.</li>
          </ul>
           Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health
          facility. People with mild symptoms who are otherwise healthy should
          manage their symptoms at home. On average it takes 5–6 days from when
          someone is infected with the virus for symptoms to show, however it
          can take up to 14 days.
        </div>
      </details>
      </div>
    
      <div>
        Source API used:{" "}
        <a href="https://api.covid19india.org/">
          https://api.covid19india.org/
        </a>
      </div>
      <div className="contact-links">
            <a href="https://www.linkedin.com/in/maryada-kumar-lodha-d-a86285190"><AiOutlineLinkedin className="contact-icon" /></a>
            <a href="https://github.com/maryada6"><AiFillGithub className="contact-icon" /></a>
            </div>

    </div>
    </div>
  );
};

export default About;

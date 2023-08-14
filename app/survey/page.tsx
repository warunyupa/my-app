'use client'
import { useCallback,useState } from 'react';

import 'survey-core/defaultV2.min.css';
// import 'survey-core/modern.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
    pages: [{
      name: "PersonalDetails",
      elements: [{
        type: "text",
        name: "FirstName",
        title: "Enter your first name:"
      }, {
        type: "text",
        name: "LastName",
        title: "Enter your last name:"
      }, {
        type: "panel",
        name: "Contacts",
        state: "collapsed",
        title: "Contacts (optional)",
        elements: [{
          type: "text",
          name: "Telegram",
          title: "Telegram:"
        }, {
          type: "text",
          name: "GitHub",
          title: "GitHub username:"
        }]
      }]
    }]
  };
  
  

function App() {
  const [resultsList,setResultList] = useState('');
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender:any) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <>
        <Survey model={survey} />
    </>
  );
}

export default App;

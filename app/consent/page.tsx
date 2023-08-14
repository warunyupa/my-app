'use client'
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./consentModel";
import { themeJson } from "./theme";
import {useCallback} from 'react'

function SurveyComponent() {
    const survey = new Model(json);
    
    // You can delete the line below if you do not use a customized theme
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    const alertResults = useCallback((sender:any) => {
        const results = JSON.stringify(sender.data);
        alert(results);
      }, []);
    
      survey.onComplete.add(alertResults);

    return (<Survey model={survey} />);
}

export default SurveyComponent;
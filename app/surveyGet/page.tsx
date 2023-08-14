"use Client"
import { Model } from "survey-core";

const surveyJson = {
    "elements": [{
        "type": "rating",
        "name": "nps_score",
        "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
        "rateMin": 0,
        "rateMax": 10,
    }]
};

export default function Survey() {
    const survey = new Model(surveyJson);
    const npsQuestion = survey.getQuestionByName("nps_score");

    console.log(npsQuestion.value);
    // ===== or =====
    // console.log(survey.getValue("nps_score"));

    npsQuestion.value = 10;
    // ===== or =====
    // console.log(survey.setValue("nps_score", 10));
    return (
        <>
            {/* <Survey model={survey} /> */}
            <h1> Q-nps-score = {npsQuestion.value}</h1>
        </>
    )
}


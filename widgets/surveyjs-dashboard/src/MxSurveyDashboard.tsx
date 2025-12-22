import { ReactElement, createElement } from "react";


import "./ui/MxSurveyDashboard.css";
import SurveyDashboard, { SurveyDashboardProps } from "./components/SurveyDashboard";

export function MxSurveyDashboard({ surveyJson, surveyResults, licenseKey }: SurveyDashboardProps): ReactElement {
    return <SurveyDashboard surveyJson={surveyJson} surveyResults={surveyResults} licenseKey={licenseKey}  />;
}

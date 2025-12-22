// components/Dashboard.tsx
// ...
import { ReactElement, createElement,  useEffect, useState } from 'react';
import { VisualizationPanel,IVisualizationPanelOptions } from 'survey-analytics';
import 'survey-analytics/survey.analytics.css';
// components/Tabulator.tsx
import 'tabulator-tables/dist/css/tabulator.css';
import 'survey-analytics/survey.analytics.tabulator.css';
import { Tabulator } from 'survey-analytics/survey.analytics.tabulator';

import { Model } from 'survey-core';

import { EditableValue } from "mendix";

import { setLicenseKey } from "survey-core";
import * as XLSX from "xlsx";


setLicenseKey("");
// Define the expected prop types
export interface SurveyDashboardProps {
    surveyJson?: EditableValue<string>; // Optional prop if survey JSON is passed dynamically
    licenseKey?: string; // Optional prop for license key
    surveyResults?: EditableValue<string>;
}

const vizPanelOptions: IVisualizationPanelOptions = {
  allowHideQuestions: false
}


// Main component for rendering the survey dashboard
  

  export default function SurveyDashboard({ surveyJson, surveyResults,licenseKey  }: SurveyDashboardProps): ReactElement {
    const [survey, setSurvey] = useState<Model | null>(null);
    const [vizPanel, setVizPanel] = useState<VisualizationPanel | null>(null);
    const [surveyDataTable, setSurveyDataTable] = useState<Tabulator>();
    if(licenseKey && licenseKey !== "") {
      setLicenseKey(licenseKey); // Set license key if provided
    }
    // Create or update the survey when surveyJson changes
    useEffect(() => {
        if (surveyJson?.status === "available" && typeof surveyJson.value === "string") {
            try {
                const parsed = JSON.parse(surveyJson.value);
                const newSurvey = new Model(parsed);
                setSurvey(newSurvey);
            } catch (e) {
                console.error("Invalid surveyJson:", e);
            }
        }
    }, [surveyJson?.value]);
     
    // Create vizPanel when both survey and surveyResults are ready
    useEffect(() => {
        if (
            survey &&
            surveyResults?.status === "available" &&
            typeof surveyResults.value === "string"
        ) {
            try {
                const parsedResults = JSON.parse(surveyResults.value);
                const newVizPanel = new VisualizationPanel(
                    survey.getAllQuestions(),
                    parsedResults,
                    vizPanelOptions
                );
                setVizPanel(newVizPanel);
                if(!surveyDataTable && !!survey){
                  const surveyDataTable = new Tabulator(
                    survey,
                    parsedResults, {  xlsx: XLSX }
                  );
                  setSurveyDataTable(surveyDataTable);
                }
            } catch (e) {
                console.error("Invalid surveyResults:", e);
            }
        }
    }, [survey, surveyResults?.value]);

    
    useEffect(() => {
      surveyDataTable?.render("surveyDataTable");
      return () => {
        const el = document.getElementById("surveyDataTable");
        if (el) el.innerHTML = "";
      };
    }, [surveyDataTable]);


    // Render vizPanel to DOM
    useEffect(() => {
        if (vizPanel) {
            vizPanel.render("surveyVizPanel");
            return () => vizPanel.clear(); // Clean up
        }
    }, [vizPanel]);

    return(
      <div>
         <div id="surveyDataTable" />
        <div id="surveyVizPanel" />
      </div>
      
    );
}


 

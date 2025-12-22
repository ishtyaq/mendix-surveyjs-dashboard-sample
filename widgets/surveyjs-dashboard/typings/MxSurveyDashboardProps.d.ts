/**
 * This file was generated from MxSurveyDashboard.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface MxSurveyDashboardContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    licenseKey: string;
    surveyJson: EditableValue<string>;
    surveyResults: EditableValue<string>;
}

export interface MxSurveyDashboardPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    licenseKey: string;
    surveyJson: string;
    surveyResults: string;
}

import { ReactElement, createElement } from "react";
import { MxSurveyDashboardPreviewProps } from "../typings/MxSurveyDashboardProps";

export function preview(_values: MxSurveyDashboardPreviewProps): ReactElement {
    // Nice-looking Studio Pro preview (Design mode)
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: 12,
                padding: 12,
                fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
                background: "#fff"
            }}
        >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>SurveyJS Dashboard</div>
            <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 10 }}>
                Table + analytics panel will render at runtime.
            </div>

            <div style={{ display: "grid", gap: 10 }}>
                <div
                    style={{
                        border: "1px dashed #cfcfcf",
                        borderRadius: 10,
                        padding: 10,
                        height: 80
                    }}
                >
                    <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>Results table (placeholder)</div>
                    <div style={{ height: 8, background: "#f2f2f2", borderRadius: 6, marginBottom: 6 }} />
                    <div style={{ height: 8, background: "#f2f2f2", borderRadius: 6, width: "70%" }} />
                </div>

                <div
                    style={{
                        border: "1px dashed #cfcfcf",
                        borderRadius: 10,
                        padding: 10,
                        height: 110
                    }}
                >
                    <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>Charts/analytics (placeholder)</div>
                    <div style={{ display: "flex", gap: 8 }}>
                        <div style={{ flex: 1, height: 70, background: "#f2f2f2", borderRadius: 10 }} />
                        <div style={{ flex: 1, height: 70, background: "#f2f2f2", borderRadius: 10 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/MxSurveyDashboard.css");
}

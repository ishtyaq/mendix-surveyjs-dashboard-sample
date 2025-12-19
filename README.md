# Mendix SurveyJS Dashboard Widget – Sample App

This repository contains a **Mendix sample application** demonstrating how to use the **SurveyJS Dashboard widget** to visualize survey results using tables and analytics charts.

It builds on my earlier SurveyJS form integration and extends it with **enterprise-grade reporting** using the SurveyJS Dashboard component.


## What this sample shows

* Rendering SurveyJS **analytics dashboard** inside Mendix
* Displaying:

  * Tabular survey results
  * Interactive charts (via SurveyJS Dashboard)
* Passing Survey JSON and response data dynamically from Mendix
* Clean separation between:

  * Survey capture
  * Survey visualization

This is intended as a **reference implementation**, not a production-ready app.


## Important: License Requirement ⚠️

The **SurveyJS Dashboard** component is a **commercial product**.

* A valid **SurveyJS Dashboard license** is required for **production use**
* Without a license, the dashboard may display a warning message
* The basic SurveyJS **form rendering library is free**, but the dashboard is not

👉 See SurveyJS licensing details:
[https://surveyjs.io/pricing](https://surveyjs.io/pricing)


## Repository contents

```
/widgets
  └── surveyjs-dashboard
/mendix
  └── Sample Mendix application
README.md
```

* The widget source is included for transparency and learning
* The Mendix app demonstrates how to wire survey data to the dashboard


## How it works (high level)

1. Survey definition (JSON) is stored in Mendix
2. Survey responses are collected and stored as JSON
3. The SurveyJS Dashboard widget:

   * Builds a SurveyJS model from the JSON
   * Feeds responses into the analytics engine
   * Renders tables and charts in Mendix


## Intended audience

* Mendix developers integrating SurveyJS
* Teams already using SurveyJS in enterprise environments
* Developers evaluating SurveyJS analytics inside low-code platforms


## Not included / out of scope

* SurveyJS license procurement
* Advanced theming or styling
* Large-scale performance tuning
* Authentication or access control


## Disclaimer

This sample is provided **as-is** for learning and demonstration purposes.
It is not affiliated with or endorsed by SurveyJS.


## Related projects

* **SurveyJS Form Widget for Mendix**
  [https://github.com/ishtyaq/mendix-surveyjs-widget](https://github.com/ishtyaq/mendix-surveyjs-widget)

---

## Author

**Ishtiaq Ahmad**
Mendix Expert Developer | Low-Code & Integration Architect

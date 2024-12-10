# Security Dashboard

**Note: the use of Highcharts is licensed under an approved educational license for this project. However, due to the limitations of the license agreement, any PRs that make changes or use of Highcharts cannot be merged. Due to this limitation, if the project gains any traction, the use of Highcharts will have to be reconsidered.**

*TODO: Add brief introduction to the project.*

**Motivation**

Having reviewed a fair number of ISO standards, it was time to look online at some actual tooling. It turns out there are some incredibly interesting, useful *(and some, scary)* tools out there! Given that we're designing a dashboard anyway, why not just throw a mock-up together? As such, this mini project *(for the time being)* intends to mimic an actual solution, drawing from existing cybersecurity products.

## TODO: 
  
* ~~setup vite for bundling~~
* ~~add useful resources to repo~~
* ~~add .gitignore~~
* ~~wireframes~~
* ~~grab boilerplate from [flowbite](https://flowbite.com/blocks/)~~
* ~~translate/implement wireframes for dashboard ~~
* ~~consider other pages:~~
  * ~~Audit Logs~~
  * ~~Policies~~
  * ~~SIEM~~
  * Add a seperate page for references on the front-end
* fix README.md
* Review additional ISO standards
* Revise Dashboard

## Tasks

**TODO: Include trello link for publicly viewable progress initially.**
**TODO: Consider migrating to GitHub Projects if anyone seems interested in building this into something more than a mock-up dashboard.**

*Contributors are welcome! Please fork, modify and open a PR if you would like to contribute. Contributions guidelines will be added when the minimum set of constraints are satisfied.*

* Epic: **Provide a simple mock up for a security dashboard.** *(In Progress)*
  * ~~Sprint 1: Draft Wireframes, Grab Boilerplate, Built out template.~~
    * ~~Task: Draft Wireframes (at least one).~~
    * ~~Task: Pull in boilerplate from flowbite.~~
    * ~~Task: Put together an initial template.~~
    * ~~Task: Include a header, with links for:~~
      * ~~Dashboard~~
      * ~~Audit Logs~~
      * ~~Policies~~
      * ~~SIEM (strech goal)~~
  * ~~Sprint 2: Produce UI to report metrics in the form of cards.~~
    * ~~Task: Integrate eight generic, blank cards into body of the Dashboard page.~~
    * ~~Task: Fill each card with any metric for the time being, as they will be replaced with metrics from the BSC.~~
    * ~~Task: Allow for each card to take the form of reporting metrics as either:~~
      * ~~Percentages (with a progress bar), such as test coverage, or MFA coverage.~~
      * ~~Fractional Completion Metrics (e.g. 3/4 audits passed this year)~~
      * ~~Counts (e.g. Unaddressed Certificate Expiries, within the last 7 days).~~
    * ~~Ensure the UI is mobile responsive.~~
  * ~~Sprint 3: Produce visualisation features in the form of charts, for the dashboard.~~
    * ~~Task: Select appropriate UI libraries, e.g. charts.js, d3.js (more appropriate for SIEM).~~
    * ~~Task: Apply for an educational license from Highcharts.~~
    * ~~Task: consider which metrics or alternative combinatorial metrics ought to be visualised. ~~
    * ~~Task: Produce at least two (consider three) visualisations for the dashbaord.~~
    * ~~Task: Ensure the dashboard continues to be mobile responsive.~~
  * ~~Sprint 4: Produce Effective Tables for the Dashboard (at least one).~~
    * ~~Task: Select an appropriate table/datatables library (something resembling a CRUD list would be fine).~~
    * ~~Task: Implement a metric or two on one or two tables (consider: Vulnerability Tracking at minimum).~~
    * ~~Task: Ensure the dashboard continues to be mobile responsive.~~
  * Sprint 5: Add finishing touches.
    * ~~Task: Consider adding a footer.~~
    * Task: Add a references page, this is a nice touch, given this is an education/academic project (but very practical).
    * ~~Task: Carefully consisder UX and choice of colours.~~
    * Task: Any other considerations that may have been overlooked.
  * Sprint 6: Release current implementation for public consumption and request contributors.
    * Task: Set up a basic CI/CD pipeline.
    * Task: Modify README.md
      * Task: Add contributing guidelines and project roadmap.
      * Task: Add list of dependencies:
        * `node` + minimum required version number
      * Task: Add instructions for use:
        * `git clone`
        * `cd security-dashboard`
        * `npm install`
        * `npm run dev`
      * Task: Any final changes.
      * Task: Release first iteration.

* Epic: **Implement Other Pages**
  * *TODO: Fill out task list*

* Epic: **Simulate Real-Time incoming data, this will require managing state and an a back-end API, at this point, will probably need to switch to using something like React.**
  * *TODO: Fill out task list*

* Epic: **Simulate Real-time attacks on request, essentially making this an educational tool for the use of monitoring and SIEM for identification, containment and remediation.**
  * *TODO: Fill out task list*

## Useful links, resources and references: 

*ahem, I'm not totally sure these belong here, but they're resources that I thought may be of useful to refer back to (and I have far too many browser tabs open), so I'm dropping them here! Maybe someone else will find something useful!*

* **Tooling, Products & Use Cases:**

  * [https://www.ibm.com/qradar](https://www.ibm.com/qradar)
  * [https://www.elastic.co/security/continuous-monitoring](https://www.elastic.co/security/continuous-monitoring)
  * [https://www.tenable.com/try](https://www.tenable.com/try)
  * [https://www.splunk.com/](https://www.splunk.com/)
  * [https://threatmap.bunkerweb.io/](https://threatmap.bunkerweb.io/)
  * [https://kyverno.github.io/policy-reporter-docs/](https://kyverno.github.io/policy-reporter-docs/)
  * [https://cambridge-intelligence.com/use-cases/cybersecurity/](https://cambridge-intelligence.com/use-cases/cybersecurity/)
  * [https://www.netwitness.com/](https://www.netwitness.com/)
  * [https://www.paloaltonetworks.com/cortex/cortex-xsoar](https://www.paloaltonetworks.com/cortex/cortex-xsoar)

* **Static Analysis Security Testing Tooling:**

  * [https://github.com/sola-st/DynaPyt](https://github.com/sola-st/DynaPyt)
  * [https://github.com/google/atheris](https://github.com/google/atheris)
  * [https://www.stackhawk.com/](https://www.stackhawk.com/)
  * [https://snyk.io/](https://snyk.io/)
  * [https://semgrep.dev/](https://semgrep.dev/)
  * [https://github.com/aldanor/typo](https://github.com/aldanor/typo)
  * [https://www.laravel-enlightn.com/](https://www.laravel-enlightn.com/)

* **Resources:**

  * [https://transform.cisco.com/opsadmin/2024cybersecurityreadinessindex](https://transform.cisco.com/opsadmin/2024cybersecurityreadinessindex)
  * [https://www.isaca.org/resources/cobit](https://www.isaca.org/resources/cobit)
  * [https://owasp.org/www-community/Source_Code_Analysis_Tools](https://owasp.org/www-community/Source_Code_Analysis_Tools)
  * [https://github.com/analysis-tools-dev/dynamic-analysis?tab=readme-ov-file](https://github.com/analysis-tools-dev/dynamic-analysis?tab=readme-ov-file)
  * [https://datatracker.ietf.org/doc/html/rfc6819](https://datatracker.ietf.org/doc/html/rfc6819)
  * [https://auth0.com/blog/the-backend-for-frontend-pattern-bff/](https://auth0.com/blog/the-backend-for-frontend-pattern-bff/)
  * [https://auth0.com/blog/oauth2-security-enhancements/#Demonstrating-Proof-of-Possession--DPoP](https://auth0.com/blog/oauth2-security-enhancements/#Demonstrating-Proof-of-Possession--DPoP)
  * [https://www.informationweek.com/cyber-resilience/where-are-you-on-the-cybersecurity-readiness-index-cisco-thinks-you-re-probably-overconfident](https://www.informationweek.com/cyber-resilience/where-are-you-on-the-cybersecurity-readiness-index-cisco-thinks-you-re-probably-overconfident)
  * [https://newsroom.cisco.com/c/dam/r/newsroom/en/us/interactive/cybersecurity-readiness-index/documents/Cisco_Cybersecurity_Readiness_Index_FINAL.pdf](https://newsroom.cisco.com/c/dam/r/newsroom/en/us/interactive/cybersecurity-readiness-index/documents/Cisco_Cybersecurity_Readiness_Index_FINAL.pdf)
  * 
  
* **Relevant Standards, Frameworks & Maturity Models:**

  * [ISO 38500 Governance of IT for the Organization](https://www.bsigroup.com/en-AE/industries-and-sectors/Government/ISO-38500-Governance-of-IT-for-the-Organization/) *- reviewed.*
  * [ISO 31000 Risk Management](https://www.bsigroup.com/en-IN/ISO-31000-Risk-Management/) *- reviewed.*
  * [Systems trustworthiness, BS 10754-1:2018](https://knowledge.bsigroup.com/products/information-technology-systems-trustworthiness-governance-and-management-specification?version=standard) *- reviewed.*
  * [ISO/IEC 27001 - Information Security Management System](https://www.bsigroup.com/en-GB/products-and-services/standards/iso-iec-27001-information-security-management-system/) *- briefly reviewed.*
  * [NIST CSF 2.0](https://www.nist.gov/cyberframework) *(United States)* *- briefly reviewed.*
  * [DMMI ISACA, NIST CSF-800-171 & ISO/IEC (27001, 27002)](800-https://www.isaca.org/enterprise/cmmi-cybermaturity-platform) *- briefly reviewed.*
  * [BS ISO/IEC 38507:2022 - Information technology. Governance of IT. Governance implications of the use of artificial intelligence by organizations](https://knowledge.bsigroup.com/products/information-technology-governance-of-it-governance-implications-of-the-use-of-artificial-intelligence-by-organizations?version=standard) *- TODO: Review.*
  * [ISO 23894 - Information technology. Artificial intelligence. Guidance on risk management]() *- TODO: Review.*
  * [BS EN ISO/IEC 23053:2023](https://knowledge.bsigroup.com/products/framework-for-artificial-intelligence-ai-systems-using-machine-learning-ml-1?version=standard) *- TODO: Review.*
  * [BS EN ISO/IEC 42006 Information technology — Artificial intelligence — Requirements for bodies providing audit and certification of artificial intelligence management systems](https://standardsdevelopment.bsigroup.com/projects/2023-00484#/section) *- TODO: Review.*
  * [BS EN ISO/IEC 42005 Information technology — Artificial intelligence — AI system impact assessment](https://standardsdevelopment.bsigroup.com/projects/2022-01874#/section) *- TODO: Review.*
  
  *//TODO: Add References to Zotero*
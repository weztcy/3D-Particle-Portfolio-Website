import { CertificationItem } from "../types";

// Data guidelines for future certifications:
// - Keep each overview at 600 characters or fewer. Explain what this specific
//   credential covers, who issued it, and how its documented topics fit together;
//   do not merely repeat the title or list the first few modules.
// - Keep each keyModules.description at 210 characters or fewer. Give every
//   module a distinct, substantive explanation of its topic and practical context.
//   Avoid generic templates and unsupported claims about completed projects,
//   measured results, or verified proficiency.
// - Replace example.com credential URLs with official verification links when available.
export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    "id": "public-speaking-training",
    "code": "CERT-01",
    "title": "Public Speaking Training",
    "issuer": "Olpedia Global Teknologi",
    "year": "2022",
    "issueDate": "December 2022",
    "credentialId": "014/4/SYEF/PS/OEC/XII/2022",
    "credentialUrl": "https://example.com/credentials/public-speaking-training",
    "imageUrl": "/images/certifications/public-speaking-training.webp",
    "images": [
      "/images/certifications/public-speaking-training.webp"
    ],
    "overview": "Public Speaking Training is a communication-focused training credential issued by Olpedia Global Teknologi in December 2022. Its listed training highlights cover the progression from public speaking fundamentals to engaging an audience, communicating a message effectively, and delivering a presentation. Taken together, these topics describe how to prepare a talk around a clear purpose, make its content understandable to listeners, and convey it through spoken delivery; the source does not specify a particular speech, event, or assessed performance.",
    "keyModules": [
      {
        "title": "Public Speaking Fundamentals",
        "description": "Introduces the core elements of preparing and structuring a public talk. The focus is on defining a purpose, ordering key points, and shaping an opening and conclusion that support the message."
      },
      {
        "title": "Audience Engagement",
        "description": "Covers ways to hold audience attention and adapt a message to listeners. It considers questions, eye contact, and examples as ways to keep a presentation relevant to its audience."
      },
      {
        "title": "Effective Communication",
        "description": "Focuses on conveying ideas clearly through word choice, tone, and delivery. It distinguishes a main takeaway from supporting points so listeners can follow an argument without losing context."
      },
      {
        "title": "Presentation Delivery",
        "description": "Addresses presenting a prepared message with clear pacing and confidence. It connects speaking pace, pauses, and visual support to how effectively an audience receives the message."
      }
    ]
  },
  {
    "id": "leadership-training",
    "code": "CERT-02",
    "title": "Leadership Training",
    "issuer": "Olpedia Global Teknologi",
    "year": "2022",
    "issueDate": "December 2022",
    "credentialId": "011/1/SYEF/L/OEC/XII/2022",
    "credentialUrl": "https://example.com/credentials/leadership-training",
    "imageUrl": "/images/certifications/leadership-training.webp",
    "images": [
      "/images/certifications/leadership-training.webp"
    ],
    "overview": "Leadership Training is a leadership-skills training credential issued by Olpedia Global Teknologi in December 2022. The recorded scope covers leadership fundamentals, managing a team, making decisions, and communicating effectively with others. These topics connect setting direction with coordinating people and explaining choices, rather than documenting a specific management position, team size, or leadership outcome.",
    "keyModules": [
      {
        "title": "Leadership Fundamentals",
        "description": "Introduces leadership roles and principles for guiding a group. The topic connects setting direction with accountability for decisions and outcomes shared by the group."
      },
      {
        "title": "Team Management",
        "description": "Covers coordinating responsibilities and communication within a team. It considers how to distribute tasks, align expectations, and follow up when priorities or workloads change."
      },
      {
        "title": "Decision Making",
        "description": "Explores weighing options and choosing a course of action as a leader. It examines the trade-offs between available information, urgency, and the effects of a decision on others."
      },
      {
        "title": "Effective Communication",
        "description": "Focuses on sharing direction and feedback clearly with team members. It emphasizes making expectations understandable and using feedback to resolve gaps in understanding."
      }
    ]
  },
  {
    "id": "toefl-itp",
    "code": "CERT-03",
    "title": "TOEFL ITP",
    "issuer": "Center for Foreign Language Training",
    "year": "2025",
    "issueDate": "January 2025",
    "credentialId": "CFLT-20250114-OL00479",
    "credentialUrl": "https://example.com/credentials/toefl-itp",
    "imageUrl": "/images/certifications/toefl-itp.webp",
    "images": [
      "/images/certifications/toefl-itp.webp"
    ],
    "overview": "This TOEFL ITP credential from the Center for Foreign Language Training, dated January 2025, records a total score of 517. The documented language areas are listening comprehension, structure and written expression, and reading comprehension: understanding spoken English, recognizing written grammar and usage, and interpreting passages. The source provides the overall score but no section scores or separate claims about speaking or writing performance.",
    "keyModules": [
      {
        "title": "TOEFL ITP Score: 517",
        "description": "Records the TOEFL ITP score of 517 stated on the credential. This is a reported test result, not a separate learning module or a claim about individual section scores."
      },
      {
        "title": "Listening Comprehension",
        "description": "Covers understanding spoken English in the test's listening section. Typical tasks require identifying a speaker's main idea, details, and intent from audio rather than relying on isolated words."
      },
      {
        "title": "Structure & Written Expression",
        "description": "Addresses English grammar and written-expression questions. The section calls for recognizing sentence structure and choosing wording that follows standard written English conventions."
      },
      {
        "title": "Reading Comprehension",
        "description": "Covers reading passages and interpreting their meaning in English. Questions may ask for a passage's main point, supporting details, or an inference grounded in the text."
      }
    ]
  },
  {
    "id": "certification-scheme-of-web-developer",
    "code": "CERT-04",
    "title": "Certification Scheme of Web Developer",
    "issuer": "Badan Nasional Sertifikasi Profesi",
    "year": "2025",
    "issueDate": "January 2025",
    "credentialId": "62010213150073582025",
    "credentialUrl": "https://example.com/credentials/certification-scheme-of-web-developer",
    "imageUrl": "/images/certifications/web-developer-certification1.webp",
    "images": [
      "/images/certifications/web-developer-certification1.webp",
      "/images/certifications/web-developer-certification2.webp"
    ],
    "overview": "Certification Scheme of Web Developer is a web-development competency credential issued by Badan Nasional Sertifikasi Profesi in January 2025. Its scope moves from analyzing tools, scalability, libraries, and user experience to structured and object-oriented programming, algorithms, SQL, and database access. The listed competencies also include technology migration, debugging, multimedia, code review, static testing, application alerts, resource monitoring, and software updates. The source does not specify a product, programming language, or performance result.",
    "keyModules": [
      {
        "title": "Analyzing the tools",
        "description": "Covers assessing tools needed for a web development task. The analysis relates a tool's purpose and compatibility to the requirements of a particular application."
      },
      {
        "title": "Analyzing the software scalability",
        "description": "Addresses evaluating how software can accommodate changing demand. It distinguishes growth in users or data from the design choices that could become performance bottlenecks."
      },
      {
        "title": "Performing the library identification, required component or framework",
        "description": "Covers identifying libraries, components, or frameworks required for a solution. Selection considers what each dependency contributes, how it integrates, and whether it duplicates existing functionality."
      },
      {
        "title": "Designing the user experience",
        "description": "Focuses on planning how users navigate and interact with a web interface. The focus is on matching interaction flows and information hierarchy to user tasks before implementation."
      },
      {
        "title": "Implementing the structured programming",
        "description": "Covers organizing program logic with structured control flow. Conditional branches, loops, and functions provide a way to make the flow of a program explicit and testable."
      },
      {
        "title": "Implementing the object-oriented programming",
        "description": "Addresses modeling program behavior with objects and classes. Classes and encapsulation help separate responsibilities while keeping related state and behavior together."
      },
      {
        "title": "Using the SQL",
        "description": "Covers querying and managing relational data using SQL. Queries can filter, join, and summarize records to answer application data needs."
      },
      {
        "title": "Implementing the data basis access",
        "description": "Addresses connecting application code to stored data. It considers how queries and persistence operations fit into application behavior and how errors are handled."
      },
      {
        "title": "Implementing the programming algorithm",
        "description": "Covers designing a sequence of steps to solve programming problems. The emphasis is on inputs, transformations, and expected outputs before choosing a code structure."
      },
      {
        "title": "Performing the migration to the new technology",
        "description": "Addresses moving existing software toward a newer technology. It considers compatibility, data conversion, and regression risks when replacing an existing approach."
      },
      {
        "title": "Performing the debugging",
        "description": "Focuses on finding, isolating, and correcting program errors. Reproducing a failure and narrowing its cause helps distinguish a symptom from the underlying defect."
      },
      {
        "title": "Implementing the multimedia programming",
        "description": "Covers incorporating multimedia content into an application. The topic includes how images, audio, or video can be integrated without obscuring application behavior."
      },
      {
        "title": "Implementing the code review",
        "description": "Addresses reviewing source code for correctness and maintainability. A review examines logic, readability, and possible edge cases before changes become part of a codebase."
      },
      {
        "title": "Performing the program code testing statically",
        "description": "Covers checking program code without executing it. Static checks can surface syntax, typing, and style problems before runtime testing begins."
      },
      {
        "title": "Implementing the alert notification when the application is problematic",
        "description": "Addresses notifying users or maintainers when an application has a problem. It considers what failure information an alert should include and who needs to receive it."
      },
      {
        "title": "Performing the resource supervision used by the application",
        "description": "Covers monitoring resources consumed by an application. Tracking memory, processing, or other resource usage can help identify limits before they affect users."
      },
      {
        "title": "Performing the software update",
        "description": "Addresses applying updates to keep software current. Updates require checking dependencies and behavior so changes do not break existing functionality."
      }
    ]
  },
  {
    "id": "microsoft-excel-basic",
    "code": "CERT-05",
    "title": "Microsoft Excel Basic",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "February 2026",
    "credentialId": "MS-20260223-cui4Bn8ZTAcuoudcgrT5",
    "credentialUrl": "https://example.com/credentials/microsoft-excel-basic",
    "imageUrl": "/images/certifications/microsoft-excel-basic.webp",
    "images": [
      "/images/certifications/microsoft-excel-basic.webp"
    ],
    "overview": "Microsoft Excel Basic is a MySkill credential dated February 2026 that covers foundational spreadsheet use. Its topics begin with the Home tab, Excel features, and the relationship between worksheets and workbooks, then move into basic formulas, cleansing and sorting or filtering data, formatting cells, aggregating values, and conditional IF logic. The scope is organizing and calculating with everyday tabular data in Excel, not a claim about a specific dataset or professional deployment.",
    "keyModules": [
      {
        "title": "Exploring Microsoft Excel Home Tab",
        "description": "Introduces commands and controls available on Excel's Home tab. Common controls include clipboard actions, alignment, number formats, and basic cell editing."
      },
      {
        "title": "Microsoft Excel Features",
        "description": "Surveys Excel features used to work with spreadsheet data. The emphasis is on choosing appropriate tools for entering, organizing, and reviewing tabular information."
      },
      {
        "title": "Worksheet and Workbook in Microsoft Excel",
        "description": "Explains how worksheets fit within an Excel workbook. A workbook contains multiple sheets, which allows related tables or calculations to be separated while remaining in one file."
      },
      {
        "title": "Basic Formula",
        "description": "Introduces formulas for calculating values from cells. Cell references and arithmetic operators show how a result changes when its input values change."
      },
      {
        "title": "Data Cleansing, Sort & Filter",
        "description": "Covers cleaning entries, ordering rows, and filtering a data range. These steps help isolate relevant records and correct inconsistent values before calculations begin."
      },
      {
        "title": "Data Formatting",
        "description": "Addresses formatting cells to make spreadsheet data easier to read. Number formats, alignment, and visual emphasis can distinguish input data from calculated results."
      },
      {
        "title": "Agregate Data",
        "description": "Covers combining values into summary figures. Functions such as SUM or COUNT illustrate how a range of records becomes a useful total or count."
      },
      {
        "title": "Conditional If-Else",
        "description": "Introduces conditional formulas that return results based on a test. An IF expression checks a condition and selects one value when it is true and another when it is false."
      }
    ]
  },
  {
    "id": "microsoft-excel-intermediate",
    "code": "CERT-06",
    "title": "Microsoft Excel Intermediate",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "February 2026",
    "credentialId": "MS-20260225-kxGOhHbAHino0Ycrvsp4",
    "credentialUrl": "https://example.com/credentials/microsoft-excel-intermediate",
    "imageUrl": "/images/certifications/microsoft-excel-intermediate.webp",
    "images": [
      "/images/certifications/microsoft-excel-intermediate.webp"
    ],
    "overview": "Microsoft Excel Intermediate is a MySkill credential dated February 2026 focused on working with and presenting more complex spreadsheet data. The listed topics include lookups and INDEX/MATCH, mathematical, logical, information, text, and date/time functions, error handling, dynamic arrays, tables, and PivotTables. Formatting, charts, interactive charts, visualization practices, and print/page setup complete the scope, connecting formula-driven analysis with readable reports. No particular workbook or business result is specified in the source.",
    "keyModules": [
      {
        "title": "Lookup and Index Match",
        "description": "Covers retrieving matching values using lookup formulas and INDEX/MATCH. A lookup key identifies a corresponding row; INDEX/MATCH separates finding the row from returning a value."
      },
      {
        "title": "Data Formatting",
        "description": "Addresses consistent formatting of spreadsheet values and cells. It considers how numeric, date, and text formats affect interpretation without changing the underlying value."
      },
      {
        "title": "Data Visualization",
        "description": "Covers presenting spreadsheet data visually to reveal patterns. The choice of visual form depends on whether the goal is comparison, composition, or change over time."
      },
      {
        "title": "Chart",
        "description": "Introduces choosing and creating charts from worksheet data. Axes, labels, and series should reflect the source range so the chart remains interpretable."
      },
      {
        "title": "Pivot Table",
        "description": "Covers summarizing and regrouping data with PivotTables. Fields can be moved between rows, columns, and values to compare the same data from different angles."
      },
      {
        "title": "Intermediate Math Function",
        "description": "Explores mathematical functions beyond basic arithmetic formulas. Functions can combine calculations across ranges while reducing repeated manual steps."
      },
      {
        "title": "Error Handling",
        "description": "Covers handling formula errors and unexpected spreadsheet results. Checking error types and input assumptions makes formulas easier to diagnose and maintain."
      },
      {
        "title": "Table Features",
        "description": "Addresses organizing data with Excel table features. Structured references and table expansion help formulas stay aligned as rows are added."
      },
      {
        "title": "Date and Time Manipulation",
        "description": "Covers calculating with and formatting dates and times. Date arithmetic and component extraction support intervals, schedules, and grouped reporting periods."
      },
      {
        "title": "Logical and Information Function",
        "description": "Introduces logical tests and information functions in formulas. Logical functions combine conditions, while information functions help inspect the kind or state of a value."
      },
      {
        "title": "Dynamic Array Formulas",
        "description": "Covers formulas that return results across multiple cells. Spilled results can populate adjacent cells, making some multi-row transformations possible with one formula."
      },
      {
        "title": "Printing and Page Setup",
        "description": "Addresses preparing worksheets for printing and adjusting page layout. Print areas, scaling, and page breaks determine whether a worksheet remains legible on paper or as a PDF."
      },
      {
        "title": "Referencing Cell and Text Formulas",
        "description": "Covers cell references and formulas that transform text. Relative and absolute references control how formulas change when copied; text functions help split or combine strings."
      },
      {
        "title": "Interactive Charts",
        "description": "Explores charts that respond to changes in the underlying data. Changing source values or selections can update the view without rebuilding the chart from scratch."
      },
      {
        "title": "Data Visualization Best Practices",
        "description": "Addresses clear chart choices and presentation of visualized data. Clear labels and proportionate scales reduce the chance that a chart misrepresents its source data."
      }
    ]
  },
  {
    "id": "microsoft-excel-advanced",
    "code": "CERT-07",
    "title": "Microsoft Excel Advanced",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "February 2026",
    "credentialId": "MS-20260226-oLsz2W9CNAA3uSGFc7Lm",
    "credentialUrl": "https://example.com/credentials/microsoft-excel-advanced",
    "imageUrl": "/images/certifications/microsoft-excel-advanced.webp",
    "images": [
      "/images/certifications/microsoft-excel-advanced.webp"
    ],
    "overview": "Microsoft Excel Advanced is a MySkill credential dated February 2026 covering four named advanced spreadsheet areas: Power Pivot, What If Analysis, Macro VBA, and advanced charting techniques. Together these topics address related-data analysis, comparing outcomes under different inputs, automating repeatable spreadsheet steps, and presenting more complex results visually. The record identifies the subject areas but does not document a particular model, macro, or dashboard built during the course.",
    "keyModules": [
      {
        "title": "Power Pivot",
        "description": "Covers working with related data and calculations in Power Pivot. Related tables and measures allow summaries that go beyond a single flat worksheet."
      },
      {
        "title": "What If Analysis",
        "description": "Explores varying input values to compare possible spreadsheet outcomes. Changing assumptions helps compare scenarios rather than treating one calculation as a certain prediction."
      },
      {
        "title": "Macro VBA",
        "description": "Introduces using VBA macros to automate Excel actions. A macro records or defines repeatable steps, but its inputs and results still need review."
      },
      {
        "title": "Advanced Charting Techniques",
        "description": "Covers more advanced approaches to presenting data in charts. The focus is on matching chart structure and annotations to the complexity of the information shown."
      }
    ]
  },
  {
    "id": "data-manipulation-in-excel",
    "code": "CERT-08",
    "title": "Data Manipulation in Excel",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "March 2026",
    "credentialId": "MS-20260302-k4fkN5R0qnGsE2LnDDce",
    "credentialUrl": "https://example.com/credentials/data-manipulation-in-excel",
    "imageUrl": "/images/certifications/data-manipulation-excel.webp",
    "images": [
      "/images/certifications/data-manipulation-excel.webp"
    ],
    "overview": "Data Manipulation in Excel is a MySkill credential dated March 2026 centered on preparing spreadsheet data for use and analysis. Its recorded scope moves from Excel functions and advanced functions to array formulas, then to data cleaning, preprocessing, and more advanced manipulation of values and ranges. The emphasis is on transforming inconsistent or unstructured worksheet entries into data that can be summarized more reliably; no specific source dataset or transformation result is claimed.",
    "keyModules": [
      {
        "title": "Excel Functions for Data Manipulation",
        "description": "Covers Excel functions used to reshape and organize values. Text, date, and lookup functions can be combined to extract fields or standardize inconsistent records."
      },
      {
        "title": "Advanced Function in Excel",
        "description": "Explores more complex functions for transforming spreadsheet data. Combining functions makes it possible to express multi-step transformations within a worksheet."
      },
      {
        "title": "Array Formula (Data Manipulation)",
        "description": "Addresses using array formulas to process groups of values. Processing an entire range at once can reduce the need to repeat a formula manually for each value."
      },
      {
        "title": "Data Cleaning and Preprocessing",
        "description": "Covers identifying inconsistent entries and preparing data for analysis. Missing values, duplicate rows, and inconsistent formats should be identified before interpreting results."
      },
      {
        "title": "Advanced Data Manipulation",
        "description": "Explores combining techniques to restructure spreadsheet datasets. A transformation should preserve traceability between original values and the cleaned dataset."
      }
    ]
  },
  {
    "id": "forecasting-regression-and-statistic-in-excel",
    "code": "CERT-09",
    "title": "Forecasting, Regression and Statistic in Excel",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "March 2026",
    "credentialId": "MS-20260303-7TsPx8Jb8ApaMX5qohEC",
    "credentialUrl": "https://example.com/credentials/forecasting-regression-and-statistic-in-excel",
    "imageUrl": "/images/certifications/forecasting-regression-statistics-excel.webp",
    "images": [
      "/images/certifications/forecasting-regression-statistics-excel.webp"
    ],
    "overview": "Forecasting, Regression and Statistic in Excel is a MySkill credential dated March 2026 focused on quantitative analysis within spreadsheets. The documented topics start with descriptive statistics and an introduction to statistical reasoning, then cover time-series analysis, linear regression, and forecasting from time-based observations. This scope distinguishes summarizing existing values from examining relationships and estimating future values; the source does not provide a forecasting model, dataset, or accuracy result.",
    "keyModules": [
      {
        "title": "Time Series Analysis",
        "description": "Introduces observations arranged over time and their patterns. A trend, seasonal variation, or unusual observation can each change how a series is interpreted."
      },
      {
        "title": "Linear Regression",
        "description": "Covers modeling a relationship between variables with a linear trend. The fitted line describes an association; its slope and residuals help assess whether it explains the observations."
      },
      {
        "title": "Forecasting Time Series",
        "description": "Addresses using time-based observations to estimate future values. Forecasts depend on historical patterns and assumptions, so uncertainty matters alongside a projected value."
      },
      {
        "title": "Introduction to Statistic",
        "description": "Introduces statistical concepts used to interpret data. It distinguishes a population from a sample and a summary measure from an inference about unseen data."
      },
      {
        "title": "Descriptive Statistic in Excel",
        "description": "Covers summarizing distributions with descriptive measures in Excel. Measures such as central tendency and spread reveal more than a total or a single average."
      }
    ]
  },
  {
    "id": "microsoft-word",
    "code": "CERT-10",
    "title": "Microsoft Word",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "April 2026",
    "credentialId": "MS-20260409-3ngQyYiMuxRFf18HrRzW",
    "credentialUrl": "https://example.com/credentials/microsoft-word",
    "imageUrl": "/images/certifications/microsoft-word.webp",
    "images": [
      "/images/certifications/microsoft-word.webp"
    ],
    "overview": "Microsoft Word is a MySkill credential dated April 2026 covering document creation and management. Its listed skills include inserting and organizing text, paragraphs, and tables; managing references; creating custom Word elements; and using custom document elements and advanced features. These topics frame Word as a tool for producing structured, consistently formatted documents rather than just typing text; the source does not identify a particular published document.",
    "keyModules": [
      {
        "title": "Creating and Managing Documents in Microsoft Word",
        "description": "Covers creating documents and maintaining their structure in Word. Document structure, consistent styles, and revision habits make a file easier to maintain over time."
      },
      {
        "title": "Insert Text, Paragraph, and Tables",
        "description": "Addresses adding and formatting text, paragraphs, and tables. Paragraph settings and table layouts help keep long-form content readable and organized."
      },
      {
        "title": "Create and Manage Refrences",
        "description": "Covers creating and organizing references within a document. References should remain consistent so readers can locate supporting material within a document."
      },
      {
        "title": "Create Custom Word Elements",
        "description": "Explores tailoring Word elements to document needs. Custom styles or reusable elements can help keep a document's appearance consistent."
      },
      {
        "title": "Create Custom Document Elements and Advanced Features",
        "description": "Covers customizing document elements and using advanced Word features. The topic considers how advanced elements affect navigation, formatting, and document reuse."
      }
    ]
  },
  {
    "id": "microsoft-power-point",
    "code": "CERT-11",
    "title": "Microsoft Power Point",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "April 2026",
    "credentialId": "MS-20260411-quEXTcp9LgQSooQ6pJMH",
    "credentialUrl": "https://example.com/credentials/microsoft-power-point",
    "imageUrl": "/images/certifications/microsoft-powerpoint.webp",
    "images": [
      "/images/certifications/microsoft-powerpoint.webp"
    ],
    "overview": "Microsoft Power Point is a MySkill credential dated April 2026 about building and managing slide presentations. The recorded topics progress from PowerPoint basics and presentation management to arranging slides and inserting or formatting text, shapes, and media. Tables, charts, SmartArt, and 3D models are also named as content types, so the credential covers both slide organization and visual communication; it does not document a particular presentation or audience outcome.",
    "keyModules": [
      {
        "title": "Introduction to Microsoft PowerPoint",
        "description": "Introduces the tools and layout used to build PowerPoint presentations. A presentation combines slide content and speaking context, so each slide should support a clear point."
      },
      {
        "title": "Managing Presentation",
        "description": "Covers organizing, saving, and maintaining presentation files. Keeping a coherent order and reusable layout helps a presentation remain consistent during edits."
      },
      {
        "title": "Managing Slides",
        "description": "Addresses creating, ordering, and editing slides. Slide hierarchy and sequencing help an audience follow a topic from introduction to conclusion."
      },
      {
        "title": "Insert and Format Text, Shape, Media",
        "description": "Covers placing and formatting text, shapes, and media on slides. Text and visuals need spacing and contrast so they support the message rather than compete for attention."
      },
      {
        "title": "Insert Table, Chart, SmartArt, 3D Model",
        "description": "Addresses adding tables, charts, SmartArt, and 3D models to slides. Each element suits a different purpose: tables show values, charts compare data, and diagrams explain relationships."
      }
    ]
  },
  {
    "id": "mastery-in-microsoft-excel-word-and-powerpoint",
    "code": "CERT-12",
    "title": "Mastery in Microsoft Excel, Word and PowerPoint",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "April 2026",
    "credentialId": "MS-20260411-K11ksIjZRW7YeytCnEMr",
    "credentialUrl": "https://example.com/credentials/mastery-in-microsoft-excel-word-and-powerpoint",
    "imageUrl": "/images/certifications/microsoft-excel-word-powerpoint.webp",
    "images": [
      "/images/certifications/microsoft-excel-word-powerpoint.webp"
    ],
    "overview": "Mastery in Microsoft Excel, Word and PowerPoint is a MySkill credential dated April 2026 that groups spreadsheet, document, and presentation skills into one recorded set of competencies. Its Excel portion names basic, intermediate, and advanced levels alongside data manipulation and forecasting, regression, and statistics; the remaining areas are Microsoft Word and Microsoft PowerPoint. The scope therefore connects working with data, preparing written documents, and communicating material through slides, without asserting a specific workplace project or outcome.",
    "keyModules": [
      {
        "title": "Microsoft Excel Basic",
        "description": "Introduces spreadsheet navigation, data entry, and basic Excel formulas. It covers the starting point for entering data and checking calculations within a workbook."
      },
      {
        "title": "Microsoft Excel Intermediate",
        "description": "Covers intermediate formulas, lookups, and data summaries in Excel. Lookups and summaries turn raw rows into information that can be compared or reviewed."
      },
      {
        "title": "Microsoft Excel Advanced",
        "description": "Explores advanced Excel tools such as Power Pivot and VBA macros. These tools extend spreadsheets toward related data models and repeatable tasks."
      },
      {
        "title": "Data Manipulation in Excel",
        "description": "Covers cleaning, reorganizing, and transforming data in Excel. Cleaning steps matter because inconsistent source values can distort later summaries."
      },
      {
        "title": "Forecasting, Regression and Statistic in Excel",
        "description": "Introduces statistical summaries, regression, and time-series forecasting in Excel. The methods serve different questions: describing existing data, modeling relationships, or projecting a series."
      },
      {
        "title": "Microsoft Word",
        "description": "Covers creating, formatting, and managing Word documents. Styles, tables, and document structure help communicate information outside a spreadsheet."
      },
      {
        "title": "Microsoft PowerPoint",
        "description": "Covers organizing slides and visual content in PowerPoint presentations. Slide order and visual hierarchy help translate a detailed analysis into a concise presentation."
      }
    ]
  },
  {
    "id": "microsoft-excel-basic-to-advanced-fullstack-intensive-bootcamp",
    "code": "CERT-13",
    "title": "Microsoft Excel Basic To Advanced: Fullstack Intensive Bootcamp",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "March 2026",
    "credentialId": "MS-3/4/2026-pcfg8zurrC2aUj9BWNx1",
    "credentialUrl": "https://example.com/credentials/microsoft-excel-basic-to-advanced-fullstack-intensive-bootcamp",
    "imageUrl": "/images/certifications/microsoft-excel-bootcamp-myskill1.webp",
    "images": [
      "/images/certifications/microsoft-excel-bootcamp-myskill1.webp",
      "/images/certifications/microsoft-excel-bootcamp-myskill2.webp"
    ],
    "overview": "Microsoft Excel Basic To Advanced: Fullstack Intensive Bootcamp is a MySkill credential dated March 2026 describing a multi-module Excel learning program. The listed progression begins with career context and basic formulas, then covers formatting and cleansing, conditional logic, data validation, and visualization. VLOOKUP and INDEX/MATCH, PivotTables, dashboard reporting, and VBA macros extend the technical scope, while a career class and group project presentation appear among the learning modules. The record names those activities but does not specify a project topic or measurable result.",
    "keyModules": [
      {
        "title": "Career Excel Path",
        "description": "Explores learning paths and roles related to Excel skills. The module places spreadsheet learning in the context of practical tasks and career development."
      },
      {
        "title": "Excel Basic Formula and Function",
        "description": "Introduces Excel formulas and functions for spreadsheet calculations. References and basic functions provide a foundation for calculations that update when source cells change."
      },
      {
        "title": "Data Formatting and Cleansing",
        "description": "Covers making data consistent through formatting and cleansing. Consistent types and cleaned entries make later filtering, formulas, and summaries more dependable."
      },
      {
        "title": "Conditional IF Else Formatting",
        "description": "Addresses conditional IF logic and formatting based on cell values. Conditional logic assigns results based on a test; visual formatting can make those results easier to scan."
      },
      {
        "title": "Data Validation",
        "description": "Covers restricting or checking entries with data validation rules. Rules for allowed values help catch invalid entries at the point of data input."
      },
      {
        "title": "Data Visualization",
        "description": "Explores visual ways to communicate spreadsheet results. Charts and visual summaries can reveal comparisons and changes that are difficult to see in raw rows."
      },
      {
        "title": "Vlookup and Index Match",
        "description": "Covers matching records using VLOOKUP and INDEX/MATCH. These methods connect related tables by a key while returning the desired value from a matching record."
      },
      {
        "title": "Pivot Table",
        "description": "Addresses grouping and summarizing data with PivotTables. Rearranging fields lets a single dataset answer different summary questions without rewriting source rows."
      },
      {
        "title": "Dashboard Reporting",
        "description": "Covers arranging spreadsheet summaries into a reporting dashboard. A dashboard groups relevant metrics and charts so readers can examine a reporting question in one place."
      },
      {
        "title": "Macro VBA",
        "description": "Introduces Excel automation through VBA macros. Automated steps need clear inputs and review so a macro does not silently repeat a mistake."
      },
      {
        "title": "Career Class",
        "description": "Explores career-related topics as part of the Excel bootcamp. The class connects spreadsheet skills with how they might be communicated in professional settings."
      },
      {
        "title": "Group Project Presentation",
        "description": "Covers presenting a group project and explaining its spreadsheet work. The emphasis is on making the approach, findings, and limits of a group exercise understandable to others."
      }
    ]
  },
  {
    "id": "artificial-intelligence-and-automation-bootcamp",
    "code": "CERT-14",
    "title": "Artificial Intelligence and Automation Bootcamp",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "April 2026",
    "credentialId": "MS-24/4/2026-2OjoYsQbyVnBCKRNsYb1",
    "credentialUrl": "https://example.com/credentials/artificial-intelligence-and-automation-bootcamp",
    "imageUrl": "/images/certifications/ai-automation-bootcamp-myskill1.webp",
    "images": [
      "/images/certifications/ai-automation-bootcamp-myskill1.webp",
      "/images/certifications/ai-automation-bootcamp-myskill2.webp"
    ],
    "overview": "Artificial Intelligence and Automation Bootcamp is a MySkill credential dated April 2026 focused on AI-assisted work and no-code automation. The recorded curriculum begins with AI and generative AI concepts, using ChatGPT at work, AI-assisted development, and no-code web building. It then turns to n8n workflows for connecting forms, sheets, and email, automating social media tasks, and building a chatbot. These are listed learning modules, not evidence that a particular automation was deployed or used in production.",
    "keyModules": [
      {
        "title": "Introduction to AI & Generative AI",
        "description": "Introduces AI concepts and generative models that create new content. It distinguishes systems that classify or predict from systems that generate text or other content."
      },
      {
        "title": "Optimizing Work with ChatGPT",
        "description": "Covers using ChatGPT prompts to support everyday work tasks. Clear instructions and relevant context can improve output, while results still need independent checking."
      },
      {
        "title": "Developing with AI: Vibe Coding",
        "description": "Explores using AI assistance during software development. AI-generated suggestions may speed up drafting, but code behavior and security need human review."
      },
      {
        "title": "AI No-Code Web Builder Basics",
        "description": "Introduces no-code tools for building web pages with AI assistance. Page structure and content still require review for clarity, accessibility, and intended user flow."
      },
      {
        "title": "Automating with AI + n8n",
        "description": "Covers connecting AI-assisted steps into n8n automation workflows. Triggers, inputs, and actions determine when an automation runs and what it changes."
      },
      {
        "title": "Automating GForm, Sheet & Email with n8n",
        "description": "Explores linking Google Forms, Sheets, and email through n8n workflows. A form submission can trigger downstream updates, but field mapping and failure handling matter for accuracy."
      },
      {
        "title": "Automating Social Media with n8n",
        "description": "Addresses automating social media tasks with n8n. Scheduling and content transfer require checks to avoid publishing incorrect or duplicated material."
      },
      {
        "title": "Building a Chatbot with n8n",
        "description": "Covers assembling a chatbot workflow using n8n. The workflow connects a user's message to processing steps and a response while considering errors or missing context."
      }
    ]
  },
  {
    "id": "data-analysis-fullstack-intensive-bootcamp",
    "code": "CERT-15",
    "title": "Data Analysis: Fullstack Intensive Bootcamp",
    "issuer": "MySkill",
    "year": "2026",
    "issueDate": "May 2026",
    "credentialId": "MS-4/6/2026-C3adUqPpMsm4oSRjjzpH",
    "credentialUrl": "https://example.com/credentials/data-analysis-fullstack-intensive-bootcamp",
    "imageUrl": "/images/certifications/data-analysis-bootcamp-myskill1.webp",
    "images": [
      "/images/certifications/data-analysis-bootcamp-myskill1.webp",
      "/images/certifications/data-analysis-bootcamp-myskill2.webp"
    ],
    "overview": "Data Analysis: Fullstack Intensive Bootcamp is a MySkill credential dated May 2026 covering an end-to-end path for analytical work. Modules introduce the analyst's role, statistics, problem solving, and data formatting and validation before moving into SQL basics, business-data analysis, SQL interview cases, Python-based analysis, and visualization. The curriculum connects framing a question and preparing data with querying, analyzing, and communicating findings; the source does not identify a dataset, project, or measured result.",
    "keyModules": [
      {
        "title": "Kickstart Career as Data Analysis",
        "description": "Introduces career paths and responsibilities related to data analysis. The discussion relates analytical questions, data quality, and clear communication to the role."
      },
      {
        "title": "Intro to Data Analysis",
        "description": "Covers the basic process of examining data to answer questions. A typical analysis starts with a question, checks data quality, and selects a suitable summary."
      },
      {
        "title": "Basic Statistic",
        "description": "Introduces statistical measures for describing and interpreting data. Center and spread describe different aspects of a dataset and can expose misleading averages."
      },
      {
        "title": "Introduction to Problem Solving",
        "description": "Covers defining a problem before choosing an analytical approach. A precise question helps identify which data and assumptions are relevant before selecting a method."
      },
      {
        "title": "Data Formatting dan Validation",
        "description": "Addresses formatting data and validating entries before analysis. Consistent types and checks for missing or invalid entries reduce errors in downstream queries."
      },
      {
        "title": "SQL Basic: Basic Clause",
        "description": "Introduces SQL clauses for selecting and filtering database records. SELECT, WHERE, and related clauses define which columns and rows a query returns."
      },
      {
        "title": "SQL Basic: Analyzing Business Data",
        "description": "Covers using basic SQL queries to examine business data. Filtering and grouping records can turn transaction-level data into a business-oriented summary."
      },
      {
        "title": "SQL For Data Analysis",
        "description": "Explores SQL queries for extracting and summarizing analytical data. Joins and aggregations help connect records and calculate results across related tables."
      },
      {
        "title": "SQL Technical Interview Case Studies",
        "description": "Covers reasoning through SQL problems in technical interview scenarios. Explaining assumptions and validating query output matters as much as writing syntactically valid SQL."
      },
      {
        "title": "Data Analysis with Python",
        "description": "Introduces using Python to inspect and analyze datasets. Data can be loaded, inspected, cleaned, and summarized programmatically before visualization."
      },
      {
        "title": "Data Visualization",
        "description": "Covers using visual representations to communicate analytical findings. Chart type, scale, and labels should make a comparison clear without overstating the evidence."
      }
    ]
  }
];

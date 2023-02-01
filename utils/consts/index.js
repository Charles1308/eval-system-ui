import DOM_CONTENTS from "./domContents";

function mfo_percentages () {
    this["Professor"] = this["Instructor"]; // Same
    this["Instructor"] = [ 75, 10, 10, 5, 0 ];
    this["Administrative Staff"] = [ 0, 0, 0, 5, 95 ];
    this["Assistant Professor"] = [ 65, 20, 10, 5, 0 ]; 
    this["Associate Professor"] = this["Assistant Professor"];
    this["Guest Lecturer"] = this["Administrative Staff"].reverse(); // Same in reversed version
    this["Coordinator (Associate Professor/Professor)"] = [ 40, 20, 10, 5, 25 ];
    this["Coordinator  (Instructor/Assistant Professor)"] = [ 50, 10, 10, 5, 25 ];

    this.mapper = {
        'MFO1': 0,
        'MFO2': 1,
        'MFO3': 2,
        'MFO4': 3,
        'MFO5': 4,
    }

    this.getPercentage = function (userType, mfoKey) {
        return this[userType][this.mapper[mfoKey]];
    }
}

function Percentage (percentage = 0) {
    this.percentage = percentage;
    this.applyPercentage = (arg) => {
        if (typeof arg === 'function') {
            return arg(this.percentage);
        } else if (typeof arg === 'number') {
            const additional = arg * this.percentage;

            return arg + additional; 
        } else {
            console.error("Received a string as an argument in applyPercentage function")
            return;
        }
    }
}

const MFO_CONTENTS = {
    "MFO1": [
        {
            title: "Academic and Professional Qualification",
            subtitle: "An incentive of 0.5% is added to the total score",
            fields: [
                {
                    title: "Academic Qualification",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(), // This is what the regular fields use
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "__ Active registration to Professional/Certification Bodies",
                    subtitle: null,
                    for: "Quality",
                    dom: DOM_CONTENTS.next(),
                    other_fields: []
                },
                {
                    title: "__ Active membership to Professional Organization(s)",
                    subtitle: null,
                    for: "Efficiency",
                    dom: DOM_CONTENTS.next(),
                    other_fields: []
                },
                {
                    title: "Pursue in lifelong  learning through further studies",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(), // This is what the other fields use
                    for: "Quality",
                    other_fields: []
                },
            ],
            percentages: [
                new Percentage(0.5),
            ],
        },
        {
            title: "Effectiveness of Classroom Instruction",
            subtitle: null,
            fields: [
                {
                    title: "An average rating of at least 3.00 in the Performance Evaluation for Teaching Effectiveness",
                    subtitle: null,
                    for: "Quality",
                    dom: DOM_CONTENTS.next(),
                    other_fields: []
                },
            ],
            percentage: [
                new Percentage(0.45),
            ],
        },
        {
            title: "Attainment of Student Excellence",
            subtitle: null,
            fields: [
                {
                    title: "75% of the total number of students who struggled in any of the assessment tasks were provided with guidance and counselling to support academic performance, progress review, set academic goals, and implement academic interventions",
                    subtitle: null,
                    for: "Efficiency",
                    dom: DOM_CONTENTS.next(),
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Students",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Quality",
                            title: "Quality of Advising",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
                {
                    title: "90% of the total number of students have passed all the handled courses",
                    subtitle: null,
                    for: "Efficiency",
                    dom: DOM_CONTENTS.next(),
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Students",
                            subtitle: null,
                        },
                    ]
                },
                {
                    title: "__% of the total number of students have attained the Intended Learning Outcomes (ILOs)",
                    subtitle: null,
                    for: "Efficiency",
                    dom: DOM_CONTENTS.next(),
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Students",
                            subtitle: null,
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.15),
            ],
        },
        {
            title: "Preparation and submission of course syllabi that are compliant to OBE",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                    for: "Efficiency",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Courses",
                            subtitle: null,
                            
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.05),
            ],
        },
        {
            title: "100% of the total number of courses were provided with IMs and such IMs were subjected to review.",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                    for: "Efficiency",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Courses",
                            subtitle: null,
                            
                        },
                        {
                            for: null,
                            key: "Quality",
                            title: "Quality of IMs",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.05),
            ],
        },
        {
            title: "__% of courses portfolio were submitted to the College Google Drive on deadline",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    
                    for: "Efficiency",
                    dom: DOM_CONTENTS.next(),
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Courses",
                            subtitle: null,
                            
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.05),
            ],
        },
        {
            title: "80% of moderated final examination papers were submitted within deadline",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                    for: "Efficiency",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Final Exam Papers",
                            subtitle: null,
                            
                        },
                        {
                            for: null,
                            key: "Quality",
                            title: "Moderator Feedback",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.05),
            ],
        },
        {
            title: "__% of the total number of assessments result with comment and feedback were returned to the students fourteen (14) working days after the submission of assessment tasks",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                    for: "Efficiency",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Assessments",
                            subtitle: null,
                            
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.05),
            ],
        },
        {
            title: "100% of the total number of completed student grade sheets were uploaded on or before the set deadline",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                    for: "Efficiency",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Grade Sheets",
                            subtitle: null,
                            
                        },
                        {
                            for: null,
                            key: "Quality",
                            title: "Correction Requests",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.05),
            ],
        },
        {
            title: "__% of courses with revised CARR submitted on deadline",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                    for: "Efficiency",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Reports",
                            subtitle: null,
                            
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.05),
            ],
        },
        {
            title: "__ specialized training / seminar was attended and actively participated and the corresponding report was submitted within fourteen (14) days after the activity",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                    for: "Efficiency",
                    other_fields: [
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: DOM_CONTENTS.next(),
                        },
                    ]
                },
            ],
            percentage: [
                new Percentage(0.05),
            ],
        },
    ]
}

const MFO = [
    {
        label: "MFO 1 - HIGHER EDUCATION",
        data: {
            title: "High Education",
            percentage: new mfo_percentages(),
            contents: MFO_CONTENTS['MFO1'],
        }
    },
    {
        label: "MFO 2 - RESEARCH",
        data: {
            title: "Research",
            percentage: new mfo_percentages(),        
        }
    },
    {
        label: "MFO 3 - EXTENSION",
        data: {
            title: "Extension",
            percentage: new mfo_percentages(),        
        }
    },
    {
        label: "MFO 4 - SUPPORT FUNCTION",
        data: {
            title: "Support Function",
            percentage: new mfo_percentages(),        
        }
    },
    {
        label: "MFO 5 - ADMIN FUNCTION",
        data: {
            title: "Admin Function",
            percentage: new mfo_percentages(),        
        }
    },  
];

const OPCR = [
    {
        label: "HIGHER EDUCATION",
        data: {
            title: "High Education",
            percentage: null,        
        }
    },
    {
        label: "RESEARCH",
        data: {
            title: "Research",
            percentage: null,        
        }
    },
    {
        label: "EXTENSION SERVICES",
        data: {
            title: "Extension Services",
            percentage: null,        
        }
    },
    {
        label: "ADMINISTRATIVE/SUPPORT FUNCTIONS",
        data: {
            title: "Administrative/Support Functions",
            percentage: null,        
        }
    },
    {
        label: "OTHER ADMINISTRATIVE FUNCTIONS",
        data: {
            title: "Other Administrative Functions",
            percentage: null,        
        }
    },  
];

const EVAL_METRICS = {
    "1": 1, // 50% and below - Needs development 
    "2": 2, // 51% - 89%     - Needs mentoring
    "3": 3, // 90% - 114%    - Satisfactory
    "4": 4, // 115% - 129%   - Very Satisfactory
    "5": 5, // 130% and above - Outstanding
};

export { 
    MFO, 
    OPCR,
    EVAL_METRICS,
};

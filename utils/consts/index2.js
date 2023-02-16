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

function Percentage (type, percentages = [], computation = null) {
    this.type = type; // Incentives or Incorporated
    this.percentages = percentages;
    this.cellIncorporated = this.percentages[0];

    this.applyPercentage = (arg) => {
        if (typeof computation === 'function') {
            return computation(this.percentages);
        }

        if (typeof arg === 'function') {
            return arg(this.percentages);
        } else if (typeof arg === 'number') {
            return arg * (this.percentages[0] / 100);
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
                    dom: {
                        contents: {
                            Quality: {
                                label: "Quality measures the latest academic qualification",
                                values: [
                                    { label: "Bachelor's Degree", value: 3.00 },   
                                    { label: "Master's Degree", value: 4.00 },   
                                    { label: "PhD Degree", value: 5.00 },   
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "__ Active registration to Professional/Certification Bodies",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: {
                            Quality: {
                                label: "Quality measures the number of Professional Certifications/Registration Ex. Professional Engineer, Chartered Engineer,ASEAN Engineer",
                                values: []
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "__ Active membership to Professional Organization(s)",
                    subtitle: null,
                    for: "Effectiveness",
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Effectiveness measures the number of membership to Professional Organization.",
                                values: []
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "Pursue in lifelong  learning through further studies",
                    subtitle: null,
                    dom: {
                        contents: {
                            Quality: {
                                label: "Quality measures pursue of lifelong learning through further studies",
                                values: [
                                    { label: "PhD graduate", value: 5.00 },
                                    { label: "PhD Units", value: 4.00 },
                                    { label: "Master Graduate", value: 3.00 },
                                    { label: "Academic Units", value: 2.00 },
                                    { label: "None", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
            ],
            percentage: new Percentage("Incentives", [0.005]),
        },
        {
            title: "Effectiveness of Classroom Instruction",
            subtitle: null,
            fields: [
                {
                    title: "An average rating of at least 3.00 in the Performance Evaluation for Teaching Effectiveness",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Quality measures the average score given by the students",
                                values: []
                            }
                        }
                    },
                    other_fields: []
                },
            ],
            percentage: new Percentage("Incorporated", [0.45]),
        },
        {
            title: "Attainment of Student Excellence",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of students who struggled in any of the assessment tasks were provided with guidance and counselling to support academic performance, progress review, set academic goals, and implement academic interventions",
                    subtitle: null,
                    for: "Effectiveness",
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of students who failed the examinations that were given guidance and counselling.",
                                values: []
                            }
                        }
                    },
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
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the quality of guidance and counseling provided using a survey of the students",
                                        values: [
                                            { label: "Excellent", value: 5.00 },
                                            { label: "Very Satisfactory", value: 4.00 },
                                            { label: "Satisfactory", value: 3.00 },
                                            { label: "Few Sessions", value: 2.00 },
                                            { label: "None at All", value: 2.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
                {
                    title: "__% of the total number of students have passed all the handled courses",
                    subtitle: null,
                    for: "Effectiveness",
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of students that passed all the enrolled courses",
                                values: []
                            } 
                        }
                    },
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
                    for: "Effectiveness",
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of students that have attained the Intended Learning Outcomes (ILOs)",
                                values: []
                            }
                        }
                    },
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
            percentage: new Percentage("Incorporated", [0.15]),
        },
        {
            title: "Preparation and submission of course syllabi that are compliant to OBE",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of course syllabi compliant to OBE were submitted to the Department Chair within seven (7) working days before the first day of classes",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency measures the % number of courses with uploaded OBE based syllabus.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
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
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the number of courses with uploaded OBE based syllabus.",
                                        values: [
                                            { label: "10 days before or earlier", value: 5.00 },
                                            { label: "8-9 days before", value: 4.00 },
                                            { label: "7 days before", value: 3.00 },
                                            { label: "4-6 days before", value: 2.00 },
                                            { label: "3 days before or later", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ],
            percentage: new Percentage("Integrated", [0.05]),
        },
        {
            title: "Development of Instructional Materials (IM)",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of courses were provided with IMs and such IMs were subjected to review.",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency measures the % number of courses with uploaded IMs.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
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
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the assessment conducted.",
                                        values: [
                                            { label: "Approved by IMDC", value: 5.00 },
                                            { label: "Reviewed by IM Committee", value: 4.00 },
                                            { label: "No Review Conducted", value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ],
            percentage: new Percentage("Integrated", [0.05]),
        },
        {
            title: "Submission of Course Portfolio",
            subtitle: null,
            fields: [
                {
                    title: "__% of courses portfolio were submitted to the College Google Drive on deadline",
                    subtitle: null,
                    
                    for: "Effectiveness",
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency measures the % number of courses with uploaded portfolio.",
                                values: []
                            }
                        }
                    },
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
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely submission of course' portfolio",
                                        values: [
                                            { label: "7 days before or earlier", value: 5.00 },
                                            { label: "1-6 days earlier", value: 4.00 },
                                            { label: "On Due Date", value: 3.00 },
                                            { label: "1-13 days after", value: 2.00 },
                                            { label: "14 days after", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ],
            percentage: new Percentage("Integrated", [0.05]),
        },
        {
            title: "Submission of Moderated Final Examination Paper",
            subtitle: null,
            fields: [
                {
                    title: "__% of moderated final examination papers were submitted within deadline",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of courses with moderated papers.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
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
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the alignment, scope, breadth and depth of the question paper based on the syllabus.",
                                        values: [
                                            { label: "Excellent Exam Paper", value: 5.00 },
                                            { label: "Satisfactory Exam Paper", value: 4.00 },
                                            { label: "Needs Improvement", value: 3.00 },
                                            { label: "Poor Exam Paper", value: 2.00 },
                                        ]
                                    }
                                }
                            },
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely return of papers with feedback.",
                                        values: [
                                            { label: "7 working days before or earlier", value: 5.00 },
                                            { label: "8-13 working days after", value: 4.00 },
                                            { label: "14 working days after", value: 3.00 },
                                            { label: "15-21 working days after or later", value: 2.00 },
                                            { label: "22 working days after or later", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ],
            percentage: new Percentage("Integrated", [0.05]),
        },
        {
            title: "Timely feedback of assessments result",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of assessments result with comment and feedback were returned to the students fourteen (14) working days after the submission of assessment tasks",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency measures the % assessment results returned to the students.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
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
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely return of papers with feedback.",
                                        values: [
                                            { label: "7 working days after or earlier", value: 5.00 },
                                            { label: "8-13 working days after", value: 4.00 },
                                            { label: "14 working days after", value: 3.00 },
                                            { label: "15-21 working days after", value: 2.00 },
                                            { label: "22 working days after or earlier", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ],
            percentage: new Percentage("Integrated", [0.05]),
        },
        {
            title: " Timely and proper submission of student grades",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of completed student grade sheets were uploaded on or before the set deadline",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of grades sheets uploaded.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
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
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the correctness of uploaded  grades",
                                        values: [
                                            { label: "No Request For Correction", value: 5.00 },
                                            { label: "One Request For Correction", value: 4.00 },
                                            { label: "Two Requests For Correction", value: 3.00 },
                                            { label: "Three Or More Requests For Correction", value: 2.00 },
                                        ]
                                    }
                                }
                            },
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely uploading of grades",
                                        values: [
                                            { label: "3 days earlier", value: 5.00 },
                                            { label: "1-2 days earlier", value: 4.00 },
                                            { label: "On Due Date", value: 3.00 },
                                            { label: "1-3 days after", value: 2.00 },
                                            { label: "4 days after or later", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ],
            percentage: new Percentage("Integrated", [0.05]),
        },
        {
            title: "Submission of Course Analysis and Review Report (CARR)",
            subtitle: null,
            fields: [
                {
                    title: "__% of courses with revised CARR submitted on deadline",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of courses with revised CARR submitted.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
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
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely submission of CARR",
                                        values: [
                                            { label: "10 days before or earlier", value: 5.00 },
                                            { label: "1-9 days before", value: 4.00 },
                                            { label: "On Due Date", value: 3.00 },
                                            { label: "1-13 days after", value: 2.00 },
                                            { label: "14 days after or later", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ],
            percentage: new Percentage("Integrated", [0.05]),
        },
        {
            title: "Training and development of faculty members",
            subtitle: null,
            fields: [
                {
                    title: "__ specialized training / seminar was attended and actively participated and the corresponding report was submitted within fourteen (14) days after the activity",
                    subtitle: null,
                    dom: {
                        Effectiveness: {
                            label: "Efficiency measure the number of training attended",
                            values: []
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness of Submission",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: " Timeliness measures the timely submission of report",
                                        values: [
                                            { label: "10 days before or earlier", value: 5.00 },
                                            { label: "1-9 days before", value: 4.00 },
                                            { label: "14 days after", value: 3.00 },
                                            { label: "1-13 days later", value: 2.00 },
                                            { label: "14 days later", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ],
            percentage: new Percentage("Integrated", [0.05]),
        },
    ],
    "MFO2": [
        
    ]
}

const MFO = [
    {
        key: "MFO1",
        label: "MFO 1 - HIGHER EDUCATION",
        data: {
            title: "High Education",
            percentage: new mfo_percentages(),
            contents: MFO_CONTENTS['MFO1'],
        }
    },
    {
        key: "MFO2",
        label: "MFO 2 - RESEARCH",
        data: {
            title: "Research",
            percentage: new mfo_percentages(),        
            contents: MFO_CONTENTS['MFO2'],
        }
    },
    {
        key: "MFO3",
        label: "MFO 3 - EXTENSION",
        data: {
            title: "Extension",
            percentage: new mfo_percentages(),        
            contents: MFO_CONTENTS['MFO3'],
        }
    },
    {
        key: "MFO4",
        label: "MFO 4 - SUPPORT FUNCTION",
        data: {
            title: "Support Function",
            percentage: new mfo_percentages(),        
            contents: MFO_CONTENTS['MFO4'],
        }
    },
    {
        key: "MFO5",
        label: "MFO 5 - ADMIN FUNCTION",
        data: {
            title: "Admin Function",
            percentage: new mfo_percentages(),        
            contents: MFO_CONTENTS['MFO5'],
        }
    },  
];

const OPCR = [
    {
        label: "HIGHER EDUCATION",
        data: {
            title: "High Education",
            percentage: new Percentage("", []),        
        }
    },
    {
        label: "RESEARCH",
        data: {
            title: "Research",
            percentage: new Percentage("", []),        
        }
    },
    {
        label: "EXTENSION SERVICES",
        data: {
            title: "Extension Services",
            percentage: new Percentage("", []),        
        }
    },
    {
        label: "ADMINISTRATIVE/SUPPORT FUNCTIONS",
        data: {
            title: "Administrative/Support Functions",
            percentage: new Percentage("", []),        
        }
    },
    {
        label: "OTHER ADMINISTRATIVE FUNCTIONS",
        data: {
            title: "Other Administrative Functions",
            percentage: new Percentage("", []),        
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

import DOM_CONTENTS from "./domContents";
import Percentage from "@modules/percentage";

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

const MFO_CONTENTS = {
    "MFO1": [
        {
            title: "Academic and Professional Qualification",
            subtitle: "An incentive of 0.5% is added to the total score",
            fields: [
                {
                    title: "Academic Qualification",
                    subtitle: null,
                    dom: { // Details of Measurement
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
        {
            title: "Funded Research as Principal Investigator Incentive added to total score ",
            subtitle: "Inst./Asst. Prof./GL 2.00%. Assoc. Prof/Prof. 1.00%",
            fields: [
                {
                    title: "Principal investigator of ___ funded research project(s) sponsored by international/national/LGU/ Institutiona funding agency",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the total number of funded research project(s) where he/she is the principal investigator.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Level of Project",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the research level:",
                                        values: [
                                            { label: "International Funding", value: 5.00 },
                                            { label: "National Funding", value: 4.00 },
                                            { label: "LGU/Institutional Funding", value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ],
            percentage: new Percentage("Incentives", [0.02, 0.01], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Funded Research as Principal Investigator Incentive added to total score ",
            subtitle: "Inst./Asst. Prof./GL 2.00%. Assoc. Prof/Prof. 1.00%",
            fields: [
                {
                    title: "Co-investigator of ___ funded research project(s) sponsored by internationa/national/LGU/ Institutiona funding agency",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the total amount of project cost where he/she is the Principal investigator.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Level of Project",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the research level:",
                                        values: [
                                            { label: "International Funding", value: 5.00 },
                                            { label: "National Funding", value: 4.00 },
                                            { label: "LGU/Institutional Funding", value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ],
            percentage: new Percentage("Incentives", [0.01, 0.050], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Patents and Copyright Filed",
            subtitle: "Incentive added to total score 0.50%",
            fields: [
                {
                    title: "Number of Copyright filed",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the number of copyrighted items filed.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                },
                {
                    title: "Number of Patents filed",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the number of copyrighted items filed.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                },
            ],
            percentage: new Percentage("Incentives", [0.5]),
        },
        {
            title: "Graduate Students Advising",
            subtitle: "Incentive added to total score 0.50%. Asst Professor 0.30%. Assoc Prof., Prof. 0.15%",
            fields: [
                {
                    title: "Supervised at least __ Master's Student",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the number of students being advised.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                },
                {
                    title: "Supervised at least __ PhD Student",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the number of students being advised.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                },
            ],
            percentage: new Percentage("Incentives", [0.30, 0.15], null, {
                '0': ['Assistant Professor'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Papers published as Main Author",
            subtitle: "Incentive added to total score 1.00%. Asst Professor 0.30%. Assoc Prof., Prof. 0.50%",
            fields: [
                {
                    title: "Published at least __ Research paper(s)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency refers to the number of papers published",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Publication",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the paper indexing.",
                                        values: [
                                            { label: "Non-indexed", value: 3.00 },
                                            { label: "Scopus Indexed", value: 4.00 },
                                            { label: "ISI indexed", value: 5.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ],
            percentage: new Percentage("Incentives", [0.01, 0.005], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Papers published as Co-Author",
            subtitle: "Incentive added to total score 0.50%. Assoc Prof., Prof. 0.25%.",
            fields: [
                {
                    title: "Published at least __ Research paper(s)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency refers to the number of papers published",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Publication",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the paper indexing.",
                                        values: [
                                            { label: "Non-indexed", value: 3.00 },
                                            { label: "Scopus Indexed", value: 4.00 },
                                            { label: "ISI indexed", value: 5.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ],
            percentage: new Percentage("Incentives", [0.01, 0.005], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Conference Paper Presented as Main Author",
            subtitle: "Incentive added to total score. Inst./Asst. Prof./GL 0.40% | Assoc Prof., Prof. 0.20%.",
            fields: [
                {
                    title: "Presented at least __ paper in local/international conference",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency refers to the number of papers published",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Awards Received",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the wards received of the paper presented.",
                                        values: [
                                            { label: "Best Paper Award", value: 5.00 },
                                            { label: "Best Presentation", value: 4.00 },
                                            { label: "None", value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ],
            percentage: new Percentage("Incentives", [0.004, 0.0020], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Conference Paper Presented as Co-Author",
            subtitle: "Incentive added to total score. Inst./Asst. Prof./GL 0.20% | Assoc Prof., Prof. 0.10%.",
            fields: [
                {
                    title: "Presented at least __ paper in local/international conference",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency refers to the number of papers published",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Awards Received",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the wards received of the paper presented.",
                                        values: [
                                            { label: "Best Paper Award", value: 5.00 },
                                            { label: "Best Presentation", value: 4.00 },
                                            { label: "None", value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ],
            percentage: new Percentage("Incentives", [0.002, 0.001], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Conference/Seminar/Workshop Attended",
            subtitle: "Incentive added to total score. 0.25%.",
            fields: [
                {
                    title: "Attended at least __ conference/seminar/workshop as speaker/committee member/participant",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency measures the number of papers presented",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Type of Attendance",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the wards received of the paper presented.",
                                        values: [
                                            { label: "Resource Speaker", value: 5.00 },
                                            { label: "Committee Member", value: 4.00 },
                                            { label: "Participant", value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ]
        },
        {
            title: "Thesis/Project Topic Abstract Submission as Main Author",
            subtitle: "Incentive added to total score. Inst./Asst. Prof./GL 0.40% | Assoc Prof., Prof. 0.20%.",
            fields: [
                {
                    title: "Submitted at least __ Thesis/Project Topic Abstract(s) to the Department",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures to the number of topic abstract submitted",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Approved Papers",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the wards received of the paper presented.",
                                        values: [
                                            { label: "96%-100% approved", value: 5.00 },
                                            { label: "90%-95% approved", value: 4.00 },
                                            { label: "61%-89% approved", value: 3.00 },
                                            { label: "50%-60% approved", value: 2.00 },
                                            { label: "0%-49% approved", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ]
        },
        {
            title: "Thesis/Project Topic Abstract Submission as Co-Author",
            subtitle: "Incentive added to total score. Inst./Asst. Prof./GL 0.20% | Assoc Prof., Prof. 0.10%.",
            fields: [
                {
                    title: "Submitted at least __ Thesis/Project Topic Abstract(s) to the Department",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures to the number of topic abstract submitted",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Approved Papers",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the wards received of the paper presented.",
                                        values: [
                                            { label: "96%-100% approved", value: 5.00 },
                                            { label: "90%-95% approved", value: 4.00 },
                                            { label: "61%-89% approved", value: 3.00 },
                                            { label: "50%-60% approved", value: 2.00 },
                                            { label: "0%-49% approved", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ]
        },
        {
            title: "Member of Defense Panel for Undergraduate Researches",
            subtitle: "Incentive added to total score 0.25% | Member/Facilitator 0.10%",
            fields: [
                {
                    title: "__ of Thesis defense sessions attended(either Proposal or Final Defense)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures to the number of sessions attended in the Panel Defense",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Participation",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality referes to the participation of faculty member as Defense Panel",
                                        values: [
                                            { label: "As Chairman", value: 5.00 },
                                            { label: "As Member", value: 4.00 },
                                            { label: "As Adviser", value: 3.00 },
                                            { label: "As Facilitator", value: 2.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ]
        },
        {
            title: "Member of Defense Panel for Undergraduate Researches",
            subtitle: "Incentive added to total score 0.30% | Member/Facilitator 0.15%",
            fields: [
                {
                    title: "__ of Thesis defense sessions attended(either Proposal or Final Defense)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures to the number of sessions attended in the Panel Defense",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Participation",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality referes to the participation of faculty member as Defense Panel",
                                        values: [
                                            { label: "As Chairman", value: 5.00 },
                                            { label: "As Member", value: 4.00 },
                                            { label: "As Adviser", value: 3.00 },
                                            { label: "As Facilitator", value: 2.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ]
        },
        {
            title: "Undergraduate Students Thesis/Project Advising",
            subtitle: null,
            fields: [
                {
                    title: "Supervised at least __ students' groups in Thesis/Project(s)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the number of groups advised",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                },
                {
                    title: "__% of advised groups successfully defended their Thesis/Project",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % numbber of groups who successfully defended their Thesis/Project",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total number of groups",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timeliness",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality referes to the participation of faculty member as Defense Panel",
                                        values: [
                                            { label: "On time", value: 5.00 },
                                            { label: "1 semester after", value: 4.00 },
                                            { label: "2 semesters after", value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ]
        },
        {
            title: "Research and development culture in the academy",
            subtitle: null,
            fields: [
                {
                    title: "___ training in writing publishable research paper was completely attended",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of activities participated.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Involvement",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the % Attendance to All Sessions",
                                        values: [
                                            { label: "96%-100% attendance", value: 5.00 },
                                            { label: "91%-95% attendance", value: 4.00 },
                                            { label: "90% attendance", value: 3.00 },
                                            { label: "61%-89% attendance", value: 2.00 },
                                            { label: "50%-60% attendance", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
                {
                    title: "__ research activity was participated",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the number of groups advised",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                },
                {
                    title: "Membership to at least __ Research Cluster",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures to the number of clusters where the faculty is a member",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                }
            ]
        },
        {
            title: "Development of research capabilities of researchers through participation in research workshops, trainings and conferences",
            subtitle: "Inst./Asst. Prof./GL 2.00%. Assoc. Prof/Prof. 1.00%",
            fields: [
                {
                    title: "__ research workshop / training / conference was participated",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of activities participated.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Attendance",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the % Attendance to All Sessions",
                                        values: [
                                            { label: "96%-100% attendance", value: 5.00 },
                                            { label: "91%-95% attendance", value: 4.00 },
                                            { label: "90% attendance", value: 3.00 },
                                            { label: "61%-89% attendance", value: 2.00 },
                                            { label: "50%-60% attendance", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ],
            percentage: new Percentage("Incentives", [0.02, 0.01], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
    ],
    "MFO3": [
        
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

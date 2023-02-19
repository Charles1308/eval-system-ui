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
            percentage: new Percentage("Incentives", [0.5]),
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
            percentage: new Percentage("Incorporated", [45]),
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
            percentage: new Percentage("Incorporated", [15]),
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
            percentage: new Percentage("Incorporated", [5]),
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
            percentage: new Percentage("Incorporated", [5]),
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
            percentage: new Percentage("Incorporated", [5]),
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
            percentage: new Percentage("Incorporated", [5]),
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
                                label: "Efficiency measures the % assessment results returned to the students.",
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
            percentage: new Percentage("Incorporated", [5]),
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
            percentage: new Percentage("Incorporated", [5]),
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
            percentage: new Percentage("Incorporated", [5]),
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
            percentage: new Percentage("Incorporated", [5]),
        },
    ],
    "MFO2": [
        {
            title: "Funded Research as Principal Investigator Incentive added to total score ",
            subtitle: "Inst./Asst. Prof./GL 2.00%. | Assoc. Prof/Prof. 1.00%",
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
            percentage: new Percentage("Incentives", [2.0, 1.0], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Funded Research as Principal Investigator Incentive added to total score ",
            subtitle: "Inst./Asst. Prof./GL 1.00%. Assoc. Prof/Prof. 0.50%",
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
            percentage: new Percentage("Incentives", [1.00, 0.50], null, {
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
            percentage: new Percentage("Incentives", [0.50]),
        },
        {
            title: "Graduate Students Advising",
            subtitle: "Incentive added to total score. Asst Professor 0.30%. | Assoc Prof., Prof. 0.15%",
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
            subtitle: "Incentive added to total score. Asst Professor 0.30%. | Assoc Prof., Prof. 0.50%",
            fields: [
                {
                    title: "Published at least __ Research paper(s)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the number of papers published",
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
                                    Quality: {
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
            percentage: new Percentage("Incentives", [0.30, 0.50], null, {
                '0': ['Assistant Professor'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Papers published as Co-Author",
            subtitle: "Incentive added to total score. Inst./Asst. Prof./GL 0.50% | Assoc. Prof./Prof. 0.25%.",
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
                                    Quality: {
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
            percentage: new Percentage("Incentives", [0.50, 0.25], null, {
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
                                    Quality: {
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
            percentage: new Percentage("Incentives", [0.40, 0.20], null, {
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
                                    Quality: {
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
            percentage: new Percentage("Incentives", [0.20, 0.10], null, {
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
                                    Quality: {
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
            ],
            percentage: new Percentage("Incentives", [0.25])
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
                                    Quality: {
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
            ],
            percentage: new Percentage("Incentives", [0.40, 0.20], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
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
                                    Quality: {
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
            ],
            percentage: new Percentage("Incentives", [0.20, 0.10], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        { // needs callback
            title: "Member of Defense Panel for Undergraduate Researches",
            subtitle: "Incentive added to total score. As chairman 0.25% | Member/Facilitator 0.10%",
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
            ],
            percentage: new Percentage("Incentives", [0.25, 0.10]),
        },
        { // needs callback
            title: "Member of Defense Panel for graduate Researches",
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
            ],
            percentage: new Percentage("Incentives", [0.25, 0.10]),
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
            ],
            percentage: null,
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
            ],
            percentage: null,
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
            percentage: null,
        },
    ],
    "MFO3": [
        {
            title: "Involvement of faculty members in the conduct of extension services projects",
            subtitle: null,
            fields: [
                {
                    title: "Participated/Involved in at least __ of the College/Department extension service project(s)",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the number of extension service participated",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Nature of involvement / participation",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Qualify measures the role of faculty member in the extension project(s).",
                                        values: [
                                            { label: "Project Leader", value: 5.00 },
                                            { label: "Coordinator", value: 4.00 },
                                            { label: "Extensionist", value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ],
            percentage: null,
        },
    ],
    "MFO4": [
        {
            title: "Assignment to College/ Department Committee(s)",
            subtitle: "0.5% incentive added to total score",
            fields: [
                {
                    title: "Assigned to at least __ College/Department Committee(s)",
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
                            title: "Documents Submitted",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality refers to acceptance of the submitted documents.",
                                        values: [
                                            { label: 'Accepted, No Changes', value: 5.00 },
                                            { label: 'Minor Changes', value: 4.00 },
                                            { label: 'Major Changes', value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                }
            ],
            percentage: new Percentage("Incentives", [0.05]),
        },
        {
            title: "Mentoring and Coaching",
            subtitle: null,
            fields: [
                {
                    title: "Mentored/Coached at least __ students during the semester",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the number of students mentored by the faculty.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Satisfied Mentees",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the number of mentees satisfied with the mentoring/coaching of the faculty.",
                                        values: []
                                    }
                                }
                            },
                        }
                    ]
                }
            ],
            percentage: null,
        },
        {
            title: "Attendance and participation to Academic Council, college, and other committee meetings",
            subtitle: null,
            fields: [
                {
                    title: "__% attendance to University/college/department meetings per semester.",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of meetings attendance.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Meetings",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Quality",
                            title: "Average Attendance",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the % Attendance to All Sessions",
                                        values: [
                                            { label: '96%-100%', value: 5.00 },
                                            { label: '91%-95%', value: 4.00 },
                                            { label: '90% attendance', value: 3.00 },
                                            { label: '61%-89% attendance', value: 2.00 },
                                            { label: '50%-60% attendance', value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                }
            ],
            percentage: null,
        },
        {
            title: "Submission of various reports and documents",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of required / pertinent documents/reports (faculty portfolio, AMTLP, student advising reports, etc.) were submitted within the prescribed period",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of documents submitted.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Documents",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timely Submission",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely uploading of grades",
                                        values: [
                                            { label: '3 days or earlier', value: 5.00 },
                                            { label: '1-2 days earlier', value: 4.00 },
                                            { label: 'On Due Date', value: 3.00 },
                                            { label: '1-3 days after', value: 2.00 },
                                            { label: '4 days after or later', value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                }
            ],
            percentage: null,
        },
    ],
    "MFO5": [
        {
            title: "Acceptable employment rate",
            subtitle: null,
            fields: [
                {
                    title: "__% of graduates were engaged in employment within two (2) years from graduation with satisfactory performance",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency measures the % number of graduates employed within 2 years",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Documents",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Employment Period",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the employability of graduates",
                                        values: [
                                            { label: '6-12 months after graduation', value: 5.00 },
                                            { label: '12-23 months after graduation', value: 4.00 },
                                            { label: '24 months after graduation', value: 3.00 },
                                            { label: '25 months or later', value: 2.00 },
                                        ]
                                    }
                                }
                            },
                        },
                        {
                            for: null,
                            key: "Quality",
                            title: "Position Acquired",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the acquired position within 2 years from graduation",
                                        values: [
                                            { label: 'Management position', value: 5.00 },
                                            { label: 'Middle-Level position', value: 4.00 },
                                            { label: 'Entry-Level position', value: 3.00 },
                                            { label: 'Unemployed', value: 2.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
                {
                    title: "__ program(s) that had conducted graduate tracer study",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the number of programs that had conducted tracer study.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                },
            ],
            percentage: new Percentage("Incentives", [0.02, 0.01], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Acceptable licensure examination rate",
            subtitle: null,
            fields: [
                {
                    title: "Passing rate is __% higher than the immediately preceeding result for all board programs",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % increase in licensure examination result based on previous result.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                }
            ],
            percentage: null,
        },
        {
            title: "Quality assurance of academic programs through accreditation",
            subtitle: null,
            fields: [
                {
                    title: "For COPC/AACCUP Application\n__% of the total number of required documents were prepared and submitted within the prescribed period",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of documents submitted.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Documents",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timely Submission",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely uploading of grades",
                                        values: [
                                            { label: '3 weeks or earlier', value: 5.00 },
                                            { label: '1-2 weeks or earlier', value: 4.00 },
                                            { label: 'On Due Date', value: 3.00 },
                                            { label: '1-3 days after', value: 2.00 },
                                            { label: '4 weeks after or later', value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
                {
                    title: "For COD/COE Preparations\n__% of the total number of required documents were prepared based on Application Workbook (AW)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of documents prepared according to AW requirement.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Documents",
                            subtitle: null,
                        },
                    ]
                },
                {
                    title: "For ABET Accreditation\n__% of the total number of required documents were prepared and submitted within the prescribed period",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of documents submitted.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Documents",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timely Submission",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely uploading of grades",
                                        values: [
                                            { label: '3 weeks or earlier', value: 5.00 },
                                            { label: '1-2 weeks or earlier', value: 4.00 },
                                            { label: 'On Due Date', value: 3.00 },
                                            { label: '1-3 days after', value: 2.00 },
                                            { label: '4 weeks after or later', value: 1.00 },
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
            title: "Implementation of Outcomes-Based Education (OBE) approach in education",
            subtitle: null,
            fields: [
                {
                    title: "__PAC meeting has been conducted with at least 90% attendance",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of documents submitted.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Effectiveness",
                            title: "Attendance",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Quality measures the % Attendance in PAC Meeting",
                                        values: [
                                            { label: '96%-100% attendance', value: 5.00 },
                                            { label: '91%-95% attendance', value: 4.00 },
                                            { label: '90% attendance', value: 3.00 },
                                            { label: '61%-89% attendance', value: 2.00 },
                                            { label: '50%-60% attendance', value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
                {
                    title: "___% faculty members submitted the Course Analysis and Review Report (CARR)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of faculty who have submitted the CARR.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Faculty",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Quality",
                            title: "Quality of CARR",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the content and analysis of the class performance.",
                                        values: [
                                            { label: 'Excellent report', value: 5.00 },
                                            { label: 'Good report', value: 4.00 },
                                            { label: 'Satisfactory report', value: 3.00 },
                                            { label: 'Needs improvement', value: 2.00 },
                                            { label: 'Poor report', value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
                {
                    title: "__% faculty members submitted the Moderated Final Examination Papers.",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency measures the % number of faculty members who submitted the moderated exam papers.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Faculty",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Timely Submission",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness measures the timely submission of moderated exam papers",
                                        values: [
                                            { label: '7 days before or earlier', value: 5.00 },
                                            { label: '1-6 days earlier', value: 4.00 },
                                            { label: 'On Due Date', value: 3.00 },
                                            { label: '1-3 days after', value: 2.00 },
                                            { label: '14 days after', value: 1.00 },
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
            title: "Facilitate the assignment of faculty loadings",
            subtitle: null,
            fields: [
                {
                    title: "___% of the total number of regular courses offered were distributed to faculty members 10 working days before the beginning of classes with no major follow up question / concern",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the%  number of approved course syllabi compliant with OBE",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Courses",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Quality",
                            title: "Issues or Concerns",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality measures the concerns relative to the assignment of faculty loading",
                                        values: [
                                            { label: 'No concern', value: 5.00 },
                                            { label: 'Minor concern', value: 4.00 },
                                            { label: 'Major concern', value: 3.00 },
                                        ]
                                    }
                                }
                            },
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Issues or Concerns",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness refers to the timely submission of DTRs.",
                                        values: [
                                            { label: '16-20 days before classes', value: 5.00 },
                                            { label: '11-15 days before classes', value: 4.00 },
                                            { label: '10 days before  classes', value: 3.00 },
                                            { label: '1-9 days before', value: 2.00 },
                                            { label: 'after 5 days', value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                }
            ],
            percentage: new Percentage("Incentives", [0.02, 0.01], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Preparation of class schedule",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of regular courses offered have class schedules approved and uploaded online three (3) working days before the first day of enrolment",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the%  number ofregular courses  have class schedules  approved",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Courses",
                            subtitle: null,
                        },
                        {
                            for: null,
                            key: "Timeliness",
                            title: "Issues or Concerns",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "Timeliness refers to the timely uploading of schedule.",
                                        values: [
                                            { label: '6 days before', value: 5.00 },
                                            { label: '4-5 days before', value: 4.00 },
                                            { label: '3 days before', value: 3.00 },
                                            { label: 'After 3 days', value: 2.00 },
                                            { label: '5 days before or later', value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                }
            ],
            percentage: new Percentage("Incentives", [0.02, 0.01], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Facilitate the submission of course syllabi that are compliant to OBE",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of approved and controlled course syllabi compliant to OBE were submitted ten (10) working days before the first day of classes",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the%  number of approved course syllabi compliant with OBE",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: 'Target',
                            key: null,
                            title: "Total Number of Courses Offered",
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
                                        label: "Timelexiness refers to the timely submission of syllabus.",
                                        values: [
                                            { label: '16 days before or earlier', value: 5.00 },
                                            { label: '11-15 days before', value: 4.00 },
                                            { label: '10 days before first day of classes', value: 3.00 },
                                            { label: '6-9 days before', value: 2.00 },
                                            { label: '5 days before or later', value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                }
            ],
            percentage: new Percentage("Incentives", [0.02, 0.01], null, {
                '0': ['Instructor', 'Assistant Professor', 'Guest Lecturer'],
                '1': ['Associate Professor', 'Professor'],
            }),
        },
        {
            title: "Conduct Department Faculty Meetings",
            subtitle: null,
            fields: [
                {
                    title: "__ meetings with Department Chairs with at least 90% attendance were conducted",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficeincy refers to number of meeting held with at least 90% attendance.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: []
                }
            ],
            percentage: null,
        },
        {
            title: "Department Research Publications",
            subtitle: null,
            fields: [
                {
                    title: "__ publications in at least refereed journals",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficeincy refers to number of publications in the deartment",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: null,
                            key: "Quality",
                            title: "Indexing",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Quality: {
                                        label: "Quality refers to the indexing of paper publications",
                                        values: [
                                            { label: 'ISI Indexed', value: 5.00 },
                                            { label: 'Scopus Indexed', value: 4.00 },
                                            { label: 'Peer Reviewed', value: 3.00 },
                                            { label: 'Non-indexed', value: 2.00 },
                                        ]
                                    }
                                }
                            }
                        }
                    ]
                }
            ],
            percentage: null,
        },
        {
            title: "Attendance and participation to Academic Council, college, and other committee meetings",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of faculty members attended and actively participated in meetings.",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficeincy refers to number of faculty members who attended in meetings",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Faculty Members",
                            subtitle: null
                        }
                    ]
                }
            ],
            percentage: null,
        },
        {
            title: "Maintain an acceptable graduation rate per program",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of applicants for graduation have graduated",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the % number of applicants who graduated",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Applicants",
                            subtitle: null
                        }
                    ]
                },
                {
                    title: "__% of these graduates finished on time (GOT)",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the % number of graduates who finished on time (GOT)",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Applicants",
                            subtitle: null
                        }
                    ]
                },
            ],
            percentage: null,
        },
        {
            title: "Maintain an acceptable enrolment rate",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of students re-enrolled",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the % number of enrolled students during the semester.",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of Students re-enrolled",
                            subtitle: null
                        }
                    ]
                }
            ],
            percentage: null,
        },
        {
            title: "Approval of AMTLP for faculty members",
            subtitle: null,
            fields: [
                {
                    title: "__% of the total number of AMTLP were evaluated and approved within three (3) working days before the first day of classes",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficiency refers to the % number of applicants who graduated",
                                values: []
                            }
                        }
                    },
                    for: "Effectiveness",
                    other_fields: [
                        {
                            for: "Target",
                            key: null,
                            title: "Total Number of AMTLP",
                            subtitle: null
                        }
                    ]
                }
            ],
            percentage: null,
        },
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

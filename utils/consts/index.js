import Percentage from "@modules/percentage";

function mfo_percentages () {
    this['Ratee'] = [0, 0, 0, 0, 0]
    this['Vice President'] = [95, 0, 0, 5, 0]
    this['Chancellor'] = [95, 0, 0, 5, 0]
    this['Vice Chancellor for Academic Affairs'] = [80, 10, 5, 5, 0]
    this['Vice Chancellor for Administration and Finance'] = [80, 10, 5, 5, 0]
    this['Vice Chancellor for Research, Development and Extension Services'] = [80, 10, 5, 5, 0]
    this['Vice Chancellor for Development and External Affairs'] = [80, 10, 5, 5, 0]
    this['Director'] = [80, 10, 5, 5, 0]
    this['Campus Director'] = [true, 10, 5, 5, 0]
    this['Assistant Director (Admin and Finance)'] = [80, 10, 5, 5, 0]
    this['Assistant Director (Academic Affairs)'] = [80, 10, 5, 5, 0]
    this['Dean'] = [80, 10, 5, 5, 0]
    this['Faculty Researcher, Not Designated (1 project)'] = [60, 30, 5, 5, 0]
    this['Faculty Researcher, Not Designated (2 projects)'] = [30, 60, 5, 5, 0]
    this['Faculty with Special Administrative Assignment'] = [20, 0, 0, 5, 75]
    this['Faculty Researcher, Designated (1 project)'] = [50, 15, 5, 5, 25]
    this['Faculty Researcher, Designated (2 projects)'] = [35, 30, 5, 5, 25]
    this['Department Chair (Instructor/Assistant Professor)'] = [50, 10, 10, 5, 25]
    this['Department Chair (Associate Professor/Professor)'] = [40, 20, 10, 5, 25]
    this['Program Chair (Instructor/Assistant Professor)'] = [50, 10, 10, 5, 25]
    this['Program Chair (Associate Professor/Professor)'] = [40, 20, 10, 5, 25]
    this['Coordinator  (Instructor/Assistant Professor)'] = [50, 10, 10, 5, 25]
    this['Coordinator (Associate Professor/Professor)'] = [40, 20, 10, 5, 25]
    this['Instructor'] = [75, 10, 10, 5, 0]
    this['Assistant Professor'] = [75, 10, 10, 5, 0]
    this['Associate Professor'] = [65, 20, 10, 5, 0]
    this['Professor'] = [65, 20, 10, 5, 0]
    this['Administrative Staff'] = [0, 0, 0, 5, 95]
    this['Guest Lecturer'] = [95, 0, 0, 5, 0]

    this.mapper = {
        'MFO1': 0,
        'MFO2': 1,
        'MFO3': 2,
        'MFO4': 3,
        'MFO5': 4,
    }

    this.getPercentage = (designation, mfoKey) => {
        if (designation && mfoKey) {
            return this?.[designation]?.[this.mapper[mfoKey]] ?? '-';
        } else {
            return '-'
        }
    }
}

const MFO_CONTENTS_1 = {
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

const MFO_CONTENTS_2 = {
    "MFO1": [
        {
            title: "Induction and orientation program for University leaders, faculty, staff and students",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of new faculty members and staff have actively participated in the orientation program",
                    subtitle: null,
                    for: "Quality",
                    dom:  { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 96% or higher", value: 5 },   
                                    { label: "4 - 91 - 95%", value: 4 },   
                                    { label: "3 - 90% attendance", value: 3 },
                                    { label: "2 - 61% - 89% ", value: 2 },   
                                    { label: "1 - 50% - 60%", value: 1 }, 
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
            ],
        },
        {
            title: "Adherence to the Quality Policy of the University for continuing professional and service excellence",
            subtitle: null,
            fields: [
                {
                    title: "At least 3.49 (Satisfactory) rating on customer satisfaction survey (CSS) with no unsatisfied customer",
                    subtitle: null,
                    dom: { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - not one unsatisfied  customer ", value: 5 },   
                                    { label: " 4 - 1 unsatisfied customer", value: 4 },   
                                    { label: "3 - 2-3 unsatisfied customers", value: 3 },
				    { label: "2 - 4 unsatisfied customers ", value: 2 },   
                                    { label: "1 - 5 unsatisfied customers or more", value: 1 },   
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "100% of the total number of required documents for Institutional Accreditation were prepared and submitted within 15 working days before the end of the rating period",
                    subtitle: null,
                    for: "Timeliness",
                    dom: {
                        contents: {
                            Timeliness: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 22 days before or earlier", value: 5 },   
                                    { label: " 4 - 16-21 days before", value: 4 },   
                                    { label: "3 - 15 days before", value: 3 },
				    { label: "2 - 8-14 days before ", value: 2 },   
                                    { label: "1 - 7 days before or later", value: 1 },
				]
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "Two (2) programs have prepared the requirements for a higher level of AACCUP accreditation",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 75% or higher ", value: 5 },   
                                    { label: "  4 - 51% - 74%", value: 4 },   
                                    { label: "50% of all requirements", value: 3 },
				    { label: "2 - 26% - 49% ", value: 2 },   
                                    { label: "1 - 25% or lower", value: 1 },
				]
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "Two (2) programs have prepared COPC documents for submission to CHED-TPET",
                    subtitle: null,
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 75% or higher", value: 5.00 },
                                    { label: "4 - 51% - 74%", value: 4.00 },
                                    { label: " 3 - 50% of all requirements", value: 3.00 },
                                    { label: " 2 - 26% - 49%", value: 2.00 },
                                    { label: "1 - 25% or lower", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
            ],
        },
        {
            title: "Outcomes-based / Industry-oriented accreditation for engineering, technology and computing sciences",
            subtitle: null,
            fields: [
                {
                    title: "2 programs have prepared Student Outcomes Assessment Report within ten (10) working days after the end of semester",
                    subtitle: null,
                    dom: { // Remarks
                        contents: {
                            Timeliness: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 5 days after or earlier", value: 5 },   
                                    { label: "4 - 6-9 days after", value: 4 },   
                                    { label: "3 - 10 days after semester end", value: 3 },
				    { label: "2 - 11-15 days after", value: 2 },   
                                    { label: " 1 - 16 days after or later", value: 1 },   
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    other_fields: []
                },
                {
                    title: "75% of the total number of final examinations were moderated before the scheduled final examination",
                    subtitle: null,
                    for: "Timeliness",
                    dom: {
                        contents: {
                            Timeliness: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 4 days before or earlier", value: 5 },   
                                    { label: "  4 - 2-3 days before", value: 4 },   
                                    { label: "3 - 0-1 day before due date ", value: 3 },
				    { label: "2 - 1-2 days after ", value: 2 },   
                                    { label: "1 - 3 days after or later ", value: 1 },
				]
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "100% of the total number of course syllabi were compliant to OBE and were submitted to QAM within ten (10) working days before the first day of classes",
                    subtitle: null,
                    for: "Timeliness",
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 15 days before or earlier", value: 5 },   
                                    { label: "4 - 11-14 days before", value: 4 },   
                                    { label: "3 - 10 days before due date", value: 3 },
				    { label: "2 - 6-9 days before", value: 2 },   
                                    { label: "1 - 5 days before or later", value: 1 },
				]
                            }
                        }
                    },
                    other_fields: []
                },
	    ],
        },
        {
            title: "Comprehensive graduate tracer program",
            subtitle: null,
            fields: [
                {
                    title: "75% of the total number of programs have conducted graduate tracer study",
                    subtitle: null,
                    for: "Quality",
                    dom:  { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: []
                            }
                        }
                    },
                    other_fields: []
                },
            ],
        },
        {
            title: "Academic laboratories and facilities responsive to Industry 4.0",
            subtitle: null,
            fields: [
                {
                    title: "75% of the total number of programs have increased the number of laboratory equipment and devices",
                    subtitle: null,
                    for: "Quality",
                    dom:  { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 50% or higher", value: 5 },   
                                    { label: "4 - 16% - 49% ", value: 4 },   
                                    { label: " 3 - 15% increase ", value: 3 },
                                    { label: "2 - 8% - 14% ", value: 2 },   
                                    { label: "1 - 7% or lower", value: 1 }, 
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
            ],
        },
        {
            title: "Attainment of teaching and learning excellence",
            subtitle: null,
            fields: [
                {
                    title: "90% of the total number of students have passed all enrolled courses",
                    subtitle: null,
                    dom: { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 75% or higher", value: 5 },   
                                    { label: " 4 - 51% - 74%", value: 4 },   
                                    { label: "3 - 50% have attained ILO", value: 3 },
				    { label: "2 - 26% - 49%", value: 2 },   
                                    { label: "1 - 25% or lower", value: 1 },   
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "100% of the total number of students who failed the Midterm Examination were provided with guidance and counseling services to pass the course",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 75% or higher", value: 5 },   
                                    { label: "4 - 51% - 74%", value: 4 },   
                                    { label: "3 - 50% passed courses", value: 3 },
                                    { label: "2 - 26% - 49%", value: 2 },   
                                    { label: "1 - 25% or lower", value: 1 },
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "90% of the total number of students have re-enrolled",
                    subtitle: null,
                    for: null,
                    dom: {
                        contents: {
                            null: {
                                label: null,
                                values: []
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "75% of the total number of candidates for graduation have graduated",
                    subtitle: null,
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 90% or higher", value: 5.00 },
                                    { label: "4 - 76% - 89%", value: 4.00 },
                                    { label: "3 - 75% graduated on time", value: 3.00 },
                                    { label: "2 - 51% - 74%", value: 2.00 },
                                    { label: "1 - 50% or lower", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "50% of the total number of faculty members have implemented MUD Card System in all their classes",
                    subtitle: null,
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 75% or higher", value: 5.00 },
                                    { label: " 4 - 51%-75%", value: 4.00 },
                                    { label: "3 - 50% positive feedback", value: 3.00 },
                                    { label: "2 - 26%-49%", value: 2.00 },
                                    { label: "1 - 25% or lower", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
            ],
        },
        {
            title: "Comprehensive internationalization program for colleges",
            subtitle: null,
            fields: [
                {
                    title: "Five (5) students have participated in International Student Mobility Program",
                    subtitle: null,
                    for: "Quality",
                    dom:  { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 96% or higher", value: 5 },   
                                    { label: "4 - 91%-95%", value: 4 },   
                                    { label: "3 - 81%-90%", value: 3 },
                                    { label: "2 - 51%-79%", value: 2 },   
                                    { label: "1 - 50% or lower", value: 1 }, 
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
            ],
        },
        {
            title: "Visibility of the University in the international community",
            subtitle: null,
            fields: [
                {
                    title: "One (1) new membership in international network was established",
                    subtitle: null,
                    dom: { // Remarks
                        contents: null
                    },
                    for: null,
                    other_fields: []
                },
                {
                    title: "One (1) new partnership with foreign university was established",
                    subtitle: null,
                    for: null,
                    dom: {
                        contents: null
                    },
                    other_fields: []
                },
                {
                    title: "One (1) international linkage was established",
                    subtitle: null,
                    for: null,
                    dom: {
                        contents: null
                    },
                    other_fields: []
                },
                {
                    title: "One (1) activity with international partners was conducted and actively participated",
                    subtitle: null,
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 91% or higher", value: 5.00 },
                                    { label: "4 - 76%-90%", value: 4.00 },
                                    { label: "3 - 75% of all partners", value: 3.00 },
                                    { label: "2 - 61%-74%", value: 2.00 },
                                    { label: "1 - 60% or lower", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "50% of the total number of faculty members (permanent and temporary) have participated in scholarly activities",
                    subtitle: null,
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 96%-100% attendance", value: 5.00 },
                                    { label: "4 - 91%-95% attendance", value: 4.00 },
                                    { label: "3 - 90% attendance", value: 3.00 },
                                    { label: "2 - 61%-89% attendance", value: 2.00 },
                                    { label: "1 - 50%-60% attendance", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
            ],
        },
        {
            title: "Engagement of foreign professors in specialized field of studies and academic activities",
            subtitle: null,
            fields: [
                {
                    title: "One (1) new foreign lecturer was engaged",
                    subtitle: null,
                    for: null,
                    dom:  { // Remarks
                        contents: null
                    },
                    other_fields: []
                },
            ],
        },
        {
            title: "Support to student societies and organizations",
            subtitle: null,
            fields: [
                {
                    title: "Two (2) student activities with at least 90% attendance were conducted",
                    subtitle: null,
                    for: "Quality",
                    dom:  { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 96% or higher", value: 5 },   
                                    { label: "4 - 91 - 95%", value: 4 },   
                                    { label: "3 - 90% attendance", value: 3 },
                                    { label: "2 - 61% - 89% ", value: 2 },   
                                    { label: "1 - 60% or lower", value: 1 },
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
            ],
        },
        {
            title: "Conducive and creative learning spaces",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of laboratory rooms were ready for limited face-to-face classes with strict compliance with safety and health protocols before the start of classes",
                    subtitle: null,
                    for: "Quality",
                    dom:  { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - with CHED approval", value: 5 },   
                                    { label: "4 - with LGU approval", value: 4 },   
                                    { label: "3 - rooms with adequate markings and signages", value: 3 },
                                    { label: "2 - rooms with mimimal markings and signages", value: 2 },   
                                    { label: "1 - rooms with less markings and signages", value: 1 },
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    dom:  { // Remarks
                        contents: {
                            Timeliness: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 3 days before or earlier", value: 5 },   
                                    { label: "4 - 1-2 days before", value: 4 },   
                                    { label: "3 - first day classes", value: 3 },
                                    { label: "2 - 1-2 days after", value: 2 },   
                                    { label: "1 - 3 days after or later", value: 1 },
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
            ],
        },
        {
            title: "Partnership, collaboration and engagement with stakeholders",
            subtitle: null,
            fields: [
                {
                    title: "One (1) collaborative activity was conducted and participants rated such activity/program as Satisfactory in terms of quality and timeliness",
                    subtitle: null,
                    for: "Quality",
                    dom:  { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - Outstanding", value: 5 },   
                                    { label: "4 - Very Satisfatory", value: 4 },   
                                    { label: "3 - Satisfatory", value: 3 },
                                    { label: "2 - Unsatisfactory", value: 2 },   
                                    { label: "1 - Poor", value: 1 }, 
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
            ],
        },
        {
            title: "Implementation of faculty development program",
            subtitle: null,
            fields: [
                {
                    title: "5% increase in the percentage of faculty members with doctorate degree",
                    subtitle: null,
                    dom: { // Remarks
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 41% or higher", value: 5 },   
                                    { label: "4 - 26% - 40%", value: 4 },   
                                    { label: "3 - 25% graduated on time", value: 3 },
                                    { label: "2 - 11% - 24%", value: 2 },   
                                    { label: "1 - 10% or lower", value: 1 },   
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "10% increase in the percentage of faculty members with masters degree",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 41% or higher", value: 5 },   
                                    { label: "4 - 26% - 40%", value: 4 },   
                                    { label: "3 - 25% graduated on time", value: 3 },
                                    { label: "2 - 11% - 24%", value: 2 },   
                                    { label: "1 - 10% or lower", value: 1 },
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "20 faculty members have pursued post graduate studies",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 76% or higher ", value: 5 },   
                                    { label: "4 - 51%-75%", value: 4 },   
                                    { label: "3 - 50%", value: 3 },
                                    { label: "2 - 26% - 49%", value: 2 },   
                                    { label: "1 - 25% or lower", value: 1 },
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
            ],
        },
    ],
    "MFO2": [
        {
            title: "Establishment of priority niche areas of research",
            subtitle: null,
            fields: [
                {
                    title: "75% of the total number of faculty members have participated in research activities (seminars, workshops, trainings, and conferences)",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 50% international or more", value: 5.00 },   
                                    { label: "4 - 35% - 49% international", value: 4.00  },
                                    { label: "3 - 25% - 34% international", value: 3.00  },
                                    { label: "2 - 11% - 24% international", value: 2.00  },
                                    { label: "1 - 10% international or less", value: 1.00  },
                                ]
                            }
                        }
                    },
                }
            ],
            for: "Quality",
            other_fields: []
        },
        {
            title: "Research productivity through efficient research management",
            subtitle: null,
            fields: [
                {
                    title: "One (1) research proposals were submitted for institutional/external funding",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 5 approved or more", value: 5.00  },   
                                    { label: "4 - 4 approved", value: 4.00 },   
                                    { label: "3 - 3 approved proposals", value: 3.00 },   
                                    { label: "2 - 2 approved", value: 2.00 },
                                    { label: "1 - 1 approved or less", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "One (1) institutionally/externally funded research output was completed",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 1 external, 1 institutional", value: 5.00  },   
                                    { label: "4 - 1 external", value: 4.00 },   
                                    { label: "3 - 1 institutional", value: 3.00  }, 
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "One (1) research paper was presented in regional / national / international conferences",
                    subtitle: null,
                    for: "Effectiveness",
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 50% international or more", value: 5.00},   
                                    { label: "4 - 35% - 49% international", value: 4.00 },   
                                    { label: "3 - 25% - 34% international", value: 3.00 },
                                    { label: "2 - 11% - 24% international", value: 2.00 },   
                                    { label: "1 - 10% international or less", value: 1.00},
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "One (1) research paper was published in ISI or Scopus Journal",
                    subtitle: null,
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: []
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "Enhancement of research culture among faculty members",
                    subtitle: null,
                    fields: [
                        {
                            title: "3 faculty members were engaged in funded research projects",
                            subtitle: null,
                            for: "Quality",
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "For Quality",
                                        values: [
                                            { label: "5 - 50% external or more", value: 5.00},   
                                            { label: "4 - 49% or less external", value: 4.00 },   
                                            { label: "3 - 100% institutional", value: 3.00},
                                        ]
                                    }
                                }
                            },
                            other_fields: []
                        },
                    ]
                },
                {
                    title: "Intellectual Property (IP) Rights",
                    subtitle: null,
                    fields: [
                        {
                            title: "Four (4) patents/copyrights were submitted to Research Office for filing ",
                            subtitle: null,
                            for: "Effectiveness",
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "For Quality",
                                        values: [
                                            { label: "5 - 76% or above", value: 5.00 },   
                                            { label: "4 - 51%-75%", value: 4.00  },   
                                            { label: "3 - 50% approved for IPO filing", value: 3.00 },
                                            { label: "2 -26% - 49% ", value: 2.00 },   
                                            { label: "1 - 25% or below", value: 1.00 },
                                        ]
                                    }
                                }
                            },
                        }
                    ]
                },
            ]
        }
    ],
    "MFO3": [
        {
            title: "Attainment of Sustainable Development Goals (SDG)",
            subtitle: null,
            fields: [
                {
                    title: "Seven (7) capacity building and livelihood trainings and projects were conducted and implemented",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - Outstanding", value: 5 },   
                                    { label: "4 - Very Satisfactory", value: 4 },   
                                    { label: "3 - Satisfactory", value: 3 },
                                    { label: "2 - Unsatisfactory", value: 2 },
                                    { label: "1 - Poor", value: 1 },   
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
                {
                    title: "182 persons were trained weighted by length of training and/or provided with technical advice",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: null
                    },
                    other_fields: []
                },
                {
                    title: "One (1) new adopter was engaged in profitable enterprises and viable demonstration projects",
                    subtitle: null,
                    for: "Quality",
                    dom: {
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "31% higher Increase in income", value: 5 },
                                    { label: "11-30% Increase in income", value: 4 },
                                    { label: "1-10% Increase in income", value: 3 },
                                ]
                            }
                        }
                    },
                },
                {
                    title: "Partnerships, collaboration and engagement with stakeholders",
                    subtitle: null,
                    fields: [
                        {
                            title: "One (1) new partnership with the industry and Government and Non-Government Organizations were established",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Effectiveness: {
                                        label: "Efficency refers to the number of papers published",
                                        values: []
                                    }
                                }
                            },
                        },
                    ]
                },
            ]
        },
        {
            title: "Trainings, community-oriented services and research collaborations with institutional partners",
            subtitle: null,
            fields: [
                {
                    title: "50% of the total number of faculty members have participated in the conduct of livelihood or skills training",
                    subtitle: null,
                    dom: {
                        contents: {
                            Effectiveness: {
                                label: "Efficency refers to the number of papers published",
                                values: []
                            }
                        }
                    },
                 },
            ]
        }
    ],
    "MFO4": [
        {
            title: "Attainment of Sustainable Development Goals (SDG)",
            subtitle: null,
            fields: [
                {
                    title: "75% of the total number of GAD meetings/activities were actively attended/participated",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 96%-100% attendance", value: 5.00 },   
                                    { label: "4 - 91%-95% attendance", value: 4.00  },   
                                    { label: "3 - 90% attendance", value: 3.00  },   
                                    { label: "2 - 61%-89% attendance", value: 2.00  },
                                    { label: "1 - 50%-60% attendance", value: 1.00  },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
            ]
        },
        {
            title: "Bids and Awards Committee (BAC)",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of BAC meetings/activities were actively attended/participated",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 96%-100% attendance", value: 5.00 },   
                                    { label: "4 - 91%-95% attendance ", value: 4.00  },   
                                    { label: "3 - 90% attendance", value: 3.00  },   
                                    { label: "2 - 61%-89% attendance", value: 2.00  },
                                    { label: "1 - 50%-60% attendance", value: 1.00  },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
            ]
        },
        {
            title: "Preparation of room utilization and class schedule",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of regular courses have class schedules approved and uploaded online within three (3) working days before the first day of enrolment",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 6 days before or earlier  ", value: 5.00 },   
                                    { label: "4 - 4-5 days before ", value: 4.00  },   
                                    { label: "3 - 3 days before enrolment ", value: 3.00  },   
                                    { label: "2 - 2 days before", value: 2.00   },
                                    { label: "1 - 50%-60% attendance", value: 1.00  },
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    other_fields: []
                },
            ]
        },
        {

            title: "Assignment / Distribution of teaching load",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of regular courses were distributed to faculty members within ten (10) working days before the scheduled start of classes",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 16 days before or earlier", value: 5.00 },   
                                    { label: "4 - 11-15 days before", value: 4.00  },   
                                    { label: "3 - 10 days before start of class", value: 3.00  },   
				    { label: "2 - 6-9 days before", value: 2.00   },
				    { label: "1 - 5 days before or later", value: 1.00  },
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    other_fields: []
                },
            ]
        },
        {
            title: "Alternative Mode of Teaching and Learning (AMTL)",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of AMTL plans were evaluated and approved within three (3) working days upon receipt",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 1 day after or earlier   ", value: 5.00 },   
                                    { label: "4 - 2 days after   ", value: 4.00  },   
                                    { label: "3 - 3 days after  ", value: 3.00  },   
				    { label: "2 - 4-5 days after  ", value: 2.00   },
				    { label: "1 - 6 days after or later", value: 1.00  },
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    other_fields: []
                },
            ]
        },
        {
            title: "Development of Instructional Materials (IM)",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of courses offered have approved IMs within one (1) working day before the scheduled start of classes",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 4 days before or earlier ", value: 5.00  },   
                                    { label: "4 - 2-3 days before  ", value: 4.00 },   
                                    { label: "3 - 0-1 day before   ", value: 3.00 },   
				    { label: "2 - 1-2 days after  ", value: 2.00 },
				    { label: "1 - 3 days after or later", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    other_fields: []
                },
            ]
        },
        {
            title: "Timely and proper submission of student grades",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of grading sheets were approved for uploading within the prescribed due date",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Timeliness",
                                values: [
                                    { label: "5 - 3 days before or earlier ", value: 5.00  },   
                                    { label: "4 - 2 days before   ", value: 4.00 },   
                                    { label: "3 - 0-1 day before   ", value: 3.00 },   
                                    { label: "2 - 1-2 days after ", value: 2.00 },
                                    { label: "1 - 3 days after or later", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    other_fields: []
                },
            ]
        },
        {
            title: "Attendance, participation and representation to institutional meetings and conferences ",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of meetings/conferences were attended and actively participated",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 96%-100% attendance", value: 5.00  },   
                                    { label: "4 - 91%-95% attendance ", value: 4.00 },   
                                    { label: "3 - 90% attendance", value: 3.00 },   
				    { label: "2 - 61%-89% attendance ", value: 2.00 },
				    { label: "1 - 50%-60% attendance", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
            ]
        },
        {
            title: "Conduct of meetings",
            subtitle: null,
            fields: [
                {
                    title: "Two (2) meetings with 90% attendance were conducted",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                            Quality: {
                                label: "For Quality",
                                values: [
                                    { label: "5 - 96%-100%  ", value: 5.00  },   
                                    { label: "4 - 91%-95%    ", value: 4.00 },   
                                    { label: "3 - 90%       ", value: 3.00 },   
				    { label: "2 - 61%-89%   ", value: 2.00 },
				    { label: "1 - 50%-60%", value: 1.00 },
                                ]
                            }
                        }
                    },
                    for: "Quality",
                    other_fields: []
                },
            ]
        },
    ],
    "MFO5": [
        {
            title: "Submission of daily time record (DTR)",
            subtitle: "An incentive of 0.5% is added to the total score",
            fields: [
                {
                    title: "100% of the total number of DTR were submitted to HR one (1) working day after every cut-off period",
                    subtitle: null,
                    dom: { // Details of Measurement
                        contents: {
                           Timeliness: {
                                label: "5 - 3 hours after or earlier 4 - 4-7 hours after 3 - 8 hours after 2 - 9-12 hours after 1 - 13 hours after or later ",
                                values: [
                                    {label: "5 - 3 hours after or earlier", value: 5 },
                                    {label: "4 - 7 hours after or earlier", value: 4 },
                                    {label: "3 - 8 hours after or earlier", value: 3 },
                                    {label: "9 - 12 hours after or earlier", value: 2 },
                                    {label: "13 hours after or earlier", value: 1 },
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    other_fields: []
                },
                {
                    title: "Submission of OPCR Forms",
                    subtitle: null,
                    for: "Timeliness",
                    dom: {
                        contents: {
                            Timeliness: {
                                label: "OPCR form (Jul-Dec 2021 Accomplishment) was submitted 15 working days after the start of the Jan-June 2022 rating period",
                                values: []
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "Submission of OPCR Forms",
                    subtitle: null,
                    for: "Timeliness",
                    dom: {
                        contents: {
                            Timeliness: {
                                label: "OPCR form (Jul-Dec 2022 targets) was submitted 15 working days before the end of the Jan-Jun 2022 rating period",
                                values: []
                            }
                        }
                    },
                    other_fields: []
                },
                {
                    title: "Submission of OPCR Forms",
                    subtitle: null,
                    dom: {
                        contents: {
                            Timeliness: {
                                label: "5 - 7 days after or earlier 4 - 8-14 days after 3 - 15 days after 2 - 16-20 days after 1 - 21 days after or later",
                                values: [
                                    	{label: "7 days after or earlier", value: 5 },
                                        {label: "8-14 days after", value: 4 },
                                        {label: "15 days after ", value: 3 },
                                        {label: "16-20 days after", value: 2 },
                                        {label: "21 days after or later", value: 1 },
                                ]
                            }
                        }
                    },
                    for: "Timeliness",
                    other_fields: []
                },
            ],
            percentage: new Percentage("Incentives", [0.005]),
        },
        {
            title: "Submission of various reports and documents",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of reports and documents were submitted on the prescribed due date",
                    subtitle: null,
                    for: "Timeliness",
                    dom: {
                        contents: {
                            Timeliness: {
                                label: " - 3 days before or earlier 4 - 1-2 days before 3 - prescribed due date 2 - 1-2 days after 1 - 3 days after or later",
                                values: [
                                    {label: "18 days before or earlier ", value: 5 },
                                    {label: "16-17 days before", value: 4 },
                                    {label: "15 days before ", value: 3 },
                                    {label: "8-14 days before", value: 2 },
                                    {label: "7 days after or later", value: 1 },
                                ]
                            }
                        }
                    },
                    other_fields: []
                },
            ],
            percentage: new Percentage("Incorporated", [0.45]),
        },
        {
            title: "Response to requests and communications",
            subtitle: null,
            fields: [
                {
                    title: "100% of the total number of requests and communications received were acknowledged and received and/or advised on action taken within eight (8) hours after receipt",
                    subtitle: null,
                    for: "Timeliness",
                    dom: {
                        contents: {
                            Timeliness: {
                                label: "5 - 3 hours after or earlier 4 - 4-7 hours after 3 - 8 hours after 2 - 9-12 hours after 1 - 13 hours after or later ",
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
                            key: "Timeliness",
                            title: "Timeliness of Advising",
                            subtitle: null,
                            dom: {
                                contents: {
                                    Timeliness: {
                                        label: "5 - 3 hours after or earlier 4 - 4-7 hours after 3 - 8 hours after 2 - 9-12 hours after 1 - 13 hours after or later ",
                                        values: [
                                            {label: "5 - 3 hours after or earlier", value: 5 },
                                            {label: "4 - 7 hours after or earlier", value: 4 },
                                            {label: "3 - 8 hours after or earlier", value: 3 },
                                            {label: "9 - 12 hours after or earlier", value: 2 },
                                            {label: "13 hours after or earlier", value: 1 },
                                        ]
                                    }
                                }
                            },
                        },
                    ]
                },
            ]
        },
    ],
}

const MFO = [
    {
        key: "MFO1",
        label: "MFO 1 - HIGHER EDUCATION",
        data: {
            title: "High Education",
            percentage: new mfo_percentages(),
            IPCR: MFO_CONTENTS_1['MFO1'],
            OPCR: MFO_CONTENTS_2['MFO1'],
        }
    },
    {
        key: "MFO2",
        label: "MFO 2 - RESEARCH",
        data: {
            title: "Research",
            percentage: new mfo_percentages(),        
            IPCR: MFO_CONTENTS_1['MFO2'],
            OPCR: MFO_CONTENTS_2['MFO2'],
        }
    },
    {
        key: "MFO3",
        label: "MFO 3 - EXTENSION",
        data: {
            title: "Extension",
            percentage: new mfo_percentages(),        
            IPCR: MFO_CONTENTS_1['MFO3'],
            OPCR: MFO_CONTENTS_2['MFO3'],
        }
    },
    {
        key: "MFO4",
        label: "MFO 4 - SUPPORT FUNCTION",
        data: {
            title: "Support Function",
            percentage: new mfo_percentages(),        
            IPCR: MFO_CONTENTS_1['MFO4'],
            OPCR: MFO_CONTENTS_2['MFO4'],
        }
    },
    {
        key: "MFO5",
        label: "MFO 5 - ADMIN FUNCTION",
        data: {
            title: "Admin Function",
            percentage: new mfo_percentages(),        
            IPCR: MFO_CONTENTS_1['MFO5'],
            OPCR: MFO_CONTENTS_2['MFO5'],
        }
    },  
];

export { MFO };

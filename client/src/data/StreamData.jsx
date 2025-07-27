const streamData = {
  PCM: [
    {
      id: 'engineering',
      title: 'Engineering',
      category: 'Technology & Innovation',
      description: 'Build the future with technology and innovation through mathematical principles',
      image: '/Image/engineering.jpg',
      colleges: [
        {
          name: 'IIT Delhi',
          location: 'New Delhi',
          avgPackage: '₹25-45 LPA',
          duration: '4 Years',
          specialization: ['Computer Science', 'Mechanical', 'Electrical', 'Civil']
        },
        {
          name: 'IIT Bombay',
          location: 'Mumbai',
          avgPackage: '₹28-50 LPA',
          duration: '4 Years',
          specialization: ['Aerospace', 'Chemical', 'Metallurgy', 'Computer Science']
        },
        {
          name: 'NIT Trichy',
          location: 'Tiruchirappalli',
          avgPackage: '₹18-35 LPA',
          duration: '4 Years',
          specialization: ['Electronics', 'Mechanical', 'Computer Science', 'Civil']
        },
        {
          name: 'BITS Pilani',
          location: 'Pilani',
          avgPackage: '₹20-40 LPA',
          duration: '4 Years',
          specialization: ['Software Engineering', 'Electronics', 'Mechanical', 'Chemical']
        }
      ],
      roadmap: [
        'Complete 12th with PCM (Physics, Chemistry, Mathematics)',
        'Prepare for JEE Main & Advanced',
        'Choose engineering branch based on interest',
        'Build projects and gain practical experience',
        'Pursue internships in relevant companies',
        'Consider higher studies (M.Tech) or job placement'
      ]
    },
    {
      id: 'nda',
      title: 'National Defence Academy',
      category: 'Defence & Security',
      description: 'Serve the nation with honor through the National Defence Academy',
      image: '/Image/NDA.jpg',
      colleges: [
        {
          name: 'National Defence Academy',
          location: 'Khadakwasla, Pune',
          avgPackage: '₹15-25 LPA',
          duration: '3 Years',
          specialization: ['Army', 'Navy', 'Air Force', 'Coast Guard']
        },
        {
          name: 'Indian Naval Academy',
          location: 'Ezhimala, Kerala',
          avgPackage: '₹18-30 LPA',
          duration: '4 Years',
          specialization: ['Naval Operations', 'Marine Engineering', 'Naval Architecture']
        },
        {
          name: 'Air Force Academy',
          location: 'Hyderabad',
          avgPackage: '₹20-35 LPA',
          duration: '3.5 Years',
          specialization: ['Flying Branch', 'Technical Branch', 'Ground Duty']
        },
        {
          name: 'Indian Military Academy',
          location: 'Dehradun',
          avgPackage: '₹16-28 LPA',
          duration: '1.5 Years',
          specialization: ['Infantry', 'Artillery', 'Armoured Corps', 'Engineers']
        }
      ],
      roadmap: [
        'Complete 12th with any stream (PCM preferred)',
        'Prepare for NDA entrance exam',
        'Clear written exam and SSB interview',
        'Complete training at respective academies',
        'Get commissioned as an officer',
        'Serve in various postings and advance career'
      ]
    },
    {
      id: 'aviation',
      title: 'Aviation & Pilot Training',
      category: 'Aerospace & Aviation',
      description: 'Take flight and soar high with careers in aviation industry',
      image: '/Image/pilot.jpg',
      colleges: [
        {
          name: 'Indira Gandhi Rashtriya Uran Akademi',
          location: 'Rae Bareli',
          avgPackage: '₹30-80 LPA',
          duration: '2 Years',
          specialization: ['Commercial Pilot', 'Aircraft Maintenance', 'Air Traffic Control']
        },
        {
          name: 'Bombay Flying Club',
          location: 'Mumbai',
          avgPackage: '₹25-75 LPA',
          duration: '18 Months',
          specialization: ['Private Pilot License', 'Commercial Pilot License']
        },
        {
          name: 'Ahmedabad Aviation & Aeronautics',
          location: 'Ahmedabad',
          avgPackage: '₹28-70 LPA',
          duration: '2 Years',
          specialization: ['Flight Training', 'Aircraft Engineering', 'Airport Operations']
        },
        {
          name: 'CAE Oxford Aviation Academy',
          location: 'Bangalore',
          avgPackage: '₹40-90 LPA',
          duration: '15 Months',
          specialization: ['Airline Transport Pilot', 'Multi-Engine Rating']
        }
      ],
      roadmap: [
        'Complete 12th with PCM and good physical fitness',
        'Obtain Student Pilot License (SPL)',
        'Complete Private Pilot License (PPL)',
        'Pursue Commercial Pilot License (CPL)',
        'Build flying hours and experience',
        'Join airlines or pursue specialized aviation careers'
      ]
    },
    {
      id: 'science',
      title: 'Pure Science & Research',
      category: 'Research & Development',
      description: 'Advance human knowledge through scientific research and discovery',
      image: '/Image/research.jpg',
      colleges: [
        {
          name: 'Indian Institute of Science',
          location: 'Bangalore',
          avgPackage: '₹12-25 LPA',
          duration: '3-5 Years',
          specialization: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
        },
        {
          name: 'Tata Institute of Fundamental Research',
          location: 'Mumbai',
          avgPackage: '₹15-30 LPA',
          duration: '4-6 Years',
          specialization: ['Theoretical Physics', 'Mathematics', 'Computer Science']
        },
        {
          name: 'Indian Statistical Institute',
          location: 'Kolkata',
          avgPackage: '₹10-22 LPA',
          duration: '3-4 Years',
          specialization: ['Statistics', 'Mathematics', 'Computer Science']
        },
        {
          name: 'IISER Pune',
          location: 'Pune',
          avgPackage: '₹8-20 LPA',
          duration: '5 Years',
          specialization: ['Biology', 'Chemistry', 'Physics', 'Mathematics']
        }
      ],
      roadmap: [
        'Complete 12th with PCM with high scores',
        'Pursue BSc in relevant field',
        'Excel in undergraduate studies',
        'Pursue MSc and then PhD',
        'Engage in research projects and publications',
        'Join research institutions or academic careers'
      ]
    },
    {
      id: 'management',
      title: 'Management',
      category: 'Business & Leadership',
      description: 'Lead organizations and drive business success with analytical skills',
      image: '/Image/management.jpg',
      colleges: [
        {
          name: 'IIM Ahmedabad',
          location: 'Ahmedabad',
          avgPackage: '₹35-65 LPA',
          duration: '2 Years',
          specialization: ['Finance', 'Marketing', 'Operations', 'Strategy']
        },
        {
          name: 'IIM Bangalore',
          location: 'Bangalore',
          avgPackage: '₹32-60 LPA',
          duration: '2 Years',
          specialization: ['Consulting', 'Finance', 'General Management']
        },
        {
          name: 'XLRI Jamshedpur',
          location: 'Jamshedpur',
          avgPackage: '₹28-50 LPA',
          duration: '2 Years',
          specialization: ['HR', 'Finance', 'Marketing', 'Operations']
        },
        {
          name: 'FMS Delhi',
          location: 'New Delhi',
          avgPackage: '₹25-45 LPA',
          duration: '2 Years',
          specialization: ['Finance', 'Marketing', 'Operations', 'International Business']
        }
      ],
      roadmap: [
        'Complete graduation in any field',
        'Gain work experience (2-3 years recommended)',
        'Prepare for CAT/XAT/GMAT',
        'Clear entrance exams and interviews',
        'Complete MBA program',
        'Pursue leadership roles in corporations'
      ]
    },
    {
      id: 'law',
      title: 'Law',
      category: 'Legal & Justice',
      description: 'Practice justice with strong analytical and mathematical reasoning',
      image: '/Image/law.jpg',
      colleges: [
        {
          name: 'National Law School',
          location: 'Bangalore',
          avgPackage: '₹20-40 LPA',
          duration: '5 Years',
          specialization: ['Corporate Law', 'Criminal Law', 'Constitutional Law']
        },
        {
          name: 'NALSAR University',
          location: 'Hyderabad',
          avgPackage: '₹18-35 LPA',
          duration: '5 Years',
          specialization: ['IPR Law', 'Corporate Law', 'International Law']
        },
        {
          name: 'Jindal Global Law School',
          location: 'Sonipat',
          avgPackage: '₹15-30 LPA',
          duration: '5 Years',
          specialization: ['Business Law', 'Human Rights', 'Environmental Law']
        },
        {
          name: 'ILS Law College',
          location: 'Pune',
          avgPackage: '₹12-25 LPA',
          duration: '5 Years',
          specialization: ['Civil Law', 'Criminal Law', 'Family Law']
        }
      ],
      roadmap: [
        'Complete 12th with any stream',
        'Prepare for CLAT/LSAT entrance exams',
        'Pursue 5-year integrated LLB program',
        'Gain practical experience through internships',
        'Clear bar examination',
        'Specialize in preferred area of law practice'
      ]
    }
  ],
  PCB: [
    {
      id: 'medicine',
      title: 'Medicine (MBBS)',
      category: 'Healthcare & Medicine',
      description: 'Heal and save lives through medical practice and healthcare',
      image: '/Image/medicine.jpg',
      colleges: [
        {
          name: 'AIIMS Delhi',
          location: 'New Delhi',
          avgPackage: '₹15-40 LPA',
          duration: '5.5 Years',
          specialization: ['General Medicine', 'Surgery', 'Pediatrics', 'Cardiology']
        },
        {
          name: 'Christian Medical College',
          location: 'Vellore',
          avgPackage: '₹12-35 LPA',
          duration: '5.5 Years',
          specialization: ['Internal Medicine', 'Surgery', 'Obstetrics', 'Psychiatry']
        },
        {
          name: 'King George Medical University',
          location: 'Lucknow',
          avgPackage: '₹10-30 LPA',
          duration: '5.5 Years',
          specialization: ['General Medicine', 'Surgery', 'Anesthesia', 'Radiology']
        },
        {
          name: 'Maulana Azad Medical College',
          location: 'New Delhi',
          avgPackage: '₹12-32 LPA',
          duration: '5.5 Years',
          specialization: ['Medicine', 'Surgery', 'Orthopedics', 'Dermatology']
        }
      ],
      roadmap: [
        'Complete 12th with PCB (Physics, Chemistry, Biology)',
        'Prepare for NEET entrance exam',
        'Clear NEET and get admission to medical college',
        'Complete MBBS degree (5.5 years)',
        'Complete mandatory internship',
        'Pursue specialization (MD/MS) or start practice'
      ]
    },
    {
      id: 'dentistry',
      title: 'Dentistry (BDS)',
      category: 'Healthcare & Medicine',
      description: 'Specialize in oral health and dental care',
      image: '/Image/dentistry.jpg',
      colleges: [
        {
          name: 'Maulana Azad Institute of Dental Sciences',
          location: 'New Delhi',
          avgPackage: '₹8-25 LPA',
          duration: '5 Years',
          specialization: ['Oral Surgery', 'Orthodontics', 'Periodontics', 'Endodontics']
        },
        {
          name: 'Government Dental College',
          location: 'Mumbai',
          avgPackage: '₹6-22 LPA',
          duration: '5 Years',
          specialization: ['Prosthodontics', 'Oral Medicine', 'Pediatric Dentistry']
        },
        {
          name: 'King George Dental College',
          location: 'Lucknow',
          avgPackage: '₹7-20 LPA',
          duration: '5 Years',
          specialization: ['Oral Surgery', 'Conservative Dentistry', 'Orthodontics']
        },
        {
          name: 'Government Dental College',
          location: 'Bangalore',
          avgPackage: '₹8-24 LPA',
          duration: '5 Years',
          specialization: ['Oral Pathology', 'Periodontics', 'Prosthodontics']
        }
      ],
      roadmap: [
        'Complete 12th with PCB',
        'Prepare for NEET entrance exam',
        'Clear NEET and get admission to dental college',
        'Complete BDS degree (5 years)',
        'Complete mandatory internship',
        'Pursue specialization (MDS) or start dental practice'
      ]
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      category: 'Healthcare & Medicine',
      description: 'Work with medicines and pharmaceutical sciences',
      image: '/Image/pharmacy.jpg',
      colleges: [
        {
          name: 'Jamia Hamdard University',
          location: 'New Delhi',
          avgPackage: '₹5-18 LPA',
          duration: '4 Years',
          specialization: ['Clinical Pharmacy', 'Industrial Pharmacy', 'Hospital Pharmacy']
        },
        {
          name: 'Institute of Chemical Technology',
          location: 'Mumbai',
          avgPackage: '₹6-20 LPA',
          duration: '4 Years',
          specialization: ['Pharmaceutical Chemistry', 'Pharmacology', 'Drug Development']
        },
        {
          name: 'Manipal College of Pharmaceutical Sciences',
          location: 'Manipal',
          avgPackage: '₹5-16 LPA',
          duration: '4 Years',
          specialization: ['Clinical Research', 'Quality Assurance', 'Regulatory Affairs']
        },
        {
          name: 'National Institute of Pharmaceutical Education',
          location: 'Mohali',
          avgPackage: '₹6-22 LPA',
          duration: '4 Years',
          specialization: ['Drug Discovery', 'Pharmaceutical Analysis', 'Biotechnology']
        }
      ],
      roadmap: [
        'Complete 12th with PCB/PCM',
        'Prepare for pharmacy entrance exams',
        'Complete B.Pharm degree (4 years)',
        'Register with State Pharmacy Council',
        'Pursue M.Pharm or start career in pharmaceutical industry',
        'Consider specializations in clinical research or drug development'
      ]
    },
    {
      id: 'biotechnology',
      title: 'Biotechnology',
      category: 'Science & Technology',
      description: 'Merge biology with technology for innovative solutions',
      image: '/Image/biotech.jpg',
      colleges: [
        {
          name: 'Indian Institute of Technology Delhi',
          location: 'New Delhi',
          avgPackage: '₹8-25 LPA',
          duration: '4 Years',
          specialization: ['Genetic Engineering', 'Bioinformatics', 'Bioprocess Technology']
        },
        {
          name: 'Jawaharlal Nehru University',
          location: 'New Delhi',
          avgPackage: '₹6-20 LPA',
          duration: '4 Years',
          specialization: ['Molecular Biology', 'Cell Biology', 'Biochemistry']
        },
        {
          name: 'Indian Institute of Science',
          location: 'Bangalore',
          avgPackage: '₹10-28 LPA',
          duration: '4 Years',
          specialization: ['Synthetic Biology', 'Bioengineering', 'Computational Biology']
        },
        {
          name: 'Amity Institute of Biotechnology',
          location: 'Noida',
          avgPackage: '₹5-18 LPA',
          duration: '4 Years',
          specialization: ['Industrial Biotechnology', 'Medical Biotechnology', 'Agricultural Biotechnology']
        }
      ],
      roadmap: [
        'Complete 12th with PCB',
        'Prepare for biotechnology entrance exams',
        'Complete B.Tech/B.Sc in Biotechnology',
        'Gain research experience through internships',
        'Pursue M.Tech/M.Sc or start career in biotech industry',
        'Consider PhD for research career'
      ]
    },
    {
      id: 'nursing',
      title: 'Nursing',
      category: 'Healthcare & Medicine',
      description: 'Provide compassionate healthcare and patient care',
      image: '/Image/nursing.jpg',
      colleges: [
        {
          name: 'All India Institute of Medical Sciences',
          location: 'New Delhi',
          avgPackage: '₹4-12 LPA',
          duration: '4 Years',
          specialization: ['Critical Care', 'Pediatric Nursing', 'Psychiatric Nursing']
        },
        {
          name: 'Christian Medical College',
          location: 'Vellore',
          avgPackage: '₹3-10 LPA',
          duration: '4 Years',
          specialization: ['Community Health', 'Medical-Surgical Nursing', 'Obstetric Nursing']
        },
        {
          name: 'Armed Forces Medical College',
          location: 'Pune',
          avgPackage: '₹5-15 LPA',
          duration: '4 Years',
          specialization: ['Military Nursing', 'Emergency Care', 'Trauma Nursing']
        },
        {
          name: 'Rajkumari Amrit Kaur College of Nursing',
          location: 'New Delhi',
          avgPackage: '₹3-11 LPA',
          duration: '4 Years',
          specialization: ['Public Health Nursing', 'Geriatric Care', 'Rehabilitation Nursing']
        }
      ],
      roadmap: [
        'Complete 12th with PCB',
        'Prepare for nursing entrance exams',
        'Complete B.Sc Nursing (4 years)',
        'Register with Indian Nursing Council',
        'Gain clinical experience in hospitals',
        'Pursue M.Sc Nursing for specialization'
      ]
    },
    {
      id: 'veterinary',
      title: 'Veterinary Science',
      category: 'Healthcare & Medicine',
      description: 'Care for animals and ensure their health and welfare',
      image: '/Image/veterinary.jpg',
      colleges: [
        {
          name: 'Indian Veterinary Research Institute',
          location: 'Bareilly',
          avgPackage: '₹4-15 LPA',
          duration: '5.5 Years',
          specialization: ['Small Animal Practice', 'Large Animal Medicine', 'Wildlife Medicine']
        },
        {
          name: 'Tamil Nadu Veterinary and Animal Sciences University',
          location: 'Chennai',
          avgPackage: '₹3-12 LPA',
          duration: '5.5 Years',
          specialization: ['Veterinary Surgery', 'Animal Nutrition', 'Poultry Science']
        },
        {
          name: 'Guru Angad Dev Veterinary University',
          location: 'Ludhiana',
          avgPackage: '₹4-14 LPA',
          duration: '5.5 Years',
          specialization: ['Dairy Science', 'Animal Breeding', 'Veterinary Public Health']
        },
        {
          name: 'College of Veterinary Science',
          location: 'Hyderabad',
          avgPackage: '₹3-13 LPA',
          duration: '5.5 Years',
          specialization: ['Veterinary Pathology', 'Animal Husbandry', 'Veterinary Microbiology']
        }
      ],
      roadmap: [
        'Complete 12th with PCB',
        'Prepare for veterinary entrance exams',
        'Complete B.V.Sc & A.H degree (5.5 years)',
        'Register with Veterinary Council of India',
        'Gain practical experience in veterinary hospitals',
        'Consider specialization or start veterinary practice'
      ]
    }
  ],
  Arts: [
    {
      id: 'journalism',
      title: 'Journalism & Mass Communication',
      category: 'Media & Communication',
      description: 'Shape public opinion through media and communication',
      image: '/Image/journlism.avif',
      colleges: [
        {
          name: 'Indian Institute of Mass Communication',
          location: 'New Delhi',
          avgPackage: '₹6-20 LPA',
          duration: '3 Years',
          specialization: ['Print Journalism', 'Broadcast Journalism', 'Digital Media', 'Public Relations']
        },
        {
          name: 'Xavier Institute of Communications',
          location: 'Mumbai',
          avgPackage: '₹5-18 LPA',
          duration: '3 Years',
          specialization: ['Advertising', 'Film Studies', 'Corporate Communication']
        },
        {
          name: 'Symbiosis Institute of Media & Communication',
          location: 'Pune',
          avgPackage: '₹4-16 LPA',
          duration: '3 Years',
          specialization: ['Television Production', 'Radio Jockeying', 'Content Writing']
        },
        {
          name: 'Mudra Institute of Communications',
          location: 'Ahmedabad',
          avgPackage: '₹5-17 LPA',
          duration: '2 Years',
          specialization: ['Advertising', 'Brand Management', 'Creative Writing']
        }
      ],
      roadmap: [
        'Complete 12th with any stream (Arts preferred)',
        'Prepare for journalism entrance exams',
        'Complete Bachelor\'s in Journalism/Mass Communication',
        'Build portfolio through internships and freelancing',
        'Specialize in preferred media domain',
        'Pursue advanced roles in media organizations'
      ]
    },
    {
      id: 'psychology',
      title: 'Psychology',
      category: 'Social Sciences',
      description: 'Understand human behavior and mental processes',
      image: '/Image/Psychology.jpg',
      colleges: [
        {
          name: 'University of Delhi',
          location: 'New Delhi',
          avgPackage: '₹4-15 LPA',
          duration: '3 Years',
          specialization: ['Clinical Psychology', 'Counseling Psychology', 'Organizational Psychology']
        },
        {
          name: 'Tata Institute of Social Sciences',
          location: 'Mumbai',
          avgPackage: '₹5-18 LPA',
          duration: '3 Years',
          specialization: ['Applied Psychology', 'Educational Psychology', 'Community Psychology']
        },
        {
          name: 'Christ University',
          location: 'Bangalore',
          avgPackage: '₹3-12 LPA',
          duration: '3 Years',
          specialization: ['Forensic Psychology', 'Health Psychology', 'Sports Psychology']
        },
        {
          name: 'Jamia Millia Islamia',
          location: 'New Delhi',
          avgPackage: '₹4-14 LPA',
          duration: '3 Years',
          specialization: ['Developmental Psychology', 'Social Psychology', 'Cognitive Psychology']
        }
      ],
      roadmap: [
        'Complete 12th with any stream',
        'Pursue Bachelor\'s in Psychology',
        'Gain practical experience through internships',
        'Complete Master\'s in specialized area',
        'Consider PhD for research or clinical practice',
        'Obtain necessary licenses for clinical practice'
      ]
    },
    {
      id: 'literature',
      title: 'Literature & Languages',
      category: 'Humanities & Languages',
      description: 'Explore the world of languages, literature, and creative writing',
      image: '/Image/language.png',
      colleges: [
        {
          name: 'Jawaharlal Nehru University',
          location: 'New Delhi',
          avgPackage: '₹3-12 LPA',
          duration: '3 Years',
          specialization: ['English Literature', 'Comparative Literature', 'Translation Studies']
        },
        {
          name: 'University of Hyderabad',
          location: 'Hyderabad',
          avgPackage: '₹3-10 LPA',
          duration: '3 Years',
          specialization: ['Hindi Literature', 'Linguistics', 'Creative Writing']
        },
        {
          name: 'Presidency University',
          location: 'Kolkata',
          avgPackage: '₹3-11 LPA',
          duration: '3 Years',
          specialization: ['Bengali Literature', 'English Studies', 'Cultural Studies']
        },
        {
          name: 'University of Mumbai',
          location: 'Mumbai',
          avgPackage: '₹3-9 LPA',
          duration: '3 Years',
          specialization: ['Marathi Literature', 'English Literature', 'Film Studies']
        }
      ],
      roadmap: [
        'Complete 12th with Arts/Humanities',
        'Pursue Bachelor\'s in Literature/Languages',
        'Develop writing and analytical skills',
        'Complete Master\'s in specialized literature',
        'Consider PhD for academic career',
        'Explore careers in publishing, teaching, or writing'
      ]
    },
    {
      id: 'social-work',
      title: 'Social Work',
      category: 'Social Sciences',
      description: 'Make a difference in society through social service and advocacy',
      image: '/Image/Social Work.jpg',
      colleges: [
        {
          name: 'Tata Institute of Social Sciences',
          location: 'Mumbai',
          avgPackage: '₹4-15 LPA',
          duration: '2 Years',
          specialization: ['Community Development', 'Medical Social Work', 'Psychiatric Social Work']
        },
        {
          name: 'Delhi School of Social Work',
          location: 'New Delhi',
          avgPackage: '₹3-12 LPA',
          duration: '2 Years',
          specialization: ['Family & Child Welfare', 'Rural Development', 'Urban Community Development']
        },
        {
          name: 'Rajagiri College of Social Sciences',
          location: 'Kochi',
          avgPackage: '₹3-10 LPA',
          duration: '2 Years',
          specialization: ['Human Resource Management', 'Social Entrepreneurship', 'Disaster Management']
        },
        {
          name: 'Indira Gandhi National Open University',
          location: 'New Delhi',
          avgPackage: '₹3-11 LPA',
          duration: '2 Years',
          specialization: ['Counseling', 'Community Organization', 'Social Policy']
        }
      ],
      roadmap: [
        'Complete Bachelor\'s degree in any field',
        'Prepare for social work entrance exams',
        'Complete Master\'s in Social Work (MSW)',
        'Gain field experience through internships',
        'Specialize in preferred area of social work',
        'Work with NGOs, government, or start own initiatives'
      ]
    },
    {
      id: 'design',
      title: 'Design & Fine Arts',
      category: 'Creative Arts',
      description: 'Express creativity through visual arts and design',
      image: '/Image/Design & Fine Arts.jpg',
      colleges: [
        {
          name: 'National Institute of Design',
          location: 'Ahmedabad',
          avgPackage: '₹6-25 LPA',
          duration: '4 Years',
          specialization: ['Product Design', 'Communication Design', 'Textile Design', 'Animation']
        },
        {
          name: 'National Institute of Fashion Technology',
          location: 'New Delhi',
          avgPackage: '₹5-20 LPA',
          duration: '4 Years',
          specialization: ['Fashion Design', 'Fashion Technology', 'Fashion Communication']
        },
        {
          name: 'Sir J.J. School of Art',
          location: 'Mumbai',
          avgPackage: '₹4-15 LPA',
          duration: '4 Years',
          specialization: ['Fine Arts', 'Applied Arts', 'Sculpture', 'Painting']
        },
        {
          name: 'Pearl Academy',
          location: 'Multiple Cities',
          avgPackage: '₹4-18 LPA',
          duration: '4 Years',
          specialization: ['Interior Design', 'Jewelry Design', 'Fashion Design', 'Media Design']
        }
      ],
      roadmap: [
        'Complete 12th with any stream (Arts preferred)',
        'Prepare portfolio for design entrance exams',
        'Complete Bachelor\'s in Design/Fine Arts',
        'Build strong portfolio through projects',
        'Gain industry experience through internships',
        'Specialize and establish career in chosen design field'
      ]
    },
    {
      id: 'history',
      title: 'History & Archaeology',
      category: 'Humanities & Archaeology',
      description: 'Uncover the past and preserve cultural heritage',
      image: '/Image/History & Archaeology.avif',
      colleges: [
        {
          name: 'Jawaharlal Nehru University',
          location: 'New Delhi',
          avgPackage: '₹3-12 LPA',
          duration: '3 Years',
          specialization: ['Ancient History', 'Medieval History', 'Modern History', 'Art History']
        },
        {
          name: 'Banaras Hindu University',
          location: 'Varanasi',
          avgPackage: '₹3-10 LPA',
          duration: '3 Years',
          specialization: ['Indian History', 'Archaeology', 'Museology', 'Epigraphy']
        },
        {
          name: 'University of Calcutta',
          location: 'Kolkata',
          avgPackage: '₹3-9 LPA',
          duration: '3 Years',
          specialization: ['World History', 'Cultural History', 'Historical Research']
        },
        {
          name: 'Deccan College',
          location: 'Pune',
          avgPackage: '₹3-11 LPA',
          duration: '3 Years',
          specialization: ['Archaeology', 'Anthropology', 'Linguistics', 'Prehistoric Studies']
        }
      ],
      roadmap: [
        'Complete 12th with Arts/Humanities',
        'Pursue Bachelor\'s in History',
        'Develop research and analytical skills',
        'Complete Master\'s in specialized historical period',
        'Consider PhD for academic/research career',
        'Explore careers in museums, archaeology, or teaching'
      ]
    }
  ],
  Commerce: [
    {
      id: 'chartered-accountancy',
      title: 'Chartered Accountancy (CA)',
      category: 'Finance & Accounting',
      description: 'Master financial management and become a trusted business advisor',
      image: '/Image/CA.jpg',
      colleges: [
        {
          name: 'Institute of Chartered Accountants of India',
          location: 'Multiple Centers',
          avgPackage: '₹8-40 LPA',
          duration: '4-5 Years',
          specialization: ['Audit & Assurance', 'Taxation', 'Financial Management', 'Corporate Law']
        },
        {
          name: 'Shri Ram College of Commerce',
          location: 'New Delhi',
          avgPackage: '₹6-25 LPA',
          duration: '3 Years + CA',
          specialization: ['Financial Accounting', 'Cost Accounting', 'Management Accounting']
        },
        {
          name: 'H.R. College of Commerce',
          location: 'Mumbai',
          avgPackage: '₹5-22 LPA',
          duration: '3 Years + CA',
          specialization: ['Banking & Finance', 'International Finance', 'Investment Analysis']
        },
        {
          name: 'Christ University',
          location: 'Bangalore',
          avgPackage: '₹5-20 LPA',
          duration: '3 Years + CA',
          specialization: ['Corporate Finance', 'Financial Planning', 'Risk Management']
        }
      ],
      roadmap: [
        'Complete 12th with Commerce (Accounts preferred)',
        'Register for CA Foundation course',
        'Clear CA Foundation exam',
        'Complete CA Intermediate and articleship',
        'Clear CA Final exam',
        'Start practice or join corporate sector'
      ]
    },
    {
      id: 'company-secretary',
      title: 'Company Secretary (CS)',
      category: 'Legal & Corporate',
      description: 'Ensure corporate compliance and governance',
      image: '/Image/cs.webp',
      colleges: [
        {
          name: 'Institute of Company Secretaries of India',
          location: 'Multiple Centers',
          avgPackage: '₹6-30 LPA',
          duration: '3-4 Years',
          specialization: ['Corporate Law', 'Securities Law', 'Labour Law', 'FEMA']
        },
        {
          name: 'Narsee Monjee College of Commerce',
          location: 'Mumbai',
          avgPackage: '₹5-18 LPA',
          duration: '3 Years + CS',
          specialization: ['Corporate Governance', 'Compliance Management', 'Legal Affairs']
        },
        {
          name: 'Loyola College',
          location: 'Chennai',
          avgPackage: '₹4-16 LPA',
          duration: '3 Years + CS',
          specialization: ['Company Law', 'Capital Markets', 'Corporate Restructuring']
        },
        {
          name: 'St. Xavier\'s College',
          location: 'Kolkata',
          avgPackage: '₹4-15 LPA',
          duration: '3 Years + CS',
          specialization: ['Corporate Secretarial Practice', 'Mergers & Acquisitions']
        }
      ],
      roadmap: [
        'Complete 12th with any stream',
        'Register for CS Foundation course',
        'Clear CS Foundation exam',
        'Complete CS Executive and training',
        'Clear CS Professional exam',
        'Start practice or join corporate legal departments'
      ]
    },
    {
      id: 'cost-accountancy',
      title: 'Cost & Management Accountancy (CMA)',
      category: 'Finance & Accounting',
      description: 'Specialize in cost management and financial strategy',
      image: '/Image/cma.jpg',
      colleges: [
        {
          name: 'Institute of Cost Accountants of India',
          location: 'Multiple Centers',
          avgPackage: '₹6-25 LPA',
          duration: '3-4 Years',
          specialization: ['Cost Accounting', 'Management Accounting', 'Financial Management']
        },
        {
          name: 'Sydenham College of Commerce',
          location: 'Mumbai',
          avgPackage: '₹5-18 LPA',
          duration: '3 Years + CMA',
          specialization: ['Cost Control', 'Budget Planning', 'Performance Management']
        },
        {
          name: 'Madras Christian College',
          location: 'Chennai',
          avgPackage: '₹4-16 LPA',
          duration: '3 Years + CMA',
          specialization: ['Strategic Cost Management', 'Operations Research']
        },
        {
          name: 'Ferguson College',
          location: 'Pune',
          avgPackage: '₹4-15 LPA',
          duration: '3 Years + CMA',
          specialization: ['Industrial Accounting', 'Project Management', 'Financial Analysis']
        }
      ],
      roadmap: [
        'Complete 12th with Commerce',
        'Register for CMA Foundation course',
        'Clear CMA Foundation exam',
        'Complete CMA Intermediate and training',
        'Clear CMA Final exam',
        'Join manufacturing or service industries'
      ]
    },
    {
      id: 'banking-finance',
      title: 'Banking & Finance',
      category: 'Finance & Banking',
      description: 'Excel in financial services and banking operations',
      image: '/Image/banking.jpg',
      colleges: [
        {
          name: 'Narsee Monjee Institute of Management Studies',
          location: 'Mumbai',
          avgPackage: '₹8-30 LPA',
          duration: '3 Years',
          specialization: ['Investment Banking', 'Corporate Finance', 'Risk Management']
        },
        {
          name: 'Shaheed Sukhdev College of Business Studies',
          location: 'New Delhi',
          avgPackage: '₹6-25 LPA',
          duration: '3 Years',
          specialization: ['Banking Operations', 'Financial Markets', 'Insurance']
        },
        {
          name: 'Jai Hind College',
          location: 'Mumbai',
          avgPackage: '₹5-20 LPA',
          duration: '3 Years',
          specialization: ['Retail Banking', 'Credit Analysis', 'Wealth Management']
        },
        {
          name: 'Mount Carmel College',
          location: 'Bangalore',
          avgPackage: '₹5-18 LPA',
          duration: '3 Years',
          specialization: ['International Banking', 'Financial Planning', 'Digital Banking']
        }
      ],
      roadmap: [
        'Complete 12th with Commerce/Any stream',
        'Pursue Bachelor\'s in Commerce/Economics/Finance',
        'Prepare for banking entrance exams',
        'Gain certifications in banking and finance',
        'Start career in banks or financial institutions',
        'Pursue MBA in Finance for senior roles'
      ]
    },
    {
      id: 'business-administration',
      title: 'Business Administration (BBA)',
      category: 'Business & Management',
      description: 'Develop comprehensive business and management skills',
      image: '/Image/BBA.jpg',
      colleges: [
        {
          name: 'Shaheed Sukhdev College of Business Studies',
          location: 'New Delhi',
          avgPackage: '₹6-22 LPA',
          duration: '3 Years',
          specialization: ['Marketing', 'Finance', 'Human Resources', 'Operations']
        },
        {
          name: 'Christ University',
          location: 'Bangalore',
          avgPackage: '₹5-20 LPA',
          duration: '3 Years',
          specialization: ['International Business', 'Entrepreneurship', 'Digital Marketing']
        },
        {
          name: 'Symbiosis Centre for Management Studies',
          location: 'Pune',
          avgPackage: '₹5-18 LPA',
          duration: '3 Years',
          specialization: ['Business Analytics', 'Supply Chain Management', 'Retail Management']
        },
        {
          name: 'NMIMS School of Business Management',
          location: 'Mumbai',
          avgPackage: '₹6-25 LPA',
          duration: '3 Years',
          specialization: ['Financial Markets', 'Brand Management', 'Business Strategy']
        }
      ],
      roadmap: [
        'Complete 12th with any stream (Commerce preferred)',
        'Prepare for BBA entrance exams',
        'Complete BBA degree with specialization',
        'Gain practical experience through internships',
        'Pursue MBA for advanced management roles',
        'Start career in corporate sector or entrepreneurship'
      ]
    },
    {
      id: 'economics',
      title: 'Economics',
      category: 'Social Sciences',
      description: 'Analyze economic trends and policy implications',
      image: '/Image/economics.jpg',
      colleges: [
        {
          name: 'Delhi School of Economics',
          location: 'New Delhi',
          avgPackage: '₹8-30 LPA',
          duration: '3 Years',
          specialization: ['Macroeconomics', 'Microeconomics', 'Econometrics', 'Development Economics']
        },
        {
          name: 'Presidency University',
          location: 'Kolkata',
          avgPackage: '₹6-25 LPA',
          duration: '3 Years',
          specialization: ['Mathematical Economics', 'International Economics', 'Public Economics']
        },
        {
          name: 'Madras School of Economics',
          location: 'Chennai',
          avgPackage: '₹5-20 LPA',
          duration: '3 Years',
          specialization: ['Agricultural Economics', 'Environmental Economics', 'Financial Economics']
        },
        {
          name: 'Gokhale Institute of Politics and Economics',
          location: 'Pune',
          avgPackage: '₹5-18 LPA',
          duration: '3 Years',
          specialization: ['Applied Economics', 'Economic Policy', 'Statistical Economics']
        }
      ],
      roadmap: [
        'Complete 12th with any stream (Maths helpful)',
        'Pursue Bachelor\'s in Economics',
        'Develop strong analytical and statistical skills',
        'Complete Master\'s in Economics',
        'Consider PhD for research or policy roles',
        'Join government, research institutions, or private sector'
      ]
    }
  ]
};

export default streamData;

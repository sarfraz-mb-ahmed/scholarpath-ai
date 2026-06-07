const scholarships = [
  {
    id: "chevening",
    name: "Chevening Scholarships",
    country: "United Kingdom",
    level: ["Masters"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "November 5, 2026",
    duration: "1 year",
    benefits: [
      "Full tuition fees",
      "Monthly living allowance",
      "Return economy flights to the UK",
      "Visa application fee reimbursement",
      "Travel grant for Chevening events"
    ],
    eligibility: [
      "Pakistani national with a valid Pakistani passport",
      "Minimum 2 years of work experience",
      "Bachelor's degree equivalent to a UK 2:1 (upper second class)",
      "IELTS 6.5 or equivalent (no band below 5.5)",
      "Commitment to return to Pakistan for at least 2 years after the award"
    ],
    description: "Chevening is the UK government's international awards programme, funded by the Foreign, Commonwealth and Development Office. It offers fully funded Master's degrees at any UK university to outstanding emerging leaders from around the world, including Pakistan.",
    link: "https://www.chevening.org/apply/",
    gpaRequired: 3.0,
    ieltsRequired: 6.5,
    featured: true
  },
  {
    id: "fulbright",
    name: "Fulbright Scholarship Program",
    country: "United States",
    level: ["Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "October 15, 2026",
    duration: "1–2 years",
    benefits: [
      "Full tuition and university fees",
      "Monthly stipend for living expenses",
      "Round-trip international airfare",
      "Health insurance coverage",
      "J-1 visa sponsorship"
    ],
    eligibility: [
      "Pakistani citizen residing in Pakistan",
      "Bachelor's degree with strong academic record",
      "Minimum CGPA of 3.0 / 4.0",
      "GRE score (for most programs)",
      "TOEFL 80+ or IELTS 6.5+",
      "No US citizenship or permanent residency"
    ],
    description: "Administered by the United States Educational Foundation in Pakistan (USEFP), the Fulbright Program provides Pakistani students with the opportunity to pursue Master's or PhD degrees at top US universities across all disciplines.",
    link: "https://www.usefpakistan.org/fulbright-scholarships/",
    gpaRequired: 3.0,
    ieltsRequired: 6.5,
    featured: true
  },
  {
    id: "daad",
    name: "DAAD Scholarships (Germany)",
    country: "Germany",
    level: ["Masters", "PhD"],
    fields: ["Engineering", "Natural Sciences", "Social Sciences", "Arts", "Humanities"],
    fundingType: "Fully Funded",
    deadline: "October 31, 2026",
    duration: "1–3 years",
    benefits: [
      "Monthly stipend of EUR 934 (Masters) / EUR 1,200 (PhD)",
      "Health, accident and personal liability insurance",
      "Travel subsidy",
      "Study and research allowance",
      "Rent subsidy where applicable"
    ],
    eligibility: [
      "Pakistani national",
      "Bachelor's degree with above-average results",
      "Relevant academic or professional background",
      "German or English language proficiency (B2 minimum)",
      "Typically not older than 32 years"
    ],
    description: "The German Academic Exchange Service (DAAD) offers a wide range of scholarship programs for international students including Pakistanis. Programs span Masters and PhD levels across German universities, many taught entirely in English.",
    link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    gpaRequired: 3.2,
    ieltsRequired: 6.0,
    featured: false
  },
  {
    id: "australia-awards",
    name: "Australia Awards Scholarships",
    country: "Australia",
    level: ["Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "April 30, 2027",
    duration: "2–4 years",
    benefits: [
      "Full tuition fees",
      "Return economy airfare",
      "Establishment allowance",
      "Monthly living allowance",
      "Overseas Student Health Cover (OSHC)",
      "Academic support programs"
    ],
    eligibility: [
      "Pakistani citizen and resident in Pakistan at time of application",
      "Minimum age of 18 years",
      "Bachelor's degree or equivalent",
      "IELTS 6.5 overall (no band below 6.0)",
      "Not currently studying or living outside Pakistan"
    ],
    description: "Australia Awards are prestigious international scholarships funded by the Australian Government, offering opportunities for Pakistani professionals and emerging leaders to undertake full-time undergraduate or postgraduate study at Australian institutions.",
    link: "https://www.australiaawardspakistan.org/",
    gpaRequired: 3.0,
    ieltsRequired: 6.5,
    featured: true
  },
  {
    id: "turkiye-burslari",
    name: "Turkiye Burslari (Turkish Government Scholarship)",
    country: "Turkey",
    level: ["Bachelors", "Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "February 20, 2027",
    duration: "1 year Turkish language + degree duration",
    benefits: [
      "Monthly stipend (TRY 800–1,400 depending on level)",
      "Free university tuition",
      "Free accommodation in state dormitories",
      "Free Turkish language course",
      "One-time flight ticket",
      "Health insurance"
    ],
    eligibility: [
      "Not a Turkish citizen",
      "For Bachelors: maximum 21 years old, secondary school diploma",
      "For Masters: maximum 30 years old, Bachelor's degree",
      "For PhD: maximum 35 years old, Masters degree",
      "Academic success: minimum 70% score for Bachelors, 75% for Masters/PhD"
    ],
    description: "Administered by the Turkish government, Türkiye Burslari is one of the most comprehensive scholarship programs in the world. It covers all levels of study at top Turkish universities, with a preliminary Turkish language course included for all awardees.",
    link: "https://www.turkiyeburslari.gov.tr/",
    gpaRequired: 2.8,
    ieltsRequired: null,
    featured: true
  },
  {
    id: "csc-china",
    name: "Chinese Government Scholarship (CSC)",
    country: "China",
    level: ["Bachelors", "Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "March 15, 2027",
    duration: "2–6 years depending on level",
    benefits: [
      "Full tuition waiver",
      "Free university dormitory accommodation",
      "Monthly stipend (CNY 2,500–3,500)",
      "Comprehensive medical insurance",
      "One-time relocation allowance"
    ],
    eligibility: [
      "Non-Chinese citizen",
      "Healthy physical condition",
      "Bachelors: under 25, high school graduate",
      "Masters: under 35, Bachelor's degree holder",
      "PhD: under 40, Masters degree (or Bachelor's for exceptional cases)"
    ],
    description: "Sponsored by the Chinese Ministry of Education, the CSC scholarship provides full funding for international students to pursue degrees at top Chinese universities. Thousands of Pakistani students have successfully used this pathway.",
    link: "https://www.campuschina.org/",
    gpaRequired: 2.8,
    ieltsRequired: null,
    featured: false
  },
  {
    id: "mext-japan",
    name: "MEXT Japanese Government Scholarship",
    country: "Japan",
    level: ["Bachelors", "Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "May 30, 2027",
    duration: "1.5–5 years",
    benefits: [
      "Monthly stipend (JPY 117,000–145,000)",
      "Round-trip economy airfare",
      "Full tuition fees covered by MEXT",
      "Japanese language training program",
      "Accommodation support"
    ],
    eligibility: [
      "Pakistani national under 35 years (for research students)",
      "Bachelor's degree or equivalent",
      "Strong academic record",
      "Interest in studying Japanese language and culture"
    ],
    description: "The Japanese Ministry of Education, Culture, Sports, Science and Technology (MEXT) offers fully funded scholarships for international students to study at Japanese universities. Programs span undergraduate to doctoral levels across all fields.",
    link: "https://www.studyinjapan.go.jp/en/planning/scholarship/",
    gpaRequired: 3.0,
    ieltsRequired: null,
    featured: false
  },
  {
    id: "erasmus-mundus",
    name: "Erasmus Mundus Joint Master's",
    country: "Europe (Multiple Countries)",
    level: ["Masters"],
    fields: ["Engineering", "Social Sciences", "Natural Sciences", "Arts", "Business", "Technology"],
    fundingType: "Fully Funded",
    deadline: "January 15, 2027",
    duration: "1–2 years",
    benefits: [
      "EUR 1,000/month living allowance",
      "Full tuition fees at all partner universities",
      "Travel and installation costs",
      "Study in 2–3 European countries",
      "Access to EU academic networks"
    ],
    eligibility: [
      "Non-EU citizen in most programs (Pakistani students eligible)",
      "Bachelor's degree in a relevant field",
      "Strong English proficiency (IELTS 6.5+ typical)",
      "Application requirements vary by program consortium"
    ],
    description: "Erasmus Mundus Joint Master's Degrees are prestigious programs delivered by international consortia of higher education institutions, offering students the unique experience of studying in multiple European countries within one integrated programme.",
    link: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",
    gpaRequired: 3.2,
    ieltsRequired: 6.5,
    featured: true
  },
  {
    id: "commonwealth",
    name: "Commonwealth Scholarship",
    country: "United Kingdom",
    level: ["Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "December 17, 2026",
    duration: "1–3 years",
    benefits: [
      "Full tuition fees",
      "Monthly living allowance",
      "Return economy airfare",
      "Thesis grant (PhD students)",
      "Study travel grant"
    ],
    eligibility: [
      "Citizen of a Commonwealth country (Pakistan qualifies)",
      "Permanent resident in Pakistan",
      "Masters: bachelor's degree 2:1 equivalent or higher",
      "PhD: Master's degree or equivalent",
      "Cannot hold or be studying for a PhD already (for Masters)"
    ],
    description: "Commonwealth Scholarships enable talented and motivated individuals from Commonwealth countries to gain the knowledge and skills required for sustainable development. These are offered for Master's and PhD study at UK universities.",
    link: "https://cscuk.fcdo.gov.uk/apply/",
    gpaRequired: 3.2,
    ieltsRequired: 6.5,
    featured: false
  },
  {
    id: "kaist",
    name: "KAIST International Scholarship",
    country: "South Korea",
    level: ["Masters", "PhD"],
    fields: ["Engineering", "Science", "Technology", "Business", "Computing"],
    fundingType: "Fully Funded",
    deadline: "September 30, 2026",
    duration: "2 years (Masters) / 3–4 years (PhD)",
    benefits: [
      "Full tuition waiver",
      "Monthly stipend KRW 350,000–500,000",
      "Research funding support",
      "On-campus accommodation option",
      "National health insurance support"
    ],
    eligibility: [
      "Non-Korean citizen",
      "Bachelor's degree (Masters applicants) or Master's degree (PhD applicants)",
      "Recommended by KAIST professor (most programs)",
      "English proficiency: TOEFL 83+ or IELTS 6.5+"
    ],
    description: "Korea Advanced Institute of Science and Technology (KAIST) is ranked among Asia's top universities. KAIST offers comprehensive international scholarships for graduate-level study in science, technology, engineering, and business.",
    link: "https://admission.kaist.ac.kr/intl-graduate/",
    gpaRequired: 3.3,
    ieltsRequired: 6.5,
    featured: false
  },
  {
    id: "stipendium-hungaricum",
    name: "Stipendium Hungaricum Scholarship",
    country: "Hungary",
    level: ["Bachelors", "Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "January 15, 2027",
    duration: "3–4 years (Bachelors) / 1–2 years (Masters) / 3–4 years (PhD)",
    benefits: [
      "Full tuition fee waiver",
      "Monthly stipend HUF 43,700–140,000",
      "Free or subsidised accommodation",
      "Medical insurance coverage",
      "One-time relocation support"
    ],
    eligibility: [
      "Pakistani citizen (Pakistan has bilateral agreement with Hungary)",
      "Valid secondary school diploma or Bachelor's degree",
      "Age under 45 for most programs",
      "English or Hungarian language proficiency"
    ],
    description: "Under the bilateral agreement between Pakistan and Hungary, Pakistani students can apply for the Stipendium Hungaricum scholarship to study at any Hungarian higher education institution across all degree levels and disciplines.",
    link: "https://stipendiumhungaricum.hu/apply/",
    gpaRequired: 2.8,
    ieltsRequired: 5.5,
    featured: false
  },
  {
    id: "hec-overseas",
    name: "HEC Overseas Scholarship for PhD",
    country: "Pakistan (Overseas Study)",
    level: ["PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "June 30, 2026",
    duration: "3–4 years",
    benefits: [
      "Tuition fee up to USD 35,000 per year",
      "Monthly stipend (country-dependent)",
      "Return air ticket",
      "Health insurance",
      "Book allowance"
    ],
    eligibility: [
      "Pakistani national",
      "Employment at a Pakistani university or public sector organisation",
      "Master's degree in relevant field",
      "Age limit: 35 years for general applicants",
      "No active scholarship from another source"
    ],
    description: "The Higher Education Commission of Pakistan (HEC) provides fully funded overseas PhD scholarships for Pakistani faculty members and researchers to pursue doctoral studies at top universities abroad, with priority given to fields critical to Pakistan's development.",
    link: "https://www.hec.gov.pk/english/scholarshipsgrants/OS/Pages/Phase-VI.aspx",
    gpaRequired: 3.0,
    ieltsRequired: 6.5,
    featured: false
  },
  {
    id: "swedish-institute",
    name: "Swedish Institute Scholarship for Global Professionals",
    country: "Sweden",
    level: ["Masters"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "February 10, 2027",
    duration: "1–2 years",
    benefits: [
      "SEK 11,000/month living allowance",
      "Full tuition fees paid directly to the university",
      "Travel grant",
      "SI Academy- a leadership development program",
      "Networking opportunities across Sweden"
    ],
    eligibility: [
      "Citizen and resident of an eligible country (Pakistan is eligible)",
      "Minimum 3,000 hours of work experience (approx. 2 years full-time)",
      "Applied to a Master's programme at a Swedish university",
      "Demonstrated leadership potential"
    ],
    description: "The Swedish Institute Scholarship for Global Professionals (SISGP) targets future leaders with work experience from developing countries, including Pakistan. It supports full Master's study in Sweden plus a structured leadership program.",
    link: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
    gpaRequired: 3.0,
    ieltsRequired: 6.5,
    featured: false
  },
  {
    id: "new-zealand-aid",
    name: "New Zealand Aid Programme Scholarship",
    country: "New Zealand",
    level: ["Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "March 31, 2027",
    duration: "1–4 years",
    benefits: [
      "Full tuition fees",
      "Return international airfare",
      "Establishment allowance",
      "Living allowance",
      "Health and travel insurance"
    ],
    eligibility: [
      "Pakistani national",
      "Minimum 2 years of relevant work experience",
      "Demonstrated commitment to contributing to Pakistan's development",
      "IELTS 6.5+ or equivalent",
      "Bachelor's degree or higher"
    ],
    description: "New Zealand offers fully funded scholarships to Pakistani students through its government aid programme, prioritising those who can demonstrate how their study will contribute to Pakistan's development challenges across any field.",
    link: "https://www.mfat.govt.nz/en/aid-and-development/new-zealand-aid-programme/scholarships/",
    gpaRequired: 3.0,
    ieltsRequired: 6.5,
    featured: false
  },
  {
    id: "eiffel-excellence",
    name: "Eiffel Excellence Scholarship Programme",
    country: "France",
    level: ["Masters", "PhD"],
    fields: ["Engineering", "Economics", "Law", "Political Science", "Natural Sciences"],
    fundingType: "Fully Funded",
    deadline: "January 8, 2027",
    duration: "1–3 years",
    benefits: [
      "EUR 1,181/month (Masters) / EUR 1,400/month (PhD)",
      "International travel allowance",
      "Cultural activities coverage",
      "Health insurance",
      "No tuition fees at public French universities"
    ],
    eligibility: [
      "Non-French citizen",
      "Under 30 for Masters, under 35 for PhD",
      "Nominated by a French higher education institution",
      "Strong academic track record"
    ],
    description: "The Eiffel Excellence Scholarship is awarded by Campus France on behalf of the French Ministry of Europe and Foreign Affairs. It aims to attract top foreign students to French Master's and PhD programs, particularly in engineering, economics, law, and political sciences.",
    link: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence",
    gpaRequired: 3.3,
    ieltsRequired: 6.0,
    featured: false
  },
  {
    id: "kfupm",
    name: "KFUPM Graduate Scholarship",
    country: "Saudi Arabia",
    level: ["Masters", "PhD"],
    fields: ["Engineering", "Science", "Computing", "Business", "Environmental Science"],
    fundingType: "Fully Funded",
    deadline: "Rolling Admissions",
    duration: "2 years (Masters) / 3–4 years (PhD)",
    benefits: [
      "Full tuition waiver",
      "Monthly stipend SAR 1,600 (Masters) / SAR 2,000 (PhD)",
      "Free on-campus accommodation",
      "Annual return air ticket",
      "Medical care on campus"
    ],
    eligibility: [
      "Bachelor's degree with strong CGPA (3.0+ preferred)",
      "English proficiency: TOEFL 68+ or IELTS 6.0+",
      "Relevant undergraduate background",
      "GRE may be required for some programs"
    ],
    description: "King Fahd University of Petroleum and Minerals (KFUPM) offers competitive graduate scholarships to international students including Pakistanis, with focus areas in engineering, science, and technology. The campus is Arabic-speaking but programs are in English.",
    link: "https://www.kfupm.edu.sa/dgs/scholarships/",
    gpaRequired: 3.0,
    ieltsRequired: 6.0,
    featured: false
  },
  {
    id: "postech",
    name: "POSTECH International Graduate Scholarship",
    country: "South Korea",
    level: ["Masters", "PhD"],
    fields: ["Engineering", "Science", "Computing", "Materials Science", "AI"],
    fundingType: "Fully Funded",
    deadline: "October 15, 2026",
    duration: "2 years (Masters) / 4 years (PhD)",
    benefits: [
      "Full tuition waiver",
      "Monthly stipend KRW 300,000–500,000",
      "Research assistant salary from supervisor",
      "Campus housing support",
      "National health insurance"
    ],
    eligibility: [
      "Non-Korean citizen",
      "Bachelor's (Masters applicants) or Master's degree (PhD)",
      "Strong background in STEM field",
      "English: TOEFL 80+ or IELTS 6.5+",
      "Professor's acceptance recommended"
    ],
    description: "Pohang University of Science and Technology (POSTECH) is consistently ranked among Asia's top STEM universities. It offers international graduate scholarships with research-focused programs in engineering, science, and technology.",
    link: "https://international.postech.ac.kr/admission/",
    gpaRequired: 3.2,
    ieltsRequired: 6.5,
    featured: false
  },
  {
    id: "hec-need-based",
    name: "HEC Need Based Scholarship",
    country: "Pakistan",
    level: ["Bachelors"],
    fields: ["All Fields"],
    fundingType: "Partially Funded",
    deadline: "August 31, 2026",
    duration: "4 years",
    benefits: [
      "Tuition fee support (partial or full)",
      "Monthly stipend for living costs",
      "Laptop facility in some universities",
      "Academic counseling services"
    ],
    eligibility: [
      "Pakistani national enrolled at an HEC-recognised university",
      "Family income below PKR 45,000/month",
      "Minimum 60% marks in last qualifying examination",
      "Not receiving any other scholarship or financial aid"
    ],
    description: "The HEC Need Based Scholarship program provides financial assistance to talented but economically disadvantaged students enrolled in Pakistani universities, enabling them to complete their undergraduate education without financial burden.",
    link: "https://www.hec.gov.pk/english/scholarshipsgrants/NBS/Pages/About.aspx",
    gpaRequired: 2.4,
    ieltsRequired: null,
    featured: false
  },
  {
    id: "brunei-government",
    name: "Brunei Darussalam Government Scholarship",
    country: "Brunei",
    level: ["Bachelors", "Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "March 31, 2027",
    duration: "3–5 years",
    benefits: [
      "Full tuition fees",
      "Monthly living allowance",
      "Accommodation in university hostel",
      "Return economy airfare",
      "Medical benefits"
    ],
    eligibility: [
      "Citizen of a country with bilateral relations with Brunei (Pakistan qualifies)",
      "Age 17–25 (Bachelors), up to 40 (postgraduate)",
      "Strong secondary school results (Bachelors) or degree (postgraduate)",
      "English proficiency"
    ],
    description: "The Brunei Darussalam Government Scholarship is offered to international students from friendly countries including Pakistan to study at University Brunei Darussalam (UBD) or other Bruneian universities across all levels and disciplines.",
    link: "https://www.mfa.gov.bn/Pages/Scholarship.aspx",
    gpaRequired: 2.8,
    ieltsRequired: 5.5,
    featured: false
  },
  {
    id: "italian-government",
    name: "Italian Government Scholarship (MAECI)",
    country: "Italy",
    level: ["Bachelors", "Masters", "PhD"],
    fields: ["All Fields"],
    fundingType: "Fully Funded",
    deadline: "April 30, 2027",
    duration: "9 months – 3 years",
    benefits: [
      "EUR 900/month living allowance",
      "Exemption from tuition fees at state universities",
      "Free Italian language course upon arrival",
      "Accommodation assistance",
      "Health insurance"
    ],
    eligibility: [
      "Non-Italian citizen (Pakistani nationals eligible)",
      "Under 28 (Bachelors), under 30 (Masters), under 35 (PhD)",
      "Degree or academic qualification in relevant field",
      "English or Italian language proficiency"
    ],
    description: "The Italian Ministry of Foreign Affairs and International Cooperation (MAECI) offers scholarships to international students including Pakistanis for study at Italian state universities and academies across all disciplines, with a free language course included.",
    link: "https://www.esteri.it/en/opportunities-and-resources/scholarships-for-foreigners/",
    gpaRequired: 2.8,
    ieltsRequired: 5.5,
    featured: false
  }
];

module.exports = scholarships;

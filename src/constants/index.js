import { lgm, tsf, ace, csulb, ijhs, fts, csk } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    sql,
    rlogo,
    cplus,
    jupyter,
    powerbi,
    excel,
    tableau
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "python",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "sql",
        type: "Backend",
    },
    {
        imageUrl: rlogo,
        name: "python",
        type: "Frontend",
    },
    {
        imageUrl: jupyter,
        name: "jupyter",
        type: "Frontend",
    },
    {
        imageUrl: powerbi,
        name: "powerbi",
        type: "Visualization Tool",
    },
    {
        imageUrl: excel,
        name: "excel",
        type: "Visualization Tool",
        
    },
    {
        imageUrl: tableau,
        name: "tableau",
        type: "Visualization Tool",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: cplus,
        name: "cplus",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Data Engineer",
        company_name: "Fitskol",
        icon: fts,
        iconBg: "#accbe1",
        date: "January 2022 - July 2023",
        points: [
            "Analysed batch-size NoSQL data for 5 large-scale sporting events (5,000+ participants each), generating insights that improved event logistics by 20% under Agile workflow. Conducted t-tests to compare participant performance across various event conditions",
            "Built ETL pipelines using AWS Glue, processing 100GB+ event data, storing it in S3, and querying via Athena, reducing data processing time by 30% while ensuring GDPR & SOC 2 compliance.",
            "Designed interactive Tableau dashboards for 10+ sponsors and stakeholders, enhancing visibility into attendance trends, performance metrics, and marketing ROI, boosting sponsorship engagement by 25%.",
            "Automated Excel and Advanced Excel (Power Query, VBA) reports, reducing manual reporting time by 25%.",
            "Integrated real-time data streaming services, enabling instant monitoring of participant registrations, race timings, and feedback, improving operational efficiency by 15%."
        ],
    },
    {
        title: "Business Intelligence Analyst",
        company_name: "CaseKaro",
        icon: csk,
        iconBg: "#accbe1",
        date: "August 2020 - January 2022",
        points: [
            "Managed real-time sales and customer data across 1M+ transactions, leveraging SQL (MySQL, PostgreSQL) and BigQuery, improving data retrieval speed by 40% while maintaining PCI-DSS compliance.",
            "Developed ETL pipelines using AWS Glue and Airflow, optimizing inventory management, reducing stock shortages by 20%, andensuring data governance compliance. Applied ANOVA to compare sales performance across different promotional campaigns.",
            "Engineered a product recommendation system using Apriori (Association Rule Mining), increasing repeat purchases by 15% and boosting sales by 12%, supporting Agile experimentation in marketing strategies.",
            "Created 15+ Power BI and AWS QuickSight dashboards, providing real-time insights that accelerated Agile decision-making.",
            "Created financial reports using Excel and Advanced Excel, cutting manual effort by 30% while ensuring SOX compliance."
        ],
    },

    {
        title: "Web Development Intern",
        company_name: "The Sparks Foundation",
        icon: tsf,
        iconBg: "#fbc3bc",
        date: "July 2022 - August 2022",
        points: [
            "Spearheaded the creation of an interactive personal website with innovative HTML, CSS, and JavaScript, boosting user engagement by 25%.",
            "Optimized the user experience by focusing on intuitive design and seamless functionality, setting a standard for enjoyable online interactions.",
            "Implemented CRUD functionalities seamlessly, enhancing the interactive to-do list app's effectiveness and providing users with a fluid experience in managing their tasks.",
            "Highlighted adept problem-solving skills in the to-do list app development, showcasing prowess in addressing complex challenges for practical solutions.",
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "LetsGrowMore",
        icon: lgm,
        iconBg: "#accbe1",
        date: "June 2022 - July 2022",
        points: [
            "Enhanced a banking system using HTML, CSS, and JavaScript for a 20% increase in user engagement and 15% stronger security.",
            "Mastered Git and GitHub, ensuring efficient version control and collaborative teamwork.",
            "Collaborated on cross-functional teams to implement web security best practices, reducing potential threats by 25%.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Garrixxc',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gaurav-salvi-8bab04288',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Financial Fraud Detection',
        description: 'Created a highly efficient Credit Card Fraud Detection System using a random forest model, leveraging Scikit-learn, NumPy, Pandas, Seaborn, and Matplotlib',
        link: 'https://colab.research.google.com/drive/1pdGg4-NX3jS3LyzTM1hr4kvjCHBlT8vI?usp=sharing'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'COVID-19 Data Analysis',
        description: 'Employed Python libraries like Pandas, NumPy, Plotly Express, TensorFlow for data analysis. Conducted comparative analyses across 190 countries to highlight impacts.',
        link: 'https://github.com/Garrixxc/COVID-19_DataAnalysis',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Regression & Simulation',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://1drv.ms/x/s!AnJzCff4s3cEhoQC7ogTHwrWik4JTA?e=XQcWcy',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Tableau',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://public.tableau.com/app/profile/gaurav.rajendra.salvi/vizzes',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Walmart Dashboard (Power BI)',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: '',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Coffee Sales Dashboard (Excel)',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://1drv.ms/x/s!AnJzCff4s3cEgcEq3n3GzWqkqUp_qQ?e=9uPFFT',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Company Website',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://garrixxc.github.io/Company_Website/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Contact Manager',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Garrixxc/Contact_Manager',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'To-Do List',
        description: 'Simple to-do list performing CRUD operations. One of my first projects.',
        link: 'https://garrixxc.github.io/TO-DO-LIST/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Calculator',
        description: 'Simple calculator. One of my first projects.',
        link: 'https://garrixxc.github.io/CALCULATER/',
    }
];
export const naya = [
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Supervised Machine Learning: Regression and Classification',
        description: 'Coursera',
        link: 'https://coursera.org/share/6c0a39a3e35b3fc5607bfb7133fd165b',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Machine Learning A-Z: AI, Python and R',
        description: 'Udemy',
        link: 'https://www.udemy.com/share/101Wci3@EhEWUDPhuSBYdbcpDdf9XDsS2j72TDtjC-CiOvWySMITR-oPHWfY64yhZmrMWq665w==/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'IP Adressing and Subnetting',
        description: 'Udemy',
        link: 'https://www.udemy.com/certificate/UC-ba0d37f4-ec9a-46f8-8f5a-01d18db6cb8b/'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Ethical Hacking Exams',
        description: 'Eduonix',
        link: 'https://certificates-edu.s3.amazonaws.com/czoxMzoiNDQ5NzMzMV8xMjU3NCI7',
    }
    


];

export const education = [
   
    {
        title: "California State University, Long Beach",
        company_name: "CA, United States",
        icon: csulb,
        iconBg: "#F1D20D",
        date: "August 2023 - May 2025",
        points: [
            "I am pursuing my Master's of Science in Information Systems from California State University, Long Beach",
            "I have a current GPA of 3.7/4 which portrays my academic excellence.",
        ],
    },
    {
        title: "Atharva College of Engineering",
        company_name: "Mumbai, India",
        icon: ace,
        iconBg: "#accbe1",
        date: "August 2019 - May 2023",
        points: [
            "Graduated with a Bachelor's in Electronics and Telecommunication from Atharva College with a GPA of 3.7/4",
            "Mastery in STM32, Arduino, Raspberry Pi, Python, and C++ for robust embedded systems.",
            "Recognized as the Best Sportsman for athletic achievements and served as the Publicity Head for College Cultural event, showcasing leadership and organizational skills.",
            "Balanced academic excellence with sportsmanship and event leadership, reflecting a versatile and dynamic skill set poised for a successful career.",
        ],
    },

    {
        title: "Infant Jesus High School",
        company_name: "Mumbai, India",
        icon: ijhs,
        iconBg: "#FDFDFD",
        date: "August 2004- March 2017",
        points: [
            "Achieved a notable 89% in SSC board exams, showcasing strong academic prowess.",
            "Completed kindergarten, primary, and secondary schooling at Infant Jesus High School.",
            "Achieved numerous prizes, showcasing a strong sportsmanship spirit. Won multiple science and social science quizzes and competitions, reflecting academic excellence.",
            "Demonstrated a well-rounded education, excelling both in sports and academics at Infant Jesus High School."
            
        ],
    }, 
];

export const pubs = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Technical Paper',
        description: 'Created a highly efficient Credit Card Fraud Detection System using a random forest model, leveraging Scikit-learn, NumPy, Pandas, Seaborn, and Matplotlib',
        link: ''
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Personal Blog',
        description: 'Employed Python libraries like Pandas, NumPy, Plotly Express, TensorFlow for data analysis. Conducted comparative analyses across 190 countries to highlight impacts.',
        link: 'https://garrixxc.blogspot.com/',
    }
]
import { lgm, tsf, ace, csulb, ijhs, pnc, csk } from "../assets/images";
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
        title: "Data Scientist",
        company_name: "PNC",
        icon: pnc,
        iconBg: "#accbe1",
        date: "January 2025 - Current",
        points: [
            "Developed a churn prediction model using XGBoost on 100k+ healthcare claims achieving 84% accuracy and reducing churn by 20% .Owned Directed end-to-end development of Generative AI solutions (GPT-4, Llama 3, LangChain, Hugging Face) deployed on AWS Bedrock & SageMaker, enabling enterprise-grade RAG pipelines and improving customer support efficiency by 50%.",
            "Built an RNN on 1M+ historical insurance claims to detect fraud (inflated bill, etc) achieving 91% accuracy. Deployed on AWS EC2 instance using Docker and CI/CD with Jenkins and leveraged S3 for claim data storage to enable real-time detection of high-risk claims and reduce false positives by 27%.",
            "Designed a healthcare insurance support chatbot using GPT-4 with a RAG approach over claims and policy documents applying semantic search on a vector database (Pinecone). Reduced average response time by 50% which enhanced customer satisfaction (CSAT) scores.",
            "Defined, measured, and communicated key performance metrics in collaboration with stakeholders to drive business impact and support data-informed decisions across teams.",
            "Worked with structured and unstructured big data (claims, text, PDFs) using Spark and Hive for scalable preprocessing."
        ],
    },
    {
        title: "Data Scientist",
        company_name: "TatvaSoft",
        icon: csk,
        iconBg: "#accbe1",
        date: "December 2020 - June 2023",
        points: [
            "Implemented an NLP-based recommendation system for an e-commerce platform that combined product metadata (category, brand, price) with customer reviews to generate personalized suggestions. This hybrid approach improved click-through rate by 20% and boosted sales by 30%.",
            "Used unsupervised learning techniques such as K-Means clustering on customer purchase and behavioral data to segment users and uncover distinct groups for analysis. Built Tableau dashboards to visualize these segments to help marketing team to monitor trends and make data-driven decisions.",
            "Queried transaction and clickstream data using SQL to analyze conversion drop-offs across product categories. Performed root cause analysis and A/B testing to validate issues such as pricing and checkout funnel design, leading to campaign optimizations that increased conversion rates by 10%.",
            "Engaged with stakeholders to gather requirements for product development and ensure alignment with business objectives while maintaining coding standards, conducting code reviews, managing source control, optimizing build processes, and implementing unit testing strategies.",
            "Applied computer vision and text analytics on e-commerce datasets, leveraging CNNs and NLP for personalization."
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
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'QuantX Playground',
        description: 'Developed Futuristic Math Lab, an interactive Streamlit-based platform that visualizes Stochastic Differential Equations, Algorithms, and Numerical Methods with real-time simulations, CSV exports, and 2D FFT image processing.',
        link: 'https://quantx-playground.streamlit.app/'
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Uber & Lyft Price Prediction',
        description: 'Built a machine learning pipeline to predict Uber and Lyft ride prices using a dataset of 700K rides in Boston, applying models such as Random Forest and Gradient Boosting to achieve >96% accuracy, and performed comparative analysis on how distance, surge pricing, and weather impact dynamic pricing.',
        link: 'https://github.com/Garrixxc/Uber-Lyft-Price-Prediction',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Pet Sound Classification',
        description: 'Developed an audio classification model to distinguish between cat and dog sounds using spectrogram features and deep learning techniques, achieving high accuracy in classifying animal audio data.',
        link: 'https://github.com/Garrixxc/Deep-Learning-for-Pet-Sound-Classification',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Alzheimer’s Disease Detection',
        description: 'Built a CNN model on 85,000+ MRI scans (OASIS dataset) to classify Alzheimer’s severity into four stages (none, very mild, mild, moderate), achieving 95% validation accuracy with strong generalization across classes.',
        link: 'https://github.com/Garrixxc/Alzheimer-Detection-with-Deep-Learning',
    },
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
        name: 'AWS Certified Solutions Architect - Associate',
        description: 'Amazom Web Services',
        link: 'https://www.credly.com/badges/88cf87a5-c201-46d5-867c-13e41934cd34/public_url',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'AWS Certified Cloud Practitioner',
        description: 'Amazom Web Services',
        link: 'https://www.credly.com/badges/fe0fbec4-408c-4543-8e9f-1f9bf54df4d2/public_url',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Machine Learning Specialization - Stanford Online',
        description: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/specialization/TQPXU6PT351V?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n',
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
            "I recently graduated with my Master's of Science in Information Systems from California State University, Long Beach",
            "I have a GPA of 3.7/4 which portrays my academic excellence.",
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
export const myProjects = [
  {
    id: 1,
    title: "Dynamic Difficulty Adaptation in Video Games",
    description:
      <>
        Built a <span className="text-white">dynamic difficulty adaptation system</span> for video games using machine learning to personalize challenge based on player performance.
      </>,
    subDescription: [
        <>
          Generated a synthetic player dataset and performed exploratory data analysis to understand skill distributions and gameplay metrics.
        </>,
        <>
          Implemented <span className="text-white">KMeans clustering</span> for automated matchmaking and <span className="text-white">Random Forest classification</span> to recommend real-time difficulty adjustments.
        </>,
        <>
          Addressed class imbalance with <span className="text-white">SMOTE</span> and validated models using classification metrics and data visualizations.
        </>,
        <>
          Utilized <span className="text-white">Python</span>, <span className="text-white">scikit-learn</span>, <span className="text-white">pandas</span>, and <span className="text-white">matplotlib</span> to develop, analyze, and present the adaptive system.
        </>
    ],
    href: "https://nbviewer.org/github/JavierCables/Dynamic-Difficulty-Adaptation-in-Video-Games/blob/main/Dynamic_Difficulty_Adaptation_in_Videogames.ipynb",
    logo: "",
    image: "assets/projects/Project1.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Jupyter Notebook",
        path: "assets/logos/jupyternotebook.svg",
      },
      {
        id: 3,
        name: "Scikit-Learn",
        path: "assets/logos/scikitlearn.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Movie Review Sentiment Classifier",
    description:
      <>
        Built a <span className="text-white">sentiment classification model</span> using the IMDb dataset with over 50,000 movie reviews.
      </>,
    subDescription: [
        <>
          Applied data preprocessing and exploratory data analysis techniques to understand review distributions and text lengths.
        </>,
        <>
          Fine-tuned <span className="text-white">Transformer-based models</span> to classify reviews as positive or negative, achieving <span className="text-white">95% accuracy</span>.
        </>,
        <>
          Utilized <span className="text-white">Python</span>, Hugging Face's datasets library, and <span className="text-white">scikit-learn</span> to evaluate the model with precision, recall, F1-score, and ROC-AUC.
        </>
    ],
    href: "",
    logo: "",
    image: "assets/projects/Project2.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Jupyter Notebook",
        path: "assets/logos/jupyternotebook.svg",
      },
      {
        id: 3,
        name: "Scikit-Learn",
        path: "assets/logos/scikitlearn.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Airline Passenger Satisfaction Clustering",
    description:
      "Conducted an unsupervised learning project using real-world airline passenger satisfaction data.",
    subDescription: [
      <>
        Executed a complete <span className="text-white">Exploratory Data Analysis (EDA)</span> to identify patterns in customer types, travel classes, and service ratings.
      </>,
      <>
        Applied <span className="text-white">K-Means clustering</span> to group passengers by satisfaction, optimizing cluster count using the elbow method.
      </>,
      <>
        Utilized <span className="text-white">Python</span>, <span className="text-white">pandas</span>, <span className="text-white">scikit-learn</span>, <span className="text-white">matplotlib</span>, and <span className="text-white">seaborn</span> to implement, visualize, and interpret clustering results.
      </>
    ],
    href: "",
    logo: "",
    image: "assets/projects/Project3.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Scikit-Learn",
        path: "assets/logos/scikitlearn.svg",
      },
      {
        id: 3,
        name: "Matplotlib",
        path: "assets/logos/matplotlib.svg",
      },
      {
        id: 4,
        name: "Seaborn",
        path: "assets/logos/seaborn.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Sales Dashboard Analysis",
    description:
      <>
        Developed a Business Intelligence dashboard in <span className="text-white">Power BI</span> using OLAP structure with a fact table and multiple dimension tables.
      </>,
    subDescription: [
      "Created interactive visualizations such as KPIs, line and bar charts, treemaps, and slicers to explore trends in sales volume and units sold.",
    ],
    href: "",
    logo: "",
    image: "assets/projects/Project4.png",
    tags: [
      {
        id: 1,
        name: "Power BI",
        path: "assets/logos/powerbi.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/JavierCables",
    icon: "assets/socials/github.svg",
  },
    {
    name: "Email",
    href: "mailto:javier.cables00@gmail.com",
    icon: "assets/socials/email.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/javiercables/",
    icon: "assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Game Developer",
    job: "Playoffnations",
    date: "Nov 2023 - Dec 2024",
    contents: [
      "Programming leadership of two long development projects for the Telefónica and McDonald's brands in Roblox.",
      "Responsible for the programming of long development project, for the Kellogg's brand in Fortnite.",
      "Responsible for programming and functionality in five internal projects at Roblox, managing all technical development, from databases and game mechanics to artificial intelligence and customization systems, except art and 3D modeling.",
      "Roblox Studio | Lua",
      "Unreal Editor for Fortnite | Verse"
    ],
  },
  {
    title: "Game Programmer",
    job: "Next Level Studio",
    date: "Mar 2022 - May 2023",
    contents: [
      "Integral development of the video game Caminos Legendarios for mobile devices as part of a team of four programmers.",
      "Responsible for software programming and testing prior to final product release.",
      "Active participation in the product presentation together with the development team in Avila.",
      "Creation and development of 3 of the 6 chapters of the videogame.",
      "Unity | C#"
    ],
  },
  {
    title: "Student Internship",
    job: "Electronic Arts",
    date: "Oct 2022 - Feb 2023",
    contents: [
      "Development of a university video game prototype in collaboration with a team of six students.",
      "Coordination and collaboration with five other programmers, ensuring code cohesion and project structure.",
      "Development of artificial intelligence for enemies.",
      "Participation in the development of the multiplayer system.",
      "Unreal Engine 5 | C++"
    ],
  },
];
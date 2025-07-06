export const myProjects = [
  {
    id: 1,
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
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Jupyter Notebook",
        path: "/assets/logos/jupyternotebook.svg",
      },
      {
        id: 3,
        name: "Scikit-Learn",
        path: "/assets/logos/scikitlearn.svg",
      },
    ],
  },
  {
    id: 2,
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
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Scikit-Learn",
        path: "/assets/logos/scikitlearn.svg",
      },
      {
        id: 3,
        name: "Matplotlib",
        path: "/assets/logos/matplotlib.svg",
      },
      {
        id: 4,
        name: "Seaborn",
        path: "/assets/logos/seaborn.svg",
      },
    ],
  },
  {
    id: 3,
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
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Power BI",
        path: "/assets/logos/powerbi.svg",
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/matplotlib.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/matplotlib.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/matplotlib.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
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
    date: "Oct 2022 – Feb 2023",
    contents: [
      "Development of a university video game prototype in collaboration with a team of six students.",
      "Coordination and collaboration with five other programmers, ensuring code cohesion and project structure.",
      "Development of artificial intelligence for enemies.",
      "Participation in the development of the multiplayer system.",
      "Unreal Engine 5 | C++"
    ],
  },
];
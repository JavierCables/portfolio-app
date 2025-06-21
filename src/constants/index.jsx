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
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
import fikonWebsiteCover from "@/assets/fikon-website-cover.jpg";
import fikonWebsiteMockup from "@/assets/fikon-website-mockup.jpg";
import hufbauWebsiteCover from "@/assets/hufbau-website-cover.jpg";
import hufbauWebsiteMockup from "@/assets/hufbau-website-mockup.jpg";
import ggSzepsegstudioWebsiteCover from "@/assets/gg-szepsegstudio-website-cover.jpg";
import ggSzepsegstudioWebsiteMockup from "@/assets/gg-szepsegstudio-website-mockup.jpg";
import marketingPuzzleLogoCover from "@/assets/marketing-puzzle-logo-cover.jpg";
import marketingPuzzleLogoMockup from "@/assets/marketing-puzzle-logo-mockup.jpg";
import marketingPuzzlePromoVideoCover from "@/assets/marketing-puzzle-promo-video-cover.jpg";
import marketingPuzzlePromoVideoMockup from "@/assets/marketing-puzzle-promo-video-mockup.jpg";
import easvPosterCover from "@/assets/easv-poster-cover.jpg";
import easvPosterMockup from "@/assets/easv-poster-mockup.jpg";
import quizGameCover from "@/assets/quiz-game-cover.jpg";
import quizGameMockup from "@/assets/quiz-game-mockup.jpg";

export const projects = [
  {
    id: "fiatalok-konferenciaja-website",
    title: "Website for Fiatalok Konferenciája",
    scope:
      "A modern, minimalist website for an annual academic conference, built with Tailwind CSS and Vanilla JavaScript on WordPress.",
    descriptions: [
      "The project involved developing a new website along with other digital media products for Fiatalok Konferenciája (FiKon), an annual Hungarian conference organized by university students.",
      "FiKon plays a vital role in fostering academic exchange by providing a platform for Bachelor’s, Master’s, and PhD students specializing in Medieval and Early Modern Literary and Cultural Studies to present their research findings. Although FiKon has been successfully operating for a decade, its online presence lacked the sophistication needed to adequately reflect its mission and attract potential participants.",
      "Addressing the deficiencies in FiKon’s web presence was the goal of the project, achieved by creating a user-friendly and visually appealing website, complemented by a cohesive brand identity through various digital media products.",
      "The development of the website involved a blend of modern web dev technologies and frameworks for a seamless, high-performance experience. While the site is built on the WordPress platform for its content management capabilities, a custom-coded unique theme was developed to meet specific needs. Custom theme development offers several key benefits, including consistency with the brand identity, great flexibility and tailored functionality, as well as better performance with a more efficient, lightweight codebase.",
      "The custom theme was developed using Tailwind CSS for effective and responsive styling, along with Vanilla JavaScript for dynamic interactivity. Tailwind CSS was selected for its utility-first approach to styling, which allows for rapid development and a cohesive design language across the site. Vanilla JavaScript was employed to handle dynamic interactivity for implementing custom functionalities without larger frameworks.",
      "WordPress was chosen primarily for its user-friendly content management system, allowing conference organizers to easily manage the content of the page without requiring technical knowledge. The language of the site is Hungarian, serving its local audience. The content is populated dynamically using PHP and WordPress functions.",
    ],
    images: [fikonWebsiteCover, fikonWebsiteMockup],
    details: {
      Type: "Event Website • Multi-Page Website • Web Development",
      Technologies: "WordPress • PHP • Tailwind CSS • Vanilla JavaScript",
      "Key Features":
        "Custom Theme • Responsive Design • Dynamic Content • Structured Visual Hierarchy • Dynamic Event Schedule in Timeline Format • Customizable Program • Conditional Logic for Adaptive Layouts • Access to Conference Volumes and Speaker Profiles",
      "SEO Strategy":
        "Keyword Research • Title, Meta Description, Alt Text Optimization • SEO-Friendly URL Structure • Semantic HTML • Image Optimization • Caching • Structured Sitemap",
      "Security Measures":
        "HTTPS Encryption • Two-Factor Authentication • Output Escaping",
      Outcome:
        "Strengthened Online Presence • Improved User Experience • Established Brand Identity • Increased Engagement • Seamless Content Management",
      Link: "https://fikon.hu/",
    },
  },
  {
    id: "hufbau-otthonfelujitas-website",
    title: "Website for HUFBAU Piedl",
    scope:
      "A promotional website as part of a marketing campaign for a building materials supplier, built with Vue.js and Tailwind CSS.",
    descriptions: [
      "In 2024, the Hungarian Government announced a Home Renovation Programme aimed at the energy modernization of family houses. This programme generated substantial advertising buzz within the construction material sector and among trading companies.",
      "Marketing Puzzle, the creative marketing agency where I previously undertook my internship, devised a campaign to help HUFBAU Piedl, a leading building materials supplier in Veszprém, stand out in a competitive market. The marketing campaign creatively emphasized thermal insulation, aligning with the Home Renovation Programme and delivering clear, impactful communication.",
      "As part of this extensive campaign, Marketing Puzzle produced various promotional materials, including sliders, banners, B1 and A4 posters, billboards, and social media content. My role was to integrate all the provided information and visuals into a cohesive and engaging promotional website.",
      "The landing page was developed using Vue.js and Tailwind CSS. Vue.js enabled a fast, interactive user experience with its component-based architecture, while Tailwind CSS supported the creation of a responsive and visually appealing layout, enhancing user engagement.",
      "The website, in Hungarian to serve its target group, features strategic elements such as CTA sections, service descriptions, information on how HUFBAU Piedl supports customers through the Home Renovation Programme, and details about the prize draw associated with the campaign.",
      "This comprehensive and strategic approach resulted in a high-impact promotional website that effectively supports HUFBAU Piedl's campaign. The site will remain live only until the marketing campaign concludes.",
    ],
    images: [hufbauWebsiteCover, hufbauWebsiteMockup],
    details: {
      Type: "Promotional Website • Landing Page • Web Development",
      Technologies: "Vue.js • Tailwind CSS • Vite",
      "Key Features":
        "Custom Design • Responsive Layout • CTA Sections • Contact Form • Strategic Marketing Content • Easily Accessible Information • Fast Load Times",
      "SEO Strategy":
        "Title, Meta Description, Alt Text Optimization • SEO-Friendly URL Structure • Semantic HTML • Image Optimization • Performance and Speed Enhancement",
      "Security Measures": "HTTPS Encryption",
      Outcome:
        "Campaign Support • Market Positioning • Increased Engagement • Analytics & Insights • Positive Client Feedback • Enhanced Campaign Effectiveness",
      Link: "https://hufbauotthonfelujitas.hu/",
    },
  },
  {
    id: "gg-szepsegstudio-website",
    title: "Website for GG Szépségstúdió",
    scope:
      "A stylish website for a beauty salon showcasing its services, built with Tailwind CSS and Vanilla JavaScript on WordPress.",
    descriptions: [
      "GG Szépségstúdió, located in Veszprém, Hungary, is a small yet versatile beauty salon offering a range of services, including cosmetics, hairdressing, manicure-pedicure, and nature medicine-based massage therapies.",
      "The primary goal of this project was to establish a strong online presence for the salon by effectively reflecting its mission, vision, and values, along with showcasing its varied services. During the design process, both the brand identity of GG Szépségstúdió and the needs of its target group were carefully considered.",
      "The site features easily accessible service information, responsive design for optimal user experience across all devices, easy-to-use contact options, and dynamic content such as a gallery and blog posts, ensuring seamless browsing experience for visitors.",
      "Additionally, textual and visual content was also developed to highlight the unique values of treatments offered by the salon. The website is optimized for local search to ensure that potential customers in Veszprém easily find and choose the salon.",
      "The site was developed with a custom-coded theme using Tailwind CSS and Vanilla JavaScript. Tailwind CSS was utilized for its streamlined approach and pre-built classes, enabling the creation of a responsive and visually appealing layout. Vanilla JavaScript was employed to maintain a fast and responsive site, further enhancing the experience.",
      "WordPress was chosen as the CMS for its ease of use, allowing the salon to update the site regularly with minimal effort, maintaining its relevance. The website is in Hungarian to serve the local audience. Content is dynamically generated using PHP and WordPress functions.",
    ],
    images: [ggSzepsegstudioWebsiteCover, ggSzepsegstudioWebsiteMockup],
    details: {
      Type: "Business Website • Multi-Page Website • Web Development",
      Technologies: "WordPress • PHP • Tailwind CSS • Vanilla JavaScript",
      "Key Features":
        "Custom Theme • Responsive Design • Dynamic Content • Comprehensive Service Overview with Detailed Subpages • Gallery • Blog • Contact Form",
      "SEO Strategy":
        "Keyword Research • Title, Meta Description, Alt Text Optimization • SEO-Friendly URL Structure • Semantic HTML • Image Optimization • Caching • Structured Sitemap",
      "Security Measures":
        "HTTPS Encryption • Two-Factor Authentication • Output Escaping",
      Outcome:
        "Enhanced Presence and Visibility • Increased Customer Engagement • Improved User Experience • Effective Local Search Optimization • Streamlined Content Management",
      Link: "https://www.ggszepsegstudio.hu/",
    },
  },
  {
    id: "marketing-puzzle-promo-video",
    title: "Promo Video for Marketing Puzzle",
    scope:
      "A dynamic, professional, and impactful promo commercial that highlights Marketing Puzzle’s innovative approach & marketing capabilities.",
    descriptions: [
      "As part of our collaboration with Marketing Puzzle, a Hungarian marketing agency, I was tasked with editing a promo commercial video to showcase the agency's unique approach and effective capabilities. The goal was to present Marketing Puzzle as a forward-thinking and innovative agency that leverages the latest marketing tools and trends to help clients stand out in a competitive marketplace.",
      "The workflow involved using Adobe Premiere Pro to craft a visually compelling and dynamic promo commercial. The fast-paced video serves as an excellent introductory piece or can be utilized in marketing campaigns and promotional materials.",
      "To match the fast-paced nature of the video, I synchronized the edits with a high-energy soundtrack, using precise cuts that align with the rhythm to create a cohesive and impactful viewing experience. Animated text elements were integrated to highlight key messages and emphasize the agency’s selling points.",
      "The video was rendered in multiple formats, including HD and 4K resolution, to ensure high quality for both web and broadcast use, as well as social media formats. It was produced in Hungarian and English, ensuring broader compatibility across various platforms. The final commercial not only met but exceeded the client’s expectations.",
    ],
    images: [marketingPuzzlePromoVideoCover, marketingPuzzlePromoVideoMockup],
    details: {
      Type: "Promo Video • Marketing Content • Video Editing",
      Tool: "Adobe Premiere Pro",
      "Key Features":
        "High-Energy Editing • Rhythm-Based Cuts • Multi-Language Versions • Versatility Across Platforms",
      "Production Phases":
        "Concept Development • Footage Integration • Audio Synchronization • Effects & Animation • Review & Revision • Finalization",
      "Brand Values":
        "Innovation • Creativity • Effectiveness • Professionalism • Adaptability • Trend-Forward Thinking • Strategic Marketing",
      "Video Variants":
        "Hungarian and English Versions • HD for Web • HD for Broadcast • 4K Resolution • Social Media-Friendly Formats",
      Outcome:
        "Strengthened Brand Visibility • Effective Communication of Message • Positive Client Feedback • Increased Engagement • Boosted Market Position",
      Link: [
        "https://www.youtube.com/watch?v=pLeuz1z7GoI",
        "https://www.youtube.com/watch?v=vBJMdDTcTLo",
      ],
    },
  },
  {
    id: "marketing-puzzle-logo",
    title: "Logo for Marketing Puzzle",
    scope:
      "A visually appealing, memorable, and easily recognizable logo for Marketing Puzzle, reflecting their commitment to creative problem-solving and innovation.",
    descriptions: [
      "I was approached by Marketing Puzzle to design a new logo that would accurately convey the essence of the brand. Marketing Puzzle is a full-service marketing agency located in Hungary, offering a wide range of marketing communication services, including both online and offline marketing, advertising, web development, social media content management, graphic design, copywriting, and newsletter marketing.",
      "The primary objective was to create a logo that is visually appealing, memorable, and easily recognisable. As an idea-oriented marketing agency, Marketing Puzzle needed a logo that reflects their commitment to creative problem-solving and continuous pursuit of innovation.",
      "The logo features a distinctive design integrating a puzzle piece with a light bulb. The puzzle piece symbolizes the idea of fitting together unique and complex elements to solve challenges, reflecting the agency’s ability to connect various marketing strategies to create comprehensive solutions for their clients. The light bulb is universally recognized as a symbol of ideas and inspiration, underscoring Marketing Puzzle’s commitment to generating creative solutions and fostering new ideas.",
      "This integration signifies that each piece of the marketing puzzle is not only a part of a larger strategy but also a source of insight and innovation. By the combination, the logo effectively communicates the agency’s mission to merge creativity with strategic thinking.",
      "The logo was designed in multiple variants, ensuring scalability and versatility for diverse applications across all media, from digital platforms to print materials, while maintaining visual integrity and brand consistency.",
    ],
    images: [marketingPuzzleLogoCover, marketingPuzzleLogoMockup],
    details: {
      Type: "Logo Design • Branding • Graphic Design",
      Tool: "Adobe Illustrator",
      "Key Features":
        "Memorable Design • Alignment with Brand Identity • Distinctive Branding • Clear Messaging • Scalable Across Different Uses • Versatility Across Media",
      "Design Process":
        "Research and Discovery • Concept Development • Sketching • Digital Rendering • Client Feedback • Finalization",
      "Brand Values": "Creativity • Innovation • Problem-Solving",
      "Logo Variants":
        "Horizontal • Vertical • Icon-Only • Full-Color • Black and White",
      Outcome:
        "Enhanced Brand Recognition and Market Presence • Differentiation from Competitors • Positive Client Feedback • Increased Visual Impact",
    },
  },
  {
    id: "quiz-game",
    title: "Quiz Game Practice Project",
    scope:
      "A small quiz game that challenges your knowledge of famous literary works through 15 questions, built with Vue.js, Tailwind CSS, and TypeScript.",
    descriptions: [
      "This small project was primarily created for fun and served as a learning exercise to gain experience with TypeScript, TestCafé, and Jenkins. By building this quiz game, I was able to explore and experiment with these tools in a practical, hands-on way.",
      "The quiz game is designed to test your knowledge of famous literary works. The quiz consists of 15 multiple-choice questions, allowing to navigate between questions using navigation buttons. The application also features a timer, progress bar, and a completion message that displays the final score, along with a restart button to replay the game.",
      "The frontend of the quiz game is developed using Vue.js, leveraging its component-based architecture for a responsive and interactive user experience. Tailwind CSS is employed for styling, providing a clean and modern interface.",
      "A key focus of this project was to try out and practice TypeScript. It served as a great opportunity to get familiar with TypeScript and its features, including Vite and TypeScript compilation. Throughout the development process, I explored and implemented TypeScript concepts such as type annotations, interfaces, explicit and implicit typing, function signatures, along with union types.",
      "In addition, TestCafé was implemented for end-to-end testing. Two tests were written. The first test checks if the quiz starts by clicking the start button, verifies the display of the first question, and checks if the second question is loaded after answering the first question. The second test simulates a complete quiz session by starting the quiz, answering all questions correctly, and then verifies that the displayed score message indicates a perfect score of 15 out of 15.",
      "To ensure continuous integration, Jenkins was integrated into the project workflow. A Jenkins job was set up to automatically build, test, and deploy the app, triggered automatically on each new commit to the GitHub repository. This setup allowed for smooth and efficient updates to the application.",
    ],
    images: [quizGameCover, quizGameMockup],
    details: {
      Type: "Practice Project • Interactive Application • Web Development • Educational Exercise",
      Technologies:
        "Vue.js • Tailwind CSS • TypeScript • Vite • TestCafé • Jenkins",
      "Key Features":
        "15 Multiple-Choice Questions • Timer • Progress Bar • Completion Message with Score • Start & Restart Button • Navigation Between Questions",
      TypeScript:
        "Vite for TypeScript Compilation • Type Annotation • Interface • Explicit & Implicit Typing • Function Signature • Union Type",
      Testing:
        "TestCafé for End-to-End Testing • Test for Quiz Start and Question Navigation • Full Quiz Session Test",
      "Continuous Integration and Deployment":
        "Jenkins Job for Automated Build, Test, and Deployment • Triggered on GitHub Commits • CI/CD Pipeline",
    },
  },
  {
    id: "easv-poster",
    title: "Poster for Business Academy SouthWest",
    scope:
      "A vibrant poster for EASV’s kickoff party, designed in Photoshop, blending professionalism with youthfulness to captivate students.",
    descriptions: [
      "This poster was created to promote the opening party of Business Academy SouthWest (Erhvervsakademi SydVest) in 2023. Tailored for students aged 18 to their twenties, the poster addresses its target demographic. The design aligns with the school’s design guide, integrating the institution’s distinctive colors and preferred logo pattern.",
      "It was selected for promotion in a contest among students of the Desktop Publishing course at the academy. This recognition not only highlighted the poster’s effectiveness but also demonstrated its alignment with the institution's branding and promotional goals. The poster was subsequently used within the academy to promote the opening party.",
      "Mindful of the target audience, the poster contains subtle elements such as scratches and grains as separate layers, adding a touch of contemporary appeal. Through the blend of fonts, colors, and layout, the design aims to convey a subtle mix of professionalism and playfulness, respecting the institution’s serious nature while subtly alluding to the enjoyable experiences it offers to students.",
      "The poster was designed in three sizes (A4, A3, and 1920x1080 px) to suit various mediums. Following its selection, I refined the text and added extra information to meet specific promotional requirements.",
    ],
    images: [easvPosterCover, easvPosterMockup],
    details: {
      Type: "Event Poster • Graphic Design • Promotional Material",
      Tool: "Adobe Photoshop",
      "Key Features":
        "Vibrant and Engaging Design • Integration with Academy Branding • Youthful and Modern Aesthetic • Clear Messaging • Tailored With Student-Friendly Language • Suitable for Multiple Mediums",
      "Design Process":
        "Understanding of Audience • Concept Development • Digital Layout • Feedback • Final Revisions",
      "Brand Values": "Professionalism • Innovation • Sense of Community",
      "Poster Variants": "A4 • A3 • 1920x1080 px • Print and Digital",
      Outcome:
        "Effective Student Engagement • Positive Reception • Winner of Internal Contest • Increased Interest",
    },
  },
];

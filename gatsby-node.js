exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.path}`,
      component: require.resolve("./src/templates/project-template.tsx"),
      context: { project }
    });
  });
};

const projects = [
  {
    title: "Indie Photographers",
    description: `
                Indie Photographers is a hub for well, indie photographers. The
                app is a PWA created through create-react-app. The frontend is a
                React app with Material-UI on top. The backend is mostly a node
                RESTful API with Express on top and MongoDB for a database.
                It's important to mention that this is a concept app not an
                actual commercial product. Nevertheless, this is a perfect
                showcase and reflection of my skills at this point in my career.
            `,
    repository: "https://github.com/osamaadam/indie-photographers",
    url: "https://indieapp.herokuapp.com",
    icon: "indiePhotographers.png",
    path: "indie-photographers"
  },
  {
    title: "AESChipions",
    description: `AESChipions is a team effort between myself and Mohamed Nour. It was the
                final project of Chipions; which is a student program for digital design
                engineering. The project is basically an AES encryption system (counter mode)
                written entirely in Verilog.`,
    repository: "https://github.com/mohamednour98/AESchipions",
    path: "aes-chipions"
  },
  {
    title: "CPU Schedule",
    description: `
                  A simulation for both First Come First Serve (FCFS) and Round Robin
                  CPU scheduling algorithms, written in C++. Built as part of a college course
                  (Operating Systems). Read the repository readme for more details.
              `,
    repository: "http://github.com/osamaadam/cpu-schedule",
    path: "cpu-schedule"
  },
  {
    title: "Lyrics Genius",
    description: `
                Lyrics Genius is tiny little app built using Musixmatch's free developer
                APIs. I built this in a day back when I started learning web development.
                It's built using React and Bootstrap.
              `,
    repository: "https://github.com/osamaadam/LyricsGenius",
    url: "https://lyricsgenius.herokuapp.com/",
    path: "lyrics-genius"
  },
  {
    title: "Personal Website",
    description: `
                  This is the Website you're currently on. It was created using
                  Gatsby and is purely a static website. You may think the
                  design is minimal because I got lazy and I'm not a great web
                  designer. And you'd be partially correct. But, I got better
                  reasoning behind the minimal design. The website is built with
                  speed and performance in mind. The project is stylized purely using
                  SCSS. No external UI libraries were used.
              `,
    repository: "https://github.com/osamaadam/personal-website",
    url: "osamaadam.tech",
    icon: "personal-website.png",
    path: "personal-website"
  },
  {
    title: "todoNumeroUno",
    description: `
                The magnum opus, the chef d'oeuvre, the masterpiece, my first ever todo list.
                Sadly this one isn't hosted. If only the world knew what I was withholding!
                So yeah, nothing special about this one, it's a todolist built in React with
                the worst backend known to mankind using Node and Mongodb.
              `,
    repository: "https://github.com/osamaadam/todoNumeroUno",
    path: "todo-numero-uno"
  },
  {
    title: "Unix Shell",
    description: `
                  This is a simple Unix shell written in C++. C++ is the
                  language I mainly use for problem solving, simply because it's
                  very easy to build a performant solution using it. It's also
                  however very easy to miss up if not careful. You may check the
                  project repository by clicking the project title.
              `,
    repository: "http://github.com/osamaadam/unix-shell",
    path: "unix-shell"
  }
];

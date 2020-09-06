const Home = () => {
  return (
    <main>
      <img src="/ideasyed.png" alt="ideasyed logo" className="logo" />
      <div className="intro">Hello, I&apos;m Syed Umair!</div>
      <div className="tagline">
        Dev | Engineer | Hacker | Speaker @{' '}
        <a target="_blank" href="https://full.io" rel="noreferrer">
          FULL Creative
        </a>
      </div>
      <div className="icons-social">
        <a target="_blank" href="https://github.com/syed-umair" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
        <a target="_blank" href="https://twitter.com/ideasyed" rel="noreferrer">
          <i className="fab fa-twitter" />
        </a>
        <a target="_blank" href="https://dev.to/ideasyed" rel="noreferrer">
          <i className="fab fa-dev" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/syed-umair" rel="noreferrer">
          <i className="fab fa-linkedin" />
        </a>
        {/* <a target="_blank" href="https://stackoverflow.com/story/ideasyed" rel="noreferrer">
          <i className="fab fa-stack-overflow"></i>
        </a>
        <a target="_blank" href="https://medium.com/@ideasyed" rel="noreferrer">
          <i className="fab fa-medium"></i>
        </a>
        <a target="_blank" href="https://www.freecodecamp.org/ideasyed" rel="noreferrer">
          <i className="fab fa-free-code-camp"></i>
        </a>
        <a target="_blank" href="https://codepen.io/ideasyed" rel="noreferrer">
          <i className="fab fa-codepen"></i>
        </a> */}
      </div>
    </main>
  );
};

export default Home;

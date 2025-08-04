import Link from "next/link";
import Head from "next/head";

export default function work() {
  return (
    <>
      <Head>
        <title>My Work</title>
      </Head>
      <main id="work">
        <h1 className="lgheading">
          My
          <span className="text-secondary"> Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <Link href="#!">
              <img
                src="/my_portfolio/img/projects/project1.jpg"
                alt="Project"
              />
            </Link>
            <Link href="#" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </Link>
            <Link href="#" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link href="#!">
              <img
                src="/my_portfolio/img/projects/project2.jpg"
                alt="Project"
              />
            </Link>
            <Link href="#" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </Link>
            <Link href="#" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link href="#!">
              <img
                src="/my_portfolio/img/projects/project3.jpg"
                alt="Project"
              />
            </Link>
            <Link href="#" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </Link>
            <Link href="#" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link href="#!">
              <img
                src="/my_portfolio/img/projects/project4.jpg"
                alt="Project"
              />
            </Link>
            <Link href="#" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </Link>
            <Link href="#" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link href="#!">
              <img
                src="/my_portfolio/img/projects/project5.jpg"
                alt="Project"
              />
            </Link>
            <Link href="#" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </Link>
            <Link href="#" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

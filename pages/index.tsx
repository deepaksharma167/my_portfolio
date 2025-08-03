import Link from "next/link";
export default function Home() {
  return (
    <>
      <main id="home">
        <h1 className="lgheading">
          Deepak <span className="text-secondary">Sharma</span>
        </h1>
        <h2 className="smheading">
          Web Developer, Programmer, DevOps Engineer, Full Stack Developer &
          Entrepreneur
        </h2>
        <div className="icons">
          <Link href="#!">
            <i className="fab fa-twitter fa-2x"></i>
          </Link>
          <Link href="#!">
            <i className="fab fa-facebook fa-2x"></i>
          </Link>
          <Link href="#!">
            <i className="fab fa-linkedin fa-2x"></i>
          </Link>
          <Link href="#!">
            <i className="fab fa-github fa-2x"></i>
          </Link>
        </div>
      </main>
    </>
  );
}

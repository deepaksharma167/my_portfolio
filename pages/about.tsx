export default function About() {
  return (
    <>
      <main id="about">
        <h1 className="lgheading">
          About
          <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="smheading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img
            src="img/portrait.jpg"
            alt="Deepak Sharma"
            className="bio-image"
          />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              accusantium adipisci at est sapiente qui molestiae earum
              cupiditate, officiis ipsum vel consequuntur facilis quos accusamus
              ad incidunt ab minus aut.
            </p>
          </div>

          <div className="job job-1">
            <h3>123 Webshop</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              in doloremque eligendi autem totam ipsa quidem, et unde aliquid
              voluptate eum labore sit illum a earum eveniet quam nemo expedita?{" "}
            </p>
          </div>
          <div className="job job-2">
            <h3>Designers ABC</h3>
            <h6>Designer & Front End Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              in doloremque eligendi autem totam ipsa quidem, et unde aliquid
              voluptate eum labore sit illum a earum eveniet quam nemo expedita?{" "}
            </p>
          </div>
          <div className="job job-3">
            <h3>Webworks</h3>
            <h6>Graphic Designer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              in doloremque eligendi autem totam ipsa quidem, et unde aliquid
              voluptate eum labore sit illum a earum eveniet quam nemo expedita?{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

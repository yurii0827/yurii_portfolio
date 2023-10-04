import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "React_skill", content: "React", porcentage: "100%", value: "100" },
        { id: "Vue_skill", content: "Vue", porcentage: "100%", value: "100" },
        {
          id: "Node_skill",
          content: "Node.js",
          porcentage: "100%",
          value: "100"
        },
        { id: "MongoDB_skill", content: "MongoDB", porcentage: "95%", value: "95" },
        {
          id: "Tailwind_CSS",
          content: "Tailwind CSS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Google_skill",
          content: "Google APIS",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Laravel_skill",
          content: "Laravel",
          porcentage: "100%",
          value: "100"
        },
        {
          id: "ChatGPT_skill",
          content: "ChatGPT",
          porcentage: "100%",
          value: "100"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I have extensive experience as a software engineer, specializing in the development of dynamic and responsive web applicaionts at an enterprise level. My skill set extends beyond coding, where I also possess an innate ability to comprehend the complexities of business requirements. "
        },
        {
          id: "second-p-about",
          content:
            "This enables me to design besopke solutions that not only address immediate challenges but also establish a strong foundation for sustained scalability and future system integrations."
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

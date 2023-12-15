import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";

const FooterComponents = () => {
  return (
    <>
      <>
        <footer className="myFooter">
          <Container>
            <Row>
              <Col className="">
                <h3 className="head_3">Follow us :- </h3>
                <ul className="socialIconsList">
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.facebook.com"
                      target="_blank"
                    >
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/arvind-kumar-015759213"
                      target="_blank"
                    >
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://twitter.com"
                      target="_blank"
                    >
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://stackoverflow.com"
                      target="_blank"
                    >
                      <BsStackOverflow />
                    </a>
                  </li>

                  <li>
                    <a
                      rel="noreferrer"
                      href="https://github.com/Arvindkr123"
                      target="_blank"
                    >
                      <BsGithub />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    </>
  );
};

export default FooterComponents;

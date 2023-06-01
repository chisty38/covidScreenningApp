import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { inputs, inputsDropDown } from "./Data/Data";
import FormInput from "./formInput/FormInput";
import DropDownInput from "./formInput/DropDownInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "bootstrap/dist/js/bootstrap.min.js"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App = () => {
  //variable to save response
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    user_email: "",
  });
  //variable to set status
  const [status, setStatus] = useState("");

  //function to update user email
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatus("");
    setAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //function to handle form data submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate that all questions have been answered
    if (Object.values(answers).some((answer) => answer === "")) {
      alert("Please answer all questions.");
      return;
    }

    // Check if any answer is 'no'
    const hasNoAnswer = Object.values(answers).some(
      (answer) => answer === "NO"
    );
    const result = hasNoAnswer ? "NO" : "YES";

    const message = `You ${
      hasNoAnswer ? "should not enter the" : "may enter the"
    } building.`;

    const canvas =
      result === "YES"
        ? "https://401autowebappprod.s3.ca-central-1.amazonaws.com/groupWebsiteAsset/greenCheck.png"
        : "https://401autowebappprod.s3.ca-central-1.amazonaws.com/groupWebsiteAsset/pngwing.com.png";

    // Send email with the result
    sendEmail(result, message, answers.user_email, canvas);
  };
  //function to send email
  const sendEmail = (result, message, user_email, canvas) => {
    emailjs
      .send(
        "service_v9wkjlh",
        "template_2z6ed5l",
        {
          result,
          message,
          user_email,
          canvas,
        },
        "Jt_6zgTzT9xvSag07"
      )
      .then((response) => {
        console.log("Email sent:", response);
        if (response.status === 200) {
          setStatus("Your response received !!!");
          setAnswers({
            ...answers,
            question1: "",
            question2: "",
            question3: "",
            user_email: "",
          });
        }
        console.log(response.status);
      })
      .catch((error) => {
        //error handling
        setStatus(error);
        console.error("Email error:", error);
      });
  };

  return (
    <div className="Container_Response">
      <Container id="FormContainer">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} id="Container_Response_header">
            <h1>COVID DOOR SCREENING</h1>
          </Col>
        </Row>

        <Row id="Container_Response_Form">
          <Col xs={12} sm={12} md={12} lg={12}>
            <form className="formSection" onSubmit={handleSubmit}>
              <Row id="Container_Response_Form_Child">
                {inputs.map((input) => (
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    id="Container_Response_Form_Child_inputCol"
                  >
                    <FormInput
                      key={input.id}
                      {...input}
                      value={answers[input.name]}
                      onChange={handleChange}
                    />
                  </Col>
                ))}
                {inputsDropDown.map((input) => (
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    id="Container_Response_Form_Child_inputCol"
                  >
                    <DropDownInput
                      key={input.id}
                      {...input}
                      values={
                        answers[input.name]
                          ? answers[input.name]
                          : input.placeholder
                      }
                      onSelectdropDownDataHandler={(e) => {
                        setAnswers({ ...answers, [input.name]: e });
                        setStatus("");
                      }}
                    />
                  </Col>
                ))}
              </Row>
              <Row id="Container_Response_Form_Btn">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Button variant="danger" type="submit" id="btn_Submit">
                    SUBMIT
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            id="Container_Response_Form_Response"
          >
            <h4>{status}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

{
  /*<form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            onChange={(e) => handleAnswerChange("user_email", e.target.value)}
          />
          <label htmlFor="question1">Question 1: Do you have a fever?</label>
          <select
            id="question1"
            value={answers.question1}
            onChange={(e) => handleAnswerChange("question1", e.target.value)}
          >
            <option value="">-- Select an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="question2">
            Question 2: Have you traveled recently?
          </label>
          <select
            id="question2"
            value={answers.question2}
            onChange={(e) => handleAnswerChange("question2", e.target.value)}
          >
            <option value="">-- Select an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="question3">
            Question 3: Have you been in contact with a COVID-19 positive
            person?
          </label>
          <select
            id="question3"
            value={answers.question3}
            onChange={(e) => handleAnswerChange("question3", e.target.value)}
          >
            <option value="">-- Select an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>*/
}

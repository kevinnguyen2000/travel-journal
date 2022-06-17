import "./style.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import data from "./data.js";

function App() {
  const travelData = data;
  return (
    <div className="text-container">
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Card style={{ width: "35rem" }}>
          <Card.Body>
            <Card.Header style={{ backgroundColor: "#db4439" }}>
              <center>
                <Card.Title
                  style={{
                    fontSize: "15px",
                    marginTop: "11px",
                    color: "whitesmoke",
                  }}
                >
                  <i style={{ marginRight: "5px" }} class="bi bi-geo"></i>
                  my travel journal.
                </Card.Title>
              </center>
            </Card.Header>
            <div style={{ marginTop: "20px" }}>
              {travelData.map((travel, index) => (
                <Card.Text>
                  <div class="flex-container">
                    <div class="flex-child magenta">
                      <img
                        src={require("./images/" + travel.id + ".jpg")}
                        height={200}
                        width={130}
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <div class="flex-child green">
                      <p className="same-line" style={{ fontSize: "12px" }}>
                        <i
                          class="bi bi-geo-alt-fill"
                          style={{ color: "#db4439" }}
                        ></i>{" "}
                        {travel.country}
                      </p>
                      <p
                        className="same-line"
                        style={{ fontSize: "12px", marginLeft: "15px" }}
                      >
                        <a
                          href={"http://maps.google.com/?q=" + travel.landmark}
                          target="_blank"
                        >
                          <u>View on Google Maps</u>
                        </a>
                      </p>
                      <p style={{ marginTop: "-16px", fontSize: "22px" }}>
                        <b>{travel.landmark}</b>
                      </p>
                      <div style={{ fontSize: "12px", marginRight: "40px" }}>
                        <p>
                          <b>
                            {travel.start} - {travel.end}
                          </b>
                        </p>
                        <p style={{ marginTop: "-12px" }}>
                          {travel.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{
                      marginLeft: "40px",
                      marginRight: "40px",
                      border: 0,
                      height: "0.2px",
                    }}
                  />
                </Card.Text>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;

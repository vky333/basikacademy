import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import styles from "./Basik.module.css";
import StudentButton from "./StudentButton";
import Video from "./Video";

export const CustomVideoTab = () => {
  return (
    <div className="sectionStudent">
      <Tab.Container id="left-tabs-example" defaultActiveKey="StudentTab1">
        <Row>
          <Col md={8} className="mb-3">
            <Tab.Content>
              <Tab.Pane eventKey="StudentTab1">
                <Video videoSrc="/video/PriyankaBisht.mp4" />
              </Tab.Pane>
              <Tab.Pane eventKey="StudentTab2">
                <Video videoSrc="/video/harshitBisht.mp4" />
              </Tab.Pane>

              <Tab.Pane eventKey="StudentTab3">
                <Video videoSrc="/video/Nikhiltiwari.mp4" />
              </Tab.Pane>
              <Tab.Pane eventKey="StudentTab4">
                <Video videoSrc="/video/bhavikaSood.mp4" />
              </Tab.Pane>
              <Tab.Pane eventKey="StudentTab5">
                <Video videoSrc="/video/DimpleRawat.mp4" />
              </Tab.Pane>
              <Tab.Pane eventKey="StudentTab6">
                <Video videoSrc="/video/LizaOjha.mp4" />
              </Tab.Pane>
              <Tab.Pane eventKey="StudentTab7">
                <Video videoSrc="/video/Madhu.mp4" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col md={4}>
            <Nav
              variant="pills"
              className={`${styles.placeMentStudents} flex-column`}
            >
              <Nav.Item>
                <Nav.Link eventKey="StudentTab1">
                  <StudentButton
                    PlacementLogo="/logos/PlacementLogo/EDUTRA.png"
                    studentName="Priyanka Account Executive"
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="StudentTab2">
                  <StudentButton
                    PlacementLogo="/logos/PlacementLogo/NIRGUL.png"
                    studentName="Harish Bisht Sr. Account Executive"
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="StudentTab3">
                  <StudentButton
                    PlacementLogo="/logos/PlacementLogo/EDUTRA.png"
                    studentName="Nikhil Tiwari Assistant Account Executive"
                  />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="StudentTab4">
                  <StudentButton
                    PlacementLogo="/logos/PlacementLogo/MBR-INDIA.png"
                    studentName="Bhavika Sood MIS Executive  "
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="StudentTab5">
                  <StudentButton
                    PlacementLogo="/logos/PlacementLogo/BSEE.png"
                    studentName="Dimple Rawat Data Analyst  "
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="StudentTab6">
                  <StudentButton
                    PlacementLogo="/logos/PlacementLogo/REVEXMEDIA.png"
                    studentName="Liza Ojha Backend Operations-Taxation  "
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="StudentTab7">
                  <StudentButton
                    PlacementLogo="/logos/PlacementLogo/NEXGEN.png"
                    studentName="Madhu Data Analytics & MIS  "
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default CustomVideoTab;

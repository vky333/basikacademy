import React, { useEffect, useState } from "react";

import {
  Tabs,
  Tab,
  Row,
  Button,
  Col,
  Container,
  Stack,
  ProgressBar,
} from "react-bootstrap";
import styles from "../Otta/QuestionForm.module.css";
import { generate } from "shortid";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step_4 from "./Step_4";
// import Step4 from "./Step4";
// import Step5 from "./Step5";
// import Step6 from "./Step6";
import Step7 from "./Step7";

const tablist = [
  {
    eventKey: "0",
    disabled: "{currentTab !== 0}",
    panelcomponent: <Step1 />,
  },
  {
    eventKey: "1",
    disabled: "{currentTab !== 1}",
    panelcomponent: <Step2 />,
  },
  {
    eventKey: "2",
    disabled: "{currentTab !== 2}",
    panelcomponent: <Step3 />,
  },
  {
    eventKey: "3",
    disabled: "{currentTab !== 3}",
    panelcomponent: <Step_4 />,
  },
  // {
  //   eventKey: "4",
  //   disabled: "{currentTab !== 4}",
  //   panelcomponent: <Step4 />,
  // },
  // {
  //   eventKey: "5",
  //   disabled: "{currentTab !== 5}",
  //   panelcomponent: <Step5 />,
  // },
  // {
  //   eventKey: "6",
  //   disabled: "{currentTab !== 6}",
  //   panelcomponent: <Step6 />,
  // },
  {
    eventKey: "4",
    disabled: "{currentTab !== 4}",
    panelcomponent: <Step7 />,
  },
];

export default function QuestionForm() {
  // const nowSet = 50;

  const [currentTab, setCurrentTab] = React.useState(0);
  const [now, nowSet] = React.useState(4);
  // var questionArray = ['434', '3434', '3434s']

  const [prevBtnDisplay, setPrevBtnDisplay] = useState("d-none");
  const [notify, setNotify] = useState("d-none");
  const [progressBar, setProgressbar] = useState("d-none");

  useEffect(() => {
    if (currentTab === 0) {
      setNotify("d-block");
    } else {
      setNotify("d-none");
    }

    if (currentTab !== 0) {
      nowSet((currentTab / tablist.length) * 100);
    }
    if (currentTab === 0) {
      setProgressbar("d-none");
      setPrevBtnDisplay("d-none");
    } else {
      setProgressbar("d-flex");
      setPrevBtnDisplay("d-block");
    }
  }, [currentTab]);

  return (
    <Container fluid className={`${styles.otaContaner} ps-0`}>
      <div className={`${styles.notifybar}`}>
        <p className={`${notify} m-0 text-center text-white fs-12 py-2`}>
          <AiOutlineClockCircle fontSize={18} />
        </p>
      </div>
      <div className={`${styles.mntrImg}`}>
          <Image
            width="80px"
            height="80px"
            src="/about/c5.png"
            alt="BasikLogo"
            style={{ cursor: "pointer" }}
          />
        </div>
      <div className="position-relative">
        <ProgressBar
          className={`${styles.progress_bar} ${progressBar} rounded-0`}
          now={now}
        />

        
      </div>
      <Row>
        <Col>
          <Tabs activeKey={currentTab} className={`${styles.ottastep}`}>
            {tablist.map((list) => (
              <Tab
                key={generate()}
                eventKey={list.eventKey}
                title="tab1"
                disabled={list.disabled}
                className={`${styles.otta_panel}`}
              >
                {list.panelcomponent}
              </Tab>
            ))}
          </Tabs>
        </Col>
      </Row>
      <Stack
        gap={3}
        direction="horizontal"
        className={`${styles.otta_header} ${styles.otta_footer} d-flex justify-content-center  pt-3 position-sticky bottom-0`}
      >
        <Button
          className={`${styles.prevBtn} py-2 ${prevBtnDisplay}`}
          disabled={currentTab === 0}
          onClick={() => setCurrentTab((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Button
          className={`${styles.nextBtn} py-2`}
          disabled={currentTab === 4}
          onClick={() => setCurrentTab((prev) => prev + 1)}
        >
          Next
        </Button>
       
      </Stack>
      <div>
          <p className={`${notify} m-0 text-center text-black fs-12 py-2`}>
            <AiOutlineClockCircle fontSize={18} /> We will take you to your
            dream career in just few clicks!
          </p>
        </div>

      {/* <p>Current tab index is {currentTab}</p> */}
      {/* <p>length : {tablist.length}</p> */}
    </Container>
  );
}

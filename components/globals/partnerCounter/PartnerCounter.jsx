import React from "react";
import Image from "next/image";

const PartnerCounter = () => {
  return (
    <>
      <section className="partnerCounter sectionGlobal">        
        <section className="container">
          <div className="row">
            <div className="col-sm-12 mb-5">
              <div className="heading-box">
                <h1>
                  Our <span>Alliance Partners</span>
                </h1>
              </div>
            </div>
            <div className="col-sm-12">
              <ul className="partners-logo text-end">
                <li className="partner-img">
                  <Image
                    width={400}
                    height={140}
                    src="/logos/p1.png"
                    alt="ASSOCHAM"
                  />
                </li>
                <li className="partner-img">
                  <Image
                    width={400}
                    height={140}
                    src="/logos/p2.png"
                    alt="FICCI"
                  />
                </li>
                <li className="partner-img">
                  <Image
                    width={410}
                    height={123}
                    src="/logos/p3.png"
                    alt="FICCI"
                  />
                </li>
                <li className="partner-img">
                  <Image
                    width={400}
                    height={140}
                    src="/logos/p4.png"
                    alt="FICCI"
                  />
                </li>
                <li className="partner-img">
                  <Image
                    width={400}
                    height={140}
                    src="/logos/p5.png"
                    alt="FICCI"
                  />
                </li>
                <li className="partner-img">
                  <Image
                    width={400}
                    height={140}
                    src="/logos/p6.png"
                    alt="FICCI"
                  />
                </li>
                <li className="partner-img">
                  <Image
                    width={250}
                    height={140}
                    src="/logos/p7.png"
                    alt="FICCI"
                  />
                </li>
                <li className="partner-img">
                  <Image
                    width={400}
                    height={140}
                    src="/logos/p8.png"
                    alt="FICCI"
                  />
                </li>
                <li className="partner-img">
                  <Image
                    width={400}
                    height={140}
                    src="/logos/p9.png"
                    alt="FICCI"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default PartnerCounter;

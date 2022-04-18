import React from 'react';


const PartnerCounter = () =>{
    return(
        <>
        <section className='partnerCounter'>
            <section className='container'>
                <div className='row'>
                   
                    <div className="col-sm-3 col-6">
                        <div className="text-center">
                            <h1>150M+</h1>
                            <p>Students</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="text-center">
                            <h1>200+</h1>
                            <p>Colleges</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="text-center">
                            <h1>490+</h1>
                            <p>Courses</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6">
                        <div className="text-center">
                            <h1>100%</h1>
                            <p>Satisfications</p>
                        </div>
                    </div>
                    </div>
                    <hr className="bg-danger border-2 border-top border-danger"></hr>
                </section>

                <section className='container'>
                    <div className='row'>
                        <div className="col-sm-4">
                        <div className="heading-box">
                            <h1>Meet our Partners and Affiliations</h1>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="partners-logo text-end">
                            <div className="partner-img">
                                <img src="/logos/logo-ASSOCHAM.png" width="100%" alt="ASSOCHAM"/>
                            </div>
                            <div className="partner-img">
                                <img src="/logos/logo-FICCI.png" width="100%" alt="FICCI"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="heading-box">
                            <h1>In the press</h1>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="partners-logo text-end">
                            <div className="partner-img">
                                <img src="/logos/logo-TOI.png" width="100%" alt="TOI"/>
                            </div>
                            <div className="partner-img">
                                <img src="/logos/logo-livemint.png" width="100%" alt="livemint"/>
                            </div>
                            <div className="partner-img">
                                <img src="/logos/logo-firstpost.png" width="100%" alt="firstpost"/>
                            </div>
                            <div className="partner-img">
                                <img src="/logos/logo-yourstory.png" width="100%" alt="yourstory"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>             
       
        </section>
        </>
    )
}

export default PartnerCounter;
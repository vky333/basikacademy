import React from 'react';
import Image from 'next/image';


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
                                <Image width={150} height={60} src="/logos/logo-ASSOCHAM.png" alt="ASSOCHAM"/>
                            </div>
                            <div className="partner-img">
                                <Image width={150} height={60} src="/logos/logo-FICCI.png" alt="FICCI"/>
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
                                <Image width={180} height={40}  src="/logos/logo-TOI.png" alt="TOI"/>
                            </div>
                            <div className="partner-img">
                                <Image width={180} height={40}  src="/logos/logo-livemint.png" alt="livemint"/>
                            </div>
                            <div className="partner-img">
                                <Image width={180} height={40}  src="/logos/logo-firstpost.png" alt="firstpost"/>
                            </div>
                            <div className="partner-img">
                                <Image width={180} height={40} src="/logos/logo-yourstory.png" alt="yourstory"/>
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
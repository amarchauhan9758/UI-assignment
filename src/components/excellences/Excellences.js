import React from 'react'
import "./style.css"
import image1 from "../../images/DSC_0563.png"
import image2 from "../../images/Chakravyuh (2997).png"
import image3 from "../../images/DSC_1283.png"
import image4 from "../../images/C9583BCA-9CC9-4D6E-BD39-FFD987FE7E2A.png"
import image5 from "../../images/DSC_1163.png"
import image6 from "../../images/Mask Group 64.png"
import image7 from "../../images/XperienceIIMK_2-min.png"




function Excellences() {
    return (
        <>

            <div className='parent-excellences' >
                <div className='headaing-div' >
                    <h1 className='heading-text' >Center of Excellences</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className='categories' >
                    <span>Design Innovation Centre</span>
                    <span>CoE in Public Policy and Goverment</span>
                    <span>FIED</span>
                </div>

                <div className='image-list' >
                    <div className='' >
                        <img src={image5} alt="image1" />
                    </div>
                    <div className='' >
                        <div className='image-list-wrapper' >
                            <img src={image2} alt="image2" />
                            <img src={image1} alt="image5" />

                        </div>
                        <img src={image6} alt="image6" />
                    </div>
                    <div className='' >

        <img src={image3} alt="image3" />
                        <img src={image7} alt="image7" />
                    </div>
                    <div className='' >
                    <img src={image4} alt="image4"  width="450px" height="500px" />

                    </div>
                </div>
                <button className='btn-view' >View all</button>
            </div>
        </>
    )
}

export default Excellences
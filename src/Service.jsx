import React from 'react'
import Card from './Card'
import Cdata from './Cdata'
// import web from './image/IMG-20.jpg'

const Service = () => {
    return (
        <>
            <div className='my-4'>
                <h1 className='text-center text-dark'>Our Service</h1>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4 mb-5'>

                            {
                                Cdata.map((val, ind) => {
                                    return (
                                        <Card
                                            key={ind}
                                            image={val.imgSrc}
                                            heading={val.title}

                                        />
                                    )
                                })
                            }



                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default Service
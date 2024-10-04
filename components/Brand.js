import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
          </div>
       <center>
       <div className='brand-content grid-6 py1 -mr-96'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='140%' height='110%' />
              </div>
            ))}
          </div>
       </center>
        </div>
      </section>
    </>
  )
}

export default Brand

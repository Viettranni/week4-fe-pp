import { useState } from 'react';
import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {
  const [servicesData, setServicesData] = useState(services);
  const handleDeleteService = (serviceId) => {
    // Filter out the item with the specified ID and update the state
    const updatedServices = servicesData.filter((service) => service.id !== serviceId);
    setServicesData(updatedServices);
  };
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service
                    key={service.id}
                    {...service}
                    onDelete={handleDeleteService}
                 />
        })}
      </div>
    </section>
  )
}
export default Services

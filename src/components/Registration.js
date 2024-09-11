import React, { useState } from 'react';
import Title from './Title'

const Registration = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    };

    return (
        <section className='section registration' id='registration'>
            <Title title='Registration' subTitle='Form' />
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label></label>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </section>
    );
  };

  export default Registration;

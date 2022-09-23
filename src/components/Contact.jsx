import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
import AOS from 'aos';

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [state, handleSubmit] = useForm('xpzndqzp');
  if (state.succeeded) {
    return (
      <div className='bg-[#201B1B]'>
        <p className='nunito text-3xl text-center py-10 uppercase'>
          Thank you for submitting!
        </p>
      </div>
    );
  }
  return (
    <div className='bg-[#201B1B] w-full py-10'>
      <div
        data-aos='flip-left'
        data-aos-duration='1000'
        className='lg:w-[50%] mx-auto p-10'
      >
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-items-center'>
            <p className='nunito text-2xl mb-5'>CONTACT US</p>
            <label className='nunito text-white mb-2' htmlFor='email'>
              Email Address
            </label>
            <input
              className='nunito text-black mb-5'
              id='email'
              type='email'
              name='email'
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <label className='text-white mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              className='nunito text-black mb-5'
              id='message'
              name='message'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <div>
              <button
                className='bg-[#DC3D4B] hover:bg-gray-800 hover:border-white hover:border text-white py-1 px-4 rounded mt-2'
                type='submit'
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;

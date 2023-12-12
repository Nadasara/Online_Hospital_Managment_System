
const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className='heading text-center'>Contacts</h2>
        <p className='mb-8 lg:mb-16 font-lenght text-center text_para'>
          Got a technical issues? want to send feedback about a beta feature? Let
          us know.
        </p>

        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='form_label'>
              Your Email
            </label>

            <input
            type='email'
            id='email'
            placeholder='example@example.com'
            className='form__input mt-1'           
            />            
          </div>

          <div>
            <label htmlFor='subject' className='form_label'>
              Department
            </label>

            <input
            type='text'
            id='subject'
            placeholder='What is your patient category'
            className='form__input mt-1'           
            />            
          </div>

          <div className="sm:col-span-2">
            <label htmlFor='message' className='form_label'>
              About your
            </label>

            <textarea
            rows="5"
            type='text'
            id="message"
            placeholder="Discribe your problem"
            className="form__input mt-1"
            
            />     
          </div>

          <button type="submit" cursor='hand' className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex
           justify-center rounded-[50px]'
           >Submit
            </button>
        </form>
      </div>
    </section>
  );
  };

export default Contact;
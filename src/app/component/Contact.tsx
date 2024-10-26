import React from 'react';

const Contact = () => {
  return (
    <div className="flex-grow bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-4xl text-cyan-100 md:text-6xl font-extrabold mb-4 hover:text-opacity-90">Contact Now!</h1>

        <p className="text-lg md:text-2xl font-medium leading-relaxed mb-6">
        We’d love to hear from you! If you have any questions or need assistance, please feel free to contact us. 
        </p>

        <ul>
            <li className='hover:text-xl hover:text-cyan-950'>✉ solestyle@gmail.com</li>
            <li className='hover:text-xl hover:text-cyan-950'>📞 +92 787878788</li>
        </ul>
      </div>

    </div>
  );
};

export default Contact;
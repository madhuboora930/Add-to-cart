import React from 'react'
import styled from "styled-components"
export const Contact = () => {
  const Wrapper=styled.section`
  padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
        <h2>Contact Page</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21394.78460365648!2d73.90430717796673!3d18.569560558138296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664540091075!5m2!1sen!2sin"
         width="100%"
         height="400"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"></iframe>

         <div className='container'>
          <div className='contact-form'>
            <form action="https://formspree.io/f/xeqdgwnq" method="POST" className='contact-inputs'>
              <input type="text" placeholder="username" name="username" required 
              autoComplete='off'/>
              <input type="email" name="Email" placeholder="Email" required autoComplete='off'/>
              <textarea name="message" cols="30" rows="10" required autoComplete='off'></textarea> 
              <input type="submit" value="send"/>
            </form>
          </div>
         </div>
    </Wrapper>
  )
}

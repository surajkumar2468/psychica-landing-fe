import React from 'react'
import PsychicCard from '../../components/PsychicCard'

const index = () => {
  return (
    <div>
      <section className='psychic_details'>
        <div className='container'>
          <div className='back_btn'>
            <a href=''><img src="/images/icon_arrow.svg" alt="" />
              Back to Love Psychics</a>
          </div>
          <div className='img_explore_sec'>
            <span className='main_img_explore'><img src='/images/pexels-quang-nguyen-vinh2.jpg' className='img_explore_blur' alt="" />
              <span className='center_img_explore'>  <img src='/images/pexels-pavel-danilyuk.jpg' alt="" /> </span>
            </span>
            <p><img src="/images/check_icon.svg" alt="" />
              Identity verified  <img src="/images/shape_star.svg" alt="" className='shape_star' />
              256 reviews</p>
          </div>
        </div>
      </section>
      <section className='psychic_details2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-7 pe-md-5'>
              <div className='psychic_details2_left'>
                <h2>Tina W.</h2>
                <ul className='psychic_details2_ul'>
                  <li><img src="/images/readingtype.svg" alt="" /> Love, Career, Life Path, Money</li>
                  <li><img src="/images/abilities-icon.svg" alt="" /> Empath, Medium, Clairvoyant</li>
                  <li><img src="/images/type_icon.svg" alt="" /> Straightforward</li>
                </ul>
                <p>Tina discovered her abilities at an early age and has been reading professionally for over 30 years. Through vibrations, energies, Spiritual Guides, feelings, moods, sensations, and visions, she can connect with her callers. She uses her knowledge of Tarot Cards, Oracle Cards, I-Ching, Numerology, Pendulum, and Astrology, to receive validations during the reading. </p>
                <p>As a Channeling, Clairaudient, Clairsentient, Clairvoyant, Medium, and Empath Psychic, she can help the callers tap into their spirit, solve their problems, and find peace of mind. She aims to be compassionate and empathetic. Her experience allows her to provide guidance on destiny, life path, love, relationships, dream analysis, and career. “I hope that my callers can solve their problems and receive peace of mind.”</p>
                <h3>Psychic Tools</h3>
                <ul className='psychic_details2_ul2'>
                  <li><img src="/images/tarotcards.svg" alt="" /> Tarot Cards</li>
                  <li><img src="/images/pendulum.svg" alt="" /> Pendulum</li>
                  <li><img src="/images/astrology.svg" alt="" /> Astrology</li>
                  <li><img src="/images/crystals2-icon.svg" alt="" /> Crystals</li>
                  <li><img src="/images/iching_icon.svg" alt="" /> I-Ching</li>
                  <li><img src="/images/vector-icon.svg" alt="" /> Oracle Cards</li>
                  <li><img src="/images/numerology-icon.svg" alt="" /> Numerology</li>
                  <li><img src="/images/vector_icon1.svg" alt="" /> No Tools (Tool-Free)</li>
                </ul>
                <div className='btn_profesa'>
                  <a href=''>Get Profesa+ and Save</a></div>
              </div>
            </div>
            <div className='col-12 col-md-5'>
              <PsychicCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index
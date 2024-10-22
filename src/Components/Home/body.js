import React, { Fragment } from 'react';
import './body.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Body() {
  const cardDatas = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1",
      image_head: "/assets/images/caramel_cappuccino.jpg",
      logoImg: '/assets/images/cappuccino.webp',
      chennal:'Cappuccino',
      otherImgs: [{img:'/assets/images/cappuccino1.webp',img1:'/assets/images/cappuccino2.webp',img2: '/assets/images/cappuccino3.webp'}]
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2",
      image_head: "/assets/images/caramel_cappuccino.jpg",
      logoImg: '/assets/images/cappuccino.webp',
      chennal:'Cappuccino1',
      otherImgs: [{img:'/assets/images/cappuccino1.webp',img1:'/assets/images/cappuccino2.webp',img2: '/assets/images/cappuccino3.webp'}]
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3",
      image_head: "/assets/images/caramel_cappuccino.jpg",
      logoImg: '/assets/images/cappuccino.webp',
      chennal:'Cappuccino2',
      otherImgs: [{img:'/assets/images/cappuccino1.webp',img1:'/assets/images/cappuccino2.webp',img2: '/assets/images/cappuccino3.webp'}]
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4",
      image_head: "/assets/images/caramel_cappuccino.jpg",
      logoImg: '/assets/images/cappuccino.webp',
      chennal:'Cappuccino3',
      otherImgs: [{img:'/assets/images/cappuccino1.webp',img1:'/assets/images/cappuccino2.webp',img2: '/assets/images/cappuccino3.webp'}]
    },
  ];

  return (
    <Fragment>
    <h2>Top blends this month</h2>
    <section className="articles">
      <div className="article-wrapper">
        {cardDatas.map((item) => {
          return (
            <article key={item.id}>
              <figure>
                <img src={item.image_head} alt='coffee' width='auto' height='15rem'/>
              </figure>
              <div className="article-body">
                <div className='img_box'>
                  <img src={item.logoImg} alt='logo'/>
                  <div className="img_box2">
                  <h3>{item.chennal}</h3>
                  <p>@caramelcappuccino</p>
                  </div>
                </div>
                {item.otherImgs.map(img=>{
                  return(
                <div className='row'>
                    <div className='col-4'>
                      Favorites
                      $5,000
                      <div className='inner-img'>
                      <figure>
                      <img src={img.img} alt='coffee' width='auto' />
                      </figure>
                      </div>
                    </div>
                    <div className='col-4'>
                      Followers
                      1,250
                      <img src={img.img1} alt='coffee' width='auto' />
                    </div>
                    <div className='col-4'>
                    FOLLOW
                    <img src={img.img} alt='coffee' width='auto' />
                    </div>
                  </div>
                )})}
              </div>
            </article>
          );
        })}
      </div>
    </section>
    </Fragment>
  );
}

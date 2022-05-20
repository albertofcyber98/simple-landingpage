import React from 'react'
import Header from 'parts/Header'
import Section from 'elements/Section'
import heroImage from 'assets/images/hero-image.png'
import Fade from 'react-reveal/Fade';
import Card from 'elements/Card';
import Client from 'parts/Client';
import Feature from 'parts/Feature';

import FeatureTile01 from 'assets/images/feature-tile-icon-01.svg';
import FeatureTile02 from 'assets/images/feature-tile-icon-02.svg';
import FeatureTile03 from 'assets/images/feature-tile-icon-03.svg';
import List from 'elements/List';
import Button from 'elements/Button';
import Footer from 'parts/Footer';

export default function Homepage() {
  const features = [
    {
    imgSrc: FeatureTile01,
    imgAlt: "Feature tile icon 01",
    title: "App System",
    description: "Sistem pada aplikasi yang kami buat menyesuaikan dengan tingkat kebutuhan pelanggan."
  },{
    imgSrc: FeatureTile02,
    imgAlt: "Feature tile icon 02",
    title: "Customer Service",
    description: "Pelanggan dapat melaporkan jika ada aplikasi yang bermasalah. Karena kami ada 24 jam."
  },{
    imgSrc: FeatureTile03,
    imgAlt: "Feature tile icon 03",
    title: "Warranty",
    description: "Kami memberikan garansi aplikasi selama 1 tahun jika terjadi masalah."
  }
  ]
  const listPricing = [
    {
      price: 40,
      currencySymbol: "$",
      description: "Simple App",
      features: [
        { isChecked: true, content: "Code" },
        { isChecked: true, content: "Use Case" },
        { isChecked: true, content: "ERD" },
        { isChecked: false, content: "UI/UX Design" },
        { isChecked: false, content: "Hosting + Domain" },
        { isChecked: false, content: "Module"},
      ]
    },
    {
      price: 70,
      currencySymbol: "$",
      description: "Middle App",
      features: [
        { isChecked: true, content: "Code" },
        { isChecked: true, content: "UI/UX Design" },
        { isChecked: true, content: "Use Case" },
        { isChecked: false, content: "ERD" },
        { isChecked: false, content: "Hosting + Domain" },
        { isChecked: false, content: "Module"},
      ]
    },
    {
      price: 120,
      currencySymbol: "$",
      description: "Complex App",
      features: [
        { isChecked: true, content: "Use Case" },
        { isChecked: true, content: "ERD" },
        { isChecked: true, content: "UI/UX Design" },
        { isChecked: true, content: "Code" },
        { isChecked: true, content: "Hosting + Domain" },
        { isChecked: true, content: "Module"},
      ]
    }
  ]
  return (
      <div className='body-wrap'>
      <Header />
      <main className='site-content'>
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
						<div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>  
                  <h1 className="mt-0 mb-16">
                    Welcome on Our Website
                  </h1>
                </Fade>
								<div className="container-xs">
                  <Fade bottom delay={800}>
                    <p className="mt-0 mb-32" >
                      The services we offer are cheaper with the best quality. Customer satisfaction is our goal
                    </p>
                  </Fade>
								</div>
							</div>
							<div
								className="hero-figure illustration-element-01"
							>
                <Fade bottom delay={1100}>
                  <img
                    className="has-shadow"
                    src={heroImage}
                    alt="Hero"
                    width="896"
                    height="504"
                  />
                </Fade>
							</div>
						</div>
					</div>
        </Section>
        <Client />
        <Section className="features-tiles">
          <div className="container">
						<div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {
                  features.map((feature, index) => (
                    <Feature key={index} delayInMS={1800} data={feature}></Feature>
                  ))
                }
              </div>
            </div>
          </div>
        </Section>
        <Section className='pricing'>
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider" >
              <div className="section-header center-content">
                <div className="container-xs">
                  <Fade bottom delay={2000}>
                    <h2 className="mt-0 mb-16">
                    Paket yang kami sediakan
                    </h2>
                    <p className="m-0">
                      Harga yang kami tawarkan sesuai dengan produk yang kami berikan. Hubungi kami jika anda memiliki permintaan tersendiri
                    </p>
                  </Fade>
                </div>
              </div>
              <Fade bottom delay={2300}>
                <div className="tiles-wrap">
                  {
                    listPricing.map((list, index) => <Card hasShadow>
                        <div class="pricing-item-content">
                        <div class="pricing-item-header pb-24 mb-24" >
                          <div class="pricing-item-price mb-4" >
                            <span class="pricing-item-price-currency h2">{list.currencySymbol}</span>
                            <span class="pricing-item-price-amount h1 pricing-switchable"
                              data-pricing-monthly="54"
                              data-pricing-yearly="47"
                              >{list.price}</span
                            >
                          </div>
                          <div
                            class="text-xs text-color-low"
                          >
                            {list.description}
                          </div>
                        </div>
                        <div
                          class="pricing-item-features mb-40"
                        >
                          <div
                            class="pricing-item-features-title h6 text-xs text-color-high mb-24"
                          >
                            What’s included
                          </div>
                          <List data={list.features} isSmall className="pricing-item-features-list mb-32"></List>
                        </div>
                      </div>
                      <div class="pricing-item-cta mb-8">
                        <Button isPrimary isBlock>Start</Button>
                      </div>
                    </Card>
                    )
                  }
                </div>
              </Fade>
            </div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </div>
  )
}

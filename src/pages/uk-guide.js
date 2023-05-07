import * as React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

const ukGuide = () => {
  return (
    <div>
      <Header></Header>
      <div id="top">
        <h1 class="work_title">Guide to the UK (for Americans)</h1>
      </div>
      <p>Welcome to the United Kingdom!</p>
      <p>
        Use this handy page to give you information about currency, exchange
        rates, travel, and more! Bookmark this page if you need to come back and
        check something.
      </p>
      <p>Check out the links below to jump to a section of the page.</p>

      <p>
        <a href="#FlyingToUK">Flying to the UK</a>
      </p>
      <p>
        <a href="#CurrencyExchange">Currency and Exchange Rates</a>
      </p>
      <p>
        <a href="#Culture">Culture</a>
      </p>
      <p>
        <a href="#Travel">Travel</a>
      </p>
      <p>
        <a href="#London">London</a>
      </p>

      <div id="FlyingToUK">
        <h2>Flying to the UK</h2>
        <p>
          Depending on which airport you fly from (Nashville or Atlanta), you can
          fly with either:
        </p>
        <ul>
          <li>
            <a href="https://www.britishairways.com/travel/home/public/en_gb">
              British Airways
            </a>
          </li>
          <li>
            <a href="https://www.virginatlantic.com/">Virgin Atlantic</a>
          </li>
        </ul>

        <p>
          I have flown with both airlines plenty of times, and my preference would
          be Virgin Atlantic. However, Virgin Atlantic do not fly from Nashville,
          the nearest airport would be Atlanta.
        </p>

        <p>
          If you fly with Virgin Atlantic, you’ll arrive in Heathrow Terminal 3.
          If you fly with British Airways, you’ll arrive in Heathrow Terminal 5.
        </p>

        <p>
          Both terminals are near a London Underground station. If you are
          bringing heavy or lots of baggage, it might be worth getting a taxi to
          your accommodation. Double check if your hotel offers a shuttle bus
          service to and from the airport.
        </p>
        <p>
          <a href="#top">Return to top</a>
        </p>
      </div>
      <div id="CurrencyExchange">
        <h2>Currency and exchange rates</h2>
        <p>
          If you want to see the current exchange rate of dollars to pounds, click{" "}
          <a href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=GBP">
            here
          </a>
          .
        </p>

        <p>
          But generally speaking, you’ll find that things might be a little more
          expensive in the UK than in the USA.
        </p>

        <p>
          The UK is mostly a cashless society, contactless payments are the norm
          when paying at restaurants, transport, groceries etc. So it’s highly
          recommended that you have a card that:
        </p>
        <ul>
          <li>Supports contactless payments (NFC)</li>
          <li>Doesn’t charge you extra when paying in a foreign currency</li>
          <li>
            Easy access to turn the card off/frozen if you lose it (through a
            mobile application)
          </li>
        </ul>

        <p>
          Since the UK is moving away from cash, you honestly won't need to bring
          a lot of cash with you. Doesn't hurt to bring some just in case.
        </p>

        <p>
          When I travel, I tend to use my{" "}
          <a href="https://www.revolut.com">Revolut</a> card. I treat it as a
          reloadable card so I don’t need to worry about it too much should
          anything happen to it (plus the benefits of the premium plan are useful
          if you travel internationally a lot).
        </p>

        <p>Revolut is free to sign up and use.</p>

        <p>
          <a href="#top">Return to top</a>
        </p>
      </div>

      <div id="Culture">
        <h2>Culture</h2>
        <p>
          There are a few important things to keep in mind when it comes to
          British culture:
        </p>
        <ul>
          <li>We keep ourselves to ourselves.</li>
          <li>We don't talk to random strangers on the street.</li>
          <li>Alcohol is a big part of UK culture (sadly)</li>
          <li>Banter is common among friends.</li>
          <li>Tipping at restaurants etc is not expected.</li>
        </ul>

        <p>
          British culture does share some similarities to American culture, with
          some minor differences.
        </p>
        <p>
          We don't live in our cars for one, we tend to get out and walk more (so
          this does mean we don't have drive though ATMs or pharmacies). We also
          rely on public transport such as trains and buses.
        </p>
        <p>
          The Royal Family is also a part of British culture. From afternoon tea,
          to Corgis. It's important to note that the Royal Family isn't involved
          in British politics. They remain neutral in politics.
        </p>
        <p>
          <a href="#top">Return to top</a>
        </p>
      </div>

      <div id="Travel">
        <h2>Travel</h2>
        <h3>London</h3>
        <p>
          Getting around London might seem daunting, but after reading this
          section, it’ll be an easier experience. Also, you don’t need to hire a
          car.
        </p>

        <p>
          First, visit the <a href="https://tfl.gov.uk">Transport for London</a>{" "}
          website. This will give you information of the different ways to get
          around London (such as the Tube, overground rail, bus, and river), as
          well as the status and updates of services.
        </p>

        <p>
          There are also a few{" "}
          <a href="https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/visitor-centres?intcmp=1734">
            visitor centres
          </a>{" "}
          in case you need advice.
        </p>

        <p>
          <b>Paying for TfL services</b>
        </p>
        <p>
          Majority of passengers will use a contactless bank card or Oyster card.
          If you require an Oyster card (or just prefer one), you can purchase a{" "}
          <a href="https://tfl.gov.uk/travel-information/visiting-london/visitor-oyster-card">
            visitor card
          </a>
          . This card can be topped up if you run low on credit.
        </p>

        <p>
          It’s very important to remember that{" "}
          <b>
            <u>
              you cannot use cash to pay for TfL services! This includes the bus!
            </u>
          </b>
        </p>

        <p>
          <b>Using TfL services and etiquette</b>
        </p>
        <p>General advice to using TfL services would be:</p>
        <ul>
          <li>
            If you’re using an escalator, <b>STAND ON THE RIGHT.</b> The left hand
            side should be kept free for passengers in a hurry.
          </li>
          <li>Let people off the train/bus etc first, then board.</li>
          <li>
            When waiting for the next underground train, stand behind the yellow
            line.
          </li>
          <li>Check your surroundings.</li>
          <li>No need to rush, underground trains arrive very frequently.</li>
          <li>
            When exiting an Underground station, make sure you use the same card
            you used at the start. Your card will then be charged for the trip.
          </li>
        </ul>

        <p>
          <b>The London Underground</b>
        </p>
        <p>
          One of the best ways to get around London! Fast, frequent and
          affordable.
        </p>

        <p>
          If you’re visiting London, chances are that you’ll use the Underground
          as your main way of getting around London.
        </p>

        <p>
          To use the Underground, use a contactless bank card or Oyster card at
          the gates (there will be a yellow pad to use your card for). When you
          exit the Underground, use the <b>same card</b> at the gate to complete
          your journey. Your card will then be charged for the journey that was
          made.
        </p>

        <p>
          View the <a href="https://tfl.gov.uk/modes/tube/">TfL page</a> for more
          information.
        </p>

        <p>
          <b>Navigating around London</b>
        </p>
        <p>
          Need a map? You can download one from the TfL website{" "}
          <a href="https://tfl.gov.uk/travel-information/visiting-london/getting-around-london/visitor-maps?intcmp=28170">
            here
          </a>
          .
        </p>

        <p>
          All Underground stations will have maps and platforms will have a map of
          where the train goes on the wall of the station.
        </p>

        <p>
          If you get lost, don’t panic! Trains on the Underground arrive
          frequently, so you can always go back to where you were without any
          issues.
        </p>

        <p>
          If you have an iOS or Android device, you can download a variety of
          mobile applications to make getting around London easier.
        </p>

        <ul>
          <li>
            <a href="https://tfl.gov.uk/maps_/tfl-go?intcmp=63185">TfL Go</a> -
            the official mobile application by Transport for London.
          </li>
          <li>
            <a href="https://citymapper.com">Citymapper</a> - I personally use
            this when I’m travelling. Has support for London and other UK cities
            as well.
          </li>
        </ul>

        <h3 id="Outside of London">Outside of London</h3>
        <p>
          There is more to the UK than London! Best way to visit other towns and
          cities from London is by train.
        </p>

        <p>
          The best application to use for this is to use{" "}
          <a href="https://www.thetrainline.com/">Trainline</a>. You can buy
          tickets, see upcoming trains and more. Has a good mobile application as
          well (for iOS users, you can store your train ticket to your digital
          wallet for select routes).
        </p>

        <p>Looking for places to visit? Why not try…</p>
        <ul>
          <li>Birmingham</li>
          <li>Oxford</li>
          <li>Cambridge</li>
          <li>York</li>
          <li>Manchester</li>
          <li>Edinburgh</li>
        </ul>

        <p>
          All of these are accessible by train from London. I still wouldn’t
          recommend hiring a car. Most major cities will have public transport.
        </p>

        <p>
          <a href="#top">Return to top</a>
        </p>
      </div>

      <div id="London">
        <h2>London</h2>
        <p>
          This section is about London itself; things to see, places to eat, shop
          and more.
        </p>

        <h3 id="Staying in London">Staying in London</h3>
        <p>
          London is an incredibly expensive place to live in. There is a{" "}
          <a href="https://www.london.gov.uk//what-we-do/housing-and-land/tackling-londons-housing-crisis">
            housing crisis
          </a>{" "}
          and there is a{" "}
          <a href="https://www.theguardian.com/technology/2016/dec/01/airbnb-introduces-90-day-a-year-limit-for-london-hosts">
            90 day annual limit
          </a>{" "}
          for places on Airbnb. With this in mind, I suggest not staying in an
          Airbnb.
        </p>

        <p>I suggest staying in a Hotel as:</p>
        <ul>
          <li>Concierge can help with organising transport to the airport etc</li>
          <li>Security at the hotel is something that an Airbnb doesn’t have</li>
          <li>
            There is a risk that the Airbnb might be breaking the 90 day limit
          </li>
          <li>
            Hotels can be located in areas that are closer to major tourist spots.
          </li>
        </ul>

        <p>
          There are plenty of hotels in London to suit every budget, and more
          often than not you can find a deal online.
        </p>

        <p>
          When searching for a hotel, I suggest using Google Maps to visually see
          the locations of hotels, and set the budget of how much you wish to
          spend per night.
        </p>

        <p>
          Here is a quick{" "}
          <a href="https://www.visitlondon.com/where-to-stay/hotel/famous-london-hotels">
            list
          </a>{" "}
          of famous hotels in London if you want to visit their restaurants or
          facilities (or if you want to stay there)
        </p>

        <h3 id="Things to see and do">Things to see and do</h3>
        <p>
          London is <i>big</i> and has plenty to do and see. Here’s a quick list
          of places that I can recommend:
        </p>

        <ul>
          <li>
            The Shard - the tallest building in London! Offers great views and has
            a nice champagne bar at the top. The Shard is also home to the
            Shangri-La hotel.
          </li>
          <li>
            Kensington Gardens/Hyde Park - both of these parks are located next to
            each other. Great to see the Italian Gardens and have a walk
          </li>
          <li>
            Harrods - a famous department store. It’s got everything you could
            possibly want! Has a gift shop as well.
          </li>
          <li>
            Oxford Street - has lots of stores to go and look in. From Uniqlo to
            New Balance. Be careful of the American Candy stores you see there. A
            majority are not{" "}
            <a href="https://www.bbc.co.uk/news/uk-england-london-63236472">
              legitimate
            </a>{" "}
            and don’t pay{" "}
            <a href="https://www.bbc.co.uk/news/uk-england-london-62972510">
              tax
            </a>
            !
          </li>
          <li>Regent Street - famous for it’s upmarket stores.</li>
          <li>Carnaby Street - very trendy.</li>
          <li>Buckingham Palace - the famous palace of the Royal Family.</li>
          <li>
            Big Ben - it is under renovations at the moment but you should be able
            to see part of it.
          </li>
          <li>
            The London Eye - offers some great views! Good opportunity for photos
          </li>
          <li>Fortnum & Mason - Alexis has an addiction to their shortbread.</li>
          <li>
            The Harry Potter Shop at Platform 9 3/4 - the place to go if you like
            Harry Potter. Has a photo opportunity with a trolley going into a
            wall.
          </li>
          <li>
            Tower Bridge - you want this bridge, trust me. Not to be confused with
            London Bridge.
          </li>
          <li>Camden Market - lots of small stalls with a great vibe.</li>
          <li>
            Battersea Power Station - a former Victorian era power station, now a
            shopping area with restaurants. Recently opened after a 10 year
            renovation project.
          </li>
          <li>
            Liberty London - a high end department store in a Tudor era building.
          </li>
          <li>
            Covent Garden - well known spot in London offering theatres,
            restaurants, shops and the London Transport Museum.
          </li>
          <li>
            Royal Albert Hall - a famous Victorian era building known for hosting
            Proms classical music festival.
          </li>
          <li>Natural History Museum - Fantastic museum!</li>
          <li>Tate Modern - modern art museum</li>
          <li>
            Tate Britain - Like the Tate modern, but this features historic and
            contemporary art{" "}
          </li>
          <li>The National Gallery - a great art museum</li>
          <li>
            The design museum - a museum about contemporary design and innovation
          </li>
          <li>The Tower of London - go see the famous ravens!</li>
          <li>The London Zoo - pretty big zoo</li>
          <li>St. Paul's Cathedral - Churchyard and gardens</li>
          <li>
            Palace of Westminster - Seat of the UK Government. Guided tours are
            available.
          </li>
        </ul>

        <h3 id="Staying safe">Staying safe</h3>
        <p>
          Although a large majority of visitors to London aren’t victims of crime,
          it’s important to know that crime does happen in London.
        </p>

        <p>A few tips to ensure that you stay safe:</p>
        <ul>
          <li>Travel in a group if you can (especially at night)</li>
          <li>Plan your route ahead of time</li> <li>Check your surroundings</li>
          <li>Check to make sure you have your personal belongings</li>
          <li>Keep bags close to you, and avoid bringing large backpacks</li>
        </ul>

        <p>
          <a href="#top">Return to top</a>
        </p>
      </div>
      <Footer></Footer>
    </div>
    )
}

export default ukGuide

export function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Guide to the UK</title>
      <script
        src="https://kit.fontawesome.com/af67ca5a39.js"
        crossorigin="anonymous"
      ></script>
    </>
  )
}

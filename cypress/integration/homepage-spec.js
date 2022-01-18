describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.fixture('./parks.json')
      .then((allParks) => {
        cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=hBaA4GZsEXWedcUXnVCAvMCWhxf5u2Jp0z9gPDRy', {
          statusCode: 200,
          body: allParks
        })
        cy.visit('http://localhost:3000/#/')
      })
  })

  it('Header- app title & nav elements, click to go home functionality', () => {
    cy.get('header')
      .contains('h1', 'Where to Next?')
      .get('.home-icon')
      .get('.bucket-list-btn').contains('My Bucket List')
    .get(':nth-child(1) > a > .background-image').click()
      .get('h1').click()
      .url().should('eq', 'http://localhost:3000/#/')
    .get(':nth-child(1) > a > .background-image').click()
      .get('.home-icon').click()
      .url().should('eq', 'http://localhost:3000/#/')
  })

  it('ParkCards- display all on load', () => {
    cy.get('main')
      .get(':nth-child(1) > a > .background-image').should('have.css', 'background-image')
      .get(':nth-child(1) > a > .white-box').contains('h2', 'Alcatraz Island')
      .get('.homepage-add-btn').contains('+')
    .get(':nth-child(2) > a > .background-image').should('have.css', 'background-image')
      .get(':nth-child(2) > a > .white-box').contains('h2', 'Cabrillo National Monument')
      .get('.homepage-add-btn').contains('+')
  })

  it('Activity Form- appearance on load, updates with user interaction & filters ParkCards accordingly', () => {
    cy.get('form')
      .get('input').invoke('attr', 'placeholder').should('contain', 'What do you love to do?')
      .get('input').type('Biking').should('have.value', 'Biking')
      .type('{enter}')
      .get(':nth-child(1) > a > .white-box').contains('Alcatraz Island').should('not.exist')
      .get('.white-box').contains('h2', 'Cabrillo National Monument')
  })

  it('Activity Form sad path- user inputs jargon, all cards should still display', () => {
    cy.get('input').type('banana')
      .get(':nth-child(1) > a > .white-box').contains('Alcatraz Island')
      .get(':nth-child(2) > a > .white-box').contains('Cabrillo National Monument')
  })

  it('Park Page- display all info at unique URL based on clicked ParkCard', () => {
    cy.get(':nth-child(1) > a > .background-image').click()
      .url().should('include', 'alca')
      .get('.park-page-title').contains('Alcatraz Island')
      .get('.park-page-add-btn').contains('Add to Bucket List')
      .get('.activity-container > :nth-child(1)').contains('Food')
      .get('.activity-container > :nth-child(5)').contains('Bookstore and Park Store')
      .get('p').contains('Alcatraz reveals stories of American incarceration, justice, and our common humanity.')
      .get('.learn-more-btn').contains('Learn More')
      .get('img').should('have.attr', 'src').should('include', 'https://www.nps.gov/common/uploads/structured_data/5482A294-DB42-56E0-FCCCD03C986AE1DC.jpg')
  })

  it('Bucket List- add cards to bucket list, display bucket list, clickthrough to ParkPage', () => {
    cy.get(':nth-child(1) > a > .background-image').click()
      .get('.park-page-add-btn').click()
      .get('.bucket-list-btn').click()
      .get('.white-box').contains('Alcatraz Island')
      .click()
      .url().should('include', 'alca')
      .get('.park-page-title').contains('Alcatraz Island')
  })

  it('Bucket List sad path- any park can only be added once', () => {
    cy.get(':nth-child(1) > a > .background-image').click()
      .get('.park-page-add-btn').click()
      .get('.park-page-add-btn').click()
      .get('.park-page-add-btn').click()
      .get('.bucket-list-btn').click()
      .get('.park-container').should('have.length', '1')
  })

  it('Router sad path- invalid URL', () => {
    cy.visit('http://localhost:3000/#/banana')
      .get('.park-page').contains('404 - Invalid URL')
      .get('.error-home-icon').click()
      .url().should('eq', 'http://localhost:3000/#/')
  })
})

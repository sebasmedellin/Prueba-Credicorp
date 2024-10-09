describe('template spec', () => {

beforeEach (()  => {

  cy.visit('https://www.demoblaze.com/')

})



  it('Registro en Demozable', () => {

    cy.get('#signin2').click()
    cy.get('#sign-username').type('sebastian000', {timeout:10000, focus:true, force:true})
    cy.get('#sign-password').type('medellin000', {timeout:10000, focus:true, force:true})
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    cy.wait(4000)  

  })

it('Login en Demozable', () => {

  cy.get('#login2').click()
  cy.get('#loginusername').type('sebastian000', {timeout:10000, focus:true, force:true})
  cy.get('#loginpassword').type('medellin000', {timeout:10000, focus:true, force:true})
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
  cy.get('#nameofuser').should('be.visible') 
     
  })

  it('Agregar telefono al carrito de compras', () => {

    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click({force:true})
    cy.get('.col-sm-12 > .btn').click({Force:true})
    cy.get(':nth-child(4) > .nav-link').click({force:true})
    cy.get('.success > :nth-child(2)').should('contain', 'Samsung galaxy s6')


    
       
    })







})
/// <references types="cypress" />

describe('Panorra Website Tests', () => {
  // Pengaturan resolusi sebelum setiap tes dijalankan
  beforeEach(() => {
    cy.viewport(1280, 720); // Set resolusi menjadi 1280x720 (720p)
  });

  it('should log in and navigate through the website', function() {
    // Mengunjungi situs web
    cy.visit('https://panorra.com?test=true');
    
    // masukkan kode test
    cy.get('.form-control').type('kmzway88saa');
    cy.get('.modal-footer > .btn-primary').click();
    
    // button login clicked
    cy.get('.header-right > .btn-primary').click();
    
    // isi form
    cy.get('.mb-2 > .form-control').type('wildansholihan0@gmail.com');
    cy.get('.mb-4 > .form-control').type('wildansh0895');

    // click button login
    cy.get('.d-grid > .btn').click();

    cy.wait(5000); // Tunggu sementara sebelum memastikan page reload

    // Mengunjungi kembali URL dengan ?test=true
    cy.location('href').then((url) => {
      cy.visit(url + '?test=true');
    });

    // masukkan kode test

    cy.get('.modal-body > .form-control').type('kmzway88saa');
    cy.get('.modal-footer > .btn-primary').click();

    // profile click
    cy.get('.header-right__action > .btn-tranperent').click()
    cy.get(':nth-child(1) > .link-menu-setting').click()

    // post clicked
    cy.get('a > .w-100').click()

    // comment 5x menggunakan loop
    for (let i = 0; i < 23; i++) {
      cy.get('.detail__footer').type('a{enter}').should('be.visible');
      cy.wait(2000);
    }

  });
});
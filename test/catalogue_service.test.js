const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {

  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
      expect(catalogueService.checkBookByTitle("The Origin of Species")).toBe(true);
      expect(catalogueService.checkBookByTitle("The Chronicles of Narnia")).toBe(false); 
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the total number of books by a given title first letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
    });
  });

  describe("catalogueService.getQuantity", () => {
    test("returns the total number of books by title", () => {
      expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns array of books matching the given author", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
        { title: "2666", author: "Robert Bolaño", quantity: 17 },
        { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
      ]);
    });
  });

  describe("catalogueService.checkQuantity", () => {
    test("returns true if book's title and min quantity matched at same time", () => {
      expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
      expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
    });
  });

});

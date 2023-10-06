function calculateAveragePages(books) {
    // Utiliser map() pour créer un tableau de nombres de pages
    const pageNumbers = books.map(book => book.pages);
  
    // Utilisation de reduce() pour calculer le nombre total de pages
    const totalPages = pageNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    // Calculer la moyenne des nombres de pages
    const averagePages = pageNumbers.length ? totalPages / pageNumbers.length : 0;
  
    return averagePages;
  }
  
  
  const books = [
    { title: "The Murder of Roger Ackroyd", author: "Agatha Christie", pages: 288 },
    { title: "The Da Vinci Code", author: "Dan Brown", pages: 454 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", pages: 223 },
  ];
  
  const averagePages = calculateAveragePages(books);
  console.log("Average number of pages:", averagePages);
  
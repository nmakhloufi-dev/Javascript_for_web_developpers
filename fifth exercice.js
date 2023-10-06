function countPeopleByCity(peopleArray) {
    return peopleArray.reduce((cityCounts, person) => {
      const city = person.city;
      cityCounts[city] = (cityCounts[city] || 0) + 1;
      return cityCounts;
    }, {});
  }
  
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" },
    { name: "David", age: 48, city: "Washington" }
  ];
  
  const cityCounts = countPeopleByCity(people);
  console.log(cityCounts);

  
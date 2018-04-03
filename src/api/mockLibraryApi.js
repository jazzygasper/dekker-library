import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const library = [
  {
    id: "building-microservices",
    title: "Building Microservices",
    author: "Sam Newman",
    subject: "Microservices",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "http://shop.oreilly.com/product/0636920033158.do",
    coverUrl: "https://covers.oreillystatic.com/images/0636920033158/lrg.jpg"
  },
  {
    id: "cloud-native-java",
    title: "Cloud Native Java",
    author: "Josh Long",
    subject: "Java 8/9",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/d/cka/Cloud-Native-Java-Designing-Resilient-Systems-Foundry/1449374646",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/91Q6xp1Kd9L.jpg"
  },
  {
    id: "gamestorming-playbook-for-innovators",
    title: "Gamestorming: A playbook for innovators",
    author: "Dave Gray",
    subject: "Analysis Skills",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/Gamestorming-Playbook-Innovators-Rulebreakers-Changemakers/dp/0596804172/ref=sr_1_1?ie=UTF8&qid=1479812020&sr=8-1&keywords=gamestorming",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81L1vjwc7oL.jpg"
  },
  {
    id: "getting-mean-with-mongo",
    title: "Getting MEAN with Mongo, Express, Angular, and Node",
    author: "Simon Holmes",
    subject: "JavaScript",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/Getting-MEAN-Mongo-Express-Angular/dp/1617292036/ref=pd_rhf_eetyp_s_cp_6?_encoding=UTF8&pd_rd_i=1617292036&pd_rd_r=EY8ZEPBAKW5JJR2Y0ZXG&pd_rd_w=JCiDS&pd_rd_wg=IBQvb&psc=1&refRID=EY8ZEPBAKW5JJR2Y0ZXG",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81sPjexfGqL.jpg"
  },
  {
    id: "high-Performance-javascript",
    title: "High Performance Javascript",
    author: "Nichoals Zakas",
    subject: "JavaScript",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/Performance-JavaScript-Faster-Application-Interfaces/dp/059680279X",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71yYbKXZqeL.jpg"
  },
  {
    id: "java-se-8-for-the-really-impatient",
    title: "Java SE 8 for the Really Impatient",
    author: "Cay S. Horstmann",
    subject: "Java 8",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.com/Java-SE8-Really-Impatient-Course/dp/0321927761",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51okg3NkIgL._SX385_BO1,204,203,200_.jpg"
  },
  {
    id: "jira-7-admin",
    title: "JIRA 7 Administration Cookbook",
    author: "Patrick Li",
    subject: "JIRA",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/JIRA-7-Administration-Cookbook-Second/dp/1785888447/ref=sr_1_4?ie=UTF8&qbookId=1480323845&sr=8-4&keywords=jira",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51Z38qA38hL.jpg"
  },
  {
    id: "jira-essentials-third-edition",
    title: "JIRA Essentials - Third Edition",
    author: "Patrick Li",
    subject: "JIRA",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/JIRA-Essentials-Third-Patrick-Li-ebook/dp/B00WSUH7CO/ref=sr_1_1?ie=UTF8&qbookId=1480324064&sr=8-1&keywords=jira",
    coverUrl: "https://images-eu.ssl-images-amazon.com/images/I/51z4na950bL.jpg"
  },
  {
    id: "mastering-jira",
    title: "Mastering JIRA",
    author: "Ravi Sagar",
    subject: "JIRA",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/Mastering-JIRA-Ravi-Sagar/dp/1784396516/ref=sr_1_8?ie=UTF8&qbookId=1480323845&sr=8-8&keywords=jira",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81u8OgT5H7L.jpg"
  },
  {
    id: "pheonix-project-1",
    title: "Pheonix Project",
    author: "Gene Kim",
    subject: "DevOps",
    currentOwner: "Juan",
    checkOutDate: "02/03/2018",
    amazonLink: "https://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B00AZRBLHO",
    coverUrl: "https://images-eu.ssl-images-amazon.com/images/I/5170sr05QAL.jpg"
  },
  {
    id: "phenoix-project-2",
    title: "Pheonix Project",
    author: "Gene Kim",
    subject: "DevOps",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B00AZRBLHO",
    coverUrl: "https://images-eu.ssl-images-amazon.com/images/I/5170sr05QAL.jpg"
  },
  {
    id: "release-it",
    title: "Release it!",
    author: "Michael T. Nygard",
    subject: "Release / scale systems",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://pragprog.com/book/mnee/release-it",
    coverUrl: "https://imagery.pragprog.com/products/93/mnee.jpg?1298589747"
  },
  {
    id: "ydnJS-async-performance",
    title: "You Don't Know JS: Async & Performance",
    author: "Kyle Simpson",
    subject: "JavaScript",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/You-Dont-Know-JS-Performance/dp/1491904224/ref=sr_1_7?ie=UTF8&qbookId=1479475136&sr=8-7&keywords=you+don%27t+know+JS",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51Kb27EcNPL.jpg"
  },
  {
    id: "ydnJS-es6-beyond",
    title: "You Don't Know JS: ES6 & Beyond",
    author: "Kyle Simpson",
    subject: "JavaScript",
    currentOwner: "Aydin",
    checkOutDate: "01/03/2018",
    amazonLink: "https://www.amazon.co.uk/You-Dont-Know-JS-Beyond/dp/1491904240/ref=sr_1_2?ie=UTF8&qbookId=1479475136&sr=8-2&keywords=you+don%27t+know+JS",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41WeQ-Z4diL.jpg"
  },
  {
    id: "ydnJS-scope-closures",
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    subject: "JavaScript",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/You-Dont-Know-JS-Closures/dp/1449335586/ref=sr_1_3?ie=UTF8&qbookId=1479475136&sr=8-3&keywords=you+don%27t+know+JS",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51SqAlfxJiL.jpg"
  },
  {
    id: "ydnJS-this-object-prototypes",
    title: "You Don't Know JS: this & Object Prototypes",
    author: "Kyle Simpson",
    subject: "JavaScript",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/You-Dont-Know-JS-Prototypes/dp/1491904151/ref=sr_1_5?ie=UTF8&qbookId=1479475136&sr=8-5&keywords=you+don%27t+know+JS",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41MZdroe73L.jpg"
  },
  {
    id: "ydnJS-types-grammar",
    title: "You Don't Know JS: Types & Grammar",
    author: "Kyle Simpson",
    subject: "JavaScript",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/You-Dont-Know-JS-Grammar/dp/1491904194/ref=sr_1_6?ie=UTF8&qbookId=1479475136&sr=8-6&keywords=you+don%27t+know+JS",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51AV-M7-u9L.jpg"
  },
  {
    id: "ydnJS-up-going",
    title: "You Don't Know JS: Up & Going",
    author: "Kyle Simpson",
    subject: "JavaScript",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/You-Dont-Know-JS-Going/dp/1491924462/ref=sr_1_1?ie=UTF8&qbookId=1479475136&sr=8-1&keywords=you+don%27t+know+JS",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41FhogvNebL.jpg"
  },
  {
    id: "reactive-microservices-architecture",
    title: "Reactive Microservices Architecture",
    author: "Jonas Bońer",
    subject: "Microservices",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "",
    coverUrl: ""
  },
  {
    id: "mind-hacks",
    title: "Mind Hacks",
    author: "Tom Stanford & Matt Webb",
    subject: "Soft Skills",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "http://shop.oreilly.com/product/9780596007799.do",
    coverUrl: "https://covers.oreillystatic.com/images/9780596007799/lrg.jpg"
  },
  {
    id: "clean-code-handbook-angile-software-craftsmanship",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    subject: "Software Development",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_2?ie=UTF8&qid=1501159080&sr=8-2&keywords=clean+code+robert+c+martin",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71QQhJuMlPL.jpg"
  },
  {
    id: "startup-checklist",
    title: "The Startup Checklist",
    author: "David S. Rose",
    subject: "Business/Product",
    currentOwner: "",
    checkOutDate: "",
    amazonLink: "https://www.amazon.co.uk/Startup-Checklist-Scalable-High-growth-Business/dp/111916379X",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/518s5giDAhL.jpg"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (book) => {
  return replaceAll(book.title, ' ', '-');
};

class LibraryApi {
  static getAllLibraryBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], library));
      }, delay);
    });
  }

  static saveBook(book) {
    book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBookTitleLength = 1;
        if (book.title.length < minBookTitleLength) {
          reject(`Title must be at least ${minBookTitleLength} characters.`);
        }

        if (book.id) {
          const existingBookIndex = library.findIndex(a => a.id == book.id);
          library.splice(existingBookIndex, 1, book);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          book.id = generateId(book);
          book.watchHref = `http://www.pluralsight.com/courses/${book.id}`;
          library.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  static deleteBook(bookId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBookToDelete = library.findIndex(book => {
          book.id == bookId;
        });
        library.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default LibraryApi;

const textFilter = (data, os, type, memory,) => {
     if (os) {
          return data.filter((item => {
               return item.os.toLowerCase().includes(os.toLowerCase())
          }))
     }
     if (type) {
          return data.filter((item => {
               return item.type.toLowerCase().includes(type.toLowerCase())
          }))
     }
     if (memory) {
          return data.filter((item => {
               return item.memory.RAM.toLowerCase() === memory.toLowerCase()
          }))
     }
     return data
}

const sortFilter = (data, price, name) => {
     if (!Array.isArray(data)) {
          console.error("Invalid data. Expected an array.");
          return [];
     }
     if (price && price === "asc") {
          return data.sort((a, b) => {
               return a.price - b.price;
          })
     } else if (price && price === "desc") {
          return data.sort((a, b) => {
               return b.price - a.price;
          })
     }
     if (name && name === "asc") {
          return data.sort((a, b) => {
               return a.name.localeCompare(b.name);
          })
     } else if (name && name === "desc") {
          return data.sort((a, b) => {
               return b.name.localeCompare(a.name)
          })
     }
}

module.exports = { textFilter, sortFilter }
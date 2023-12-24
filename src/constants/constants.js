import {
     bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, phoneCategory, laptopCategory, televisionCategory, accessoriesCategory, personalCategory, watchCategory, tabletCategory, posterOne,
     posterTwo,
     posterThree,
     posterFour,
     posterFive,
     samsung,
     oneplus,
     oppo,
     apple,
     vivo,
     hp,
     readmi, realme
} from '../assets/imports'

export const swiperSlider = [
     bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive
]
export const posterSlider = [
     posterTwo,
     posterThree,
     posterFour,
     posterFive,
]
export const brands = [
     samsung,
     oneplus,
     oppo,
     apple,
     vivo,
     hp,
     readmi, realme
]
export const categories = [
     {
          image: phoneCategory,
          text: "Smart Phones",
          path: "/products"
     },

     {
          image: laptopCategory,
          text: "Laptops",
          path: "*"
     },

     {
          image: televisionCategory,
          text: "Televisions"
          , path: "*"
     },

     {
          image: accessoriesCategory,
          text: "Accessories"
          , path: "*"
     },
     {
          image: personalCategory,
          text: "Personal Care"
          , path: "*"
     },
     {
          image: watchCategory,
          text: "Smart Watchs"
          , path: "*"
     },
     {
          image: tabletCategory,
          text: "Tablets"
          , path: "*"
     },

]

export const filterByPrice = [
     {
          value: "",
          label: "Sort By Price"
     },
     {
          value: "asc",
          label: "Low to High"
     },
     {
          value: "desc",
          label: "High to Low"
     }
]
export const filterByName = [
     {
          value: "",
          label: "Sort By Name"
     },
     {
          value: "asc",
          label: "A to Z"
     },
     {
          value: "desc",
          label: "Z to A"
     }
]
export const filterByType = [
     {
          value: "",
          label: "Filter By Type"
     },
     {
          value: "QWERTY Phones",
          label: "QWERTY Phones"
     },
     {
          value: "Flip Phones",
          label: "Flip Phones"
     },
     {
          value: "SmartPhone",
          label: "SmartPhone"
     }
]
export const filterByProcessor = [
     {
          value: "",
          label: "Sort By Type"
     },
     {
          value: "Exynos",
          label: "Exynos"
     },
     {
          value: "Bionic",
          label: "Bionic"
     },
     {
          value: "Snapdragon",
          label: "Snapdragon"
     },
     {
          value: "Tensor",
          label: "Tensor"
     }
]
export const filterByMemoryRAM = [
     {
          value: "",
          label: "Filter By Memory"
     },
     {
          value: "8gb",
          label: "RAM 8GB"
     },
     {
          value: "6gb ",
          label: "RAM 6GB"
     },
     {
          value: "4gb",
          label: "RAM 4GB"
     }
]
export const filterByOS = [
     {
          value: "",
          label: "Filter By OS"
     },
     {
          value: "Android",
          label: "Android"
     },
     {
          value: "Funtouch OS ",
          label: "Funtouch OS"
     },
     {
          value: "iOS",
          label: "iOS"
     }
]

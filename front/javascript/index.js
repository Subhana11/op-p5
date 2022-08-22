//Create const to get all products from API
const productslist= document.getElementById("items");

//get API products from fetch method
fetch("http://localhost:3000/api/products")
    .then((Response) => Response.json())

//prodcuts is the response from API
    .then((products) => {
        for (let i=0; i< products.length; i++) {//length of table
            //to get the link of the product
            const productlink =document.createElement("a");
            productlink.setAttribute("href",`product.html?id=${products[i]._id}`);
            productslist.appendChild(productlink);//link is the child

            const productArticle = document.createElement("article");
            productlink.appendChild(productArticle);

            //get the image of the product
            const productImage =document.createElement("img");
            productImage.setAttribute("src",products[i].imageUrl);
            productImage.setAttribute("alt",products[i].altTxt);
            productArticle.appendChild(productImage);

            //get the h3 of the product
            const productName =document.createElement("h3");
            productName.classList.add("productName");
            productName.textContent =products[i].name;
            productArticle.appendChild(productName);

            //get the description of the product in paragraphe
            const productDescription = document.createElement("p");
            productDescription.classList.add("productDescription");
            productDescription.textContent =products[i].description;
            productArticle.appendChild(productDescription);

        }
    })

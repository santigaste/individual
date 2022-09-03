
let htmlContentToAppend = "";

function showCategoriesList(products){
    


    products.forEach(product => {
        htmlContentToAppend += `
        <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${product.name} ${product.currency}${product.cost}</h4>
                        <small class="text-muted">${product.soldCount} artículos</small>
                    </div>
                    <p class="mb-1">${product.description}</p>
                </div>
            </div>
        </div>
        `
    });

    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(AUTOS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showCategoriesList(resultObj.data.products);
        } else {
            console.log("error al cargar json")
        }
    });
});
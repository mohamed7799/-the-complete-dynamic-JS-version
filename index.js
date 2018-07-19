(function () {
    //variables
    let products = {
        books: [{
            Name: "Coders-at-Work",
            name: "Coders at Work",
            price: 20,
            Category: "book",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/Coders-at-Work-200x300.jpg",
            id: "book1"
        }, {
            Name: "Cracking-the-Coding-Interview",
            name: "Cracking the Coding Interview",
            price: 15,
            Category: "book",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/Cracking-the-Coding-Interview-200x300.jpg",
            id: "book2"
        }, {
            Name: "Cracking-the-Coding-Interview",
            name: "Cracking the Coding Interview",
            price: 15,
            Category: "book",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/Cracking-the-Coding-Interview-200x300.jpg",
            id: "book3"
        }, {
            Name: "Cracking-the-Coding-Interview",
            name: "Cracking the Coding Interview",
            price: 15,
            Category: "book",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/Cracking-the-Coding-Interview-200x300.jpg",
            id: "book4"
        }, {
            Name: "Cracking-the-Coding-Interview",
            name: "Cracking the Coding Interview",
            price: 15,
            Category: "book",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/Cracking-the-Coding-Interview-200x300.jpg",
            id: "book5"
        }],

        albums: [{
            Name: "Hyprid-theory",
            name: "Hyprid theory",
            price: 5,
            Category: "album",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/linkinpark-hyprid-theory.jpg",
            id: "album1"
        }, {
            Name: "Meteora",
            name: "Meteora",
            price: 7,
            Category: "album",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/linkinpark-meteora.jpg",
            id: "album2"
        }, {
            Name: "Meteora",
            name: "Meteora",
            price: 7,
            Category: "album",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/linkinpark-meteora.jpg",
            id: "album3"
        }, {
            Name: "Meteora",
            name: "Meteora",
            price: 7,
            Category: "album",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/linkinpark-meteora.jpg",
            id: "album4"
        }, {
            Name: "Meteora",
            name: "Meteora",
            price: 7,
            Category: "album",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/linkinpark-meteora.jpg",
            id: "album5"
        }, {
            Name: "Meteora",
            name: "Meteora",
            price: 7,
            Category: "album",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/linkinpark-meteora.jpg",
            id: "album6"
        }, {
            Name: "Meteora",
            name: "Meteora",
            price: 7,
            Category: "album",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/linkinpark-meteora.jpg",
            id: "album7"
        }]
        ,

        graphicCards: [{
            Name: "GTX1080",
            name: "GTX1080",
            price: 500,
            Category: "graphic-card",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/graphic-card.png",
            id: "graphic-card1"
        }, {
            Name: "GTX1080",
            name: "GTX1080",
            price: 500,
            Category: "graphic-card",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/graphic-card.png",
            id: "graphic-card2"
        }, {
            Name: "GTX1080",
            name: "GTX1080",
            price: 500,
            Category: "graphic-card",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/graphic-card.png",
            id: "graphic-card3"
        }, {
            Name: "GTX1080",
            name: "GTX1080",
            price: 500,
            Category: "graphic-card",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/graphic-card.png",
            id: "graphic-card4"
        }, {
            Name: "GTX1080",
            name: "GTX1080",
            price: 500,
            Category: "graphic-card",
            listOfSellingPoints: "reason 1, reason 2, reason 3, reason 4",
            pictureUrl: "images/graphic-card.png",
            id: "graphic-card5"
        }]
    }

    //functions
    function createItem(item) {
        return `<div id=${item.Name} class="${item.Category} product bounceInUp animated">
                    <div id=${item.id}>
                        <div class="picture">
                            <img src=${item.pictureUrl} alt="${item.Category} cover">
                        </div>
                        <hr class="line">
                        <div class="name">Name : ${item.name}</div>
                        <div class="category">Category : ${item.Category} </div>
                        <div class="price">Price : ${item.price}$ </div>
                        <div class="selling-points">List of selling points : ${item.listOfSellingPoints}</div>
                    </div>
                </div>`;
    }

    function addProducts(category) {
        let itemElement;
        let product = products[category];
        for (let i = 0; i < product.length; i++) {
            itemElement = createItem(product[i]);
            $('#content-area-js').append(itemElement);
        }
    }


    function fillDropDownMenu() {
        let list = Object.keys(products);
        for (let i = 0; i < list.length; i++) {
            $('#products-js').append('<option value=' + list[i] + '>' + list[i] + '</option>');
        }
        $('#products-js').append('<option value="showAll">ShowAll</option>');
    }

    //events

    //to select product
    $('#products-js').on('change', function () {
        let optionSelected = $(this).find("option:selected");
        let valueSelected = optionSelected.val();
        let list = Object.keys(products);
        if (valueSelected === 'showAll') {
            $('#content-area-js').empty();

            for (let i = 0; i < list.length; i++) {
                addProducts(list[i]);
            }
        }
        else {
            $('#content-area-js').empty();
            addProducts(valueSelected);
        }

    })

    //to search for a product

    $('#search').keyup(function () {
        let searchWord = $(this).val().toLowerCase();
        let items = $('.product');
        for (let i = 0; i < items.length; i++) {
            let itemName = $(items[i]).find('.name').text().toLowerCase();
            if (itemName.indexOf(searchWord) !== -1) {
                $(items[i]).css('display', 'block');
            }
            else {
                $(items[i]).css('display', 'none');
            }
        }
    })

    $('#search').click(function () {
        $(this).val('');
    })

    //to show the form
    $('#add-js').click(function (e) {
        $('.popup').css('display', 'flex');
        e.stopPropagation();
    })
    //to add a product
    $('#submit-js').click(function (e) {
        $('.popup').css('display', 'none');
        let item = $('form').serializeArray();
        let category = item[3].value;
        //get the data from the form
        let newItem = {};
        item.forEach(function (x) {
            newItem[x.name] = x.value;
        });
        newItem.Name=newItem.name.replace(" ","-");
        //add the item

        //if it`s in a existing category
        if (products.hasOwnProperty(`${category}s`)) {
            newItem.id=`${category}${products[`${category}s`].length+1}`;
            products[`${category}s`].push(newItem);
            $('#content-area-js').empty();
            addProducts(`${category}s`);
        }
        //if it`s a new category
        else {
            newItem.id=`${category}1`;
            products[`${newItem.Category}s`] = [newItem];
            $('#content-area-js').empty();
            $('#products-js').empty();
            fillDropDownMenu();
            addProducts(`${newItem.Category}s`);
        }


    })

    //to hide the form
    $(document).click(function () {
        $('.popup').css('display', 'none');
    })
    //to stop the form from refreshing the page
    $('.add-form').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
    })

    //the default is to show the books
    addProducts('books');
    fillDropDownMenu();
})();
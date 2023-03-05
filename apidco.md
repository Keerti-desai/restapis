# api for all product categories
> http://localhost:9000/cart

# api for all products list
>  http://localhost:9000/productlist


* Page 2
# product data wrt to product category
> http://localhost:9000/productlist?categoryid=Nykaa Cosmetics



# filter on basis of category + brand
> http://localhost:9000/productlist/Nykaa Cosmetics?brand=Lakme
>http://localhost:9000/productlist/Liquid Lipstick?brand=Maybelline


# filter on basis of category + price
http://localhost:9000/productlist/Face Masks?price=999&brand=Hydrating masks
# filter on basis of category + price
<!-- > http://localhost:3000/productlist/Face Masks?price=999 -->


# filter on basis of category + description + brand
>http://localhost:9000/productlist/Lipstick?description=SUGARSmudges&brand=Elle 18
(in this i should add one differnt brand)

//# filter on basis of category + product rating

* Page 3
# Details of the product
> "http://localhost:9000/product-detail/Livinguard Face Mask"
>"http://localhost:9000/product-detail/FFP2 S Mask"
"http://localhost:9000/product-detail/"

# view order
// http://localhost:9000/viewOrder

# placr order(POST)
//http://localhost:9000/updateOrder/5701 - order updated
  {
    "id": 5701,
    "product": "Nykaa Get Set Matte!",
    "name": "",
    "email": "kirti@gmail.com",
    "cost": 349,
    "phone": "3948373637",
    "address": "mumbai wns address",
    "order": "Nykaa Get Set Matte!"
  }



# Add product to wishlist
> http://localhost:9500/addToWishlist

# List of wishlist products
> http://localhost:9500/myWishList/charu23@gmail.com

# Place Order
> http://localhost:9500/placeOrder

* Page 4
# List of all orders
> http://localhost:9500/viewOrder

# List of all orders wrt to mail
> http://localhost:9500/viewOrder?email=sam@gmail.com

# Update the order
> http://localhost:9500/updateOrder/1

# Delete the order
> http://localhost:9500/deleteOrder/63c15521ad5746bd90cb176f



0.0.0.0/0

test test123

vgK4rxzMwv11j7hV


mongodb+srv://<test123>:<vgK4rxzMwv11j7hV>@cluster0.sxpkhgk.mongodb.net/?retryWrites=true&w=majority

mongodb+srv://<username>:<password>@cluster0.sxpkhgk.mongodb.net/?retryWrites=true&w=majority

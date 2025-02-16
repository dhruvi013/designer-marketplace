import React from "react";

const ShopByCategory = () => {
  const categories = {
    Women: [
      { name: "Saree", image: "https://photo.7ya.ru/ph/2013/9/9/1378759949453.jpg" },
      { name: "Kurtas", image: "https://i.pinimg.com/736x/17/15/c4/1715c49c2be87c5024425bab6fee7d09.jpg" },
      { name: "Lehenga", image: "https://www.kollybollyethnics.com/image/catalog/data/Sarees/Lehengas/Bridal%20lehenga/26Nov/bewildering-orange-art-silk-lehenga-choli.jpg" },
      { name: "Gown", image: "https://avatars.mds.yandex.net/i?id=ffc84176a9b7c764aefa2593344b363a_l-4009035-images-thumbs&ref=rim&n=13&w=672&h=725" },
      { name: "Jeans", image: "https://us03-imgcdn.ymcart.com/75019/2023/04/20/1/d/1d7badbd6bafce1c.png?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_500,h_500" },
      { name: "Top", image: "https://farm1.staticflickr.com/752/21667606332_6c6edc3b24_o.jpg" },
      { name: "Shorts", image: "https://avatars.mds.yandex.net/i?id=55316eb14d20a3773561a61fbbede0b54aab31ad-9806046-images-thumbs&n=13" },
      { name: "Bodycon", image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/26861290/2024/1/10/274430dc-3c02-4c45-af19-0028e02986171704889548982StyleCastMaroonBodyconDress1.jpg" },

    ],
    Men: [
      { name: "Sherwani", image: "https://www.textileexport.in/media/mceu_25458221331689939579870.jpg" },
      { name: "Shirts", image: "https://bananaclub.co.in/cdn/shop/files/BlackLeafEmbroideryShirt_1.jpg?v=1738819595&width=500" },
      { name: "Blazer", image: "https://imagescdn.louisphilippe.com/img/app/product/3/39755988-15864808.jpg?auto=format&w=390" },
      { name: "T-shirts", image: "https://images.bewakoof.com/t320/men-s-skipper-blue-hulk-graphic-printed-t-shirt-659595-1738821954-1.jpg" },
    ],
    Kids: [
      { name: "Frocks", image: "https://i.pinimg.com/736x/26/b0/47/26b047d8305e53a352479ec99e314863.jpg" },
      { name: "Ethnic Wear", image: "https://www.fayonkids.com/cdn/shop/products/fayon-kids-red-bandhej-kurta-off-white-salwar-for-boys-37173292630272.jpg?v=1655208174&width=533" },
      { name: "Casuals", image: "https://totdot.in/cdn/shop/files/undefined_-_Imgur_22.jpg?v=1729247226&width=613" },
      { name: "Party Wear", image: "https://www.okboss.co.in/assets/img/home/boysrow1/kids%20musterd%20jacket%20with%20white%20tshirt%20party%20wear%20dress.jpg" },
    ],
  };

  return (
    <div className="py-20 bg-[#f9f9f9] text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Shop by Category</h2>
      <p className="text-lg text-gray-600 mb-14">Discover a variety of categories tailored to your style.</p>

      {Object.entries(categories).map(([category, items], index) => (
        <div key={index} className="mb-20">
          <h3 className="text-4xl font-semibold text-gray-800 mb-10">{category}</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg w-64 h-96 overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black/50 px-2 py-1 rounded">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopByCategory;

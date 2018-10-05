const Product = require('../models/product');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true })

const products = [
    new Product({
        imagePath: 'https://wallpaperstock.net/devil-may-cry-5-orange-wallpapers_32355_1600x1200.jpg',
        title: 'Devil May Cry 5',
        description: 'Awesome Game!!',
        price: 16
    }),
    new Product({
        imagePath: 'https://www.geek.com/wp-content/uploads/2018/02/Call-of-Duty-Black-Ops-4.jpg',
        title: 'Call Of Duty',
        description: 'Call Of Duty - Black Ops',
        price: 20
    }),
    new Product({
        imagePath: 'https://www.actugaming.net/wp-content/uploads/2016/03/bloodborne1.jpg',
        title: 'Bloodborne',
        description: 'Bloodborne',
        price: 10
    }),
    new Product({
        imagePath: 'https://s.isanook.com/ga/0/ud/193/965265/01.jpg',
        title: 'Rise of Incarnates',
        description: 'Rise of Incarnates',
        price: 12
    }),
    new Product({
        imagePath: 'https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_for_honor_07_2560x1440.jpg&height=450&width=800&fill-to-fit',
        title: 'For Honor',
        description: 'For Honor',
        price: 15
    }),
    new Product({
        imagePath: 'https://media.contentapi.ea.com/content/dam/gin/images/2017/01/crysis-2-keyart-min.jpg.adapt.crop191x100.628p.jpg',
        title: 'Crysis',
        description: 'Awesome Game!!',
        price: 23
    }),
    new Product({
        imagePath: 'https://gearnuke.com/wp-content/uploads/2018/02/splinter-cell-xbox-one.jpg',
        title: 'Splinter Cell',
        description: 'Splinter Cell - Conviction',
        price: 18
    }),
];

var done = 0;
for(var i = 0; i < products.length; i++) {
    products[i].save(function() {
        done++;
        if(done === products.length) {
            exit();
        }     
    });
}

function exit() {
    mongoose.disconnect();
}
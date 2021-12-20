const DATA = [
    {
        id:1,
        title:'iPhone 11',
        price: '87,999',
        img: 'https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg',
        desc:"Apple iPhone 11 comes with 6.1 inches Liquid Retina IPS LCD screen. It has a classical Apple iPhone notch design. The back camera is of Dual 12+12 MP with powerful image processing capability and Ultra HD 4K video recording. The front camera is of Dual 12 MP and SL 3D camera. Apple iPhone 11 comes with 3110 mAh battery with 18W fast charging solution. It has 4 GB RAM, up to 2.65 GHz hexa-core CPU and Apple GPU. It is powered by Apple A13 Bionic (7 nm+) chipset. The device comes with 64, 128 or 256 GB internal storage. There is no fingerprint sensor in this device."
    },
    {
        id:9,
        title:'iPhone 12 Pro-Max',
        price: '161,999',
        img: 'https://www.bdprice.com.bd/wp-content/uploads/2020/07/Apple-iPhone-12-Pro-Max.jpg',
        desc:"Apple iPhone 12 Pro Max comes with a 6.7 inches Super Retina XDR OLED screen which is one of its main specialties. It has a classical Apple iPhone notch design. The back camera is of quad 12+12+12 MP + TOF 3D with powerful image processing capability and Ultra HD 4K video recording. The front one is of Dual 12 MP and SL 3D camera. Apple iPhone 12 Pro Max comes with Li-ion battery with 18W fast charging solution. It has 6 GB RAM, Hexa-core CPU and Apple GPU. It is powered by a 5 nm Apple A14 Bionic chipset. The device comes with 128, 256 or 512 GB internal storage."
    },
    {
        id:15,
        title:'Honor 70 Pro',
        price: 'BDT. coming soon',
        img: 'https://www.mobiledokan.co/wp-content/uploads/2021/10/Honor-60-Pro-Bright-Black.jpg',
        desc:"Honor 70 Pro will be launched in December 2021. Firstly, the display of 70 Pro is a 6.78-inch OLED panel with 1200 x 2652 pixels resolution. Secondly, the display is protected with unknown glass. 70 Pro phone has a triple-camera setup on the back. This formation consists of 108MP wide, 50MP ultrawide, 2MP macro cameras. It has a 50MP selfie camera inside the punch hole of the display. On the other hand, it can support up to microSDXC and it has a dual nano-SIM card slot."
    },
    {
        id:3,
        title:'iPhone 12 Mini',
        price: '109,999',
        img: 'https://www.mobiledokan.co/wp-content/uploads/2020/10/Apple-iPhone-12-Mini-Green.jpg',
        desc:"The Apple iPhone 12 Mini phone body dimensions are 131.5 x 64.2 x 7.4 mm (5.18 x 2.53 x 0.29 in). It is powered by the Android 10 platform with Apple A14 Bionic (5 nm) chipset. The primary camera is 12 MP, 12 MP (main) that supports autofocus. And the secondary camera is 12 MP (secondary). It has a Face ID, accelerometer, gyro, proximity, compass, barometer sensors."
    },
    {
        id:4,
        title:'iPhone 10',
        price: '83,999',
        img: 'https://mobiledokan.com.bd/wp-content/uploads/2020/10/Apple-iPhone-X.jpg.webp',
        desc:"The Apple iPhone X (iPhone 10) has a dual-camera setup on the back. The primary camera is a 12 MP module that is reportedly 60% faster and 30% more efficient, the higher f/1.8 aperture that should let 50% more light, the new six-element camera lenses, and optical image stabilization.This sensor has a full focal length, which is 28mm, with the size of 1/3 inch and Phase Detection Auto Focus. And the secondary camera is a telephoto lens with a 2x optical zoom. Users can also choose between the h.264 and h.265 codec."
    },
    {
        id:2,
        title:'iPhone 11 Pro-Max',
        price: '129,999',
        img: 'https://www.mobiledokan.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-Max.jpg',
        desc:"Apple iPhone 11 Pro Max comes with a 6.5 inches Super Retina XDR OLED screen which is one of its main specialties. It has a classical Apple iPhone notch design. The back camera is of Triple 12+12+12 MP with powerful image processing capability and Ultra HD 4K video recording. The front camera is of Dual 12 MP and SL 3D camera. Apple iPhone 11 Pro Max comes with 3969 mAh battery with 18W fast charging solution. It has 4 GB RAM, up to 2.65 GHz Hexa-core CPU and Apple GPU. It is powered by Apple A13 Bionic (7 nm+) chipset. The device comes with 64, 256 or 512 GB internal storage. There is no fingerprint sensor in this phone."
    },
    {
        id:5,
        title:'OnePlus 7T',
        price: '54,990',
        img: 'https://www.mobiledokan.com/wp-content/uploads/2020/04/OnePlus-7T-silver.jpg',
        desc:"OnePlus 7T comes with 6.55 inches Full HD+ Fluid AMOLED screen. It has a Full-View waterdrop notch design. The back camera is of triple 48+12+16 MP with PDAF, OIS, 2x optical zoom, telephoto, dual-LED flash etc. and Ultra HD video recording, EIS. The front camera is of 16 Megapixel. OnePlus 7T comes with 3800 mAh battery with 30W fast charging. It has 8 GB RAM, up to 2.96 GHz octa-core CPU and Adreno 640 GPU. It is powered by Qualcomm Snapdragon 855+ (7 nm) chipset. The device comes with 128 or 256 GB internal storage and no MicroSD slot. There is an optical in-display fingerprint sensor in this phone."
    },
    {
        id:6,
        title:'Samsung Galaxy M21',
        price: '18,999',
        img: 'https://www.mobiledokan.com/wp-content/uploads/2020/03/Samsung-Galaxy-M21-Blue.jpg',
        desc:"Samsung Galaxy M21 comes with 6.4 inches Full HD+ Super AMOLED screen. It has a Full-View waterdrop notch design. The front side is protected by a 3rd generation Gorilla Glass. The back camera is of triple 48+8+5 MP with PDAF, LED flash, depth sensor, ultrawide etc. and UHD 4K video recording. The front camera is of 20 MP. Samsung Galaxy M21 comes with 6000 mAh huge battery with 15W fast charging. It has 4 or 6 GB RAM, 2.3 GHz octa-core CPU and Mali-G72 MP3 GPU. It is powered by Exynos 9611 (10nm) chipset. The device comes with 64 or 128 GB UFS 2.1 internal storage and dedicated MicroSD slot. There is a back-mounted fingerprint sensor in this phone."
    },
    {
        id:7,
        title:'Xiaomi Redmi Note 10',
        price: '22,999',
        img: 'https://www.mobiledokan.com/wp-content/uploads/2021/10/Xiaomi-Redmi-10-image.jpg',
        desc:"Xiaomi Redmi Note 10 comes with 6.43 inches Full HD+ Super AMOLED screen. It has a center punch-hole design on the front. The display is protected by a 3rd generation Gorilla Glass. The back camera is of quad 48+8+2+2 MP with PDAF, ultrawide, depth sensor, dedicated macro camera etc. and 4k Ultra HD video recording. The front camera is of 13 MP. Xiaomi Redmi Note 10 comes with 5000 mAh big battery with a 33W Fast Charging solution. It has 4 or 6 GB RAM, up to 2.2 GHz octa-core CPU and Adreno 612 GPU. It is powered by a Qualcomm Snapdragon 678 (11 nm) chipset. The phone comes with 64 or 128 GB internal storage and dedicated MicroSD slot. There is a side-mounted fingerprint sensor in this phone."
    },
    {
        id:8,
        title:'Realme 8 Pro',
        price: '27,990',
        img: 'https://www.notebookcheck.net/fileadmin/Notebooks/realme/8_Pro/4_zu_3_realme_8_PRo.jpg',
        desc:"Realme 8 Pro comes with 6.4 inches Full HD+ Super AMOLED screen. It has a Full-View left punch-hole design. The back camera is of quad 108+8+2+2 MP with PDAF, dedicated macro camera, depth sensor, ultrawide lens etc. and 4K video recording. The front camera is of 16 MP. Realme 8 Pro comes with 4500 mAh battery with 50W SuperDart Fast Charging. It has 8 GB RAM, up to 2.3 GHz octa-core CPU and Adreno 618 GPU. It is powered by a Qualcomm Snapdragon 720G (8 nm) chipset. The device comes with 128 GB internal storage and dedicated MicroSD slot. There is a in-display fingerprint sensor in this phone."
    },
    {
        id:10,
        title:'Xiaomi 12 Pro',
        price: 'BDT. coming soon',
        img: 'https://www.mobiledokan.co/wp-content/uploads/2021/03/Xiaomi-Mi-11X-Pro-Lunar-White.jpg',
        desc:"Made of glass front (Gorilla Glass Victus), ceramic back, aluminum frame, the mobile is 164.3 mm in height, 74.6 mm wide, and 8.5 mm thickness. It weighs 208 gm available.The colors are Black, Red & Silver. Being a sensor accelerometer, gyro, proximity, compass sensor. The Under-Display, Optical fingerprint runs quite accurately fast. Face unlock is correct.The company has launched the phone in 4 variants of 8GB/128GB, 8GB/256GB, 12GB/256GB & 12GB/512GB. In the case of gaming, graphics, and RAM are fairly good. Full HD-quality graphics games can be easily run and played quite smoothly."
    },
    {
        id:11,
        title:'Lenovo Legion Duel 3',
        price: 'BDT. coming soon',
        img: 'https://www.mobiledokan.co/wp-content/uploads/2020/07/Lenovo-Legion-Pro.jpg',
        desc:"The Lenovo Legion Duel 3 is now rumored in two variants (256/512GB/12/16GB RAM). Now, Lenovo Legion Duel 3’s Price is coming to Bangladesh. Lenovo Legion Duel 3 will be launched in December 2021. The Legion Duel 3 launched with the model number unknown. Firstly, Its dimensional measure is unknown and the weight is unknown grams. Secondly, the display of the Legion Duel 3 is a 6.92-inch AMOLED panel with 1080 x 2340 pixels resolution. The display is protecting from the unknown. Thirdly and most importantly, It is powered by Qualcomm SM8250 Snapdragon 888 and runs with Android 11. Moreover, it has up to an unknown CPU."
    },
    {
        id:12,
        title:'Oppo Find N',
        price: '110,000',
        img: 'https://www.mobiledokan.co/wp-content/uploads/2021/12/Oppo-Find-N.jpg',
        desc:"Oppo Find N 5G will be launched in 2021, December. The Find N launched with model number PEUM00. Firstly, Its dimensional measure is Unfolded: 132.6 x 140.2 x 8.0 mm, Folded: 132.6 x 73 x 15.9 mm and the weight is 275 grams. Secondly, the display of Find N 5G is a 7.1-inch Foldable LTPO AMOLED panel with 1792 x 1920 pixels resolution. The display is protecting from the unknown. Thirdly and most importantly, It is powered by the Qualcomm SM8350 Snapdragon 888 5G (5 nm) and runs with Android 11. Moreover, it has up to an Octa-core (1×2.84 GHz Kryo 680 & 3×2.42 GHz Kryo 680 & 4×1.80 GHz Kryo 680) CPU."
    },
    {
        id:13,
        title:'OnePlus Nord 2 CE',
        price: 'BDT. coming soon',
        img: 'https://www.mobiledokan.co/wp-content/uploads/2021/12/OnePlus-Nord-2-CE.jpg',
        desc:"OnePlus Nord 2 CE will be launched in December 2021. The Nord 2 CE launched with model number unknown. Firstly, Its dimensional measure is 160.2 x 73.2 x 7.5 mm and the weight is unknown grams. Secondly, the display of the Nord 2 CE is a 6.44-inch Fluid AMOLED panel with 1080 x 2400 pixels resolution. The display is protecting from the unknown. Thirdly and most importantly, It is powered by the MediaTek MT6877 Dimensity 900 5G (6 nm) and runs with Android 12. Moreover, it has up to an Octa-core (2×2.4 GHz Cortex-A78 & 6×2.0 GHz Cortex-A55) CPU."
    },
    {
        id:14,
        title:'Xiaomi Civi',
        price: '40,000',
        img: 'https://www.mobiledokan.co/wp-content/uploads/2021/09/Xiaomi-Civi-Pink.jpg',
        desc:"Xiaomi Civi will be launched in September 2021. The Xiaomi Civi was launched with a model number unknown. Firstly, Its dimensional measure is 7 mm and the weight is 166 grams. Secondly, the display of Civi is a 6.55-inch AMOLED panel with 1080 x 2400 pixels resolution. The display is protected with Corning Gorilla Glass 3. Thirdly and most importantly, It is powered by the Qualcomm SM7325 Snapdragon 778G 5G (6 nm) and running with Android 11. Moreover, it has up to an Octa-core (4×2.4 GHz Kryo 670 & 4×1.8 GHz Kryo 670) CPU."
    },
]
export default DATA;
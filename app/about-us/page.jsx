import Image from "next/image";
import UTPhoto from '@/public/store/UT-photo.jpg'

function AboutUs() {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Little Bit
                <span className="orange_gradient text-center capitalize"> - About Us</span>
            </h1>
            <div className="text-l mt-8">
                <p className="mb-4">At <strong>Urban Thread</strong>, we’re passionate about pushing the boundaries of fashion and self-expression. Our store is more than just a destination for modern clothing—it’s a lifestyle. We cater to fashion-forward individuals who seek high-quality, unique designs that resonate with their urban, dynamic lifestyles.</p>
                <p>From the streets of the world’s most iconic cities to the everyday hustle, our pieces are carefully curated to reflect a perfect blend of contemporary trends and timeless elegance. Every item you find at Urban Thread is selected with precision, ensuring that each fabric, cut, and design speaks to our philosophy of individuality and creativity.</p>
                <Image className="mx-auto my-8" src={UTPhoto} alt="Urban Threat" />
                <p className="mb-4">Our mission is simple: to inspire confidence through fashion. Whether you’re on a bold night out or just elevating your everyday wardrobe, Urban Thread has something for everyone. We believe in sustainable fashion, supporting designers who prioritize eco-friendly materials and ethical production processes.</p>
                <p className="mb-4"><strong>Urban Thread</strong> is where fashion meets technology. We utilize modern techniques and forward-thinking designs to offer collections that feel fresh and exciting. With each season, we introduce new styles that merge practicality with innovation, ensuring you stay ahead of the trends.</p>
                <h2 className="text-2xl font-bold my-8">Our Values:</h2>
                <ul className="pl-12 mb-8">
                    <li className="list-disc mb-4">Creativity: Celebrating individuality through cutting-edge fashion.</li>
                    <li className="list-disc mb-4">Quality: High standards of craftsmanship and sustainable materials.</li>
                    <li className="list-disc mb-4">Inclusion: Styles for everyone, without limitations.</li>
                    <li className="list-disc mb-4">Innovation: Merging technology with timeless design to create something unique.</li>
                </ul>
                <p className="mb-4">At <strong>Urban Thread</strong>, we believe that fashion should be accessible to everyone, which is why we offer a wide range of sizes and styles to suit all body types. Our collections are designed not only to look good but to feel good, using premium fabrics that provide both comfort and durability. We draw inspiration from urban landscapes, street culture, and the vibrant energy of city life to craft pieces that stand out. Sustainability is at the core of everything we do, and we are committed to minimizing our environmental impact through conscious production. Step into Urban Thread, where every piece is a reflection of modern sophistication and effortless cool.</p>
            </div>
        </section>
    );
}

export default AboutUs;